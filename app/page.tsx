import Link from "next/link";
import ProofStrip from "@/components/ProofStrip";
import CaseStudyCard from "@/components/CaseStudyCard";
import TestimonialBlock from "@/components/TestimonialBlock";
import CTABand from "@/components/CTABand";
import ProcessStepper from "@/components/ProcessStepper";
import { getCaseStudies } from "@/lib/content/case-studies";
import { getTestimonials } from "@/lib/content/testimonials";
import { getServices } from "@/lib/content/services";
import { process } from "@/lib/content/process";

export default function HomePage() {
  const caseStudies = getCaseStudies().slice(0, 3);
  const testimonials = getTestimonials().slice(0, 2);
  const services = getServices();

  return (
    <>
      <section className="mx-auto max-w-6xl px-6 pb-16 pt-20 text-center sm:pt-28">
        <h1 className="mx-auto max-w-3xl text-balance text-4xl font-bold tracking-tight text-ink sm:text-5xl lg:text-6xl">
          Technology That Takes Your Business Further
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-balance text-lg text-muted">
          We build the systems, platforms, and digital presence that let
          African businesses operate at a global standard — and prove it
          with real, delivered work.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/contact"
            className="rounded-md bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-700"
          >
            Tell us what you&apos;re building
          </Link>
          <Link
            href="/work"
            className="rounded-md border border-border px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-surface"
          >
            See the work
          </Link>
        </div>
      </section>

      <ProofStrip />

      <section className="bg-ink py-12">
        <p className="mx-auto max-w-3xl text-balance px-6 text-center text-lg font-medium text-white sm:text-xl">
          Built for African infrastructure realities. Delivered to a global
          standard.
        </p>
      </section>

      {caseStudies.length > 0 && (
        <section className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-10 flex items-end justify-between">
            <h2 className="text-2xl font-bold text-ink sm:text-3xl">Recent work</h2>
            <Link href="/work" className="text-sm font-semibold text-primary hover:underline">
              View all work →
            </Link>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((cs) => (
              <CaseStudyCard key={cs.slug} caseStudy={cs} />
            ))}
          </div>
        </section>
      )}

      <section className="bg-surface py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-10 text-2xl font-bold text-ink sm:text-3xl">What we do</h2>
          <div className="grid gap-8 sm:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="flex flex-col gap-3 rounded-lg border border-border bg-paper p-6 transition-shadow hover:shadow-lg"
              >
                <h3 className="text-lg font-semibold text-ink">{service.title}</h3>
                <p className="text-sm text-muted">{service.summary}</p>
                <span className="mt-auto text-sm font-semibold text-primary">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="mb-10 text-2xl font-bold text-ink sm:text-3xl">How we work</h2>
        <ProcessStepper steps={process} />
      </section>

      {testimonials.length > 0 && (
        <section className="bg-surface py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-8 md:grid-cols-2">
              {testimonials.map((t) => (
                <TestimonialBlock key={t.id} testimonial={t} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABand />
    </>
  );
}
