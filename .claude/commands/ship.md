---
description: 変更を PR にして CI→セルフレビュー→自動マージまで実行する
argument-hint: "<変更の 1 行要約>"
---

# /ship — PR to self-merge ワークフロー

ユーザー提供の要約: `$ARGUMENTS`

以下を **順序通り、各ステップ失敗時は即停止** で実行する。途中で止まった場合は、原因と次に必要な人間判断をユーザーに報告して終わる。

## 1. 差分把握

並列で実行:

- `git status`
- `git diff --stat`
- `git log --oneline -10`
- `git rev-parse --abbrev-ref HEAD`

差分が無ければ「変更なし」と報告して終了。

## 2. ブランチ準備

- 現在ブランチが `main` の場合: 新ブランチ `<type>/<slug>` を切る
  - `<type>` は変更内容から推定 (feat/fix/chore/refactor/docs/test)
  - `<slug>` は要約から kebab-case 化 (半角英数のみ、30 文字以下)
- 既にトピックブランチ上なら、そのまま続行

## 3. ローカル sensors (back-pressure)

以下を順次実行。**いずれか失敗したら停止** してエラーをユーザーに報告:

```bash
bun run check-types
bun run check           # oxlint + oxfmt --write
bun run test
bun run build
```

## 4. コミット

- 未コミット差分があれば: 意味のあるファイル群を `git add <files>` で個別に追加（`git add -A` は避ける）
- `git commit -m "<type>: <要約>"` — 1〜2 文。日本語可
- 複数論点が混ざっていたら分割コミットを検討

## 5. push + PR 作成

- `git push -u origin <branch>`
- `gh pr create --title "<type>: <要約>" --body "<HEREDOC>"`
  - タイトル 70 字以内
  - 本文: `## Summary` (1〜3 bullet) + `## Test plan` (チェックリスト)
- PR URL をユーザーに表示

## 6. CI 監視

```bash
gh pr checks --watch --fail-fast
```

- 緑: 次へ
- 赤: 失敗ログを `gh run view <id> --log-failed` で確認 → 原因をユーザーに報告して停止

## 7. セルフレビュー

`/review` スキル (リポジトリ組み込み) を呼ぶ。観点:

- 意図しない差分が混入していないか
- scope が要約と一致しているか (不要リファクタ / 無関係ファイル)
- 秘密情報 (`.env`, キー, トークン) が含まれていないか
- 破壊的変更やパフォーマンス懸念
- テスト/型の網羅

**何らかの指摘が出た場合は自動マージしない**。指摘と修正案をユーザーに報告して停止。

## 8. セーフガード

以下のいずれかに該当したら自動マージせず停止:

- 差分 (`git diff origin/main...HEAD --stat`) が **500 行超**
- `.env*` / `id_rsa` / `*.pem` / `*token*` / `*secret*` などの疑わしいパスが追加/変更
- base が `main` 以外 (通常はトピック → main なのでこれは異常)

## 9. 自動マージ

上のセーフガードとセルフレビューをクリアしたら:

```bash
gh pr merge --squash --delete-branch --auto
```

マージ完了後:

- `git checkout main && git pull --ff-only`
- 完了をユーザーに 1〜2 文で報告 (PR 番号 + URL)

## 出力の簡潔さ

各ステップ、成功時は 1 行で「OK」のみ。失敗時のみ詳細。最終成功報告は 2 文以内。
