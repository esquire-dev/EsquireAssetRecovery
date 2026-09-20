import Image from "next/image";
import { Eyebrow } from "@/components/Section";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  imageSrc?: string;
};

export function PageHero({
  eyebrow,
  title,
  subtitle,
  imageSrc = "/images/hero-bg.jpg",
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden px-6 py-20 text-ivory md:px-10 md:py-24">
      <Image
        src={imageSrc}
        alt=""
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-forest/92 via-forest/82 to-forest/62" />
      <div className="relative mx-auto max-w-6xl">
        {eyebrow ? <Eyebrow light>{eyebrow}</Eyebrow> : null}
        <h1 className="max-w-4xl text-4xl text-ivory md:text-5xl lg:text-[3.4rem]">{title}</h1>
        {subtitle ? (
          <p className="mt-6 max-w-2xl text-lg text-ivory/80">{subtitle}</p>
        ) : null}
      </div>
    </section>
  );
}
