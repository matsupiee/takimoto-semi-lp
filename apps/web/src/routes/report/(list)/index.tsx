import { Link, createFileRoute } from "@tanstack/react-router";

import { fetchReports } from "@/lib/microcms/server-fn/report";
import { pageMeta } from "@/lib/site";
import Footer from "@/shared/_components/layout/footer";
import Header from "@/shared/_components/layout/header";
import PageContainer from "@/shared/_components/layout/page-container";
import ArrowLink from "@/shared/_components/arrow-link";
import SectionHeader from "@/shared/_components/section-header";
import { gridColsForCount, gridMaxWidthForCount } from "@/shared/_utils/grid";

export const Route = createFileRoute("/report/(list)/")({
  component: ReportListPage,
  loader: async () => {
    const list = await fetchReports({ data: { limit: 100 } });
    return { reports: list.contents };
  },
  head: () => ({
    meta: pageMeta({
      title: "政策分析レポート | 瀧本ゼミ政策分析パート",
      description: "瀧本ゼミ政策分析パートが公開してきた政策提言・分析レポートの一覧です。",
    }),
  }),
});

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
            <div
              className={`grid grid-cols-1 gap-6 ${gridColsForCount(reports.length, 3)} ${gridMaxWidthForCount(reports.length, 3)}`}
            >
              {reports.map((item) => {
                const publishedAtIso = item.publishedAt ?? item.updatedAt;
                const publishedAt = new Date(publishedAtIso).toLocaleDateString("ja-JP", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                });
                return (
                  <Link
                    key={item.id}
                    to="/report/$id"
                    params={{ id: item.id }}
                    className="group flex h-full flex-col"
                  >
                    <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl bg-ink/5">
                      {item.thumbnail?.url ? (
                        <img
                          src={`${item.thumbnail.url}?fit=crop&w=800&h=600`}
                          alt={item.title}
                          loading="lazy"
                          className="h-full w-full object-cover"
                        />
                      ) : null}
                    </div>
                    <p className="mt-5 text-sm font-medium text-ink/60">{publishedAt}</p>
                    <p className="mt-2 text-lg font-semibold leading-jp-heading text-ink md:text-xl">
                      {item.title}
                    </p>
                    {item.summary ? (
                      <p className="mt-2 line-clamp-3 text-sm leading-jp-body text-ink/70">
                        {item.summary}
                      </p>
                    ) : null}
                    <span className="mt-auto pt-4">
                      <ArrowLink label="詳しく見る" />
                    </span>
                  </Link>
                );
              })}
            </div>
          )}
        </PageContainer>
      </main>
      <Footer />
    </div>
  );
}
