import { createFileRoute } from "@tanstack/react-router";

import Footer from "../../shared/_components/layout/footer";
import Header from "../../shared/_components/layout/header";
import Mission from "./_components/mission";
import Hero from "./_components/hero";
import FeaturedBanner from "./_components/featured-banner";
import { fetchInterviews } from "@/lib/microcms/server-fn/interview";
import {
  fetchAnnouncements,
  fetchFeaturedAnnouncements,
} from "@/lib/microcms/server-fn/announcement";
import Announcement from "../../shared/_components/announcement";

export const Route = createFileRoute("/(home)/")({
  component: HomeComponent,
  loader: async () => {
    const [interviewResponse, announcementResponse, featuredResponse] = await Promise.all([
      fetchInterviews({ data: { limit: 6 } }),
      fetchAnnouncements({ data: { limit: 5 } }),
      fetchFeaturedAnnouncements({ data: { limit: 3 } }),
    ]);
    return {
      interviews: interviewResponse.contents,
      announcements: announcementResponse.contents,
      featured: featuredResponse.contents,
    };
  },
});

function HomeComponent() {
  const { announcements, featured } = Route.useLoaderData();
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <FeaturedBanner items={featured} />
        <Mission />
        <Announcement items={announcements} />
      </main>
      <Footer />
    </div>
  );
}
