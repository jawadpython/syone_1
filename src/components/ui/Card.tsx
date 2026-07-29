import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

export function Card({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "border border-border bg-white p-8",
        className
      )}
      {...props}
    />
  );
}
