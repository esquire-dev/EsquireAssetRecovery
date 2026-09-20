import type { Metadata } from "next";
import { CtaButton } from "@/components/CtaButton";
import { FadeIn } from "@/components/FadeIn";
import { Icon, type IconName } from "@/components/Icons";
import { PageHero } from "@/components/PageHero";
import { ProcessSteps } from "@/components/ProcessSteps";
import { Card, Section } from "@/components/Section";
import { library } from "@/lib/content";

export const metadata: Metadata = {
  title: "Library & Process Guide",
  description: library.intro,
  openGraph: { title: "Library & Process Guide", description: library.intro },
};

const moduleIcons: IconName[] = ["scale", "clock", "handshake", "shield", "book"];

const workflowSteps = library.workflow.steps.map((step, index) => ({
  ...step,
  icon: (["search", "file", "scale", "key"] as IconName[])[index],
}));

export default function LibraryPage() {
  return (
    <>
      <PageHero
        title={library.title}
        subtitle={library.intro}
        imageSrc="/images/library-books.jpg"
      />
      <Section>
        <div className="space-y-8">
          {library.modules.map((module, index) => (
            <FadeIn key={module.title} delay={index * 0.04}>
              <Card className={index % 2 === 1 ? "md:ml-12" : "md:mr-12"}>
                <div className="flex items-start gap-4">
                  <span className="mt-1 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/40 text-gold">
                    <Icon name={moduleIcons[index]!} className="h-5 w-5" />
                  </span>
                  <div>
                    <h2 className="text-2xl">{module.title}</h2>
                    <p className="mt-4 max-w-3xl text-taupe">{module.body}</p>
                  </div>
                </div>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Section>
      <Section tone="beige">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl">{library.workflow.title}</h2>
          <div className="mt-10">
            <ProcessSteps steps={workflowSteps} />
          </div>
          <div className="mt-8">
            <CtaButton href="/#claim">Request a Free Eligibility Review</CtaButton>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
