export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-background">
      <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-10">
        <div className="grid gap-12 md:grid-cols-[2fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#00d4a3]" />
              <span className="font-jp text-base font-bold tracking-[0.2em]">
                TAKIMOTO <span className="text-[#00d4a3]">/</span> SEMINAR
              </span>
            </div>
            <p className="font-jp mt-6 max-w-md text-sm leading-relaxed text-foreground/60">
              瀧本ゼミ政策分析パート。
              <br />
              知られざる、重要な課題を解き、政策として実装する学生シンクタンク。
            </p>
          </div>

          <div>
            <h4 className="text-xs font-medium tracking-[0.2em] text-foreground/50 uppercase">
              Sitemap
            </h4>
            <ul className="mt-6 space-y-3">
              {[
                ["#about", "About"],
                ["#activities", "Activities"],
                ["#achievements", "Achievements"],
                ["#members", "Members"],
                ["#join", "Join"],
              ].map(([href, label]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-sm text-foreground/80 transition-colors hover:text-[#00d4a3]"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-medium tracking-[0.2em] text-foreground/50 uppercase">
              Social
            </h4>
            <ul className="mt-6 space-y-3">
              <li>
                <a
                  href="https://twitter.com/tsemiseisaku"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-foreground/80 transition-colors hover:text-[#00d4a3]"
                >
                  Twitter / X
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/tsemiseisaku/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-foreground/80 transition-colors hover:text-[#00d4a3]"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 md:flex-row md:items-center">
          <p className="text-xs text-foreground/40">
            © {new Date().getFullYear()} Takimoto Seminar — Policy Analysis Division
          </p>
          <p className="font-jp text-xs tracking-[0.2em] text-foreground/40 uppercase">
            Founded by Takeshi Takimoto
          </p>
        </div>
      </div>
    </footer>
  );
}
