import Link from "next/link";
import type { ReactNode } from "react";

type CtaButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "gold" | "forest" | "outline";
};

const styles = {
  gold: "border border-gold bg-gold text-forest hover:bg-gold-soft",
  forest: "border border-forest bg-forest text-ivory hover:bg-emerald hover:border-emerald",
  outline: "border border-gold bg-transparent text-gold hover:bg-gold hover:text-forest",
};

export function CtaButton({ href, children, variant = "gold" }: CtaButtonProps) {
  const className = `inline-flex items-center justify-center rounded-sm px-6 py-3 text-sm font-medium tracking-[0.14em] uppercase transition-colors duration-300 ${styles[variant]}`;

  if (href.startsWith("/#") || href.startsWith("#")) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
