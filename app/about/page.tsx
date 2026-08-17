import type { Metadata } from "next";
import Link from "next/link";
import CTABand from "@/components/CTABand";
import StatBand from "@/components/StatBand";
import Reveal from "@/components/visuals/Reveal";
import { getServices } from "@/lib/content/services";

export const metadata: Metadata = {
  title: "About",
  description:
    "Beyond Tech exists to close a specific gap: African businesses deserve technology partners who deliver at a genuinely global standard, not a scaled-down version of one.",
};

const PRINCIPLES = [
  {
    icon: "M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",
    title: "A global standard, not a scaled-down one",
    description:
      "Every system we build is judged against the same bar a global client would use — reliable, maintainable, built to be depended on, not demoed once.",
  },
  {
    icon: "M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15",
    title: "Rooted in African infrastructure realities",
    description:
      "We understand what building for the constraints of this environment actually requires, and design for them from the start instead of retrofitting later.",
  },
  {
    icon: "M12 21c4.97-4.97 8-8.686 8-12A8 8 0 1 0 4 9c0 3.314 3.03 7.03 8 12Z",
    title: "Proof, not promises",
    description:
      "We only publish work that's real, delivered, and running — with confirmed details and client permission. No filler case studies, no invented metrics.",
  },
  {
    icon: "M17.25 6.75 22.5 12l-5.25 5.25M6.75 17.25 1.5 12l5.25-5.25M14.25 4.5 9.75 19.5",
    title: "Embedded, not outsourced",
    description:
      "We work as a technical partner that stays attached to what we build, not a vendor that disappears the moment a ticket is closed.",
  },
];

export default function AboutPage() {
  const services = getServices();

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh-light" />
        <div className="relative mx-auto max-w-3xl px-6 py-20 sm:py-28">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-wide text-accent-600">
              About Beyond Tech
            </span>
          </Reveal>
          <Reveal delay={80}>
            <p className="mt-6 text-balance font-display text-2xl font-medium leading-relaxed text-ink sm:text-3xl">
              Beyond Tech exists to close a specific gap: African businesses
              deserve technology partners who deliver at a genuinely global
              standard, not a scaled-down version of one. Every system we
              build is judged against that bar — reliable enough for a
              global client, rooted enough to understand what building for
              African infrastructure realities actually requires.
            </p>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-balance text-muted">
              Beyond Tech is the technology subsidiary of Beyond Group Ltd —
              we build the internal systems Beyond Group itself runs on,
              then bring the same discipline to the businesses we work
              with.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-wide text-accent-600">
            What we hold ourselves to
          </span>
          <h2 className="mt-2 mb-12 font-display text-3xl font-semibold text-ink sm:text-4xl">
            Principles
          </h2>
        </Reveal>
        <div className="grid gap-6 sm:grid-cols-2">
          {PRINCIPLES.map((principle, i) => (
            <Reveal key={principle.title} delay={i * 100}>
              <div className="flex h-full flex-col gap-4 rounded-2xl border border-border bg-paper p-7 shadow-card transition-all hover:-translate-y-1 hover:shadow-card-hover">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-ink text-white shadow-glow-primary">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                    <path d={principle.icon} />
                  </svg>
                </span>
                <h3 className="font-display text-lg font-semibold text-ink">{principle.title}</h3>
                <p className="text-sm text-muted">{principle.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <StatBand />

      <section className="relative bg-surface py-24">
        <div className="absolute inset-0 bg-grid-pattern-dark bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)]" />
        <div className="relative mx-auto max-w-6xl px-6">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-wide text-accent-600">
              Where we work
            </span>
            <h2 className="mt-2 mb-12 font-display text-3xl font-semibold text-ink sm:text-4xl">
              Three disciplines, one bar
            </h2>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-3">
            {services.map((service, i) => (
              <Reveal key={service.slug} delay={i * 100}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group flex h-full flex-col gap-3 rounded-2xl border border-border bg-paper p-7 shadow-card transition-all hover:-translate-y-1 hover:shadow-card-hover"
                >
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

      <CTABand
        heading="See the standard for yourself."
        subheading="Every platform on our Work page is real, delivered, and running today."
        ctaLabel="View our work"
        ctaHref="/work"
      />
    </>
  );
}
