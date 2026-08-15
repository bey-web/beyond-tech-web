import type { Service } from "@/lib/types";

// Seed content — mirrors the `services` table shape exactly so this can be
// swapped for a Supabase query with no change to callers once the project
// is live. Draft copy: review before publishing, this is not copy supplied
// in the brief.
export const services: Service[] = [
  {
    id: "business-technology",
    slug: "business-technology",
    division: "business_technology",
    title: "Business Technology",
    summary: "Custom systems that run your operations, not just describe them.",
    body: `We build the internal platforms businesses run on: operations systems, workflow tools, finance and inventory logic, and the integrations that connect them. This is the discipline behind Beyond Operations System — software built to be depended on daily, not demoed once and shelved.`,
  },
  {
    id: "digital-presence",
    slug: "digital-presence",
    division: "digital_presence",
    title: "Digital Presence",
    summary: "Websites and digital products that meet a global bar for credibility.",
    body: `We design and build the websites, web applications, and digital storefronts that are often the first — and sometimes only — impression a business makes on a client, partner, or investor. Built on modern, maintainable stacks, not templated builders.`,
  },
  {
    id: "technology-partnership",
    slug: "technology-partnership",
    division: "technology_partnership",
    title: "Technology Partnership",
    summary: "Ongoing technical capacity for businesses that need a partner, not a vendor.",
    body: `For businesses that need continuous technical capacity — a fractional technical team, systems maintenance, and a partner who understands the business, not just the ticket queue. We embed with your team rather than disappearing after handoff.`,
  },
];

export function getServices(): Service[] {
  return services;
}

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
