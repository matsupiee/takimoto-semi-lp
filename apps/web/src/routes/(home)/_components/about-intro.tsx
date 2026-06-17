import SectionHeader from "@/shared/_components/section-header";

export default function AboutIntro() {
  return (
    <section id="mission" className="relative bg-white px-6 py-16 md:px-16 md:py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 md:grid-cols-12 md:gap-0">
        <div className="md:col-span-7 md:pr-10">
          <SectionHeader
            eyebrow="About Us"
            title={
              <>
                社会課題を、
                <br />
                政策として考える。
              </>
            }
          />

          <div className="mt-10 space-y-6 text-base leading-relaxed text-[#1c2b33]/85 md:mt-14 md:text-lg">
            <p>
              瀧本ゼミ政策分析パートは、「世の中でまだ十分に知られていないが、実は重要である問題」に向き合う、インカレの自主ゼミ・学生シンクタンクです。
            </p>
            <p>
              徹底的なリサーチと専門家・現場へのヒアリングを通じて課題の構造を捉え、実装可能な政策提言へと落とし込むことを目指しています。
            </p>
          </div>

          <div className="mt-10">
            <a
              href="/about"
              className="inline-flex items-center gap-2 rounded-full bg-[#1c2b33] px-6 py-3 text-[15px] font-medium text-white shadow-md transition hover:bg-[#1c2b33]/90"
            >
              瀧本ゼミについて知る
              <svg
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

        <div className="md:col-span-5">
          <div className="relative h-64 overflow-hidden rounded-2xl md:h-full md:min-h-[600px] md:rounded-none">
            <img
              src="/images/sample-image.jpg"
              alt="瀧本ゼミ政策分析パートの活動風景"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
