import Image from "next/image";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/Button";
import { SectionContainer } from "@/components/ui/SectionContainer";

interface CaseStudy {
  id: string;
  category: string;
  title: string;
  challenge: string;
  value: string;
  image: string;
  metrics: { value: string; label: string }[];
}

function CaseStudyCard({ item }: { item: CaseStudy }) {
  const t = useTranslations("common");

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-xl border border-border bg-white shadow-card">
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={item.image}
          alt=""
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 25vw"
        />
        <span className="absolute left-3 top-3 rounded-md bg-electric px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
          {item.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-serif text-xl font-semibold leading-snug text-navy">{item.title}</h3>

        <div className="mt-5 space-y-4">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-electric">
              {t("challenge")}
            </p>
            <p className="mt-1.5 text-sm leading-relaxed text-text-muted">{item.challenge}</p>
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-electric">
              {t("valueDelivered")}
            </p>
            <p className="mt-1.5 text-sm leading-relaxed text-text-muted">{item.value}</p>
          </div>
        </div>

        <div className="mt-auto grid grid-cols-2 gap-3 border-t border-border pt-5">
          {item.metrics.map((metric) => (
            <div key={metric.label}>
              <p className="font-serif text-2xl font-semibold text-electric">{metric.value}</p>
              <p className="mt-1 text-xs leading-snug text-text-muted">{metric.label}</p>
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
}

export function CaseStudyGrid({
  limit,
  showHeader = true,
  showViewAll = false,
}: CaseStudyGridProps) {
  const t = useTranslations("home.cases");
  const tCases = useTranslations("cases");
  const tCommon = useTranslations("common");
  const items = tCases.raw("items") as CaseStudy[];
  const displayed = limit ? items.slice(0, limit) : items;

  return (
    <SectionContainer variant="subtle">
      {showHeader && (
        <div className="mb-10 flex flex-col gap-6 md:mb-12 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow">{t("eyebrow")}</p>
            <h2 className="font-serif text-3xl font-medium leading-tight text-navy md:text-[2.25rem]">
              {t("title")}
            </h2>
          </div>
          {showViewAll && (
            <Button href="/cas-d-usage" variant="outline-blue" className="shrink-0">
              {tCommon("viewAllCases")}
            </Button>
          )}
        </div>
      )}
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {displayed.map((item) => (
          <CaseStudyCard key={item.id} item={item} />
        ))}
      </div>
    </SectionContainer>
  );
}
