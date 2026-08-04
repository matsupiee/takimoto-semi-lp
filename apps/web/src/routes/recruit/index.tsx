import { createFileRoute } from "@tanstack/react-router";

import { pageMeta } from "@/lib/site";

import Footer from "../../shared/_components/layout/footer";
import Header from "../../shared/_components/layout/header";
import PageContainer from "../../shared/_components/layout/page-container";
import SectionHeader from "../../shared/_components/section-header";

export const Route = createFileRoute("/recruit/")({
  component: RecruitPage,
  head: () => ({
    meta: pageMeta({
      title: "新歓案内 | 瀧本ゼミ政策分析パート",
      description:
        "瀧本ゼミ政策分析パートの新歓案内ページです。次回募集に向けて、新歓情報を準備中です。",
    }),
  }),
});

function RecruitPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <PageContainer as="section" width="default" className="py-12 md:py-16">
          <SectionHeader eyebrow="Recruit" title="新歓案内" as="h1" align="center" />
        </PageContainer>

        <PageContainer as="section" width="default" className="pb-12 md:pb-16">
          <div className="rounded-3xl bg-surface p-8 md:p-12">
            <div className="space-y-6 text-base leading-relaxed text-ink/85 md:text-lg">
              <p>現在、次回募集に向けて新歓情報を準備中です。</p>
              <p>
                募集時期、説明会日程、応募方法などの詳細は、決まり次第こちらのページでお知らせします。
              </p>
            </div>
            <div className="mt-10">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-6 py-3 text-[15px] font-medium text-ink transition hover:bg-ink/5"
              >
                お問い合わせはこちら
              </a>
            </div>
          </div>
        </PageContainer>
      </main>
      <Footer />
    </div>
  );
}
