import { initials } from "@/lib/content";

type TeamCardProps = {
  name: string;
  title: string;
};

export function TeamCard({ name, title }: TeamCardProps) {
  return (
    <article className="rounded-md border border-gold/20 bg-ivory p-7 text-center shadow-[0_10px_30px_rgba(32,31,28,0.04)] transition-colors duration-300 hover:border-gold">
      <div
        aria-hidden="true"
        className="mx-auto flex h-[5.5rem] w-[5.5rem] items-center justify-center rounded-full border border-gold bg-forest font-heading text-xl text-gold"
      >
        {initials(name)}
      </div>
      <h3 className="mt-6 text-xl">{name}</h3>
      <p className="mt-2 text-sm tracking-wide text-taupe">{title}</p>
    </article>
  );
}
