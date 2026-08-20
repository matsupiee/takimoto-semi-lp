import type { ReactNode } from "react";

import PageContainer from "@/shared/_components/layout/page-container";
import SectionHeader from "@/shared/_components/section-header";

type Align = "left" | "center";

type Props = {
  eyebrow: string;
  title: ReactNode;
  as?: "h1" | "h2";
  /**
   * 中央寄せは「直下が対称グリッド（2〜3等分）」のセクションだけ。
   * 本文や罫線リストを持つセクションは左に置く。
   */
  align?: Align;
  lede?: ReactNode;
  /** 見出し下の短い赤罫。ページ先頭の見出しにだけ付ける */
  rule?: boolean;
  id?: string;
  children: ReactNode;
};

/**
 * about ページ共通のセクション枠。
 *
 * 背景色は敷かない。区切りは余白と eyebrow で足りており、背景の塗り分けは
 * サイトの他のページに無い仕掛けなので持ち込まない。
 */
export default function Section({
  eyebrow,
  title,
  as,
  align = "left",
  lede,
  rule,
  id,
  children,
}: Props) {
  // 中央寄せは「直下が対称グリッド」であることが理由なので、グリッドが1カラムに
  // 潰れるモバイルでは中央に寄せない。md 以上でだけ中央にする。
  const centered = align === "center";

  return (
    <PageContainer as="section" id={id} className="py-12 md:py-16">
      <div>
        <SectionHeader
          eyebrow={eyebrow}
          title={title}
          as={as}
          className={centered ? "md:text-center" : undefined}
        />
        {rule ? (
          <div className={`mt-5 h-0.5 w-10 bg-brand ${centered ? "md:mx-auto" : ""}`} />
        ) : null}
        {lede ? (
          <p
            className={`mt-6 max-w-2xl text-pretty text-base leading-jp-body text-ink/70 md:text-lg ${
              centered ? "md:mx-auto md:text-center" : ""
            }`}
          >
            {lede}
          </p>
        ) : null}
      </div>

      <div className="mt-8 md:mt-10">{children}</div>
    </PageContainer>
  );
}
