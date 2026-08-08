export type LocaleCode = "fr" | "en";

export type LocaleValue = { fr?: string; en?: string } | string | null | undefined;

export function pickLocale(value: LocaleValue, locale: LocaleCode): string {
  if (!value) return "";
  if (typeof value === "string") return value;
  return value[locale] || value.fr || value.en || "";
}

export function pickLocaleOptional(
  value: LocaleValue,
  locale: LocaleCode
): string | undefined {
  const picked = pickLocale(value, locale);
  return picked || undefined;
}
