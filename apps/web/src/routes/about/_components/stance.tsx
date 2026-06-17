import PageContainer from "@/shared/_components/layout/page-container";
import SectionHeader from "@/shared/_components/section-header";

export default function Stance() {
  return (
    <section className="bg-[#1c2b33] py-16 text-white md:py-24">
      <PageContainer>
        <SectionHeader
          eyebrow="Our Stance"
          accent="blue"
          title={<span className="text-white">政治的立場ではなく、公共政策の視点で</span>}
        />

        <div className="mt-10 max-w-3xl space-y-6 text-base leading-relaxed text-white/80 md:mt-14 md:text-lg">
          <p>
            瀧本ゼミ政策分析パートは、特定の政治的立場や政党を支持・代弁する団体ではありません。
            私たちが向き合うのは、立場や主張ではなく、社会課題そのものです。
          </p>
          <p>
            イデオロギーから出発するのではなく、データと制度、現場の実態にもとづいて課題を検証し、公共政策として解決可能な形を考える。
            その姿勢を、私たちは活動の前提として大切にしています。
          </p>
        </div>
      </PageContainer>
    </section>
  );
}
