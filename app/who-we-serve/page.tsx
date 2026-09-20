import type { Metadata } from "next";
import Image from "next/image";
import { ClaimForm } from "@/components/ClaimForm";
import { CtaButton } from "@/components/CtaButton";
import { FadeIn } from "@/components/FadeIn";
import { FaqAccordion } from "@/components/FaqAccordion";
import { Icon, type IconName } from "@/components/Icons";
import { PageHero } from "@/components/PageHero";
import { Card, Eyebrow, Section } from "@/components/Section";
import { home, whoWeServe, whoWeServeFaqs } from "@/lib/content";

export const metadata: Metadata = {
  title: "Who We Serve",
  description: whoWeServe.subtitle,
  openGraph: { title: "Who We Serve", description: whoWeServe.subtitle },
};

const audienceVisuals: { image: string; icon: IconName }[] = [
  { image: "/images/who-homeowner.jpg", icon: "home" },
  { image: "/images/who-estate.jpg", icon: "users" },
  { image: "/images/who-clarity.jpg", icon: "search" },
];

const principleIcons: IconName[] = ["shield", "file", "heart"];

export default function WhoWeServePage() {
  return (
    <>
      <PageHero
        title={whoWeServe.title}
        subtitle={whoWeServe.subtitle}
        imageSrc="/images/surplus-home.jpg"
      />
      <Section>
        <FadeIn>
          <h2 className="text-3xl">Who We Serve</h2>
          <p className="mt-4 max-w-3xl text-lg text-taupe">{whoWeServe.intro}</p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {whoWeServe.audiences.map((item, index) => (
              <Card key={item.title} padded={false} className="overflow-hidden">
                <div className="relative h-44">
                  <Image
                    src={audienceVisuals[index]!.image}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 33vw, 100vw"
                  />
                </div>
                <div className="p-7">
                  <span className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 text-gold">
                    <Icon name={audienceVisuals[index]!.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="text-xl">{item.title}</h3>
                  <p className="mt-3 text-taupe">{item.body}</p>
                </div>
              </Card>
            ))}
          </div>
        </FadeIn>
      </Section>
      <Section tone="beige">
        <FadeIn>
          <h2 className="text-3xl">Core Service Principles</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {whoWeServe.principles.map((item, index) => (
              <Card key={item.title} className="bg-ivory">
                <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 text-gold">
                  <Icon name={principleIcons[index]!} className="h-5 w-5" />
                </span>
                <h3 className="text-xl">{item.title}</h3>
                <p className="mt-3 text-taupe">{item.body}</p>
              </Card>
            ))}
          </div>
        </FadeIn>
      </Section>
      <Section id="faq">
        <FadeIn>
          <Eyebrow>Questions</Eyebrow>
          <h2 className="text-3xl md:text-4xl">Who We Serve FAQs</h2>
          <div className="mt-10">
            <FaqAccordion items={whoWeServeFaqs} />
          </div>
        </FadeIn>
      </Section>
      <Section tone="forest" className="text-center">
        <FadeIn>
          <h2 className="text-3xl text-ivory md:text-4xl">{whoWeServe.cta.heading}</h2>
          <div className="mt-8">
            <CtaButton href="/#claim">{whoWeServe.cta.button}</CtaButton>
          </div>
        </FadeIn>
      </Section>
      <Section id="claim" tone="beige">
        <FadeIn>
          <Eyebrow>Claim Review</Eyebrow>
          <h2 className="text-3xl md:text-4xl">{home.form.title}</h2>
          <div className="mt-10 max-w-3xl rounded-md border border-gold/30 border-t-2 border-t-gold bg-ivory p-6 md:p-8">
            <ClaimForm />
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
