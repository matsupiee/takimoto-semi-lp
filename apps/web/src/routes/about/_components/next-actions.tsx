import CenteredSection from "./centered-section";

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
    <CenteredSection eyebrow="Learn More" title="もっと知る" tone="muted">
      <ul className="divide-y divide-ink/10 border border-ink/10 bg-white">
        {cards.map((card) => (
          <li key={card.href}>
            <a
              href={card.href}
              className="group flex flex-col gap-1 px-6 py-5 transition hover:bg-ink/[0.03] sm:flex-row sm:items-center sm:gap-6 sm:px-8"
            >
              <span className="w-32 shrink-0 text-xs font-bold tracking-wide text-brand">
                {card.label}
              </span>
              <h3 className="shrink-0 text-base font-semibold text-ink sm:w-32 md:text-lg">
                {card.title}
              </h3>
              <p className="flex-1 text-sm leading-relaxed text-ink/70">{card.body}</p>
              <svg
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="hidden shrink-0 text-ink transition group-hover:translate-x-1 sm:block"
                aria-hidden="true"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
          </li>
        ))}
      </ul>
    </CenteredSection>
  );
}
