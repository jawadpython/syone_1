import { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";

const paths = [
  "/",
  "/expertises",
  "/notre-approche",
  "/equipe",
  "/cas-d-usage",
  "/contact",
  "/mentions-legales",
  "/politique-de-confidentialite",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://syone-consulting.com";

  return routing.locales.flatMap((locale) =>
    paths.map((path) => ({
      url: `${baseUrl}${locale === "fr" ? "" : `/${locale}`}${path === "/" ? "" : path}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: path === "/" ? 1 : 0.8,
    }))
  );
}
