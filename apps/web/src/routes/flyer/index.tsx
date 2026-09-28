import { createFileRoute } from "@tanstack/react-router";

import { pageHead } from "@/lib/site";

import Footer from "../../shared/_components/layout/footer";
import Header from "../../shared/_components/layout/header";
import PageContainer from "../../shared/_components/layout/page-container";
import FlyerLinks from "./_components/flyer-links";
import FlyerSheet from "./_components/flyer-sheet";
import { BACK_HOTSPOTS, FRONT_HOTSPOTS } from "./_utils/links";

const TITLE = "新歓ビラ | 瀧本ゼミ政策分析パート";

export const Route = createFileRoute("/flyer/")({
  component: FlyerPage,
  head: () => {
    const head = pageHead({
      title: TITLE,
      description:
        "瀧本ゼミ政策分析パートの秋新歓ビラです。説明会・政策立案ワークショップの日程と、活動内容・実績をまとめています。",
      path: "/flyer",
    });
    // 配布用の QR から来る人向けのページで、中身は /recruit と重なる。
    // 検索結果には最新の情報を持つ /recruit を出したいので、ここは索引させない
    return { ...head, meta: [...head.meta, { name: "robots", content: "noindex" }] };
  },
});

function FlyerPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <PageContainer as="section" width="narrow" className="py-8 md:py-12">
          <h1 className="sr-only">瀧本ゼミ政策分析パート 新歓ビラ</h1>
          <p className="text-center text-sm leading-jp-body text-ink/70">
            ビラの中の QR コードはタップでも開けます
          </p>

          <div className="mx-auto mt-4 flex max-w-xl flex-col gap-8">
            <FlyerSheet
              src="/images/flyer/2026-autumn-front.webp"
              alt="瀧本ゼミ政策分析パート 新歓ビラ（表面）。政策を立案し、議員・自治体に提言する。活動日は毎週月曜19時から駒場、週1回別途オンラインでリサーチ会。活動説明会は19:00〜20:00、10/6・10/8・10/16は駒場、10/15はオンライン（軽食あり）。政策立案ワークショップは10/10 13:30〜16:00 駒場。"
              hotspots={FRONT_HOTSPOTS}
              priority
            />
            <FlyerLinks />
            <FlyerSheet
              src="/images/flyer/2026-autumn-back.webp"
              alt="新歓ビラ（裏面）。瀧本ゼミ政策分析パートとは、知られていないが重要な社会問題を発見・分析し、エビデンスに基づく解決策を議員や自治体に提言するインカレの自主ゼミ。活動実績、ゼミで得られること、選考過程（エントリーシート、面接、入ゼミ）、各種連絡先。"
              hotspots={BACK_HOTSPOTS}
            />
            <FlyerLinks />
          </div>
        </PageContainer>
      </main>
      <Footer />
    </div>
  );
}
