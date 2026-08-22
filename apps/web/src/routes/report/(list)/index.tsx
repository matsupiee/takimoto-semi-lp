import { Link, createFileRoute } from "@tanstack/react-router";

import { fetchReports } from "@/lib/microcms/server-fn/report";
import { pageHead } from "@/lib/site";
import Footer from "@/shared/_components/layout/footer";
import Header from "@/shared/_components/layout/header";
import PageContainer from "@/shared/_components/layout/page-container";
import ItemRow, { ItemRowList } from "@/shared/_components/item-row";
import SectionHeader from "@/shared/_components/section-header";

export const Route = createFileRoute("/report/(list)/")({
  component: ReportListPage,
  loader: async () => {
    const list = await fetchReports({ data: { limit: 100 } });
    return { reports: list.contents };
  },
  head: () =>
    pageHead({
      title: "政策分析レポート | 瀧本ゼミ政策分析パート",
      description: "瀧本ゼミ政策分析パートが公開してきた政策提言・分析レポートの一覧です。",
      path: "/report",
    }),
});

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function ReportListPage() {
  const { reports } = Route.useLoaderData();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <PageContainer width="default" className="py-12 md:py-16">
          <SectionHeader eyebrow="Report" title="政策分析レポート" as="h1" />
          <p className="mt-6 mb-10 max-w-2xl text-pretty text-base leading-jp-body md:mt-8 text-ink/80 md:text-lg">
            瀧本ゼミ政策分析パートの活動として公開してきた政策提言・分析レポートです。
            エビデンスに基づいた問題発見と解決の提案を掲載しています。
          </p>

          {reports.length === 0 ? (
            <p className="text-ink/70">まだレポート記事がありません。</p>
          ) : (
            // レポートは本文主体でサムネイルを持たないため、カードではなく
            // お知らせ・活動の成果と同じ罫線リストで並べる。件数に左右されず、
            // 長いタイトルを横幅いっぱいに使える。
            <ItemRowList>
              {reports.map((item) => (
                <li key={item.id}>
                  <Link
                    to="/report/$id"
                    params={{ id: item.id }}
                    className="block transition-colors hover:bg-ink/[0.03]"
                  >
                    <ItemRow
                      date={formatDate(item.publishedAt ?? item.updatedAt)}
                      title={item.title}
                      summary={item.summary}
                    />
                  </Link>
                </li>
              ))}
            </ItemRowList>
          )}
        </PageContainer>
      </main>
      <Footer />
    </div>
  );
}
