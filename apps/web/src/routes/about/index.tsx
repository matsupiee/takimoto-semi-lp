import { createFileRoute } from "@tanstack/react-router";

import Footer from "../../shared/_components/layout/footer";
import Header from "../../shared/_components/layout/header";
import Mission from "../(home)/_components/mission";

export const Route = createFileRoute("/about/")({
  component: AboutPage,
  head: () => ({
    meta: [{ title: "About | 瀧本ゼミ政策分析パート" }],
  }),
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Mission />
      </main>
      <Footer />
    </div>
  );
}
