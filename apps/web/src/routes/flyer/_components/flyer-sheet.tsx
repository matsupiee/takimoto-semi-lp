import type { Hotspot } from "../_utils/links";

/**
 * ビラ 1 面を画像のまま見せ、QR の位置にタップ領域を重ねる。
 *
 * 新歓ではデザインされたビラそのものを見せることに意味があるので、HTML に
 * 組み直さず画像で出す。代わりに、画像の中の QR は読み取れないため、同じ位置を
 * タップすればリンク先に飛べるようにしておく。
 */
export default function FlyerSheet({
  src,
  alt,
  hotspots,
  priority = false,
}: {
  src: string;
  alt: string;
  hotspots: Hotspot[];
  priority?: boolean;
}) {
  return (
    <div className="relative overflow-hidden rounded-sm shadow-[0_1px_12px_rgba(0,0,0,0.12)]">
      <img
        src={src}
        alt={alt}
        width={1429}
        height={2000}
        loading={priority ? "eager" : "lazy"}
        className="block h-auto w-full"
      />
      {hotspots.map((spot) => {
        const external = spot.href.startsWith("http");
        return (
          <a
            key={spot.label}
            href={spot.href}
            aria-label={spot.label}
            {...(external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
            className="absolute rounded-md outline-offset-2 transition hover:bg-brand/10 focus-visible:outline-2 focus-visible:outline-brand"
            style={{
              left: `${spot.left}%`,
              top: `${spot.top}%`,
              width: `${spot.width}%`,
              height: `${spot.height}%`,
            }}
          />
        );
      })}
    </div>
  );
}
