import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageHero } from "@/components/ui/PageHero";
import { CaseStudyGrid } from "@/components/sections/cases/CaseStudyGrid";
import { getCaseStudies, type LocaleCode } from "@/sanity/fetch";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "cases.meta" });
  const tMeta = await getTranslations({ locale, namespace: "metadata" });

  return {
    title: `${t("title")} | ${tMeta("siteName")}`,
    description: t("description"),
  };
}

export default async function CasesPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "cases.hero" });
  const caseStudies = await getCaseStudies(locale as LocaleCode);

  return (
    <>
      <PageHero title={t("title")} subtitle={t("subtitle")} />
      <CaseStudyGrid showHeader={false} itemsFromCms={caseStudies} />
    </>
  );
}
