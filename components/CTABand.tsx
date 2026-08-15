import Link from "next/link";

interface CTABandProps {
  heading?: string;
  subheading?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export default function CTABand({
  heading = "Tell us what you're building.",
  subheading,
  ctaLabel = "Start a project",
  ctaHref = "/contact",
}: CTABandProps) {
  return (
    <section className="bg-primary">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-16 text-center">
        <h2 className="text-balance text-3xl font-bold text-white sm:text-4xl">
          {heading}
        </h2>
        {subheading && (
          <p className="max-w-xl text-balance text-primary-50">{subheading}</p>
        )}
        <Link
          href={ctaHref}
          className="rounded-md bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-600"
        >
          {ctaLabel}
        </Link>
      </div>
    </section>
  );
}
