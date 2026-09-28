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
