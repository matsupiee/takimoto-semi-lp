/**
 * サイト全体で使う定数。
 *
 * SITE_URL は OGP の絶対URL (og:url / og:image) に使われる公開URL。
 * apps/web/wrangler.jsonc の VITE_SERVER_URL / CORS_ORIGIN と同じ値に揃えること。
 */
export const SITE_URL = "https://tsemiseisaku.com";

export const SITE_NAME = "瀧本ゼミ政策分析パート";

export const SITE_DESCRIPTION =
  "瀧本ゼミ政策分析パートの公式サイトです。社会課題をリサーチし、実装可能な政策提言へと落とし込む学生主体の公共政策コミュニティです。";

/** OGP 画像。1200x630 で apps/web/public/images/og.jpg に配置。 */
export const OG_IMAGE_URL = `${SITE_URL}/images/og.jpg`;

type PageMetaInput = {
  title: string;
  description?: string;
};

/**
 * 各ルートの head() で使う meta 配列を組み立てる。
 * title / description に加えて、対応する OGP タグも一緒に出す。
 */
export function pageMeta({ title, description }: PageMetaInput) {
  return [
    { title },
    { property: "og:title", content: title },
    ...(description
      ? [
          { name: "description", content: description },
          { property: "og:description", content: description },
        ]
      : []),
  ];
}
