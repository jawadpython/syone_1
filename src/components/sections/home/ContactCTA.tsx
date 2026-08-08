import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/Button";

type ContactCTAProps = {
  title?: string;
  subtitle?: string;
  note?: string;
};

export function ContactCTA({ title, subtitle, note }: ContactCTAProps) {
  const t = useTranslations("home.cta");
  const tCommon = useTranslations("common");

  return (
    <section className="relative overflow-hidden bg-bg-mist">
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 50% 80% at 95% 20%, rgba(5,105,255,0.12), transparent 60%)",
        }}
      />
      <div className="container-grid relative z-10 grid items-center gap-8 py-16 md:grid-cols-[1.2fr_1fr_auto] md:gap-10 md:py-20">
        <h2 className="max-w-md font-serif text-3xl font-medium leading-tight text-navy md:text-[2.1rem]">
          {title || t("title")}
        </h2>
        <p className="max-w-sm text-sm leading-relaxed text-text-gray md:text-base">
          {subtitle || t("subtitle")}
        </p>
        <div className="md:justify-self-end">
          <Button href="/contact" variant="primary" showArrow className="w-full justify-center sm:w-auto">
            {tCommon("contactUs")}
          </Button>
          <p className="mt-3 text-xs text-text-muted">{note || t("note")}</p>
        </div>
      </div>
    </section>
  );
}
