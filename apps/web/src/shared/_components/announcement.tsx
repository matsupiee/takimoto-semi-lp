import { Link } from "@tanstack/react-router";

import type { Announcement } from "@/lib/microcms/server-fn/announcement";
import SectionHeader from "@/shared/_components/section-header";

function formatDate(iso: string) {
  const d = new Date(iso);
  return `${d.getFullYear()}.${d.getMonth() + 1}.${d.getDate()}`;
}

export default function Announcement({ items }: { items: Announcement[] }) {
  return (
    <section id="Announcement" className="bg-white px-6 py-16 md:px-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeader eyebrow="Announcement" title="お知らせ / プレスリリース" accent="red" />

        {items.length === 0 ? (
          <p className="mt-16 text-[#1c2b33]/70">
            まだ記事がありません。microCMS の
            <code className="mx-1 rounded bg-[#f2f3f5] px-1.5 py-0.5 text-sm">Announcement</code>
            から投稿すると、ここに表示されます。
          </p>
        ) : (
          <ul className="mt-12 md:mt-20">
            {items.map((item) => (
              <li key={item.id} className="border-b border-neutral-200 last:border-b-0">
                <AnnouncementRow item={item} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

function AnnouncementRow({ item }: { item: Announcement }) {
  const isExternal = !!item.externalUrl;
  const date = formatDate(item.publishedAt ?? item.updatedAt);

  const content = (
    <div className="py-6 md:py-8">
      <div className="flex items-start justify-between gap-3 md:gap-4">
        <div className="flex min-w-0 flex-wrap items-center gap-x-3 gap-y-2 md:gap-x-4">
          <span className="inline-flex shrink-0 rounded-full bg-neutral-100 px-3 py-1 text-xs text-neutral-500 md:px-3.5 md:py-1.5 md:text-sm">
            {date}
          </span>
          <span className="text-xs font-normal text-[#e60012] md:text-sm">{item.category}</span>
        </div>
        {isExternal ? (
          <span className="inline-flex shrink-0 pt-0.5 text-[#e60012]" aria-hidden="true">
            <ExternalIcon />
          </span>
        ) : null}
      </div>

      {item.mediaName ? (
        <p className="mt-2 text-sm text-neutral-500 md:text-[15px]">{item.mediaName}</p>
      ) : null}

      <p className="mt-3 text-left text-base font-bold leading-snug text-neutral-900 md:mt-3.5 md:text-lg">
        {item.title}
      </p>
    </div>
  );

  if (isExternal) {
    return (
      <a
        href={item.externalUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block transition-colors hover:bg-neutral-50"
      >
        {content}
      </a>
    );
  }

  return (
    <Link
      to="/announcement/$id"
      params={{ id: item.id }}
      className="block transition-colors hover:bg-neutral-50"
    >
      {content}
    </Link>
  );
}

function ExternalIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M14 4h6v6" />
      <path d="M10 14L20 4" />
      <path d="M19 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5" />
    </svg>
  );
}
