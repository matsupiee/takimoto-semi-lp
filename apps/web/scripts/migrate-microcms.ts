// 旧 microCMS サービスから新 microCMS サービスへ全コンテンツを移行するスクリプト。
//
// 読み込み: 旧サービスの Content API (GET)。書き込み: 新サービスの Content API (PUT)。
// コンテンツ ID を引き継いで PUT するため、`/report/$id` などの詳細ページ URL が維持される。
// 画像 (thumbnail / profileImage / 本文 HTML 内の <img>) は、新サービスの管理用 API キーが
// 与えられていれば Management API でメディアライブラリへ再アップロードする。無ければ旧サービスの
// 共有 CDN (images.microcms-assets.io) の URL をそのまま参照する（表示は維持される）。
//
// 必要な環境変数:
//   OLD_MICROCMS_SERVICE_DOMAIN          旧サービスドメイン（例: 18ecz4av20）
//   OLD_MICROCMS_API_KEY                 旧サービスの GET 権限つき API キー
//   NEW_MICROCMS_SERVICE_DOMAIN          新サービスドメイン
//   NEW_MICROCMS_API_KEY                 新サービスの GET+PUT(POST) 権限つき Content API キー
//   NEW_MICROCMS_MANAGEMENT_API_KEY      （任意）新サービスの Management API キー。画像再アップロード用。
//
// 実行例（apps/web から）:
//   bun --env-file=.env.migrate scripts/migrate-microcms.ts --dry-run
//   bun --env-file=.env.migrate scripts/migrate-microcms.ts
//
// フラグ:
//   --dry-run               書き込みを行わず、対象件数と送信フィールドだけ表示
//   --endpoints=a,b         対象エンドポイントを限定（例: --endpoints=reports,members）
//   --limit=N               各エンドポイントの先頭 N 件だけ処理（動作確認用）
//   --skip-media            画像の再アップロードを無効化（旧 CDN の URL を保持）
//
// 注意（公開日について）:
//   publishedAt / createdAt は microCMS のシステム管理項目で、Content API の書き込みでは
//   指定できない。このため移行先では publishedAt が「移行を実行した日時」になる。
//   reports / interviews / announcements は publishedAt を表示・並び替えに使うため、
//   相対的な並び順を保つように「古い順」で書き込む。絶対的な公開日まで保持したい場合は
//   独自の日付フィールドを追加するか、microCMS 公式の CSV/JSON インポートを検討すること。
//   achievements は独自フィールド achievedAt を表示に使うため影響を受けない。

import { createManagementClient } from "microcms-js-sdk";

// ===== 型定義 =====

type MicroCMSImage = { url: string; height?: number; width?: number };

type MicroCMSListItem = {
  id: string;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
  revisedAt?: string;
  [key: string]: unknown;
};

type MicroCMSListResponse = {
  contents: MicroCMSListItem[];
  totalCount: number;
  offset: number;
  limit: number;
};

type EndpointConfig = {
  /** Content API のエンドポイント名 */
  endpoint: string;
  /** MicroCMSImage 型のトップレベル画像フィールド */
  imageFields: string[];
  /** <img> を含みうるリッチエディタ / HTML フィールド */
  htmlFields: string[];
  /** publishedAt の並び順を維持するため古い順で書き込むか */
  orderByPublishedAt: boolean;
};

// ===== 移行対象（apps/web の server-fn と一致させる）=====

const ENDPOINTS: EndpointConfig[] = [
  {
    endpoint: "announcements",
    imageFields: ["thumbnail"],
    htmlFields: ["body"],
    orderByPublishedAt: true,
  },
  {
    endpoint: "interviews",
    imageFields: ["thumbnail"],
    htmlFields: ["body"],
    orderByPublishedAt: true,
  },
  { endpoint: "members", imageFields: ["profileImage"], htmlFields: [], orderByPublishedAt: false },
  {
    endpoint: "reports",
    imageFields: ["thumbnail"],
    htmlFields: ["body"],
    orderByPublishedAt: true,
  },
  {
    endpoint: "achievements",
    imageFields: ["thumbnail"],
    htmlFields: [],
    orderByPublishedAt: false,
  },
];

// 書き込み時に送らない（移行先で自動採番される）システムフィールド
const SYSTEM_FIELDS: readonly string[] = [
  "id",
  "createdAt",
  "updatedAt",
  "publishedAt",
  "revisedAt",
];

const ASSET_HOST = "images.microcms-assets.io";
const ASSET_URL_REGEX = /https:\/\/images\.microcms-assets\.io\/[^\s"')]+/g;

// ===== 環境変数 / フラグ =====

function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    console.error(`環境変数 ${name} が未設定です。`);
    process.exit(1);
  }
  return value;
}

const OLD_DOMAIN = requireEnv("OLD_MICROCMS_SERVICE_DOMAIN");
const OLD_KEY = requireEnv("OLD_MICROCMS_API_KEY");
const NEW_DOMAIN = requireEnv("NEW_MICROCMS_SERVICE_DOMAIN");
const NEW_KEY = requireEnv("NEW_MICROCMS_API_KEY");
const NEW_MGMT_KEY = process.env.NEW_MICROCMS_MANAGEMENT_API_KEY;

const args = process.argv.slice(2);
const DRY_RUN = args.includes("--dry-run");
const SKIP_MEDIA = args.includes("--skip-media") || !NEW_MGMT_KEY;

const endpointsArg = args.find((a) => a.startsWith("--endpoints="));
const ONLY_ENDPOINTS = endpointsArg ? endpointsArg.split("=")[1].split(",") : null;

const limitArg = args.find((a) => a.startsWith("--limit="));
const ITEM_LIMIT = limitArg ? Number(limitArg.split("=")[1]) : Number.POSITIVE_INFINITY;

const mgmtClient =
  !SKIP_MEDIA && NEW_MGMT_KEY
    ? createManagementClient({ serviceDomain: NEW_DOMAIN, apiKey: NEW_MGMT_KEY })
    : null;

// ===== 画像の再アップロード =====

const mediaUrlCache = new Map<string, string>(); // 旧URL -> 新URL

async function reuploadAsset(oldUrl: string): Promise<string> {
  if (!mgmtClient) return oldUrl; // 管理キー無し: 旧 CDN をそのまま参照
  const cached = mediaUrlCache.get(oldUrl);
  if (cached) return cached;
  try {
    const { url } = await mgmtClient.uploadMedia({ data: new URL(oldUrl) });
    mediaUrlCache.set(oldUrl, url);
    return url;
  } catch (error) {
    console.warn(`  ⚠ 画像の再アップロードに失敗。旧URLを保持: ${oldUrl}\n    ${String(error)}`);
    mediaUrlCache.set(oldUrl, oldUrl);
    return oldUrl;
  }
}

async function rewriteHtmlAssets(html: string): Promise<string> {
  const urls = [...new Set(html.match(ASSET_URL_REGEX) ?? [])];
  let result = html;
  for (const oldUrl of urls) {
    const newUrl = await reuploadAsset(oldUrl);
    if (newUrl !== oldUrl) result = result.split(oldUrl).join(newUrl);
  }
  return result;
}

// ===== コンテンツの整形 =====

async function buildWriteBody(
  item: MicroCMSListItem,
  config: EndpointConfig,
): Promise<Record<string, unknown>> {
  const body: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(item)) {
    if (SYSTEM_FIELDS.includes(key)) continue;
    body[key] = value;
  }

  // 画像フィールド: 書き込み API は URL 文字列を受け取る
  for (const field of config.imageFields) {
    const image = body[field] as MicroCMSImage | undefined;
    if (image && typeof image === "object" && typeof image.url === "string") {
      body[field] = await reuploadAsset(image.url);
    }
  }

  // HTML フィールド内の埋め込み画像
  for (const field of config.htmlFields) {
    const html = body[field];
    if (typeof html === "string" && html.includes(ASSET_HOST)) {
      body[field] = await rewriteHtmlAssets(html);
    }
  }

  return body;
}

// ===== 旧サービスからの取得 / 新サービスへの書き込み =====

async function fetchAll(endpoint: string): Promise<MicroCMSListItem[]> {
  const all: MicroCMSListItem[] = [];
  const pageSize = 100;
  let offset = 0;
  for (;;) {
    const url = `https://${OLD_DOMAIN}.microcms.io/api/v1/${endpoint}?limit=${pageSize}&offset=${offset}`;
    const res = await fetch(url, { headers: { "X-MICROCMS-API-KEY": OLD_KEY } });
    if (!res.ok) {
      throw new Error(`GET ${endpoint} 失敗: status=${res.status} body=${await res.text()}`);
    }
    const json = (await res.json()) as MicroCMSListResponse;
    all.push(...json.contents);
    offset += pageSize;
    if (offset >= json.totalCount || json.contents.length === 0) break;
  }
  return all;
}

async function putContent(
  endpoint: string,
  id: string,
  body: Record<string, unknown>,
): Promise<void> {
  const url = `https://${NEW_DOMAIN}.microcms.io/api/v1/${endpoint}/${id}`;
  const res = await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "X-MICROCMS-API-KEY": NEW_KEY,
    },
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    throw new Error(`PUT ${endpoint}/${id} 失敗: status=${res.status} body=${await res.text()}`);
  }
}

// ===== エンドポイント単位の移行 =====

type EndpointResult = { endpoint: string; ok: number; ng: number; total: number };

async function migrateEndpoint(config: EndpointConfig): Promise<EndpointResult> {
  console.log(`\n=== ${config.endpoint} ===`);
  let items = await fetchAll(config.endpoint);

  // publishedAt の並び順を維持するため古い順に書き込む
  if (config.orderByPublishedAt) {
    items.sort((a, b) => {
      const da = new Date(a.publishedAt ?? a.createdAt ?? 0).getTime();
      const db = new Date(b.publishedAt ?? b.createdAt ?? 0).getTime();
      return da - db;
    });
  }

  if (Number.isFinite(ITEM_LIMIT)) items = items.slice(0, ITEM_LIMIT);

  console.log(`取得: ${items.length} 件`);

  let ok = 0;
  let ng = 0;
  for (const item of items) {
    const body = await buildWriteBody(item, config);
    if (DRY_RUN) {
      console.log(
        `  [dry-run] PUT ${config.endpoint}/${item.id}  fields=${Object.keys(body).join(",")}`,
      );
      ok += 1;
      continue;
    }
    try {
      await putContent(config.endpoint, item.id, body);
      console.log(`  ✓ ${config.endpoint}/${item.id}`);
      ok += 1;
    } catch (error) {
      console.error(`  ✗ ${config.endpoint}/${item.id}\n    ${String(error)}`);
      ng += 1;
    }
  }

  return { endpoint: config.endpoint, ok, ng, total: items.length };
}

// ===== エントリポイント =====

const targets = ENDPOINTS.filter((e) => !ONLY_ENDPOINTS || ONLY_ENDPOINTS.includes(e.endpoint));

console.log("microCMS 移行スクリプト");
console.log(`  FROM: ${OLD_DOMAIN}.microcms.io`);
console.log(`  TO:   ${NEW_DOMAIN}.microcms.io`);
console.log(`  対象: ${targets.map((t) => t.endpoint).join(", ")}`);
console.log(`  画像再アップロード: ${SKIP_MEDIA ? "スキップ（旧URLを保持）" : "有効"}`);
console.log(`  モード: ${DRY_RUN ? "DRY-RUN（書き込みなし）" : "本番書き込み"}`);

if (SKIP_MEDIA && !NEW_MGMT_KEY) {
  console.warn(
    "\n⚠ NEW_MICROCMS_MANAGEMENT_API_KEY が未設定のため、画像は旧サービスの CDN を参照したまま移行します。",
  );
}

const results: EndpointResult[] = [];
for (const config of targets) {
  try {
    results.push(await migrateEndpoint(config));
  } catch (error) {
    // 取得失敗（認証 / ドメイン誤り等）。他のエンドポイントは続行する。
    console.error(`  ✗ ${config.endpoint} の取得に失敗しました。\n    ${String(error)}`);
    results.push({ endpoint: config.endpoint, ok: 0, ng: 1, total: 0 });
  }
}

console.log("\n===== 移行結果 =====");
for (const r of results) {
  console.log(`  ${r.endpoint}: 成功 ${r.ok} / 失敗 ${r.ng} / 合計 ${r.total}`);
}

const totalNg = results.reduce((sum, r) => sum + r.ng, 0);
if (totalNg > 0) {
  console.error(`\n失敗が ${totalNg} 件あります。`);
  process.exit(1);
}
console.log("\n完了。");
