"use client";

import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { Link, usePathname } from "@/i18n/routing";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/" as const, key: "home" },
  { href: "/expertises" as const, key: "expertises" },
  { href: "/notre-approche" as const, key: "approach" },
  { href: "/cas-d-usage" as const, key: "cases" },
  { href: "/equipe" as const, key: "team" },
  { href: "/contact" as const, key: "contact" },
];

export function Header() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const overDark = isHome && !scrolled && !mobileOpen;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        overDark
          ? "bg-transparent"
          : "border-b border-border/80 bg-white/95 shadow-sm backdrop-blur"
      )}
    >
      <div className="container-grid flex h-[4.25rem] items-center justify-between md:h-[4.75rem]">
        <Logo variant={overDark ? "white" : "color"} />

        <nav className="hidden items-center gap-7 xl:flex" aria-label="Main">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.key}
                href={item.href}
                className={cn(
                  "relative text-[13px] font-medium transition-colors",
                  overDark
                    ? active
                      ? "text-white"
                      : "text-white/80 hover:text-white"
                    : active
                      ? "text-navy"
                      : "text-text-muted hover:text-navy"
                )}
              >
                {t(item.key)}
                {active && (
                  <span
                    className={cn(
                      "absolute -bottom-1 left-0 h-0.5 w-full rounded-full",
                      overDark ? "bg-electric" : "bg-electric"
                    )}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-5 xl:flex">
          <LanguageSwitcher light={overDark} />
          <Button href="/contact" variant="primary" showArrow>
            {t("cta")}
          </Button>
        </div>

        <button
          type="button"
          className={cn(
            "inline-flex items-center justify-center p-2 xl:hidden",
            overDark ? "text-white" : "text-navy"
          )}
          aria-expanded={mobileOpen}
          aria-label="Toggle menu"
          onClick={() => setMobileOpen((open) => !open)}
        >
          <span className="text-xl leading-none">{mobileOpen ? "×" : "☰"}</span>
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-border bg-white px-6 py-6 xl:hidden">
          <nav className="flex flex-col gap-5" aria-label="Mobile">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className="text-base text-text-gray"
                onClick={() => setMobileOpen(false)}
              >
                {t(item.key)}
              </Link>
            ))}
          </nav>
          <div className="mt-8 flex items-center justify-between border-t border-border pt-6">
            <LanguageSwitcher />
            <Button href="/contact" variant="primary" showArrow>
              {t("cta")}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
