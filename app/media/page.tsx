import type { Metadata } from "next";
import Image from "next/image";
import { FadeIn } from "@/components/FadeIn";
import { Icon } from "@/components/Icons";
import { PageHero } from "@/components/PageHero";
import { Card, GoldLine, Section } from "@/components/Section";
import { media } from "@/lib/content";

export const metadata: Metadata = {
  title: "Media Coverage",
  description: media.mission,
  openGraph: { title: "Media Coverage", description: media.mission },
};

const storyImages = [
  "/images/media-press.jpg",
  "/images/who-homeowner.jpg",
  "/images/surplus-home.jpg",
  "/images/urgency-home.jpg",
  "/images/hero-home.jpg",
  "/images/surplus-documents.jpg",
];

export default function MediaPage() {
  return (
    <>
      <PageHero
        title={media.title}
        subtitle={media.subtitle}
        imageSrc="/images/media-press.jpg"
      />
      <Section>
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <GoldLine className="mx-auto" />
            <p className="font-heading mt-8 text-2xl text-forest italic md:text-3xl">
              {media.mission}
            </p>
            <GoldLine className="mx-auto mt-8" />
          </div>
        </FadeIn>
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {media.stories.map((story, index) => (
            <FadeIn key={story.title}>
              <Card padded={false} className="h-full overflow-hidden bg-ivory">
                <div className="relative h-44">
                  <Image
                    src={storyImages[index] ?? "/images/media-press.jpg"}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                </div>
                <div className="p-7">
                  <p className="flex items-center gap-2 text-[11px] font-medium tracking-[0.22em] text-gold uppercase">
                    <Icon name="newspaper" className="h-4 w-4" />
                    {story.outlet}
                  </p>
                  <h2 className="mt-4 text-xl">{story.title}</h2>
                  <p className="mt-3 text-taupe">{story.summary}</p>
                </div>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Section>
    </>
  );
}
