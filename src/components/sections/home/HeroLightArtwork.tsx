"use client";

/**
 * Light trails use mix-blend-mode:screen so black plate vanishes into navy-deep.
 * Left/right colors stay identical; trails stay soft (not over-sharp).
 */
export function HeroLightArtwork() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      <div className="absolute inset-y-0 right-0 w-full sm:w-[78%] lg:w-[68%]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/hero/trails-exact.png"
          alt=""
          width={1536}
          height={1024}
          decoding="async"
          fetchPriority="high"
          className="h-full w-full object-cover object-[5%_55%] mix-blend-screen"
          style={{ opacity: 0.82 }}
        />

        {/* Soft veil into the text side */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(90deg,
                #010A29 0%,
                rgba(1,10,41,0.65) 14%,
                rgba(1,10,41,0.2) 32%,
                transparent 50%
              )
            `,
          }}
        />
      </div>
    </div>
  );
}
