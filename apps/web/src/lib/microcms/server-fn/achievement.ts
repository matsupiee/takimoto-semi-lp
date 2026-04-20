import { createServerFn } from "@tanstack/react-start";
import { getClient } from "../client";
import { MicroCMSImage, MicroCMSListContent } from "microcms-js-sdk";

export const ACHIEVEMENT_CATEGORIES = ["policy", "collaboration", "proposal"] as const;

export type AchievementCategory = (typeof ACHIEVEMENT_CATEGORIES)[number];

export type Achievement = MicroCMSListContent & {
  title: string;
  category: AchievementCategory | [AchievementCategory];
  summary?: string;
  thumbnail?: MicroCMSImage;
  externalLink?: string;
  achievedAt?: string;
};

export const fetchAchievements = createServerFn({ method: "GET" })
  .inputValidator((input: { limit?: number } | undefined) => input ?? {})
  .handler(async ({ data }) => {
    try {
      const client = await getClient();
      const res = await client.getList<Achievement>({
        endpoint: "achievements",
        queries: {
          limit: data.limit ?? 100,
          orders: "-achievedAt",
          fields:
            "id,title,category,summary,thumbnail,externalLink,achievedAt,publishedAt,updatedAt",
        },
      });
      return res;
    } catch (error) {
      console.error("[microCMS] fetchAchievements failed:", error);
      return {
        contents: [],
        totalCount: 0,
        offset: 0,
        limit: data.limit ?? 100,
      };
    }
  });
