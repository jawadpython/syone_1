import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageHero } from "@/components/ui/PageHero";
import { ExpertiseGrid } from "@/components/sections/expertises/ExpertiseGrid";
import { getExpertises, getExpertisesPageContent, type LocaleCode } from "@/sanity/fetch";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "expertises.meta" });
  const tMeta = await getTranslations({ locale, namespace: "metadata" });

  return {
    title: `${t("title")} | ${tMeta("siteName")}`,
    description: t("description"),
  };
}

export default async function ExpertisesPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const lang = locale as LocaleCode;
  const t = await getTranslations({ locale, namespace: "expertises.hero" });
  const [expertises, page] = await Promise.all([
    getExpertises(lang),
    getExpertisesPageContent(lang),
  ]);

  return (
    <>
      <PageHero
        title={page?.heroTitle || t("title")}
        subtitle={page?.heroSubtitle || t("subtitle")}
      />
      <ExpertiseGrid hideHeader itemsFromCms={expertises} />
    </>
  );
}
