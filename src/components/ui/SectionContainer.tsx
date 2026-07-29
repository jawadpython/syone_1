import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionContainerProps {
  children: ReactNode;
  className?: string;
  id?: string;
  variant?: "white" | "subtle" | "navy";
}

export function SectionContainer({
  children,
  className,
  id,
  variant = "white",
}: SectionContainerProps) {
  return (
    <section
      id={id}
      className={cn(
        "section-padding",
        variant === "white" && "bg-white",
        variant === "subtle" && "bg-bg-subtle",
        variant === "navy" && "bg-navy text-white",
        className
      )}
    >
      <div className="container-grid">{children}</div>
    </section>
  );
}
