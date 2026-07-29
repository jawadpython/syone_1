import Image from "next/image";
import { Link } from "@/i18n/routing";
import { cn } from "@/lib/utils";

interface LogoProps {
  variant?: "color" | "white";
  className?: string;
}

export function Logo({ variant = "white", className }: LogoProps) {
  const src = variant === "white" ? "/logos/syone-white.svg" : "/logos/syone-color.svg";

  return (
    <Link href="/" className={cn("inline-flex items-center", className)}>
      <Image src={src} alt="SY'ONE Consulting" width={140} height={32} priority />
    </Link>
  );
}
