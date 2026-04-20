import { Member } from "@/lib/microcms/server-fn/member";

export default function MemberCard({ item }: { item: Member }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-3xl bg-[#f8f9fb]">
      <div className="aspect-square w-full overflow-hidden bg-[#1c2b33]/5">
        {item.profileImage?.url ? (
          <img
            src={`${item.profileImage.url}?fit=crop&w=600&h=600`}
            alt={item.name}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        ) : null}
      </div>
      <div className="flex flex-col gap-3 p-6 md:p-8">
        <div className="flex flex-col gap-1">
          <p className="text-xl font-medium text-[#1c2b33]">{item.name}</p>
          {item.affiliation || item.grade ? (
            <p className="text-sm text-[#1c2b33]/70">
              {[item.affiliation, item.grade].filter(Boolean).join(" ・ ")}
            </p>
          ) : null}
        </div>
        {item.hobby ? (
          <dl className="flex gap-2 text-sm text-[#1c2b33]/80">
            <dt className="shrink-0 font-medium">趣味</dt>
            <dd>{item.hobby}</dd>
          </dl>
        ) : null}
        {item.message ? (
          <p className="text-sm leading-relaxed text-[#1c2b33]/80">{item.message}</p>
        ) : null}
      </div>
    </article>
  );
}
