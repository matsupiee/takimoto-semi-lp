import type { ReactNode } from "react";

/**
 * 罫線で区切る一覧の行。
 *
 * about.mercari.com の News が、日付のピル・小さなラベル・太字のタイトルを
 * 罫線だけで区切って並べている。面（カード）で囲まないので件数に左右されず、
 * 1件でも横に間延びしない。お知らせと活動の成果で同じ形を使う。
 *
 * リンクの有無は呼び出し側が決める（外部リンクなら external を渡す）。
 */
export type ItemRowProps = {
  /** 表示済みの日付文字列。粒度はページごとに違うので整形は呼び出し側で行う */
  date?: string;
  /** 日付の隣に置く赤い小ラベル（カテゴリなど） */
  label?: string;
  /** ラベルの下に置く補助テキスト（掲載媒体名など） */
  meta?: string;
  title: ReactNode;
  summary?: string;
  external?: boolean;
};

export default function ItemRow({ date, label, meta, title, summary, external }: ItemRowProps) {
  return (
    <div className="py-6 md:py-8">
      {date || label || external ? (
        <div className="flex items-start justify-between gap-3 md:gap-4">
          <div className="flex min-w-0 flex-wrap items-center gap-x-3 gap-y-2 md:gap-x-4">
            {date ? (
              <span className="inline-flex shrink-0 rounded-full bg-surface px-3 py-1 text-xs text-ink/60 md:px-3.5 md:py-1.5 md:text-sm">
                {date}
              </span>
            ) : null}
            {label ? (
              <span className="text-xs font-normal text-brand md:text-sm">{label}</span>
            ) : null}
          </div>
          {external ? (
            <span className="inline-flex shrink-0 pt-0.5 text-ink/50" aria-hidden="true">
              <ExternalIcon />
            </span>
          ) : null}
        </div>
      ) : null}

      {meta ? <p className="mt-2 text-sm text-ink/60 md:text-[15px]">{meta}</p> : null}

      <p className="mt-3 text-base font-bold leading-jp-heading text-ink md:mt-3.5 md:text-lg">
        {title}
      </p>

      {summary ? (
        <p className="mt-2 max-w-3xl text-sm leading-jp-body text-ink/70">{summary}</p>
      ) : null}
    </div>
  );
}

/** 行を罫線で区切るリストの器。件数によらず同じ見た目になる */
export function ItemRowList({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <ul
      className={["divide-y divide-ink/10 border-t border-b border-ink/10", className]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </ul>
  );
}

function ExternalIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M14 4h6v6" />
      <path d="M10 14L20 4" />
      <path d="M19 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5" />
    </svg>
  );
}
