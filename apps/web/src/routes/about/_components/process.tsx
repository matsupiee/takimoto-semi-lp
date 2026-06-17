import PageContainer from "@/shared/_components/layout/page-container";
import SectionHeader from "@/shared/_components/section-header";

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
    <PageContainer as="section" className="py-16 md:py-24">
      <SectionHeader eyebrow="Process" title="活動の流れ" />
      <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#1c2b33]/80 md:text-lg">
        ひとつの政策提言は、課題設定から社会実装に向けた取り組みまで、段階を踏みながら形になっていきます。
      </p>

      <ol className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-[#1c2b33]/10 bg-[#1c2b33]/10 md:mt-14 md:grid-cols-2">
        {steps.map((step, index) => (
          <li key={step.title} className="flex gap-5 bg-white p-6 md:p-8">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1c2b33] text-sm font-semibold text-white">
              {index + 1}
            </span>
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-semibold text-[#1c2b33] md:text-xl">{step.title}</h3>
              <p className="text-sm leading-relaxed text-[#1c2b33]/80">{step.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </PageContainer>
  );
}
