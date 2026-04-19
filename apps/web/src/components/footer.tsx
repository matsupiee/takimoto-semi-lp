const FOOTER_NAV = [
  {
    heading: "ゼミ",
    links: [
      { href: "#about", label: "瀧本ゼミについて" },
      { href: "#achievements", label: "これまでの実績" },
      { href: "#activities", label: "活動内容" },
      { href: "#members", label: "メンバー" },
    ],
  },
  {
    heading: "情報",
    links: [
      { href: "#reports", label: "レポート一覧" },
      { href: "#recruit", label: "新歓情報" },
      { href: "#faq", label: "よくある質問" },
      { href: "#contact", label: "お問い合わせ" },
    ],
  },
  {
    heading: "SNS",
    links: [
      { href: "https://twitter.com/", label: "X (Twitter)" },
      { href: "https://www.instagram.com/", label: "Instagram" },
      { href: "mailto:contact@example.com", label: "Mail" },
    ],
  },
] as const;

export default function Footer() {
  return (
    <footer className="border-t border-border bg-muted/40">
      <div className="mx-auto w-full max-w-6xl px-5 py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid size-9 place-items-center rounded-full bg-primary font-serif text-base font-bold text-primary-foreground">
                瀧
              </span>
              <span className="flex flex-col leading-tight">
                <span className="text-sm font-semibold">瀧本ゼミ 政策分析パート</span>
                <span className="text-[10px] tracking-[0.18em] text-muted-foreground">
                  POLICY ANALYSIS PART
                </span>
              </span>
            </div>
            <p className="mt-4 max-w-sm text-xs leading-relaxed text-muted-foreground">
              The Best Team to Change the World.
              <br />
              世の中で知られていないが、実は重要である問題を分析し、有効な解決策を立案・実行する学生シンクタンクです。
            </p>
          </div>

          {FOOTER_NAV.map((group) => (
            <div key={group.heading}>
              <h3 className="text-[11px] font-semibold tracking-[0.2em] text-muted-foreground">
                {group.heading.toUpperCase()}
              </h3>
              <ul className="mt-4 space-y-2.5 text-sm">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-foreground/80 transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} 瀧本ゼミ 政策分析パート</p>
          <p className="font-serif italic tracking-wider">The Best Team to Change the World.</p>
        </div>
      </div>
    </footer>
  );
}
