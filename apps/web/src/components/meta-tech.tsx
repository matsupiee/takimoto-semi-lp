import { useRef, useState } from "react";

const VIDEO_SRC =
  "https://video-nrt1-1.xx.fbcdn.net/o1/v/t2/f2/m69/AQOUCxfDOIJEWePVxp-qxfd9hsUqA7_z6nJhYJj0tWaRJYlB6nj_X5kfCik15V2sGY3ToE-2vYnRJdWjOUOGviAS.mp4";
const VIDEO_POSTER =
  "https://scontent-nrt1-1.xx.fbcdn.net/v/t15.5256-10/474654766_1087597893143694_2649599034332746358_n.jpg";

export default function MetaTech() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [paused, setPaused] = useState(false);

  const togglePlayback = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPaused(false);
    } else {
      v.pause();
      setPaused(true);
    }
  };

  return (
    <section className="bg-white px-6 py-16 md:px-16 md:py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-semibold text-[#1c2b33] md:text-5xl">
            Metaの製品を使って新たな方法でつながる
          </h2>
          <div className="mt-8 flex flex-col gap-3 text-[15px] font-medium text-[#1c2b33] md:flex-row md:items-center md:gap-6">
            <a href="#technologies" className="inline-flex items-center gap-2 hover:underline">
              Metaのテクノロジーをチェックする
            </a>
            <a
              href="/help/"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 hover:underline"
              aria-label="ヘルプセンターへ移動 (新しいタブで開く)"
            >
              ヘルプセンターへ移動
              <svg viewBox="0 0 38 38" width="20" height="20" fill="none" aria-hidden="true">
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
            </a>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-3xl bg-[#f8f9fb]">
          <video
            ref={videoRef}
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster={VIDEO_POSTER}
            src={VIDEO_SRC}
          />
          <button
            type="button"
            onClick={togglePlayback}
            aria-label={paused ? "再生" : "停止"}
            className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70"
          >
            {paused ? (
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                <rect x="6" y="5" width="4" height="14" rx="1" />
                <rect x="14" y="5" width="4" height="14" rx="1" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
