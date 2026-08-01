import { SeminarProfile } from "@/lib/microcms/server-fn/seminar-profile";
import { gridColsForCount, gridMaxWidthForCount } from "@/shared/_utils/grid";

type Stat = {
  label: string;
  value: string;
  caption?: string;
};

function buildStats(profile: SeminarProfile): Stat[] {
  const stats: Stat[] = [];

  if (typeof profile.memberCount === "number") {
    stats.push({ label: "在籍メンバー", value: `${profile.memberCount}名` });
  }

  // 男女比は片方だけだと比率として意味をなさないので、両方揃っているときだけ出す
  if (typeof profile.maleRatio === "number" && typeof profile.femaleRatio === "number") {
    stats.push({
      label: "男女比",
      value: `${profile.maleRatio} : ${profile.femaleRatio}`,
      caption: "男性 : 女性",
    });
  }

  if (typeof profile.utokyoRatio === "number") {
    stats.push({
      label: "東大生の割合",
      value: `${profile.utokyoRatio}%`,
      caption: `他大生 ${100 - profile.utokyoRatio}%`,
    });
  }

  return stats;
}

export default function SeminarStats({ profile }: { profile: SeminarProfile | null }) {
  if (!profile) return null;

  const stats = buildStats(profile);
  if (stats.length === 0) return null;

  return (
    <section aria-label="ゼミの構成" className="mb-12 md:mb-16">
      <div
        className={`grid grid-cols-1 gap-6 ${gridColsForCount(stats.length, 3)} ${gridMaxWidthForCount(stats.length, 3)}`}
      >
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-3xl bg-[#f8f9fb] p-8">
            <p className="text-sm font-bold text-[#e60012]">{stat.label}</p>
            <p className="mt-3 text-4xl font-semibold leading-none text-[#1c2b33] md:text-5xl">
              {stat.value}
            </p>
            {stat.caption ? <p className="mt-3 text-sm text-[#1c2b33]/70">{stat.caption}</p> : null}
          </div>
        ))}
      </div>
    </section>
  );
}
