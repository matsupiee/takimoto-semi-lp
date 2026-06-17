import PageContainer from "@/shared/_components/layout/page-container";
import SectionHeader from "@/shared/_components/section-header";

export default function Intro() {
  return (
    <PageContainer as="section" className="py-16 md:py-24">
      <SectionHeader
        eyebrow="About Us"
        as="h1"
        title={
          <>
            社会課題を、
            <br className="md:hidden" />
            政策として考える。
          </>
        }
      />

      <div className="mt-10 grid grid-cols-1 gap-8 md:mt-14 md:grid-cols-12">
        <div className="space-y-6 text-base leading-relaxed text-[#1c2b33]/85 md:col-span-8 md:text-lg">
          <p>
            瀧本ゼミ政策分析パートは、「世の中でまだ十分に知られていないが、実は重要である問題」に向き合う、インカレの自主ゼミ・学生シンクタンクです。
            徹底的なリサーチと専門家・現場へのヒアリングを通じて課題の構造を捉え、「その課題は本当に解くべきか」「どう介入すれば解決に近づくか」を一つひとつ検証しながら、政策として形にしていきます。
          </p>
          <p>
            私たちが大切にしているのは、思いつきや主張から出発するのではなく、事実に立ち返って課題を検証し、制度設計や実装可能性までを見据えて考えることです。
            そうして磨いた政策提言を、専門家へのヒアリングや発表を重ねながら、社会実装に向けて届けていきます。
          </p>
        </div>
      </div>
    </PageContainer>
  );
}
