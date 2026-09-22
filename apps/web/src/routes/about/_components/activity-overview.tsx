import { SeminarProfile } from "@/lib/microcms/server-fn/seminar-profile";
import SharedActivityOverview, { buildActivityRows } from "@/shared/_components/activity-overview";
import Section from "./section";

export default function ActivityOverview({ profile }: { profile: SeminarProfile | null }) {
  // 中身が無いときは Section ごと出さない（見出しだけが残るのを避ける）
  if (buildActivityRows(profile).length === 0) return null;

  return (
    <Section eyebrow="Activity" title="活動概要">
      <SharedActivityOverview profile={profile} />
    </Section>
  );
}
