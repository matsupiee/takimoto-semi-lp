import { SeminarProfile } from "@/lib/microcms/server-fn/seminar-profile";
import SplitSection from "./split-section";

type Row = {
  term: string;
  description: string;
};

function buildRows(profile: SeminarProfile): Row[] {
  const rows: Row[] = [];

  if (profile.activityDay) rows.push({ term: "活動日", description: profile.activityDay });
  if (profile.activityPlace) rows.push({ term: "活動場所", description: profile.activityPlace });
  if (profile.activityStyle) rows.push({ term: "活動形式", description: profile.activityStyle });

  return rows;
}

export default function ActivityOverview({ profile }: { profile: SeminarProfile | null }) {
  if (!profile) return null;

  const rows = buildRows(profile);
  if (rows.length === 0) return null;

  return (
    <SplitSection eyebrow="Activity" title="活動概要">
      <dl className="divide-y divide-ink/10 border-y border-ink/10">
        {rows.map((row) => (
          <div
            key={row.term}
            className="grid grid-cols-1 gap-1 py-5 md:grid-cols-[8rem_1fr] md:items-baseline md:gap-6"
          >
            <dt className="text-sm font-bold text-brand">{row.term}</dt>
            <dd className="text-xl font-semibold text-ink md:text-2xl">{row.description}</dd>
          </div>
        ))}
      </dl>

      {profile.activityNote ? (
        <p className="mt-6 flex items-start gap-2.5 text-sm leading-relaxed text-ink/70">
          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" aria-hidden="true" />
          {profile.activityNote}
        </p>
      ) : null}
    </SplitSection>
  );
}
