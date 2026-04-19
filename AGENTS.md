# AGENTS.md

このリポジトリで作業する AI エージェント (Claude Code / Codex 等) 向けの規約。人間向けの README は `README.md` を参照。

## スタック

- ランタイム / PM: **Bun 1.3+**（npm/pnpm/yarn は使わない）
- モノレポ: **Turborepo**
- フロント: **TanStack Start** + React 19 + Tailwind v4 + shadcn/ui (`packages/ui`)
- Lint / Format: **oxlint + oxfmt**（ESLint/Prettier は導入しない）
- テスト: **Vitest**（`apps/web` のみ設定済み）
- デプロイ: Cloudflare via Alchemy

## コマンド

```bash
bun install               # 依存インストール
bun run dev               # 全アプリの dev
bun run dev:web           # web のみ
bun run check-types       # tsc --noEmit (全 workspace)
bun run check             # oxlint + oxfmt --write
bun run test              # vitest run (全 workspace)
bun run build             # 全 workspace ビルド
```

## ディレクトリ規約

- 共有 UI プリミティブは `packages/ui/src/components/` に。`apps/web` 固有の画面/ブロックは `apps/web/src/components/`。
- 環境変数スキーマは `packages/env`（t3-oss/env-core）に集約。アプリから直接 `process.env` を読まない。
- Cloudflare/Alchemy の IaC は `packages/infra/alchemy.run.ts`。

## コード変更時の運用フロー（必須）

**コードを 1 行でも変えたら、以下のフローに従う** — 直接 main にコミットしない。

1. 新ブランチ `<type>/<slug>` (例: `feat/harness-setup`, `fix/header-link`) を切る
2. 実装 → ローカル sensor を **全部** 緑にする: `bun run check-types && bun run check && bun run test && bun run build`
3. `git push -u origin <branch>`
4. `gh pr create` で PR を開く（タイトルは 70 文字未満、本文に Summary と Test plan）
5. `gh pr checks --watch` で CI 完了を待機
6. **セルフレビュー**: `/review` スキルで変更を監査。指摘が出たら修正して 2. へ戻る
7. CI 緑 + レビュー指摘無し → `gh pr merge --squash --delete-branch` で自動マージ

**一発起動**: `/ship "<要約>"` で 1〜7 を自動実行する。

### 自動マージを中断すべきケース

- セルフレビューで「要修正」が見つかった
- 差分が 500 行を超える（レビュー粒度として大きすぎ — 分割を検討）
- `.env` / 秘密情報らしき追加がある
- `main` への force push が必要になった

## 非自明な規約

- 設定変更 (turbo.json / package.json / .claude/settings.json) の際は `.claude/settings.json` の hook に影響していないか確認
- コミットメッセージは日本語可。型 (feat/fix/chore/refactor/docs) の prefix を推奨
