import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  action?: ReactNode;
  light?: boolean;
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  action,
  light,
}: SectionHeaderProps) {
  return (
    <div className="mb-10 flex flex-col gap-6 md:mb-12 md:flex-row md:items-end md:justify-between">
      <div className="max-w-3xl">
        {eyebrow && (
          <p className={cn("eyebrow", light && "text-white/60")}>{eyebrow}</p>
        )}
        <h2
          className={cn(
            "font-serif text-3xl font-medium leading-tight tracking-tight md:text-[2.25rem]",
            light ? "text-white" : "text-navy"
          )}
        >
          {title}
        </h2>
        {subtitle && (
          <p
            className={cn(
              "mt-4 text-base leading-relaxed md:text-lg",
              light ? "text-white/75" : "text-text-muted"
            )}
          >
            {subtitle}
          </p>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}
