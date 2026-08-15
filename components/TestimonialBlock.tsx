import type { Testimonial } from "@/lib/types";

export default function TestimonialBlock({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="rounded-lg border border-border bg-surface p-8">
      <blockquote className="text-lg font-medium leading-relaxed text-ink">
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
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 text-sm font-semibold text-primary-700">
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
