"use client";

import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/Button";

function LightTrails() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="light-trails absolute inset-0" />
      <svg
        className="animate-trail absolute -right-10 top-1/2 h-[120%] w-[70%] -translate-y-1/2 opacity-90"
        viewBox="0 0 800 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M80 320 C220 280, 320 200, 420 240 C520 280, 600 180, 780 120"
          stroke="url(#g1)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M40 380 C180 340, 280 300, 390 340 C520 390, 620 280, 800 220"
          stroke="url(#g2)"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <path
          d="M0 440 C160 400, 260 380, 370 420 C500 470, 620 360, 800 300"
          stroke="url(#g3)"
          strokeWidth="5"
          strokeLinecap="round"
          opacity="0.85"
        />
        <path
          d="M120 260 C250 220, 340 160, 450 190 C560 220, 650 140, 800 90"
          stroke="url(#g4)"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.7"
        />
        <defs>
          <linearGradient id="g1" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#0569FF" stopOpacity="0" />
            <stop offset="40%" stopColor="#16BCEB" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.95" />
          </linearGradient>
          <linearGradient id="g2" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#5E35F2" stopOpacity="0" />
            <stop offset="35%" stopColor="#0569FF" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="1" />
          </linearGradient>
          <linearGradient id="g3" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#0569FF" stopOpacity="0" />
            <stop offset="30%" stopColor="#5E35F2" stopOpacity="0.7" />
            <stop offset="70%" stopColor="#0569FF" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="1" />
          </linearGradient>
          <linearGradient id="g4" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#16BCEB" stopOpacity="0" />
            <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.9" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-navy-deep/40 to-transparent" />
    </div>
  );
}

export function HomeHero() {
  const t = useTranslations("home.hero");
  const tNav = useTranslations("nav");
  const tCommon = useTranslations("common");

  return (
    <section className="relative min-h-[92vh] overflow-hidden bg-navy-deep pt-24 text-white md:min-h-[88vh] md:pt-28">
      <LightTrails />
      <div className="container-grid relative z-10 flex min-h-[calc(92vh-6rem)] flex-col justify-center pb-20 md:min-h-[calc(88vh-7rem)] md:pb-28">
        <div className="max-w-2xl lg:max-w-[38rem]">
          <h1 className="max-w-[15ch] font-serif text-[2.35rem] font-medium leading-[1.15] tracking-tight text-white sm:text-5xl lg:max-w-[16ch] lg:text-[3.35rem]">
            {t.rich("title", {
              accent: (chunks) => <span className="text-electric">{chunks}</span>,
            })}
          </h1>
          <p className="mt-7 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
            {t("subtitle")}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/contact" variant="primary" showArrow>
              {tNav("cta")}
            </Button>
            <Button href="/cas-d-usage" variant="outline-light">
              {tCommon("viewCases")}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
