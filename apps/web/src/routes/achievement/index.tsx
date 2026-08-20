import { createFileRoute } from "@tanstack/react-router";

import { pageMeta } from "@/lib/site";

import { type Achievement, fetchAchievements } from "@/lib/microcms/server-fn/achievement";
import Footer from "../../shared/_components/layout/footer";
import Header from "../../shared/_components/layout/header";
import PageContainer from "../../shared/_components/layout/page-container";
import SectionHeader from "../../shared/_components/section-header";
import ItemRow, { ItemRowList } from "../../shared/_components/item-row";

export const Route = createFileRoute("/achievement/")({
  component: AchievementsPage,
  loader: async () => {
    const list = await fetchAchievements({ data: { limit: 100 } });
    return { achievements: list.contents };
  },
  head: () => ({
    meta: pageMeta({
      title: "活動の成果 | 瀧本ゼミ政策分析パート",
      description: "瀧本ゼミ政策分析パートのこれまでの活動実績の一覧です。",
    }),
  }),
});

function formatDate(value?: string) {
  if (!value) return null;
  return new Date(value).toLocaleDateString("ja-JP", { year: "numeric", month: "long" });
}

function AchievementItem({ item }: { item: Achievement }) {
  const row = (
    <ItemRow
      date={formatDate(item.achievedAt) ?? undefined}
      title={item.title}
      summary={item.summary}
      external={!!item.externalLink}
    />
  );

  return (
    <li>
      {item.externalLink ? (
        <a
          href={item.externalLink}
          target="_blank"
          rel="noreferrer"
          className="block transition-colors hover:bg-ink/[0.03]"
        >
          {row}
        </a>
      ) : (
        row
      )}
    </li>
  );
}

function AchievementsPage() {
  const { achievements } = Route.useLoaderData();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <PageContainer as="section" width="default" className="py-12 md:py-16">
          <SectionHeader eyebrow="Achievements" title="活動の成果" as="h1" />
          <p className="mt-6 max-w-2xl text-pretty text-base leading-jp-body md:mt-8 text-ink/80 md:text-lg">
            瀧本ゼミ政策分析パートのこれまでの活動実績の一覧です。
          </p>
        </PageContainer>

        <PageContainer as="section" width="default" className="pb-12 md:pb-16">
          {achievements.length === 0 ? (
            <p className="text-ink/60">
              活動の成果は現在準備中です。公開までしばらくお待ちください。
            </p>
          ) : (
            <ItemRowList>
              {achievements.map((item) => (
                <AchievementItem key={item.id} item={item} />
              ))}
            </ItemRowList>
          )}
        </PageContainer>
      </main>
      <Footer />
    </div>
  );
}
