import { Link } from "@tanstack/react-router";

import type { Announcement } from "@/lib/microcms/server-fn/announcement";
import PageContainer from "@/shared/_components/layout/page-container";

export default function FeaturedBanner({ items }: { items: Announcement[] }) {
  if (items.length === 0) return null;

  return (
    <PageContainer as="section" id="Featured" className="bg-[#fafafa] py-10 md:py-14">
      <ul className="grid gap-4 md:gap-6">
        {items.map((item) => (
          <li key={item.id}>
            <FeaturedBannerCard item={item} />
          </li>
        ))}
      </ul>
    </PageContainer>
  );
}

function FeaturedBannerCard({ item }: { item: Announcement }) {
  const isExternal = !!item.externalUrl;

  const content = (
    <article className="group relative grid grid-cols-1 overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-neutral-100 md:aspect-auto md:h-full">
        {item.thumbnail ? (
          <img
            src={item.thumbnail.url}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]"
          />
        ) : (
          <div className="h-full w-full bg-gradient-to-br from-[#e60012]/10 to-[#e60012]/30" />
        )}
        <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-[#e60012] px-3 py-1 text-xs font-semibold text-white md:text-sm">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-white" aria-hidden="true" />
          Featured
        </span>
      </div>

      <div className="flex flex-col justify-between gap-6 p-6 md:p-8 lg:p-10">
        <div>
          <p className="text-xs font-semibold tracking-wider text-[#e60012] md:text-sm">
            {item.category}
          </p>
          <h3 className="mt-3 text-xl font-bold leading-snug text-neutral-900 md:text-2xl lg:text-3xl">
            {item.title}
          </h3>
          {item.mediaName ? (
            <p className="mt-2 text-sm text-neutral-500">{item.mediaName}</p>
          ) : null}
        </div>

        <span className="inline-flex items-center gap-2 self-start text-sm font-semibold text-[#e60012] md:text-base">
          詳しく見る
          <ArrowIcon external={isExternal} />
        </span>
      </div>
    </article>
  );

  if (isExternal) {
    return (
      <a
        href={item.externalUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
        aria-label={item.title}
      >
        {content}
      </a>
    );
  }

  return (
    <Link to="/announcement/$id" params={{ id: item.id }} className="block" aria-label={item.title}>
      {content}
    </Link>
  );
}

function ArrowIcon({ external }: { external: boolean }) {
  if (external) {
    return (
      <svg
        viewBox="0 0 24 24"
        width="16"
        height="16"
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
  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  );
}
