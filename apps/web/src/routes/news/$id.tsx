import { Link, createFileRoute, redirect } from "@tanstack/react-router";

import { fetchNews } from "../../lib/microcms";
import MetaFooter from "../../shared/_components/meta-footer";
import MetaHeader from "../../shared/_components/meta-header";

export const Route = createFileRoute("/news/$id")({
  component: NewsDetailPage,
  loader: async ({ params }) => {
    const news = await fetchNews({ data: { id: params.id } });
    if (news.externalUrl) {
      throw redirect({ href: news.externalUrl });
    }
    return { news };
  },
  head: ({ loaderData }) => ({
    meta: loaderData ? [{ title: `${loaderData.news.title} | 滝本ゼミ` }] : [],
  }),
});

function NewsDetailPage() {
  const { news } = Route.useLoaderData();
  const publishedAt = new Date(news.publishedAt).toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="min-h-screen bg-white">
      <MetaHeader />
      <main className="px-6 py-16 md:px-16 md:py-24">
        <article className="mx-auto max-w-3xl">
          <Link
            to="/news"
            className="mb-8 inline-flex items-center text-[15px] text-[#1c2b33]/70 hover:underline"
          >
            ← お知らせ一覧へ
          </Link>

          <p className="mb-3 text-sm font-bold text-[#e60012]">{news.category}</p>
          <p className="mb-3 text-sm font-medium text-[#1c2b33]/70">
            {news.mediaName}
            {` ・ ${publishedAt}`}
          </p>
          <h1 className="mb-8 text-3xl font-semibold leading-tight text-[#1c2b33] md:text-5xl">
            {news.title}
          </h1>

          {news.body ? (
            <div
              className="prose prose-neutral max-w-none prose-headings:text-[#1c2b33] prose-a:text-[#1c2b33]"
              dangerouslySetInnerHTML={{ __html: news.body }}
            />
          ) : (
            <p className="text-[#1c2b33]/70">本文はありません。</p>
          )}
        </article>
      </main>
      <MetaFooter />
    </div>
  );
}
