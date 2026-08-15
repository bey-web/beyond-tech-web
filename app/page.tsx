import Link from "next/link";
import ProofStrip from "@/components/ProofStrip";
import CaseStudyCard from "@/components/CaseStudyCard";
import TestimonialBlock from "@/components/TestimonialBlock";
import CTABand from "@/components/CTABand";
import ProcessStepper from "@/components/ProcessStepper";
import Reveal from "@/components/visuals/Reveal";
import FloatingCard from "@/components/visuals/FloatingCard";
import { getCaseStudies } from "@/lib/content/case-studies";
import { getTestimonials } from "@/lib/content/testimonials";
import { getServices } from "@/lib/content/services";
import { process } from "@/lib/content/process";

const SERVICE_ICONS: Record<string, string> = {
  business_technology: "M4 19h16M6 15l3-6 4 4 5-9",
  digital_presence: "M12 4v16m8-8H4",
  technology_partnership: "M12 2l3 6 6 1-4.5 4.5L18 20l-6-3-6 3 1.5-6.5L3 9l6-1z",
};

export default function HomePage() {
  const caseStudies = getCaseStudies().slice(0, 3);
  const testimonials = getTestimonials().slice(0, 2);
  const services = getServices();

  return (
    <>
      <section className="relative overflow-hidden bg-ink">
        <div className="absolute inset-0 bg-mesh" />
        <div className="absolute inset-0 bg-grid-pattern bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_65%_55%_at_50%_0%,black,transparent)]" />
        <div className="absolute -top-24 right-[-10%] h-96 w-96 rounded-full bg-accent/20 blur-[100px]" />
        <div className="absolute bottom-[-20%] left-[-10%] h-96 w-96 rounded-full bg-primary/40 blur-[100px]" />

        <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-24 sm:pt-32">
          <div className="grid items-center gap-16 lg:grid-cols-[1.1fr,0.9fr]">
            <div>
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-white/80 backdrop-blur">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  Built &amp; running across Beyond Group
                </span>
              </Reveal>

              <Reveal delay={80}>
                <h1 className="mt-6 text-balance font-display text-5xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-[4.5rem]">
                  Technology that takes your business{" "}
                  <span className="bg-gradient-to-r from-accent via-accent-300 to-white bg-clip-text text-transparent">
                    further
                  </span>
                </h1>
              </Reveal>

              <Reveal delay={160}>
                <p className="mt-6 max-w-xl text-balance text-lg text-white/70">
                  We build the systems, platforms, and digital presence that
                  let African businesses operate at a global standard — and
                  prove it with real, delivered work.
                </p>
              </Reveal>

              <Reveal delay={240}>
                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <Link
                    href="/contact"
                    className="rounded-full bg-accent px-7 py-3.5 text-center text-sm font-semibold text-white shadow-glow transition-all hover:-translate-y-0.5 hover:bg-accent-600"
                  >
                    Tell us what you&apos;re building
                  </Link>
                  <Link
                    href="/work"
                    className="rounded-full border border-white/20 px-7 py-3.5 text-center text-sm font-semibold text-white transition-colors hover:bg-white/10"
                  >
                    See the work
                  </Link>
                </div>
              </Reveal>
            </div>

            <Reveal delay={200} className="relative hidden lg:block">
              <div className="relative h-[500px]">
                <FloatingCard
                  title="Beyond Operations System"
                  tag="Live · 7 people run daily work through it"
                  gradient="orbit"
                  className="absolute left-0 top-0 w-56 -rotate-[4deg]"
                  delay="0s"
                />
                <FloatingCard
                  title="G&S SmartSplit"
                  tag="Ops + treasury, in build"
                  gradient="waves"
                  className="absolute right-0 top-[180px] w-52 rotate-[3deg]"
                  delay="1.4s"
                />
                <FloatingCard
                  title="GLN Network Platform"
                  tag="Live · scaling the leader base"
                  gradient="grid"
                  className="absolute left-6 top-[300px] w-56 rotate-[2deg]"
                  delay="2.8s"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <ProofStrip />

      <section className="relative overflow-hidden bg-ink py-14">
        <div className="absolute inset-0 bg-grid-pattern bg-[size:48px_48px] opacity-40" />
        <p className="relative mx-auto max-w-3xl text-balance px-6 text-center font-display text-lg font-medium text-white sm:text-xl">
          Built for African infrastructure realities. Delivered to a global
          standard.
        </p>
      </section>

      {caseStudies.length > 0 && (
        <section className="mx-auto max-w-6xl px-6 py-24">
          <Reveal>
            <div className="mb-12 flex items-end justify-between">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wide text-accent-600">
                  Proof, not promises
                </span>
                <h2 className="mt-2 font-display text-3xl font-semibold text-ink sm:text-4xl">
                  Recent work
                </h2>
              </div>
              <Link
                href="/work"
                className="hidden text-sm font-semibold text-primary hover:underline sm:block"
              >
                View all work →
              </Link>
            </div>
          </Reveal>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((cs, i) => (
              <Reveal key={cs.slug} delay={i * 100}>
                <CaseStudyCard caseStudy={cs} />
              </Reveal>
            ))}
          </div>
          <Link
            href="/work"
            className="mt-8 block text-center text-sm font-semibold text-primary hover:underline sm:hidden"
          >
            View all work →
          </Link>
        </section>
      )}

      <section className="relative bg-surface py-24">
        <div className="absolute inset-0 bg-grid-pattern-dark bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)]" />
        <div className="relative mx-auto max-w-6xl px-6">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-wide text-accent-600">
              Capabilities
            </span>
            <h2 className="mt-2 mb-12 font-display text-3xl font-semibold text-ink sm:text-4xl">
              What we do
            </h2>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-3">
            {services.map((service, i) => (
              <Reveal key={service.slug} delay={i * 100}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group flex h-full flex-col gap-4 rounded-2xl border border-border bg-paper p-7 shadow-card transition-all hover:-translate-y-1 hover:shadow-card-hover"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-ink text-white shadow-glow-primary">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                      <path d={SERVICE_ICONS[service.division] ?? SERVICE_ICONS.business_technology} />
                    </svg>
                  </span>
                  <h3 className="font-display text-lg font-semibold text-ink">{service.title}</h3>
                  <p className="text-sm text-muted">{service.summary}</p>
                  <span className="mt-auto flex items-center gap-1 text-sm font-semibold text-primary">
                    Learn more
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-wide text-accent-600">
            Method
          </span>
          <h2 className="mt-2 mb-12 font-display text-3xl font-semibold text-ink sm:text-4xl">
            How we work
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <ProcessStepper steps={process} />
        </Reveal>
      </section>

      {testimonials.length > 0 && (
        <section className="bg-surface py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-8 md:grid-cols-2">
              {testimonials.map((t, i) => (
                <Reveal key={t.id} delay={i * 100}>
                  <TestimonialBlock testimonial={t} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABand />
    </>
  );
}
