import { useState } from "react";

type NewsCard = {
  image: string;
  alt: string;
  title: string;
  href: string;
};

const newsItems: NewsCard[] = [
  {
    image:
      "https://scontent-nrt6-1.xx.fbcdn.net/v/t39.8562-6/669300220_954632214209690_8985655919136326932_n.webp",
    alt: "Meta AI logo on a black background",
    title:
      "MSLが第1弾のLLMモデル「Muse Spark」を発表: 利用者ファーストで設計されたモデル",
    href: "https://about.fb.com/news/2026/04/introducing-muse-spark-meta-superintelligence-labs/",
  },
  {
    image:
      "https://scontent-nrt6-1.xx.fbcdn.net/v/t39.8562-6/662937157_1606612740597151_5013991172574273832_n.webp",
    alt: "Black Ray-Ban glasses with clear lenses and a white logo on the left lens",
    title: "Meta初の度付きAIグラスを発表",
    href: "https://about.fb.com/news/2026/03/meta-ai-glasses-built-for-prescriptions/",
  },
  {
    image:
      "https://scontent-nrt1-1.xx.fbcdn.net/v/t39.8562-6/659071954_1508836004099383_3837328089137543457_n.webp",
    alt: "WhatsApp logo with a green speech bubble and phone icon",
    title: "WhatsAppの新機能でストレージの管理やアカウントの切り替えなどが簡単に",
    href: "https://about.fb.com/news/2026/03/whatsapp-new-features-simplify-storage-switch-accounts/",
  },
];

export default function MetaNews() {
  const [start, setStart] = useState(0);
  const maxStart = Math.max(0, newsItems.length - 1);

  return (
    <section className="bg-white px-6 py-16 md:px-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h2 className="text-3xl font-semibold text-[#1c2b33] md:text-5xl">
            最新のニュースをチェック
          </h2>
          <a
            href="https://about.fb.com/ja/news/"
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 text-[15px] font-medium text-[#1c2b33] hover:underline"
          >
            ニュースルームでその他のニュースを見る
            <Arrow />
          </a>
        </div>

        <div aria-roledescription="carousel" className="relative">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {newsItems.map((item) => (
              <article
                key={item.title}
                className="group flex flex-col overflow-hidden rounded-3xl bg-[#f8f9fb]"
              >
                <a href={item.href} target="_blank" rel="noreferrer noopener" className="block">
                  <div className="aspect-[4/3] w-full overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.alt}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-col gap-4 p-6 md:p-8">
                    <p className="text-xl font-medium leading-snug text-[#1c2b33] md:text-2xl">
                      {item.title}
                    </p>
                    <span className="inline-flex items-center gap-2 text-[15px] font-medium text-[#1c2b33]">
                      続きを読む
                      <Arrow />
                    </span>
                  </div>
                </a>
              </article>
            ))}
          </div>

          <div className="mt-8 flex items-center justify-between md:hidden">
            <span className="text-sm text-[#1c2b33]">
              {start + 1} / {newsItems.length}
            </span>
            <div className="flex gap-2">
              <button
                type="button"
                aria-label="前へ"
                onClick={() => setStart((s) => Math.max(0, s - 1))}
                disabled={start === 0}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#1c2b33]/20 text-[#1c2b33] disabled:opacity-40"
              >
                <Arrow flip />
              </button>
              <button
                type="button"
                aria-label="次へ"
                onClick={() => setStart((s) => Math.min(maxStart, s + 1))}
                disabled={start === maxStart}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#1c2b33]/20 text-[#1c2b33] disabled:opacity-40"
              >
                <Arrow />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Arrow({ flip = false }: { flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 38 38"
      width="22"
      height="22"
      fill="none"
      className={flip ? "rotate-180" : ""}
      aria-hidden="true"
    >
      <path
        opacity="0.4"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19 37C9.05887 37 1 28.9411 1 19C1 9.05887 9.05887 1 19 1C28.9411 1 37 9.05887 37 19C37 28.9411 28.9411 37 19 37Z"
        stroke="currentColor"
      />
      <path
        d="M21.9657 12L28.9287 18.963L21.9657 25.926L20.7348 24.7193L25.6203 19.8334L10.0001 19.8334V18.0926L25.5966 18.0926L20.7348 13.2309L21.9657 12Z"
        fill="currentColor"
      />
    </svg>
  );
}
