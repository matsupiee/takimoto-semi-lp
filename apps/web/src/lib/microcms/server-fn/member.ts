import { createServerFn } from "@tanstack/react-start";
import { getClient } from "../client";
import { MicroCMSImage, MicroCMSListContent } from "microcms-js-sdk";

export type Member = MicroCMSListContent & {
  name: string;
  profileImage?: MicroCMSImage;
  affiliation?: string;
  grade?: string;
  hobby?: string;
  message?: string;
};

export const fetchMembers = createServerFn({ method: "GET" })
  .inputValidator((input: { limit?: number } | undefined) => input ?? {})
  .handler(async ({ data }) => {
    try {
      const client = await getClient();
      const res = await client.getList<Member>({
        endpoint: "members",
        queries: {
          limit: data.limit ?? 100,
          fields: "id,name,profileImage,affiliation,grade,hobby,message,publishedAt,updatedAt",
        },
      });
      return res;
    } catch (error) {
      console.error("[microCMS] fetchMembers failed:", error);
      return {
        contents: [],
        totalCount: 0,
        offset: 0,
        limit: data.limit ?? 100,
      };
    }
  });
