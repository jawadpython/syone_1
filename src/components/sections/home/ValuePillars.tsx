"use client";

import { useTranslations } from "next-intl";
import { Icon, pillarIcons } from "@/components/icons/Icons";
import { SectionContainer } from "@/components/ui/SectionContainer";

export function ValuePillars() {
  const t = useTranslations("home.pillars");
  const items = t.raw("items") as { title: string; description: string }[];

  return (
    <SectionContainer variant="white">
      <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.7fr)] lg:gap-12 xl:gap-16">
        <div>
          <p className="eyebrow">{t("eyebrow")}</p>
          <h2 className="max-w-lg font-serif text-[1.75rem] font-medium leading-[1.2] tracking-tight text-navy sm:text-3xl md:text-[2.35rem]">
            {t.rich("title", {
              accent: (chunks) => <span className="text-electric">{chunks}</span>,
            })}
          </h2>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-text-gray">
            {t("intro")}
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4 xl:gap-0">
          {items.map((item, index) => (
            <article
              key={item.title}
              className={`min-w-0 xl:px-5 ${
                index > 0 ? "xl:border-l xl:border-border" : "xl:pl-0"
              } ${index === items.length - 1 ? "xl:pr-0" : ""}`}
            >
              <Icon name={pillarIcons[index]} className="mb-5 h-9 w-9 text-electric" />
              <h3 className="font-sans text-[15px] font-bold leading-snug text-navy">
                {item.title}
              </h3>
              <p className="mt-3 text-[13px] leading-relaxed text-text-gray">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
