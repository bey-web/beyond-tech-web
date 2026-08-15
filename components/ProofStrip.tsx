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
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-8 text-center md:flex-row md:justify-center md:gap-6 md:text-left">
        <p className="text-sm font-medium text-muted">
          Enterprise platforms built and running today:
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {PLATFORMS.map((platform) =>
            platform.href ? (
              <Link
                key={platform.label}
                href={platform.href}
                className="text-sm font-semibold text-ink underline decoration-accent decoration-2 underline-offset-4 hover:text-primary"
              >
                {platform.label}
              </Link>
            ) : (
              <span key={platform.label} className="text-sm font-semibold text-ink">
                {platform.label}
              </span>
            )
          )}
        </div>
      </div>
    </section>
  );
}
