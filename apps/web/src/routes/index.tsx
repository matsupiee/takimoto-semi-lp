import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

const STATS = [
  { value: "28", label: "現役メンバー", note: "学部1〜3年" },
  { value: "5+", label: "在籍大学", note: "東大・一橋・早慶 ほか" },
  { value: "10+", label: "政策実装", note: "条例・行政施策" },
  { value: "¥4,000万", label: "最大予算規模", note: "実装プロジェクト" },
] as const;

const ACHIEVEMENTS = [
  {
    tag: "公衆衛生",
    title: "千葉県AED普及条例の制定",
    summary:
      "全国で停滞しがちな AED 設置を後押しする条例化を、議員・自治体・有識者と連携して実現。救命率向上に直結する社会実装プロジェクト。",
    metric: "条例制定",
  },
  {
    tag: "教育環境",
    title: "換気と学力に関するメタアナリシス",
    summary:
      "国内外の論文を網羅的に分析し、教室環境の換気が学力に与える影響を定量的に提示。教育政策へのエビデンス提供を行った。",
    metric: "学術研究",
  },
  {
    tag: "防災",
    title: "消火器の効果検証プロジェクト",
    summary:
      "現場データと既存研究を突き合わせ、消火器配備の費用対効果を再評価。防災行政の意思決定を支援する独自分析を公表。",
    metric: "効果検証",
  },
  {
    tag: "行政連携",
    title: "複数自治体での施策導入",
    summary:
      "予算規模 約400万円〜4,000万円の行政施策を、自治体・議員と連携しながら実装。学生発の政策が現場で動き始めている。",
    metric: "10件超",
  },
] as const;

const ACTIVITIES = [
  {
    title: "全体ゼミ",
    schedule: "毎週月曜 19:00 〜",
    description:
      "プロジェクトの進捗共有、文献レビュー、ロジック設計の議論。ゲストスピーカーを招くこともあります。",
  },
  {
    title: "リサーチ会",
    schedule: "週1回（チーム別）",
    description: "テーマごとに少人数で集まり、データ収集・専門家ヒアリング・分析を進める実働の場。",
  },
  {
    title: "活動拠点",
    schedule: "駒場周辺 + オンライン",
    description: "対面・リモートのハイブリッド。授業や他大からの参加も両立しやすい設計。",
  },
] as const;

const SKILLS = [
  {
    title: "問題発見",
    body: "既知の課題ではなく、社会で見過ごされている重要問題を発見する能力。",
  },
  {
    title: "情報収集",
    body: "一次情報・学術論文・専門家ヒアリングを駆使した徹底的なリサーチ力。",
  },
  {
    title: "論理設計",
    body: "因果関係を構造化し、政策・事業の意思決定に耐えるロジックを組み立てる力。",
  },
  {
    title: "実行・実装",
    body: "公的機関、議員、専門家と連携し、解決策を現実社会に届ける推進力。",
  },
] as const;

const REPORTS = [
  {
    category: "Policy",
    date: "2025.10",
    title: "都市部における AED 普及の臨界点はどこか",
    excerpt:
      "設置密度・搬送時間・心停止発生分布をもとに、追加投資が救命率に効く臨界点を推計。施策提言の前提となる定量分析を公開。",
    minutes: 8,
  },
  {
    category: "Education",
    date: "2025.07",
    title: "教室の CO₂ 濃度と学習成績 ─ メタ分析の最前線",
    excerpt:
      "国内外30以上の論文をレビューし、換気が学習効率に与える影響を整理。学校空調・換気基準の更新に向けた論点を整理する。",
    minutes: 12,
  },
  {
    category: "Disaster",
    date: "2025.04",
    title: "消火器の費用対効果を再考する",
    excerpt:
      "火災統計と消火器使用率のデータから、配備の最適密度と更新サイクルをモデル化。地方自治体への提案レポート。",
    minutes: 10,
  },
] as const;

const FAQ = [
  {
    q: "他大学からでも参加できますか？",
    a: "はい。インカレのゼミです。東京大学・一橋大学・早稲田大学・慶應義塾大学・お茶の水女子大学など、複数の大学から学生が集まっています。",
  },
  {
    q: "政策や経済の専門知識がなくても大丈夫ですか？",
    a: "問題ありません。徹底したリサーチを通じて知識を獲得していくスタイルです。重要なのは「自分で問いを立て、調べ抜く」姿勢です。",
  },
  {
    q: "活動はどれくらいの時間が必要ですか？",
    a: "毎週月曜の全体ゼミに加え、チームごとのリサーチ会が週1回ほど。プロジェクトの山場では稼働が増えますが、学業と両立しているメンバーがほとんどです。",
  },
  {
    q: "OB・OGとのつながりはありますか？",
    a: "あります。卒業後も研究者・官僚・起業家・コンサルタントなど多彩な分野で活躍するOB・OGネットワークが運営に協力しています。",
  },
] as const;

function HomeComponent() {
  return (
    <div className="bg-background text-foreground">
      <Hero />
      <Stats />
      <About />
      <Achievements />
      <Activities />
      <Skills />
      <Reports />
      <Members />
      <Recruit />
      <Faq />
      <Contact />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 size-[640px] -translate-x-1/2 rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute right-[-120px] bottom-[-120px] size-[420px] rounded-full bg-primary/10 blur-3xl" />
      </div>
      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 px-5 py-24 md:grid-cols-[1.15fr_1fr] md:py-32">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-3 py-1 text-[11px] font-medium tracking-[0.18em] text-muted-foreground backdrop-blur">
            <span className="size-1.5 rounded-full bg-primary" />
            INTERCOLLEGIATE THINK TANK
          </span>
          <h1 className="mt-6 font-serif text-[44px] leading-[1.18] font-bold tracking-tight text-foreground sm:text-[56px] md:text-[68px]">
            社会の<span className="text-primary">隠れた問い</span>に、
            <br />
            学生が答えを出す。
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-foreground/75">
            瀧本ゼミ政策分析パートは、京都大学客員准教授・故
            瀧本哲史が立ち上げたインカレ自主ゼミ／学生シンクタンクです。
            徹底的なリサーチと専門家ヒアリングを武器に、エビデンスに基づく政策を立案し、社会に実装するまでを目指します。
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#recruit"
              className="inline-flex h-12 items-center justify-center rounded-full bg-foreground px-6 text-sm font-medium text-background transition-opacity hover:opacity-85"
            >
              新歓情報を見る
            </a>
            <a
              href="#about"
              className="inline-flex h-12 items-center justify-center rounded-full border border-border bg-background px-6 text-sm font-medium text-foreground transition-colors hover:border-foreground/40"
            >
              ゼミについて知る
            </a>
          </div>
          <p className="mt-6 font-serif text-sm text-muted-foreground italic">
            “The Best Team to Change the World.”
          </p>
        </div>

        <div className="relative">
          <div className="rounded-[28px] border border-border bg-card p-7 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.18)]">
            <div className="flex items-center justify-between text-[11px] tracking-[0.2em] text-muted-foreground">
              <span>FEATURED REPORT</span>
              <span>2025.10</span>
            </div>
            <h3 className="mt-5 font-serif text-2xl leading-snug font-semibold text-foreground">
              都市部における AED 普及の臨界点はどこか
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-foreground/75">
              心停止発生分布・搬送時間・既存設置データを統合し、追加投資が救命率に効く密度の臨界点を推計。
              自治体担当者・議員・救急医療の現場と議論を重ねた最新分析。
            </p>
            <div className="mt-6 flex items-center justify-between border-t border-border pt-5 text-xs text-muted-foreground">
              <div className="flex items-center gap-3">
                <span className="grid size-9 place-items-center rounded-full bg-primary/15 font-serif text-sm font-bold text-foreground">
                  瀧
                </span>
                <div className="leading-tight">
                  <p className="font-medium text-foreground">瀧本ゼミ 政策分析パート</p>
                  <p>Policy Research Team</p>
                </div>
              </div>
              <span className="rounded-full bg-muted px-3 py-1">8 min read</span>
            </div>
          </div>

          <div className="absolute -top-6 -right-6 hidden h-24 w-44 items-center justify-center rounded-2xl border border-border bg-background px-4 text-xs leading-tight text-foreground/80 shadow-md md:flex">
            <span>
              <span className="block font-serif text-2xl font-bold text-foreground">28</span>
              現役メンバーが
              <br />
              リサーチに参加
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="border-b border-border bg-muted/40">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-2 gap-px overflow-hidden px-0 md:grid-cols-4">
        {STATS.map((s) => (
          <div key={s.label} className="bg-background px-6 py-8 md:px-8 md:py-10">
            <p className="font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              {s.value}
            </p>
            <p className="mt-2 text-sm font-medium text-foreground">{s.label}</p>
            <p className="mt-1 text-xs text-muted-foreground">{s.note}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-2xl">
      <p className="text-[11px] font-semibold tracking-[0.22em] text-primary">{eyebrow}</p>
      <h2 className="mt-3 font-serif text-3xl leading-tight font-bold text-foreground sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-foreground/75">{description}</p>
      ) : null}
    </div>
  );
}

function About() {
  return (
    <section id="about" className="border-b border-border">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-5 py-24 md:grid-cols-[0.9fr_1.1fr]">
        <SectionHeading
          eyebrow="ABOUT"
          title="瀧本ゼミ 政策分析パートとは"
          description="京都大学客員准教授・故 瀧本哲史が「自ら問題を発見し解決する力を育てる場」として立ち上げた、インカレの自主ゼミです。学生でありながら、シンクタンクとして本気で社会を動かすことを目指します。"
        />
        <div className="space-y-6 text-foreground/80">
          <p className="leading-relaxed">
            私たちは「
            <span className="font-semibold text-foreground">
              世の中で知られていないが、実は重要である問題
            </span>
            」をテーマに据えています。
            既存の議論をなぞるのではなく、データと現場から問いを立て、解決策を設計し、実装まで踏み込むのが特徴です。
          </p>
          <p className="leading-relaxed">
            徹底したリサーチと専門家ヒアリング、そして多分野の知見を有機的に組み合わせることで、
            <span className="font-semibold text-foreground">
              エビデンスに基づく政策立案（EBPM）
            </span>
            を体現します。
            分析だけにとどまらず、公的機関・議員・企業・専門家と連携し、社会で動く成果を生み出します。
          </p>
          <div className="grid gap-4 pt-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-5">
              <p className="text-xs tracking-[0.18em] text-muted-foreground">MISSION</p>
              <p className="mt-2 font-serif text-lg font-semibold text-foreground">
                重要だが見過ごされた問いに答える
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-5">
              <p className="text-xs tracking-[0.18em] text-muted-foreground">METHOD</p>
              <p className="mt-2 font-serif text-lg font-semibold text-foreground">
                Evidence-based Policy Making
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Achievements() {
  return (
    <section id="achievements" className="border-b border-border bg-muted/30">
      <div className="mx-auto w-full max-w-6xl px-5 py-24">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="ACHIEVEMENTS"
            title="社会で動いた、私たちの仕事"
            description="学生発の研究をレポートで終わらせず、条例・行政施策・学術コミュニティへと届けてきました。"
          />
          <a
            href="#reports"
            className="inline-flex h-10 items-center gap-2 rounded-full border border-border bg-background px-5 text-xs font-medium text-foreground transition-colors hover:border-foreground/40"
          >
            すべてのレポートを見る →
          </a>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {ACHIEVEMENTS.map((a) => (
            <article
              key={a.title}
              className="group flex flex-col rounded-2xl border border-border bg-background p-7 transition-all hover:-translate-y-0.5 hover:border-foreground/30 hover:shadow-[0_18px_50px_-30px_rgba(0,0,0,0.25)]"
            >
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-primary/15 px-3 py-1 text-[11px] font-medium tracking-wider text-foreground">
                  {a.tag}
                </span>
                <span className="text-[11px] tracking-[0.18em] text-muted-foreground">
                  {a.metric}
                </span>
              </div>
              <h3 className="mt-5 font-serif text-xl leading-snug font-semibold text-foreground">
                {a.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground/75">{a.summary}</p>
              <div className="mt-6 flex items-center gap-2 text-xs font-medium text-foreground/70 transition-colors group-hover:text-foreground">
                <span>詳細を見る</span>
                <span aria-hidden>→</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Activities() {
  return (
    <section id="activities" className="border-b border-border">
      <div className="mx-auto w-full max-w-6xl px-5 py-24">
        <SectionHeading
          eyebrow="ACTIVITIES"
          title="一週間の動き方"
          description="議論と実働を分けることで、テーマを深掘りしながらアウトプットの速度を保っています。"
        />
        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3">
          {ACTIVITIES.map((a, i) => (
            <div key={a.title} className="flex flex-col gap-3 bg-background p-8">
              <span className="font-serif text-3xl text-primary">0{i + 1}</span>
              <h3 className="font-serif text-xl font-semibold text-foreground">{a.title}</h3>
              <p className="text-xs tracking-[0.16em] text-muted-foreground">{a.schedule}</p>
              <p className="mt-1 text-sm leading-relaxed text-foreground/75">{a.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="border-b border-border bg-foreground text-background">
      <div className="mx-auto w-full max-w-6xl px-5 py-24">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-[11px] font-semibold tracking-[0.22em] text-primary">SKILLS</p>
            <h2 className="mt-3 font-serif text-3xl leading-tight font-bold sm:text-4xl">
              ここで身につく、4つの力。
            </h2>
            <p className="mt-4 text-base leading-relaxed text-background/75">
              抽象的な「考える力」ではなく、社会を動かすための具体的な力をプロジェクトを通して獲得します。
            </p>
          </div>
        </div>
        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl bg-background/15 md:grid-cols-4">
          {SKILLS.map((s, i) => (
            <div key={s.title} className="flex flex-col gap-3 bg-foreground p-7">
              <span className="font-serif text-sm tracking-[0.2em] text-primary">0{i + 1}</span>
              <h3 className="font-serif text-xl font-semibold">{s.title}</h3>
              <p className="text-sm leading-relaxed text-background/75">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Reports() {
  return (
    <section id="reports" className="border-b border-border">
      <div className="mx-auto w-full max-w-6xl px-5 py-24">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="REPORTS"
            title="最新のリサーチ"
            description="ゼミから生まれた分析・提言・公開ノート。社会に問いと答えを届け続けます。"
          />
          <a
            href="#contact"
            className="inline-flex h-10 items-center gap-2 rounded-full border border-border px-5 text-xs font-medium text-foreground transition-colors hover:border-foreground/40"
          >
            ニュースレターを購読 →
          </a>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {REPORTS.map((r) => (
            <article
              key={r.title}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-0.5 hover:border-foreground/30 hover:shadow-[0_18px_50px_-30px_rgba(0,0,0,0.25)]"
            >
              <div className="relative aspect-[16/9] overflow-hidden border-b border-border bg-gradient-to-br from-primary/30 via-primary/10 to-background">
                <span className="absolute top-4 left-4 rounded-full bg-background/85 px-3 py-1 text-[11px] font-medium text-foreground backdrop-blur">
                  {r.category}
                </span>
                <span className="absolute right-4 bottom-4 font-serif text-3xl font-bold text-foreground/40">
                  {r.date}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-serif text-lg leading-snug font-semibold text-foreground">
                  {r.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground/75">
                  {r.excerpt}
                </p>
                <div className="mt-5 flex items-center justify-between border-t border-border pt-4 text-xs text-muted-foreground">
                  <span>{r.minutes} min read</span>
                  <span className="font-medium text-foreground/70 transition-colors group-hover:text-foreground">
                    続きを読む →
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Members() {
  const groups = [
    { year: "学部 3 年", count: 6 },
    { year: "学部 2 年", count: 11 },
    { year: "学部 1 年", count: 11 },
  ];
  const universities = [
    "東京大学",
    "一橋大学",
    "早稲田大学",
    "慶應義塾大学",
    "お茶の水女子大学",
    "他",
  ];
  return (
    <section id="members" className="border-b border-border bg-muted/30">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-5 py-24 md:grid-cols-[0.9fr_1.1fr]">
        <SectionHeading
          eyebrow="MEMBERS"
          title="多様な大学から、28名。"
          description="学年や所属に縛られず、フラットに議論できる文化を大切にしています。"
        />
        <div className="space-y-8">
          <div className="grid gap-4 sm:grid-cols-3">
            {groups.map((g) => (
              <div
                key={g.year}
                className="rounded-2xl border border-border bg-background p-6 text-center"
              >
                <p className="text-xs tracking-[0.18em] text-muted-foreground">{g.year}</p>
                <p className="mt-3 font-serif text-4xl font-bold text-foreground">{g.count}</p>
                <p className="mt-1 text-xs text-muted-foreground">名</p>
              </div>
            ))}
          </div>
          <div className="rounded-2xl border border-border bg-background p-6">
            <p className="text-xs tracking-[0.18em] text-muted-foreground">所属大学</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {universities.map((u) => (
                <span
                  key={u}
                  className="inline-flex items-center rounded-full border border-border bg-muted/40 px-3 py-1.5 text-xs font-medium text-foreground"
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

function Recruit() {
  return (
    <section id="recruit" className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-32 -right-20 size-[420px] rounded-full bg-primary/20 blur-3xl" />
      </div>
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-5 py-24 md:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-[11px] font-semibold tracking-[0.22em] text-primary">RECRUITING</p>
          <h2 className="mt-3 font-serif text-3xl leading-tight font-bold text-foreground sm:text-5xl">
            新しい問いを、
            <br />
            一緒に立てる人を募集中。
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-foreground/75">
            新歓説明会では、過去のプロジェクト紹介、現役メンバーとの座談会、活動のリアルな話までお伝えします。
            「自分で問いを立てたい」「社会に届く仕事をしたい」と思う方は、ぜひお越しください。
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="inline-flex h-12 items-center justify-center rounded-full bg-foreground px-6 text-sm font-medium text-background transition-opacity hover:opacity-85"
            >
              新歓に申し込む
            </a>
            <a
              href="#faq"
              className="inline-flex h-12 items-center justify-center rounded-full border border-border bg-background px-6 text-sm font-medium text-foreground transition-colors hover:border-foreground/40"
            >
              よくある質問を見る
            </a>
          </div>
        </div>
        <div className="rounded-3xl border border-border bg-card p-8">
          <p className="text-xs tracking-[0.2em] text-muted-foreground">NEXT EVENT</p>
          <h3 className="mt-3 font-serif text-2xl leading-snug font-semibold text-foreground">
            新歓説明会 2026 Spring
          </h3>
          <dl className="mt-6 space-y-4 text-sm">
            <div className="flex items-baseline justify-between border-b border-border pb-3">
              <dt className="text-muted-foreground">対象</dt>
              <dd className="font-medium text-foreground">新入生 / 在校生（大学不問）</dd>
            </div>
            <div className="flex items-baseline justify-between border-b border-border pb-3">
              <dt className="text-muted-foreground">日時</dt>
              <dd className="font-medium text-foreground">毎週月曜 19:00 〜</dd>
            </div>
            <div className="flex items-baseline justify-between border-b border-border pb-3">
              <dt className="text-muted-foreground">会場</dt>
              <dd className="font-medium text-foreground">駒場周辺 + Zoom</dd>
            </div>
            <div className="flex items-baseline justify-between">
              <dt className="text-muted-foreground">参加費</dt>
              <dd className="font-medium text-foreground">無料</dd>
            </div>
          </dl>
          <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
            ※ 開催日程は時期によって変動します。フォームよりお気軽にお問い合わせください。
          </p>
        </div>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section id="faq" className="border-b border-border">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-5 py-24 md:grid-cols-[0.9fr_1.1fr]">
        <SectionHeading
          eyebrow="FAQ"
          title="よくある質問"
          description="新歓前によく聞かれる内容をまとめました。これ以外のことも気軽にどうぞ。"
        />
        <div className="divide-y divide-border rounded-2xl border border-border bg-card">
          {FAQ.map((f) => (
            <details key={f.q} className="group p-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-start justify-between gap-6 text-left">
                <span className="font-serif text-base font-semibold text-foreground sm:text-lg">
                  {f.q}
                </span>
                <span
                  aria-hidden
                  className="mt-1 inline-flex size-7 shrink-0 items-center justify-center rounded-full border border-border text-foreground/70 transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-4 text-sm leading-relaxed text-foreground/75">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="bg-background">
      <div className="mx-auto w-full max-w-6xl px-5 py-24">
        <div className="overflow-hidden rounded-3xl border border-border bg-foreground text-background">
          <div className="grid gap-10 px-8 py-14 md:grid-cols-[1.3fr_1fr] md:px-14 md:py-20">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.22em] text-primary">
                JOIN / CONTACT
              </p>
              <h2 className="mt-3 font-serif text-3xl leading-tight font-bold sm:text-5xl">
                世界を変える
                <br />
                最良のチームへ。
              </h2>
              <p className="mt-6 max-w-md text-base leading-relaxed text-background/75">
                取材・連携のご相談、新歓へのご質問など、まずは気軽にメッセージをお送りください。
                数日以内に担当メンバーから返信します。
              </p>
            </div>
            <div className="flex flex-col justify-center gap-4">
              <a
                href="mailto:contact@example.com"
                className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-foreground transition-opacity hover:opacity-90"
              >
                メールで問い合わせる
              </a>
              <a
                href="https://twitter.com/"
                className="inline-flex h-12 items-center justify-center rounded-full border border-background/30 px-6 text-sm font-medium text-background transition-colors hover:border-background"
              >
                X (Twitter) からDM
              </a>
              <a
                href="https://www.instagram.com/"
                className="inline-flex h-12 items-center justify-center rounded-full border border-background/30 px-6 text-sm font-medium text-background transition-colors hover:border-background"
              >
                Instagram を見る
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
