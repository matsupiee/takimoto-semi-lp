import { Toaster } from "@takimoto-semi-lp/ui/components/sonner";
import { HeadContent, Outlet, Scripts, createRootRouteWithContext } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

import Footer from "../components/footer";
import Header from "../components/header";

import appCss from "../index.css?url";

export interface RouterAppContext {}

export const Route = createRootRouteWithContext<RouterAppContext>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "瀧本ゼミ 政策分析パート | Takimoto Seminar Policy Analysis" },
      {
        name: "description",
        content:
          "見過ごされた重要な社会課題を、徹底的な調査と専門家取材で解き明かす。学生主導のシンクタンク、瀧本ゼミ政策分析パートの公式サイト。",
      },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),

  component: RootDocument,
});

function RootDocument() {
  return (
    <html lang="ja" className="dark">
      <head>
        <HeadContent />
      </head>
      <body className="bg-background text-foreground antialiased">
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
        <Toaster richColors />
        <TanStackRouterDevtools position="bottom-left" />
        <Scripts />
      </body>
    </html>
  );
}
