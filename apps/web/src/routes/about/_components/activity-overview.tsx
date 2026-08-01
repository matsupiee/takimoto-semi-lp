import { SeminarProfile } from "@/lib/microcms/server-fn/seminar-profile";
import PageContainer from "@/shared/_components/layout/page-container";
import SectionHeader from "@/shared/_components/section-header";

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
    <PageContainer as="section" className="py-16 md:py-24">
      <SectionHeader eyebrow="Activity" title="活動概要" />

      <div className="mt-10 rounded-3xl bg-[#f8f9fb] p-8 md:mt-14 md:p-12">
        <dl className="grid grid-cols-1 gap-6 md:grid-cols-[8rem_auto] md:justify-start md:gap-x-10 md:gap-y-6">
          {rows.map((row) => (
            <div key={row.term} className="md:contents">
              <dt className="mb-2 text-sm font-bold text-[#e60012] md:mb-0 md:text-base">
                {row.term}
              </dt>
              <dd className="text-base leading-relaxed text-[#1c2b33]/85 md:text-lg">
                {row.description}
              </dd>
            </div>
          ))}
        </dl>
        {profile.activityNote ? (
          <p className="mt-8 text-sm leading-relaxed text-[#1c2b33]/70 md:text-base">
            {profile.activityNote}
          </p>
        ) : null}
      </div>
    </PageContainer>
  );
}
