import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-ink text-white">
      <div className="h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-primary via-primary-600 to-white/10">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              </span>
              <span className="font-display text-lg font-semibold">Beyond Tech</span>
            </div>
            <p className="mt-3 max-w-xs text-sm text-white/60">
              Built for African infrastructure realities. Delivered to a global
              standard.
            </p>
          </div>

          <div>
            <div className="text-sm font-semibold uppercase tracking-wide text-white/40">
              Site
            </div>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              <li><Link href="/about" className="hover:text-accent-300">About</Link></li>
              <li><Link href="/services" className="hover:text-accent-300">Services</Link></li>
              <li><Link href="/work" className="hover:text-accent-300">Work</Link></li>
              <li><Link href="/contact" className="hover:text-accent-300">Contact</Link></li>
            </ul>
          </div>

          <div>
            <div className="text-sm font-semibold uppercase tracking-wide text-white/40">
              Company
            </div>
            <p className="mt-4 text-sm text-white/80">
              Beyond Tech is the technology subsidiary of Beyond Group Ltd.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Beyond Tech. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
