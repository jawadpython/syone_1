"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/Button";
import { SectionContainer } from "@/components/ui/SectionContainer";
import type { CaseStudyContent } from "@/sanity/fetch";

function CaseStudyCard({ item }: { item: CaseStudyContent }) {
  const t = useTranslations("common");

  return (
    <article className="flex h-full min-h-0 flex-col overflow-hidden rounded-lg border border-border bg-white shadow-card md:min-h-[36rem]">
      <div className="relative mx-4 mt-4 overflow-hidden rounded-md">
        <div className="relative aspect-[16/9] w-full">
          <Image
            src={item.image}
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 22vw"
          />
        </div>
        <span className="absolute left-2.5 top-2.5 rounded bg-electric px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
          {item.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col px-5 pb-6 pt-5">
        <h3 className="font-serif text-[1.15rem] font-semibold leading-snug text-navy md:text-xl">
          {item.title}
        </h3>

        <div className="mt-5 space-y-4">
          <div>
            <p className="text-[13px] font-semibold text-electric">{t("challenge")}</p>
            <p className="mt-1.5 text-[13px] leading-relaxed text-text-gray">{item.challenge}</p>
          </div>
          <div>
            <p className="text-[13px] font-semibold text-electric">{t("valueDelivered")}</p>
            <p className="mt-1.5 text-[13px] leading-relaxed text-text-gray">{item.value}</p>
          </div>
        </div>

        <div className="mt-auto grid grid-cols-2 border-t border-border pt-5">
          {item.metrics.map((metric, index) => (
            <div
              key={`${metric.value}-${metric.label}`}
              className={index === 0 ? "border-r border-border pr-3" : "pl-3"}
            >
              <p className="font-serif text-[1.65rem] font-semibold leading-none text-electric">
                {metric.value}
              </p>
              <p className="mt-1.5 text-[11px] leading-snug text-text-gray">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}

interface CaseStudyGridProps {
  limit?: number;
  showHeader?: boolean;
  showViewAll?: boolean;
  itemsFromCms?: CaseStudyContent[];
  eyebrow?: string;
  title?: string;
}

export function CaseStudyGrid({
  limit,
  showHeader = true,
  showViewAll = false,
  itemsFromCms,
  eyebrow,
  title,
}: CaseStudyGridProps) {
  const t = useTranslations("home.cases");
  const tCases = useTranslations("cases");
  const tCommon = useTranslations("common");
  const fallbackItems = tCases.raw("items") as CaseStudyContent[];
  const items = itemsFromCms && itemsFromCms.length > 0 ? itemsFromCms : fallbackItems;
  const displayed = limit ? items.slice(0, limit) : items;

  return (
    <SectionContainer variant="white">
      {showHeader && (
        <div className="mb-10 flex flex-col gap-5 md:mb-12 md:flex-row md:items-start md:justify-between md:gap-8">
          <div className="max-w-2xl">
            <p className="eyebrow">{eyebrow || t("eyebrow")}</p>
            <h2 className="font-serif text-[1.75rem] font-medium leading-tight text-navy sm:text-3xl md:text-[2.35rem]">
              {title || t("title")}
            </h2>
          </div>
          {showViewAll && (
            <Button href="/cas-d-usage" variant="outline-blue" className="w-full shrink-0 self-start sm:w-auto md:mt-7">
              {tCommon("viewAllCases")}
            </Button>
          )}
        </div>
      )}
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4 xl:gap-6">
        {displayed.map((item) => (
          <CaseStudyCard key={item.id} item={item} />
        ))}
      </div>
    </SectionContainer>
  );
}
