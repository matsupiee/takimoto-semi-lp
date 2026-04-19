import alchemy from "alchemy";
import { TanStackStart } from "alchemy/cloudflare";
import { config } from "dotenv";

config({ path: "./.env" });
config({ path: "../../apps/web/.env" });

const app = await alchemy("takimoto-semi-lp");

export const web = await TanStackStart("web", {
  cwd: "../../apps/web",
  bindings: {
    VITE_SERVER_URL: alchemy.env.VITE_SERVER_URL!,
    CORS_ORIGIN: alchemy.env.CORS_ORIGIN!,
    MICROCMS_SERVICE_DOMAIN: alchemy.env.MICROCMS_SERVICE_DOMAIN!,
    MICROCMS_API_KEY: alchemy.env.MICROCMS_API_KEY!,
  },
});

console.log(`Web    -> ${web.url}`);

await app.finalize();
