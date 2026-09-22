import { SeminarProfile } from "@/lib/microcms/server-fn/seminar-profile";

type Row = {
  term: string;
  description: string;
};

/**
 * 表示できる活動概要の行を組み立てる。
 *
 * 呼び出し側がセクション枠ごと出し分けられるよう、空判定に使えるように公開している。
 * （行が 0 件のときに見出しだけ残ると、中身の無いセクションになってしまう）
 */
export function buildActivityRows(profile: SeminarProfile | null): Row[] {
  if (!profile) return [];

  const rows: Row[] = [];

  if (profile.activityDay) rows.push({ term: "活動日", description: profile.activityDay });
  if (profile.activityPlace) rows.push({ term: "活動場所", description: profile.activityPlace });
  if (profile.activityStyle) rows.push({ term: "活動形式", description: profile.activityStyle });

  return rows;
}

/**
 * 活動日・活動場所・活動形式の帯。About と新歓案内の両方が同じ内容を出すため、
 * セクション枠を持たない表示部分だけをここに置き、枠は各ページ側で被せる。
 */
export default function ActivityOverview({ profile }: { profile: SeminarProfile | null }) {
  const rows = buildActivityRows(profile);
  if (rows.length === 0) return null;

  return (
    <>
      {/*
        件数は CMS の入力状況で 1〜3 に変わる。grid + 固定カラムだと 1 件のとき
        帯の中で 1/3 幅に縮んで残りが空くため、flex-1 で等分させる。
      */}
      <dl className="flex flex-col divide-y divide-ink/10 border-t border-b border-ink/10 sm:flex-row sm:divide-x sm:divide-y-0">
        {rows.map((row) => (
          <div key={row.term} className="flex flex-1 items-baseline gap-3 px-4 py-5 sm:first:pl-0">
            <dt className="shrink-0 text-xs font-bold text-brand">{row.term}</dt>
            <dd className="text-lg font-semibold text-ink md:text-xl">{row.description}</dd>
          </div>
        ))}
      </dl>

      {profile?.activityNote ? (
        <p className="mt-5 flex items-center gap-2 text-sm leading-jp-body text-ink/70">
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand" aria-hidden="true" />
          {profile.activityNote}
        </p>
      ) : null}
    </>
  );
}
