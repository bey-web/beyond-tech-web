import type { ProcessStep } from "@/lib/types";

// Draft copy describing how engagements run — review before publishing.
export const process: ProcessStep[] = [
  {
    step: "01",
    title: "Discover",
    description: "We start with how the business actually operates, not just the brief — the systems, constraints, and infrastructure realities already in play.",
  },
  {
    step: "02",
    title: "Design",
    description: "Architecture and interface get worked out before code does, so what gets built is what the business actually needs running.",
  },
  {
    step: "03",
    title: "Build",
    description: "Delivery happens in visible, working increments — not a single handoff at the end with no chance to course-correct.",
  },
  {
    step: "04",
    title: "Deliver & Support",
    description: "Launch is the start of the relationship, not the end of it. We stay attached to what we build.",
  },
];
