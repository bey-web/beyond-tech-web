import type { Metadata } from "next";
import Link from "next/link";
import CaseStudyCard from "@/components/CaseStudyCard";
import CTABand from "@/components/CTABand";
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
      <section className="mx-auto max-w-4xl px-6 py-20 text-center sm:py-28">
        <h1 className="text-balance text-4xl font-bold tracking-tight text-ink sm:text-5xl">
          Work
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-balance text-lg text-muted">
          Every project here is real, delivered, and running. We don&apos;t
          publish work we can&apos;t stand behind.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        {caseStudies.length > 0 ? (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((cs) => (
              <CaseStudyCard key={cs.slug} caseStudy={cs} />
            ))}
          </div>
        ) : (
          <div className="rounded-lg border border-dashed border-border bg-surface p-12 text-center">
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
