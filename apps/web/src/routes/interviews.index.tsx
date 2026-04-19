import { Link, createFileRoute } from "@tanstack/react-router";

import MetaFooter from "../components/meta-footer";
import MetaHeader from "../components/meta-header";
import { fetchInterviews } from "../lib/microcms";

export const Route = createFileRoute("/interviews/")({
  component: InterviewListPage,
  loader: async () => {
    const list = await fetchInterviews({ data: { limit: 100 } });
    return { interviews: list.contents };
  },
  head: () => ({
    meta: [{ title: "ゼミ生インタビュー | 滝本ゼミ" }],
  }),
});

function InterviewListPage() {
  const { interviews } = Route.useLoaderData();

  return (
    <div className="min-h-screen bg-white">
      <MetaHeader />
      <main className="px-6 py-16 md:px-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <h1 className="mb-10 text-3xl font-semibold text-[#1c2b33] md:text-5xl">
            ゼミ生インタビュー
          </h1>

          {interviews.length === 0 ? (
            <p className="text-[#1c2b33]/70">まだインタビュー記事がありません。</p>
          ) : (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {interviews.map((item) => (
                <Link
                  key={item.id}
                  to="/interviews/$id"
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
                    <p className="text-sm font-medium text-[#1c2b33]/70">
                      {item.studentName}
                      {item.grade ? ` ・ ${item.grade}` : ""}
                    </p>
                    <p className="text-xl font-medium leading-snug text-[#1c2b33]">
                      {item.title}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </main>
      <MetaFooter />
    </div>
  );
}
