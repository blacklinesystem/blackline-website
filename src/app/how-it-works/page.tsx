import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  Server,
  Users,
  PenTool,
  Rocket,
  ArrowRight,
  Check,
} from "lucide-react";

export const metadata: Metadata = {
  title: "How It Works | Blackline's AI Cold Email System for Business Coaches",
  description:
    "See the five-component system Blackline builds for business coaches: ICP strategy, outbound infrastructure, lead sourcing, AI-personalized copy, and campaign management. All done for you.",
  alternates: { canonical: "/how-it-works" },
  openGraph: {
    title: "How It Works | Blackline Cold Email Systems",
    description:
      "Five components. Every one non-negotiable. See how Blackline builds your entire cold email engine from ICP strategy to booked calls.",
    images: [{ url: "https://blacklinesystem.com/opengraph-image?6932b04a41601f10" }],
  },
};

const steps = [
  {
    icon: Search,
    title: "ICP Workshop & Outbound Strategy",
    timeline: "Month 1 · Week 1",
    description:
      "This is where most agencies cut corners. We don't. We run a structured ICP workshop to reverse-engineer your best clients: who they are, what keeps them up at night, and exactly why they hired a coach. The output is a precision outbound playbook: your ideal client profile, messaging angles, sequence architecture, and targeting criteria. Not a generic template. A strategy built around your specific offer and your specific market.",
    deliverables: [
      "Structured ICP workshop (live call with our team)",
      "Ideal client profile document with firmographic and psychographic criteria",
      "Messaging framework built around your coaching offer",
      "Multi-angle outbound strategy with sequence architecture",
      "Target prospect criteria that filters for buyers, not browsers",
    ],
  },
  {
    icon: Server,
    title: "Infrastructure Build",
    timeline: "Month 1 · Weeks 1–4",
    description:
      "Your emails are worthless if they land in spam. We build a sending infrastructure from the ground up that email providers actually trust. 10–15 custom sending domains purchased and configured, 30–45 authenticated mailboxes with SPF, DKIM, and DMARC, and a 30-day warmup protocol that builds real sender reputation before a single campaign email goes out. The warmup phase is non-negotiable. It's what separates a system that works from one that gets blacklisted.",
    deliverables: [
      "10–15 custom sending domains purchased and fully configured",
      "30–45 mailboxes created with SPF, DKIM, DMARC authentication",
      "30-day domain warmup protocol across all accounts",
      "Enterprise cold email platform (Instantly or Smartlead) setup and configured",
      "Deliverability monitoring and inbox placement verification",
    ],
  },
  {
    icon: Users,
    title: "Targeted Lead Sourcing & Verification",
    timeline: "Month 1 · Weeks 2–3",
    description:
      "Garbage leads produce garbage results. We source 500–1,000+ verified prospects from Apollo.io and other premium databases, filtered precisely to your ICP criteria. Every contact goes through multi-step email verification to keep bounce rates under 2%. Contacts are enriched with the personalization data points we need to make every email feel like it was written specifically for that person. Not mass-blasted.",
    deliverables: [
      "500–1,000+ targeted prospects matching your exact ICP (monthly refresh)",
      "Multi-step verification with bounce rate under 2%",
      "Contact enrichment with company and role-specific data points",
      "Segmented lists for A/B testing and sequence personalization",
      "Ongoing list building as campaigns scale",
    ],
  },
  {
    icon: PenTool,
    title: "AI-Personalized Email Sequences",
    timeline: "Month 1 · Weeks 3–4",
    description:
      "Nobody replies to 'I hope this email finds you well.' Our copywriting process uses AI to generate hyper-personalized sequences and refines them to read like they came from a trusted peer. Not a sales pitch. Every email earns the next open. Every follow-up adds value instead of pushing harder. We write a 5–7 touch framework with multiple messaging angles built in from the start for A/B testing.",
    deliverables: [
      "5–7 step email sequences built around your ICP and offer",
      "AI-personalized openers using prospect-specific research",
      "Subject lines A/B tested for open rate, not clickbait",
      "Multiple messaging angles for testing across segments",
      "Follow-up sequences that handle common objections naturally",
    ],
  },
  {
    icon: Rocket,
    title: "Campaign Management & Optimization",
    timeline: "Month 2+",
    description:
      "Campaigns go live with controlled volume ramps and real-time monitoring. From the first send, we track replies, positive sentiment, and meetings booked. Then we optimize: new subject lines, tighter copy, better targeting angles. Every week the system gets sharper. First meetings start booking in weeks 6–8. By month 4, most coaches are seeing 8–15 qualified calls per month. This is not a set-it-and-forget-it service. It is a continuously improving outbound machine.",
    deliverables: [
      "Campaign launch with controlled sending volume ramps",
      "Reply monitoring, prospect qualification, and calendar booking",
      "Real-time deliverability and sender reputation monitoring",
      "Continuous A/B testing on subject lines, copy, and send timing",
      "Weekly performance reports with optimization recommendations",
      "Bi-weekly strategy calls to review results and adjust targeting",
    ],
  },
];

const monthLabels = ["Mo 1", "Mo 1", "Mo 1", "Mo 1", "Mo 2+"];

export default function HowItWorksPage() {
  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-[#f34749]/[0.06] blur-[100px]" />
        </div>
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
          <Badge
            variant="outline"
            className="mb-4 border-[#f34749]/30 text-[#f34749]"
          >
            The Process
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            The{" "}
            <span className="gradient-text">90-Day System</span>{" "}
            That Fills Your Calendar
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            We&apos;re honest about timelines. Cold email isn&apos;t instant.
            Here&apos;s the real process: what happens each month, what to expect,
            and when the meetings start showing up.
          </p>
        </div>
      </section>

      {/* Progress bar */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="relative flex items-center justify-between">
          <div className="absolute left-0 right-0 top-1/2 h-px bg-white/10" />
          <div className="absolute left-0 top-1/2 h-px w-full bg-gradient-to-r from-[#f34749] to-[#f34749]/20" />

          {steps.map((step, i) => (
            <div key={i} className="relative z-10 flex flex-col items-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f34749] text-sm font-bold text-white shadow-lg shadow-[#f34749]/20">
                {i + 1}
              </div>
              <p className="mt-2 hidden text-xs text-muted-foreground sm:block">
                {monthLabels[i]}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-4xl space-y-16 px-4 sm:px-6">
          {steps.map((step, i) => (
            <div
              key={i}
              className="group rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 transition-all hover:border-[#f34749]/20 sm:p-10"
            >
              <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
                {/* Icon & timeline badge */}
                <div className="flex shrink-0 items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f34749]/10 text-[#f34749]">
                    <step.icon size={24} />
                  </div>
                  <div className="sm:hidden">
                    <Badge
                      variant="outline"
                      className="border-[#f34749]/30 text-[#f34749]"
                    >
                      {step.timeline}
                    </Badge>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="mb-3 hidden sm:block">
                    <Badge
                      variant="outline"
                      className="border-[#f34749]/30 text-[#f34749]"
                    >
                      {step.timeline}
                    </Badge>
                  </div>
                  <h2 className="mb-3 text-2xl font-bold text-white">
                    {step.title}
                  </h2>
                  <p className="mb-6 leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>

                  <div>
                    <h4 className="mb-3 text-sm font-semibold text-white/80">
                      What You Get
                    </h4>
                    <ul className="space-y-2">
                      {step.deliverables.map((item, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <Check
                            size={16}
                            className="mt-0.5 shrink-0 text-[#f34749]"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* What to Expect Month by Month */}
      <section className="border-t border-white/[0.06] bg-white/[0.02] py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="text-center mb-10">
            <Badge
              variant="outline"
              className="mb-4 border-[#f34749]/30 text-[#f34749]"
            >
              Timeline Expectations
            </Badge>
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              What to Expect and When
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
              Cold email is not instant. Here&apos;s an honest look at what
              happens each month, and what you should and shouldn&apos;t expect.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                period: "Month 1",
                label: "Build",
                detail: "Infrastructure configured, domains warming, leads sourced and verified, sequences written and approved. Zero meetings yet. This is building the engine.",
              },
              {
                period: "Month 2",
                label: "Launch",
                detail: "Campaigns go live. 5,000–10,000 emails sent. Replies start flowing in. We qualify prospects and begin booking. First 3–5 qualified meetings booked.",
              },
              {
                period: "Month 3",
                label: "Optimize",
                detail: "Double down on winning messaging. Scale email volume. Expand prospect segments. Optimize reply-to-booking conversion. 5–10 qualified meetings booked.",
              },
              {
                period: "Month 4+",
                label: "Steady State",
                detail: "Predictable meeting flow established. Consistent 8–15 qualified discovery calls per month. Ongoing optimization and scaling. The system is working.",
              },
            ].map((phase, i) => (
              <div
                key={i}
                className="rounded-xl border border-white/[0.06] bg-white/[0.03] p-6"
              >
                <p className="text-xs font-medium text-[#f34749] mb-1">{phase.period}</p>
                <h3 className="text-lg font-semibold text-white mb-2">{phase.label}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{phase.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/[0.06] bg-white/[0.02] py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            This Is Built Around Your Business.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Every system we build is custom-scoped to your coaching offer, your market, and your goals.
            Book a strategy call and we&apos;ll map out exactly what your outbound engine would look like,
            built for your niche, not a one-size-fits-all template.
          </p>
          <div className="mt-8">
            <Button
              asChild
              size="lg"
              className="bg-[#f34749] px-8 text-white hover:bg-[#d93d3f]"
            >
              <Link href="/contact">
                Book a Strategy Call <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
          </div>
          <p className="mt-3 text-xs text-muted-foreground">
            No pitch. No pressure. Just an honest look at what your pipeline could look like.
          </p>
        </div>
      </section>
    </>
  );
}
