import { Link } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline-light" | "outline-blue";

interface ButtonProps extends ComponentProps<typeof Link> {
  variant?: ButtonVariant;
  showArrow?: boolean;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "rounded-md bg-electric text-white shadow-sm hover:bg-[#0458db]",
  secondary:
    "rounded-md border border-navy/20 bg-transparent text-navy hover:border-electric hover:text-electric",
  ghost: "text-electric hover:text-navy",
  "outline-light":
    "rounded-md border border-white/70 bg-transparent text-white hover:bg-white hover:text-navy",
  "outline-blue":
    "rounded-md border border-electric bg-white text-electric hover:bg-electric hover:text-white",
};

export function Button({
  variant = "primary",
  showArrow = false,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <Link
      className={cn(
        "inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold tracking-wide transition-colors duration-200",
        variant !== "ghost" && "border border-transparent",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
      {showArrow && (
        <span aria-hidden="true" className="text-base leading-none">
          →
        </span>
      )}
    </Link>
  );
}

interface NativeButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  showArrow?: boolean;
}

export function SubmitButton({
  variant = "primary",
  showArrow = false,
  className,
  children,
  ...props
}: NativeButtonProps) {
  return (
    <button
      type="submit"
      className={cn(
        "inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold tracking-wide transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-60",
        variant !== "ghost" && "border border-transparent",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
      {showArrow && <span aria-hidden="true">→</span>}
    </button>
  );
}
