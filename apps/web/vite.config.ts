import { existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import alchemy from "alchemy/cloudflare/tanstack-start";
import { defineConfig } from "vite";

const wranglerPath = fileURLToPath(new URL("./.alchemy/local/wrangler.jsonc", import.meta.url));
const hasAlchemyConfig = existsSync(wranglerPath);

export default defineConfig({
  server: {
    port: 3001,
  },
  resolve: {
    tsconfigPaths: true,
  },
  plugins: [tailwindcss(), tanstackStart(), viteReact(), ...(hasAlchemyConfig ? [alchemy()] : [])],
});
