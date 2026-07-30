import { useTranslations } from "next-intl";
import { Icon, IconName } from "@/components/icons/Icons";
import { Button } from "@/components/ui/Button";
import { SectionContainer } from "@/components/ui/SectionContainer";

interface ExpertiseGridProps {
  teaser?: boolean;
  hideHeader?: boolean;
}

export function ExpertiseGrid({ teaser = false, hideHeader = false }: ExpertiseGridProps) {
  const tHome = useTranslations("home.expertises");
  const tExpertises = useTranslations("expertises");
  const tCommon = useTranslations("common");
  const items = tExpertises.raw("items") as {
    title: string;
    description: string;
    icon: IconName;
  }[];
  const teaserItems = tHome.raw("teaserItems") as {
    title: string;
    description: string;
    icon: IconName;
  }[];
  const displayed = teaser ? teaserItems : items;

  return (
    <SectionContainer variant="white" className={hideHeader ? "pt-0 md:pt-0" : undefined}>
      {!hideHeader && (
        <div className="mb-10 flex flex-col gap-6 md:mb-12 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow">{teaser ? tHome("eyebrow") : "Expertises"}</p>
            <h2 className="font-serif text-3xl font-medium leading-tight text-navy md:text-[2.25rem]">
              {teaser ? tHome("title") : tExpertises("hero.title")}
            </h2>
            {!teaser && (
              <p className="mt-4 text-base leading-relaxed text-text-muted">
                {tExpertises("hero.subtitle")}
              </p>
            )}
          </div>
          {teaser && (
            <Button href="/expertises" variant="outline-blue" className="w-full shrink-0 sm:w-auto">
              {tCommon("discoverAllExpertises")}
            </Button>
          )}
        </div>
      )}

      <div
        className={`grid gap-8 ${
          teaser
            ? "md:grid-cols-2 xl:grid-cols-4 xl:gap-0"
            : "gap-px border border-border bg-border md:grid-cols-2"
        }`}
      >
        {displayed.map((item, index) => (
          <article
            key={item.title}
            className={
              teaser
                ? `px-0 xl:px-6 ${index > 0 ? "xl:border-l xl:border-border" : ""}`
                : "bg-white p-8"
            }
          >
            <Icon name={item.icon} className="mb-5 h-7 w-7 text-electric" />
            <h3 className="font-sans text-base font-bold text-navy">{item.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-text-muted">{item.description}</p>
          </article>
        ))}
      </div>
    </SectionContainer>
  );
}
