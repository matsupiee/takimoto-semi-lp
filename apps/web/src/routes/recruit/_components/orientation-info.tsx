/**
 * 秋のサークルオリエンテーション（サーオリ）の開催情報。
 *
 * 新歓の最初の接点であり、Instagram / X からこのページに来た人に最初に届けたい
 * 情報なので、ファーストビューに置く。
 *
 * time は開催時間。オリエンテーション委員会の確定案内が出たら入れる。
 * 未確定のあいだは行ごと出さない（空欄や「未定」を出すより、行が無い方がよい）。
 */
export const ORIENTATION = {
  date: "2026年9月28日（月）",
  time: null as string | null,
  place: "東京大学 駒場Iキャンパス 1号館 152教室",
};

type Row = { term: string; description: string };

export default function OrientationInfo() {
  const rows: Row[] = [
    { term: "日程", description: ORIENTATION.date },
    ...(ORIENTATION.time ? [{ term: "時間", description: ORIENTATION.time }] : []),
    { term: "会場", description: ORIENTATION.place },
  ];

  return (
    <div className="rounded-2xl border-2 border-brand bg-brand/[0.04] p-6 md:p-8">
      <p className="inline-flex items-center gap-1.5 rounded-full bg-brand px-3 py-1 text-xs font-semibold text-white md:text-sm">
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-white" aria-hidden="true" />
        まずはここへ
      </p>

      <h2 className="mt-4 text-xl font-bold leading-jp-heading text-ink md:text-2xl">
        秋のサークルオリエンテーションに出展します
      </h2>

      <dl className="mt-6 flex flex-col gap-4">
        {rows.map((row) => (
          <div
            key={row.term}
            className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-5"
          >
            <dt className="shrink-0 text-xs font-bold text-brand sm:w-16">{row.term}</dt>
            <dd className="text-lg font-semibold leading-jp-heading text-ink md:text-xl">
              {row.description}
            </dd>
          </div>
        ))}
      </dl>

      <p className="mt-6 text-sm leading-jp-body text-ink/75 md:text-base">
        出入りは自由です。ゼミ生が教室でお待ちしていますので、活動の内容や雰囲気について、
        気になることを何でも聞きにきてください。事前の申し込みは要りません。
      </p>
    </div>
  );
}
