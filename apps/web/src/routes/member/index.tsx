import { createFileRoute } from "@tanstack/react-router";

import { pageMeta } from "@/lib/site";

import { fetchMembers } from "@/lib/microcms/server-fn/member";
import { fetchSeminarProfile } from "@/lib/microcms/server-fn/seminar-profile";
import Footer from "@/shared/_components/layout/footer";
import Header from "@/shared/_components/layout/header";
import PageContainer from "@/shared/_components/layout/page-container";
import SectionHeader from "@/shared/_components/section-header";
import { gridColsForCount, gridMaxWidthForCount } from "@/shared/_utils/grid";
import MemberCard from "./_components/member-card";
import SeminarStats from "./_components/seminar-stats";

export const Route = createFileRoute("/member/")({
  component: MemberListPage,
  loader: async () => {
    const [list, profile] = await Promise.all([
      fetchMembers({ data: { limit: 100 } }),
      fetchSeminarProfile(),
    ]);
    return { members: list.contents, profile };
  },
  head: () => ({
    meta: pageMeta({
      title: "メンバー | 瀧本ゼミ政策分析パート",
      description: "瀧本ゼミ政策分析パートで活動しているメンバーを紹介します。",
    }),
  }),
});

function MemberListPage() {
  const { members, profile } = Route.useLoaderData();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <PageContainer width="default" className="py-12 md:py-16">
          <SectionHeader eyebrow="Members" title="メンバー" as="h1" />
          <p className="mt-6 mb-10 max-w-3xl text-base md:mt-8 text-[#1c2b33]/80 md:text-lg">
            瀧本ゼミ政策分析パートで活動しているメンバーを紹介します。
          </p>

          <SeminarStats profile={profile} />

          {members.length > 0 ? (
            <div
              className={`grid grid-cols-1 gap-6 ${gridColsForCount(members.length, 3)} ${gridMaxWidthForCount(members.length, 3)}`}
            >
              {members.map((item) => (
                <MemberCard key={item.id} item={item} />
              ))}
            </div>
          ) : null}
        </PageContainer>
      </main>
      <Footer />
    </div>
  );
}
