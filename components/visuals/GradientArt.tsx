const PALETTES: Array<{ from: string; via: string; to: string; shape: "orbit" | "waves" | "grid" }> = [
  { from: "#1B3A8A", via: "#2E4FAE", to: "#0A0E17", shape: "orbit" },
  { from: "#D97706", via: "#B45F04", to: "#0A0E17", shape: "waves" },
  { from: "#152E6E", via: "#D97706", to: "#0A0E17", shape: "grid" },
];

function hashSeed(seed: string) {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = (hash << 5) - hash + seed.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

/**
 * Deterministic, per-slug abstract cover art — stands in for real product
 * photography until case studies have their own screenshots/photos.
 */
export default function GradientArt({
  seed,
  label,
  className = "",
}: {
  seed: string;
  label?: string;
  className?: string;
}) {
  const hash = hashSeed(seed);
  const palette = PALETTES[hash % PALETTES.length];
  const rotate = hash % 40;
  const offsetX = 20 + (hash % 40);
  const offsetY = 15 + ((hash >> 3) % 30);

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{
        background: `linear-gradient(135deg, ${palette.from}, ${palette.via} 55%, ${palette.to})`,
      }}
      aria-hidden={label ? undefined : true}
    >
      <div className="absolute inset-0 bg-noise mix-blend-overlay" />

      {palette.shape === "orbit" && (
        <svg
          className="absolute inset-0 h-full w-full opacity-70"
          viewBox="0 0 400 300"
          preserveAspectRatio="xMidYMid slice"
        >
          <circle cx={offsetX * 4} cy={offsetY * 4} r="120" fill="none" stroke="white" strokeOpacity="0.18" strokeWidth="1" />
          <circle cx={offsetX * 4} cy={offsetY * 4} r="80" fill="none" stroke="white" strokeOpacity="0.28" strokeWidth="1" />
          <circle cx={offsetX * 4} cy={offsetY * 4} r="6" fill="#D97706" />
          <circle cx={offsetX * 4 + 90} cy={offsetY * 4 - 40} r="3" fill="white" fillOpacity="0.8" />
        </svg>
      )}

      {palette.shape === "waves" && (
        <svg
          className="absolute inset-0 h-full w-full opacity-60"
          viewBox="0 0 400 300"
          preserveAspectRatio="xMidYMid slice"
        >
          <path d="M-20 180 C 80 140, 160 220, 260 160 S 420 140, 460 180" fill="none" stroke="white" strokeOpacity="0.3" strokeWidth="1.5" />
          <path d="M-20 220 C 80 180, 160 260, 260 200 S 420 180, 460 220" fill="none" stroke="white" strokeOpacity="0.2" strokeWidth="1.5" />
          <path d="M-20 140 C 80 100, 160 180, 260 120 S 420 100, 460 140" fill="none" stroke="#F5C077" strokeOpacity="0.4" strokeWidth="1.5" />
        </svg>
      )}

      {palette.shape === "grid" && (
        <svg
          className="absolute inset-0 h-full w-full opacity-50"
          viewBox="0 0 400 300"
          preserveAspectRatio="xMidYMid slice"
        >
          <g transform={`rotate(${rotate} 200 150)`}>
            {Array.from({ length: 6 }).map((_, i) => (
              <line key={`v${i}`} x1={i * 70} y1="-50" x2={i * 70} y2="350" stroke="white" strokeOpacity="0.14" />
            ))}
            {Array.from({ length: 5 }).map((_, i) => (
              <line key={`h${i}`} x1="-50" y1={i * 70} x2="450" y2={i * 70} stroke="white" strokeOpacity="0.14" />
            ))}
          </g>
          <circle cx={offsetX * 4} cy={offsetY * 4} r="5" fill="#D97706" />
        </svg>
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />

      {label && (
        <div className="absolute inset-0 flex items-end p-6">
          <span className="text-sm font-semibold text-white/90">{label}</span>
        </div>
      )}
    </div>
  );
}
