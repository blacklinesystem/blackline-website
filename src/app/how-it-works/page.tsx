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
  title: "How It Works",
  description:
    "From zero to booked meetings in 14 days. See our 5-step process for building custom AI cold email systems — strategy, infrastructure, leads, copy, and launch.",
  alternates: { canonical: "/how-it-works" },
};

const steps = [
  {
    icon: Search,
    title: "Deep-Dive Strategy & ICP Lockdown",
    timeline: "Days 1-3",
    description:
      "This is where most agencies phone it in. We don't. We get on a call, dissect your best clients, reverse-engineer why they bought, and build an outbound playbook that speaks directly to the people who need what you sell. Your ICP isn't \"companies with 50-200 employees.\" It's the VP of Ops at a mid-market logistics company who's drowning in manual processes and has budget authority. That's the level we operate at.",
    deliverables: [
      "Razor-sharp ICP document with firmographic & behavioral criteria",
      "Messaging framework built from your actual wins",
      "Multi-angle outbound strategy & sequence architecture",
      "Target account list criteria that actually converts",
    ],
  },
  {
    icon: Server,
    title: "Bulletproof Technical Infrastructure",
    timeline: "Days 3-7",
    description:
      "Your emails are worthless if they land in spam. We build a sending infrastructure from the ground up that Google and Microsoft actually trust. Custom domains, authenticated mailboxes, DNS records that pass every check, and warmup protocols that build sender reputation before a single campaign email goes out. This is the boring stuff that separates professionals from amateurs. We handle every detail.",
    deliverables: [
      "Custom sending domains purchased & fully configured",
      "Mailboxes created with SPF, DKIM, DMARC authentication",
      "Automated warmup sequences initiated across all accounts",
      "Deliverability monitoring & inbox placement verification",
      "Sending platform setup, tested, and integrated",
    ],
  },
  {
    icon: Users,
    title: "Surgical Lead Sourcing & Verification",
    timeline: "Days 7-14",
    description:
      "Garbage leads = garbage results. We pull from premium databases to build lists of verified decision-makers who actually match your ICP. Every contact is triple-verified for deliverability, enriched with personalization data points, and segmented for maximum relevance. You're not emailing into the dark. You're reaching the exact people who can sign the check.",
    deliverables: [
      "Thousands of targeted prospects matching your exact ICP",
      "Multi-step email verification (bounce rate under 2%)",
      "Contact enrichment with company and personal data points",
      "Segmented lists by industry, role, company size, and intent signals",
    ],
  },
  {
    icon: PenTool,
    title: "AI Copy That Sounds Like Your Best Closer",
    timeline: "Days 10-14",
    description:
      "Nobody replies to \"I hope this email finds you well.\" Our AI copywriting engine creates hyper-personalized sequences that read like they were written by someone who actually understands the prospect's business. Every email earns the next open. Every follow-up adds value instead of annoying. The goal isn't to send more emails. It's to send emails people actually want to reply to.",
    deliverables: [
      "3-5 step email sequences per ICP, tested and polished",
      "Subject lines engineered for open rates, not clickbait",
      "Multiple messaging angles ready for A/B testing",
      "Follow-up sequences that add value and handle objections",
    ],
  },
  {
    icon: Rocket,
    title: "Launch, Optimize, Dominate",
    timeline: "Day 14+",
    description:
      "Go time. Campaigns launch with controlled volume ramps and real-time monitoring. From the first send, we're tracking everything: opens, replies, positive sentiment, meetings booked. Then we optimize. New subject lines, tighter copy, better targeting. Every week your system gets sharper. This isn't a set-and-forget service. It's a machine that gets better every single day.",
    deliverables: [
      "Campaign launch with intelligent sending volume ramps",
      "Real-time deliverability and reputation monitoring",
      "Continuous A/B testing on every variable that matters",
      "Weekly performance reports with actionable insights",
      "Ongoing lead sourcing and list refresh to keep pipeline full",
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
            From Zero to Booked Meetings in{" "}
            <span className="gradient-text">14 Days</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            Not a cookie-cutter funnel. Not a template you could find on Google.
            A custom-built outbound engine designed around your business, your buyers, and your market.
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
                {step.timeline}
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
                {/* Icon & number */}
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

      {/* CTA */}
      <section className="border-t border-white/[0.06] bg-white/[0.02] py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            This Isn&apos;t a Package. It&apos;s a Partnership.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Every system we build is custom-scoped to your business, your market, and your goals.
            Book a strategy call and we&apos;ll show you exactly what your outbound engine would look like &mdash;
            built for your numbers, not a template.
          </p>
          <div className="mt-8">
            <Button
              asChild
              size="lg"
              className="bg-[#f34749] px-8 text-white hover:bg-[#d93d3f]"
            >
              <Link href="/contact">
                Build My Custom Strategy <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
          </div>
          <p className="mt-3 text-xs text-muted-foreground">
            60-minute call. No obligation. Just a roadmap for your pipeline.
          </p>
        </div>
      </section>
    </>
  );
}
