/**
 * 公式LINEの友だち追加ボタン。
 *
 * お問い合わせと新歓案内の両方が同じ導線を持つため、URL とボタンをここに集約する。
 * 周囲の文面はページごとに異なるので、見出しや説明文は各ページ側に置く。
 */
export const LINE_URL = "https://lin.ee/YvOxgn3";

export default function LineButton({ label = "LINEで友だち追加" }: { label?: string }) {
  return (
    <a
      href={LINE_URL}
      target="_blank"
      rel="noreferrer noopener"
      className="inline-flex items-center gap-2 rounded-full bg-line-green px-8 py-3 text-[15px] font-medium text-white transition hover:bg-line-green/90"
    >
      <LineIcon />
      {label}
    </a>
  );
}

function LineIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" aria-hidden="true">
      <path d="M12 2C6.477 2 2 5.68 2 10.222c0 4.07 3.55 7.48 8.35 8.124.325.07.767.215.879.493.1.251.066.645.032.9l-.142.853c-.043.252-.2.988.867.539 1.067-.45 5.757-3.39 7.855-5.805C21.28 13.72 22 12.06 22 10.222 22 5.68 17.523 2 12 2zM7.75 12.6H6.033a.264.264 0 0 1-.264-.264V8.9a.264.264 0 0 1 .528 0v3.172H7.75a.264.264 0 0 1 0 .528zm1.036-.264a.264.264 0 0 1-.528 0V8.9a.264.264 0 0 1 .528 0v3.436zm3.984 0a.264.264 0 0 1-.475.159l-1.76-2.394v2.235a.264.264 0 0 1-.529 0V8.9a.264.264 0 0 1 .475-.16l1.76 2.395V8.9a.264.264 0 0 1 .529 0v3.436zm2.665-1.982a.264.264 0 0 1 0 .528h-1.19v.926h1.19a.264.264 0 0 1 0 .528h-1.454a.264.264 0 0 1-.264-.264V8.9a.264.264 0 0 1 .264-.264h1.454a.264.264 0 0 1 0 .528h-1.19v.926h1.19z" />
    </svg>
  );
}
