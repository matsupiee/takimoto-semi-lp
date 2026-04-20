import { createServerFn } from "@tanstack/react-start";
import { getClient } from "../client";
import { MicroCMSImage, MicroCMSListContent } from "microcms-js-sdk";

export type Report = MicroCMSListContent & {
  title: string;
  summary?: string;
  thumbnail?: MicroCMSImage;
  body: string;
};

export const fetchReport = createServerFn({ method: "GET" })
  .inputValidator((input: { id: string }) => input)
  .handler(async ({ data }) => {
    const client = await getClient();
    const res = await client.get<Report>({
      endpoint: "reports",
      contentId: data.id,
    });
    return res;
  });

export const fetchReports = createServerFn({ method: "GET" })
  .inputValidator((input: { limit?: number } | undefined) => input ?? {})
  .handler(async ({ data }) => {
    try {
      const client = await getClient();
      const res = await client.getList<Report>({
        endpoint: "reports",
        queries: {
          limit: data.limit ?? 100,
          orders: "-publishedAt",
          fields: "id,title,summary,thumbnail,publishedAt,updatedAt",
        },
      });
      return res;
    } catch (error) {
      console.error("[microCMS] fetchReports failed:", error);
      return {
        contents: [],
        totalCount: 0,
        offset: 0,
        limit: data.limit ?? 100,
      };
    }
  });
