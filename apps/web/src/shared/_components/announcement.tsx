import { Link } from "@tanstack/react-router";

import { cn } from "@takimoto-semi-lp/ui/lib/utils";
import type { Announcement } from "@/lib/microcms/server-fn/announcement";
import PageContainer from "@/shared/_components/layout/page-container";
import SectionHeader from "@/shared/_components/section-header";
import ItemRow, { ItemRowList } from "@/shared/_components/item-row";

function formatDate(iso: string) {
  const d = new Date(iso);
  return `${d.getFullYear()}.${d.getMonth() + 1}.${d.getDate()}`;
}

export function AnnouncementList({
  items,
  className,
}: {
  items: Announcement[];
  className?: string;
}) {
  if (items.length === 0) {
    return <p className={cn("text-ink/70", className)}>現在お知らせはありません。</p>;
  }

  return (
    <ItemRowList className={className}>
      {items.map((item) => (
        <li key={item.id}>
          <AnnouncementRow item={item} />
        </li>
      ))}
    </ItemRowList>
  );
}

export default function Announcement({ items }: { items: Announcement[] }) {
  // 記事が無いうちはトップに「お知らせ」枠ごと出さない
  if (items.length === 0) return null;

  return (
    <PageContainer
      as="section"
      id="Announcement"
      width="default"
      className="bg-white py-12 md:py-16"
    >
      <SectionHeader eyebrow="Announcement" title="お知らせ / プレスリリース" accent="red" />
      <AnnouncementList items={items} className="mt-6 md:mt-8" />
    </PageContainer>
  );
}

function AnnouncementRow({ item }: { item: Announcement }) {
  const isExternal = !!item.externalUrl;

  const content = (
    <ItemRow
      date={formatDate(item.publishedAt ?? item.updatedAt)}
      label={item.category}
      meta={item.mediaName}
      title={item.title}
      external={isExternal}
    />
  );

  if (isExternal) {
    return (
      <a
        href={item.externalUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block transition-colors hover:bg-ink/[0.03]"
      >
        {content}
      </a>
    );
  }

  return (
    <Link
      to="/announcement/$id"
      params={{ id: item.id }}
      className="block transition-colors hover:bg-ink/[0.03]"
    >
      {content}
    </Link>
  );
}
