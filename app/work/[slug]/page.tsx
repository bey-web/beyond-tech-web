import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import CTABand from "@/components/CTABand";
import GradientArt from "@/components/visuals/GradientArt";
import { getCaseStudyBySlug, getCaseStudies } from "@/lib/content/case-studies";

export function generateStaticParams() {
  return getCaseStudies().map((cs) => ({ slug: cs.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const caseStudy = getCaseStudyBySlug(params.slug);
  if (!caseStudy) return {};
  return {
    title: caseStudy.title,
    description: caseStudy.outcome,
  };
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const caseStudy = getCaseStudyBySlug(params.slug);
  if (!caseStudy) notFound();

  return (
    <>
      <div className="relative aspect-[21/9] w-full overflow-hidden">
        {caseStudy.image_urls[0] ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={caseStudy.image_urls[0]}
            alt={caseStudy.title}
            className="h-full w-full object-cover"
          />
        ) : (
          <GradientArt seed={caseStudy.slug} className="h-full w-full" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" />
      </div>

      <section className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
        <Link href="/work" className="text-sm font-semibold text-primary hover:underline">
          ← All work
        </Link>
        <h1 className="mt-6 text-balance font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          {caseStudy.title}
        </h1>
        {caseStudy.industry && (
          <p className="mt-3 text-sm font-semibold uppercase tracking-wide text-accent-600">
            {caseStudy.industry}
          </p>
        )}

        {caseStudy.metrics.length > 0 && (
          <div className="mt-10 grid grid-cols-2 gap-6 rounded-2xl border border-border bg-surface p-6 shadow-card sm:grid-cols-3">
            {caseStudy.metrics.map((metric) => (
              <div key={metric.label}>
                <div className="text-2xl font-bold text-primary">{metric.value}</div>
                <div className="text-xs text-muted">{metric.label}</div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-12 space-y-10">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-accent-600">
              Problem
            </h2>
            <p className="mt-3 text-lg text-ink">{caseStudy.problem}</p>
          </div>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-accent-600">
              Approach
            </h2>
            <p className="mt-3 text-lg text-ink">{caseStudy.approach}</p>
          </div>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-accent-600">
              Outcome
            </h2>
            <p className="mt-3 text-lg text-ink">{caseStudy.outcome}</p>
          </div>
        </div>

        {caseStudy.client_quote && (
          <blockquote className="mt-12 border-l-4 border-accent pl-6 text-lg font-medium italic text-ink">
            &ldquo;{caseStudy.client_quote}&rdquo;
            {caseStudy.client_name && (
              <footer className="mt-2 text-sm font-normal not-italic text-muted">
                — {caseStudy.client_name}
              </footer>
            )}
          </blockquote>
        )}

        {caseStudy.pdf_url && (
          <a
            href={caseStudy.pdf_url}
            className="mt-10 inline-block text-sm font-semibold text-primary hover:underline"
          >
            Download the one-pager →
          </a>
        )}
      </section>

      <CTABand />
    </>
  );
}
