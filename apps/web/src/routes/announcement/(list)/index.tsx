import { createFileRoute } from "@tanstack/react-router";

import { fetchAnnouncements } from "@/lib/microcms/server-fn/announcement";
import Footer from "@/shared/_components/layout/footer";
import Header from "@/shared/_components/layout/header";
import MetaNews from "@/shared/_components/announcement";

export const Route = createFileRoute("/announcement/(list)/")({
  component: NewsListPage,
  loader: async () => {
    const list = await fetchAnnouncements({ data: { limit: 100 } });
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
      <Header />
      <main>
        <MetaNews items={news} />
      </main>
      <Footer />
    </div>
  );
}
