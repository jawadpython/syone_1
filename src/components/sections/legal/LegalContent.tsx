import { useTranslations } from "next-intl";
import { SectionContainer } from "@/components/ui/SectionContainer";

interface LegalContentProps {
  namespace: "legal" | "privacy";
}

export function LegalContent({ namespace }: LegalContentProps) {
  const t = useTranslations(namespace);
  const sections = t.raw("sections") as { title: string; content: string }[];

  return (
    <SectionContainer variant="subtle" className="pt-0 md:pt-0">
      <div className="max-w-3xl space-y-12">
        {sections.map((section) => (
          <article key={section.title}>
            <h2 className="text-xl font-normal text-navy">{section.title}</h2>
            <p className="mt-4 leading-relaxed text-text-muted">{section.content}</p>
          </article>
        ))}
      </div>
    </SectionContainer>
  );
}
