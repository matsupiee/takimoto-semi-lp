import { Toaster } from "@takimoto-semi-lp/ui/components/sonner";
import { HeadContent, Outlet, Scripts, createRootRouteWithContext } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

import Header from "../components/header";
import Footer from "../components/footer";

import appCss from "../index.css?url";

export interface RouterAppContext {}

export const Route = createRootRouteWithContext<RouterAppContext>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "瀧本ゼミ 政策分析パート | The Best Team to Change the World" },
      {
        name: "description",
        content:
          "瀧本ゼミ政策分析パートは、京都大学客員准教授・故 瀧本哲史が立ち上げたインカレ自主ゼミ／学生シンクタンク。エビデンスに基づく政策立案で、社会の隠れた重要課題を解決します。",
      },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),

  component: RootDocument,
});

function RootDocument() {
  return (
    <html lang="ja">
      <head>
        <HeadContent />
      </head>
      <body>
        <div className="flex min-h-svh flex-col bg-background text-foreground">
          <Header />
          <main className="flex-1">
            <Outlet />
          </main>
          <Footer />
        </div>
        <Toaster richColors />
        <TanStackRouterDevtools position="bottom-left" />
        <Scripts />
      </body>
    </html>
  );
}
