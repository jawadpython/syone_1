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
import { getCaseStudies, getFounders, type LocaleCode } from "@/sanity/fetch";

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
  const lang = locale as LocaleCode;
  const [caseStudies, founders] = await Promise.all([
    getCaseStudies(lang),
    getFounders(lang),
  ]);

  return (
    <>
      <HomeHero />
      <ValuePillars />
      <CaseStudyGrid limit={4} showViewAll itemsFromCms={caseStudies} />
      <StatsStrip />
      <ExpertiseGrid teaser />
      <ApproachSteps teaser />
      <TeamSection teaser foundersFromCms={founders} />
      <ContactCTA />
    </>
  );
}
