import { cn } from "@/lib/utils";

const icons = {
  banking: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 10h18M5 10V18a1 1 0 001 1h12a1 1 0 001-1V10M8 14h8M12 3l9 7H3l9-7z"
    />
  ),
  architecture: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 20h16M6 20V8l6-4 6 4v12M10 20v-6h4v6"
    />
  ),
  data: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 7c0-2 4-3 8-3s8 1 8 3-4 3-8 3-8-1-8-3zm0 6c0 2 4 3 8 3s8-1 8-3M4 19c0 2 4 3 8 3s8-1 8-3"
    />
  ),
  delivery: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13 10V3L4 14h7v7l9-11h-7z"
    />
  ),
  performance: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
    />
  ),
  finance: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  ),
  vision: (
    <>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="3" />
      <path strokeLinecap="round" d="M12 4v2M12 18v2M4 12h2M18 12h2" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M16 8l2-3" />
    </>
  ),
  execution: (
    <>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 19V9l4 2 4-4 4 3 4-2v11" />
      <path strokeLinecap="round" d="M4 19h16" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M16 9l3-4" />
    </>
  ),
  anchor: (
    <>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 18h6M12 14v4M12 8a2 2 0 100-4 2 2 0 000 4z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8 11c0 2.5 1.5 4 4 5 2.5-1 4-2.5 4-5"
      />
      <path d="M9 9.5C7 10 5.5 12 5.5 14.5S8 19 12 19s6.5-2 6.5-4.5S17 10 15 9.5" />
    </>
  ),
  value: (
    <>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3l7 4v5c0 5-3.5 8.5-7 10-3.5-1.5-7-5-7-10V7l7-4z"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
    </>
  ),
  strategy: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
    </>
  ),
  compliance: (
    <>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3l8 4v5c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V7l8-4z"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
    </>
  ),
} as const;

export type IconName = keyof typeof icons;

interface IconProps {
  name: IconName;
  className?: string;
}

export function Icon({ name, className }: IconProps) {
  return (
    <svg
      className={cn("h-6 w-6", className)}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
      aria-hidden="true"
    >
      {icons[name]}
    </svg>
  );
}

export const pillarIcons: IconName[] = ["vision", "execution", "anchor", "value"];
