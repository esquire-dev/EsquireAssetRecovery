import Image from "next/image";
import Link from "next/link";
import { CtaButton } from "@/components/CtaButton";
import { Icon } from "@/components/Icons";
import {
  alabamaForeclosure,
  alabamaTaxSale,
  foreclosureLabels,
  taxSaleLabels,
  type StateRecord,
} from "@/lib/states";

type StateOverviewProps = {
  state: StateRecord;
  kind: "foreclosure" | "tax";
};

export function StateOverview({ state, kind }: StateOverviewProps) {
  const isAlabama = state.slug === "alabama";
  const title =
    kind === "foreclosure"
      ? isAlabama
        ? alabamaForeclosure.title
        : `${state.name} Mortgage Foreclosure Laws`
      : isAlabama
        ? alabamaTaxSale.title
        : `${state.name} Tax Liens and Tax Deeds`;

  const classification =
    kind === "foreclosure"
      ? foreclosureLabels[state.foreclosure]
      : taxSaleLabels[state.taxSale];

  const overview = isAlabama
    ? kind === "foreclosure"
      ? alabamaForeclosure.overview
      : alabamaTaxSale.overview
    : kind === "foreclosure"
      ? `${state.name} is generally classified as a ${classification.toLowerCase()} foreclosure state. That means the typical path to sale ${
          state.foreclosure === "judicial"
            ? "runs through the court, with a lawsuit, hearing, and court-supervised sale."
            : "is handled under the power of sale in the mortgage or deed of trust, with required notices rather than a full lawsuit in every case."
        } County clerks, courts, and loan documents still control the exact steps.`
      : `${state.name} is generally grouped with ${classification.toLowerCase()} jurisdictions. Surplus or excess proceeds after a tax sale, if any, are still a matter of state statute and county procedure. Classification on this page is a high-level map only—not a statute summary.`;

  const extra = isAlabama
    ? kind === "foreclosure"
      ? alabamaForeclosure.extra
      : alabamaTaxSale.extra
    : "Esquire Asset Recovery reviews foreclosure records, auction results, and holding-agency files to determine whether surplus funds may remain, then explains next steps in plain language. We do not invent county-specific deadlines on this overview.";

  return (
    <article>
      <div className="relative mb-10 h-52 overflow-hidden rounded-sm md:h-64">
        <Image
          src="/images/resources-columns.jpg"
          alt=""
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 72rem, 100vw"
        />
        <div className="absolute inset-0 bg-forest/45" />
      </div>
      <p className="flex items-center gap-2 text-[11px] font-medium tracking-[0.32em] text-gold uppercase">
        <Icon name="landmark" className="h-4 w-4" />
        Legal Resources
      </p>
      <h1 className="mt-4 max-w-4xl text-4xl md:text-5xl">{title}</h1>
      <p className="mt-5 inline-block rounded-sm border border-gold px-3 py-1 text-[11px] tracking-[0.2em] text-forest uppercase">
        {classification}
      </p>

      <div className="mt-10 max-w-3xl space-y-6 text-lg text-charcoal">
        <p>{overview}</p>
        <p className="text-taupe">{extra}</p>
        <p>
          Surplus funds after foreclosure or tax sale can go unclaimed because of
          outdated addresses, competing liens, and notices that are easy to miss.
          If you believe {state.name} held excess proceeds from a sale, we can
          help you evaluate the claim.
        </p>
      </div>

      <div className="mt-10 flex flex-wrap gap-4">
        <CtaButton href="/#claim">Request a Free Eligibility Review</CtaButton>
        <Link href="/legal-resources" className="px-2 py-3 text-sm text-forest underline decoration-gold/50 underline-offset-4">
          Back to all states
        </Link>
      </div>
    </article>
  );
}
