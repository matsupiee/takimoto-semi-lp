import { useState } from "react";

const primaryNavItems = [
  { label: "About us", href: "#about" },
  { label: "活動の成果", href: "#achievements" },
  { label: "メンバー", href: "#members" },
  { label: "インタビュー", href: "/interview" },
];

const endNavItems = [
  { label: "新歓案内", href: "#recruit" },
  { label: "お問い合わせ", href: "#contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav aria-label="メイン" className="sticky top-0 z-50 bg-white">
      <div className="relative">
        <div className="flex h-16 items-center justify-between px-4 md:px-10">
          <div className="flex items-center gap-10">
            <button
              type="button"
              aria-label="モバイルナビゲーションメニューを開く"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
              className="flex h-10 w-10 items-center justify-center rounded-full text-[#1c2b33] hover:bg-black/5 md:hidden"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M4 5a1 1 0 0 0 0 2h16a1 1 0 1 0 0-2H4zM3 12a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1zM3 18a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1z" />
              </svg>
            </button>

            <a href="/" aria-label="瀧本ゼミホーム" className="flex items-center">
              <img alt="瀧本ゼミロゴ" src={"/logo.svg"} className="h-14 w-auto" />
            </a>

            <ul className="hidden items-center gap-8 md:flex">
              {primaryNavItems.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-[15px] text-[#1c2b33] hover:text-black">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center gap-4 md:gap-6">
            <ul className="hidden items-center gap-6 md:flex">
              {endNavItems.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-[15px] text-[#1c2b33] hover:text-black">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {mobileOpen && (
          <div className="border-t border-black/10 bg-white px-4 py-4 md:hidden">
            <ul className="flex flex-col gap-3">
              {[...primaryNavItems, ...endNavItems].map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="block py-2 text-[15px] text-[#1c2b33]">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="h-px w-full bg-black/10" />
      </div>
    </nav>
  );
}
