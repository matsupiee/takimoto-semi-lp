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
  id?: string;
  children: ReactNode;
};

/**
 * 見出しを中央に置く about ページ共通のセクション枠。
 *
 * 背景色は敷かない。区切りは余白と eyebrow で足りており、背景の塗り分けは
 * サイトの他のページに無い仕掛けなので持ち込まない。
 */
export default function CenteredSection({ eyebrow, title, as, lede, rule, id, children }: Props) {
  return (
    <PageContainer as="section" id={id} className="py-12 md:py-16">
      <div>
        <SectionHeader eyebrow={eyebrow} title={title} as={as} align="center" />
        {rule ? <div className="mx-auto mt-5 h-0.5 w-10 bg-brand" /> : null}
        {lede ? (
          <p className="mx-auto mt-6 max-w-2xl text-center text-base leading-relaxed text-ink/70 md:text-lg">
            {lede}
          </p>
        ) : null}
      </div>

      <div className="mt-8 md:mt-10">{children}</div>
    </PageContainer>
  );
}
