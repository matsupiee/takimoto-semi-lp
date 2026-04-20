import { createFileRoute } from "@tanstack/react-router";

import Footer from "../../shared/_components/layout/footer";
import Header from "../../shared/_components/layout/header";
import Mission from "./_components/mission";
import Hero from "./_components/hero";
import { fetchInterviews } from "@/lib/microcms/server-fn/interview";
import { fetchAnnouncements } from "@/lib/microcms/server-fn/announcement";
import Announcement from "../../shared/_components/announcement";

export const Route = createFileRoute("/(home)/")({
  component: HomeComponent,
  loader: async () => {
    const [interviewResponse, announcementResponse] = await Promise.all([
      fetchInterviews({ data: { limit: 6 } }),
      fetchAnnouncements({ data: { limit: 5 } }),
    ]);
    return {
      interviews: interviewResponse.contents,
      announcements: announcementResponse.contents,
    };
  },
});

function HomeComponent() {
  const { announcements } = Route.useLoaderData();
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Mission />
        <Announcement items={announcements} />
      </main>
      <Footer />
    </div>
  );
}
