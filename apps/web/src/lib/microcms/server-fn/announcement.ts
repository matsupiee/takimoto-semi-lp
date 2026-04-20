import { createServerFn } from "@tanstack/react-start";
import { getClient } from "../client";
import { MicroCMSImage, MicroCMSListContent } from "microcms-js-sdk";

export type Announcement = MicroCMSListContent & {
  category: string;
  mediaName: string;
  mediaLogo?: MicroCMSImage;
  title: string;
  body?: string;
  externalUrl?: string;
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
        endpoint: "news",
        queries: {
          limit: data.limit ?? 8,
          orders: "-publishedAt",
          fields: "id,category,mediaName,mediaLogo,title,externalUrl,publishedAt,updatedAt",
        },
      });
      return res;
    } catch (error) {
      console.error("[microCMS] fetchNewsList failed:", error);
      return {
        contents: [],
        totalCount: 0,
        offset: 0,
        limit: data.limit ?? 8,
      };
    }
  });
