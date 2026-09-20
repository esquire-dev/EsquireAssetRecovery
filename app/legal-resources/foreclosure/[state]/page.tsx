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
    title: `${state.name} Mortgage Foreclosure Laws`,
    description: `High-level overview of ${state.name} mortgage foreclosure process type and surplus fund recovery.`,
  };
}

export default async function ForeclosureStatePage({ params }: PageProps) {
  const { state: slug } = await params;
  const state = getState(slug);
  if (!state) notFound();

  return (
    <Section>
      <StateOverview state={state} kind="foreclosure" />
    </Section>
  );
}
