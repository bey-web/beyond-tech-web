import Link from "next/link";

interface ProofStripItem {
  label: string;
  href?: string;
}

const PLATFORMS: ProofStripItem[] = [
  { label: "Beyond Operations System" },
  { label: "G&S SmartSplit" },
  { label: "the GLN network platform" },
];

export default function ProofStrip() {
  return (
    <section className="border-y border-border bg-surface">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-8 text-center md:flex-row md:justify-center md:gap-8 md:text-left">
        <p className="text-sm font-medium text-muted">
          Enterprise platforms built and running today:
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {PLATFORMS.map((platform) =>
            platform.href ? (
              <Link
                key={platform.label}
                href={platform.href}
                className="inline-flex items-center gap-2 text-sm font-semibold text-ink transition-colors hover:text-primary"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                {platform.label}
              </Link>
            ) : (
              <span key={platform.label} className="inline-flex items-center gap-2 text-sm font-semibold text-ink">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                {platform.label}
              </span>
            )
          )}
        </div>
      </div>
    </section>
  );
}
