import { Link } from "@tanstack/react-router";

import type { AchievementCategory } from "../lib/microcms";

type AchievementCard = {
  image: string;
  alt: string;
  title: string;
  description: string;
  category: AchievementCategory;
};

const achievements: AchievementCard[] = [
  {
    image:
      "https://lookaside.fbsbx.com/elementpath/media/?media_id=971962444997994&version=1769429390",
    alt: "議論する人々の画像",
    title: "政策の実現",
    description: "政治家や官僚への提案を通じて、社会に変化を生み出してきました。",
    category: "policy",
  },
  {
    image:
      "https://lookaside.fbsbx.com/elementpath/media/?media_id=1371608347183844&version=1769429390",
    alt: "共同研究のイメージ画像",
    title: "共同研究",
    description: "大学の研究室や企業との共同研究を行っています。",
    category: "collaboration",
  },
  {
    image:
      "https://lookaside.fbsbx.com/elementpath/media/?media_id=1123175432895087&version=1769429390",
    alt: "公開政策提言のイメージ画像",
    title: "公開政策提言",
    description: "定期的に公開政策提言を行なっています。",
    category: "proposal",
  },
];

export default function MetaAchievements() {
  return (
    <section className="bg-white px-6 py-16 md:px-16 md:py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-semibold text-[#1c2b33] md:text-5xl">活動の成果</h2>
          <p className="mt-4 text-base text-[#1c2b33]/80 md:text-lg">
            瀧本ゼミ政策分析パートでは、これまで幅広い分野の問題発見・解決を行ってきました。
            政治家や官僚に対しての提案や、大学の研究室や企業との共同研究を実施してきました。
          </p>
          <Link
            to="/achievements"
            className="mt-6 inline-flex items-center rounded-full bg-[#1c2b33] px-6 py-3 text-[15px] font-medium text-white transition hover:bg-black"
          >
            詳しくはこちら
          </Link>
        </div>

        <div className="flex flex-col gap-4">
          {achievements.map((item) => (
            <Link
              key={item.title}
              to="/achievements"
              hash={item.category}
              className="group relative flex overflow-hidden rounded-3xl bg-[#f8f9fb] transition hover:shadow-md"
              aria-label={`${item.title}の成果を見る`}
            >
              <div className="w-1/3 flex-shrink-0 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col justify-center p-5 md:p-6">
                <h3 className="text-lg font-semibold text-[#1c2b33] md:text-xl">{item.title}</h3>
                <p className="mt-1 text-sm text-[#1c2b33]/80 md:text-base">{item.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
