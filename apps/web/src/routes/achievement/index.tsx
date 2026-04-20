import { createFileRoute } from "@tanstack/react-router";

import {
  type Achievement,
  type AchievementCategory,
  fetchAchievements,
} from "@/lib/microcms/server-fn/achievement";
import Footer from "../../shared/_components/layout/footer";
import Header from "../../shared/_components/layout/header";
import AchievementCard from "./_components/achievement-card";

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

type CategoryDef = {
  id: AchievementCategory;
  title: string;
  description: string;
};

const CATEGORIES: CategoryDef[] = [
  {
    id: "policy",
    title: "政策の実現",
    description:
      "政治家や官僚への政策提案を通じて、社会に具体的な変化を生み出してきた取り組みです。",
  },
  {
    id: "collaboration",
    title: "共同研究",
    description: "大学の研究室や企業との連携によって進めてきた研究プロジェクトを紹介します。",
  },
  {
    id: "proposal",
    title: "公開政策提言",
    description: "ゼミとして定期的に公開している政策提言・レポートをまとめています。",
  },
];

function categoryOf(item: Achievement): AchievementCategory | undefined {
  const value = item.category;
  if (Array.isArray(value)) return value[0];
  return value;
}

function AchievementsPage() {
  const { achievements } = Route.useLoaderData();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <section className="px-6 pt-16 pb-8 md:px-16 md:pt-24 md:pb-12">
          <div className="mx-auto max-w-7xl">
            <h1 className="text-3xl font-semibold text-[#1c2b33] md:text-5xl">活動の成果</h1>
            <p className="mt-6 max-w-3xl text-base text-[#1c2b33]/80 md:text-lg">
              瀧本ゼミ政策分析パートでは、これまで幅広い分野の問題発見・解決を行ってきました。
              政治家や官僚に対しての提案や、大学の研究室や企業との共同研究を通じた成果をご紹介します。
            </p>
            <nav className="mt-10 flex flex-wrap gap-3">
              {CATEGORIES.map((category) => (
                <a
                  key={category.id}
                  href={`#${category.id}`}
                  className="inline-flex items-center rounded-full border border-[#1c2b33]/20 px-5 py-2 text-sm font-medium text-[#1c2b33] transition hover:bg-[#1c2b33]/5"
                >
                  {category.title}
                </a>
              ))}
            </nav>
          </div>
        </section>

        {CATEGORIES.map((category) => {
          const items = achievements.filter((item) => categoryOf(item) === category.id);
          return (
            <section
              key={category.id}
              id={category.id}
              className="scroll-mt-24 px-6 py-12 md:px-16 md:py-16"
            >
              <div className="mx-auto max-w-7xl">
                <h2 className="text-2xl font-semibold text-[#1c2b33] md:text-4xl">
                  {category.title}
                </h2>
                <p className="mt-3 max-w-2xl text-base text-[#1c2b33]/80">{category.description}</p>

                {items.length === 0 ? (
                  <p className="mt-8 text-[#1c2b33]/60">
                    現在準備中です。microCMSに登録すると、ここに一覧が表示されます。
                  </p>
                ) : (
                  <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {items.map((item) => (
                      <AchievementCard key={item.id} item={item} />
                    ))}
                  </div>
                )}
              </div>
            </section>
          );
        })}
      </main>
      <Footer />
    </div>
  );
}
