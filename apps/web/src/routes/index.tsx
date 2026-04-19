import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Microscope, Presentation, Wrench } from "lucide-react";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

const UNIVERSITIES = ["東京大学", "一橋大学", "早稲田大学", "慶應義塾大学", "お茶の水女子大学"];

const ACTIVITIES = [
  {
    no: "01",
    icon: Microscope,
    title: "徹底リサーチ",
    en: "Research",
    body: "一次情報と専門家ヒアリングを起点に、世の中で見過ごされている課題の構造を解剖する。",
  },
  {
    no: "02",
    icon: Presentation,
    title: "政策提言",
    en: "Proposal",
    body: "学術的エビデンスに基づき、実行可能な政策パッケージを設計。議員・行政へ直接届ける。",
  },
  {
    no: "03",
    icon: Wrench,
    title: "社会実装",
    en: "Implementation",
    body: "条例制定・事業化まで伴走する。「提言で終わらない」ことが、私たちの矜持。",
  },
];

const ACHIEVEMENTS = [
  {
    tag: "公衆衛生",
    year: "2019",
    title: "千葉県「AED普及と使用促進に関する条例」制定",
    body: "救命率向上へ、自治体初となる条例制定に寄与。議員連盟への政策提言から条文化まで伴走。",
  },
  {
    tag: "教育 × 医学",
    year: "2021",
    title: "換気と学力に関する世界初のメタアナリシス",
    body: "CO₂濃度と認知パフォーマンスの関係を初めて統合解析。学校環境基準の議論に一石を投じた。",
  },
  {
    tag: "児童福祉",
    year: "2020",
    title: "東京都 ベビーシッター利用支援事業の拡充",
    body: "共働き家庭の負担を軽減する制度設計を提言し、東京都の事業スキーム拡張につなげた。",
  },
  {
    tag: "いじめ対策",
    year: "2022",
    title: "自治体のいじめ対策ガイドライン策定支援",
    body: "海外先進事例と国内統計を突き合わせ、実効性のある運用指針を提示。",
  },
  {
    tag: "超高齢社会",
    year: "2023",
    title: "認知症フレンドリー施策のパッケージ設計",
    body: "早期発見・コミュニティ包摂・家族支援の三層構造で、自治体導入を実現。",
  },
];

const MEMBER_STATS = [
  { year: "B3", count: 6 },
  { year: "B2", count: 11 },
  { year: "B1", count: 11 },
];

function HomeComponent() {
  return (
    <div className="font-jp relative overflow-x-hidden bg-background text-foreground">
      <Hero />
      <Marquee />
      <About />
      <Activities />
      <Achievements />
      <Members />
      <Schedule />
      <Join />
    </div>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-end overflow-hidden bg-[#050607] pt-32 pb-20"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-[#00d4a3]/10 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[120px]"
      />

      <div className="relative mx-auto grid w-full max-w-[1440px] grid-cols-12 gap-6 px-6 md:px-10">
        <div className="col-span-12 lg:col-span-10">
          <p className="mb-8 flex items-center gap-3 text-xs tracking-[0.3em] text-[#00d4a3] uppercase">
            <span className="inline-block h-px w-10 bg-[#00d4a3]" />
            Policy Analysis Division — since 2008
          </p>
          <h1 className="font-jp text-[13vw] leading-[0.9] font-black tracking-tight text-white md:text-[9vw] lg:text-[7.5rem] xl:text-[9rem]">
            知られざる、
            <br />
            <span className="relative inline-block">
              <span className="relative z-10">重要な課題へ。</span>
              <span
                aria-hidden
                className="absolute inset-x-0 bottom-2 z-0 h-3 bg-[#00d4a3]/40 md:h-5"
              />
            </span>
          </h1>
          <p className="mt-10 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
            瀧本ゼミ政策分析パートは、徹底的なリサーチと専門家ヒアリングで「まだ誰も解いていない問題」を解き、条例・事業として社会に実装する学生シンクタンクです。
          </p>

          <div className="mt-12 flex flex-wrap items-center gap-4">
            <a
              href="#about"
              className="group inline-flex items-center gap-3 bg-white px-7 py-4 text-sm font-bold tracking-[0.15em] text-black uppercase transition-all hover:bg-[#00d4a3]"
            >
              View Our Work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#join"
              className="group inline-flex items-center gap-3 border border-white/30 px-7 py-4 text-sm font-bold tracking-[0.15em] text-white uppercase transition-all hover:border-white hover:bg-white/5"
            >
              Join Us
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>
        </div>

        <div className="col-span-12 mt-16 grid grid-cols-3 gap-8 border-t border-white/10 pt-10 lg:col-span-10 lg:col-start-3 lg:mt-24">
          {[
            { num: "28", label: "Active Members" },
            { num: "5+", label: "Universities" },
            { num: "15+", label: "Policy Outcomes" },
          ].map((s) => (
            <div key={s.label}>
              <div className="font-jp text-4xl font-black text-white md:text-6xl">{s.num}</div>
              <div className="mt-2 text-[10px] tracking-[0.2em] text-white/50 uppercase md:text-xs">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute right-8 bottom-8 hidden items-center gap-3 text-xs tracking-[0.2em] text-white/40 uppercase md:flex">
        <span>Scroll</span>
        <span className="inline-block h-10 w-px bg-white/40" />
      </div>
    </section>
  );
}

function Marquee() {
  const items = [
    "RESEARCH",
    "POLICY",
    "IMPLEMENTATION",
    "EVIDENCE",
    "SOCIETY",
    "STUDENTS",
    "THINK TANK",
  ];
  return (
    <div className="overflow-hidden border-y border-white/10 bg-background py-6">
      <div className="flex animate-[marquee_40s_linear_infinite] gap-16 whitespace-nowrap">
        {[...items, ...items, ...items].map((item, i) => (
          <span
            key={i}
            className="font-jp text-2xl font-black tracking-[0.3em] text-white/20 uppercase md:text-3xl"
          >
            {item} <span className="text-[#00d4a3]">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="relative bg-background py-28 md:py-36">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.6fr]">
          <div>
            <p className="text-xs tracking-[0.3em] text-[#00d4a3] uppercase">— About</p>
            <h2 className="font-jp mt-6 text-4xl leading-[1.15] font-black tracking-tight text-white md:text-6xl">
              学生が
              <br />
              政策を動かす。
            </h2>
          </div>
          <div className="space-y-6 text-base leading-loose text-white/75 md:text-lg">
            <p>
              瀧本ゼミ政策分析パートは、京都大学客員准教授・
              <span className="font-bold text-white">瀧本哲史</span>
              が立ち上げた、インカレ自主ゼミ／学生シンクタンクです。
            </p>
            <p>
              「知られているが解かれていない問題」ではなく、
              <span className="font-bold text-white">「知られていないが、実は重要な問題」</span>
              を探し出すことに価値がある——この信念のもと、私たちは徹底的な一次リサーチと専門家ヒアリングを重ね、エビデンスに基づく政策を設計・実装してきました。
            </p>
            <p>
              東京大学・一橋大学・早稲田大学・慶應義塾大学・お茶の水女子大学。所属大学も専攻もバラバラな学部生が、週2日、本気で社会と向き合っています。
            </p>

            <div className="mt-10 flex flex-wrap gap-2">
              {UNIVERSITIES.map((u) => (
                <span
                  key={u}
                  className="font-jp border border-white/20 px-4 py-2 text-xs tracking-wider text-white/80"
                >
                  {u}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Activities() {
  return (
    <section
      id="activities"
      className="relative border-t border-white/10 bg-[#0a0b0d] py-28 md:py-36"
    >
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="mb-20 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-xs tracking-[0.3em] text-[#00d4a3] uppercase">— Activities</p>
            <h2 className="font-jp mt-6 text-4xl leading-[1.1] font-black tracking-tight text-white md:text-6xl">
              研究 → 提言 → 実装
              <br />
              <span className="text-white/40">その一気通貫。</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-white/60">
            提言して終わりではない。条例になり、制度になり、人の手に届くところまで、私たちは関与する。
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {ACTIVITIES.map(({ no, icon: Icon, title, en, body }) => (
            <article
              key={no}
              className="group relative flex flex-col justify-between overflow-hidden border border-white/10 bg-[#111316] p-8 transition-all duration-500 hover:-translate-y-1 hover:border-[#00d4a3]/60 md:min-h-[380px]"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(circle at top right, rgba(0,212,163,0.15), transparent 60%)",
                }}
              />
              <div className="relative z-10 flex items-start justify-between">
                <span className="font-jp text-sm font-bold tracking-[0.2em] text-[#00d4a3]">
                  {no}
                </span>
                <Icon className="h-6 w-6 text-white/40 transition-colors group-hover:text-[#00d4a3]" />
              </div>
              <div className="relative z-10 mt-20">
                <p className="text-xs tracking-[0.25em] text-white/40 uppercase">{en}</p>
                <h3 className="font-jp mt-3 text-3xl font-black text-white">{title}</h3>
                <p className="font-jp mt-6 text-sm leading-relaxed text-white/65">{body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Achievements() {
  return (
    <section id="achievements" className="relative bg-background py-28 md:py-36">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-xs tracking-[0.3em] text-[#00d4a3] uppercase">— Achievements</p>
            <h2 className="font-jp mt-6 text-4xl leading-[1.1] font-black tracking-tight text-white md:text-6xl">
              社会に届いた、
              <br />
              実績。
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-white/60">
            条例制定・事業化・世界初の研究発表——これまで私たちが社会に残してきた痕跡の一部です。
          </p>
        </div>

        <div className="divide-y divide-white/10 border-y border-white/10">
          {ACHIEVEMENTS.map((a, i) => (
            <a
              key={a.title}
              href="#join"
              className="group grid grid-cols-1 items-start gap-6 py-8 transition-colors hover:bg-white/[0.03] md:grid-cols-[80px_180px_1fr_40px] md:items-center md:gap-10 md:px-4"
            >
              <div className="font-jp text-xs tracking-[0.2em] text-white/40">
                {String(i + 1).padStart(2, "0")} / {String(ACHIEVEMENTS.length).padStart(2, "0")}
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-jp border border-[#00d4a3]/40 bg-[#00d4a3]/10 px-3 py-1 text-xs text-[#00d4a3]">
                  {a.tag}
                </span>
                <span className="text-xs tracking-wider text-white/40">{a.year}</span>
              </div>
              <div>
                <h3 className="font-jp text-xl leading-snug font-bold text-white transition-colors group-hover:text-[#00d4a3] md:text-2xl">
                  {a.title}
                </h3>
                <p className="font-jp mt-2 text-sm leading-relaxed text-white/60">{a.body}</p>
              </div>
              <ArrowUpRight className="hidden h-6 w-6 text-white/30 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#00d4a3] md:block" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Members() {
  const total = MEMBER_STATS.reduce((s, m) => s + m.count, 0);
  return (
    <section id="members" className="relative border-t border-white/10 bg-[#0a0b0d] py-28 md:py-36">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <p className="text-xs tracking-[0.3em] text-[#00d4a3] uppercase">— Members</p>
            <h2 className="font-jp mt-6 text-4xl leading-[1.1] font-black tracking-tight text-white md:text-6xl">
              28人の
              <br />
              現役学部生。
            </h2>
            <p className="font-jp mt-8 max-w-md text-sm leading-loose text-white/65">
              首都圏5大学から集まった学部1〜3年生が、互いの専門と視点を交差させながら活動しています。
            </p>
          </div>

          <div className="flex flex-col justify-center">
            <div className="grid grid-cols-3 gap-px overflow-hidden border border-white/10 bg-white/10">
              {MEMBER_STATS.map((m) => (
                <div key={m.year} className="bg-[#0a0b0d] p-8 md:p-10">
                  <p className="text-xs tracking-[0.25em] text-white/40 uppercase">{m.year}</p>
                  <p className="font-jp mt-4 text-5xl font-black text-white md:text-7xl">
                    {m.count}
                  </p>
                  <p className="font-jp mt-2 text-xs text-white/50">
                    名 / {Math.round((m.count / total) * 100)}%
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-6">
              <span className="text-xs tracking-[0.2em] text-white/40 uppercase">Total</span>
              <span className="font-jp text-3xl font-black text-[#00d4a3]">{total} 名</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Schedule() {
  return (
    <section className="relative bg-background py-28 md:py-36">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="group relative overflow-hidden border border-white/10 bg-[#111316] p-10 transition-all hover:border-[#00d4a3]/60 md:p-14">
            <p className="text-xs tracking-[0.25em] text-[#00d4a3] uppercase">Main Session</p>
            <h3 className="font-jp mt-5 text-3xl font-black text-white md:text-4xl">
              月曜日 19:00〜
            </h3>
            <p className="font-jp mt-4 text-sm leading-relaxed text-white/60">
              駒場キャンパス周辺で、全体会。進捗共有・ディスカッション・専門家セッションを行います。
            </p>
            <div
              aria-hidden
              className="absolute -right-20 -bottom-20 h-60 w-60 rounded-full bg-[#00d4a3]/5 blur-3xl transition-all group-hover:bg-[#00d4a3]/20"
            />
          </div>
          <div className="group relative overflow-hidden border border-white/10 bg-[#111316] p-10 transition-all hover:border-[#00d4a3]/60 md:p-14">
            <p className="text-xs tracking-[0.25em] text-[#00d4a3] uppercase">Research Session</p>
            <h3 className="font-jp mt-5 text-3xl font-black text-white md:text-4xl">
              週1回 リサーチ会
            </h3>
            <p className="font-jp mt-4 text-sm leading-relaxed text-white/60">
              チームごとに分かれ、文献サーベイ・データ分析・ヒアリング準備などを進めるワーキングセッション。
            </p>
            <div
              aria-hidden
              className="absolute -right-20 -bottom-20 h-60 w-60 rounded-full bg-blue-500/5 blur-3xl transition-all group-hover:bg-blue-500/20"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Join() {
  return (
    <section id="join" className="relative border-t border-white/10 bg-background py-28 md:py-40">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
      <div className="relative mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <p className="text-xs tracking-[0.3em] text-[#00d4a3] uppercase">— Join Us</p>
            <h2 className="font-jp mt-6 text-5xl leading-[1.05] font-black tracking-tight text-white md:text-7xl">
              社会を、
              <br />
              自分の手で
              <br />
              <span className="relative inline-block">
                動かす側へ。
                <span aria-hidden className="absolute inset-x-0 bottom-2 h-4 bg-[#00d4a3]/40" />
              </span>
            </h2>
            <p className="font-jp mt-8 max-w-xl text-base leading-loose text-white/70">
              大学も専攻も不問。リサーチで妥協しない覚悟と、社会を動かしたいという意志があれば、私たちは歓迎します。
            </p>
          </div>

          <div className="space-y-4">
            <a
              href="https://twitter.com/tsemiseisaku"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between border border-white/15 bg-[#111316] p-6 transition-all hover:border-[#00d4a3] hover:bg-[#00d4a3] hover:text-black md:p-8"
            >
              <div>
                <p className="text-xs tracking-[0.25em] uppercase opacity-60">DM for Inquiry</p>
                <p className="font-jp mt-2 text-2xl font-black md:text-3xl">Twitter / X</p>
                <p className="mt-1 text-sm opacity-70">@tsemiseisaku</p>
              </div>
              <ArrowUpRight className="h-8 w-8 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
            <a
              href="https://www.instagram.com/tsemiseisaku/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between border border-white/15 bg-[#111316] p-6 transition-all hover:border-[#00d4a3] hover:bg-[#00d4a3] hover:text-black md:p-8"
            >
              <div>
                <p className="text-xs tracking-[0.25em] uppercase opacity-60">Follow</p>
                <p className="font-jp mt-2 text-2xl font-black md:text-3xl">Instagram</p>
                <p className="mt-1 text-sm opacity-70">@tsemiseisaku</p>
              </div>
              <ArrowUpRight className="h-8 w-8 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
