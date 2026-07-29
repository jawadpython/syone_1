"use client";

import { FormEvent, useState } from "react";
import { useTranslations } from "next-intl";
import { Input, Label, Textarea } from "@/components/ui/FormFields";
import { SubmitButton } from "@/components/ui/Button";
import { Link } from "@/i18n/routing";

export function ContactForm() {
  const t = useTranslations("contact.form");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error("Failed");
      setStatus("success");
      event.currentTarget.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="border border-border bg-white p-8 md:p-10">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <Label htmlFor="name">{t("name")}</Label>
            <Input id="name" name="name" required autoComplete="name" />
          </div>
          <div>
            <Label htmlFor="email">{t("email")}</Label>
            <Input id="email" name="email" type="email" required autoComplete="email" />
          </div>
          <div>
            <Label htmlFor="company">{t("company")}</Label>
            <Input id="company" name="company" required autoComplete="organization" />
          </div>
          <div>
            <Label htmlFor="phone">{t("phone")}</Label>
            <Input id="phone" name="phone" type="tel" autoComplete="tel" />
          </div>
        </div>
        <div>
          <Label htmlFor="need">{t("need")}</Label>
          <Input id="need" name="need" placeholder={t("needPlaceholder")} required />
        </div>
        <div>
          <Label htmlFor="message">{t("message")}</Label>
          <Textarea id="message" name="message" required />
        </div>
        <div className="flex items-start gap-3">
          <input
            id="consent"
            name="consent"
            type="checkbox"
            required
            className="mt-1 h-4 w-4 border-border text-navy focus:ring-navy"
          />
          <label htmlFor="consent" className="text-sm leading-relaxed text-text-muted">
            {t("consent")}{" "}
            <Link href="/politique-de-confidentialite" className="text-navy underline-offset-4 hover:underline">
              Politique de confidentialité
            </Link>
          </label>
        </div>
        <SubmitButton variant="primary" disabled={status === "loading"}>
          {status === "loading" ? t("sending") : t("submit")}
        </SubmitButton>
        {status === "success" && (
          <p className="text-sm text-navy">{t("success")}</p>
        )}
        {status === "error" && (
          <p className="text-sm text-red-700">{t("error")}</p>
        )}
      </form>
    </div>
  );
}
