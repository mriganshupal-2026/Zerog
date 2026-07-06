import type { ReactNode } from "react";

const variants = {
  primary:
    "bg-[#00C2FF] text-[#0B1F35] hover:bg-white focus-visible:outline-[#00C2FF]",
  dark: "bg-[#0B1F35] text-white hover:bg-[#123456] focus-visible:outline-[#00C2FF]",
  light:
    "bg-white text-[#0B1F35] hover:bg-[#EAF8FF] focus-visible:outline-white",
  outline:
    "border border-white/35 bg-white/10 text-white backdrop-blur hover:bg-white hover:text-[#0B1F35] focus-visible:outline-white",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  ariaLabel,
}: {
  href: string;
  children: ReactNode;
  variant?: keyof typeof variants;
  className?: string;
  ariaLabel?: string;
}) {
  return (
    <a
      href={href}
      aria-label={ariaLabel}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  );
}
