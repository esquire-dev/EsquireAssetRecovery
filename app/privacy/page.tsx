import type { Metadata } from "next";
import { FadeIn } from "@/components/FadeIn";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { privacy } from "@/lib/content";

export const metadata: Metadata = {
  title: privacy.title,
  description: privacy.intro,
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero title={privacy.title} imageSrc="/images/surplus-documents.jpg" />
      <Section>
        <FadeIn>
          <p className="max-w-3xl text-lg text-taupe">{privacy.intro}</p>
          <div className="mt-12 max-w-3xl space-y-12">
            {privacy.sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-2xl">{section.title}</h2>
                <p className="mt-3 text-charcoal">{section.body}</p>
              </section>
            ))}
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
