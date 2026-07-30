"use client";

import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/Button";
import { HeroLightArtwork } from "./HeroLightArtwork";

export function HomeHero() {
  const t = useTranslations("home.hero");
  const tNav = useTranslations("nav");
  const tCommon = useTranslations("common");

  return (
    <section className="relative min-h-[92vh] overflow-hidden bg-navy-deep pt-24 text-white md:min-h-[88vh] md:pt-28">
      <HeroLightArtwork />
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
