"use client";

import { useState } from "react";
import { getServices } from "@/lib/content/services";

const services = getServices();

export default function ProjectInquiryForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Not wired yet — this form is UI-only until the Supabase project,
    // notification inbox, and Brevo integration are in place. See the
    // Phase 1 task list, Project 3, in the Developer Build Specification.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-lg border border-border bg-surface p-8 text-center">
        <p className="text-ink">
          Thanks — form submission isn&apos;t connected yet, so this inquiry
          wasn&apos;t saved. Please reach out by email or WhatsApp for now.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-medium text-ink">
            Name *
          </label>
          <input
            id="name"
            name="name"
            required
            type="text"
            className="mt-2 w-full rounded-md border border-border px-3 py-2 text-sm focus:border-primary focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="company" className="text-sm font-medium text-ink">
            Company
          </label>
          <input
            id="company"
            name="company"
            type="text"
            className="mt-2 w-full rounded-md border border-border px-3 py-2 text-sm focus:border-primary focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-medium text-ink">
            Email *
          </label>
          <input
            id="email"
            name="email"
            required
            type="email"
            className="mt-2 w-full rounded-md border border-border px-3 py-2 text-sm focus:border-primary focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="phone" className="text-sm font-medium text-ink">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="mt-2 w-full rounded-md border border-border px-3 py-2 text-sm focus:border-primary focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="project_type" className="text-sm font-medium text-ink">
            Project type
          </label>
          <select
            id="project_type"
            name="project_type"
            className="mt-2 w-full rounded-md border border-border bg-paper px-3 py-2 text-sm focus:border-primary focus:outline-none"
          >
            <option value="">Select one</option>
            {services.map((s) => (
              <option key={s.slug} value={s.slug}>
                {s.title}
              </option>
            ))}
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="budget_range" className="text-sm font-medium text-ink">
            Budget range
          </label>
          <input
            id="budget_range"
            name="budget_range"
            type="text"
            placeholder="e.g. 3M–8M XAF"
            className="mt-2 w-full rounded-md border border-border px-3 py-2 text-sm focus:border-primary focus:outline-none"
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="timeline" className="text-sm font-medium text-ink">
            Timeline
          </label>
          <input
            id="timeline"
            name="timeline"
            type="text"
            placeholder="e.g. Launch in Q1"
            className="mt-2 w-full rounded-md border border-border px-3 py-2 text-sm focus:border-primary focus:outline-none"
          />
        </div>
      </div>

      <div>
        <label htmlFor="description" className="text-sm font-medium text-ink">
          What are you building? *
        </label>
        <textarea
          id="description"
          name="description"
          required
          rows={5}
          className="mt-2 w-full rounded-md border border-border px-3 py-2 text-sm focus:border-primary focus:outline-none"
        />
      </div>

      <button
        type="submit"
        className="rounded-md bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-700"
      >
        Send inquiry
      </button>
    </form>
  );
}
