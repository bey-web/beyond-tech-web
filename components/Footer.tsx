import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-ink text-white">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="text-lg font-semibold">Beyond Tech</div>
            <p className="mt-3 max-w-xs text-sm text-white/70">
              Built for African infrastructure realities. Delivered to a global
              standard.
            </p>
          </div>

          <div>
            <div className="text-sm font-semibold uppercase tracking-wide text-white/50">
              Site
            </div>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              <li><Link href="/about" className="hover:text-white">About</Link></li>
              <li><Link href="/services" className="hover:text-white">Services</Link></li>
              <li><Link href="/work" className="hover:text-white">Work</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          <div>
            <div className="text-sm font-semibold uppercase tracking-wide text-white/50">
              Company
            </div>
            <p className="mt-4 text-sm text-white/80">
              Beyond Tech is the technology subsidiary of Beyond Group Ltd.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Beyond Tech. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
