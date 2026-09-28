/**
 * 今シーズンの新歓情報。
 *
 * 見出し・OGP の説明文・流れの各ステップが同じ日付と会場を出すため、ここを
 * 唯一の出どころにする。複数の箇所に同じ日付を書くと、片方だけ直して SNS に
 * 流れる説明文が古いまま、という食い違いが起きる。
 *
 * この値はいずれ microCMS へ移す。その際はこのファイルが返す形のまま
 * server-fn の戻り値に差し替えられるよう、表示側は Orientation 型を受け取る。
 */
export type Orientation = {
  date: string;
  /** 開催時間。確定したら入れる。未確定のあいだは行ごと出さない */
  time: string | null;
  place: string;
};

/** 見出しと <title> に使うシーズン名 */
export const SEASON_LABEL = "2026年度 秋新歓";

export const ORIENTATION: Orientation = {
  date: "2026年9月28日（月）",
  time: "13:00〜16:00",
  place: "東京大学 駒場Iキャンパス 1号館 152教室",
};

/**
 * 説明会・政策立案ワークショップの日程。ビラ（public/flyer.pdf）と同じ内容にすること。
 * 曜日はビラに無いが、取り違えを防ぐためここでは付ける。
 */
export type Session = { date: string; place: string };

export const BRIEFING = {
  time: "19:00〜20:00",
  sessions: [
    { date: "10月6日（火）", place: "駒場" },
    { date: "10月8日（木）", place: "駒場" },
    { date: "10月15日（木）", place: "オンライン" },
    { date: "10月16日（金）", place: "駒場" },
  ] satisfies Session[],
};

export const WORKSHOP = {
  time: "13:30〜16:00",
  sessions: [{ date: "10月10日（土）", place: "駒場" }] satisfies Session[],
};

/** 説明会・ワークショップ共通の申し込みフォーム。ビラの QR と、public/flyer.pdf に埋め込んだリンクと同じ URL */
export const ENTRY_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSeKrKX9zH3JjTRY-60_5CMZGM1-fUcXomjLEyuUpHyV35c1Ig/viewform?usp=header";
