import { Link, createFileRoute, redirect } from "@tanstack/react-router";

import { fetchAnnouncement } from "@/lib/microcms/server-fn/announcement";
import Footer from "../../../shared/_components/layout/footer";
import Header from "../../../shared/_components/layout/header";

export const Route = createFileRoute("/announcement/(detail)/$id")({
  component: NewsDetailPage,
  loader: async ({ params }) => {
    const announcement = await fetchAnnouncement({ data: { id: params.id } });
    if (announcement.externalUrl) {
      throw redirect({ href: announcement.externalUrl });
    }
    return { announcement };
  },
  head: ({ loaderData }) => ({
    meta: loaderData ? [{ title: `${loaderData.announcement.title} | 滝本ゼミ` }] : [],
  }),
});

function NewsDetailPage() {
  const { announcement } = Route.useLoaderData();
  const publishedAtIso = announcement.publishedAt ?? announcement.updatedAt;
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
            to="/announcement"
            className="mb-8 inline-flex items-center text-[15px] text-[#1c2b33]/70 hover:underline"
          >
            ← お知らせ一覧へ
          </Link>

          <p className="mb-3 text-sm font-bold text-[#e60012]">{announcement.category}</p>
          <p className="mb-3 text-sm font-medium text-[#1c2b33]/70">
            {announcement.mediaName}
            {` ・ ${publishedAt}`}
          </p>
          <h1 className="mb-8 text-3xl font-semibold leading-tight text-[#1c2b33] md:text-5xl">
            {announcement.title}
          </h1>

          {announcement.body ? (
            <div
              className="prose prose-neutral max-w-none prose-headings:text-[#1c2b33] prose-a:text-[#1c2b33]"
              dangerouslySetInnerHTML={{ __html: announcement.body }}
            />
          ) : (
            <p className="text-[#1c2b33]/70">本文はありません。</p>
          )}
        </article>
      </main>
      <Footer />
    </div>
  );
}
