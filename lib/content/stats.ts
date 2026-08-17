import { getCaseStudies } from "@/lib/content/case-studies";
import { getServices } from "@/lib/content/services";

// Every number here is derived from real, already-published content — see
// the "no filler content" rule in case-studies.ts. Never hardcode a claim
// here that isn't traceable back to a case study or service entry.
export interface SiteStat {
  value: string;
  label: string;
}

export function getSiteStats(): SiteStat[] {
  const caseStudies = getCaseStudies();
  const services = getServices();
  const bos = caseStudies.find((cs) => cs.slug === "beyond-operations-system");
  const teamMetric = bos?.metrics.find((m) => m.value === "7");

  const stats: SiteStat[] = [
    {
      value: String(caseStudies.length),
      label: caseStudies.length === 1 ? "platform built & live" : "platforms built & live",
    },
  ];

  if (teamMetric) {
    stats.push({ value: teamMetric.value, label: "people running daily work through them" });
  }

  stats.push({ value: String(services.length), label: "disciplines we work in" });

  return stats;
}
