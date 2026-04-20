import { createServerFn } from "@tanstack/react-start";
import { getClient } from "../client";
import { MicroCMSImage, MicroCMSListContent } from "microcms-js-sdk";

export type Interview = MicroCMSListContent & {
  title: string;
  studentName: string;
  grade?: string;
  thumbnail?: MicroCMSImage;
  excerpt?: string;
  body: string;
};

export const fetchInterview = createServerFn({ method: "GET" })
  .inputValidator((input: { id: string }) => input)
  .handler(async ({ data }) => {
    const client = await getClient();
    const res = await client.get<Interview>({
      endpoint: "interviews",
      contentId: data.id,
    });
    return res;
  });

export const fetchInterviews = createServerFn({ method: "GET" })
  .inputValidator((input: { limit?: number } | undefined) => input ?? {})
  .handler(async ({ data }) => {
    try {
      const client = await getClient();
      const res = await client.getList<Interview>({
        endpoint: "interviews",
        queries: {
          limit: data.limit ?? 6,
          orders: "-publishedAt",
          fields: "id,title,studentName,grade,thumbnail,excerpt,publishedAt,updatedAt",
        },
      });
      return res;
    } catch (error) {
      console.error("[microCMS] fetchInterviews failed:", error);
      return {
        contents: [],
        totalCount: 0,
        offset: 0,
        limit: data.limit ?? 6,
      };
    }
  });
