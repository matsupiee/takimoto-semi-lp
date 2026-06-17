import PageContainer from "@/shared/_components/layout/page-container";
import SectionHeader from "@/shared/_components/section-header";

type LinkCard = {
  label: string;
  title: string;
  body: string;
  href: string;
};

const cards: LinkCard[] = [
  {
    label: "Achievements",
    title: "活動の成果",
    body: "これまで取り組んできた政策提言や活動の実績をご覧いただけます。",
    href: "/achievement",
  },
  {
    label: "Members",
    title: "メンバー",
    body: "多様なバックグラウンドを持つメンバーが、社会課題に向き合っています。",
    href: "/member",
  },
  {
    label: "Recruit",
    title: "新歓案内",
    body: "瀧本ゼミ政策分析パートの活動に関心のある方へ。募集情報はこちら。",
    href: "/recruit",
  },
];

export default function NextActions() {
  return (
    <PageContainer as="section" className="py-16 md:py-24">
      <SectionHeader eyebrow="Learn More" title="もっと知る" />

      <div className="mt-10 grid grid-cols-1 gap-6 md:mt-14 md:grid-cols-3">
        {cards.map((card) => (
          <a
            key={card.href}
            href={card.href}
            className="group flex flex-col gap-3 rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <span className="text-sm font-bold text-[#e60012]">{card.label}</span>
            <h3 className="text-xl font-semibold text-[#1c2b33] md:text-2xl">{card.title}</h3>
            <p className="text-sm leading-relaxed text-[#1c2b33]/80">{card.body}</p>
            <span className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-[#1c2b33]">
              詳しく見る
              <svg
                viewBox="0 0 24 24"
                width="16"
                height="16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition group-hover:translate-x-0.5"
                aria-hidden="true"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </span>
          </a>
        ))}
      </div>
    </PageContainer>
  );
}
