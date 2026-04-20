import { createServerFn } from "@tanstack/react-start";
import { getClient } from "../client";
import { MicroCMSImage, MicroCMSListContent } from "microcms-js-sdk";

export type Announcement = MicroCMSListContent & {
  category: string;
  title: string;
  thumbnail?: MicroCMSImage;
  // 自分たちによるコンテンツの場合は、bodyに値が入る
  body?: string;
  // 他の媒体による掲載の場合はmediaNameとexternalUrlを設定し、その媒体に遷移させられるようにする
  mediaName?: string;
  externalUrl?: string;
  // この日時を過ぎるまでフィーチャーバナーに表示する。未設定なら通常のお知らせのみ
  featuredUntil?: string;
};

export const fetchAnnouncement = createServerFn({ method: "GET" })
  .inputValidator((input: { id: string }) => input)
  .handler(async ({ data }) => {
    const client = await getClient();
    const res = await client.get<Announcement>({
      endpoint: "announcements",
      contentId: data.id,
    });
    return res;
  });

export const fetchAnnouncements = createServerFn({ method: "GET" })
  .inputValidator((input: { limit?: number } | undefined) => input ?? {})
  .handler(async ({ data }) => {
    try {
      const client = await getClient();
      const res = await client.getList<Announcement>({
        endpoint: "announcements",
        queries: {
          limit: data.limit ?? 8,
          orders: "-publishedAt",
        },
      });
      return res;
    } catch (error) {
      console.error("[microCMS] fetchAnnouncements failed:", error);
      return {
        contents: [],
        totalCount: 0,
        offset: 0,
        limit: data.limit ?? 8,
      };
    }
  });

export const fetchFeaturedAnnouncements = createServerFn({ method: "GET" })
  .inputValidator((input: { limit?: number } | undefined) => input ?? {})
  .handler(async ({ data }) => {
    try {
      const client = await getClient();
      const res = await client.getList<Announcement>({
        endpoint: "announcements",
        queries: {
          limit: data.limit ?? 3,
          orders: "featuredUntil",
          filters: `featuredUntil[greater_than]${new Date().toISOString()}`,
        },
      });
      return res;
    } catch (error) {
      console.error("[microCMS] fetchFeaturedAnnouncements failed:", error);
      return {
        contents: [],
        totalCount: 0,
        offset: 0,
        limit: data.limit ?? 3,
      };
    }
  });
