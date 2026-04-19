import { Link } from "@tanstack/react-router";

import type { Interview } from "../lib/microcms";

type InterviewCard = Omit<Interview, "body">;

export default function MetaInterview({ items }: { items: InterviewCard[] }) {
  return (
    <section className="bg-white px-6 py-16 md:px-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col items-center gap-6 text-center">
          <h2 className="text-4xl font-semibold text-[#1c2b33] md:text-6xl">
            ゼミ生インタビュー
          </h2>
          <Link
            to="/interviews"
            className="inline-flex items-center rounded-full border border-[#1c2b33]/20 px-6 py-3 text-[15px] font-medium text-[#1c2b33] transition hover:bg-[#1c2b33]/5"
          >
            すべてのインタビューを見る
          </Link>
        </div>

        {items.length === 0 ? (
          <p className="text-center text-[#1c2b33]/70">
            まだインタビュー記事がありません。microCMSから投稿すると、ここに表示されます。
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <Link
                key={item.id}
                to="/interviews/$id"
                params={{ id: item.id }}
                className="group flex flex-col gap-5"
              >
                <div className="aspect-[4/3] w-full overflow-hidden rounded-3xl bg-[#f2f3f5]">
                  {item.thumbnail?.url ? (
                    <img
                      src={`${item.thumbnail.url}?fit=crop&w=800&h=600`}
                      alt={item.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  ) : null}
                </div>
                <div className="flex flex-col gap-4">
                  {item.studentName ? (
                    <p className="text-sm font-medium text-[#1c2b33]/60">
                      {item.studentName}
                      {item.grade ? ` ・ ${item.grade}` : ""}
                    </p>
                  ) : null}
                  <p className="text-xl font-medium leading-snug text-[#1c2b33] md:text-2xl">
                    {item.title}
                  </p>
                  <span className="inline-flex items-center gap-3 text-[15px] font-medium text-[#1c2b33]">
                    <Arrow />
                    続きを読む
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function Arrow() {
  return (
    <svg
      viewBox="0 0 38 38"
      width="26"
      height="26"
      fill="none"
      aria-hidden="true"
    >
      <path
        opacity="0.4"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19 37C9.05887 37 1 28.9411 1 19C1 9.05887 9.05887 1 19 1C28.9411 1 37 9.05887 37 19C37 28.9411 28.9411 37 19 37Z"
        stroke="currentColor"
      />
      <path
        d="M21.9657 12L28.9287 18.963L21.9657 25.926L20.7348 24.7193L25.6203 19.8334L10.0001 19.8334V18.0926L25.5966 18.0926L20.7348 13.2309L21.9657 12Z"
        fill="currentColor"
      />
    </svg>
  );
}
