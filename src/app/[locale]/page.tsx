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
import {
  getApproachContent,
  getCaseStudies,
  getExpertises,
  getFounders,
  getHomeContent,
  getTeamPageContent,
  type LocaleCode,
} from "@/sanity/fetch";

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

  const [home, caseStudies, founders, expertises, approach, teamPage] = await Promise.all([
    getHomeContent(lang),
    getCaseStudies(lang),
    getFounders(lang),
    getExpertises(lang),
    getApproachContent(lang),
    getTeamPageContent(lang),
  ]);

  return (
    <>
      <HomeHero
        title={home?.heroTitle}
        accent={home?.heroAccent}
        subtitle={home?.heroSubtitle}
      />
      <ValuePillars
        eyebrow={home?.pillarsEyebrow}
        title={home?.pillarsTitle}
        accent={home?.pillarsAccent}
        intro={home?.pillarsIntro}
        itemsFromCms={home?.pillars}
      />
      <CaseStudyGrid
        limit={4}
        showViewAll
        itemsFromCms={caseStudies}
        eyebrow={home?.casesEyebrow}
        title={home?.casesTitle}
      />
      <StatsStrip itemsFromCms={home?.stats} />
      <ExpertiseGrid
        teaser
        itemsFromCms={expertises}
        eyebrow={home?.expertisesEyebrow}
        title={home?.expertisesTitle}
      />
      <ApproachSteps
        teaser
        contentFromCms={approach}
        sectionEyebrow={home?.approachEyebrow}
        sectionTitle={home?.approachTitle}
      />
      <TeamSection
        teaser
        foundersFromCms={founders}
        pageFromCms={teamPage}
        sectionEyebrow={home?.teamEyebrow}
        sectionTitle={home?.teamTitle}
      />
      <ContactCTA
        title={home?.ctaTitle}
        subtitle={home?.ctaSubtitle}
        note={home?.ctaNote}
      />
    </>
  );
}
