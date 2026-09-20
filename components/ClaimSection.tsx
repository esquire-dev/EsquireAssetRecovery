import { ClaimForm } from "@/components/ClaimForm";
import { FadeIn } from "@/components/FadeIn";
import { Eyebrow, Section } from "@/components/Section";
import { home } from "@/lib/content";

export function ClaimSection() {
  return (
    <Section id="claim" tone="beige">
      <FadeIn>
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>Claim Review</Eyebrow>
          <h2 className="text-3xl md:text-4xl">{home.form.title}</h2>
          <div className="mt-6 flex items-center justify-center gap-3" aria-hidden="true">
            <span className="h-px w-12 bg-gold" />
            <span className="h-1.5 w-1.5 rotate-45 bg-gold" />
            <span className="h-px w-12 bg-gold" />
          </div>
          <p className="mt-6 text-taupe">{home.form.intro}</p>
        </div>
        <div className="mx-auto mt-10 max-w-3xl border border-gold bg-ivory p-1.5 shadow-[0_18px_44px_rgba(32,31,28,0.08)]">
          <div className="border border-gold/25 bg-ivory p-6 md:p-9">
            <ClaimForm />
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}
