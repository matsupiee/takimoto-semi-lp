import { createFileRoute } from "@tanstack/react-router";

import { fetchMembers } from "@/lib/microcms/server-fn/member";
import Footer from "@/shared/_components/layout/footer";
import Header from "@/shared/_components/layout/header";
import MemberCard from "./_components/member-card";

export const Route = createFileRoute("/member/")({
  component: MemberListPage,
  loader: async () => {
    const list = await fetchMembers({ data: { limit: 100 } });
    return { members: list.contents };
  },
  head: () => ({
    meta: [{ title: "メンバー | 滝本ゼミ" }],
  }),
});

function MemberListPage() {
  const { members } = Route.useLoaderData();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="px-6 py-16 md:px-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <h1 className="mb-6 text-3xl font-semibold text-[#1c2b33] md:text-5xl">メンバー</h1>
          <p className="mb-10 max-w-3xl text-base text-[#1c2b33]/80 md:text-lg">
            瀧本ゼミ政策分析パートで活動しているメンバーを紹介します。
          </p>

          {members.length === 0 ? (
            <p className="text-[#1c2b33]/70">
              現在準備中です。microCMSに登録すると、ここに一覧が表示されます。
            </p>
          ) : (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {members.map((item) => (
                <MemberCard key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
