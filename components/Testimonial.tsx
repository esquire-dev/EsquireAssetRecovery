import { GoldLine } from "@/components/Section";
import { Icon } from "@/components/Icons";

type TestimonialProps = {
  quote: string;
  attribution?: string;
};

export function Testimonial({ quote, attribution }: TestimonialProps) {
  return (
    <figure className="mx-auto max-w-3xl text-center">
      <Icon name="quote" className="mx-auto h-10 w-10 text-gold" />
      <blockquote>
        <p className="font-heading mt-4 text-2xl font-medium text-forest italic md:text-[2rem]">
          {quote}
        </p>
      </blockquote>
      {attribution ? (
        <figcaption className="mt-8 text-[11px] tracking-[0.28em] text-taupe uppercase">
          {attribution}
        </figcaption>
      ) : null}
      <GoldLine className="mx-auto mt-8" />
    </figure>
  );
}
