import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import CTABand from "@/components/CTABand";
import { getServiceBySlug, getServices } from "@/lib/content/services";

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
        <h1 className="mt-6 text-balance text-4xl font-bold tracking-tight text-ink sm:text-5xl">
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
