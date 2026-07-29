import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

export function Input({ className, ...props }: ComponentProps<"input">) {
  return (
    <input
      className={cn(
        "w-full border border-border bg-white px-4 py-3 text-sm text-navy outline-none transition-colors placeholder:text-text-muted focus:border-navy",
        className
      )}
      {...props}
    />
  );
}

export function Textarea({ className, ...props }: ComponentProps<"textarea">) {
  return (
    <textarea
      className={cn(
        "w-full resize-y border border-border bg-white px-4 py-3 text-sm text-navy outline-none transition-colors placeholder:text-text-muted focus:border-navy",
        className
      )}
      rows={5}
      {...props}
    />
  );
}

export function Label({ className, ...props }: ComponentProps<"label">) {
  return (
    <label
      className={cn("mb-2 block text-sm font-medium text-navy", className)}
      {...props}
    />
  );
}
