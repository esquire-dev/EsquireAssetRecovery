import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Section } from "@/components/Section";
import { StateOverview } from "@/components/StateOverview";
import { getState, states } from "@/lib/states";

type PageProps = {
  params: Promise<{ state: string }>;
};

export function generateStaticParams() {
  return states.map((state) => ({ state: state.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { state: slug } = await params;
  const state = getState(slug);
  if (!state) return { title: "State Overview" };
  return {
    title: `${state.name} Tax Liens and Tax Deeds`,
    description: `High-level overview of ${state.name} property tax sale type and surplus fund recovery.`,
  };
}

export default async function TaxSaleStatePage({ params }: PageProps) {
  const { state: slug } = await params;
  const state = getState(slug);
  if (!state) notFound();

  return (
    <Section>
      <StateOverview state={state} kind="tax" />
    </Section>
  );
}
