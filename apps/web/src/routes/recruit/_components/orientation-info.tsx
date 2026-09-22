import SectionHeader from "@/shared/_components/section-header";

import { ORIENTATION, type Orientation } from "../_utils/season";

/**
 * 秋のサークルオリエンテーション（サーオリ）の開催情報。
 *
 * 新歓の最初の接点であり、Instagram / X からこのページに来た人に最初に届けたい
 * 情報なので、ファーストビューに置く。
 *
 * 強調は塗りや角丸のカードではなく、赤の太罫と文字サイズで作る。サイトの他の
 * ページが罫線とフラットな白地だけで組まれており、ここだけ塗った面を持ち込むと
 * 新歓ページが浮くため。太罫は about の Process（border-t-2）と同じ語彙。
 *
 * 値を引数で受けるのは、いずれ microCMS から供給するときに呼び出し側だけを
 * 変えれば済むようにするため。
 */
export default function OrientationInfo({
  orientation = ORIENTATION,
}: {
  orientation?: Orientation;
}) {
  const rows = [
    { term: "日程", description: orientation.date },
    ...(orientation.time ? [{ term: "時間", description: orientation.time }] : []),
    { term: "会場", description: orientation.place },
  ];

  return (
    <div className="border-t-2 border-brand pt-6 md:pt-8">
      {/*
        見出しは他セクションと同じ SectionHeader を使う。ページで一番大事な
        ブロックの見出しだけ小さいと、下位のセクションに見た目で負けてしまう。
        優先度は見出しの大きさではなく、上の赤い太罫と置き位置で示す。
      */}
      <SectionHeader eyebrow="Orientation" title="秋のサークルオリエンテーションに出展します" />

      <dl className="mt-6 flex flex-col divide-y divide-ink/10 border-t border-b border-ink/10">
        {rows.map((row) => (
          <div key={row.term} className="flex flex-col gap-1 py-4 sm:flex-row sm:gap-6">
            <dt className="shrink-0 pt-1 text-xs font-bold text-brand sm:w-16">{row.term}</dt>
            <dd className="text-lg font-semibold leading-jp-heading text-ink md:text-xl">
              {row.description}
            </dd>
          </div>
        ))}
      </dl>

      <p className="mt-5 text-base leading-jp-body text-ink/75">
        出入りは自由です。ゼミ生が教室でお待ちしていますので、活動の内容や雰囲気について、
        気になることを何でも聞きにきてください。事前の申し込みは要りません。
      </p>
    </div>
  );
}
