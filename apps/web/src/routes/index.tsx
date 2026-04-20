import { createFileRoute } from "@tanstack/react-router";

import MetaFooter from "../shared/_components/meta-footer";
import MetaHeader from "../shared/_components/meta-header";
import MetaNews from "../shared/_components/meta-news";
import { fetchInterviews, fetchNewsList } from "../lib/microcms";
import MetaAchievements from "./_components/meta-achievements";
import MetaHero from "./_components/meta-hero";
import MetaInterview from "./_components/meta-interview";
import MetaLeadership from "./_components/meta-leadership";
import MetaMission from "./_components/meta-mission";

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
        <MetaAchievements />
        <MetaLeadership />
        <MetaInterview items={interviews} />
        <MetaNews items={news} />
      </main>
      <MetaFooter />
    </div>
  );
}
