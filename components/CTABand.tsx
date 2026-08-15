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
    <section className="relative overflow-hidden bg-ink">
      <div className="absolute inset-0 bg-mesh" />
      <div className="absolute inset-0 bg-grid-pattern bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_70%_80%_at_50%_50%,black,transparent)]" />
      <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/25 blur-[100px]" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-20 text-center">
        <h2 className="text-balance font-display text-3xl font-semibold text-white sm:text-4xl">
          {heading}
        </h2>
        {subheading && (
          <p className="max-w-xl text-balance text-white/70">{subheading}</p>
        )}
        <Link
          href={ctaHref}
          className="rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-white shadow-glow transition-all hover:-translate-y-0.5 hover:bg-accent-600"
        >
          {ctaLabel}
        </Link>
      </div>
    </section>
  );
}
