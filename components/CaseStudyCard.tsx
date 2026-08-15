import Link from "next/link";
import type { CaseStudy } from "@/lib/types";
import GradientArt from "@/components/visuals/GradientArt";

const SERVICE_LABELS: Record<CaseStudy["service_type"], string> = {
  business_technology: "Business Technology",
  digital_presence: "Digital Presence",
  technology_partnership: "Technology Partnership",
};

export default function CaseStudyCard({ caseStudy }: { caseStudy: CaseStudy }) {
  const headlineMetric = caseStudy.metrics[0];

  return (
    <Link
      href={`/work/${caseStudy.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-paper shadow-card transition-all hover:-translate-y-1 hover:shadow-card-hover"
    >
      <div className="aspect-[16/10] w-full overflow-hidden">
        {caseStudy.image_urls[0] ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={caseStudy.image_urls[0]}
            alt={caseStudy.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <GradientArt
            seed={caseStudy.slug}
            className="h-full w-full transition-transform duration-500 group-hover:scale-105"
          />
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-6">
        <span className="text-xs font-semibold uppercase tracking-wide text-accent-600">
          {SERVICE_LABELS[caseStudy.service_type]}
        </span>
        <h3 className="font-display text-lg font-semibold text-ink">{caseStudy.title}</h3>
        <p className="line-clamp-2 text-sm text-muted">{caseStudy.outcome}</p>

        {headlineMetric && (
          <div className="mt-auto pt-2">
            <span className="text-2xl font-bold text-primary">{headlineMetric.value}</span>
            <span className="ml-2 text-xs text-muted">{headlineMetric.label}</span>
          </div>
        )}
      </div>
    </Link>
  );
}
