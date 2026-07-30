"use client";

/**
 * Crisp vector light-ribbon for the hero right side.
 * SVG stays sharp at any screen size (avoids soft upscaled raster).
 */
export function HeroLightArtwork() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 50% 60% at 78% 55%, rgba(5,105,255,0.2), transparent 65%),
            radial-gradient(ellipse 35% 40% at 90% 40%, rgba(22,188,235,0.12), transparent 55%)
          `,
        }}
      />

      <div className="absolute top-[2%] bottom-0 right-0 w-full sm:w-[82%] lg:w-[74%]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/hero/trails-exact.png"
          alt=""
          width={1536}
          height={1024}
          decoding="async"
          fetchPriority="high"
          className="h-full w-full object-contain object-right-bottom sm:object-[100%_55%]"
        />

        <div
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(90deg, #020B2B 0%, rgba(2,11,43,0.88) 5%, rgba(2,11,43,0.3) 20%, transparent 38%),
              linear-gradient(180deg, rgba(2,11,43,0.22) 0%, transparent 12%),
              linear-gradient(0deg, rgba(2,11,43,0.15) 0%, transparent 14%)
            `,
          }}
        />
      </div>
    </div>
  );
}
