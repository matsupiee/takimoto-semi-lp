type Product = {
  backgroundImage: string;
  productImage: string;
  productAlt: string;
  title: string;
  description: string;
  cta: { label: string; href: string };
};

const products: Product[] = [
  {
    backgroundImage:
      "https://scontent-nrt6-1.xx.fbcdn.net/v/t39.8562-6/476162045_607962825286207_7112013653867117319_n.jpg",
    productImage:
      "https://lookaside.fbsbx.com/elementpath/media/?media_id=1117457019661716&version=1769429390",
    productAlt: "Ray-Ban Meta AIグラス",
    title: "Ray-Ban Meta AIグラス",
    description: "キャプチャ、シェア、保存を一瞬で。完全にハンズフリー。",
    cta: { label: "購入する", href: "/ai-glasses/shop-all/" },
  },
  {
    backgroundImage:
      "https://lookaside.fbsbx.com/elementpath/media/?media_id=965334775159384&version=1769429390",
    productImage:
      "https://scontent-nrt1-2.xx.fbcdn.net/v/t39.8562-6/475439816_1305991783996646_1702732808380155837_n.png",
    productAlt: "Meta Quest 3S",
    title: "Meta Quest 3S",
    description: "Meta Quest 3Sで、驚きに満ちたMR(複合現実)の世界に飛び込もう。",
    cta: { label: "購入する", href: "/quest/quest-3s/" },
  },
];

export default function MetaShop() {
  return (
    <section className="bg-white px-6 pb-16 md:px-16 md:pb-24">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-10 text-3xl font-semibold text-[#1c2b33] md:text-5xl">
          最新のデバイスを購入して、世界を広げる
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {products.map((product) => (
            <article
              key={product.title}
              className="relative overflow-hidden rounded-3xl bg-[#f8f9fb]"
            >
              <div
                className="aspect-[4/3] w-full bg-cover bg-center md:aspect-[5/4]"
                style={{ backgroundImage: `url(${product.backgroundImage})` }}
              >
                <div className="flex h-full w-full items-center justify-center p-8">
                  <img
                    src={product.productImage}
                    alt={product.productAlt}
                    loading="lazy"
                    className="max-h-[240px] w-auto object-contain md:max-h-[320px]"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4 p-6 md:p-8">
                <h3 className="text-2xl font-semibold text-[#1c2b33] md:text-3xl">
                  {product.title}
                </h3>
                <p className="text-base text-[#1c2b33]/80">{product.description}</p>
                <a
                  href={product.cta.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex w-fit items-center rounded-full bg-[#1c2b33] px-6 py-3 text-[15px] font-medium text-white transition hover:bg-black"
                >
                  {product.cta.label}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
