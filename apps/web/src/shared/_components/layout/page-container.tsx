import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

import { cn } from "@takimoto-semi-lp/ui/lib/utils";

type Props<T extends ElementType> = {
  as?: T;
  className?: string;
  children: ReactNode;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "className" | "children">;

export default function PageContainer<T extends ElementType = "div">({
  as,
  className,
  children,
  ...rest
}: Props<T>) {
  const Component = as ?? "div";
  return (
    <Component className={cn("mx-auto w-full max-w-7xl px-6 md:px-16", className)} {...rest}>
      {children}
    </Component>
  );
}
