declare module "cloudflare:workers" {
  export const env: {
    VITE_SERVER_URL: string;
    CORS_ORIGIN: string;
    MICROCMS_SERVICE_DOMAIN: string;
    MICROCMS_API_KEY: string;
    BASIC_AUTH_USER?: string;
    BASIC_AUTH_PASSWORD?: string;
  };
}
