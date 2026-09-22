import type { ReactNode } from "react";

type Accent = "red" | "blue";
type HeadingLevel = "h1" | "h2";
type Align = "left" | "center";

const ACCENT_CLASS: Record<Accent, string> = {
  red: "text-brand",
  blue: "text-brand-blue",
};

type Props = {
  /**
   * 見出しの上に出す小見出し。見出しと同じ語になってしまう場合は省く
   * （「サークルオリエンテーション」に対する "Orientation" のように、
   * 重ねても情報が増えないため）。
   */
  eyebrow?: string;
  title: ReactNode;
  accent?: Accent;
  as?: HeadingLevel;
  /**
   * 中央寄せは「直下が対称グリッド（2〜3等分）」のセクションだけに使う。
   * 本文を持つセクションは左に置いてページの背骨を通す。
   */
  align?: Align;
  className?: string;
};

export default function SectionHeader({
  eyebrow,
  title,
  accent = "red",
  as: Heading = "h2",
  align = "left",
  className,
}: Props) {
  return (
    <div className={[align === "center" ? "text-center" : "", className].filter(Boolean).join(" ")}>
      {eyebrow ? (
        <p className={`text-sm font-bold tracking-wide md:text-base ${ACCENT_CLASS[accent]}`}>
          {eyebrow}
        </p>
      ) : null}
      <Heading
        className={`text-balance font-semibold leading-jp-heading text-ink text-2xl md:text-4xl ${
          eyebrow ? "mt-3" : ""
        }`}
      >
        {title}
      </Heading>
    </div>
  );
}
