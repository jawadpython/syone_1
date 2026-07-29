import { ReactNode } from "react";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
}

export function PageHero({ title, subtitle, children }: PageHeroProps) {
  return (
    <section className="border-b border-border bg-bg-subtle pt-28 md:pt-36">
      <div className="container-grid pb-16 md:pb-20">
        <p className="eyebrow">SY&apos;ONE Consulting</p>
        <h1 className="max-w-4xl font-serif text-3xl font-medium leading-tight tracking-tight text-navy md:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="prose-width mt-6 text-lg leading-relaxed text-text-muted md:text-xl">
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
