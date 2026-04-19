// microCMS の `news` エンドポイントにサンプル記事を一括投入するスクリプト。
//
// 実行: `bun run apps/web/scripts/seed-news.ts`
// 必要な env: MICROCMS_SERVICE_DOMAIN, MICROCMS_API_KEY (書き込み権限つき)
//
// 既存の同タイトル記事は重複登録されます。重複防止が必要なら microCMS 管理画面で削除してから流してください。

export {};

type SeedNews = {
  category: string;
  mediaName: string;
  title: string;
  externalUrl: string;
  publishedAt: string;
};

const items: SeedNews[] = [
  {
    category: "メディア掲載",
    mediaName: "東大新聞オンライン",
    title: "小林鷹之氏に大学生が本気の公開政策提言【瀧本ゼミ政策分析パート五月祭イベントレポート】",
    externalUrl: "https://www.todaishimbun.org/tsemi_20251231/",
    publishedAt: "2025-12-31T00:00:00.000Z",
  },
  {
    category: "メディア掲載",
    mediaName: "東大新聞オンライン",
    title:
      "【前編】高島市長の鋭い指摘が飛んだ公開政策提言【瀧本ゼミ政策分析パート駒場祭イベントレポート】",
    externalUrl: "https://www.todaishimbun.org/takimotoevent1_20240626/",
    publishedAt: "2024-06-27T00:00:00.000Z",
  },
  {
    category: "メディア掲載",
    mediaName: "東大新聞オンライン",
    title:
      "【後編】高島市長の鋭い指摘が飛んだ公開政策提言【瀧本ゼミ政策分析パート駒場祭イベントレポート】",
    externalUrl: "https://www.todaishimbun.org/takimotoevent2_20240627/",
    publishedAt: "2024-06-28T00:00:00.000Z",
  },
  {
    category: "プレスリリース",
    mediaName: "日本政策創造基盤",
    title: "瀧本ゼミ駒場祭講演会2019 11月22日（金）10:00〜12:00 東京大学駒場キャンパス",
    externalUrl: "https://prtimes.jp/main/html/rd/p/000000007.000026044.html",
    publishedAt: "2019-11-01T00:00:00.000Z",
  },
];

const serviceDomain = process.env.MICROCMS_SERVICE_DOMAIN;
const apiKey = process.env.MICROCMS_API_KEY;

if (!serviceDomain || !apiKey) {
  console.error("MICROCMS_SERVICE_DOMAIN と MICROCMS_API_KEY を環境変数に設定してください。");
  process.exit(1);
}

const endpoint = `https://${serviceDomain}.microcms.io/api/v1/news`;

let ok = 0;
let ng = 0;

for (const item of items) {
  const res = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-MICROCMS-API-KEY": apiKey,
    },
    body: JSON.stringify(item),
  });

  if (res.ok) {
    const json = (await res.json()) as { id: string };
    console.log(`✓ ${item.title}  →  id=${json.id}`);
    ok += 1;
  } else {
    const text = await res.text();
    console.error(`✗ ${item.title}\n  status=${res.status} body=${text}`);
    ng += 1;
  }
}

console.log(`\n登録完了: ${ok} 件 / 失敗: ${ng} 件`);
