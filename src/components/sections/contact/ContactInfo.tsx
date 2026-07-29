import { useTranslations } from "next-intl";

const socialLinks = [
  { href: "https://www.linkedin.com/in/ziadyassine", label: "Yassine Ziad" },
  {
    href: "https://www.linkedin.com/in/youssef-zerrari-17ba993",
    label: "Youssef Zerrari",
  },
  {
    href: "https://www.linkedin.com/company/syone-consulting/",
    label: "SY'ONE Consulting",
  },
];

export function ContactInfo() {
  const t = useTranslations("contact");
  const tFooter = useTranslations("footer");

  return (
    <div className="space-y-6">
      <div className="border border-border bg-white p-8">
        <h3 className="text-lg font-normal text-navy">{t("hero.title")}</h3>
        <ul className="mt-6 space-y-3 text-sm text-text-gray">
          <li>
            <span className="block text-xs uppercase tracking-[0.12em] text-text-muted">Téléphone</span>
            <a href={`tel:${t("phone").replace(/\s/g, "")}`} className="hover:underline">
              {t("phone")}
            </a>
          </li>
          <li>
            <span className="block text-xs uppercase tracking-[0.12em] text-text-muted">E-mail</span>
            <a href={`mailto:${t("email")}`} className="hover:underline">
              {t("email")}
            </a>
          </li>
          <li>
            <span className="block text-xs uppercase tracking-[0.12em] text-text-muted">E-mail</span>
            <a href={`mailto:${t("emailSecondary")}`} className="hover:underline">
              {t("emailSecondary")}
            </a>
          </li>
        </ul>
        <p className="mt-6 border-t border-border pt-6 text-sm text-text-muted">{tFooter("hours")}</p>
      </div>

      <div className="border border-border bg-white p-8">
        <h3 className="text-lg font-normal text-navy">{t("socialTitle")}</h3>
        <ul className="mt-6 space-y-2">
          {socialLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
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
