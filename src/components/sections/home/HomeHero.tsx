"use client";

import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/Button";
import { HeroLightArtwork } from "./HeroLightArtwork";

export function HomeHero() {
  const t = useTranslations("home.hero");
  const tNav = useTranslations("nav");
  const tCommon = useTranslations("common");

  return (
    <section className="relative min-h-[85vh] overflow-hidden bg-navy-deep pt-24 text-white sm:min-h-[90vh] md:min-h-[88vh] md:pt-28">
      <HeroLightArtwork />
      <div className="container-grid relative z-10 flex min-h-[calc(85vh-6rem)] flex-col justify-center pb-16 sm:min-h-[calc(90vh-6rem)] sm:pb-20 md:min-h-[calc(88vh-7rem)] md:pb-28">
        <div className="max-w-2xl lg:max-w-[38rem]">
          <h1 className="max-w-[15ch] font-serif text-[2rem] font-medium leading-[1.15] tracking-tight text-white sm:text-[2.35rem] md:text-5xl lg:max-w-[16ch] lg:text-[3.35rem]">
            {t.rich("title", {
              accent: (chunks) => <span className="text-electric">{chunks}</span>,
            })}
          </h1>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-white/80 sm:mt-7 sm:text-base md:text-lg">
            {t("subtitle")}
          </p>
          <div className="mt-8 flex w-full flex-col gap-3 sm:mt-10 sm:w-auto sm:flex-row sm:flex-wrap sm:gap-4">
            <Button href="/contact" variant="primary" showArrow className="w-full justify-center sm:w-auto">
              {tNav("cta")}
            </Button>
            <Button href="/cas-d-usage" variant="outline-light" className="w-full justify-center sm:w-auto">
              {tCommon("viewCases")}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
