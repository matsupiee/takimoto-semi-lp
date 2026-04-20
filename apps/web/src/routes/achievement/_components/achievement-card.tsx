import { Achievement } from "@/lib/microcms/server-fn/achievement";

export default function AchievementCard({ item }: { item: Achievement }) {
  const dateLabel = item.achievedAt
    ? new Date(item.achievedAt).toLocaleDateString("ja-JP", {
        year: "numeric",
        month: "long",
      })
    : null;

  const content = (
    <>
      {item.thumbnail?.url ? (
        <div className="aspect-[4/3] w-full overflow-hidden bg-[#1c2b33]/5">
          <img
            src={`${item.thumbnail.url}?fit=crop&w=800&h=600`}
            alt={item.title}
            loading="lazy"
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        </div>
      ) : null}
      <div className="flex flex-col gap-3 p-6">
        {dateLabel ? <p className="text-sm font-medium text-[#1c2b33]/60">{dateLabel}</p> : null}
        <p className="text-lg font-medium leading-snug text-[#1c2b33] md:text-xl">{item.title}</p>
        {item.summary ? <p className="text-sm text-[#1c2b33]/80">{item.summary}</p> : null}
      </div>
    </>
  );

  const className =
    "group flex flex-col overflow-hidden rounded-3xl bg-[#f8f9fb] transition hover:shadow-md";

  if (item.externalLink) {
    return (
      <a href={item.externalLink} target="_blank" rel="noreferrer" className={className}>
        {content}
      </a>
    );
  }

  return <article className={className}>{content}</article>;
}
