import type { CaseStudy } from "@/lib/types";

// No case studies are seeded yet. The Work page is the credibility engine
// of this site and must never render placeholder/filler content — see
// Developer Build Specification, Project 3, Phase 1 task list.
//
// Populate this array with real, permissioned case study content
// (Beyond Operations System, G&S SmartSplit once client permission is
// confirmed, the GLN network platform) before launch. Shape matches the
// `case_studies` table exactly so this swaps for a Supabase query with no
// change to callers once the project is live.
export const caseStudies: CaseStudy[] = [];

export function getCaseStudies(): CaseStudy[] {
  return caseStudies.filter((c) => c.published_at !== null);
}

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug && c.published_at !== null);
}
