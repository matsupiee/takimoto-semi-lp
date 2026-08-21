import { Link, createFileRoute } from "@tanstack/react-router";

import { fetchInterviews } from "@/lib/microcms/server-fn/interview";
import { pageMeta } from "@/lib/site";
import Footer from "@/shared/_components/layout/footer";
import Header from "@/shared/_components/layout/header";
import PageContainer from "@/shared/_components/layout/page-container";
import ArrowLink from "@/shared/_components/arrow-link";
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
          <SectionHeader eyebrow="Interview" title="ゼミ生インタビュー" as="h1" className="mb-10" />

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
                  className="group flex h-full flex-col"
                >
                  {item.thumbnail?.url ? (
                    <div className="mb-5 aspect-[4/3] w-full overflow-hidden rounded-2xl bg-ink/5">
                      <img
                        src={`${item.thumbnail.url}?fit=crop&w=800&h=600`}
                        alt={item.title}
                        loading="lazy"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ) : null}
                  <p className="text-sm font-medium text-ink/60">
                    {item.studentName}
                    {item.grade ? ` ・ ${item.grade}` : ""}
                  </p>
                  <p className="mt-2 text-lg font-semibold leading-jp-heading text-ink md:text-xl">
                    {item.title}
                  </p>
                  <span className="mt-auto pt-4">
                    <ArrowLink label="詳しく見る" />
                  </span>
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
