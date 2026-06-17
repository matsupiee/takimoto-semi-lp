import PageContainer from "@/shared/_components/layout/page-container";
import SectionHeader from "@/shared/_components/section-header";

type Value = {
  label: string;
  question: string;
  body: string;
};

const values: Value[] = [
  {
    label: "内因性",
    question: "その課題は本当に存在するのか",
    body: "印象や前提を一度脇に置き、データや事実に立ち返って、課題が実在するのか、どの程度の規模なのかを確かめます。",
  },
  {
    label: "重要性",
    question: "なぜ優先して介入すべきなのか",
    body: "数ある社会課題の中で、なぜ今これに取り組むのか。介入することの意義や、放置した場合の影響を問い直します。",
  },
  {
    label: "解決性",
    question: "その施策は本当にボトルネックを解くのか",
    body: "提案する施策が課題の本質的なボトルネックを解くのか、そして制度として実装可能なのかまでを検証します。",
  },
];

export default function Values() {
  return (
    <section className="bg-[#f8f9fb] py-16 md:py-24">
      <PageContainer>
        <SectionHeader eyebrow="Our Approach" title="私たちが重視すること" />
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#1c2b33]/80 md:text-lg">
          政策として社会課題に向き合うとき、私たちは次の3つの問いを繰り返し確かめます。
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 md:mt-14 md:grid-cols-3">
          {values.map((value, index) => (
            <article
              key={value.label}
              className="flex flex-col gap-4 rounded-3xl bg-white p-8 shadow-sm"
            >
              <span className="text-sm font-bold text-[#e60012]">0{index + 1}</span>
              <h3 className="text-xl font-semibold text-[#1c2b33] md:text-2xl">{value.label}</h3>
              <p className="text-sm font-medium text-[#1c2b33]/70">{value.question}</p>
              <p className="text-sm leading-relaxed text-[#1c2b33]/80">{value.body}</p>
            </article>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
