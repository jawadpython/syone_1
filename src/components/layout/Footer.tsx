import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Logo } from "@/components/ui/Logo";
import type { SiteSettingsContent } from "@/sanity/fetch";

const navLinks = [
  { href: "/expertises" as const, key: "expertises" },
  { href: "/notre-approche" as const, key: "approach" },
  { href: "/cas-d-usage" as const, key: "cases" },
  { href: "/equipe" as const, key: "team" },
  { href: "/contact" as const, key: "contact" },
];

type FooterProps = {
  settingsFromCms?: SiteSettingsContent | null;
};

export function Footer({ settingsFromCms }: FooterProps) {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");
  const tContact = useTranslations("contact");

  const email = settingsFromCms?.email || tContact("email");
  const phone = settingsFromCms?.phone || tContact("phone");
  const hours = settingsFromCms?.hours || t("hours");
  const tagline = settingsFromCms?.footerTagline || t("tagline");
  const companyLink =
    settingsFromCms?.socialLinks.find((link) =>
      link.url.includes("linkedin.com/company")
    )?.url || "https://www.linkedin.com/company/syone-consulting/";

  return (
    <footer className="border-t border-border bg-white">
      <div className="container-grid py-14 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div className="space-y-4">
            <Logo variant="color" />
            <p className="max-w-xs text-sm leading-relaxed text-text-muted">{tagline}</p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold text-navy">{t("contact")}</h3>
            <ul className="space-y-2 text-sm text-text-muted">
              <li>
                <a href={`mailto:${email}`} className="hover:text-electric">
                  {email}
                </a>
              </li>
              <li>
                <a href={`tel:${phone.replace(/\s/g, "")}`} className="hover:text-electric">
                  {phone}
                </a>
              </li>
              <li className="pt-1 text-text-muted/80">{hours}</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold text-navy">{t("links")}</h3>
            <ul className="space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.key}>
                  <Link href={link.href} className="text-text-muted hover:text-electric">
                    {tNav(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold text-navy">{t("follow")}</h3>
            <a
              href={companyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-electric"
            >
              <span className="inline-flex h-7 w-7 items-center justify-center rounded bg-[#0A66C2] text-xs font-bold text-white">
                in
              </span>
              LinkedIn
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border pt-6 text-xs text-text-muted md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} SY&apos;ONE Consulting. {t("rights")}
          </p>
          <div className="flex gap-3">
            <Link href="/mentions-legales" className="hover:text-navy">
              {t("legal")}
            </Link>
            <span className="text-border">|</span>
            <Link href="/politique-de-confidentialite" className="hover:text-navy">
              {t("privacy")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
