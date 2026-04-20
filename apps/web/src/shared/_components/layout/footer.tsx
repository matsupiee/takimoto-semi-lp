import { useState } from "react";

type NavItem = { label: string; href: string };
type Section = { title: string; items: NavItem[] };

const sections: Section[] = [
  {
    title: "瀧本ゼミについて知る",
    items: [
      { label: "About", href: "/about/" },
      { label: "メンバー", href: "/member/" },
      { label: "活動の成果", href: "/achievement/" },
      { label: "インタビュー", href: "/interview/" },
      { label: "お知らせ/プレスリリース", href: "/announcement/" },
    ],
  },
  {
    title: "お問い合わせ",
    items: [
      { label: "入ゼミ希望の方はこちら", href: "/order/find/" },
      { label: "お問い合わせ", href: "/contact/" },
    ],
  },
];

const socialIcons = [
  {
    label: "X",
    href: "https://twitter.com/Meta",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" aria-hidden="true">
        <path d="M18.3 2h3.4l-7.4 8.5L23 22h-6.8l-5.3-7-6.1 7H1.4l7.9-9L1 2h7l4.8 6.4L18.3 2zm-1.2 18h1.9L7 4h-2l12.1 16z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/meta/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" aria-hidden="true">
        <path d="M12 2c-2.7 0-3 0-4.1.1-1 .1-1.8.2-2.4.5-.7.2-1.3.6-1.9 1.2S2.6 5 2.4 5.5c-.3.6-.4 1.3-.5 2.4C1.8 9 1.8 9.3 1.8 12s0 3 .1 4.1c.1 1 .2 1.8.5 2.4.2.7.6 1.3 1.2 1.9.6.6 1.2.9 1.9 1.2.6.3 1.3.4 2.4.5 1 .1 1.4.1 4.1.1s3 0 4.1-.1c1-.1 1.8-.2 2.4-.5.7-.2 1.3-.6 1.9-1.2.6-.6.9-1.2 1.2-1.9.3-.6.4-1.3.5-2.4.1-1 .1-1.4.1-4.1s0-3-.1-4.1c-.1-1-.2-1.8-.5-2.4-.2-.7-.6-1.3-1.2-1.9-.6-.6-1.2-.9-1.9-1.2-.6-.3-1.3-.4-2.4-.5C15 2 14.7 2 12 2zm0 5.1c2.7 0 4.9 2.2 4.9 4.9s-2.2 4.9-4.9 4.9S7.1 14.7 7.1 12 9.3 7.1 12 7.1zm0 8.1c1.8 0 3.2-1.4 3.2-3.2s-1.4-3.2-3.2-3.2-3.2 1.4-3.2 3.2 1.4 3.2 3.2 3.2zm5.1-8.3c.6 0 1.2-.5 1.2-1.2 0-.6-.5-1.2-1.2-1.2-.6 0-1.2.5-1.2 1.2 0 .6.6 1.2 1.2 1.2z" />
      </svg>
    ),
  },
];

function FooterSection({ section }: { section: Section }) {
  const [open, setOpen] = useState(true);

  return (
    <div className="border-b border-black/10 md:border-0">
      <button
        type="button"
        className="flex w-full items-center justify-between py-4 text-left md:hidden"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="text-sm font-semibold text-[#1c2b33]">{section.title}</span>
        <svg
          viewBox="0 0 24 24"
          width="20"
          height="20"
          fill="currentColor"
          className={`transition ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        >
          <path d="M11.293 14.707a1 1 0 0 0 1.414 0l3-3a1 1 0 0 0-1.414-1.414L12 12.586l-2.293-2.293a1 1 0 1 0-1.414 1.414l3 3z" />
        </svg>
      </button>
      <div className={`${open ? "block" : "hidden"} pb-4 md:block md:pb-0`}>
        <h3 className="hidden text-sm font-semibold text-[#1c2b33] md:mb-4 md:block">
          {section.title}
        </h3>
        <ul className="flex flex-col gap-2 md:gap-3">
          {section.items.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="text-sm text-[#1c2b33]/80 hover:text-[#1c2b33] hover:underline"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-black/10 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-16 md:py-16">
        <ul className="flex items-center gap-5">
          {socialIcons.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                aria-label={s.label}
                className="flex h-10 w-10 items-center justify-center rounded-full text-[#1c2b33] hover:bg-black/5"
                target="_blank"
                rel="noreferrer noopener"
              >
                {s.icon}
              </a>
            </li>
          ))}
        </ul>

        <div className="grid grid-cols-1 gap-x-8 pt-10 md:grid-cols-3 lg:grid-cols-4">
          {sections.map((section) => (
            <FooterSection key={section.title} section={section} />
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-4 pt-8 text-xs text-[#1c2b33]/70 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} 瀧本ゼミ政策分析パート</p>
        </div>
      </div>
    </footer>
  );
}
