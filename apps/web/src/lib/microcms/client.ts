import { createClient } from "microcms-js-sdk";

export async function getClient() {
  const { env } = await import("cloudflare:workers");
  return createClient({
    serviceDomain: env.MICROCMS_SERVICE_DOMAIN,
    apiKey: env.MICROCMS_API_KEY,
  });
}
