import SectionHeader from "@/shared/_components/section-header";

export default function Mission() {
  return (
    <section id="mission" className="relative bg-white px-6 py-16 md:px-16 md:py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 md:grid-cols-12 md:gap-0">
        <div className="md:col-span-7 md:pr-10">
          <SectionHeader
            eyebrow="Our Mission"
            title={
              <>
                政策で、
                <br />
                社会を動かす。
              </>
            }
          />

          <div className="mt-10 space-y-6 text-base leading-relaxed text-[#1c2b33]/85 md:mt-14 md:text-lg">
            <p>
              瀧本ゼミは、社会課題に対して政策の立案から提言までを行う学生サークルです。
              リサーチや専門家へのヒアリングをもとに政策を設計し、政治家・行政機関へ直接提言します。
            </p>
            <p>
              現場を歩き、当事者の声を聞き、データに向き合う。
              そうして磨き上げた政策だからこそ、実現可能性を持ち、社会を動かす力になると私たちは信じています。
            </p>
            <p>本気で世の中を変えるために、私たちは今日も考え、動き続けます。</p>
          </div>
        </div>

        <div className="md:col-span-5">
          <div className="relative h-64 overflow-hidden rounded-2xl md:h-full md:min-h-[600px] md:rounded-none">
            <img
              src="/images/sample-image.jpg"
              alt="サンプル画像"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
