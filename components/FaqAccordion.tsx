import { Icon } from "@/components/Icons";

export type FaqItem = {
  question: string;
  answer: string;
};

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  return (
    <div className="divide-y divide-gold/25 border-y border-gold/25">
      {items.map((item) => (
        <details key={item.question} className="group py-5">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-left">
            <span className="font-heading text-xl text-forest md:text-[1.35rem]">
              {item.question}
            </span>
            <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gold/50 text-gold transition-transform duration-300 group-open:rotate-45">
              <Icon name="plus" className="h-4 w-4" />
            </span>
          </summary>
          <p className="mt-4 max-w-3xl pr-12 text-taupe">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}

export function GlossaryList({
  items,
}: {
  items: { term: string; definition: string }[];
}) {
  return (
    <dl className="grid gap-8 md:grid-cols-2">
      {items.map((item) => (
        <div key={item.term} className="border-t border-gold pt-5">
          <dt className="font-heading text-xl text-forest">{item.term}</dt>
          <dd className="mt-3 text-taupe">{item.definition}</dd>
        </div>
      ))}
    </dl>
  );
}
