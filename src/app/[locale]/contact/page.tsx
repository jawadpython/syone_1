import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageHero } from "@/components/ui/PageHero";
import { ContactForm } from "@/components/sections/contact/ContactForm";
import { ContactInfo } from "@/components/sections/contact/ContactInfo";
import { SectionContainer } from "@/components/ui/SectionContainer";
import {
  getContactPageContent,
  getSiteSettings,
  type LocaleCode,
} from "@/sanity/fetch";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact.meta" });
  const tMeta = await getTranslations({ locale, namespace: "metadata" });

  return {
    title: `${t("title")} | ${tMeta("siteName")}`,
    description: t("description"),
  };
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const lang = locale as LocaleCode;
  const t = await getTranslations({ locale, namespace: "contact.hero" });
  const [page, settings] = await Promise.all([
    getContactPageContent(lang),
    getSiteSettings(lang),
  ]);

  return (
    <>
      <PageHero
        title={page?.heroTitle || t("title")}
        subtitle={page?.heroSubtitle || t("subtitle")}
      />
      <SectionContainer variant="subtle" className="pt-0 md:pt-0">
        <div className="grid gap-8 lg:grid-cols-5 lg:gap-12">
          <div className="lg:col-span-3">
            <ContactForm />
          </div>
          <div className="lg:col-span-2">
            <ContactInfo settingsFromCms={settings} pageFromCms={page} />
          </div>
        </div>
      </SectionContainer>
    </>
  );
}
