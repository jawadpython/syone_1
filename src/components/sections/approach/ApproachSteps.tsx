import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/Button";
import { SectionContainer } from "@/components/ui/SectionContainer";

interface ApproachStepsProps {
  teaser?: boolean;
}

export function ApproachSteps({ teaser = false }: ApproachStepsProps) {
  const tHome = useTranslations("home.approach");
  const tApproach = useTranslations("approach");
  const tCommon = useTranslations("common");
  const steps = tApproach.raw("steps") as {
    number: string;
    title: string;
    description: string;
  }[];

  return (
    <SectionContainer variant="subtle">
      <div className="mb-12 flex flex-col items-start gap-4 md:mb-14">
        <div className="flex w-full items-center gap-4">
          <div className="h-px flex-1 bg-border" />
          <p className="eyebrow mb-0 shrink-0">{teaser ? tHome("eyebrow") : tHome("eyebrow")}</p>
          <div className="h-px flex-1 bg-border" />
        </div>
        {!teaser && (
          <div className="w-full text-center">
            <h2 className="font-serif text-3xl font-medium text-navy md:text-[2.25rem]">
              {tApproach("hero.title")}
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-base text-text-muted">
              {tApproach("hero.subtitle")}
            </p>
          </div>
        )}
        {teaser && (
          <div className="flex w-full flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <h2 className="max-w-xl font-serif text-3xl font-medium leading-tight text-navy md:text-[2.1rem]">
              {tHome("title")}
            </h2>
            <Button href="/notre-approche" variant="outline-blue" className="shrink-0">
              {tCommon("learnMore")}
            </Button>
          </div>
        )}
      </div>

      <div className="grid gap-8 md:grid-cols-5 md:gap-3">
        {steps.map((step, index) => (
          <div key={step.number} className="relative flex gap-3 md:flex-col md:gap-0">
            {index < steps.length - 1 && (
              <span
                className="absolute right-0 top-4 hidden text-electric/50 md:block"
                aria-hidden="true"
                style={{ transform: "translateX(50%)" }}
              >
                ›
              </span>
            )}
            <div className="flex items-center gap-3 md:mb-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-electric font-serif text-sm font-semibold text-electric">
                {step.number}
              </span>
              <h3 className="font-sans text-base font-bold text-navy md:hidden">{step.title}</h3>
            </div>
            <div>
              <h3 className="mb-2 hidden font-sans text-base font-bold text-navy md:block">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-text-muted">{step.description}</p>
            </div>
          </div>
        ))}
      </div>

      {!teaser && (
        <blockquote className="mt-16 max-w-3xl border-l-2 border-electric pl-6">
          <p className="text-lg leading-relaxed text-navy">{tApproach("keyMessage")}</p>
        </blockquote>
      )}
    </SectionContainer>
  );
}
