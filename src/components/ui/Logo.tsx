import Image from "next/image";
import { Link } from "@/i18n/routing";
import { cn } from "@/lib/utils";

interface LogoProps {
  variant?: "color" | "white" | "navy";
  className?: string;
}

const logoSrc = {
  color: "/logos/syone-color.png",
  white: "/logos/syone-white.png",
  navy: "/logos/syone-navy.png",
} as const;

export function Logo({ variant = "color", className }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        "inline-flex shrink-0 items-center transition-opacity hover:opacity-90",
        className
      )}
      aria-label="SY'ONE Consulting — Accueil"
    >
      <Image
        src={logoSrc[variant]}
        alt="SY'ONE Consulting"
        width={172}
        height={40}
        priority
        className="h-8 w-auto object-contain object-left md:h-10"
        sizes="(max-width: 768px) 136px, 172px"
      />
    </Link>
  );
}
