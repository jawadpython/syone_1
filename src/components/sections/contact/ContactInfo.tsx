import { useTranslations } from "next-intl";
import type { ContactPageContent, SiteSettingsContent } from "@/sanity/fetch";

type ContactInfoProps = {
  settingsFromCms?: SiteSettingsContent | null;
  pageFromCms?: ContactPageContent | null;
};

export function ContactInfo({ settingsFromCms, pageFromCms }: ContactInfoProps) {
  const t = useTranslations("contact");
  const tFooter = useTranslations("footer");

  const phone = settingsFromCms?.phone || t("phone");
  const email = settingsFromCms?.email || t("email");
  const emailSecondary = settingsFromCms?.emailSecondary || t("emailSecondary");
  const hours = settingsFromCms?.hours || tFooter("hours");
  const socialLinks =
    settingsFromCms && settingsFromCms.socialLinks.length > 0
      ? settingsFromCms.socialLinks
      : [
          { url: "https://www.linkedin.com/in/ziadyassine", label: "Yassine Ziad" },
          {
            url: "https://www.linkedin.com/in/youssef-zerrari-17ba993",
            label: "Youssef Zerrari",
          },
          {
            url: "https://www.linkedin.com/company/syone-consulting/",
            label: "SY'ONE Consulting",
          },
        ];

  return (
    <div className="space-y-6">
      <div className="border border-border bg-white p-8">
        <h3 className="text-lg font-normal text-navy">
          {pageFromCms?.heroTitle || t("hero.title")}
        </h3>
        <ul className="mt-6 space-y-3 text-sm text-text-gray">
          <li>
            <span className="block text-xs uppercase tracking-[0.12em] text-text-muted">
              Téléphone
            </span>
            <a href={`tel:${phone.replace(/\s/g, "")}`} className="hover:underline">
              {phone}
            </a>
          </li>
          <li>
            <span className="block text-xs uppercase tracking-[0.12em] text-text-muted">E-mail</span>
            <a href={`mailto:${email}`} className="hover:underline">
              {email}
            </a>
          </li>
          <li>
            <span className="block text-xs uppercase tracking-[0.12em] text-text-muted">E-mail</span>
            <a href={`mailto:${emailSecondary}`} className="hover:underline">
              {emailSecondary}
            </a>
          </li>
        </ul>
        <p className="mt-6 border-t border-border pt-6 text-sm text-text-muted">{hours}</p>
      </div>

      <div className="border border-border bg-white p-8">
        <h3 className="text-lg font-normal text-navy">
          {pageFromCms?.socialTitle || t("socialTitle")}
        </h3>
        <ul className="mt-6 space-y-2">
          {socialLinks.map((link) => (
            <li key={link.url}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-navy underline-offset-4 hover:underline"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
