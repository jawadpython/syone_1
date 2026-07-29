import { useTranslations } from "next-intl";
import { SectionContainer } from "@/components/ui/SectionContainer";

export function IntroBlock() {
  const t = useTranslations("home.intro");
  const tPos = useTranslations("home.positioning");

  return (
    <SectionContainer variant="subtle">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <p className="text-lg leading-relaxed text-text-gray lg:col-span-7 lg:text-xl">
          {t("text")}
        </p>
        <blockquote className="border-l-2 border-navy pl-6 lg:col-span-5">
          <p className="text-base font-normal leading-relaxed text-navy md:text-lg">
            {tPos("text")}
          </p>
        </blockquote>
      </div>
    </SectionContainer>
  );
}
