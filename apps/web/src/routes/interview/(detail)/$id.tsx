import { Link, createFileRoute, notFound } from "@tanstack/react-router";

import { fetchInterview } from "@/lib/microcms/server-fn/interview";
import { SITE_NAME, pageMeta } from "@/lib/site";
import Footer from "@/shared/_components/layout/footer";
import Header from "@/shared/_components/layout/header";
import PageContainer from "@/shared/_components/layout/page-container";

export const Route = createFileRoute("/interview/(detail)/$id")({
  component: InterviewDetailPage,
  loader: async ({ params }) => {
    const interview = await fetchInterview({ data: { id: params.id } }).catch(() => {
      throw notFound();
    });
    return { interview };
  },
  head: ({ loaderData }) => ({
    meta: loaderData ? pageMeta({ title: `${loaderData.interview.title} | ${SITE_NAME}` }) : [],
  }),
});

function InterviewDetailPage() {
  const { interview } = Route.useLoaderData();
  const publishedAtIso = interview.publishedAt ?? interview.updatedAt;
  const publishedAt = new Date(publishedAtIso).toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <PageContainer as="article" width="narrow" className="py-12 md:py-16">
          <Link
            to="/interview"
            className="mb-8 inline-flex items-center text-[15px] text-ink/70 hover:underline"
          >
            ← インタビュー一覧へ
          </Link>

          <p className="mb-3 text-sm font-medium text-ink/70">
            {interview.studentName}
            {interview.grade ? ` ・ ${interview.grade}` : ""}
            {` ・ ${publishedAt}`}
          </p>
          <h1 className="mb-8 text-balance text-2xl font-semibold leading-jp-heading text-ink md:text-4xl">
            {interview.title}
          </h1>

          {interview.thumbnail?.url ? (
            <div className="mb-10 aspect-[16/9] w-full overflow-hidden rounded-3xl">
              <img
                src={`${interview.thumbnail.url}?fit=crop&w=1600&h=900`}
                alt={interview.title}
                className="h-full w-full object-cover"
              />
            </div>
          ) : null}

          <div
            className="prose prose-neutral max-w-none prose-headings:text-ink prose-a:text-ink"
            dangerouslySetInnerHTML={{ __html: interview.body }}
          />
        </PageContainer>
      </main>
      <Footer />
    </div>
  );
}
