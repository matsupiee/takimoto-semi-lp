import { Link } from "@tanstack/react-router";

import type { NewsCard } from "../../lib/microcms";

function formatDate(iso: string) {
  const d = new Date(iso);
  return `${d.getFullYear()}.${d.getMonth() + 1}.${d.getDate()}`;
}

export default function MetaNews({ items }: { items: NewsCard[] }) {
  return (
    <section id="news" className="bg-white px-6 py-16 md:px-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        <p className="text-sm font-bold tracking-wide text-[#e60012] md:text-base">News</p>
        <h2 className="mt-4 font-semibold leading-tight text-[#1c2b33] text-3xl md:text-5xl">
          お知らせ / プレスリリース
        </h2>

        {items.length === 0 ? (
          <p className="mt-16 text-[#1c2b33]/70">
            まだ記事がありません。microCMS の
            <code className="mx-1 rounded bg-[#f2f3f5] px-1.5 py-0.5 text-sm">news</code>
            から投稿すると、ここに表示されます。
          </p>
        ) : (
          <ul className="mt-12 md:mt-20">
            {items.map((item) => (
              <li key={item.id} className="border-b border-[#1c2b33]/10">
                <NewsRow item={item} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

function NewsRow({ item }: { item: NewsCard }) {
  const isExternal = !!item.externalUrl;
  const date = formatDate(item.publishedAt);

  const content = (
    <div className="grid grid-cols-[88px_1fr_24px] items-start gap-6 py-8 md:grid-cols-[140px_1fr_32px] md:gap-10 md:py-12">
      <div className="flex flex-col items-center gap-3">
        <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-full bg-[#f2f3f5] md:h-24 md:w-24">
          {item.mediaLogo?.url ? (
            <img
              src={`${item.mediaLogo.url}?fit=crop&w=200&h=200`}
              alt={item.mediaName}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          ) : (
            <span className="text-xs text-[#1c2b33]/50">{item.mediaName}</span>
          )}
        </div>
        <p className="text-xs text-[#1c2b33]/60 md:text-sm">{date}</p>
      </div>

      <div className="flex flex-col gap-3 md:gap-4">
        <p className="text-sm font-bold text-[#e60012] md:text-[15px]">{item.category}</p>
        <p className="font-bold text-[#1c2b33] md:text-lg">{item.mediaName}</p>
        <p className="text-base leading-relaxed text-[#1c2b33] md:text-lg">{item.title}</p>
      </div>

      <div className="pt-1 text-[#e60012]">{isExternal ? <ExternalIcon /> : null}</div>
    </div>
  );

  if (isExternal) {
    return (
      <a
        href={item.externalUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block transition hover:bg-[#1c2b33]/[0.02]"
      >
        {content}
      </a>
    );
  }

  return (
    <Link
      to="/news/$id"
      params={{ id: item.id }}
      className="block transition hover:bg-[#1c2b33]/[0.02]"
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
