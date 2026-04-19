import { useEffect, useState } from "react";

const NAV_LINKS = [
  { href: "#about", label: "ABOUT" },
  { href: "#impact", label: "IMPACT" },
  { href: "#concepts", label: "CONCEPTS" },
  { href: "#members", label: "MEMBERS" },
  { href: "#join", label: "JOIN" },
] as const;

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-background/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-6 md:h-20 md:px-10">
        <a href="#top" className="group flex items-center gap-2.5">
          <span className="flex size-8 items-center justify-center bg-accent text-accent-foreground">
            <span className="font-display text-sm font-black tracking-tighter">T</span>
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-[10px] font-bold tracking-[0.18em] text-muted-foreground">
              TAKIMOTO SEMINAR
            </span>
            <span className="font-display text-sm font-bold tracking-wide text-foreground">
              政策分析パート
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="group relative font-display text-xs font-semibold tracking-[0.18em] text-foreground/80 transition-colors hover:text-foreground"
            >
              {label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#join"
            className="hidden h-10 items-center gap-2 bg-accent px-5 font-display text-xs font-bold tracking-[0.18em] text-accent-foreground transition-all hover:bg-accent/90 md:inline-flex"
          >
            JOIN US
            <span aria-hidden>→</span>
          </a>
          <button
            type="button"
            aria-label="menu"
            onClick={() => setMenuOpen((v) => !v)}
            className="inline-flex size-10 items-center justify-center border border-white/15 text-foreground lg:hidden"
          >
            <span className="relative block h-3 w-4">
              <span
                className={`absolute left-0 block h-px w-full bg-current transition-transform ${
                  menuOpen ? "top-1/2 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 block h-px w-full bg-current transition-opacity ${
                  menuOpen ? "opacity-0" : "top-1/2 opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 block h-px w-full bg-current transition-transform ${
                  menuOpen ? "top-1/2 -rotate-45" : "bottom-0"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-white/10 bg-background/95 backdrop-blur-xl lg:hidden">
          <nav className="mx-auto flex max-w-[1400px] flex-col gap-1 px-6 py-4">
            {NAV_LINKS.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-between border-b border-white/5 py-3 font-display text-sm font-semibold tracking-[0.12em] text-foreground/90"
              >
                {label}
                <span aria-hidden className="text-muted-foreground">→</span>
              </a>
            ))}
            <a
              href="#join"
              onClick={() => setMenuOpen(false)}
              className="mt-3 inline-flex h-12 items-center justify-center bg-accent font-display text-sm font-bold tracking-[0.18em] text-accent-foreground"
            >
              JOIN US →
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
