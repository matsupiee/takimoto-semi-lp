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

/** <title> と og:title の既定値。トップページと __root.tsx で共有する */
export const SITE_TITLE = `${SITE_NAME} | 社会課題を政策として考える学生主体の公共政策コミュニティ`;

/**
 * OGP 画像。1200x630 で apps/web/public/images/ に配置。
 *
 * 差し替えるときはファイル名も変えること。SNS は URL 単位で画像を
 * キャッシュするため、同じ URL のまま中身だけ替えても、しばらく古い画像が
 * 表示され続ける。
 */
export const OG_IMAGE_URL = `${SITE_URL}/images/og-card.jpg`;

type PageHeadInput = {
  title: string;
  description?: string;
  /**
   * サイトルートからのパス（例 "/about"）。og:url と canonical に使う。
   * 省略した場合はどちらも出さず、__root.tsx の og:url が残る。
   */
  path?: string;
};

/**
 * 各ルートの head() が返す { meta, links } を組み立てる。
 *
 * og:url と canonical を必ずページ自身の URL にすること。__root.tsx の
 * og:url はサイトURL固定なので、上書きしないと下層ページを共有しても
 * トップページとして扱われる。twitter:* も同様の理由で毎回上書きする
 * （X は og:title より twitter:title を優先するため、ルートの値が残ると
 * どのページを共有してもトップのタイトルが出る）。
 */
export function pageHead({ title, description, path }: PageHeadInput) {
  const url = path ? `${SITE_URL}${path}` : undefined;

  return {
    meta: [
      { title },
      { property: "og:title", content: title },
      { name: "twitter:title", content: title },
      ...(url ? [{ property: "og:url", content: url }] : []),
      ...(description
        ? [
            { name: "description", content: description },
            { property: "og:description", content: description },
            { name: "twitter:description", content: description },
          ]
        : []),
    ],
    links: url ? [{ rel: "canonical", href: url }] : [],
  };
}
