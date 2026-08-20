import Section from "./section";

type Step = {
  title: string;
  body: string;
};

const steps: Step[] = [
  {
    title: "課題設定",
    body: "社会の中にある関心や違和感を出発点に、取り組むべき社会課題を定めます。",
  },
  {
    title: "リサーチ",
    body: "統計データや先行研究、制度を調べ、課題の構造と背景を捉えます。",
  },
  {
    title: "ヒアリング",
    body: "当事者や専門家、行政の声を聞き、現場の実態と論点を確かめます。",
  },
  {
    title: "政策立案",
    body: "制度設計や実装可能性まで踏み込み、解決につながる政策へと落とし込みます。",
  },
  {
    title: "発表・フィードバック",
    body: "ゼミ内外で発表し、批判的な議論を通じて提言を磨き上げます。",
  },
  {
    title: "提言・社会実装に向けた取り組み",
    body: "練り上げた政策を行政や専門家へ届け、社会実装に向けて働きかけます。",
  },
];

export default function Process() {
  return (
    <Section
      align="center"
      eyebrow="Process"
      title="活動の流れ"
      lede="ひとつの政策提言は、課題設定から社会実装に向けた取り組みまで、段階を踏みながら形になっていきます。"
    >
      <ol className="grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
        {steps.map((step, index) => (
          <li key={step.title} className="border-t-2 border-ink pt-4">
            <div className="flex items-baseline gap-3">
              <span className="text-sm font-bold text-brand">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-base font-semibold text-ink md:text-lg">{step.title}</h3>
            </div>
            <p className="mt-2 text-sm leading-jp-body text-ink/70">{step.body}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
