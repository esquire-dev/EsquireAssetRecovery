import type { Metadata } from "next";
import { FadeIn } from "@/components/FadeIn";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { TeamCard } from "@/components/TeamCard";
import { team } from "@/lib/content";

export const metadata: Metadata = {
  title: "Our Team",
  description: team.intro,
  openGraph: { title: "Our Team", description: team.intro },
};

export default function TeamPage() {
  return (
    <>
      <PageHero
        title={team.title}
        subtitle={team.subtitle}
        imageSrc="/images/team-office.jpg"
      />
      <Section>
        <FadeIn>
          <p className="max-w-3xl text-lg text-taupe">{team.intro}</p>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {team.members.map((member) => (
              <TeamCard key={member.name} {...member} />
            ))}
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
