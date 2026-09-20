import type { Metadata } from "next";
import { CtaButton } from "@/components/CtaButton";
import { FadeIn } from "@/components/FadeIn";
import { FaqAccordion, GlossaryList } from "@/components/FaqAccordion";
import { Icon, type IconName } from "@/components/Icons";
import { PageHero } from "@/components/PageHero";
import { ProcessSteps } from "@/components/ProcessSteps";
import { Card, Eyebrow, Section } from "@/components/Section";
import { library, libraryFaqs } from "@/lib/content";

export const metadata: Metadata = {
  title: "Library & Process Guide",
  description: library.intro,
  openGraph: { title: "Library & Process Guide", description: library.intro },
};

const moduleIcons: IconName[] = ["scale", "clock", "handshake", "shield", "book"];
const extraIcons: IconName[] = ["file", "users", "search"];

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
          <Eyebrow>Guidance Library</Eyebrow>
          <h2 className="text-3xl md:text-4xl">More From the Guidance Center</h2>
          <p className="mt-4 max-w-2xl text-taupe">
            Additional notes on communication, how Esquire works, and the no-cost first step.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {library.extraModules.map((module, index) => (
              <Card key={module.title} className="bg-ivory">
                <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 text-gold">
                  <Icon name={extraIcons[index]!} className="h-5 w-5" />
                </span>
                <h3 className="text-xl">{module.title}</h3>
                <p className="mt-3 text-taupe">{module.body}</p>
              </Card>
            ))}
          </div>
        </FadeIn>
      </Section>
      <Section>
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
      <Section id="glossary" tone="beige">
        <FadeIn>
          <Eyebrow>Plain Language</Eyebrow>
          <h2 className="text-3xl md:text-4xl">Key Terms</h2>
          <p className="mt-4 max-w-2xl text-taupe">
            County records and court filings use language that is easy to miss. These definitions
            match how we explain the process to families.
          </p>
          <div className="mt-10">
            <GlossaryList items={library.glossary} />
          </div>
        </FadeIn>
      </Section>
      <Section id="faq">
        <FadeIn>
          <Eyebrow>Questions</Eyebrow>
          <h2 className="text-3xl md:text-4xl">Library FAQs</h2>
          <p className="mt-4 max-w-2xl text-taupe">
            Answers to the questions we hear most about surplus funds, filings, and working with
            Esquire.
          </p>
          <div className="mt-10">
            <FaqAccordion items={libraryFaqs} />
          </div>
          <div className="mt-10">
            <CtaButton href="/#claim">Start Your Free Eligibility Review</CtaButton>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
