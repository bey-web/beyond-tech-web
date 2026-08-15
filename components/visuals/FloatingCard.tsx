const GRADIENTS = {
  orbit: "from-primary via-primary-600 to-ink",
  waves: "from-accent via-accent-600 to-ink",
  grid: "from-primary-700 via-accent to-ink",
} as const;

const BARS = [42, 68, 48, 84, 58, 72];

export default function FloatingCard({
  title,
  tag,
  gradient = "orbit",
  className = "",
  delay = "0s",
}: {
  title: string;
  tag: string;
  gradient?: keyof typeof GRADIENTS;
  className?: string;
  delay?: string;
}) {
  return (
    <div
      className={`animate-float rounded-2xl border border-white/10 bg-white/5 p-4 shadow-2xl backdrop-blur-xl ${className}`}
      style={{ animationDelay: delay }}
    >
      <div className={`h-24 w-full overflow-hidden rounded-xl bg-gradient-to-br p-3 ${GRADIENTS[gradient]}`}>
        <div className="flex gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
          <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
          <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
        </div>
        <div className="mt-4 flex h-10 items-end gap-1.5">
          {BARS.map((h, i) => (
            <span
              key={i}
              className="w-full rounded-sm bg-white/50"
              style={{ height: `${h * 0.4}px` }}
            />
          ))}
        </div>
      </div>
      <div className="mt-3">
        <div className="text-sm font-semibold text-white">{title}</div>
        <div className="mt-0.5 text-xs text-white/50">{tag}</div>
      </div>
    </div>
  );
}
