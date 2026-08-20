import type { ReactNode } from "react";

type Accent = "red" | "blue";
type HeadingLevel = "h1" | "h2";
type Align = "left" | "center";

const ACCENT_CLASS: Record<Accent, string> = {
  red: "text-brand",
  blue: "text-brand-blue",
};

type Props = {
  eyebrow: string;
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
      <p className={`text-sm font-bold tracking-wide md:text-base ${ACCENT_CLASS[accent]}`}>
        {eyebrow}
      </p>
      <Heading className="mt-3 text-balance font-semibold leading-jp-heading text-ink text-2xl md:text-4xl">
        {title}
      </Heading>
    </div>
  );
}
