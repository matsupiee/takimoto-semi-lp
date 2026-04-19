import { createFileRoute } from "@tanstack/react-router";

import MetaActions from "../components/meta-actions";
import MetaFooter from "../components/meta-footer";
import MetaHeader from "../components/meta-header";
import MetaHero from "../components/meta-hero";
import MetaInterview from "../components/meta-interview";
import MetaLeadership from "../components/meta-leadership";
import MetaShop from "../components/meta-shop";
import MetaTech from "../components/meta-tech";
import { fetchInterviews } from "../lib/microcms";

export const Route = createFileRoute("/")({
  component: HomeComponent,
  loader: async () => {
    const list = await fetchInterviews({ data: { limit: 6 } });
    return { interviews: list.contents };
  },
});

function HomeComponent() {
  const { interviews } = Route.useLoaderData();
  return (
    <div className="min-h-screen bg-white">
      <MetaHeader />
      <main>
        <MetaHero />
        <MetaInterview items={interviews} />
        <MetaShop />
        <MetaTech />
        <MetaActions />
        <MetaLeadership />
      </main>
      <MetaFooter />
    </div>
  );
}
