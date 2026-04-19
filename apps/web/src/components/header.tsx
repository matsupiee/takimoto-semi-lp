import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const NAV = [
  { href: "#about", label: "About", en: "私たちについて" },
  { href: "#keywords", label: "Mission", en: "理念" },
  { href: "#reports", label: "Reports", en: "実績" },
  { href: "#members", label: "Members", en: "メンバー" },
  { href: "#recruit", label: "Recruit", en: "採用情報" },
] as const;

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={
        "fixed inset-x-0 top-0 z-50 transition-all duration-300 " +
        (scrolled
          ? "border-b border-white/10 bg-background/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent")
      }
    >
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-6 lg:px-10">
        <Link to="/" className="group flex items-center gap-2">
          <span className="relative inline-block size-2.5">
            <span className="absolute inset-0 animate-ping rounded-full bg-brand opacity-60" />
            <span className="absolute inset-0 rounded-full bg-brand" />
          </span>
          <span className="text-sm font-semibold tracking-[0.18em] uppercase">
            T<span className="text-brand">/</span>SEMI
          </span>
          <span className="hidden text-[10px] tracking-[0.3em] text-muted-foreground uppercase sm:inline">
            policy.analysis
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative rounded-none px-4 py-2 text-xs font-medium tracking-wider uppercase transition-colors hover:text-brand"
            >
              <span>{item.label}</span>
              <span className="absolute right-4 bottom-1 left-4 h-px origin-left scale-x-0 bg-brand transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="#recruit"
            className="group inline-flex h-9 items-center gap-2 border border-white/15 bg-white/5 px-4 text-xs font-medium tracking-wider uppercase transition-all hover:border-brand hover:bg-brand hover:text-brand-foreground"
          >
            Join Us
            <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex size-10 items-center justify-center border border-white/15 lg:hidden"
        >
          <span className="relative block h-3 w-5">
            <span
              className={
                "absolute left-0 block h-px w-5 bg-foreground transition-all " +
                (open ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0")
              }
            />
            <span
              className={
                "absolute left-0 block h-px w-5 bg-foreground transition-all " +
                (open ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-0")
              }
            />
          </span>
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-background/95 backdrop-blur-xl lg:hidden">
          <nav className="mx-auto flex max-w-[1400px] flex-col px-6 py-2">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between border-b border-white/5 py-4 text-sm font-medium last:border-b-0"
              >
                <span className="tracking-wider uppercase">{item.label}</span>
                <span className="text-xs text-muted-foreground">{item.en}</span>
              </a>
            ))}
            <a
              href="#recruit"
              onClick={() => setOpen(false)}
              className="mt-3 mb-4 inline-flex h-11 items-center justify-center bg-brand px-4 text-xs font-medium tracking-wider text-brand-foreground uppercase"
            >
              Join Us →
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
