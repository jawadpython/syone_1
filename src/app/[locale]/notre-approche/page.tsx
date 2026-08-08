import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ApproachSteps } from "@/components/sections/approach/ApproachSteps";
import { getApproachContent, type LocaleCode } from "@/sanity/fetch";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "approach.meta" });
  const tMeta = await getTranslations({ locale, namespace: "metadata" });

  return {
    title: `${t("title")} | ${tMeta("siteName")}`,
    description: t("description"),
  };
}

export default async function ApproachPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const approach = await getApproachContent(locale as LocaleCode);

  return <ApproachSteps contentFromCms={approach} />;
}
