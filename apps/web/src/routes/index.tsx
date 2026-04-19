import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

const KEYWORDS = [
  {
    no: "01",
    en: "DISCOVERY",
    ja: "課題発見",
    body: "メディアでまだ語られていない、しかし社会に確かに存在する重要な課題を、データと現場感覚の両面から見つけ出す。",
  },
  {
    no: "02",
    en: "RESEARCH",
    ja: "徹底取材",
    body: "国内外の論文・統計の精読に加え、第一線の研究者・行政官・実務家への直接取材を通じて、一次情報から仮説を立てる。",
  },
  {
    no: "03",
    en: "PROPOSAL",
    ja: "政策提言",
    body: "自治体・国会議員・省庁へ提言を持ち込み、条例・予算・プログラムとして社会実装される段階まで伴走する。",
  },
];

const REPORTS = [
  {
    cat: "Public Health",
    year: "2024",
    title: "AED設置促進条例の制定",
    place: "千葉県",
    desc: "心停止時の生存率向上を目的に、AEDの設置・維持管理を求める条例の制定を提言。県議会での可決に至った。",
  },
  {
    cat: "Education",
    year: "2024",
    title: "換気と学力の関係",
    place: "国際メタアナリシス",
    desc: "教室の換気状況が児童生徒の学業成績に与える影響を、世界で初めてメタアナリシスとして体系化した研究。",
  },
  {
    cat: "Disaster",
    year: "2023",
    title: "消火器の有効性検証",
    place: "東京理科大学 共同研究",
    desc: "家庭・職場における初期消火の効果を実証実験で検証。火災被害低減に向けた具体的な政策提案へ接続。",
  },
  {
    cat: "Education",
    year: "2023",
    title: "傍観者に着目したいじめ予防プログラム",
    place: "東京都 世田谷区",
    desc: "国内外のエビデンスに基づき、傍観者の介入を促すプログラムを設計。区の教育委員会と連携して実装。",
  },
  {
    cat: "Family",
    year: "2023",
    title: "ベビーシッター利用促進事業",
    place: "東京都 中央区 (4百万円規模)",
    desc: "共働き世帯の負担軽減を目的に、ベビーシッター費用補助の制度設計を提案。区の予算化に貢献。",
  },
  {
    cat: "Healthcare",
    year: "2022",
    title: "認知症の早期発見事業",
    place: "東京都 港区 (4千万円規模)",
    desc: "MCI(軽度認知障害)段階からの介入を可能にする早期発見スキームを提案。区の本予算として採択。",
  },
];

const STATS = [
  { value: "28", label: "Active Members", sub: "学部1〜3年" },
  { value: "6+", label: "Universities", sub: "東大 / 一橋 / 早慶 ほか" },
  { value: "10+", label: "Policies Adopted", sub: "条例・予算・プログラム" },
  { value: "2/wk", label: "Sessions", sub: "月19:00 + 研究会" },
];

const UNIS = [
  "東京大学",
  "一橋大学",
  "早稲田大学",
  "慶應義塾大学",
  "お茶の水女子大学",
  "東京工業大学",
  "東京医科歯科大学",
  "ICU",
];

function HomeComponent() {
  return (
    <div className="overflow-x-clip">
      <Hero />
      <About />
      <Keywords />
      <Reports />
      <Stats />
      <Members />
      <Recruit />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-32 pb-24 lg:pt-44 lg:pb-32">
      <BackgroundGrid />
      <BackgroundOrbs />

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-2 border border-white/15 bg-white/5 px-3 py-1.5 text-[10px] font-medium tracking-[0.2em] text-brand uppercase backdrop-blur">
            <span className="size-1.5 animate-pulse rounded-full bg-brand" />
            Student-led Think Tank
          </span>
          <span className="hidden text-[10px] tracking-[0.3em] text-muted-foreground uppercase sm:inline">
            est. by Tetsushi Takimoto
          </span>
        </div>

        <h1 className="mt-8 text-[40px] leading-[1.02] font-semibold tracking-tight sm:text-[64px] lg:text-[112px]">
          <span className="block">見過ごされた</span>
          <span className="block">
            <span className="bg-gradient-to-r from-brand via-brand-2 to-brand bg-clip-text text-transparent">
              社会課題
            </span>
            に、
          </span>
          <span className="block">学生から答えを。</span>
        </h1>

        <p className="mt-10 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          瀧本ゼミ 政策分析パートは、徹底的な調査と専門家への取材を武器に、
          まだ世の中で議論されていない政策課題を発見し、解決策を提言するインターカレッジの学生シンクタンクです。
        </p>

        <div className="mt-12 flex flex-wrap items-center gap-4">
          <a
            href="#recruit"
            className="group inline-flex h-12 items-center gap-3 bg-brand px-6 text-xs font-medium tracking-[0.18em] text-brand-foreground uppercase transition-all hover:bg-brand-2"
          >
            Join the seminar
            <span aria-hidden className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
          <a
            href="#reports"
            className="group inline-flex h-12 items-center gap-3 border border-white/15 bg-white/5 px-6 text-xs font-medium tracking-[0.18em] uppercase backdrop-blur transition-all hover:border-brand hover:text-brand"
          >
            View reports
            <span aria-hidden className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>

        <Marquee />
      </div>
    </section>
  );
}

function BackgroundGrid() {
  return (
    <div
      className="pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_top,black,transparent_75%)]"
      aria-hidden
    >
      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
    </div>
  );
}

function BackgroundOrbs() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden>
      <div className="absolute -top-40 -left-40 size-[640px] rounded-full bg-brand/30 blur-[140px]" />
      <div className="absolute -right-40 top-32 size-[520px] rounded-full bg-brand-2/30 blur-[140px]" />
      <div className="absolute bottom-0 left-1/3 size-[480px] rounded-full bg-cyan-400/15 blur-[140px]" />
    </div>
  );
}

function Marquee() {
  const items = [
    "AED条例 / 千葉県",
    "換気 × 学力",
    "傍観者の介入 / 世田谷",
    "消火器の有効性検証",
    "ベビーシッター補助 / 中央区",
    "認知症の早期発見 / 港区",
  ];
  const loop = [...items, ...items];
  return (
    <div className="mt-20 border-y border-white/10 py-4">
      <div className="flex gap-12 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="flex shrink-0 animate-[marquee_38s_linear_infinite] gap-12 whitespace-nowrap">
          {loop.map((t, i) => (
            <span
              key={i}
              className="flex items-center gap-3 text-xs tracking-[0.2em] text-muted-foreground uppercase"
            >
              <span className="size-1 rounded-full bg-brand" />
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function SectionLabel({ no, en, ja }: { no: string; en: string; ja: string }) {
  return (
    <div className="flex items-baseline gap-4">
      <span className="font-mono text-xs tracking-widest text-brand">{no}</span>
      <div>
        <h2 className="text-xs font-semibold tracking-[0.32em] uppercase">{en}</h2>
        <p className="mt-1 text-[11px] tracking-[0.2em] text-muted-foreground">{ja}</p>
      </div>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="relative border-t border-white/10 py-28 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionLabel no="01" en="About Us" ja="私たちについて" />
          <div>
            <p className="text-2xl leading-[1.5] font-medium tracking-tight sm:text-3xl lg:text-[40px] lg:leading-[1.4]">
              社会には、{" "}
              <span className="bg-gradient-to-r from-brand to-brand-2 bg-clip-text text-transparent">
                まだ気づかれていない重要な課題
              </span>
              {" "}が眠っている。
              <br />
              私たちは、その課題に最初に気づき、最後まで解決に伴走する学生集団です。
            </p>

            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              <Spec label="Founded by" value="瀧本 哲史 (京都大学 客員准教授)" />
              <Spec label="Type" value="Inter-college Student Think Tank" />
              <Spec label="Meeting" value="月曜 19:00 + 週1の研究会" />
              <Spec label="Location" value="東京都 駒場エリア" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Spec({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-t border-white/10 pt-4">
      <p className="text-[10px] font-semibold tracking-[0.25em] text-brand uppercase">{label}</p>
      <p className="mt-2 text-base font-medium">{value}</p>
    </div>
  );
}

function Keywords() {
  return (
    <section id="keywords" className="relative border-t border-white/10 bg-[#08080d] py-28 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <SectionLabel no="02" en="Three Keywords" ja="3つのキーワード" />
          <p className="max-w-md text-sm text-muted-foreground">
            私たちが大切にしている、課題発見から政策実装までの3つのフェーズ。
          </p>
        </div>

        <div className="mt-16 grid gap-px bg-white/10 lg:grid-cols-3">
          {KEYWORDS.map((k) => (
            <div
              key={k.no}
              className="group relative overflow-hidden bg-[#08080d] p-8 transition-colors hover:bg-[#0e0e16] lg:p-10"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs tracking-widest text-brand">/{k.no}</span>
                <span className="text-[10px] tracking-[0.3em] text-muted-foreground uppercase">
                  Keyword
                </span>
              </div>
              <h3 className="mt-12 text-3xl font-semibold tracking-tight lg:text-4xl">{k.ja}</h3>
              <p className="mt-2 text-xs font-semibold tracking-[0.3em] text-brand uppercase">
                {k.en}
              </p>
              <p className="mt-8 text-sm leading-relaxed text-muted-foreground">{k.body}</p>
              <div className="absolute right-0 bottom-0 left-0 h-px origin-left scale-x-0 bg-gradient-to-r from-brand via-brand-2 to-transparent transition-transform duration-500 group-hover:scale-x-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Reports() {
  return (
    <section id="reports" className="relative border-t border-white/10 py-28 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <SectionLabel no="03" en="Selected Reports" ja="主な研究・実績" />
          <p className="max-w-md text-sm text-muted-foreground">
            提言から条例・予算・プログラム化まで。社会実装に至った代表的な研究の一部を紹介します。
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {REPORTS.map((r) => (
            <article
              key={r.title}
              className="group relative flex flex-col border border-white/10 bg-white/[0.02] p-7 transition-all hover:-translate-y-1 hover:border-brand/50 hover:bg-white/[0.04]"
            >
              <div className="flex items-center justify-between text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
                <span className="border border-white/15 px-2 py-1 text-brand">{r.cat}</span>
                <span>{r.year}</span>
              </div>
              <h3 className="mt-8 text-xl font-semibold tracking-tight transition-colors group-hover:text-brand">
                {r.title}
              </h3>
              <p className="mt-2 text-xs tracking-wider text-muted-foreground">{r.place}</p>
              <p className="mt-6 flex-1 text-sm leading-relaxed text-muted-foreground">{r.desc}</p>
              <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-4 text-[10px] tracking-[0.2em] uppercase">
                <span className="text-muted-foreground">Read more</span>
                <span className="text-brand transition-transform group-hover:translate-x-1">→</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="relative border-t border-white/10 bg-[#08080d] py-20">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid grid-cols-2 gap-px bg-white/10 lg:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="bg-[#08080d] p-8 lg:p-10">
              <p className="font-mono text-xs tracking-widest text-brand">/{s.label}</p>
              <p className="mt-6 text-5xl font-semibold tracking-tight lg:text-6xl">{s.value}</p>
              <p className="mt-3 text-xs tracking-wider text-muted-foreground">{s.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Members() {
  return (
    <section id="members" className="relative border-t border-white/10 py-28 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionLabel no="04" en="Members" ja="メンバー構成" />
          <div>
            <p className="text-2xl leading-[1.5] font-medium tracking-tight sm:text-3xl lg:text-[40px] lg:leading-[1.4]">
              全国の難関大に通う{" "}
              <span className="text-brand">28名</span>{" "}
              の学部生が、専攻も学年も超えてフラットに議論しています。
            </p>

            <div className="mt-12 flex flex-wrap gap-2">
              {UNIS.map((u) => (
                <span
                  key={u}
                  className="border border-white/15 bg-white/5 px-4 py-2 text-xs tracking-wider transition-colors hover:border-brand hover:text-brand"
                >
                  {u}
                </span>
              ))}
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-3">
              <Counter value="6" label="3年生" />
              <Counter value="11" label="2年生" />
              <Counter value="11" label="1年生" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Counter({ value, label }: { value: string; label: string }) {
  return (
    <div className="border-t border-white/10 pt-4">
      <p className="font-mono text-[10px] tracking-widest text-brand">{label}</p>
      <p className="mt-2 text-3xl font-semibold tracking-tight">
        {value}
        <span className="ml-1 text-base text-muted-foreground">名</span>
      </p>
    </div>
  );
}

function Recruit() {
  return (
    <section id="recruit" className="relative isolate overflow-hidden border-t border-white/10">
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
        <div className="absolute inset-0 bg-gradient-to-br from-brand/20 via-transparent to-brand-2/20" />
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="mx-auto max-w-[1400px] px-6 py-28 lg:px-10 lg:py-36">
        <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <SectionLabel no="05" en="Recruitment" ja="採用情報" />
            <h2 className="mt-10 text-[44px] leading-[1.05] font-semibold tracking-tight sm:text-6xl lg:text-7xl">
              社会を動かす{" "}
              <span className="bg-gradient-to-r from-brand to-brand-2 bg-clip-text text-transparent">
                第一歩
              </span>
              を、一緒に。
            </h2>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              新歓・見学はいつでも歓迎しています。学年・大学・専攻は問いません。
              「世の中の見落とされた問いに、自分の手で答えたい」と思う方からの連絡をお待ちしています。
            </p>
          </div>

          <div className="border border-white/15 bg-background/60 p-8 backdrop-blur-xl lg:p-10">
            <p className="text-[10px] font-semibold tracking-[0.3em] text-brand uppercase">
              How to apply
            </p>
            <ul className="mt-6 space-y-5">
              {[
                {
                  step: "01",
                  title: "SNS から DM",
                  body: "X / Instagram の @tsemiseisaku までお気軽にご連絡ください。",
                },
                {
                  step: "02",
                  title: "見学に参加",
                  body: "月曜19:00からの定例会へご招待します。雰囲気を見てから判断してOK。",
                },
                {
                  step: "03",
                  title: "リサーチに参加",
                  body: "気になるテーマがあれば、その日からチームに入ってリサーチを開始できます。",
                },
              ].map((item) => (
                <li key={item.step} className="flex gap-5 border-t border-white/10 pt-5">
                  <span className="font-mono text-xs tracking-widest text-brand">{item.step}</span>
                  <div>
                    <p className="text-sm font-semibold">{item.title}</p>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                      {item.body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://twitter.com/tsemiseisaku"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex h-11 flex-1 items-center justify-center gap-2 bg-brand px-5 text-xs font-medium tracking-[0.2em] text-brand-foreground uppercase transition-colors hover:bg-brand-2"
              >
                X で連絡する
                <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </a>
              <a
                href="https://instagram.com/tsemiseisaku"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex h-11 flex-1 items-center justify-center gap-2 border border-white/15 bg-white/5 px-5 text-xs font-medium tracking-[0.2em] uppercase transition-colors hover:border-brand hover:text-brand"
              >
                Instagram
                <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
