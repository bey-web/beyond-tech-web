import type { MetadataRoute } from "next";
import { getServices } from "@/lib/content/services";
import { getCaseStudies } from "@/lib/content/case-studies";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://beyondtech.africa";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/about", "/services", "/work", "/contact"].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
  }));

  const serviceRoutes = getServices().map((s) => ({
    url: `${siteUrl}/services/${s.slug}`,
    lastModified: new Date(),
  }));

  const caseStudyRoutes = getCaseStudies().map((cs) => ({
    url: `${siteUrl}/work/${cs.slug}`,
    lastModified: cs.published_at ? new Date(cs.published_at) : new Date(),
  }));

  return [...staticRoutes, ...serviceRoutes, ...caseStudyRoutes];
}
