import { Link } from "@tanstack/react-router";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#activities", label: "Activities" },
  { href: "#achievements", label: "Achievements" },
  { href: "#members", label: "Members" },
  { href: "#join", label: "Join" },
] as const;

export default function Header() {
  return (
    <header className="fixed top-0 right-0 left-0 z-50 border-b border-white/10 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-4 md:px-10">
        <Link to="/" className="flex items-center gap-3">
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#00d4a3]" />
          <span className="font-jp text-sm font-bold tracking-[0.2em] text-foreground md:text-base">
            TAKIMOTO <span className="text-[#00d4a3]">/</span> SEMINAR
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="group relative text-xs font-medium tracking-[0.15em] text-foreground/70 uppercase transition-colors hover:text-foreground"
            >
              {label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#00d4a3] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <a
          href="#join"
          className="group inline-flex items-center gap-2 border border-white/20 px-4 py-2 text-xs font-medium tracking-[0.15em] uppercase transition-all hover:border-[#00d4a3] hover:bg-[#00d4a3] hover:text-black"
        >
          Contact
          <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </a>
      </div>
    </header>
  );
}
