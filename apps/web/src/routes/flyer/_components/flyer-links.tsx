import LineButton from "@/shared/_components/line-button";

import { INSTAGRAM_URL, ORIENTATION_FORM_URL, X_URL } from "../_utils/links";

/**
 * ビラの QR と同じ行き先をボタンで並べる。
 *
 * 画像上のタップ領域は小さく、そこが押せることにも気づきにくいので、主要な導線は
 * 画像の外にも必ず置く。
 */
export default function FlyerLinks() {
  return (
    <div className="flex flex-col items-center gap-4">
      <a
        href={ORIENTATION_FORM_URL}
        target="_blank"
        rel="noreferrer noopener"
        className="inline-flex items-center gap-2 rounded-full bg-brand px-8 py-3 text-[15px] font-medium text-white transition hover:bg-brand/90"
      >
        説明会・ワークショップに申し込む
      </a>
      <LineButton />
      <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-[15px] text-ink/80">
        <a href="/recruit" className="underline underline-offset-4 hover:text-ink">
          新歓案内ページ
        </a>
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noreferrer noopener"
          className="underline underline-offset-4 hover:text-ink"
        >
          Instagram
        </a>
        <a
          href={X_URL}
          target="_blank"
          rel="noreferrer noopener"
          className="underline underline-offset-4 hover:text-ink"
        >
          X（旧Twitter）
        </a>
      </div>
    </div>
  );
}
