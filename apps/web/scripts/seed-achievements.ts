// microCMS の `achievements` エンドポイントに活動の成果サンプルを一括投入するスクリプト。
//
// 実行（リポジトリルート）: `bun --env-file=apps/web/.env apps/web/scripts/seed-achievements.ts`
// 必要な env: MICROCMS_SERVICE_DOMAIN, MICROCMS_API_KEY（書き込み権限つき）
//
// 既存と同じ内容でも重複登録されます。不要なら管理画面で削除してから流してください。

export {};

type AchievementCategory = "policy" | "collaboration" | "proposal";

type SeedAchievement = {
  title: string;
  /** microCMS の複数選択フィールドは配列で送る必要がある場合がある */
  category: AchievementCategory[];
  summary: string;
  achievedAt: string;
  externalLink?: string;
};

const items: SeedAchievement[] = [
  {
    category: ["policy"],
    title: "千葉県「AEDの普及と使用促進に関する条例」の制定",
    summary: "千葉県における「AEDの普及と使用促進に関する条例」の制定に関する取り組みの成果です。",
    achievedAt: "2024-03-01T00:00:00.000Z",
  },
  {
    category: ["collaboration"],
    title: "「換気と学力」— 換気と学力の関係を世界初のメタアナリシスで検証（建築学会発表）",
    summary:
      "換気が学力に与える効果を世界で初めてメタアナリシスで明らかにし、建築学会にて発表しました。",
    achievedAt: "2024-09-15T00:00:00.000Z",
  },
  {
    category: ["collaboration"],
    title: "「消火器の効果検証」— 東京理科大学連携による学会発表・日本初の効果実証",
    summary:
      "東京理科大学と連携し、消火器の被害低減効果に関する学会発表を行い、日本初の消火器設置の効果実証を報告しました。",
    achievedAt: "2024-06-01T00:00:00.000Z",
  },
  {
    category: ["policy"],
    title: "東京都世田谷区「傍観者に焦点を当てたいじめ対策プログラム」の導入",
    summary:
      "東京都世田谷区における、傍観者に焦点を当てたいじめ対策プログラムの導入に関する成果です。",
    achievedAt: "2023-11-01T00:00:00.000Z",
  },
  {
    category: ["policy"],
    title: "東京都中央区「ベビーシッター利用促進事業」の導入（約400万円規模）",
    summary:
      "東京都中央区におけるベビーシッター利用促進事業の導入。予算規模はおおよそ400万円です。",
    achievedAt: "2024-01-20T00:00:00.000Z",
  },
  {
    category: ["policy"],
    title: "東京都港区「認知症早期発見・早期対応推進策」の導入（約4,000万円規模）",
    summary:
      "東京都港区における認知症早期発見・早期対応推進策の導入。予算規模はおおよそ4,000万円です。",
    achievedAt: "2025-02-01T00:00:00.000Z",
  },
];

const serviceDomain = process.env.MICROCMS_SERVICE_DOMAIN;
const apiKey = process.env.MICROCMS_API_KEY;

if (!serviceDomain || !apiKey) {
  console.error("MICROCMS_SERVICE_DOMAIN と MICROCMS_API_KEY を環境変数に設定してください。");
  process.exit(1);
}

const endpoint = `https://${serviceDomain}.microcms.io/api/v1/achievements`;

let ok = 0;
let ng = 0;

for (const item of items) {
  const { title, category, summary, achievedAt, externalLink } = item;
  const body: Record<string, unknown> = {
    title,
    category,
    summary,
    achievedAt,
  };
  if (externalLink) body.externalLink = externalLink;

  const res = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-MICROCMS-API-KEY": apiKey,
    },
    body: JSON.stringify(body),
  });

  if (res.ok) {
    const json = (await res.json()) as { id: string };
    console.log(`✓ ${title}  →  id=${json.id}`);
    ok += 1;
  } else {
    const text = await res.text();
    console.error(`✗ ${title}\n  status=${res.status} body=${text}`);
    ng += 1;
  }
}

console.log(`\n登録完了: ${ok} 件 / 失敗: ${ng} 件`);
