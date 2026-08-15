import type { Metadata } from "next";
import Link from "next/link";
import CaseStudyCard from "@/components/CaseStudyCard";
import CTABand from "@/components/CTABand";
import Reveal from "@/components/visuals/Reveal";
import { getCaseStudies } from "@/lib/content/case-studies";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Real, delivered work — the enterprise platforms and systems Beyond Tech has built and runs today.",
};

export default function WorkPage() {
  const caseStudies = getCaseStudies();

  return (
    <>
      <section className="relative overflow-hidden bg-ink">
        <div className="absolute inset-0 bg-mesh" />
        <div className="absolute inset-0 bg-grid-pattern bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_65%_60%_at_50%_0%,black,transparent)]" />
        <div className="relative mx-auto max-w-4xl px-6 py-20 text-center sm:py-28">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-white/80 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Proof, not promises
            </span>
            <h1 className="mt-6 text-balance font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Work
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-balance text-lg text-white/70">
              Every project here is real, delivered, and running. We don&apos;t
              publish work we can&apos;t stand behind.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        {caseStudies.length > 0 ? (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((cs, i) => (
              <Reveal key={cs.slug} delay={i * 100}>
                <CaseStudyCard caseStudy={cs} />
              </Reveal>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-border bg-surface p-12 text-center">
            <p className="text-muted">
              Case studies are being finalized before publishing — we only
              show work with confirmed details and, where needed, client
              permission.
            </p>
            <Link
              href="/contact"
              className="mt-4 inline-block text-sm font-semibold text-primary hover:underline"
            >
              Tell us what you&apos;re building →
            </Link>
          </div>
        )}
      </section>

      <CTABand />
    </>
  );
}
