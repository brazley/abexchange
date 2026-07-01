import { useState } from "react";

/**
 * Aspect-ratio-locked image with a skeleton placeholder.
 * The ratio box reserves space (no layout shift); the image fades in on
 * load over a faint elevated skeleton so a slow or missing tile never
 * flashes a raw gray hole.
 */
export function Img({
  src,
  alt,
  ratio = "3 / 2",
  ratioClassName,
  className = "",
  sizes,
  priority = false,
}: {
  src: string;
  alt: string;
  ratio?: string;
  /** Responsive Tailwind aspect classes; when set, overrides the `ratio` style. */
  ratioClassName?: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className={`relative overflow-hidden bg-elevated ${ratioClassName ?? ""} ${className}`}
      style={ratioClassName ? undefined : { aspectRatio: ratio }}
    >
      {/* skeleton shimmer — sits behind, revealed until the image paints */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(100deg, var(--color-elevated) 30%, color-mix(in oklch, var(--color-line-strong) 60%, var(--color-elevated)) 50%, var(--color-elevated) 70%)",
          opacity: loaded ? 0 : 1,
          transition: "opacity 0.5s ease",
        }}
        aria-hidden
      />
      <img
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        sizes={sizes}
        onLoad={() => setLoaded(true)}
        className="absolute inset-0 h-full w-full object-cover transition-[opacity,transform] duration-500 ease-out"
        style={{ opacity: loaded ? 1 : 0 }}
      />
    </div>
  );
}
