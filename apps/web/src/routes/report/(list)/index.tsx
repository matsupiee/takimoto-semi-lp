import { Link, createFileRoute } from "@tanstack/react-router";

import { fetchReports } from "@/lib/microcms/server-fn/report";
import Footer from "@/shared/_components/layout/footer";
import Header from "@/shared/_components/layout/header";

export const Route = createFileRoute("/report/(list)/")({
  component: ReportListPage,
  loader: async () => {
    const list = await fetchReports({ data: { limit: 100 } });
    return { reports: list.contents };
  },
  head: () => ({
    meta: [{ title: "政策分析レポート | 滝本ゼミ" }],
  }),
});

function ReportListPage() {
  const { reports } = Route.useLoaderData();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="px-6 py-16 md:px-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <h1 className="mb-6 text-3xl font-semibold text-[#1c2b33] md:text-5xl">
            政策分析レポート
          </h1>
          <p className="mb-10 max-w-3xl text-base text-[#1c2b33]/80 md:text-lg">
            瀧本ゼミ政策分析パートの活動として公開してきた政策提言・分析レポートです。
            エビデンスに基づいた問題発見と解決の提案を掲載しています。
          </p>

          {reports.length === 0 ? (
            <p className="text-[#1c2b33]/70">まだレポート記事がありません。</p>
          ) : (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
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
                    className="group flex flex-col overflow-hidden rounded-3xl bg-[#f8f9fb]"
                  >
                    <div className="aspect-[4/3] w-full overflow-hidden bg-[#1c2b33]/5">
                      {item.thumbnail?.url ? (
                        <img
                          src={`${item.thumbnail.url}?fit=crop&w=800&h=600`}
                          alt={item.title}
                          loading="lazy"
                          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                        />
                      ) : null}
                    </div>
                    <div className="flex flex-col gap-3 p-6 md:p-8">
                      <p className="text-sm font-medium text-[#1c2b33]/70">{publishedAt}</p>
                      <p className="text-xl font-medium leading-snug text-[#1c2b33]">
                        {item.title}
                      </p>
                      {item.summary ? (
                        <p className="line-clamp-3 text-sm text-[#1c2b33]/70">{item.summary}</p>
                      ) : null}
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
