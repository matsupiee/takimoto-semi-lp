import { createServerFn } from "@tanstack/react-start";
import { getClient } from "../client";
import { MicroCMSObjectContent } from "microcms-js-sdk";

// ゼミ全体の基本情報を持つオブジェクト形式のエンドポイント。
// 統計（メンバーページ）と活動概要（About ページ）の両方をここから供給する。
export type SeminarProfile = MicroCMSObjectContent & {
  // 在籍人数
  memberCount?: number;
  // 男女比（それぞれ % で入れる。両方揃っているときだけ表示する）
  maleRatio?: number;
  femaleRatio?: number;
  // 東大生の割合（%）。他大生の割合は 100 - utokyoRatio で表示する
  utokyoRatio?: number;
  // 「2026年4月時点」など集計時点の注記
  statsNote?: string;
  // 活動概要
  activityDay?: string;
  activityPlace?: string;
  activityStyle?: string;
  activityNote?: string;
};

export const fetchSeminarProfile = createServerFn({ method: "GET" }).handler(async () => {
  try {
    const client = await getClient();
    const res = await client.getObject<SeminarProfile>({
      endpoint: "seminar-profile",
    });
    return res;
  } catch (error) {
    // エンドポイント未作成・未入力でもページを壊さないため、null を返して非表示にする
    console.error("[microCMS] fetchSeminarProfile failed:", error);
    return null;
  }
});
