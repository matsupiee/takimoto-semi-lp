import { createFileRoute } from "@tanstack/react-router";

import Footer from "../../shared/_components/layout/footer";
import Header from "../../shared/_components/layout/header";
import Intro from "./_components/intro";
import NextActions from "./_components/next-actions";
import Process from "./_components/process";
import Stance from "./_components/stance";
import Values from "./_components/values";

export const Route = createFileRoute("/about/")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About | 瀧本ゼミ政策分析パート" },
      {
        name: "description",
        content:
          "瀧本ゼミ政策分析パートは、社会課題をリサーチし、実装可能な政策提言へと落とし込む学生主体の公共政策コミュニティです。私たちの考え方と活動の流れを紹介します。",
      },
    ],
  }),
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Intro />
        <Values />
        <Process />
        <Stance />
        <NextActions />
      </main>
      <Footer />
    </div>
  );
}
