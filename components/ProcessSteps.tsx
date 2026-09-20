import { Icon, type IconName } from "@/components/Icons";

type Step = {
  label: string;
  title: string;
  body: string;
  icon?: IconName;
};

export function ProcessSteps({ steps }: { steps: Step[] }) {
  return (
    <ol className="relative space-y-0">
      {steps.map((step, index) => (
        <li key={step.title} className="relative grid gap-4 py-8 md:grid-cols-[8rem_1fr] md:gap-10">
          {index < steps.length - 1 ? (
            <span
              aria-hidden="true"
              className="absolute top-20 bottom-0 left-[1.15rem] hidden w-px bg-gold/50 md:block"
            />
          ) : null}
          <div className="flex items-start gap-3 md:flex-col md:pt-1">
            {step.icon ? (
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold/50 text-gold">
                <Icon name={step.icon} className="h-5 w-5" />
              </span>
            ) : null}
            <p className="font-heading text-2xl text-gold">{step.label}</p>
          </div>
          <div>
            <h3 className="text-2xl">{step.title}</h3>
            <p className="mt-3 max-w-2xl text-taupe">{step.body}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
