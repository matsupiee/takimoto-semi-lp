import { createFileRoute } from "@tanstack/react-router";

import { fetchAnnouncements } from "@/lib/microcms/server-fn/announcement";
import { AnnouncementList } from "@/shared/_components/announcement";
import Footer from "@/shared/_components/layout/footer";
import Header from "@/shared/_components/layout/header";
import PageContainer from "@/shared/_components/layout/page-container";
import SectionHeader from "@/shared/_components/section-header";

export const Route = createFileRoute("/announcement/(list)/")({
  component: NewsListPage,
  loader: async () => {
    const list = await fetchAnnouncements({ data: { limit: 100 } });
    return { news: list.contents };
  },
  head: () => ({
    meta: [{ title: "お知らせ / プレスリリース | 瀧本ゼミ政策分析パート" }],
  }),
});

function NewsListPage() {
  const { news } = Route.useLoaderData();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <PageContainer as="section" className="py-12">
          <SectionHeader
            eyebrow="Announcement"
            title="お知らせ / プレスリリース"
            as="h1"
            accent="red"
          />
          <AnnouncementList items={news} className="mt-12 md:mt-20" />
        </PageContainer>
      </main>
      <Footer />
    </div>
  );
}
