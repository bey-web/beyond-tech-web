import Link from "next/link";

const inquiryEmail = process.env.NEXT_PUBLIC_INQUIRY_EMAIL;
const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-ink text-white">
      <div className="h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />
      <div className="absolute inset-0 bg-grid-pattern bg-[size:56px_56px] opacity-30" />
      <div className="relative mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2.5">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-primary via-primary-600 to-white/10">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              </span>
              <span className="font-display text-lg font-semibold">Beyond Tech</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
              Built for African infrastructure realities. Delivered to a
              global standard. Beyond Tech is the technology subsidiary of
              Beyond Group Ltd.
            </p>
          </div>

          <div>
            <div className="text-xs font-semibold uppercase tracking-wide text-white/40">
              Site
            </div>
            <ul className="mt-4 space-y-2.5 text-sm text-white/80">
              <li><Link href="/about" className="transition-colors hover:text-accent-300">About</Link></li>
              <li><Link href="/services" className="transition-colors hover:text-accent-300">Services</Link></li>
              <li><Link href="/work" className="transition-colors hover:text-accent-300">Work</Link></li>
              <li><Link href="/contact" className="transition-colors hover:text-accent-300">Contact</Link></li>
            </ul>
          </div>

          <div>
            <div className="text-xs font-semibold uppercase tracking-wide text-white/40">
              Get in touch
            </div>
            <ul className="mt-4 space-y-2.5 text-sm text-white/80">
              {inquiryEmail && (
                <li>
                  <a href={`mailto:${inquiryEmail}`} className="transition-colors hover:text-accent-300">
                    {inquiryEmail}
                  </a>
                </li>
              )}
              {whatsappNumber && (
                <li>
                  <a
                    href={`https://wa.me/${whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-accent-300"
                  >
                    WhatsApp us →
                  </a>
                </li>
              )}
              <li>
                <Link href="/contact" className="transition-colors hover:text-accent-300">
                  Start a project →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Beyond Tech. All rights reserved.</span>
          <span>A Beyond Group Ltd company</span>
        </div>
      </div>
    </footer>
  );
}
