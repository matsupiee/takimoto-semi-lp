import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

import { cn } from "@takimoto-semi-lp/ui/lib/utils";

// セクションの中身に合わせて幅を使い分ける。
// 1152px の器に本文を左寄せで流すと、日本語で 1 行 60 文字超になる上に右が空いて見える。
// テキスト主体のセクションは器ごと狭め、面で埋まるグリッドだけ広く使う。
export type ContainerWidth = "narrow" | "default" | "wide";

const WIDTH_CLASS: Record<ContainerWidth, string> = {
  // 本文・記事詰め。padding を引いた実効幅 768px ≒ 日本語 40 文字/行
  narrow: "max-w-4xl",
  // 見出し + リストなど中量のセクション
  default: "max-w-5xl",
  // Hero・カードグリッド・ヘッダー/フッターの外枠
  wide: "max-w-7xl",
};

type Props<T extends ElementType> = {
  as?: T;
  width?: ContainerWidth;
  className?: string;
  children: ReactNode;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "width" | "className" | "children">;

export default function PageContainer<T extends ElementType = "div">({
  as,
  width = "wide",
  className,
  children,
  ...rest
}: Props<T>) {
  const Component = as ?? "div";
  return (
    <Component
      className={cn("mx-auto w-full px-6 md:px-16", WIDTH_CLASS[width], className)}
      {...rest}
    >
      {children}
    </Component>
  );
}
