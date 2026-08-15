import type { Testimonial } from "@/lib/types";

// No testimonials are seeded yet — same "show, don't claim" rule as case
// studies applies: don't publish a quote without a real client and their
// permission. Populate before launch.
export const testimonials: Testimonial[] = [];

export function getTestimonials(): Testimonial[] {
  return testimonials;
}
