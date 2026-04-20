const marqueeKeywords = [
  "POLICY",
  "RESEARCH",
  "SOCIETY",
  "STUDENTS",
  "ACTION",
  "DIALOGUE",
  "FIELD",
  "DATA",
  "IMPACT",
  "FUTURE",
];

const marqueeBottom = [
  "政策提言",
  "社会課題",
  "現場主義",
  "ヒアリング",
  "リサーチ",
  "行政連携",
  "学生の本気",
  "未来を動かす",
];

const headlineChars = ["政", "策", "で", "、", "社", "会", "を", "動", "か", "す", "。"];

export default function Hero() {
  return (
    <section
      aria-label="ヒーロー"
      className="hero-gradient-bg relative isolate h-[calc(100vh-4rem)] min-h-[640px] w-full overflow-hidden"
    >
      {/* Animated background shapes */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="hero-anim-blob absolute -top-24 -left-24 h-[420px] w-[420px] rounded-full bg-[#1877f2]/25 blur-3xl" />
        <div
          className="hero-anim-blob absolute top-1/3 -right-32 h-[520px] w-[520px] rounded-full bg-[#5aa9ff]/30 blur-3xl"
          style={{ animationDelay: "-4s" }}
        />
        <div
          className="hero-anim-blob absolute -bottom-32 left-1/4 h-[380px] w-[380px] rounded-full bg-[#a7d0ff]/40 blur-3xl"
          style={{ animationDelay: "-8s" }}
        />

        {/* Floating decorative elements */}
        <div className="hero-anim-float-a absolute top-[18%] left-[8%] h-16 w-16 rounded-2xl bg-[#1877f2]/90 shadow-lg shadow-[#1877f2]/30" />
        <div className="hero-anim-float-b absolute top-[22%] right-[12%] h-24 w-24 rounded-full border-[6px] border-[#1877f2]/80" />
        <div className="hero-anim-float-c absolute bottom-[24%] left-[14%] h-12 w-12 rotate-12 rounded-lg bg-[#1c2b33]/90" />
        <div className="hero-anim-float-a absolute bottom-[18%] right-[18%] h-20 w-20 rounded-full bg-gradient-to-br from-[#1877f2] to-[#5aa9ff]" />

        <svg
          className="hero-anim-spin-slow absolute top-[30%] right-[30%] h-28 w-28 text-[#1877f2]/60"
          viewBox="0 0 100 100"
          fill="none"
        >
          <path d="M50 5 L56 44 L95 50 L56 56 L50 95 L44 56 L5 50 L44 44 Z" fill="currentColor" />
        </svg>

        <svg
          className="hero-anim-spin-reverse absolute bottom-[30%] left-[32%] h-20 w-20 text-[#1c2b33]"
          viewBox="0 0 100 100"
        >
          <polygon points="50,5 95,82 5,82" fill="currentColor" />
        </svg>

        {/* Dot grid */}
        <div className="hero-anim-float-c absolute top-[12%] right-[38%] grid grid-cols-4 gap-2 opacity-70">
          {Array.from({ length: 16 }).map((_, i) => (
            <span key={i} className="h-1.5 w-1.5 rounded-full bg-[#1c2b33]" />
          ))}
        </div>

        {/* Pulse ring */}
        <div className="absolute top-[68%] right-[8%] h-24 w-24">
          <span className="hero-anim-pulse-ring absolute inset-0 rounded-full border-2 border-[#1877f2]" />
          <span
            className="hero-anim-pulse-ring absolute inset-0 rounded-full border-2 border-[#1877f2]"
            style={{ animationDelay: "-1.2s" }}
          />
        </div>
      </div>

      {/* Top marquee */}
      <div
        aria-hidden
        className="absolute top-6 left-0 flex w-full overflow-hidden whitespace-nowrap"
      >
        <div className="hero-anim-marquee flex shrink-0">
          {[...marqueeKeywords, ...marqueeKeywords].map((word, i) => (
            <span
              key={`top-${i}`}
              className="mx-6 text-xs font-bold tracking-[0.3em] text-[#1c2b33]/40 md:text-sm"
            >
              {word} <span className="mx-4 text-[#1877f2]">◆</span>
            </span>
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-6 md:px-16">
        <div
          className="hero-reveal-side inline-flex w-fit items-center gap-3 rounded-full border border-[#1877f2]/30 bg-white/70 px-4 py-2 backdrop-blur"
          style={{ animationDelay: "0.1s" }}
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#1877f2] opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#1877f2]" />
          </span>
          <span className="text-xs font-semibold tracking-[0.2em] text-[#1c2b33] md:text-sm">
            TAKIMOTO SEMINAR — 2026
          </span>
        </div>

        <h1 className="mt-8 flex flex-wrap font-semibold leading-[1.05] tracking-tight text-[#1c2b33] text-5xl md:text-7xl lg:text-[104px]">
          {headlineChars.map((ch, i) => (
            <span
              key={`${ch}-${i}`}
              className="hero-reveal inline-block"
              style={{ animationDelay: `${0.25 + i * 0.06}s` }}
            >
              {ch}
            </span>
          ))}
        </h1>

        <p
          className="hero-reveal mt-6 max-w-2xl text-base leading-relaxed text-[#1c2b33]/80 md:text-xl"
          style={{ animationDelay: "1.2s" }}
        >
          学生が本気で世の中を変える。
          <br className="hidden md:block" />
          現場を歩き、データに向き合い、政策で社会を動かすゼミ。
        </p>

        <div
          className="hero-reveal mt-10 flex flex-wrap items-center gap-4"
          style={{ animationDelay: "1.5s" }}
        >
          <a
            href="#mission"
            aria-label="ゼミのミッションを見る"
            className="hero-shine group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-[#1877f2] px-7 py-4 text-[15px] font-semibold text-white shadow-lg shadow-[#1877f2]/40 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#1877f2]/50"
          >
            ゼミのミッション
            <svg
              className="transition group-hover:translate-x-1"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href="#recruit"
            aria-label="新歓案内を見る"
            className="inline-flex items-center gap-2 rounded-full border border-[#1c2b33]/20 bg-white/60 px-7 py-4 text-[15px] font-semibold text-[#1c2b33] backdrop-blur transition hover:bg-white"
          >
            新歓案内
          </a>
        </div>

        {/* Stats strip */}
        <div
          className="hero-reveal mt-12 flex flex-wrap gap-6 text-[#1c2b33] md:gap-10"
          style={{ animationDelay: "1.8s" }}
        >
          {[
            { num: "20+", label: "年の歴史" },
            { num: "100+", label: "政策提言" },
            { num: "∞", label: "本気の学生" },
          ].map((s) => (
            <div key={s.label} className="flex flex-col">
              <span className="font-semibold text-3xl md:text-4xl">{s.num}</span>
              <span className="mt-1 text-xs tracking-widest text-[#1c2b33]/60 md:text-sm">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom marquee */}
      <div
        aria-hidden
        className="absolute bottom-20 left-0 flex w-full overflow-hidden whitespace-nowrap border-y border-[#1c2b33]/10 bg-white/40 py-3 backdrop-blur-sm"
      >
        <div className="hero-anim-marquee-reverse flex shrink-0">
          {[...marqueeBottom, ...marqueeBottom].map((word, i) => (
            <span
              key={`bot-${i}`}
              className="mx-8 font-semibold tracking-wide text-[#1877f2] text-lg md:text-2xl"
            >
              {word} <span className="mx-4 text-[#1c2b33]/40">/</span>
            </span>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        aria-hidden
        className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-[0.3em] text-[#1c2b33]/60">SCROLL</span>
        <div className="flex h-8 w-5 items-start justify-center rounded-full border border-[#1c2b33]/40 p-1">
          <span className="hero-anim-bounce-soft block h-2 w-1 rounded-full bg-[#1c2b33]/60" />
        </div>
      </div>
    </section>
  );
}
