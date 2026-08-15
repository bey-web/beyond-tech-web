import type { Metadata } from "next";
import CTABand from "@/components/CTABand";
import Reveal from "@/components/visuals/Reveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "Beyond Tech exists to close a specific gap: African businesses deserve technology partners who deliver at a genuinely global standard, not a scaled-down version of one.",
};

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh-light" />
        <Reveal className="relative mx-auto max-w-3xl px-6 py-20 sm:py-28">
          <span className="text-sm font-semibold uppercase tracking-wide text-accent-600">
            About Beyond Tech
          </span>
          <p className="mt-6 text-balance font-display text-2xl font-medium leading-relaxed text-ink sm:text-3xl">
            Beyond Tech exists to close a specific gap: African businesses
            deserve technology partners who deliver at a genuinely global
            standard, not a scaled-down version of one. Every system we build
            is judged against that bar — reliable enough for a global client,
            rooted enough to understand what building for African
            infrastructure realities actually requires.
          </p>
        </Reveal>
      </section>

      <section className="relative overflow-hidden bg-ink py-16">
        <div className="absolute inset-0 bg-grid-pattern bg-[size:48px_48px] opacity-40" />
        <p className="relative mx-auto max-w-3xl text-balance px-6 text-center font-display text-xl font-semibold text-white">
          Built for African infrastructure realities. Delivered to a global
          standard.
        </p>
      </section>

      <CTABand />
    </>
  );
}
