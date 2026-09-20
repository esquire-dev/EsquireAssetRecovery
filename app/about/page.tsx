import type { Metadata } from "next";
import Image from "next/image";
import { ClaimSection } from "@/components/ClaimSection";
import { CtaButton } from "@/components/CtaButton";
import { FadeIn } from "@/components/FadeIn";
import { FaqAccordion } from "@/components/FaqAccordion";
import { Icon, type IconName } from "@/components/Icons";
import { PageHero } from "@/components/PageHero";
import { Card, Eyebrow, Section } from "@/components/Section";
import { TeamCard } from "@/components/TeamCard";
import { brand } from "@/lib/brand";
import { about, home, team, whoWeServe, whoWeServeFaqs } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description: about.subtitle,
  openGraph: { title: "About", description: about.subtitle },
};

const audienceVisuals: { image: string; icon: IconName }[] = [
  { image: "/images/who-homeowner.jpg", icon: "home" },
  { image: "/images/who-estate.jpg", icon: "users" },
  { image: "/images/who-clarity.jpg", icon: "search" },
];

const principleIcons: IconName[] = ["shield", "file", "heart"];

const counsel = team.members.filter(
  (member) => member.title === "Chief Counsel" || member.title === "Deputy Chief Counsel",
);
const staff = team.members.filter(
  (member) => member.title !== "Chief Counsel" && member.title !== "Deputy Chief Counsel",
);

export default function AboutPage() {
  return (
    <>
      <PageHero title={about.title} subtitle={about.subtitle} imageSrc="/images/team-office.jpg" />

      <Section>
        <FadeIn>
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <Eyebrow>The Firm</Eyebrow>
              <h2 className="text-3xl md:text-4xl">{home.overview.headline}</h2>
              <p className="mt-6 text-lg text-taupe">{home.overview.body}</p>
              <ul className="mt-8 space-y-3 text-sm text-forest">
                <li className="flex items-center gap-3">
                  <Icon name="scale" className="h-5 w-5 text-gold" />
                  Attorney-owned recovery counsel
                </li>
                <li className="flex items-center gap-3">
                  <Icon name="landmark" className="h-5 w-5 text-gold" />
                  Court-ready filings nationwide
                </li>
                <li className="flex items-center gap-3">
                  <Icon name="shield" className="h-5 w-5 text-gold" />
                  No upfront cost to start a review
                </li>
              </ul>
            </div>
            <Image
              src={brand.officeImageSrc}
              alt="Esquire Asset Recovery office on North Capital of Texas Highway"
              width={900}
              height={700}
              className="h-80 w-full rounded-sm object-cover"
            />
          </div>
        </FadeIn>
      </Section>

      <Section id="who-we-serve" tone="beige">
        <FadeIn>
          <Eyebrow>Who We Serve</Eyebrow>
          <h2 className="text-3xl md:text-4xl">People We Help</h2>
          <p className="mt-4 max-w-3xl text-lg text-taupe">{whoWeServe.intro}</p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {whoWeServe.audiences.map((item, index) => (
              <Card key={item.title} padded={false} className="overflow-hidden bg-ivory">
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

      <Section>
        <FadeIn>
          <Eyebrow>How We Work</Eyebrow>
          <h2 className="text-3xl md:text-4xl">Core Service Principles</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {whoWeServe.principles.map((item, index) => (
              <Card key={item.title}>
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

      <Section id="team" tone="beige">
        <FadeIn>
          <Eyebrow>Our Team</Eyebrow>
          <h2 className="text-3xl md:text-4xl">{team.title}</h2>
          <p className="mt-4 max-w-3xl text-lg text-taupe">{team.intro}</p>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {counsel.map((member) => (
              <TeamCard key={member.name} {...member} />
            ))}
          </div>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {staff.map((member) => (
              <TeamCard key={member.name} {...member} />
            ))}
          </div>
        </FadeIn>
      </Section>

      <Section id="faq">
        <FadeIn>
          <Eyebrow>Questions</Eyebrow>
          <h2 className="text-3xl md:text-4xl">Frequently Asked Questions</h2>
          <div className="mt-10">
            <FaqAccordion items={whoWeServeFaqs} />
          </div>
        </FadeIn>
      </Section>

      <Section tone="forest" className="text-center">
        <FadeIn>
          <h2 className="text-3xl text-ivory md:text-4xl">{whoWeServe.cta.heading}</h2>
          <div className="mt-8">
            <CtaButton href="#claim">{whoWeServe.cta.button}</CtaButton>
          </div>
        </FadeIn>
      </Section>

      <ClaimSection />
    </>
  );
}
