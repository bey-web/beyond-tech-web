import type { ProcessStep } from "@/lib/types";

export default function ProcessStepper({ steps }: { steps: ProcessStep[] }) {
  return (
    <ol className="grid gap-8 md:grid-cols-4">
      {steps.map((step, index) => (
        <li key={step.step} className="relative flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-ink text-sm font-bold text-white shadow-glow-primary">
              {step.step}
            </span>
            {index < steps.length - 1 && (
              <span
                className="hidden h-px flex-1 bg-gradient-to-r from-border to-transparent md:block"
                aria-hidden
              />
            )}
          </div>
          <h3 className="font-display text-base font-semibold text-ink">{step.title}</h3>
          <p className="text-sm text-muted">{step.description}</p>
        </li>
      ))}
    </ol>
  );
}
