import { Toaster } from "@takimoto-semi-lp/ui/components/sonner";
import { HeadContent, Outlet, Scripts, createRootRouteWithContext } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

import Header from "../components/header";

import appCss from "../index.css?url";

export interface RouterAppContext {}

export const Route = createRootRouteWithContext<RouterAppContext>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "瀧本ゼミ 政策分析パート | Policy Analysis Think Tank" },
      {
        name: "description",
        content:
          "京都大学准教授・瀧本哲史が創設した学生主体の政策シンクタンク。見過ごされた社会課題を徹底調査と専門家ヒアリングで分析し、実装可能な解決策を社会へ実装する。",
      },
      { name: "theme-color", content: "#0a0a0f" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Noto+Sans+JP:wght@400;500;700;900&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
  }),

  component: RootDocument,
});

function RootDocument() {
  return (
    <html lang="ja" className="dark">
      <head>
        <HeadContent />
      </head>
      <body>
        <div className="min-h-svh bg-background text-foreground">
          <Header />
          <Outlet />
        </div>
        <Toaster richColors />
        <TanStackRouterDevtools position="bottom-left" />
        <Scripts />
      </body>
    </html>
  );
}
