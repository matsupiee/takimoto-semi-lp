import { ENTRY_FORM_URL } from "@/routes/recruit/_utils/season";
import { LINE_URL } from "@/shared/_components/line-button";

/**
 * ビラに載っている QR の行き先。
 *
 * ビラの QR は画像の中にあり、スマホでこのページを見ている本人には読み取れない
 * （自分の画面に映った QR は自分では読めない）。そのため同じ行き先をリンクとして
 * 持ち、QR の上に重ねるタップ領域とページ下のボタンの両方から使う。
 */
// 申し込みフォームは /recruit と共有するので、新歓情報の出どころ（season.ts）から取る
export const ORIENTATION_FORM_URL = ENTRY_FORM_URL;

export const INSTAGRAM_URL = "https://www.instagram.com/tsemiseisaku/";

export const X_URL = "https://x.com/tsemi_politics";

export { LINE_URL };

/**
 * 画像上のタップ領域。値は画像に対する % で、元画像 1429x2000 上の QR の位置から出した。
 * ビラを差し替えたら位置も測り直すこと。
 */
export type Hotspot = {
  label: string;
  href: string;
  left: number;
  top: number;
  width: number;
  height: number;
};

export const FRONT_HOTSPOTS: Hotspot[] = [
  {
    label: "各種説明会申し込みフォーム",
    href: ORIENTATION_FORM_URL,
    left: 79.4,
    top: 63.5,
    width: 18.7,
    height: 15.7,
  },
];

export const BACK_HOTSPOTS: Hotspot[] = [
  {
    label: "公式HP（新歓案内）",
    href: "/recruit",
    left: 41.1,
    top: 74.5,
    width: 11.1,
    height: 10.5,
  },
  { label: "Instagram", href: INSTAGRAM_URL, left: 55.8, top: 74.5, width: 10.7, height: 10.5 },
  { label: "X（旧Twitter）", href: X_URL, left: 70.2, top: 74.5, width: 10.7, height: 10.5 },
  { label: "公式LINE", href: LINE_URL, left: 84.7, top: 74.5, width: 10.6, height: 10.5 },
];
