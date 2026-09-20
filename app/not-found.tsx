import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";

export default function NotFound() {
  return (
    <>
      <PageHero
        title="Page not found"
        subtitle="The page you requested is not available."
        imageSrc="/images/hero-bg.jpg"
      />
      <Section>
        <Link href="/" className="text-forest underline decoration-gold underline-offset-4">
          Return home
        </Link>
      </Section>
    </>
  );
}
