import { createFileRoute } from "@tanstack/react-router";

import MetaFooter from "../components/meta-footer";
import MetaHeader from "../components/meta-header";
import MetaNews from "../components/meta-news";
import { fetchNewsList } from "../lib/microcms";

export const Route = createFileRoute("/news/")({
  component: NewsListPage,
  loader: async () => {
    const list = await fetchNewsList({ data: { limit: 100 } });
    return { news: list.contents };
  },
  head: () => ({
    meta: [{ title: "お知らせ / プレスリリース | 滝本ゼミ" }],
  }),
});

function NewsListPage() {
  const { news } = Route.useLoaderData();

  return (
    <div className="min-h-screen bg-white">
      <MetaHeader />
      <main>
        <MetaNews items={news} />
      </main>
      <MetaFooter />
    </div>
  );
}
