import { Link, createFileRoute } from "@tanstack/react-router";

import { fetchInterview } from "@/lib/microcms/server-fn/interview";
import Footer from "@/shared/_components/layout/footer";
import Header from "@/shared/_components/layout/header";

export const Route = createFileRoute("/interview/(detail)/$id")({
  component: InterviewDetailPage,
  loader: async ({ params }) => {
    const interview = await fetchInterview({ data: { id: params.id } });
    return { interview };
  },
  head: ({ loaderData }) => ({
    meta: loaderData ? [{ title: `${loaderData.interview.title} | 滝本ゼミ` }] : [],
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
      <main className="px-6 py-16 md:px-16 md:py-24">
        <article className="mx-auto max-w-3xl">
          <Link
            to="/interview"
            className="mb-8 inline-flex items-center text-[15px] text-[#1c2b33]/70 hover:underline"
          >
            ← インタビュー一覧へ
          </Link>

          <p className="mb-3 text-sm font-medium text-[#1c2b33]/70">
            {interview.studentName}
            {interview.grade ? ` ・ ${interview.grade}` : ""}
            {` ・ ${publishedAt}`}
          </p>
          <h1 className="mb-8 text-3xl font-semibold leading-tight text-[#1c2b33] md:text-5xl">
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
            className="prose prose-neutral max-w-none prose-headings:text-[#1c2b33] prose-a:text-[#1c2b33]"
            dangerouslySetInnerHTML={{ __html: interview.body }}
          />
        </article>
      </main>
      <Footer />
    </div>
  );
}
