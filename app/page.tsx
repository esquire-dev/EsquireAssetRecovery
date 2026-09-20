import Image from "next/image";
import { ClaimSection } from "@/components/ClaimSection";
import { CtaButton } from "@/components/CtaButton";
import { FadeIn } from "@/components/FadeIn";
import { FaqAccordion } from "@/components/FaqAccordion";
import { Icon, type IconName } from "@/components/Icons";
import { Eyebrow, Section } from "@/components/Section";
import { Testimonial } from "@/components/Testimonial";
import { VideoPlaceholder } from "@/components/VideoPlaceholder";
import { brand } from "@/lib/brand";
import { home, homeFaqs } from "@/lib/content";

const surplusItems: {
  title: string;
  body: string;
  image: string;
  icon: IconName;
}[] = [
  {
    title: "Core Explanation",
    body: home.surplus.explanation,
    image: "/images/surplus-home.jpg",
    icon: "home",
  },
  {
    title: "Systemic Barrier",
    body: home.surplus.barrier,
    image: "/images/surplus-documents.jpg",
    icon: "file",
  },
  {
    title: "Esquire's Commitment",
    body: home.surplus.commitment,
    image: "/images/surplus-counsel.jpg",
    icon: "shield",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden px-6 py-20 text-ivory md:px-10 md:py-28 lg:py-32">
        <Image
          src="/images/hero-bg.jpg"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest/94 via-forest/82 to-forest/55" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <FadeIn>
            <div className="mb-5 flex items-center gap-3">
              <Image
                src={brand.logoSrc}
                alt=""
                width={44}
                height={44}
                className="h-11 w-11 rounded-full border border-gold/70 bg-ivory object-cover"
                priority
              />
              <p className="text-[11px] font-medium tracking-[0.32em] text-gold uppercase">
                Esquire Asset Recovery, LLC
              </p>
            </div>
            <h1 className="max-w-xl text-4xl text-ivory md:text-5xl lg:text-[3.35rem]">
              {home.hero.headline}
            </h1>
            <p className="mt-6 max-w-xl text-lg text-ivory/75">{home.hero.subheadline}</p>
            <div className="mt-9">
              <CtaButton href="/#claim">Check My Eligibility</CtaButton>
            </div>
          </FadeIn>

          <FadeIn delay={0.12}>
            <figure className="relative mx-auto max-w-md lg:max-w-none">
              <div className="rounded-sm border border-gold bg-ivory/10 p-2 shadow-[0_24px_60px_rgba(0,0,0,0.35)]">
                <Image
                  src="/images/surplus-home.jpg"
                  alt="A classic American home representing equity recovered after foreclosure"
                  width={1400}
                  height={1050}
                  className="aspect-[4/5] h-auto w-full rounded-sm object-cover md:h-[26rem] md:aspect-auto"
                  priority
                />
              </div>
              <figcaption className="mt-4 flex items-center gap-2 text-[12px] tracking-[0.16em] text-ivory/75 uppercase">
                <Icon name="home" className="h-4 w-4 text-gold" />
                Recovering home equity after foreclosure
              </figcaption>
            </figure>
          </FadeIn>
        </div>
      </section>

      <Section tone="beige">
        <FadeIn>
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="max-w-xl text-3xl md:text-[2.55rem] md:leading-tight">
                {home.value.headline}
              </h2>
              <div className="mt-8 flex items-center gap-3" aria-hidden="true">
                <span className="h-px w-12 bg-gold" />
                <span className="h-1.5 w-1.5 rotate-45 bg-gold" />
                <span className="h-px w-12 bg-gold" />
              </div>
              <p className="mt-6 font-heading text-2xl text-gold italic md:text-[1.85rem]">
                {home.value.banner}
              </p>
            </div>
            <div className="border border-gold bg-ivory p-2 shadow-[0_18px_44px_rgba(32,31,28,0.08)]">
              <div className="border border-gold/20">
                <div className="relative h-80 md:h-[24rem]">
                  <Image
                    src="/images/surplus-home.jpg"
                    alt="A family home standing after foreclosure, representing equity that may still be recovered"
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </Section>

      <Section>
        <FadeIn>
          <VideoPlaceholder />
          <p className="mt-10 text-center font-heading text-2xl tracking-[0.08em] text-forest uppercase">
            {home.value.tagline}
          </p>
        </FadeIn>
      </Section>

      <Section tone="beige">
        <FadeIn>
          <Eyebrow>Understanding Surplus Funds</Eyebrow>
          <h2 className="text-3xl md:text-4xl">{home.surplus.title}</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {surplusItems.map((item) => (
              <article key={item.title} className="overflow-hidden rounded-md border border-gold/20 bg-ivory">
                <div className="relative h-44">
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 33vw, 100vw"
                  />
                </div>
                <div className="border-t border-gold p-6">
                  <span className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 text-gold">
                    <Icon name={item.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="text-xl">{item.title}</h3>
                  <p className="mt-3 text-taupe">{item.body}</p>
                </div>
              </article>
            ))}
          </div>
        </FadeIn>
      </Section>

      <Section>
        <FadeIn>
          <Testimonial quote={home.testimonial.quote} attribution={home.testimonial.attribution} />
          <p className="mx-auto mt-14 max-w-3xl rounded-md border-l-2 border-gold bg-beige px-7 py-6 text-lg text-forest">
            {home.educationalCallout}
          </p>
        </FadeIn>
      </Section>

      <section className="relative overflow-hidden px-6 py-20 text-center md:px-10 md:py-24 lg:py-[7.5rem]">
        <Image
          src="/images/urgency-home.jpg"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-forest/82" />
        <FadeIn>
          <div className="relative mx-auto max-w-6xl">
            <h2 className="text-3xl text-ivory md:text-4xl">{home.urgency.headline}</h2>
            <p className="mt-6 font-heading text-4xl text-gold">{home.urgency.emphasis}</p>
            <p className="mt-3 text-xl text-ivory/80">{home.urgency.follow}</p>
            <p className="mt-8 text-ivory/85">{home.urgency.close}</p>
          </div>
        </FadeIn>
      </section>

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

      <Section id="faq">
        <FadeIn>
          <Eyebrow>Questions</Eyebrow>
          <h2 className="text-3xl md:text-4xl">Frequently Asked Questions</h2>
          <p className="mt-4 max-w-2xl text-taupe">
            Surplus-fund recovery can feel intimidating. These answers cover the points families
            ask first.
          </p>
          <div className="mt-10">
            <FaqAccordion items={homeFaqs} />
          </div>
        </FadeIn>
      </Section>

      <ClaimSection />
    </>
  );
}
