import { createFileRoute } from "@tanstack/react-router";

import MetaActions from "../components/meta-actions";
import MetaFooter from "../components/meta-footer";
import MetaHeader from "../components/meta-header";
import MetaHero from "../components/meta-hero";
import MetaLeadership from "../components/meta-leadership";
import MetaNews from "../components/meta-news";
import MetaShop from "../components/meta-shop";
import MetaTech from "../components/meta-tech";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  return (
    <div className="min-h-screen bg-white">
      <MetaHeader />
      <main>
        <MetaHero />
        <MetaNews />
        <MetaShop />
        <MetaTech />
        <MetaActions />
        <MetaLeadership />
      </main>
      <MetaFooter />
    </div>
  );
}
