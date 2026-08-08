import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { TeamSection } from "@/components/sections/team/TeamSection";
import { getFounders, getTeamPageContent, type LocaleCode } from "@/sanity/fetch";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "team.meta" });
  const tMeta = await getTranslations({ locale, namespace: "metadata" });

  return {
    title: `${t("title")} | ${tMeta("siteName")}`,
    description: t("description"),
  };
}

export default async function TeamPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const lang = locale as LocaleCode;
  const [founders, teamPage] = await Promise.all([
    getFounders(lang),
    getTeamPageContent(lang),
  ]);

  return <TeamSection foundersFromCms={founders} pageFromCms={teamPage} />;
}
