import { createFileRoute } from "@tanstack/react-router";

import { pageHead } from "@/lib/site";

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
  head: () =>
    pageHead({
      title: "お知らせ / プレスリリース | 瀧本ゼミ政策分析パート",
      description: "瀧本ゼミ政策分析パートからのお知らせ・プレスリリースの一覧です。",
      path: "/announcement",
    }),
});

function NewsListPage() {
  const { news } = Route.useLoaderData();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <PageContainer as="section" width="default" className="py-12 md:py-16">
          <SectionHeader
            eyebrow="Announcement"
            title="お知らせ / プレスリリース"
            as="h1"
            accent="red"
          />
          <AnnouncementList items={news} className="mt-6 md:mt-8" />
        </PageContainer>
      </main>
      <Footer />
    </div>
  );
}
