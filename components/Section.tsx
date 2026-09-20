import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  tone?: "ivory" | "beige" | "forest";
};

export function Section({
  id,
  children,
  className = "",
  tone = "ivory",
}: SectionProps) {
  const background =
    tone === "forest"
      ? "bg-forest text-ivory"
      : tone === "beige"
        ? "bg-beige"
        : "bg-ivory";

  return (
    <section
      id={id}
      className={`px-6 py-20 md:px-10 md:py-24 lg:py-[7.5rem] ${background} ${className}`}
    >
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}

export function Eyebrow({
  children,
  light = false,
}: {
  children: ReactNode;
  light?: boolean;
}) {
  return (
    <p
      className={`mb-4 text-[11px] font-medium tracking-[0.32em] uppercase ${
        light ? "text-gold" : "text-gold"
      }`}
    >
      {children}
    </p>
  );
}

export function GoldLine({ className = "" }: { className?: string }) {
  return <div className={`h-px w-16 bg-gold ${className}`} />;
}

export function Card({
  children,
  className = "",
  padded = true,
}: {
  children: ReactNode;
  className?: string;
  padded?: boolean;
}) {
  return (
    <div
      className={`rounded-md border border-gold/20 border-t-2 border-t-gold bg-beige shadow-[0_10px_30px_rgba(32,31,28,0.05)] ${
        padded ? "p-7" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
