import { createServerFn } from "@tanstack/react-start";
import { createClient } from "microcms-js-sdk";

export type InterviewImage = {
  url: string;
  width: number;
  height: number;
};

export type Interview = {
  id: string;
  title: string;
  studentName: string;
  grade?: string;
  thumbnail: InterviewImage;
  excerpt?: string;
  body: string;
  publishedAt: string;
  updatedAt: string;
};

type ListResponse<T> = {
  contents: T[];
  totalCount: number;
  offset: number;
  limit: number;
};

async function getClient() {
  const { env } = await import("cloudflare:workers");
  return createClient({
    serviceDomain: env.MICROCMS_SERVICE_DOMAIN,
    apiKey: env.MICROCMS_API_KEY,
  });
}

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
      return res as ListResponse<Omit<Interview, "body">>;
    } catch (error) {
      console.error("[microCMS] fetchInterviews failed:", error);
      return {
        contents: [],
        totalCount: 0,
        offset: 0,
        limit: data.limit ?? 6,
      } satisfies ListResponse<Omit<Interview, "body">>;
    }
  });

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

export type News = {
  id: string;
  category: string;
  mediaName: string;
  mediaLogo?: InterviewImage;
  title: string;
  body?: string;
  externalUrl?: string;
  publishedAt: string;
  updatedAt: string;
};

export type NewsCard = Omit<News, "body">;

export const fetchNewsList = createServerFn({ method: "GET" })
  .inputValidator((input: { limit?: number } | undefined) => input ?? {})
  .handler(async ({ data }) => {
    try {
      const client = await getClient();
      const res = await client.getList<News>({
        endpoint: "news",
        queries: {
          limit: data.limit ?? 8,
          orders: "-publishedAt",
          fields: "id,category,mediaName,mediaLogo,title,externalUrl,publishedAt,updatedAt",
        },
      });
      return res as ListResponse<NewsCard>;
    } catch (error) {
      console.error("[microCMS] fetchNewsList failed:", error);
      return {
        contents: [],
        totalCount: 0,
        offset: 0,
        limit: data.limit ?? 8,
      } satisfies ListResponse<NewsCard>;
    }
  });

export const fetchNews = createServerFn({ method: "GET" })
  .inputValidator((input: { id: string }) => input)
  .handler(async ({ data }) => {
    const client = await getClient();
    const res = await client.get<News>({
      endpoint: "news",
      contentId: data.id,
    });
    return res;
  });

export const ACHIEVEMENT_CATEGORIES = ["policy", "collaboration", "proposal"] as const;

export type AchievementCategory = (typeof ACHIEVEMENT_CATEGORIES)[number];

export type Achievement = {
  id: string;
  title: string;
  category: AchievementCategory | [AchievementCategory];
  summary?: string;
  thumbnail?: InterviewImage;
  externalLink?: string;
  achievedAt?: string;
  publishedAt: string;
  updatedAt: string;
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
      return res as ListResponse<Achievement>;
    } catch (error) {
      console.error("[microCMS] fetchAchievements failed:", error);
      return {
        contents: [],
        totalCount: 0,
        offset: 0,
        limit: data.limit ?? 100,
      } satisfies ListResponse<Achievement>;
    }
  });
