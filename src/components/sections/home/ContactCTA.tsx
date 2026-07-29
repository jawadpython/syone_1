import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/Button";

export function ContactCTA() {
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
      <svg
        className="pointer-events-none absolute -right-8 top-0 h-full w-1/2 opacity-40"
        viewBox="0 0 400 240"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M40 180 C120 140, 180 100, 240 120 C300 140, 340 80, 400 40"
          stroke="#0569FF"
          strokeWidth="1.5"
          opacity="0.35"
        />
        <path
          d="M0 200 C100 160, 160 140, 230 160 C310 185, 350 110, 400 70"
          stroke="#5E35F2"
          strokeWidth="2"
          opacity="0.25"
        />
      </svg>

      <div className="container-grid relative z-10 grid items-center gap-8 py-16 md:grid-cols-[1.2fr_1fr_auto] md:gap-10 md:py-20">
        <h2 className="max-w-md font-serif text-3xl font-medium leading-tight text-navy md:text-[2.1rem]">
          {t("title")}
        </h2>
        <p className="max-w-sm text-sm leading-relaxed text-text-gray md:text-base">
          {t("subtitle")}
        </p>
        <div className="md:justify-self-end">
          <Button href="/contact" variant="primary" showArrow>
            {tCommon("contactUs")}
          </Button>
          <p className="mt-3 text-xs text-text-muted">{t("note")}</p>
        </div>
      </div>
    </section>
  );
}
