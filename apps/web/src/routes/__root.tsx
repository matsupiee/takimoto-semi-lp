import { Toaster } from "@takimoto-semi-lp/ui/components/sonner";
import { HeadContent, Outlet, Scripts, createRootRouteWithContext } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

import appCss from "../index.css?url";

export interface RouterAppContext {}

export const Route = createRootRouteWithContext<RouterAppContext>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Metaについて | ソーシャルテクノロジー、VR、AR、イノベーション" },
      {
        name: "description",
        content:
          "Metaの最新情報のほか、ソーシャルテクノロジー、バーチャルリアリティ、拡張現実、そして、人と人の新しいつながりの形においてMetaが今どんな役割を果たしているかをご紹介します。",
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
      <body className="bg-white text-[#1c2b33] antialiased">
        <Outlet />
        <Toaster richColors />
        <TanStackRouterDevtools position="bottom-left" />
        <Scripts />
      </body>
    </html>
  );
}
