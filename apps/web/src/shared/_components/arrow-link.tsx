/**
 * 「輪郭の円に入った矢印」と「独立したテキスト」を並べるリンク表示。
 *
 * about.mercari.com と meta.com/about の両方が、リンクをアイコンと文字に
 * 分けて並べている（塗りつぶしのボタンに文字を内包しない）。特定ブランドに
 * 寄らない形にするため、円は輪郭のみ・色は ink にしている。
 *
 * リンク自体は親側で <a> / <Link> を張る前提の、見た目だけを持つ部品。
 */
export default function ArrowLink({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-3 text-sm font-semibold text-ink md:text-[15px]">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-ink/30 transition group-hover:border-ink group-hover:bg-ink group-hover:text-white">
        <svg
          viewBox="0 0 24 24"
          width="15"
          height="15"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      </span>
      {label}
    </span>
  );
}
