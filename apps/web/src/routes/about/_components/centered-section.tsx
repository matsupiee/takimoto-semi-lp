import type { ReactNode } from "react";

import PageContainer from "@/shared/_components/layout/page-container";
import SectionHeader from "@/shared/_components/section-header";

type Props = {
  eyebrow: string;
  title: ReactNode;
  as?: "h1" | "h2";
  lede?: ReactNode;
  /** 見出し下の短い赤罫。ページ先頭の見出しにだけ付ける */
  rule?: boolean;
  /** muted は薄グレーの帯。白と交互に並べてページの区切りを作る */
  tone?: "default" | "muted";
  id?: string;
  children: ReactNode;
};

/**
 * 見出しを中央に置く about ページ共通のセクション枠。
 *
 * 背景色を全幅に敷くため、PageContainer 自体を section にせず外側で包む。
 */
export default function CenteredSection({
  eyebrow,
  title,
  as,
  lede,
  rule,
  tone = "default",
  id,
  children,
}: Props) {
  return (
    <section id={id} className={tone === "muted" ? "bg-surface" : "bg-white"}>
      <PageContainer className="py-12 md:py-16">
        <div className="text-center">
          <SectionHeader eyebrow={eyebrow} title={title} as={as} className="text-center" />
          {rule ? <div className="mx-auto mt-5 h-0.5 w-10 bg-brand" /> : null}
          {lede ? (
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-ink/70 md:text-lg">
              {lede}
            </p>
          ) : null}
        </div>

        <div className="mt-8 md:mt-10">{children}</div>
      </PageContainer>
    </section>
  );
}
