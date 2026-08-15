import type { CaseStudy } from "@/lib/types";

// The Work page is the credibility engine of this site and must never
// render placeholder/filler content — see Developer Build Specification,
// Project 3, Phase 1 task list. Every entry below is real content supplied
// by the founder. Shape matches the `case_studies` table exactly so this
// swaps for a Supabase query with no change to callers once the project
// is live.
export const caseStudies: CaseStudy[] = [
  {
    id: "bos",
    slug: "beyond-operations-system",
    title: "Beyond Operations System (BOS)",
    industry: "Internal Operations",
    service_type: "business_technology",
    problem:
      "Beyond Group had no single system for running the business day to day. Tasks weren't tracked, accountability was informal, and employees could go unproductive without it showing anywhere. Getting a report on any employee, subsidiary, or project meant manually asking for it — which slowed the business down and created friction with the team. There was also no structured way for the founder to track his own development, learning, or personal finances alongside the business.",
    approach:
      "Built BOS as one internal platform covering: daily task-setting and tracking with clear accountability (who reports to whom), attendance and clock-in, one-click reporting across any employee, subsidiary, system, project, or task, team chat and collaboration, and a personal layer for the founder's own learning tracking and finance management.",
    outcome:
      "Every subsidiary now runs through one platform — currently 7 people (4 core team members, 1 apprentice, and 2 running Beyond Tech subsidiary projects) do their daily work through it. Every task carries a visible status and owner, and work requires evidence, closing the gap that used to let output go unnoticed. Financial and inventory reporting across every subsidiary and asset now takes one click, replacing what used to be a manual, back-and-forth request.",
    metrics: [
      { label: "team members & subsidiary collaborators running daily work through BOS", value: "7" },
      { label: "financial, inventory & asset reporting turnaround", value: "1 click" },
    ],
    image_urls: [],
    published_at: "2026-08-15T00:00:00.000Z",
  },
  {
    id: "gln",
    slug: "gln-network-platform",
    title: "GLN Network Platform",
    industry: "Network Marketing",
    service_type: "business_technology",
    problem:
      "Network marketers — including the founder personally — struggled with a consistent flow of prospects. People new to the industry had no structured method, so outreach was inconsistent and unprofessional. There was no systematic, teachable way to grow, especially for someone brand new who needed to start training and mentoring their own team immediately. And structurally, the network itself lived inside whichever partner company's platform was being used — so when a partner company collapsed, the entire downline had to be rebuilt from zero.",
    approach:
      "Built GLN as a platform independent of any single partner company, giving leaders replica websites to position and represent their own business, structured leadership-development tracks, a program to help members steward their resources wisely, and continuous, systematic engagement with the digital market in place of guesswork. The platform runs on two membership classes — Executive leaders, who maintain the system and ensure it runs properly, and Leaders, organized into their own tiers, who use it to grow their business — alongside open access for visitors exploring leadership content.",
    outcome:
      "GLN is live and already has leader-subscribers actively using it. The network is now durable — it lives in GLN, not inside a partner company's system, so it survives a partner collapse instead of resetting to zero. Beyond Group is now building toward a mass-recruitment push at the end of this month to scale the leader base.",
    metrics: [],
    image_urls: [],
    published_at: "2026-08-15T00:00:00.000Z",
  },
  {
    id: "gs-smartsplit",
    slug: "gs-smartsplit",
    title: "G&S SmartSplit",
    industry: "Beauty & Delivery Services",
    service_type: "business_technology",
    problem:
      "G&S — a business operating in beauty and delivery services — had the same operational visibility gap BOS was built to solve. On top of that, financially: money wasn't managed with intention. Revenue and expenses drifted without a system tracking where they were going, and by the time it was noticed, the money was already gone.",
    approach:
      "Built G&S SmartSplit, combining BOS-style operations management (task tracking, accountability, reporting) with a treasury layer that automatically channels revenue and expenses into designated pockets for different purposes, so funds are allocated with intention instead of left to drift.",
    outcome:
      // TODO — pending: real outcome details, any metrics, and client-permission
      // confirmation from G&S before this can be published. Not shown publicly
      // while published_at is null.
      "Outcome pending confirmation — do not publish until this is filled in and permission is confirmed.",
    metrics: [],
    image_urls: [],
    published_at: null,
  },
];

export function getCaseStudies(): CaseStudy[] {
  return caseStudies.filter((c) => c.published_at !== null);
}

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug && c.published_at !== null);
}

// Draft/unpublished case studies — visible only via this accessor, never
// rendered on the public Work page. Useful for admin preview tooling later.
export function getDraftCaseStudies(): CaseStudy[] {
  return caseStudies.filter((c) => c.published_at === null);
}
