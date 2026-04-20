import { Link, createFileRoute } from "@tanstack/react-router";

import { fetchReport } from "@/lib/microcms/server-fn/report";
import Footer from "@/shared/_components/layout/footer";
import Header from "@/shared/_components/layout/header";

export const Route = createFileRoute("/report/(detail)/$id")({
  component: ReportDetailPage,
  loader: async ({ params }) => {
    const report = await fetchReport({ data: { id: params.id } });
    return { report };
  },
  head: ({ loaderData }) => ({
    meta: loaderData ? [{ title: `${loaderData.report.title} | 瀧本ゼミ政策分析パート` }] : [],
  }),
});

function ReportDetailPage() {
  const { report } = Route.useLoaderData();
  const publishedAtIso = report.publishedAt ?? report.updatedAt;
  const publishedAt = new Date(publishedAtIso).toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="px-6 py-16 md:px-16 md:py-24">
        <article className="mx-auto max-w-3xl">
          <Link
            to="/report"
            className="mb-8 inline-flex items-center text-[15px] text-[#1c2b33]/70 hover:underline"
          >
            ← レポート一覧へ
          </Link>

          <p className="mb-3 text-sm font-medium text-[#1c2b33]/70">{publishedAt}</p>
          <h1 className="mb-8 text-3xl font-semibold leading-tight text-[#1c2b33] md:text-5xl">
            {report.title}
          </h1>

          {report.thumbnail?.url ? (
            <div className="mb-10 aspect-[16/9] w-full overflow-hidden rounded-3xl">
              <img
                src={`${report.thumbnail.url}?fit=crop&w=1600&h=900`}
                alt={report.title}
                className="h-full w-full object-cover"
              />
            </div>
          ) : null}

          <div
            className="prose prose-neutral max-w-none prose-headings:text-[#1c2b33] prose-a:text-[#1c2b33]"
            dangerouslySetInnerHTML={{ __html: report.body }}
          />
        </article>
      </main>
      <Footer />
    </div>
  );
}
