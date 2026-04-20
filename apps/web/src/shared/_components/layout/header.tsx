import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@takimoto-semi-lp/ui/components/drawer";

export const primaryNavItems = [
  { label: "About", href: "/about" },
  { label: "活動の成果", href: "/achievement" },
  { label: "メンバー", href: "/member" },
  { label: "インタビュー", href: "/interview" },
  { label: "レポート", href: "/report" },
  { label: "お知らせ", href: "/announcement" },
];

export const endNavItems = [
  { label: "新歓案内", href: "/recruit" },
  { label: "お問い合わせ", href: "/contact" },
];

export default function Header() {
  return (
    <nav aria-label="メイン" className="sticky top-0 z-50 bg-white">
      <div className="relative">
        <div className="flex h-16 items-center justify-between px-4 md:px-10">
          <div className="flex items-center gap-10">
            <a href="/" aria-label="瀧本ゼミホーム" className="flex items-center">
              <img alt="瀧本ゼミロゴ" src={"/logo.svg"} className="h-14 w-auto" />
            </a>

            <ul className="hidden items-center gap-8 md:flex">
              {primaryNavItems.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-[15px] text-[#1c2b33] hover:text-black">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center gap-4 md:gap-6">
            <ul className="hidden items-center gap-6 lg:flex">
              {endNavItems.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-[15px] text-[#1c2b33] hover:text-black">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <Drawer>
            <DrawerTrigger
              aria-label="モバイルナビゲーションメニューを開く"
              className="flex h-10 w-10 items-center justify-center rounded-full text-[#1c2b33] hover:bg-black/5 md:hidden"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M4 5a1 1 0 0 0 0 2h16a1 1 0 1 0 0-2H4zM3 12a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1zM3 18a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1z" />
              </svg>
            </DrawerTrigger>
            <DrawerContent side="right" className="md:hidden">
              <DrawerHeader>
                <DrawerTitle>メニュー</DrawerTitle>
                <DrawerDescription className="sr-only">
                  サイト内のページに移動するためのナビゲーション
                </DrawerDescription>
              </DrawerHeader>
              <ul className="flex flex-col px-2 pb-4">
                {[...primaryNavItems, ...endNavItems].map((item) => (
                  <li key={item.label}>
                    <DrawerClose
                      render={
                        <a
                          href={item.href}
                          className="block rounded-md px-3 py-3 text-[15px] text-[#1c2b33] hover:bg-black/5"
                        >
                          {item.label}
                        </a>
                      }
                    />
                  </li>
                ))}
              </ul>
            </DrawerContent>
          </Drawer>
        </div>

        <div className="h-px w-full bg-black/10" />
      </div>
    </nav>
  );
}
