const SECTIONS = [
  {
    heading: "Sitemap",
    links: [
      { href: "#about", label: "About" },
      { href: "#keywords", label: "Mission" },
      { href: "#reports", label: "Reports" },
      { href: "#members", label: "Members" },
      { href: "#recruit", label: "Recruit" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { href: "https://tsemi190194895.wordpress.com/", label: "旧サイト (WordPress)" },
      { href: "#reports", label: "研究レポート一覧" },
      { href: "#recruit", label: "見学申込" },
    ],
  },
  {
    heading: "Social",
    links: [
      { href: "https://twitter.com/tsemiseisaku", label: "X (Twitter) — @tsemiseisaku" },
      { href: "https://instagram.com/tsemiseisaku", label: "Instagram — @tsemiseisaku" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-[#0a0a0f]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/60 to-transparent" />

      <div className="mx-auto max-w-[1400px] px-6 py-20 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2">
              <span className="size-2.5 rounded-full bg-brand" />
              <span className="text-sm font-semibold tracking-[0.18em] uppercase">
                T<span className="text-brand">/</span>SEMI
              </span>
            </div>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
              瀧本ゼミ 政策分析パート。京都大学客員准教授・瀧本哲史によって設立された、学生主導の政策シンクタンク。
            </p>
            <div className="mt-8 flex gap-3">
              {[
                { href: "https://twitter.com/tsemiseisaku", label: "X" },
                { href: "https://instagram.com/tsemiseisaku", label: "IG" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex size-10 items-center justify-center border border-white/15 text-xs font-medium tracking-wider transition-colors hover:border-brand hover:bg-brand hover:text-brand-foreground"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {SECTIONS.map((section) => (
            <div key={section.heading}>
              <h4 className="text-[11px] font-semibold tracking-[0.2em] text-brand uppercase">
                {section.heading}
              </h4>
              <ul className="mt-5 space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Takimoto Seminar — Policy Analysis Division.</p>
          <p className="tracking-wider uppercase">
            Built for the next generation of policy thinkers.
          </p>
        </div>
      </div>
    </footer>
  );
}
