import { client } from "./client";
import { CASE_STUDIES_QUERY, EXPERTISES_QUERY, FOUNDERS_QUERY } from "./queries";

export type LocaleCode = "fr" | "en";

type LocaleValue = { fr?: string; en?: string } | string | null | undefined;

function pickLocale(value: LocaleValue, locale: LocaleCode): string {
  if (!value) return "";
  if (typeof value === "string") return value;
  return value[locale] || value.fr || value.en || "";
}

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

const fetchOptions = { next: { revalidate: 60 } };

export async function getFounders(locale: LocaleCode): Promise<FounderContent[]> {
  try {
    const rows = await client.fetch(FOUNDERS_QUERY, {}, fetchOptions);
    if (!Array.isArray(rows) || rows.length === 0) return [];

    return rows.map((row: Record<string, unknown>) => ({
      name: String(row.name || ""),
      role: pickLocale(row.role as LocaleValue, locale),
      bio: pickLocale(row.bio as LocaleValue, locale),
      shortBio: pickLocale(row.shortBio as LocaleValue, locale) || undefined,
      linkedin: String(row.linkedin || ""),
      initials: String(row.initials || ""),
      photoUrl: (row.photoUrl as string | null) || null,
    }));
  } catch {
    return [];
  }
}

export async function getCaseStudies(locale: LocaleCode): Promise<CaseStudyContent[]> {
  try {
    const rows = await client.fetch(CASE_STUDIES_QUERY, {}, fetchOptions);
    if (!Array.isArray(rows) || rows.length === 0) return [];

    return rows.map((row: Record<string, unknown>) => {
      const metrics = Array.isArray(row.metrics) ? row.metrics : [];
      return {
        id: String(row._id || ""),
        category: pickLocale(row.category as LocaleValue, locale),
        title: pickLocale(row.title as LocaleValue, locale),
        challenge: pickLocale(row.challenge as LocaleValue, locale),
        value: pickLocale(row.value as LocaleValue, locale),
        image: String(row.imageUrl || "/images/image1.webp"),
        metrics: metrics.map((metric: Record<string, unknown>) => ({
          value: String(metric.value || ""),
          label: pickLocale(metric.label as LocaleValue, locale),
        })),
      };
    });
  } catch {
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
  } catch {
    return [];
  }
}
