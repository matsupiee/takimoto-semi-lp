import { Toaster } from "@takimoto-semi-lp/ui/components/sonner";
import { HeadContent, Outlet, Scripts, createRootRouteWithContext } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

import { OG_IMAGE_URL, SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site";
import Footer from "@/shared/_components/layout/footer";
import Header from "@/shared/_components/layout/header";
import PageContainer from "@/shared/_components/layout/page-container";
import SectionHeader from "@/shared/_components/section-header";
import appCss from "../index.css?url";

export interface RouterAppContext {}

const SITE_TITLE = `${SITE_NAME} | 社会課題を政策として考える学生主体の公共政策コミュニティ`;

export const Route = createRootRouteWithContext<RouterAppContext>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: SITE_TITLE },
      { name: "description", content: SITE_DESCRIPTION },

      { property: "og:site_name", content: SITE_NAME },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "ja_JP" },
      { property: "og:url", content: SITE_URL },
      { property: "og:title", content: SITE_TITLE },
      { property: "og:description", content: SITE_DESCRIPTION },
      { property: "og:image", content: OG_IMAGE_URL },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },

      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: SITE_TITLE },
      { name: "twitter:description", content: SITE_DESCRIPTION },
      { name: "twitter:image", content: OG_IMAGE_URL },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/logo.svg", type: "image/svg+xml" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
    ],
  }),

  component: RootDocument,
  notFoundComponent: NotFound,
  errorComponent: ErrorPage,
});

function RootDocument() {
  return (
    <html lang="ja">
      <head>
        <HeadContent />
      </head>
      {/* 配色は globals.css の bg-background / text-foreground が効く */}
      <body className="antialiased">
        <Outlet />
        <Toaster richColors />
        <TanStackRouterDevtools position="bottom-left" />
        <Scripts />
      </body>
    </html>
  );
}

function MessagePage({ eyebrow, title, body }: { eyebrow: string; title: string; body: string }) {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <PageContainer as="section" width="narrow" className="py-12 md:py-16">
          <SectionHeader eyebrow={eyebrow} title={title} as="h1" align="center" />
          <p className="mx-auto mt-6 max-w-2xl text-center text-base md:mt-8 text-ink/80 md:text-lg">
            {body}
          </p>
          <div className="mt-10 text-center">
            <a
              href="/"
              className="inline-flex items-center rounded-full bg-ink px-8 py-3 text-[15px] font-medium text-white transition hover:bg-ink/90"
            >
              トップページへ戻る
            </a>
          </div>
        </PageContainer>
      </main>
      <Footer />
    </div>
  );
}

function NotFound() {
  return (
    <MessagePage
      eyebrow="404"
      title="ページが見つかりません"
      body="お探しのページは、移動または削除された可能性があります。URLをご確認のうえ、トップページからお探しください。"
    />
  );
}

function ErrorPage() {
  return (
    <MessagePage
      eyebrow="Error"
      title="エラーが発生しました"
      body="ページの読み込み中に問題が発生しました。お手数ですが、しばらく時間をおいて再度お試しください。"
    />
  );
}
