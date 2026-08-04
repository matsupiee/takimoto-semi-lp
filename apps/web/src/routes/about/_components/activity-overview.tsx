import { SeminarProfile } from "@/lib/microcms/server-fn/seminar-profile";
import CenteredSection from "./centered-section";

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
    <CenteredSection eyebrow="Activity" title="活動概要" tone="muted">
      {/*
        件数は CMS の入力状況で 1〜3 に変わる。grid + 固定カラムだと 1 件のとき
        帯の中で 1/3 幅に縮んで残りが空くため、flex-1 で等分させる。
      */}
      <dl className="mx-auto flex max-w-3xl flex-col divide-y divide-ink/10 border border-ink/10 bg-white sm:flex-row sm:divide-x sm:divide-y-0">
        {rows.map((row) => (
          <div key={row.term} className="flex flex-1 items-baseline justify-center gap-3 px-4 py-5">
            <dt className="shrink-0 text-xs font-bold text-brand">{row.term}</dt>
            <dd className="text-lg font-semibold text-ink md:text-xl">{row.description}</dd>
          </div>
        ))}
      </dl>

      {profile.activityNote ? (
        <p className="mt-5 flex items-center justify-center gap-2 text-sm leading-relaxed text-ink/70">
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand" aria-hidden="true" />
          {profile.activityNote}
        </p>
      ) : null}
    </CenteredSection>
  );
}
