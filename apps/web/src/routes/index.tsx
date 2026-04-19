import { createFileRoute } from "@tanstack/react-router";

import MetaActions from "../components/meta-actions";
import MetaFooter from "../components/meta-footer";
import MetaHeader from "../components/meta-header";
import MetaHero from "../components/meta-hero";
import MetaInterview from "../components/meta-interview";
import MetaLeadership from "../components/meta-leadership";
import MetaMission from "../components/meta-mission";
import MetaNews from "../components/meta-news";
import { fetchInterviews, fetchNewsList } from "../lib/microcms";

export const Route = createFileRoute("/")({
  component: HomeComponent,
  loader: async () => {
    const [interviewList, newsList] = await Promise.all([
      fetchInterviews({ data: { limit: 6 } }),
      fetchNewsList({ data: { limit: 5 } }),
    ]);
    return {
      interviews: interviewList.contents,
      news: newsList.contents,
    };
  },
});

function HomeComponent() {
  const { interviews, news } = Route.useLoaderData();
  return (
    <div className="min-h-screen bg-white">
      <MetaHeader />
      <main>
        <MetaHero />
        <MetaMission />
        <MetaActions />
        <MetaLeadership />
        <MetaInterview items={interviews} />
        <MetaNews items={news} />
      </main>
      <MetaFooter />
    </div>
  );
}
