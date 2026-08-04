import { Link, createFileRoute } from "@tanstack/react-router";

import { fetchInterviews } from "@/lib/microcms/server-fn/interview";
import { pageMeta } from "@/lib/site";
import Footer from "@/shared/_components/layout/footer";
import Header from "@/shared/_components/layout/header";
import PageContainer from "@/shared/_components/layout/page-container";
import SectionHeader from "@/shared/_components/section-header";
import { gridColsForCount, gridMaxWidthForCount } from "@/shared/_utils/grid";

export const Route = createFileRoute("/interview/(list)/")({
  component: InterviewListPage,
  loader: async () => {
    const list = await fetchInterviews({ data: { limit: 100 } });
    return { interviews: list.contents };
  },
  head: () => ({
    meta: pageMeta({
      title: "ゼミ生インタビュー | 瀧本ゼミ政策分析パート",
      description: "瀧本ゼミ政策分析パートで活動するゼミ生へのインタビュー記事です。",
    }),
  }),
});

function InterviewListPage() {
  const { interviews } = Route.useLoaderData();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <PageContainer width="default" className="py-12 md:py-16">
          <SectionHeader
            eyebrow="Interview"
            title="ゼミ生インタビュー"
            as="h1"
            align="center"
            className="mb-10"
          />

          {interviews.length === 0 ? (
            <p className="text-ink/70">まだインタビュー記事がありません。</p>
          ) : (
            <div
              className={`grid grid-cols-1 gap-6 ${gridColsForCount(interviews.length, 3)} ${gridMaxWidthForCount(interviews.length, 3)}`}
            >
              {interviews.map((item) => (
                <Link
                  key={item.id}
                  to="/interview/$id"
                  params={{ id: item.id }}
                  className="group flex flex-col overflow-hidden rounded-3xl bg-surface"
                >
                  <div className="aspect-[4/3] w-full overflow-hidden bg-ink/5">
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
                    <p className="text-sm font-medium text-ink/70">
                      {item.studentName}
                      {item.grade ? ` ・ ${item.grade}` : ""}
                    </p>
                    <p className="text-xl font-medium leading-snug text-ink">{item.title}</p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </PageContainer>
      </main>
      <Footer />
    </div>
  );
}
