import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Blackline",
  description:
    "Blackline's privacy policy. Learn what data we collect, how it's used, and how to contact us with data requests.",
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: "Privacy Policy | Blackline",
    description: "Blackline's privacy policy covering data collection, usage, and your rights.",
    images: [{ url: "https://blacklinesystem.com/opengraph-image?6932b04a41601f10" }],
  },
};

export default function PrivacyPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-28 pb-10 sm:pt-36 sm:pb-14">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-[#f34749]/[0.06] blur-[100px]" />
        </div>
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mx-auto mt-4 text-muted-foreground">
            Last updated: March 2026
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 pb-20 sm:px-6 sm:pb-28">
        <div className="space-y-10 text-muted-foreground leading-relaxed">

          <div>
            <h2 className="mb-3 text-lg font-semibold text-white">1. Who We Are</h2>
            <p>
              Blackline (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) operates the website at{" "}
              <Link href="https://blacklinesystem.com" className="text-white/60 hover:text-white transition-colors">
                blacklinesystem.com
              </Link>
              . We build done-for-you AI cold email systems for business coaches. If you have any
              questions about this policy, contact us at{" "}
              <a href="mailto:hello@blacklinesystem.com" className="text-white/60 hover:text-white transition-colors">
                hello@blacklinesystem.com
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-lg font-semibold text-white">2. What Data We Collect</h2>
            <p className="mb-3">
              We collect only the information you voluntarily provide when booking a strategy call:
            </p>
            <ul className="space-y-2 list-disc list-inside">
              <li><span className="text-white/90">Name</span> — to address you in our communications</li>
              <li><span className="text-white/90">Email address</span> — to send confirmation and meeting details</li>
              <li><span className="text-white/90">Any additional information</span> you choose to share when scheduling</li>
            </ul>
            <p className="mt-3">
              We do not use tracking cookies beyond standard analytics, and we do not collect payment
              information directly.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-lg font-semibold text-white">3. How We Use Your Data</h2>
            <p className="mb-3">Your information is used solely to:</p>
            <ul className="space-y-2 list-disc list-inside">
              <li>Schedule and confirm your strategy call</li>
              <li>Conduct the call and follow up on our conversation</li>
              <li>Send information about Blackline&apos;s services if you&apos;ve expressed interest</li>
            </ul>
            <p className="mt-3">
              We will not send unsolicited marketing emails. You can opt out at any time by emailing{" "}
              <a href="mailto:hello@blacklinesystem.com" className="text-white/60 hover:text-white transition-colors">
                hello@blacklinesystem.com
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-lg font-semibold text-white">4. We Do Not Sell Your Data</h2>
            <p>
              We do not sell, rent, trade, or otherwise transfer your personal information to third
              parties. Your data is never shared with advertisers, data brokers, or any other
              commercial entities for their own use.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-lg font-semibold text-white">5. Third-Party Services</h2>
            <p>
              Our website uses Cal.com to facilitate strategy call scheduling. When you book a call,
              you are also subject to{" "}
              <a
                href="https://cal.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors"
              >
                Cal.com&apos;s privacy policy
              </a>
              . We may also use standard analytics tools to understand website traffic in aggregate.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-lg font-semibold text-white">6. Data Retention</h2>
            <p>
              We retain your contact information only as long as necessary to fulfill the purpose for
              which it was collected. If you ask us to delete your data, we will do so promptly.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-lg font-semibold text-white">7. Your Rights</h2>
            <p className="mb-3">You have the right to:</p>
            <ul className="space-y-2 list-disc list-inside">
              <li>Request access to the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Opt out of any communications from us at any time</li>
            </ul>
            <p className="mt-3">
              To exercise any of these rights, email{" "}
              <a href="mailto:hello@blacklinesystem.com" className="text-white/60 hover:text-white transition-colors">
                hello@blacklinesystem.com
              </a>
              . We will respond within 30 days.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-lg font-semibold text-white">8. Changes to This Policy</h2>
            <p>
              We may update this policy from time to time. When we do, we will update the
              &ldquo;Last updated&rdquo; date at the top of this page.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-lg font-semibold text-white">9. Contact</h2>
            <p>
              Questions about this privacy policy?{" "}
              <a href="mailto:hello@blacklinesystem.com" className="text-white/60 hover:text-white transition-colors">
                hello@blacklinesystem.com
              </a>
            </p>
          </div>

        </div>
      </section>
    </>
  );
}
