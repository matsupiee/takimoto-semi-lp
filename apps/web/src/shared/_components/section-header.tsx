import type { ReactNode } from "react";

type Accent = "red" | "blue";
type HeadingLevel = "h1" | "h2";

const ACCENT_CLASS: Record<Accent, string> = {
  red: "text-[#e60012]",
  blue: "text-[#1877f2]",
};

type Props = {
  eyebrow: string;
  title: ReactNode;
  accent?: Accent;
  as?: HeadingLevel;
  className?: string;
};

export default function SectionHeader({
  eyebrow,
  title,
  accent = "red",
  as: Heading = "h2",
  className,
}: Props) {
  return (
    <div className={className}>
      <p className={`text-sm font-bold tracking-wide md:text-base ${ACCENT_CLASS[accent]}`}>
        {eyebrow}
      </p>
      <Heading className="mt-4 font-semibold leading-tight text-[#1c2b33] text-3xl md:text-5xl">
        {title}
      </Heading>
    </div>
  );
}
