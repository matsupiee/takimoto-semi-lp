import { Link } from "@tanstack/react-router";

const NAV_LINKS = [
  { href: "#about", label: "ゼミについて" },
  { href: "#reports", label: "レポート" },
  { href: "#achievements", label: "実績" },
  { href: "#members", label: "メンバー" },
  { href: "#recruit", label: "新歓情報" },
] as const;

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-6 px-5">
        <Link to="/" className="flex items-center gap-2.5">
          <span className="grid size-8 place-items-center rounded-full bg-primary font-serif text-base font-bold text-primary-foreground">
            瀧
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-sm font-semibold tracking-wide text-foreground">瀧本ゼミ</span>
            <span className="text-[10px] tracking-[0.18em] text-muted-foreground">
              POLICY ANALYSIS
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm md:flex">
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="text-foreground/70 transition-colors hover:text-foreground"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#recruit"
            className="hidden h-9 items-center justify-center rounded-full border border-border px-4 text-xs font-medium text-foreground/80 transition-colors hover:border-foreground/40 hover:text-foreground sm:inline-flex"
          >
            新歓情報を見る
          </a>
          <a
            href="#contact"
            className="inline-flex h-9 items-center justify-center rounded-full bg-foreground px-4 text-xs font-medium text-background transition-opacity hover:opacity-85"
          >
            お問い合わせ
          </a>
        </div>
      </div>
    </header>
  );
}
