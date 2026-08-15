import type { Metadata } from "next";
import Link from "next/link";
import CTABand from "@/components/CTABand";
import ProcessStepper from "@/components/ProcessStepper";
import Reveal from "@/components/visuals/Reveal";
import { getServices } from "@/lib/content/services";
import { process } from "@/lib/content/process";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Business Technology, Digital Presence, and Technology Partnership — the three ways Beyond Tech works with businesses.",
};

export default function ServicesPage() {
  const services = getServices();

  return (
    <>
      <section className="relative overflow-hidden bg-ink">
        <div className="absolute inset-0 bg-mesh" />
        <div className="absolute inset-0 bg-grid-pattern bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_65%_60%_at_50%_0%,black,transparent)]" />
        <div className="relative mx-auto max-w-4xl px-6 py-20 text-center sm:py-28">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-white/80 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Capabilities
            </span>
            <h1 className="mt-6 text-balance font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Services
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-balance text-lg text-white/70">
              Three ways we work with businesses — from the systems that run
              your operations to the presence that represents you.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-6 sm:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={i * 100}>
              <Link
                href={`/services/${service.slug}`}
                className="group flex h-full flex-col gap-4 rounded-2xl border border-border bg-paper p-8 shadow-card transition-all hover:-translate-y-1 hover:shadow-card-hover"
              >
                <h2 className="font-display text-xl font-semibold text-ink">{service.title}</h2>
                <p className="text-sm text-muted">{service.summary}</p>
                <span className="mt-auto flex items-center gap-1 text-sm font-semibold text-primary">
                  Learn more
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="relative bg-surface py-24">
        <div className="absolute inset-0 bg-grid-pattern-dark bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)]" />
        <div className="relative mx-auto max-w-6xl px-6">
          <Reveal>
            <h2 className="mb-10 font-display text-2xl font-semibold text-ink sm:text-3xl">
              How we work
            </h2>
            <ProcessStepper steps={process} />
          </Reveal>
        </div>
      </section>

      <CTABand />
    </>
  );
}
