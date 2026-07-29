import { useTranslations } from "next-intl";
import { Icon, pillarIcons } from "@/components/icons/Icons";
import { SectionContainer } from "@/components/ui/SectionContainer";

export function ValuePillars() {
  const t = useTranslations("home.pillars");
  const items = t.raw("items") as { title: string; description: string }[];

  return (
    <SectionContainer variant="white">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.35fr)] lg:gap-16">
        <div>
          <p className="eyebrow">{t("eyebrow")}</p>
          <h2 className="max-w-md font-serif text-3xl font-medium leading-tight tracking-tight text-navy md:text-[2.35rem]">
            {t.rich("title", {
              accent: (chunks) => <span className="text-electric">{chunks}</span>,
            })}
          </h2>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-text-muted md:text-base">
            {t("intro")}
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4 xl:gap-6">
          {items.map((item, index) => (
            <article key={item.title} className="min-w-0">
              <Icon name={pillarIcons[index]} className="mb-5 h-8 w-8 text-electric" />
              <h3 className="font-sans text-[15px] font-bold leading-snug text-navy">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-text-muted">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
