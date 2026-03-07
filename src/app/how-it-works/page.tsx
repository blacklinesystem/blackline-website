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
  title: "How It Works — Blackline's AI Cold Email System for Coaches & Consultants",
  description:
    "See how Blackline goes from zero to booked discovery calls in 14-21 days. Our 5-step process: ICP workshop, infrastructure, lead sourcing, AI copy, and launch. Done-for-you cold email for coaches and consultants.",
  alternates: { canonical: "/how-it-works" },
};

const steps = [
  {
    icon: Search,
    title: "ICP Workshop & Outbound Strategy",
    timeline: "Week 1 · Days 1–5",
    description:
      "This is where most agencies cut corners. We don't. We run a structured ICP workshop to reverse-engineer your best clients — who they are, what keeps them up at night, and exactly why they hired a coach or consultant. The output is a precision outbound playbook: your ideal client profile, messaging angles, sequence architecture, and targeting criteria. Not a generic template. A strategy built around your specific offer and market.",
    deliverables: [
      "Structured ICP workshop (live call with our team)",
      "Ideal client profile document with firmographic and psychographic criteria",
      "Messaging framework built around your coaching or consulting offer",
      "Multi-angle outbound strategy with sequence architecture",
      "Target prospect criteria that filters for buyers, not browsers",
    ],
  },
  {
    icon: Server,
    title: "Technical Infrastructure Setup",
    timeline: "Week 1–2 · Days 3–10",
    description:
      "Your emails are worthless if they land in spam. We build a sending infrastructure from the ground up that email providers actually trust. Custom sending domains purchased and configured, authenticated mailboxes with SPF, DKIM, and DMARC, and warmup sequences that build real sender reputation before a single campaign email goes out. This is the technical foundation that separates a system that works from one that gets you blacklisted.",
    deliverables: [
      "Custom sending domains purchased and fully configured",
      "Mailboxes created with SPF, DKIM, DMARC authentication",
      "Automated warmup sequences across all accounts",
      "Deliverability monitoring and inbox placement verification",
      "Sending platform (Instantly/Smartlead) setup and tested",
      "Make.com automation connected for real-time reply handling",
    ],
  },
  {
    icon: Users,
    title: "Targeted Lead Sourcing & Verification",
    timeline: "Week 2 · Days 7–14",
    description:
      "Garbage leads produce garbage results. We source 500+ verified prospects from Apollo.io and other premium databases, filtered precisely to your ICP criteria. Every contact goes through multi-step email verification via Hunter.io and NeverBounce to keep bounce rates under 2%. Contacts are enriched with the personalization data points we need to make every email feel like it was written specifically for that person.",
    deliverables: [
      "500+ targeted prospects matching your exact ICP",
      "Multi-step verification via Hunter.io and NeverBounce (bounce rate under 2%)",
      "Contact enrichment with company and role-specific data points",
      "Segmented lists for A/B testing and sequence personalization",
      "Ongoing list refresh as campaigns run",
    ],
  },
  {
    icon: PenTool,
    title: "AI-Powered Email Sequences",
    timeline: "Week 2 · Days 10–14",
    description:
      "Nobody replies to \"I hope this email finds you well.\" Our copywriting process uses Claude AI to generate hyper-personalized sequences and refines them to read like they came from a trusted peer — not a sales pitch. Every email earns the next open. Every follow-up adds value instead of pushing harder. The goal isn't volume — it's replies from people who are actually interested in a conversation.",
    deliverables: [
      "3–5 step email sequences built around your ICP and offer",
      "Subject lines optimized for open rate, not clickbait",
      "Multiple messaging angles for A/B testing",
      "Follow-up sequences that handle common objections",
      "LinkedIn touchpoint integration for multi-channel outreach",
    ],
  },
  {
    icon: Rocket,
    title: "Launch, Monitor & Optimize",
    timeline: "Week 3+ · Day 14 onward",
    description:
      "Campaigns go live with controlled volume ramps and real-time monitoring. From the first send, we track opens, replies, positive sentiment, and meetings booked. Then we optimize — new subject lines, tighter copy, better targeting angles. Every week the system gets sharper. Discovery calls typically start arriving in weeks 4–8. This is not a set-it-and-forget-it service. It is a continuously improving outbound machine.",
    deliverables: [
      "Campaign launch with intelligent sending volume ramps",
      "Real-time deliverability and reputation monitoring",
      "Continuous A/B testing on subject lines, copy, and timing",
      "Weekly performance reports with actionable optimization notes",
      "Ongoing lead sourcing to keep pipeline full as campaigns scale",
    ],
  },
];

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
            The Playbook
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            From Zero to Booked Calls in{" "}
            <span className="gradient-text">14–21 Days</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            A custom-built outbound system designed around your coaching or consulting offer,
            your ideal client, and your market. Not a template. Not a plug-and-play tool.
            A done-for-you engine that books qualified discovery calls on autopilot.
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
                Wk {i + 1}
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

      {/* What Happens After Launch */}
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
              Cold email is not instant. Here&apos;s an honest look at what happens
              after your system goes live.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              {
                period: "Weeks 1–2",
                label: "Setup & Build",
                detail: "Infrastructure configured, domains warmed, leads sourced and verified, sequences written. The engine is being built."
              },
              {
                period: "Weeks 3–4",
                label: "Launch & Ramp",
                detail: "Campaigns go live. Early replies start coming in. We monitor deliverability closely and make adjustments before scaling volume."
              },
              {
                period: "Weeks 4–8",
                label: "Discovery Calls",
                detail: "As the system matures, qualified discovery calls start booking. Most clients see 5–12 calls per month once campaigns are fully dialed in."
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
            This Isn&apos;t a Package. It&apos;s a Partnership.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Every system we build is custom-scoped to your coaching or consulting offer,
            your market, and your goals. Book a strategy session and we&apos;ll map out exactly
            what your outbound engine would look like — built for your numbers, not a one-size-fits-all template.
          </p>
          <div className="mt-8">
            <Button
              asChild
              size="lg"
              className="bg-[#f34749] px-8 text-white hover:bg-[#d93d3f]"
            >
              <Link href="/contact">
                Build My Custom System <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
          </div>
          <p className="mt-3 text-xs text-muted-foreground">
            60-minute call. No obligation. Just an honest look at what your pipeline could be.
          </p>
        </div>
      </section>
    </>
  );
}
