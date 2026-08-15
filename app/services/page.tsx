import type { Metadata } from "next";
import Link from "next/link";
import CTABand from "@/components/CTABand";
import ProcessStepper from "@/components/ProcessStepper";
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
      <section className="mx-auto max-w-4xl px-6 py-20 text-center sm:py-28">
        <h1 className="text-balance text-4xl font-bold tracking-tight text-ink sm:text-5xl">
          Services
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-balance text-lg text-muted">
          Three ways we work with businesses — from the systems that run
          your operations to the presence that represents you.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid gap-8 sm:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="flex flex-col gap-4 rounded-lg border border-border bg-paper p-8 transition-shadow hover:shadow-lg"
            >
              <h2 className="text-xl font-semibold text-ink">{service.title}</h2>
              <p className="text-sm text-muted">{service.summary}</p>
              <span className="mt-auto text-sm font-semibold text-primary">
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-10 text-2xl font-bold text-ink sm:text-3xl">How we work</h2>
          <ProcessStepper steps={process} />
        </div>
      </section>

      <CTABand />
    </>
  );
}
