import { Link, createFileRoute, notFound, redirect } from "@tanstack/react-router";

import { fetchAnnouncement } from "@/lib/microcms/server-fn/announcement";
import { SITE_NAME, pageHead } from "@/lib/site";
import Footer from "../../../shared/_components/layout/footer";
import Header from "../../../shared/_components/layout/header";
import PageContainer from "@/shared/_components/layout/page-container";

export const Route = createFileRoute("/announcement/(detail)/$id")({
  component: NewsDetailPage,
  loader: async ({ params }) => {
    const announcement = await fetchAnnouncement({ data: { id: params.id } }).catch(() => {
      throw notFound();
    });
    if (announcement.externalUrl) {
      throw redirect({ href: announcement.externalUrl });
    }
    return { announcement };
  },
  head: ({ loaderData, params }) =>
    loaderData
      ? pageHead({
          title: `${loaderData.announcement.title} | ${SITE_NAME}`,
          path: `/announcement/${params.id}`,
        })
      : { meta: [], links: [] },
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
      <main>
        <PageContainer as="article" width="narrow" className="py-12 md:py-16">
          <Link
            to="/announcement"
            className="mb-8 inline-flex items-center text-[15px] text-ink/70 hover:underline"
          >
            ← お知らせ一覧へ
          </Link>

          <p className="mb-3 text-sm font-bold text-brand">{announcement.category}</p>
          <p className="mb-3 text-sm font-medium text-ink/70">
            {announcement.mediaName}
            {` ・ ${publishedAt}`}
          </p>
          <h1 className="mb-8 text-balance text-2xl font-semibold leading-jp-heading text-ink md:text-4xl">
            {announcement.title}
          </h1>

          {announcement.body ? (
            <div
              className="prose prose-neutral max-w-none prose-headings:text-ink prose-a:text-ink"
              dangerouslySetInnerHTML={{ __html: announcement.body }}
            />
          ) : (
            <p className="text-ink/70">本文はありません。</p>
          )}
        </PageContainer>
      </main>
      <Footer />
    </div>
  );
}
