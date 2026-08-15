import type { Testimonial } from "@/lib/types";

export default function TestimonialBlock({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="relative overflow-hidden rounded-2xl border border-border bg-paper p-8 shadow-card">
      <svg
        className="absolute right-6 top-6 h-10 w-10 text-primary-100"
        viewBox="0 0 32 32"
        fill="currentColor"
        aria-hidden
      >
        <path d="M9.3 21.3c-1.5 0-2.7-.5-3.6-1.5-.9-1-1.3-2.2-1.3-3.7 0-2.2.7-4.3 2.1-6.3C8 7.9 9.9 6.2 12.3 5l1.4 2.3c-1.7 1-3 2.1-3.9 3.4-.9 1.3-1.4 2.5-1.5 3.7.4-.2.9-.3 1.5-.3 1.2 0 2.2.4 3 1.2.8.8 1.2 1.8 1.2 3 0 1.3-.4 2.4-1.3 3.2-.8.9-1.9 1.3-3.4 1.3zm14 0c-1.5 0-2.7-.5-3.6-1.5-.9-1-1.3-2.2-1.3-3.7 0-2.2.7-4.3 2.1-6.3C22 7.9 23.9 6.2 26.3 5l1.4 2.3c-1.7 1-3 2.1-3.9 3.4-.9 1.3-1.4 2.5-1.5 3.7.4-.2.9-.3 1.5-.3 1.2 0 2.2.4 3 1.2.8.8 1.2 1.8 1.2 3 0 1.3-.4 2.4-1.3 3.2-.8.9-1.9 1.3-3.4 1.3z" />
      </svg>
      <blockquote className="relative text-lg font-medium leading-relaxed text-ink">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3">
        {testimonial.headshot_url ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={testimonial.headshot_url}
            alt={testimonial.name}
            className="h-10 w-10 rounded-full object-cover"
          />
        ) : (
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-ink text-sm font-semibold text-white">
            {testimonial.name.charAt(0)}
          </div>
        )}
        <div className="text-sm">
          <div className="font-semibold text-ink">{testimonial.name}</div>
          {(testimonial.role || testimonial.company) && (
            <div className="text-muted">
              {[testimonial.role, testimonial.company].filter(Boolean).join(", ")}
            </div>
          )}
        </div>
      </figcaption>
    </figure>
  );
}
