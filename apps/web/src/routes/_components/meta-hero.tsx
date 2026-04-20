import { useEffect, useRef, useState } from "react";

type Slide = {
  image: string;
  alt: string;
  title: string;
  titleColor: string;
  cta: { label: string; href: string };
};

const slides: Slide[] = [
  {
    image: "/images/presentation.png",
    alt: "普段の活動風景",
    title: "学生が本気で世の中を変える",
    titleColor: "#FFFFFF",
    cta: { label: "ゼミのミッション", href: "#mission" },
  },
  {
    image: "/images/gogatsu-sai.jpg",
    alt: "五月祭での瀧本ゼミ",
    title: "様々な社会課題の解決に真剣に取り組んでいます",
    titleColor: "#FFFFFF",
    cta: { label: "取り組み", href: "#actions" },
  },
];

const AUTOPLAY_MS = 7000;

export default function MetaHero() {
  const [current, setCurrent] = useState(0);
  const [playing, setPlaying] = useState(true);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (!playing) return;
    timerRef.current = setInterval(() => {
      setCurrent((i) => (i + 1) % slides.length);
    }, AUTOPLAY_MS);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [playing]);

  return (
    <section
      aria-label="スライドを変更"
      className="relative h-[calc(100vh-4rem)] min-h-[520px] w-full overflow-hidden bg-black"
    >
      {slides.map((slide, i) => (
        <div
          key={slide.title}
          className={`absolute inset-0 transition-opacity duration-700 ${
            i === current ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
        >
          <img
            className="h-full w-full object-cover"
            src={slide.image}
            alt={slide.alt}
            loading={i === 0 ? "eager" : "lazy"}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/30" />

          <div className="absolute inset-x-0 bottom-0 px-6 pb-20 md:px-16 md:pb-28">
            <div className="mx-auto max-w-7xl">
              <h2
                className="max-w-3xl font-semibold leading-tight text-3xl md:text-5xl lg:text-6xl"
                style={{ color: slide.titleColor }}
              >
                {slide.title}
              </h2>
              <div className="mt-6">
                <a
                  href={slide.cta.href}
                  aria-label={slide.cta.label}
                  className="inline-flex items-center rounded-full bg-white px-6 py-3 text-[15px] font-medium text-[#1c2b33] shadow-md transition hover:bg-white/90"
                >
                  {slide.cta.label}
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="absolute inset-x-0 bottom-6 flex items-center justify-center gap-4">
        <div className="flex gap-3">
          {slides.map((s, i) => (
            <button
              key={s.title}
              type="button"
              onClick={() => setCurrent(i)}
              aria-label={`Slide ${i + 1}`}
              className={`h-1 w-10 rounded-full transition ${
                i === current ? "bg-white" : "bg-white/40 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
        <button
          type="button"
          aria-label={playing ? "停止" : "再生"}
          onClick={() => setPlaying((v) => !v)}
          className="flex h-8 w-8 items-center justify-center rounded-full bg-black/40 text-white hover:bg-black/60"
        >
          {playing ? (
            <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
              <rect x="6" y="5" width="4" height="14" rx="1" />
              <rect x="14" y="5" width="4" height="14" rx="1" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>
      </div>
    </section>
  );
}
