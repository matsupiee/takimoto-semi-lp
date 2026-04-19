import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

const IMPACT_CASES = [
  {
    no: "01",
    region: "千葉県",
    title: "AED条例の制定",
    body: "救命率を大きく左右するAEDの設置・運用ルールを自治体政策として実装。条例制定まで伴走した。",
    tag: "ORDINANCE",
  },
  {
    no: "02",
    region: "建築学会",
    title: "換気 × 学力の世界初メタアナリシス",
    body: "教室の換気量が学習成績に与える影響を世界で初めてメタ分析。建築学会にて研究発表を行った。",
    tag: "RESEARCH",
  },
  {
    no: "03",
    region: "東京理科大学",
    title: "消火器の効果検証",
    body: "火災初期対応の要となる消火器について、大学研究室と共同で効果を定量的に検証した。",
    tag: "EXPERIMENT",
  },
  {
    no: "04",
    region: "東京都世田谷区",
    title: "いじめ予防プログラムの導入",
    body: "教育現場に対して科学的エビデンスに基づくいじめ予防プログラムを提案、自治体レベルで実装。",
    tag: "EDUCATION",
  },
  {
    no: "05",
    region: "東京都中央区",
    title: "ベビーシッター支援事業",
    body: "子育て世代の負担軽減に向けたベビーシッター補助を政策提言。予算 400 万円規模で事業化。",
    tag: "FAMILY",
  },
  {
    no: "06",
    region: "東京都港区",
    title: "認知症 早期発見戦略",
    body: "超高齢社会を見据えた認知症の早期発見スキームを設計。予算 4,000 万円規模の事業として採択。",
    tag: "HEALTHCARE",
  },
] as const;

const CONCEPTS = [
  {
    no: "01",
    en: "RESEARCH",
    ja: "徹底調査",
    body: "国内外の先行研究・行政資料・統計を横断的に読み解き、課題の構造を解剖する。思い込みを排した一次情報ベースのリサーチが出発点。",
  },
  {
    no: "02",
    en: "INTERVIEW",
    ja: "専門家ヒアリング",
    body: "学術・行政・現場の第一人者へのヒアリングで仮説を磨き込む。学生だからこそ開かれるアクセスを最大限に活かす。",
  },
  {
    no: "03",
    en: "IMPLEMENT",
    ja: "社会実装",
    body: "提言書で終わらせない。条例・予算・事業化まで自治体と伴走し、課題解決を現実に落とし込む実装力を追求する。",
  },
] as const;

const UNIVERSITIES = [
  "東京大学",
  "一橋大学",
  "早稲田大学",
  "慶應義塾大学",
  "お茶の水女子大学",
  "その他",
] as const;

const STATS = [
  { value: "28", label: "現役メンバー", unit: "名" },
  { value: "6", label: "所属大学", unit: "校以上" },
  { value: "4,400", label: "動かした政策予算", unit: "万円+" },
] as const;

function HomeComponent() {
  return (
    <main id="top" className="relative">
      <Hero />
      <About />
      <Impact />
      <Concepts />
      <Members />
      <Join />
      <Footer />
    </main>
  );
}

function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-32 pb-24 md:pt-40 md:pb-40">
      <div className="absolute inset-0 grid-bg opacity-60" aria-hidden />
      <div
        className="pointer-events-none absolute -top-40 -right-32 size-[640px] rounded-full bg-accent/20 blur-[140px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute top-1/2 -left-40 size-[480px] rounded-full bg-accent/10 blur-[120px]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="flex items-center gap-3 font-display text-[11px] font-semibold tracking-[0.28em] text-accent">
          <span className="inline-block h-px w-10 bg-accent" />
          STUDENT-RUN POLICY THINK TANK
        </div>

        <h1 className="mt-8 max-w-5xl font-display text-[44px] leading-[1.02] font-black tracking-tight text-balance md:text-[92px] lg:text-[112px]">
          見過ごされた課題に、
          <br />
          <span className="text-accent">実装可能な</span>答えを。
        </h1>

        <p className="mt-10 max-w-2xl text-base leading-relaxed text-foreground/75 md:text-lg">
          瀧本ゼミ政策分析パートは、京都大学准教授・故 瀧本哲史が創設した学生主体の政策シンクタンク。
          <br />
          徹底したリサーチと専門家ヒアリングを武器に、重要なのに光の当たらない社会課題を解きほぐし、自治体と組んで条例・事業にまで落とし込みます。
        </p>

        <div className="mt-12 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <a
            href="#join"
            className="group inline-flex h-14 items-center gap-3 bg-accent px-7 font-display text-xs font-bold tracking-[0.2em] text-accent-foreground transition-all hover:bg-accent/90"
          >
            新メンバー募集中
            <span aria-hidden className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
          <a
            href="#impact"
            className="group inline-flex h-14 items-center gap-3 border border-white/20 px-7 font-display text-xs font-bold tracking-[0.2em] text-foreground transition-all hover:border-accent hover:text-accent"
          >
            実績をみる
            <span aria-hidden className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>

        <div className="mt-24 grid grid-cols-2 gap-px border border-white/10 bg-white/10 md:mt-32 md:grid-cols-3">
          {STATS.map((s) => (
            <div key={s.label} className="bg-background p-6 md:p-8">
              <div className="flex items-baseline gap-1">
                <span className="font-display text-4xl font-black tracking-tight text-foreground md:text-6xl">
                  {s.value}
                </span>
                <span className="font-display text-sm font-semibold text-accent md:text-base">
                  {s.unit}
                </span>
              </div>
              <div className="mt-2 font-display text-[11px] font-semibold tracking-[0.2em] text-muted-foreground md:text-xs">
                {s.label.toUpperCase()} — {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex">
        <span className="font-display text-[10px] font-semibold tracking-[0.3em] text-muted-foreground">
          SCROLL
        </span>
        <span className="h-12 w-px bg-gradient-to-b from-accent to-transparent" />
      </div>
    </section>
  );
}

function SectionLabel({ no, en, ja }: { no: string; en: string; ja: string }) {
  return (
    <div className="flex items-center gap-4 font-display">
      <span className="text-[11px] font-bold tracking-[0.3em] text-accent">[ {no} ]</span>
      <span className="h-px flex-1 max-w-12 bg-white/15" />
      <span className="text-[11px] font-bold tracking-[0.3em] text-foreground/80">{en}</span>
      <span className="text-[11px] font-semibold tracking-[0.2em] text-muted-foreground">/ {ja}</span>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="relative border-t border-white/10 py-24 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <SectionLabel no="01" en="ABOUT" ja="私たちについて" />
        <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-24">
          <h2 className="font-display text-3xl leading-[1.15] font-black tracking-tight text-balance md:text-5xl lg:text-6xl">
            重要なのに、
            <br className="hidden md:block" />
            語られない問いを。
          </h2>
          <div className="space-y-6 text-sm leading-loose text-foreground/75 md:text-base">
            <p>
              瀧本ゼミ政策分析パートは、徹底したリサーチと専門家へのヒアリングを重ね、
              <span className="text-foreground">本当に重要なのに光の当たっていない社会課題</span>
              を可視化し、実効性のある解決策を設計する学生シンクタンクです。
            </p>
            <p>
              扱うテーマは健康・教育・子育て・超高齢社会と多岐にわたりますが、共通しているのは
              <span className="text-foreground">
                「机上の提言で終わらせない」
              </span>
              という姿勢。自治体・行政・専門家と協働しながら、条例・予算・事業化の段階まで並走し、政策が社会に実装される瞬間を自分たちの手で起こしに行きます。
            </p>
            <dl className="mt-10 grid gap-8 border-t border-white/10 pt-10 sm:grid-cols-2">
              <div>
                <dt className="font-display text-[11px] font-bold tracking-[0.2em] text-accent">
                  FOUNDER
                </dt>
                <dd className="mt-2 font-display text-lg font-bold text-foreground">
                  瀧本 哲史
                </dd>
                <dd className="mt-1 text-xs text-muted-foreground">
                  京都大学 産官学連携本部 イノベーション・マネジメント・サイエンス研究部門 准教授
                </dd>
              </div>
              <div>
                <dt className="font-display text-[11px] font-bold tracking-[0.2em] text-accent">
                  ACTIVITY
                </dt>
                <dd className="mt-2 font-display text-lg font-bold text-foreground">
                  毎週月曜 19:00〜 ほか
                </dd>
                <dd className="mt-1 text-xs text-muted-foreground">
                  駒場エリアでの合同ゼミ／各班別のリサーチミーティング
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

function Impact() {
  return (
    <section id="impact" className="relative border-t border-white/10 bg-secondary/30 py-24 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div className="space-y-6">
            <SectionLabel no="02" en="IMPACT" ja="社会への実装" />
            <h2 className="max-w-3xl font-display text-3xl leading-[1.1] font-black tracking-tight text-balance md:text-5xl lg:text-6xl">
              提言ではなく、
              <br className="hidden md:block" />
              <span className="text-accent">結果</span>
              で語る。
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-foreground/70 md:text-base">
            学生発の研究・提言が条例制定、学術発表、自治体予算の獲得まで結実した代表的なプロジェクト。
          </p>
        </div>

        <div className="mt-16 grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {IMPACT_CASES.map((c) => (
            <article
              key={c.no}
              className="group relative flex flex-col justify-between gap-8 bg-background p-7 transition-colors hover:bg-card md:p-9"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="font-display text-5xl font-black tracking-tighter text-white/10 transition-colors group-hover:text-accent/40 md:text-6xl">
                  {c.no}
                </span>
                <span className="inline-flex h-6 items-center border border-accent/40 px-2 font-display text-[10px] font-bold tracking-[0.18em] text-accent">
                  {c.tag}
                </span>
              </div>
              <div className="space-y-3">
                <div className="font-display text-[11px] font-semibold tracking-[0.18em] text-muted-foreground">
                  {c.region}
                </div>
                <h3 className="font-display text-xl leading-tight font-bold text-foreground md:text-2xl">
                  {c.title}
                </h3>
                <p className="text-xs leading-relaxed text-foreground/70 md:text-sm">{c.body}</p>
              </div>
              <span
                aria-hidden
                className="absolute right-6 bottom-6 font-display text-lg text-muted-foreground transition-all group-hover:text-accent group-hover:translate-x-1"
              >
                →
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Concepts() {
  return (
    <section id="concepts" className="relative border-t border-white/10 py-24 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <SectionLabel no="03" en="CONCEPTS" ja="3つの行動指針" />
        <h2 className="mt-10 max-w-4xl font-display text-3xl leading-[1.1] font-black tracking-tight text-balance md:text-5xl lg:text-6xl">
          リサーチから
          <span className="text-accent">社会実装</span>
          まで。
        </h2>

        <div className="mt-20 grid gap-16 lg:grid-cols-3">
          {CONCEPTS.map((c) => (
            <div key={c.no} className="relative">
              <div className="flex items-baseline gap-4">
                <span className="font-display text-[11px] font-bold tracking-[0.3em] text-accent">
                  {c.no}
                </span>
                <span className="h-px w-16 bg-accent/60" />
              </div>
              <h3 className="mt-8 font-display text-4xl font-black tracking-tight text-foreground md:text-5xl">
                {c.en}
              </h3>
              <div className="mt-1 font-display text-sm font-semibold tracking-[0.1em] text-muted-foreground">
                {c.ja}
              </div>
              <p className="mt-6 text-sm leading-loose text-foreground/75 md:text-base">
                {c.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Members() {
  return (
    <section id="members" className="relative border-t border-white/10 bg-secondary/30 py-24 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-24">
          <div>
            <SectionLabel no="04" en="MEMBERS" ja="所属メンバー" />
            <h2 className="mt-10 font-display text-3xl leading-[1.1] font-black tracking-tight text-balance md:text-5xl lg:text-6xl">
              大学の枠を
              <br />
              越えて集まる
              <span className="text-accent">28名。</span>
            </h2>
            <p className="mt-8 max-w-md text-sm leading-relaxed text-foreground/75 md:text-base">
              関東圏を中心に、分野も学年も異なる学生がフラットに議論を交わします。出身・所属を問わず、課題に本気で向き合う人を歓迎しています。
            </p>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-3 gap-px border border-white/10 bg-white/10">
              {[
                { v: "6", l: "3 年生" },
                { v: "11", l: "2 年生" },
                { v: "11", l: "1 年生" },
              ].map((g) => (
                <div key={g.l} className="bg-background p-6 text-center md:p-8">
                  <div className="font-display text-4xl font-black text-accent md:text-5xl">
                    {g.v}
                  </div>
                  <div className="mt-2 font-display text-[11px] font-semibold tracking-[0.2em] text-muted-foreground">
                    {g.l}
                  </div>
                </div>
              ))}
            </div>

            <div className="border border-white/10 bg-background p-6 md:p-8">
              <div className="font-display text-[11px] font-bold tracking-[0.2em] text-accent">
                UNIVERSITIES
              </div>
              <ul className="mt-5 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2">
                {UNIVERSITIES.map((u, i) => (
                  <li
                    key={u}
                    className="flex items-center gap-3 border-t border-white/5 py-3 font-display text-sm font-semibold text-foreground first:border-t-0 sm:[&:nth-child(2)]:border-t-0"
                  >
                    <span className="font-mono text-xs text-muted-foreground">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {u}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Join() {
  return (
    <section id="join" className="relative isolate overflow-hidden border-t border-white/10 py-24 md:py-40">
      <div className="absolute inset-0 grid-bg opacity-50" aria-hidden />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-accent/20 to-transparent"
        aria-hidden
      />

      <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
        <SectionLabel no="05" en="JOIN US" ja="参加募集" />
        <div className="mt-10 grid gap-16 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
          <div>
            <h2 className="max-w-3xl font-display text-4xl leading-[1.05] font-black tracking-tight text-balance md:text-6xl lg:text-7xl">
              次の条例を、
              <br />
              <span className="text-accent">一緒に動かす。</span>
            </h2>
            <p className="mt-10 max-w-xl text-sm leading-relaxed text-foreground/75 md:text-base">
              大学・学年・専攻は問いません。
              社会課題を自分たちの手で動かしたい人、ロジカルなリサーチに没頭できる人、地味でも本質的な仕事を好む人を歓迎します。新歓・見学は随時受付中。
            </p>
            <div className="mt-12 flex flex-col gap-4 sm:flex-row">
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex h-14 items-center justify-center gap-3 bg-accent px-8 font-display text-xs font-bold tracking-[0.2em] text-accent-foreground transition-all hover:bg-accent/90"
              >
                お問い合わせ
                <span aria-hidden className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex h-14 items-center justify-center gap-3 border border-white/20 px-8 font-display text-xs font-bold tracking-[0.2em] text-foreground transition-all hover:border-accent hover:text-accent"
              >
                SNS をフォロー
                <span aria-hidden className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>

          <dl className="grid content-start gap-px border border-white/10 bg-white/10">
            {[
              { k: "ACTIVITY", v: "毎週月曜 19:00〜", sub: "各班別のリサーチも随時開催" },
              { k: "LOCATION", v: "駒場エリア / オンライン", sub: "ハイブリッド開催" },
              { k: "MEMBERS", v: "28 名・6 大学以上", sub: "学年・専攻不問" },
              { k: "APPLY", v: "随時受付", sub: "新歓・見学歓迎" },
            ].map((row) => (
              <div key={row.k} className="flex items-start justify-between gap-6 bg-background p-6 md:p-7">
                <dt className="font-display text-[11px] font-bold tracking-[0.2em] text-accent">
                  {row.k}
                </dt>
                <dd className="text-right">
                  <div className="font-display text-base font-bold text-foreground md:text-lg">
                    {row.v}
                  </div>
                  <div className="mt-1 text-[11px] text-muted-foreground">{row.sub}</div>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-background">
      <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr] md:gap-16">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex size-8 items-center justify-center bg-accent text-accent-foreground">
                <span className="font-display text-sm font-black tracking-tighter">T</span>
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-display text-[10px] font-bold tracking-[0.18em] text-muted-foreground">
                  TAKIMOTO SEMINAR
                </span>
                <span className="font-display text-sm font-bold tracking-wide">
                  政策分析パート
                </span>
              </span>
            </div>
            <p className="mt-6 max-w-sm text-xs leading-loose text-foreground/60 md:text-sm">
              見過ごされた社会課題に、実装可能な答えを。学生発の政策シンクタンク。
            </p>
          </div>

          <div>
            <div className="font-display text-[11px] font-bold tracking-[0.2em] text-accent">
              NAVIGATION
            </div>
            <ul className="mt-5 space-y-2 text-sm">
              {[
                { href: "#about", label: "ABOUT" },
                { href: "#impact", label: "IMPACT" },
                { href: "#concepts", label: "CONCEPTS" },
                { href: "#members", label: "MEMBERS" },
                { href: "#join", label: "JOIN" },
              ].map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="font-display text-xs font-semibold tracking-[0.15em] text-foreground/70 transition-colors hover:text-accent"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="font-display text-[11px] font-bold tracking-[0.2em] text-accent">
              SOCIAL
            </div>
            <ul className="mt-5 space-y-2 text-sm">
              {[
                { href: "https://twitter.com/", label: "TWITTER / X" },
                { href: "https://www.instagram.com/", label: "INSTAGRAM" },
              ].map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    className="font-display text-xs font-semibold tracking-[0.15em] text-foreground/70 transition-colors hover:text-accent"
                  >
                    {l.label} →
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-xs text-muted-foreground md:flex-row md:items-center">
          <span className="font-mono">
            © {new Date().getFullYear()} TAKIMOTO SEMINAR / POLICY ANALYSIS PART
          </span>
          <span className="font-display font-semibold tracking-[0.2em]">
            MADE WITH RESEARCH × IMPLEMENTATION
          </span>
        </div>
      </div>
    </footer>
  );
}
