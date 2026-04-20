import { useState } from "react";

const META_LOGO = "https://static.xx.fbcdn.net/rsrc.php/y9/r/tL_v571NdZ0.svg";

type NavItem = { label: string; href: string };
type Section = { title: string; items: NavItem[] };

const sections: Section[] = [
  {
    title: "Meta Store",
    items: [
      { label: "Ray-Ban Metaグラス", href: "/ai-glasses/shop-all/" },
      { label: "Oakley Metaグラス", href: "/ai-glasses/oakley-meta/" },
      { label: "Meta Ray-Ban Display", href: "/ai-glasses/meta-ray-ban-display/" },
      { label: "グラスを比較", href: "/ai-glasses/compare/" },
      { label: "Meta Quest", href: "/quest/" },
      { label: "アクセサリー", href: "/quest/accessories/" },
      { label: "アプリとゲーム", href: "/experiences/" },
      { label: "Meta Questギフトカード", href: "/quest/gift-cards/" },
      { label: "Ray-Banのその他の製品", href: "https://rayban.com/" },
      { label: "Meta for Work", href: "https://forwork.meta.com/" },
      { label: "Meta for Education", href: "https://forwork.meta.com/meta-for-education/" },
      { label: "ブログ", href: "/blog/" },
    ],
  },
  {
    title: "ストアのサポートと規約",
    items: [
      { label: "Metaヘルプセンター", href: "/help/" },
      { label: "注文ステータス", href: "/order/find/" },
      { label: "返品", href: "/returns/" },
      { label: "製品デモを検索", href: "/demo/" },
      { label: "店舗を見つける", href: "/retailers/" },
      { label: "その他の情報", href: "/legal/" },
      { label: "販売規約", href: "/legal/terms-of-sale/" },
      { label: "Meta Questセーフティセンター", href: "/quest/safety-center/" },
    ],
  },
  {
    title: "コミュニティ",
    items: [
      { label: "クリエイター", href: "https://creator.oculus.com/" },
      { label: "開発者", href: "https://developers.meta.com/horizon/" },
      { label: "ビジネス", href: "https://www.facebook.com/business/ads/" },
      { label: "非営利団体", href: "https://www.facebook.com/government-nonprofits/" },
      { label: "SDKのダウンロード", href: "https://developers.meta.com/horizon/downloads/unity/" },
      { label: "Meta専用製品パートナープログラム", href: "/made-for-meta/" },
      { label: "VR for Good", href: "/community/vr-for-good/" },
    ],
  },
  {
    title: "Metaの取り組み",
    items: [
      { label: "データとプライバシー", href: "/actions/protecting-privacy-and-security/" },
      { label: "責任あるビジネス慣行", href: "/actions/responsible-business-practices/" },
      { label: "配慮", href: "/actions/preparing-for-elections-with-meta/" },
    ],
  },
  {
    title: "基本情報",
    items: [
      { label: "Metaについて", href: "/about/" },
      { label: "会社情報", href: "/about/company-info/" },
      { label: "求人情報", href: "https://metacareers.com/" },
      { label: "メディアギャラリー", href: "/media-gallery/" },
      { label: "ブランドリソース", href: "/brand/resources/" },
      { label: "投資家向け", href: "https://investor.atmeta.com/" },
      { label: "ニュースルーム", href: "https://about.fb.com/news/" },
    ],
  },
  {
    title: "サイトの利用規約とポリシー",
    items: [
      {
        label: "コミュニティ規定",
        href: "https://transparency.meta.com/policies/community-standards/",
      },
      { label: "プライバシーポリシー", href: "/legal/privacy-policy/" },
      { label: "規約", href: "https://www.facebook.com/terms.php/" },
      { label: "Cookieポリシー", href: "https://www.facebook.com/privacy/policies/cookies/" },
    ],
  },
  {
    title: "アプリのサポート",
    items: [
      { label: "Facebookヘルプセンター", href: "https://www.facebook.com/help" },
      { label: "Messengerヘルプセンター", href: "https://www.facebook.com/help/messenger-app/" },
      { label: "Instagramヘルプセンター", href: "https://help.instagram.com/" },
      { label: "WhatsAppヘルプセンター", href: "https://faq.whatsapp.com/" },
      { label: "Workplaceヘルプセンター", href: "https://www.facebook.com/help/work" },
      { label: "Meta認証", href: "/meta-verified/" },
    ],
  },
];

const socialIcons = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/Meta",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" aria-hidden="true">
        <path d="M13.5 21v-7.5h2.5l.4-3h-2.9V8.6c0-.8.2-1.4 1.5-1.4h1.6V4.5c-.3-.1-1.3-.1-2.4-.1-2.4 0-4 1.4-4 4.1V10.5h-2.7v3h2.7V21h3.3z" />
      </svg>
    ),
  },
  {
    label: "Threads",
    href: "https://www.threads.net/@meta",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" aria-hidden="true">
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4 13.5c-.5 1.4-1.8 2.3-3.4 2.3-2 0-3.4-1-3.6-2.7H11c.1.6.6 1 1.6 1s1.5-.4 1.5-1.2c0-.6-.4-.9-1.4-1.1l-.6-.1c-1.8-.3-2.8-1.1-2.8-2.4 0-1.5 1.2-2.5 3-2.5 1.9 0 3 1 3.1 2.5h-1.6c-.1-.6-.6-1-1.5-1s-1.4.4-1.4 1 .4.9 1.3 1l.6.1c1.9.3 2.8 1.1 2.8 2.4 0 .3 0 .5-.1.7z" />
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
    label: "YouTube",
    href: "https://www.youtube.com/meta",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" aria-hidden="true">
        <path d="M21.6 7.2c-.2-.9-.9-1.5-1.7-1.7C18.2 5 12 5 12 5s-6.2 0-7.9.5c-.9.2-1.5.9-1.7 1.7C2 8.8 2 12 2 12s0 3.2.4 4.8c.2.9.9 1.5 1.7 1.7 1.7.5 7.9.5 7.9.5s6.2 0 7.9-.5c.9-.2 1.5-.9 1.7-1.7.4-1.6.4-4.8.4-4.8s0-3.2-.4-4.8zM10 15V9l5.2 3-5.2 3z" />
      </svg>
    ),
  },
];

function FooterSection({ section }: { section: Section }) {
  const [open, setOpen] = useState(false);

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
        <div className="flex flex-col gap-8 border-b border-black/10 pb-10 md:flex-row md:items-center md:justify-between">
          <a href="/" aria-label="Metaホーム" className="inline-flex">
            <img src={META_LOGO} alt="Meta" className="h-6 w-auto" />
          </a>
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
        </div>

        <div className="grid grid-cols-1 gap-x-8 pt-10 md:grid-cols-3 lg:grid-cols-4">
          {sections.map((section) => (
            <FooterSection key={section.title} section={section} />
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-black/10 pt-8 text-xs text-[#1c2b33]/70 md:flex-row md:items-center md:justify-between">
          <button
            type="button"
            aria-label="言語を変更"
            className="inline-flex items-center gap-2 rounded-full border border-black/20 px-4 py-2 text-[#1c2b33] hover:bg-black/5"
          >
            日本語
          </button>
          <p>© {new Date().getFullYear()} Meta</p>
        </div>
      </div>
    </footer>
  );
}
