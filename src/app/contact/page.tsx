import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Mail, Clock, Shield, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Book a Strategy Call — Blackline Cold Email Systems for Business Coaches",
  description:
    "Book a free strategy call with Blackline. We'll map your ICP, outline your outbound infrastructure, and show you exactly what 8–15 qualified discovery calls per month looks like for your coaching business. No obligation.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden pt-28 pb-10 sm:pt-36 sm:pb-14">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-[#f34749]/[0.06] blur-[100px]" />
        </div>
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
          <Badge
            variant="outline"
            className="mb-4 border-[#f34749]/30 text-[#f34749]"
          >
            Book a Strategy Call
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Ready to{" "}
            <span className="gradient-text">Fill Your Calendar?</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            Grab an hour with us. We&apos;ll dig into your business, your buyers,
            and your goals — then show you exactly what a custom outbound system
            looks like for your coaching niche. No pitch deck. No pressure.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <Clock size={16} className="text-[#f34749]" /> 60-min strategy session
            </span>
            <span className="flex items-center gap-2">
              <Shield size={16} className="text-[#f34749]" /> Zero obligation
            </span>
            <span className="flex items-center gap-2">
              <Mail size={16} className="text-[#f34749]" /> Instant confirmation
            </span>
          </div>
        </div>
      </section>

      {/* What We Cover */}
      <section className="mx-auto max-w-4xl px-4 pb-10 sm:px-6">
        <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] px-6 py-8 sm:px-10">
          <h2 className="mb-5 text-lg font-semibold text-white">
            On the call, we&apos;ll:
          </h2>
          <ul className="space-y-3">
            {[
              "Map your ideal client profile — who they are, where they are, and what makes them a buyer",
              "Design your outbound infrastructure: domains, mailboxes, warmup timeline, and send volume",
              "Outline your sequencing strategy and the messaging angles that work for your niche",
              "Give you honest projections for what to expect and when — including the 90-day ramp",
              "Walk through what a custom system built for your specific offer looks like end-to-end",
              "Answer any questions — zero sales pressure, zero commitment required",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                <Check size={16} className="mt-0.5 shrink-0 text-[#f34749]" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Cal.com Embed */}
      <section className="mx-auto max-w-4xl px-4 pb-20 sm:px-6 sm:pb-28">
        <div className="overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02]">
          <iframe
            src="https://cal.com/nicholastochev/60min?embed=true&theme=dark"
            className="h-[700px] w-full border-0"
            title="Book a Strategy Call"
            loading="lazy"
          />
        </div>
        <div className="mt-6 text-center">
          <p className="text-sm text-muted-foreground">
            Prefer email?{" "}
            <a
              href="mailto:hello@blacklinesystem.com"
              className="text-[#f34749] hover:text-[#ff6b6b] transition-colors"
            >
              hello@blacklinesystem.com
            </a>
          </p>
          <p className="mt-2 text-xs text-muted-foreground">
            You&apos;ll get a confirmation email with meeting details instantly.
          </p>
        </div>
      </section>
    </>
  );
}
