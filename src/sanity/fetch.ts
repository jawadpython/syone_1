import { client } from "./client";
import { pickLocale, pickLocaleOptional, type LocaleCode, type LocaleValue } from "./localize";
import {
  APPROACH_PAGE_QUERY,
  CASE_STUDIES_QUERY,
  CASES_PAGE_QUERY,
  CONTACT_PAGE_QUERY,
  EXPERTISES_PAGE_QUERY,
  EXPERTISES_QUERY,
  FOUNDERS_QUERY,
  HOME_PAGE_QUERY,
  SITE_SETTINGS_QUERY,
  TEAM_PAGE_QUERY,
} from "./queries";

export type { LocaleCode } from "./localize";

export type FounderContent = {
  name: string;
  role: string;
  bio: string;
  shortBio?: string;
  linkedin: string;
  initials: string;
  photoUrl?: string | null;
};

export type CaseStudyContent = {
  id: string;
  category: string;
  title: string;
  challenge: string;
  value: string;
  image: string;
  metrics: { value: string; label: string }[];
};

export type ExpertiseContent = {
  title: string;
  description: string;
  icon?: string;
};

export type HomeContent = {
  heroTitle: string;
  heroAccent: string;
  heroSubtitle: string;
  pillarsEyebrow?: string;
  pillarsTitle?: string;
  pillarsAccent?: string;
  pillarsIntro?: string;
  pillars: { title: string; description: string }[];
  stats: { value: string; label: string }[];
  casesEyebrow?: string;
  casesTitle?: string;
  expertisesEyebrow?: string;
  expertisesTitle?: string;
  approachEyebrow?: string;
  approachTitle?: string;
  teamEyebrow?: string;
  teamTitle?: string;
  ctaTitle?: string;
  ctaSubtitle?: string;
  ctaNote?: string;
};

export type ApproachContent = {
  heroTitle: string;
  heroSubtitle: string;
  steps: { number: string; title: string; description: string }[];
  keyMessage?: string;
};

export type TeamPageContent = {
  heroTitle: string;
  heroSubtitle: string;
  complement?: string;
  networkCardTitle?: string;
  networkCardText?: string;
  networkTitle?: string;
  network: string[];
};

export type ContactPageContent = {
  heroTitle: string;
  heroSubtitle: string;
  socialTitle?: string;
};

export type PageHeroContent = {
  heroTitle: string;
  heroSubtitle: string;
};

export type SiteSettingsContent = {
  phone?: string;
  email?: string;
  emailSecondary?: string;
  hours?: string;
  footerTagline?: string;
  socialLinks: { label: string; url: string }[];
};

const fetchOptions = {
  next: {
    revalidate: 10,
    tags: ["sanity"],
  },
};

async function fetchDoc<T>(query: string): Promise<T | null> {
  try {
    return await client.fetch<T | null>(query, {}, fetchOptions);
  } catch (error) {
    console.error("[sanity] fetch failed", error);
    return null;
  }
}

export async function getFounders(locale: LocaleCode): Promise<FounderContent[]> {
  try {
    const rows = await client.fetch(FOUNDERS_QUERY, {}, fetchOptions);
    if (!Array.isArray(rows) || rows.length === 0) return [];
    return rows.map((row: Record<string, unknown>) => ({
      name: String(row.name || ""),
      role: pickLocale(row.role as LocaleValue, locale),
      bio: pickLocale(row.bio as LocaleValue, locale),
      shortBio: pickLocaleOptional(row.shortBio as LocaleValue, locale),
      linkedin: String(row.linkedin || ""),
      initials: String(row.initials || ""),
      photoUrl: (row.photoUrl as string | null) || null,
    }));
  } catch (error) {
    console.error("[sanity] getFounders failed", error);
    return [];
  }
}

export async function getCaseStudies(locale: LocaleCode): Promise<CaseStudyContent[]> {
  try {
    const rows = await client.fetch(CASE_STUDIES_QUERY, {}, fetchOptions);
    if (!Array.isArray(rows) || rows.length === 0) return [];
    return rows.map((row: Record<string, unknown>, index: number) => {
      const metrics = Array.isArray(row.metrics) ? row.metrics : [];
      return {
        id: String(row._id || `case-${index}`),
        category: pickLocale(row.category as LocaleValue, locale),
        title: pickLocale(row.title as LocaleValue, locale),
        challenge: pickLocale(row.challenge as LocaleValue, locale),
        value: pickLocale(row.value as LocaleValue, locale),
        image: String(row.imageUrl || `/images/image${(index % 4) + 1}.webp`),
        metrics: metrics.map((metric: Record<string, unknown>) => ({
          value: String(metric.value || ""),
          label: pickLocale(metric.label as LocaleValue, locale),
        })),
      };
    });
  } catch (error) {
    console.error("[sanity] getCaseStudies failed", error);
    return [];
  }
}

export async function getExpertises(locale: LocaleCode): Promise<ExpertiseContent[]> {
  try {
    const rows = await client.fetch(EXPERTISES_QUERY, {}, fetchOptions);
    if (!Array.isArray(rows) || rows.length === 0) return [];
    return rows.map((row: Record<string, unknown>) => ({
      title: pickLocale(row.title as LocaleValue, locale),
      description: pickLocale(row.description as LocaleValue, locale),
      icon: row.icon ? String(row.icon) : undefined,
    }));
  } catch (error) {
    console.error("[sanity] getExpertises failed", error);
    return [];
  }
}

export async function getHomeContent(locale: LocaleCode): Promise<HomeContent | null> {
  const doc = await fetchDoc<Record<string, unknown>>(HOME_PAGE_QUERY);
  if (!doc) return null;

  const pillars = Array.isArray(doc.pillars) ? doc.pillars : [];
  const stats = Array.isArray(doc.stats) ? doc.stats : [];

  return {
    heroTitle: pickLocale(doc.heroTitle as LocaleValue, locale),
    heroAccent: pickLocale(doc.heroAccent as LocaleValue, locale),
    heroSubtitle: pickLocale(doc.heroSubtitle as LocaleValue, locale),
    pillarsEyebrow: pickLocaleOptional(doc.pillarsEyebrow as LocaleValue, locale),
    pillarsTitle: pickLocaleOptional(doc.pillarsTitle as LocaleValue, locale),
    pillarsAccent: pickLocaleOptional(doc.pillarsAccent as LocaleValue, locale),
    pillarsIntro: pickLocaleOptional(doc.pillarsIntro as LocaleValue, locale),
    pillars: pillars.map((item: Record<string, unknown>) => ({
      title: pickLocale(item.title as LocaleValue, locale),
      description: pickLocale(item.description as LocaleValue, locale),
    })),
    stats: stats.map((item: Record<string, unknown>) => ({
      value: String(item.value || ""),
      label: pickLocale(item.label as LocaleValue, locale),
    })),
    casesEyebrow: pickLocaleOptional(doc.casesEyebrow as LocaleValue, locale),
    casesTitle: pickLocaleOptional(doc.casesTitle as LocaleValue, locale),
    expertisesEyebrow: pickLocaleOptional(doc.expertisesEyebrow as LocaleValue, locale),
    expertisesTitle: pickLocaleOptional(doc.expertisesTitle as LocaleValue, locale),
    approachEyebrow: pickLocaleOptional(doc.approachEyebrow as LocaleValue, locale),
    approachTitle: pickLocaleOptional(doc.approachTitle as LocaleValue, locale),
    teamEyebrow: pickLocaleOptional(doc.teamEyebrow as LocaleValue, locale),
    teamTitle: pickLocaleOptional(doc.teamTitle as LocaleValue, locale),
    ctaTitle: pickLocaleOptional(doc.ctaTitle as LocaleValue, locale),
    ctaSubtitle: pickLocaleOptional(doc.ctaSubtitle as LocaleValue, locale),
    ctaNote: pickLocaleOptional(doc.ctaNote as LocaleValue, locale),
  };
}

export async function getApproachContent(locale: LocaleCode): Promise<ApproachContent | null> {
  const doc = await fetchDoc<Record<string, unknown>>(APPROACH_PAGE_QUERY);
  if (!doc) return null;
  const steps = Array.isArray(doc.steps) ? doc.steps : [];
  return {
    heroTitle: pickLocale(doc.heroTitle as LocaleValue, locale),
    heroSubtitle: pickLocale(doc.heroSubtitle as LocaleValue, locale),
    steps: steps.map((step: Record<string, unknown>, index: number) => ({
      number: String(step.number || String(index + 1).padStart(2, "0")),
      title: pickLocale(step.title as LocaleValue, locale),
      description: pickLocale(step.description as LocaleValue, locale),
    })),
    keyMessage: pickLocaleOptional(doc.keyMessage as LocaleValue, locale),
  };
}

export async function getTeamPageContent(locale: LocaleCode): Promise<TeamPageContent | null> {
  const doc = await fetchDoc<Record<string, unknown>>(TEAM_PAGE_QUERY);
  if (!doc) return null;
  const network = Array.isArray(doc.network) ? doc.network : [];
  return {
    heroTitle: pickLocale(doc.heroTitle as LocaleValue, locale),
    heroSubtitle: pickLocale(doc.heroSubtitle as LocaleValue, locale),
    complement: pickLocaleOptional(doc.complement as LocaleValue, locale),
    networkCardTitle: pickLocaleOptional(doc.networkCardTitle as LocaleValue, locale),
    networkCardText: pickLocaleOptional(doc.networkCardText as LocaleValue, locale),
    networkTitle: pickLocaleOptional(doc.networkTitle as LocaleValue, locale),
    network: network.map((item: Record<string, unknown> | string) =>
      typeof item === "string" ? item : pickLocale(item.label as LocaleValue, locale)
    ),
  };
}

export async function getContactPageContent(locale: LocaleCode): Promise<ContactPageContent | null> {
  const doc = await fetchDoc<Record<string, unknown>>(CONTACT_PAGE_QUERY);
  if (!doc) return null;
  return {
    heroTitle: pickLocale(doc.heroTitle as LocaleValue, locale),
    heroSubtitle: pickLocale(doc.heroSubtitle as LocaleValue, locale),
    socialTitle: pickLocaleOptional(doc.socialTitle as LocaleValue, locale),
  };
}

export async function getExpertisesPageContent(locale: LocaleCode): Promise<PageHeroContent | null> {
  const doc = await fetchDoc<Record<string, unknown>>(EXPERTISES_PAGE_QUERY);
  if (!doc) return null;
  return {
    heroTitle: pickLocale(doc.heroTitle as LocaleValue, locale),
    heroSubtitle: pickLocale(doc.heroSubtitle as LocaleValue, locale),
  };
}

export async function getCasesPageContent(locale: LocaleCode): Promise<PageHeroContent | null> {
  const doc = await fetchDoc<Record<string, unknown>>(CASES_PAGE_QUERY);
  if (!doc) return null;
  return {
    heroTitle: pickLocale(doc.heroTitle as LocaleValue, locale),
    heroSubtitle: pickLocale(doc.heroSubtitle as LocaleValue, locale),
  };
}

export async function getSiteSettings(locale: LocaleCode): Promise<SiteSettingsContent | null> {
  const doc = await fetchDoc<Record<string, unknown>>(SITE_SETTINGS_QUERY);
  if (!doc) return null;
  const socialLinks = Array.isArray(doc.socialLinks) ? doc.socialLinks : [];
  return {
    phone: doc.phone ? String(doc.phone) : undefined,
    email: doc.email ? String(doc.email) : undefined,
    emailSecondary: doc.emailSecondary ? String(doc.emailSecondary) : undefined,
    hours: pickLocaleOptional(doc.hours as LocaleValue, locale),
    footerTagline: pickLocaleOptional(doc.footerTagline as LocaleValue, locale),
    socialLinks: socialLinks.map((item: Record<string, unknown>) => ({
      label: String(item.label || ""),
      url: String(item.url || ""),
    })),
  };
}
