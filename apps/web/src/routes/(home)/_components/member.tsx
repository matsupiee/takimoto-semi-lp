const LEADERSHIP_IMAGE =
  "https://scontent-nrt6-1.xx.fbcdn.net/v/t39.8562-6/475437836_1128458898496424_5128602245537733789_n.jpg";

export default function Member() {
  return (
    <section className="bg-white px-6 py-16 md:px-16 md:py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 md:grid-cols-2">
        <div className="order-2 md:order-1">
          <div className="overflow-hidden rounded-3xl">
            <img
              src={LEADERSHIP_IMAGE}
              alt="メンバー"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="order-1 md:order-2">
          <h2 className="text-3xl font-semibold text-[#1c2b33] md:text-5xl">メンバー紹介</h2>
          <p className="mt-6 text-base text-[#1c2b33]/80 md:text-lg">
            瀧本ゼミのメンバーは、日々世の中の課題を解決するための活動に取り組んでいます。
          </p>
          <a
            href="/media-gallery/executives/"
            aria-label="クリックして経営陣について知る"
            className="mt-6 inline-flex items-center rounded-full bg-[#1c2b33] px-6 py-3 text-[15px] font-medium text-white transition hover:bg-black"
          >
            メンバーについて知る
          </a>
        </div>
      </div>
    </section>
  );
}
