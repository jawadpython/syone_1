import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

export function Badge({ className, ...props }: ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "text-xs font-semibold uppercase tracking-[0.12em] text-text-muted",
        className
      )}
      {...props}
    />
  );
}
