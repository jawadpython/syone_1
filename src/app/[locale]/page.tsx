import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { CaseStudyGrid } from "@/components/sections/cases/CaseStudyGrid";
import { ValuePillars } from "@/components/sections/home/ValuePillars";
import { ExpertiseGrid } from "@/components/sections/expertises/ExpertiseGrid";
import { ApproachSteps } from "@/components/sections/approach/ApproachSteps";
import { TeamSection } from "@/components/sections/team/TeamSection";
import { ContactCTA } from "@/components/sections/home/ContactCTA";
import { HomeHero } from "@/components/sections/home/HomeHero";
import { StatsStrip } from "@/components/sections/home/StatsStrip";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "home.meta" });
  const tMeta = await getTranslations({ locale, namespace: "metadata" });

  return {
    title: `${t("title")} | ${tMeta("siteName")}`,
    description: t("description"),
  };
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <HomeHero />
      <ValuePillars />
      <CaseStudyGrid limit={4} showViewAll />
      <StatsStrip />
      <ExpertiseGrid teaser />
      <ApproachSteps teaser />
      <TeamSection teaser />
      <ContactCTA />
    </>
  );
}
