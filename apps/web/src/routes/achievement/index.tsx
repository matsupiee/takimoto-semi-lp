import { createFileRoute } from "@tanstack/react-router";

import { type Achievement, fetchAchievements } from "@/lib/microcms/server-fn/achievement";
import Footer from "../../shared/_components/layout/footer";
import Header from "../../shared/_components/layout/header";
import SectionHeader from "../../shared/_components/section-header";

export const Route = createFileRoute("/achievement/")({
  component: AchievementsPage,
  loader: async () => {
    const list = await fetchAchievements({ data: { limit: 100 } });
    return { achievements: list.contents };
  },
  head: () => ({
    meta: [{ title: "活動の成果 | 滝本ゼミ" }],
  }),
});

function formatDate(value?: string) {
  if (!value) return null;
  return new Date(value).toLocaleDateString("ja-JP", { year: "numeric", month: "long" });
}

function AchievementItem({ item }: { item: Achievement }) {
  const dateLabel = formatDate(item.achievedAt);
  const title = item.externalLink ? (
    <a
      href={item.externalLink}
      target="_blank"
      rel="noreferrer"
      className="underline-offset-4 hover:underline"
    >
      {item.title}
    </a>
  ) : (
    item.title
  );

  return (
    <li className="py-3">
      <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:gap-4">
        {dateLabel ? (
          <span className="shrink-0 text-sm text-[#1c2b33]/60 md:w-28">{dateLabel}</span>
        ) : (
          <span className="shrink-0 text-sm text-[#1c2b33]/60 md:w-28">—</span>
        )}
        <div className="flex-1">
          <p className="text-base text-[#1c2b33] md:text-lg">{title}</p>
          {item.summary ? <p className="mt-1 text-sm text-[#1c2b33]/70">{item.summary}</p> : null}
        </div>
      </div>
    </li>
  );
}

function AchievementsPage() {
  const { achievements } = Route.useLoaderData();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <section className="px-6 py-12 md:px-16">
          <div className="mx-auto max-w-4xl">
            <SectionHeader eyebrow="Achievements" title="活動の成果" as="h1" />
            <p className="mt-6 text-base text-[#1c2b33]/80 md:text-lg">
              瀧本ゼミ政策分析パートのこれまでの活動実績の一覧です。
            </p>
          </div>
        </section>

        <section className="px-6 pb-20 md:px-16 md:pb-28">
          <div className="mx-auto max-w-4xl">
            {achievements.length === 0 ? (
              <p className="text-[#1c2b33]/60">
                現在準備中です。microCMSに登録すると、ここに一覧が表示されます。
              </p>
            ) : (
              <ul className="divide-y divide-[#1c2b33]/10 border-t border-b border-[#1c2b33]/10">
                {achievements.map((item) => (
                  <AchievementItem key={item.id} item={item} />
                ))}
              </ul>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
