"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";
import { cn } from "@/lib/utils";

export function LanguageSwitcher({
  className,
  light = false,
}: {
  className?: string;
  light?: boolean;
}) {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const switchLocale = (nextLocale: "fr" | "en") => {
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <div className={cn("flex items-center gap-1.5 text-xs font-semibold tracking-wide", className)}>
      <button
        type="button"
        onClick={() => switchLocale("fr")}
        className={cn(
          "px-0.5 transition-colors",
          locale === "fr"
            ? light
              ? "text-white"
              : "text-navy"
            : light
              ? "text-white/55 hover:text-white"
              : "text-text-muted hover:text-navy"
        )}
        aria-current={locale === "fr" ? "true" : undefined}
      >
        FR
      </button>
      <span className={light ? "text-white/35" : "text-border"}>|</span>
      <button
        type="button"
        onClick={() => switchLocale("en")}
        className={cn(
          "px-0.5 transition-colors",
          locale === "en"
            ? light
              ? "text-white"
              : "text-navy"
            : light
              ? "text-white/55 hover:text-white"
              : "text-text-muted hover:text-navy"
        )}
        aria-current={locale === "en" ? "true" : undefined}
      >
        EN
      </button>
    </div>
  );
}
