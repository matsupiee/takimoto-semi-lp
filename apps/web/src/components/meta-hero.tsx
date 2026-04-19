import { useEffect, useRef, useState } from "react";

type Slide = {
  video: string;
  poster: string;
  title: string;
  titleColor: string;
  cta: { label: string; href: string };
};

const slides: Slide[] = [
  {
    video:
      "https://video-nrt1-1.xx.fbcdn.net/o1/v/t2/f2/m69/AQNnu8Jlx5IdOGrCD-CZwOEj-yS6I0mgPl590A1KVzdtyqSdYPlzaEroKLV5X3Dpn3NMYVarvOJFCYlZGwRkIIXb.mp4?strext=1&_nc_cat=1&_nc_sid=5e9851&_nc_ht=video-nrt1-1.xx.fbcdn.net&_nc_ohc=N5O_tmo0t5AQ7kNvwG9P97j&ccb=17-1&vs=712c50af589d1315&_nc_rml=0&bitrate=0&tag=dash_h264-basic-gen2_720p",
    poster:
      "https://scontent-nrt6-1.xx.fbcdn.net/v/t15.5256-10/530360364_3924070201178005_5255456391891200016_n.jpg",
    title: "Metaは、人と人がつながる未来を創出しています",
    titleColor: "#000000",
    cta: { label: "Metaのミッション", href: "#mission" },
  },
  {
    video:
      "https://video-nrt1-1.xx.fbcdn.net/o1/v/t2/f2/m69/AQP9U4imBxeDpQ4tn9BLf0ecF2ijPTrgS1yc2lZlqzvBcG8Ku6-IwnPGr221hWkFg3oxnmyhGdoLnnFKPJnGh88w.mp4?strext=1&_nc_cat=1&_nc_sid=5e9851&_nc_ht=video-nrt1-1.xx.fbcdn.net&ccb=17-1&bitrate=605799&tag=dash_h264-basic-gen2_1080p",
    poster:
      "https://scontent-nrt1-2.xx.fbcdn.net/v/t15.5256-10/474699764_1776040846528065_7848360547859959437_n.jpg",
    title: "Metaのテクノロジーが、その未来を実現します",
    titleColor: "#FFFFFF",
    cta: { label: "Metaのテクノロジー", href: "#technologies" },
  },
  {
    video:
      "https://video-nrt1-1.xx.fbcdn.net/o1/v/t2/f2/m69/AQNWTDQIouweERlTRHUi7BdMJiEMZAhjHmqGlaShmFPTV03lifh7QWiozzHQwuGdSd7dW-pHXj3S20GLMwukY1Cy.mp4?strext=1&_nc_cat=1&_nc_sid=5e9851&_nc_ht=video-nrt1-1.xx.fbcdn.net&bitrate=520326&tag=dash_h264-basic-gen2_1080p",
    poster:
      "https://scontent-nrt1-2.xx.fbcdn.net/v/t15.5256-10/474655770_611394961673219_7869351455841784230_n.jpg",
    title: "Metaのイノベーションは、つながるための新たな方法を提供します",
    titleColor: "#FFFFFF",
    cta: { label: "Meta AI", href: "#ai" },
  },
  {
    video:
      "https://video-nrt1-1.xx.fbcdn.net/o1/v/t2/f2/m69/AQMkC_bQ8re9h05DsmIO_vNw8m9Ddky-TvrAmIrJ-0vjj6oYlJ0Nkjoa25Xkp2Pc_jOMkLOBD511IT8pLGT6zYHL.mp4?strext=1&_nc_cat=1&_nc_sid=5e9851&_nc_ht=video-nrt1-1.xx.fbcdn.net&bitrate=1211388&tag=dash_h264-basic-gen2_1080p",
    poster:
      "https://scontent-nrt1-1.xx.fbcdn.net/v/t15.5256-10/474657781_620561713847655_6768706266474242483_n.jpg",
    title:
      "すべての利用者が安全を確保できるよう支援しながら、ポジティブな影響を与えることに全力を尽くします",
    titleColor: "#FFFFFF",
    cta: { label: "Metaの取り組み", href: "#actions" },
  },
];

const AUTOPLAY_MS = 7000;

export default function MetaHero() {
  const [current, setCurrent] = useState(1);
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
          <video
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster={slide.poster}
            src={slide.video}
            aria-label={slide.title}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

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
