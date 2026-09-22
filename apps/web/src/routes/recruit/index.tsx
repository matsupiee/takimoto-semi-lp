import { createFileRoute } from "@tanstack/react-router";

import { fetchSeminarProfile } from "@/lib/microcms/server-fn/seminar-profile";
import { pageHead } from "@/lib/site";
import ActivityOverview, { buildActivityRows } from "@/shared/_components/activity-overview";

import Footer from "../../shared/_components/layout/footer";
import Header from "../../shared/_components/layout/header";
import PageContainer from "../../shared/_components/layout/page-container";
import SectionHeader from "../../shared/_components/section-header";
import Faq from "./_components/faq";
import Flow from "./_components/flow";
import LineInvite from "./_components/line-invite";
import OrientationInfo from "./_components/orientation-info";
import { ORIENTATION, SEASON_LABEL } from "./_utils/season";

export const Route = createFileRoute("/recruit/")({
  component: RecruitPage,
  loader: async () => {
    const profile = await fetchSeminarProfile();
    return { profile };
  },
  head: () =>
    pageHead({
      title: `${SEASON_LABEL} | 瀧本ゼミ政策分析パート`,
      description: `瀧本ゼミ政策分析パート ${SEASON_LABEL}のご案内。${ORIENTATION.date}のサークルオリエンテーション（${ORIENTATION.place}）に出展します。説明会・政策立案ワークショップの日程は公式LINEでお知らせします。`,
      path: "/recruit",
    }),
});

function RecruitPage() {
  const { profile } = Route.useLoaderData();
  const hasActivity = buildActivityRows(profile).length > 0;

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <PageContainer as="section" width="default" className="py-12 md:py-16">
          <SectionHeader eyebrow="Recruit" title={SEASON_LABEL} as="h1" />
          <div className="mt-5 h-0.5 w-10 bg-brand" />
          <p className="mt-6 max-w-2xl text-pretty text-base leading-jp-body text-ink/80 md:text-lg">
            瀧本ゼミ政策分析パートは、社会課題をリサーチし、実装可能な政策提言へと落とし込む学生主体の自主ゼミです。
            秋新歓は、{ORIENTATION.date}のサークルオリエンテーションから始まります。
          </p>

          {/* サーオリと公式LINEが今回の新歓のゴールなので、他の情報より先に置く */}
          <div className="mt-10 md:mt-12">
            <OrientationInfo />
          </div>
          <div className="mt-12 md:mt-14">
            <LineInvite />
          </div>
        </PageContainer>

        <PageContainer as="section" width="default" className="pb-12 md:pb-16">
          <SectionHeader eyebrow="About Us" title="私たちについて" />
          <div className="mt-8 max-w-2xl space-y-5 text-base leading-jp-body text-ink/85 md:text-lg">
            <p>
              「世の中でまだ十分に知られていないが、実は重要である問題」に向き合う、インカレの自主ゼミ・学生シンクタンクです。
              徹底的なリサーチと専門家・現場へのヒアリングを通じて課題の構造を捉え、政策として形にしていきます。
            </p>
            <p>
              主に大学1・2年生が参加しており、東京大学以外の大学に通うメンバーも在籍しています。
              政策や研究の経験は問いません。
            </p>
          </div>
          <div className="mt-8">
            <a
              href="/about"
              className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-6 py-3 text-[15px] font-medium text-ink transition hover:bg-ink/5"
            >
              ゼミについて詳しく見る
            </a>
          </div>
        </PageContainer>

        <PageContainer as="section" width="default" className="pb-12 md:pb-16">
          <SectionHeader eyebrow="Schedule" title="秋新歓の流れ" />
          <p className="mt-6 max-w-2xl text-pretty text-base leading-jp-body text-ink/70 md:text-lg">
            サークルオリエンテーションのあと、説明会と政策立案ワークショップを開催します。
            途中の企画からの参加でも構いません。
          </p>
          <div className="mt-8 md:mt-10">
            <Flow />
          </div>
        </PageContainer>

        {hasActivity ? (
          <PageContainer as="section" width="default" className="pb-12 md:pb-16">
            <SectionHeader eyebrow="Activity" title="活動概要" />
            <div className="mt-8 md:mt-10">
              <ActivityOverview profile={profile} />
            </div>
          </PageContainer>
        ) : null}

        <PageContainer as="section" width="default" className="pb-12 md:pb-16">
          <SectionHeader eyebrow="FAQ" title="よくある質問" />
          <div className="mt-8 md:mt-10">
            <Faq />
          </div>
        </PageContainer>

        <PageContainer as="section" width="default" className="pb-12 md:pb-16">
          <div className="border-t border-ink/15 pt-8">
            <p className="max-w-2xl text-base leading-jp-body text-ink/80">
              新歓や活動内容についてのご質問は、公式LINEのほか、お問い合わせページからも受け付けています。
            </p>
            <div className="mt-6">
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
