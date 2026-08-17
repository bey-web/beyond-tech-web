import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import CTABand from "@/components/CTABand";
import { getServiceBySlug, getServices } from "@/lib/content/services";
import { SERVICE_ICONS } from "@/lib/content/icons";

export function generateStaticParams() {
  return getServices().map((service) => ({ slug: service.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = getServiceBySlug(params.slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.summary,
  };
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = getServiceBySlug(params.slug);
  if (!service) notFound();

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.title,
    description: service.summary,
    provider: {
      "@type": "Organization",
      name: "Beyond Tech",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <section className="mx-auto max-w-3xl px-6 py-20 sm:py-28">
        <Link href="/services" className="text-sm font-semibold text-primary hover:underline">
          ← All services
        </Link>
        <span className="mt-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-ink text-white shadow-glow-primary">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
            <path d={SERVICE_ICONS[service.division] ?? SERVICE_ICONS.business_technology} />
          </svg>
        </span>
        <h1 className="mt-6 text-balance font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          {service.title}
        </h1>
        <p className="mt-4 text-balance text-lg text-muted">{service.summary}</p>
        <div className="prose prose-slate mt-10 max-w-none prose-headings:text-ink prose-p:text-muted">
          <ReactMarkdown>{service.body}</ReactMarkdown>
        </div>
      </section>

      <CTABand />
    </>
  );
}
