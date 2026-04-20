import { createStartHandler, defaultStreamHandler } from "@tanstack/react-start/server";
import { env } from "cloudflare:workers";

const handler = createStartHandler(defaultStreamHandler);

function unauthorized() {
  return new Response("Unauthorized", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Restricted", charset="UTF-8"',
    },
  });
}

function timingSafeEqual(a: string, b: string) {
  if (a.length !== b.length) return false;
  let mismatch = 0;
  for (let i = 0; i < a.length; i++) {
    mismatch |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return mismatch === 0;
}

function checkBasicAuth(request: Request) {
  const expectedUser = env.BASIC_AUTH_USER;
  const expectedPassword = env.BASIC_AUTH_PASSWORD;
  if (!expectedUser || !expectedPassword) return true;

  const header = request.headers.get("Authorization");
  if (!header?.startsWith("Basic ")) return false;

  let decoded: string;
  try {
    decoded = atob(header.slice("Basic ".length).trim());
  } catch {
    return false;
  }

  const separator = decoded.indexOf(":");
  if (separator === -1) return false;

  const user = decoded.slice(0, separator);
  const password = decoded.slice(separator + 1);

  return timingSafeEqual(user, expectedUser) && timingSafeEqual(password, expectedPassword);
}

export default {
  fetch(request: Request) {
    if (!checkBasicAuth(request)) return unauthorized();
    return handler(request);
  },
};
