import type { ReactNode } from "react";

import PageContainer from "@/shared/_components/layout/page-container";
import SectionHeader from "@/shared/_components/section-header";

type Props = {
  eyebrow: string;
  title: ReactNode;
  as?: "h1" | "h2";
  lede?: ReactNode;
  id?: string;
  children: ReactNode;
};

/**
 * 見出しを左、内容を右に置く about ページ共通のセクション枠。
 *
 * 見出しの下に内容を縦積みすると、1 セクションあたりの横幅が使われず
 * 縦にも間延びする。横に並べることで器を使い切り、縦の空白も減らす。
 */
export default function SplitSection({ eyebrow, title, as, lede, id, children }: Props) {
  return (
    <PageContainer as="section" id={id} className="py-12 md:py-16">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-12">
        <div className="md:col-span-4">
          <SectionHeader eyebrow={eyebrow} title={title} as={as} />
          {lede ? (
            <p className="mt-4 text-sm leading-relaxed text-[#1c2b33]/70 md:text-base">{lede}</p>
          ) : null}
        </div>
        <div className="md:col-span-8">{children}</div>
      </div>
    </PageContainer>
  );
}
