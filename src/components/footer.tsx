import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-[#111111]">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo.svg"
                alt="Blackline - AI Cold Email Systems"
                className="h-7 w-auto"
              />
            </Link>
            <p className="mt-3 text-sm text-muted-foreground">
              Blackline builds done-for-you AI cold email systems
              that book qualified discovery calls for coaches and consultants.
              Custom-built and launched in 14 days.
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
                  className="hover:text-white transition-colors"
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

        <div className="mt-10 border-t border-white/[0.06] pt-6 text-center text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Blackline. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
