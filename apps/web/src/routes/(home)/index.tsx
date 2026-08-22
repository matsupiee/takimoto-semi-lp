import { createFileRoute } from "@tanstack/react-router";

import Footer from "../../shared/_components/layout/footer";
import Header from "../../shared/_components/layout/header";
import AboutIntro from "./_components/about-intro";
import Hero from "./_components/hero";
import FeaturedBanner from "./_components/featured-banner";
import { fetchInterviews } from "@/lib/microcms/server-fn/interview";
import {
  fetchAnnouncements,
  fetchFeaturedAnnouncements,
} from "@/lib/microcms/server-fn/announcement";
import Announcement from "../../shared/_components/announcement";
import { SITE_DESCRIPTION, SITE_TITLE, pageHead } from "@/lib/site";

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
  head: () => pageHead({ title: SITE_TITLE, description: SITE_DESCRIPTION, path: "/" }),
});

function HomeComponent() {
  const { announcements, featured } = Route.useLoaderData();
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero はスライドが2枚あってどちらも見出しになるため h2 のまま。
            ページの h1 が無いと、サイトで一番重要なページだけ見出しの
            起点が欠ける（下層ページは全て h1 を持つ）ので視覚的に隠して置く。 */}
        <h1 className="sr-only">{SITE_TITLE}</h1>
        <Hero />
        <FeaturedBanner items={featured} />
        <AboutIntro />
        <Announcement items={announcements} />
      </main>
      <Footer />
    </div>
  );
}
