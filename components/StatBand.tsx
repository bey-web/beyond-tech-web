import { getSiteStats } from "@/lib/content/stats";

export default function StatBand() {
  const stats = getSiteStats();
  if (stats.length === 0) return null;

  return (
    <section className="relative overflow-hidden bg-ink py-16">
      <div className="absolute inset-0 bg-grid-pattern bg-[size:48px_48px] opacity-40" />
      <div className="relative mx-auto max-w-6xl px-6">
        <p className="mx-auto max-w-2xl text-balance text-center font-display text-lg font-medium text-white sm:text-xl">
          Built for African infrastructure realities. Delivered to a global
          standard.
        </p>
        <div className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-8 divide-y divide-white/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1.5 pt-8 text-center first:pt-0 sm:px-6 sm:pt-0">
              <span className="font-display text-4xl font-semibold text-white sm:text-5xl">
                {stat.value}
              </span>
              <span className="max-w-[16ch] text-sm text-white/60">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
