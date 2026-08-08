import { useTranslations } from "next-intl";
import { SectionContainer } from "@/components/ui/SectionContainer";

type StatsStripProps = {
  itemsFromCms?: { value: string; label: string }[];
};

export function StatsStrip({ itemsFromCms }: StatsStripProps) {
  const t = useTranslations("home.stats");
  const fallback = t.raw("items") as { value: string; label: string }[];
  const items = itemsFromCms && itemsFromCms.length > 0 ? itemsFromCms : fallback;

  return (
    <SectionContainer variant="subtle" className="py-12 md:py-14">
      <div className="grid gap-8 rounded-2xl bg-bg-mist px-6 py-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:px-4 lg:py-12">
        {items.map((item, index) => (
          <div
            key={`${item.value}-${item.label}`}
            className={`text-center ${
              index > 0 ? "lg:border-l lg:border-border/80" : ""
            } lg:px-6`}
          >
            <p className="font-serif text-4xl font-semibold text-electric md:text-5xl">
              {item.value}
            </p>
            <p className="mx-auto mt-3 max-w-[14rem] text-sm leading-relaxed text-text-gray">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
