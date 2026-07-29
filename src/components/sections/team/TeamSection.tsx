import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/Button";
import { SectionContainer } from "@/components/ui/SectionContainer";

interface TeamSectionProps {
  teaser?: boolean;
}

export function TeamSection({ teaser = false }: TeamSectionProps) {
  const tHome = useTranslations("home.team");
  const tTeam = useTranslations("team");
  const tCommon = useTranslations("common");
  const founders = tTeam.raw("founders") as {
    name: string;
    role: string;
    bio: string;
    linkedin: string;
    initials: string;
    shortBio?: string;
  }[];

  return (
    <SectionContainer variant="white">
      <div className="mb-10 md:mb-12">
        <p className="eyebrow">{teaser ? tHome("eyebrow") : tHome("eyebrow")}</p>
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2 className="max-w-2xl font-serif text-3xl font-medium leading-tight text-navy md:text-[2.25rem]">
            {teaser ? tHome("title") : tTeam("hero.title")}
          </h2>
          {teaser && (
            <Button href="/equipe" variant="outline-blue" className="shrink-0">
              {tCommon("learnMore")}
            </Button>
          )}
        </div>
        {!teaser && (
          <p className="prose-width mt-4 text-base leading-relaxed text-text-muted">
            {tTeam("hero.subtitle")}
          </p>
        )}
      </div>

      {!teaser && (
        <p className="prose-width mb-12 text-base leading-relaxed text-text-muted">
          {tTeam("complement")}
        </p>
      )}

      <div className="grid gap-5 lg:grid-cols-3">
        {founders.map((founder) => (
          <article
            key={founder.name}
            className="flex gap-4 rounded-xl border border-border bg-bg-subtle/60 p-5"
          >
            <div className="relative h-28 w-24 shrink-0 overflow-hidden rounded-lg bg-gradient-to-br from-navy to-electric">
              <div className="flex h-full w-full items-center justify-center font-serif text-2xl text-white">
                {founder.initials}
              </div>
            </div>
            <div className="min-w-0">
              <h3 className="font-sans text-base font-bold text-navy">{founder.name}</h3>
              <p className="mt-0.5 text-sm text-electric">{founder.role}</p>
              <p className="mt-2 text-xs leading-relaxed text-text-muted line-clamp-4">
                {teaser ? founder.shortBio || founder.bio : founder.bio}
              </p>
              <a
                href={founder.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block text-xs font-semibold text-navy underline-offset-2 hover:underline"
              >
                LinkedIn
              </a>
            </div>
          </article>
        ))}

        <article className="flex gap-4 rounded-xl border border-border bg-bg-subtle/60 p-5">
          <div className="flex h-28 w-24 shrink-0 items-center justify-center rounded-lg bg-white">
            <svg
              className="h-12 w-12 text-electric"
              fill="none"
              viewBox="0 0 48 48"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-hidden="true"
            >
              <circle cx="16" cy="16" r="5" />
              <circle cx="32" cy="16" r="5" />
              <circle cx="24" cy="30" r="5" />
              <path d="M8 38c1.5-5 5-8 8-8s6.5 3 8 8M24 38c1.5-5 5-8 8-8s6.5 3 8 8" />
            </svg>
          </div>
          <div>
            <h3 className="font-sans text-base font-bold text-navy">{tTeam("networkCardTitle")}</h3>
            <p className="mt-2 text-xs leading-relaxed text-text-muted">
              {tTeam("networkCardText")}
            </p>
          </div>
        </article>
      </div>

      {!teaser && (
        <div className="mt-16 border-t border-border pt-12">
          <h3 className="text-2xl font-normal text-navy">{tTeam("networkTitle")}</h3>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {(tTeam.raw("network") as string[]).map((item) => (
              <li
                key={item}
                className="rounded-lg border border-border bg-white px-5 py-4 text-sm leading-relaxed text-text-gray"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </SectionContainer>
  );
}
