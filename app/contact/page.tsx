import type { Metadata } from "next";
import ProjectInquiryForm from "@/components/ProjectInquiryForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Tell us what you're building.",
};

const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
const calLink = process.env.NEXT_PUBLIC_CAL_LINK;
const responseCommitment = process.env.NEXT_PUBLIC_RESPONSE_TIME_COMMITMENT;
const inquiryEmail = process.env.NEXT_PUBLIC_INQUIRY_EMAIL;

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
      <div className="grid gap-16 lg:grid-cols-[1.2fr,1fr]">
        <div>
          <h1 className="text-balance font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            Tell us what you&apos;re building.
          </h1>
          <p className="mt-6 max-w-lg text-lg text-muted">
            Give us the shape of the project and we&apos;ll come back with how we&apos;d
            approach it.
          </p>

          <div className="mt-10">
            <ProjectInquiryForm />
          </div>
        </div>

        <aside className="space-y-6">
          {responseCommitment && (
            <div className="rounded-2xl border border-border bg-surface p-6 shadow-card">
              <p className="text-sm text-ink">{responseCommitment}</p>
            </div>
          )}

          {inquiryEmail && (
            <div className="rounded-2xl border border-border p-6 shadow-card">
              <div className="text-sm font-semibold text-ink">Email</div>
              <a
                href={`mailto:${inquiryEmail}`}
                className="mt-1 block text-sm text-primary hover:underline"
              >
                {inquiryEmail}
              </a>
            </div>
          )}

          {whatsappNumber && (
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-2xl border border-border p-6 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-card-hover"
            >
              <div className="text-sm font-semibold text-ink">WhatsApp</div>
              <p className="mt-1 text-sm text-muted">Chat with us directly →</p>
            </a>
          )}

          {calLink && (
            <a
              href={calLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-2xl border border-border p-6 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-card-hover"
            >
              <div className="text-sm font-semibold text-ink">Book a call</div>
              <p className="mt-1 text-sm text-muted">Schedule a discovery call →</p>
            </a>
          )}
        </aside>
      </div>
    </section>
  );
}
