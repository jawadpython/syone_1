import Image from "next/image";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/Button";
import { SectionContainer } from "@/components/ui/SectionContainer";
import type { FounderContent } from "@/sanity/fetch";

interface TeamSectionProps {
  teaser?: boolean;
  foundersFromCms?: FounderContent[];
}

const founderPhotos: Record<string, string> = {
  "Yassine Ziad": "/images/yassine-ziad.jpeg",
  "Youssef Zerrari": "/images/youssef-zerrari.webp",
};

export function TeamSection({ teaser = false, foundersFromCms }: TeamSectionProps) {
  const tHome = useTranslations("home.team");
  const tTeam = useTranslations("team");
  const tCommon = useTranslations("common");
  const fallbackFounders = tTeam.raw("founders") as FounderContent[];
  const founders =
    foundersFromCms && foundersFromCms.length > 0 ? foundersFromCms : fallbackFounders;

  return (
    <SectionContainer variant="white">
      <div className="mb-10 md:mb-12">
        <p className="eyebrow">{teaser ? tHome("eyebrow") : tHome("eyebrow")}</p>
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2 className="max-w-2xl font-serif text-3xl font-medium leading-tight text-navy md:text-[2.25rem]">
            {teaser ? tHome("title") : tTeam("hero.title")}
          </h2>
          {teaser && (
            <Button href="/equipe" variant="outline-blue" className="w-full shrink-0 sm:w-auto">
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
            className="flex min-h-[168px] overflow-hidden rounded-xl border border-border bg-white shadow-card"
          >
            <div className="relative w-[36%] min-w-[6.5rem] shrink-0 self-stretch bg-bg-mist sm:min-w-[7.5rem] sm:w-[38%]">
              {founder.photoUrl || founderPhotos[founder.name] ? (
                <Image
                  src={founder.photoUrl || founderPhotos[founder.name]}
                  alt={founder.name}
                  fill
                  className="object-cover object-[center_20%]"
                  sizes="(max-width: 1024px) 40vw, 180px"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center font-serif text-2xl text-navy">
                  {founder.initials}
                </div>
              )}
            </div>
            <div className="flex min-w-0 flex-1 flex-col justify-center px-4 py-4 sm:px-5">
              <h3 className="font-sans text-base font-bold text-navy">{founder.name}</h3>
              <p className="mt-0.5 text-sm text-text-muted">{founder.role}</p>
              <p className="mt-2 text-xs leading-relaxed text-text-muted line-clamp-4">
                {teaser ? founder.shortBio || founder.bio : founder.bio}
              </p>
              <a
                href={founder.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block text-xs font-semibold text-electric underline-offset-2 hover:underline"
              >
                LinkedIn
              </a>
            </div>
          </article>
        ))}

        <article className="flex min-h-[168px] overflow-hidden rounded-xl border border-border bg-white shadow-card">
          <div className="flex w-[38%] min-w-[7.5rem] shrink-0 items-center justify-center self-stretch bg-bg-mist">
            <svg
              className="h-14 w-14 text-electric"
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
          <div className="flex min-w-0 flex-1 flex-col justify-center px-4 py-4 sm:px-5">
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
