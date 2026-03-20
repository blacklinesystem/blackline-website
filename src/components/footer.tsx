import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-[#111111]">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">

          {/* Brand — wider column */}
          <div className="lg:col-span-2">
            <Link href="/">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo.svg"
                alt="Blackline - AI Cold Email Systems"
                className="h-7 w-auto"
              />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Blackline builds done-for-you AI cold email systems
              that fill your calendar with qualified discovery calls.
              Custom-built for business coaches and consultants.
            </p>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold text-white">Navigate</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/how-it-works" className="hover:text-white transition-colors">How It Works</Link></li>
              <li><Link href="/our-work" className="hover:text-white transition-colors">Our Work</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold text-white">What We Build</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>ICP Workshop &amp; Strategy</li>
              <li>Outbound Infrastructure</li>
              <li>Targeted Lead Sourcing</li>
              <li>AI-Powered Email Copy</li>
              <li>Campaign Management</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold text-white">Get in Touch</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href="mailto:hello@blacklinesystem.com"
                  className="hover:text-white transition-colors break-all"
                >
                  hello@blacklinesystem.com
                </a>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Book a Strategy Call
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-2 border-t border-white/[0.06] pt-6 text-xs text-muted-foreground sm:flex-row">
          <span>&copy; {new Date().getFullYear()} Blackline. All rights reserved.</span>
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}
