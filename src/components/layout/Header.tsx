"use client";

import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { Link, usePathname } from "@/i18n/routing";
import type { Pathnames } from "@/i18n/routing";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { cn } from "@/lib/utils";

const navItems: { href: Pathnames; key: string }[] = [
  { href: "/expertises", key: "expertises" },
  { href: "/notre-approche", key: "approach" },
  { href: "/cas-d-usage", key: "cases" },
  { href: "/equipe", key: "team" },
  { href: "/contact", key: "contact" },
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

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!mobileOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [mobileOpen]);

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
      <div className="container-grid grid h-[4.25rem] grid-cols-[auto_auto] items-center md:h-[4.75rem] lg:grid-cols-[auto_minmax(0,1fr)_auto] lg:gap-4">
        <Logo variant={overDark ? "white" : "color"} />

        <nav
          className="hidden min-w-0 items-center justify-center gap-0.5 lg:flex xl:gap-1"
          aria-label="Main"
        >
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.key}
                href={item.href}
                className={cn(
                  "relative whitespace-nowrap rounded-md px-2 py-2 text-[12.5px] font-medium transition-colors xl:px-2.5 xl:text-[13px]",
                  overDark
                    ? active
                      ? "text-white"
                      : "text-white/75 hover:text-white"
                    : active
                      ? "text-navy"
                      : "text-text-muted hover:text-navy"
                )}
              >
                {t(item.key)}
                {active && (
                  <span
                    className="absolute bottom-1 left-2 right-2 h-0.5 rounded-full bg-electric xl:left-2.5 xl:right-2.5"
                    aria-hidden="true"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 justify-self-end lg:flex xl:gap-4">
          <LanguageSwitcher light={overDark} />
          <Button
            href="/contact"
            variant="primary"
            showArrow
            className="whitespace-nowrap px-4 py-2.5 text-[13px]"
          >
            {t("cta")}
          </Button>
        </div>

        <button
          type="button"
          className={cn(
            "inline-flex h-10 w-10 items-center justify-center justify-self-end rounded-md lg:hidden",
            overDark ? "text-white hover:bg-white/10" : "text-navy hover:bg-bg-mist"
          )}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((open) => !open)}
        >
          <span className="text-2xl leading-none" aria-hidden="true">
            {mobileOpen ? "×" : "☰"}
          </span>
        </button>
      </div>

      {mobileOpen && (
        <div
          id="mobile-nav"
          className="max-h-[calc(100dvh-4.25rem)] overflow-y-auto border-t border-border bg-white py-6 shadow-lg lg:hidden"
        >
          <div className="container-grid">
            <nav className="flex flex-col gap-1" aria-label="Mobile">
              <Link
                href="/"
                className={cn(
                  "rounded-md px-3 py-3 text-base font-medium transition-colors",
                  pathname === "/"
                    ? "bg-bg-mist text-navy"
                    : "text-text-gray hover:bg-bg-mist hover:text-navy"
                )}
                onClick={() => setMobileOpen(false)}
              >
                {t("home")}
              </Link>
              {navItems.map((item) => {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.key}
                    href={item.href}
                    className={cn(
                      "rounded-md px-3 py-3 text-base font-medium transition-colors",
                      active
                        ? "bg-bg-mist text-navy"
                        : "text-text-gray hover:bg-bg-mist hover:text-navy"
                    )}
                    onClick={() => setMobileOpen(false)}
                  >
                    {t(item.key)}
                  </Link>
                );
              })}
            </nav>
            <div className="mt-6 flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
              <LanguageSwitcher />
              <Button
                href="/contact"
                variant="primary"
                showArrow
                className="w-full justify-center sm:w-auto"
                onClick={() => setMobileOpen(false)}
              >
                {t("cta")}
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
