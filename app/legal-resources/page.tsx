import type { Metadata } from "next";
import { FadeIn } from "@/components/FadeIn";
import { Icon } from "@/components/Icons";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { StateDirectory } from "@/components/StateDirectory";
import { MapLegend, UsMap } from "@/components/UsMap";

export const metadata: Metadata = {
  title: "Legal Resources",
  description:
    "State-by-state overviews of mortgage foreclosure and property tax sale procedures, with maps of judicial versus non-judicial foreclosure and tax sale types.",
  openGraph: {
    title: "Legal Resources",
    description:
      "State-by-state overviews of mortgage foreclosure and property tax sale procedures.",
  },
};

export default function LegalResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Guidance Center"
        title="Legal Resources Hub"
        subtitle="High-level state directories and maps for mortgage foreclosure and property tax sales. Use these pages to understand process type—not as a substitute for the statute or a case review."
        imageSrc="/images/resources-columns.jpg"
      />
      <Section>
        <FadeIn>
          <div className="mb-10 flex items-center gap-3">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 text-gold">
              <Icon name="map" className="h-5 w-5" />
            </span>
            <h2 className="text-3xl md:text-4xl">Browse by State</h2>
          </div>
          <StateDirectory />
        </FadeIn>
      </Section>
      <Section tone="beige">
        <FadeIn>
          <div className="mb-4 flex items-center gap-3">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 text-gold">
              <Icon name="scale" className="h-5 w-5" />
            </span>
            <h2 className="text-3xl md:text-4xl">Judicial vs. Non-Judicial Mortgage Foreclosure</h2>
          </div>
          <p className="mt-4 max-w-3xl text-taupe">
            Color-coded by the typical path used in each state. Forest green indicates
            judicial foreclosure; antique gold indicates non-judicial. Select a state
            for a brief overview.
          </p>
          <div className="mt-8">
            <UsMap mode="foreclosure" pathPrefix="/legal-resources/foreclosure" />
            <MapLegend mode="foreclosure" />
          </div>
        </FadeIn>
      </Section>
      <Section>
        <FadeIn>
          <div className="mb-4 flex items-center gap-3">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 text-gold">
              <Icon name="landmark" className="h-5 w-5" />
            </span>
            <h2 className="text-3xl md:text-4xl">Property Tax Sales Across America</h2>
          </div>
          <p className="mt-4 max-w-3xl text-taupe">
            States grouped by common tax-sale structure: tax lien certificate, tax deed, or
            redeemable tax deed. Procedures still vary by county.
          </p>
          <div className="mt-8">
            <UsMap mode="tax" pathPrefix="/legal-resources/tax-sale" />
            <MapLegend mode="tax" />
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
