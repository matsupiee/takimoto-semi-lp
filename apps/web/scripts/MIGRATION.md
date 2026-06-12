# microCMS 接続先の移行手順

旧 microCMS サービスから新 microCMS サービスへコンテンツを移し、アプリの接続先を切り替えるための手順。
移行スクリプトは [`migrate-microcms.ts`](./migrate-microcms.ts)。

## 移行されるもの / されないもの

| 項目                                            | 挙動                                                                                        |
| ----------------------------------------------- | ------------------------------------------------------------------------------------------- |
| コンテンツ ID                                   | ✅ 引き継ぐ（`PUT /{endpoint}/{id}`）。`/report/$id` などの詳細 URL が維持される。          |
| 本文・各フィールド                              | ✅ そのままコピー。                                                                         |
| 画像（thumbnail / profileImage / 本文埋め込み） | ✅ 管理キーがあれば新サービスへ再アップロード。無ければ旧 CDN の URL を参照（表示は維持）。 |
| `achievements` の `achievedAt`                  | ✅ 独自フィールドのため保持。                                                               |
| `publishedAt` / `createdAt`                     | ⚠️ システム項目で書き込み API から指定不可。**移行実行日時になる**（下記の注意参照）。      |
| 下書き（未公開）コンテンツ                      | ❌ Content API は公開済みのみ返すため移行されない。                                         |

### 公開日（publishedAt）についての注意

`reports` / `interviews` / `announcements` は `publishedAt` を表示・並び替えに使う。
書き込み API では `publishedAt` を指定できないため、移行先では全件が移行実行日時になる。
スクリプトは **古い順に書き込む**ことで `-publishedAt` の相対的な並び順だけは維持する。
表示される「日付」そのものまで保持したい場合は、独自の日付フィールドを追加するか、microCMS 公式の
CSV/JSON インポート機能の利用を検討すること。`achievements` は `achievedAt` を使うため影響を受けない。

対象エンドポイント: `announcements`, `interviews`, `members`, `reports`, `achievements`
（`apps/web/src/lib/microcms/server-fn/` と一致）。

---

## 手順

### 1. 新サービスを作成し、API スキーマを移植する

1. microCMS 管理画面で新しいサービスを作成する。
2. 旧サービスで各 API の **「API設定 → スキーマ → エクスポート」** から JSON を取得する。
3. 新サービスで **「APIを作る → インポート」** に同じ JSON を読み込み、上記 5 エンドポイントを
   **同じ API（エンドポイント）名・同じフィールド ID** で作成する。
   - スクリプトはフィールド名をそのまま送るため、フィールド ID が一致していないと書き込みに失敗する。

### 2. API キーを用意する

- **旧サービス**: `GET` 権限つきキー（読み取り用）。
- **新サービス**: `GET` + `PUT`（＝ POST/PUT）権限つき **Content API キー**。
- **新サービス（任意）**: 画像を再アップロードするなら **Management API キー**（メディアの `POST` 権限つき）。
  - 未設定でも移行は可能。その場合、画像は旧サービスの CDN（`images.microcms-assets.io`）を参照し続ける。
    旧サービスを残すなら表示は問題ないが、旧サービスを削除すると画像が切れる点に注意。

各キーは管理画面の **「サービス設定 → APIキー」** で権限を絞って発行する。

### 3. 環境変数を設定する

```bash
cp apps/web/.env.migrate.example apps/web/.env.migrate
# エディタで apps/web/.env.migrate を開き、各値を埋める
```

`.env.migrate` は `.gitignore` 済み（コミットしないこと）。

### 4. ドライランで確認する

書き込みを行わず、件数と送信フィールドだけ確認する。

```bash
cd apps/web
bun --env-file=.env.migrate scripts/migrate-microcms.ts --dry-run
```

少数だけ試すこともできる:

```bash
bun --env-file=.env.migrate scripts/migrate-microcms.ts --endpoints=reports --limit=1
```

### 5. 本番移行を実行する

```bash
cd apps/web
bun --env-file=.env.migrate scripts/migrate-microcms.ts
```

末尾の「移行結果」で各エンドポイントの 成功 / 失敗 / 合計 を確認する。失敗があれば終了コード 1 で終わる。
**冪等**（ID 指定の PUT）なので、失敗時はそのまま再実行してよい。

### 6. 移行先を検証する

- 新サービスの管理画面で各エンドポイントの件数・本文・画像を確認する。
- 一時的に新サービスを向けてローカルでアプリを起動し、表示を確認する（手順 7 を `.dev.vars` で行ってから `bun run dev:web`）。

### 7. アプリの接続先を切り替える

1. **本番（Cloudflare Workers）のサービスドメイン** — `apps/web/wrangler.jsonc` の `vars.MICROCMS_SERVICE_DOMAIN` を新ドメインに更新する。

   ```jsonc
   "vars": {
     // ...
     "MICROCMS_SERVICE_DOMAIN": "<新しいサービスドメイン>",
   }
   ```

2. **本番の API キー（シークレット）** — 新サービスの Content API キーをアップロードする。

   ```bash
   cd apps/web
   bunx wrangler secret put MICROCMS_API_KEY
   ```

3. **ローカル開発** — `apps/web/.dev.vars` を新サービスの値に更新する（`MICROCMS_SERVICE_DOMAIN` は
   `wrangler.jsonc` の `vars` から読まれるので、`.dev.vars` には `MICROCMS_API_KEY` 等を設定）。

4. デプロイ:

   ```bash
   cd apps/web
   bun run deploy
   ```

### 8. 後片付け

- 表示・リンク・画像に問題がないことを本番で確認する。
- 問題なければ旧サービスは一定期間残し（画像の参照切れ対策）、安定後に削除を検討する。
- `.env.migrate` を削除する。

---

## スクリプトのフラグ一覧

| フラグ            | 説明                                                            |
| ----------------- | --------------------------------------------------------------- |
| `--dry-run`       | 書き込まず、対象件数と送信フィールドのみ表示。                  |
| `--endpoints=a,b` | 対象エンドポイントを限定（例: `--endpoints=reports,members`）。 |
| `--limit=N`       | 各エンドポイントの先頭 N 件だけ処理（動作確認用）。             |
| `--skip-media`    | 画像の再アップロードを無効化（旧 CDN の URL を保持）。          |
