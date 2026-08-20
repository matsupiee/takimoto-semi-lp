import { createFileRoute, redirect } from "@tanstack/react-router";

import { pageMeta } from "@/lib/site";

import { fetchMembers } from "@/lib/microcms/server-fn/member";
import Footer from "@/shared/_components/layout/footer";
import Header from "@/shared/_components/layout/header";
import PageContainer from "@/shared/_components/layout/page-container";
import SectionHeader from "@/shared/_components/section-header";
import { gridColsForCount, gridMaxWidthForCount } from "@/shared/_utils/grid";
import MemberCard from "./_components/member-card";

export const Route = createFileRoute("/member/")({
  component: MemberListPage,
  loader: async () => {
    const list = await fetchMembers({ data: { limit: 100 } });

    // 個人紹介が未公開のうちは見出しだけの空ページになるため、about へ逃がす。
    // ゼミの人数・男女比などの統計は about の「メンバー構成」に移した。
    if (list.contents.length === 0) {
      throw redirect({ to: "/about" });
    }

    return { members: list.contents };
  },
  head: () => ({
    meta: pageMeta({
      title: "メンバー | 瀧本ゼミ政策分析パート",
      description: "瀧本ゼミ政策分析パートで活動しているメンバーを紹介します。",
    }),
  }),
});

function MemberListPage() {
  const { members } = Route.useLoaderData();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <PageContainer width="default" className="py-12 md:py-16">
          <SectionHeader eyebrow="Members" title="メンバー" as="h1" align="center" />
          <p className="mx-auto mt-6 mb-10 max-w-2xl text-center text-base md:mt-8 text-ink/80 md:text-lg">
            瀧本ゼミ政策分析パートで活動しているメンバーを紹介します。
          </p>

          <div
            className={`mx-auto grid grid-cols-1 gap-6 ${gridColsForCount(members.length, 3)} ${gridMaxWidthForCount(members.length, 3)}`}
          >
            {members.map((item) => (
              <MemberCard key={item.id} item={item} />
            ))}
          </div>
        </PageContainer>
      </main>
      <Footer />
    </div>
  );
}
