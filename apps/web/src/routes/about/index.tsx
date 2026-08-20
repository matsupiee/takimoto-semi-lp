import { createFileRoute } from "@tanstack/react-router";

import { fetchSeminarProfile } from "@/lib/microcms/server-fn/seminar-profile";
import { pageMeta } from "@/lib/site";
import Footer from "../../shared/_components/layout/footer";
import Header from "../../shared/_components/layout/header";
import ActivityOverview from "./_components/activity-overview";
import Intro from "./_components/intro";
import NextActions from "./_components/next-actions";
import Process from "./_components/process";
import SeminarStats from "./_components/seminar-stats";

export const Route = createFileRoute("/about/")({
  component: AboutPage,
  loader: async () => {
    const profile = await fetchSeminarProfile();
    return { profile };
  },
  head: () => ({
    meta: pageMeta({
      title: "About | 瀧本ゼミ政策分析パート",
      description:
        "瀧本ゼミ政策分析パートは、社会課題をリサーチし、実装可能な政策提言へと落とし込む学生主体の公共政策コミュニティです。私たちの考え方と活動の流れを紹介します。",
    }),
  }),
});

function AboutPage() {
  const { profile } = Route.useLoaderData();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Intro />
        <ActivityOverview profile={profile} />
        <SeminarStats profile={profile} />
        <Process />
        <NextActions />
      </main>
      <Footer />
    </div>
  );
}
