import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Zap,
  Target,
  Mail,
  Users,
  BarChart3,
  Briefcase,
  Globe,
  CheckCircle2,
  TrendingUp,
  Send,
  GraduationCap,
  LineChart,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Our Work — Blackline Cold Email Systems for Coaches & Consultants",
  description:
    "See how Blackline builds AI cold email systems for business coaches, executive coaches, and consultants. Real strategies, real infrastructure, and realistic results.",
  alternates: { canonical: "/our-work" },
};

/* ── Case Study Data ── */
const caseStudies = [
  {
    icon: Briefcase,
    industry: "Business Coaching",
    company: "Solo business coach expanding into group programs",
    companySize: "1 coach + 1 VA · ~$400K annual revenue",
    challenge:
      "100% referral-dependent. When referrals slowed one quarter, revenue dropped 35%. No predictable pipeline, no visibility into where the next client was coming from. The coach needed a consistent way to fill group coaching cohorts without relying on word-of-mouth or constantly posting on social media.",
    icp: {
      title: "Founder / CEO / Owner",
      company: "Small businesses doing $500K–$2M in revenue",
      industry: "Professional Services, Trades, Local Businesses",
      location: "United States (English-speaking)",
      signals: "Recently hired first employees, posting about growing pains on LinkedIn, actively looking for mentorship or a peer advisory group",
    },
    infrastructure: {
      domains: 3,
      mailboxes: 9,
      warmupDays: 14,
      dailySendVolume: "60–90 emails/day",
    },
    emailExample: {
      subject: "Scaling past $500K without burning out?",
      preview:
        "Most founders at the $500K–$1M stage hit the same wall: the stuff that got you here won't get you to the next level. You're doing everything, and the business doesn't run without you.\n\nI work with founders at exactly this stage to build the systems and team structure that lets you grow without 70-hour weeks.\n\nOpen to a quick conversation about what that could look like for {{company}}?",
    },
    results: {
      callsPerMonth: "6–10",
      replyRate: "3.5–5.0%",
      estimatedPipelineValue: "$30K–$60K/quarter",
      timeToFirstCall: "5–8 days after launch",
    },
  },
  {
    icon: GraduationCap,
    industry: "Executive & Leadership Coaching",
    company: "Executive coach targeting C-suite and VP-level leaders",
    companySize: "1 coach · $250K–$500K revenue",
    challenge:
      "Strong reputation within a small network but no way to scale beyond it. Referrals from past clients were inconsistent and unpredictable. The coach had a premium offer ($10K–$25K engagements) but no systematic way to reach the type of executives who would pay that fee — and no time to prospect manually.",
    icp: {
      title: "CEO / COO / VP / Director",
      company: "Established companies with 50–500 employees",
      industry: "Financial Services, Technology, Healthcare, Professional Services",
      location: "US & Canada",
      signals: "Recent promotion, company in growth or transition phase, actively sharing leadership content on LinkedIn, new to a senior role within the past 12 months",
    },
    infrastructure: {
      domains: 3,
      mailboxes: 9,
      warmupDays: 14,
      dailySendVolume: "50–75 emails/day",
    },
    emailExample: {
      subject: "Leading {{company}} through the next stage",
      preview:
        "Saw you recently stepped into the [COO] role at {{company}}. The first 90 days of a leadership transition are usually where the biggest decisions get made — and where most leaders are working without a sounding board.\n\nI work with senior leaders at that inflection point. Not a course, not a workshop — one-on-one coaching focused on the real decisions in front of you.\n\nWould a quick conversation be useful?",
    },
    results: {
      callsPerMonth: "5–8",
      replyRate: "3.0–4.5%",
      estimatedPipelineValue: "$50K–$150K/quarter",
      timeToFirstCall: "7–12 days after launch",
    },
  },
  {
    icon: LineChart,
    industry: "Sales & Revenue Consulting",
    company: "Sales consultant helping B2B companies build outbound teams",
    companySize: "2-person consultancy · ~$600K revenue",
    challenge:
      "100% inbound from a newsletter and LinkedIn presence. Revenue was growing but entirely dependent on the founder showing up online every day. One team member handled delivery and one drove acquisition — but the acquisition side had no leverage. Needed a consistent outbound channel that didn't require constant content creation.",
    icp: {
      title: "VP of Sales / Head of Revenue / Founder",
      company: "B2B companies doing $1M–$10M in revenue",
      industry: "SaaS, Professional Services, Agencies",
      location: "US & Canada",
      signals: "Recently hired first SDR, posted about pipeline problems, mentioned missing quota on LinkedIn, or recently raised a seed/Series A round",
    },
    infrastructure: {
      domains: 4,
      mailboxes: 12,
      warmupDays: 14,
      dailySendVolume: "80–120 emails/day",
    },
    emailExample: {
      subject: "{{company}}'s outbound motion",
      preview:
        "Noticed {{company}} recently brought on a couple of SDRs. Most early-stage outbound teams hit the same issues in months 1–3: inconsistent messaging, no clear ICP, and reps who are winging it on sequencing.\n\nI help B2B companies build the process, playbook, and coaching system that makes those first reps actually productive — instead of expensive experiments.\n\nWorth a 20-minute call to see if it's a fit?",
    },
    results: {
      callsPerMonth: "8–14",
      replyRate: "3.2–4.8%",
      estimatedPipelineValue: "$60K–$120K/quarter",
      timeToFirstCall: "5–10 days after launch",
    },
  },
];

/* ── Page ── */
export default function OurWorkPage() {
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
            <Zap size={12} className="mr-1" /> What We Build
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            The System{" "}
            <span className="gradient-text">In Action</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            Below are examples of how we approach outbound for specific coaching
            and consulting niches. Real strategies, real infrastructure,
            and realistic outcomes based on what the system is built to deliver.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 sm:pb-28">
        <div className="space-y-16">
          {caseStudies.map((study, idx) => (
            <Card
              key={idx}
              className="overflow-hidden border-white/[0.06] bg-white/[0.02]"
            >
              <CardContent className="p-0">
                {/* Study Header */}
                <div className="border-b border-white/[0.06] bg-white/[0.03] px-6 py-5 sm:px-8">
                  <div className="flex flex-wrap items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#f34749]/10 text-[#f34749]">
                      <study.icon size={20} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <Badge className="bg-[#f34749]/10 text-[#f34749] hover:bg-[#f34749]/20 border-0 text-xs">
                          {study.industry}
                        </Badge>
                        <span className="text-xs text-muted-foreground">{study.companySize}</span>
                      </div>
                      <p className="mt-1 text-sm text-muted-foreground">{study.company}</p>
                    </div>
                  </div>
                </div>

                <div className="px-6 py-8 sm:px-8">
                  {/* Challenge */}
                  <div className="mb-8">
                    <h3 className="mb-2 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[#f34749]">
                      <Target size={14} /> The Problem
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {study.challenge}
                    </p>
                  </div>

                  <div className="grid gap-8 lg:grid-cols-2">
                    {/* ICP */}
                    <div>
                      <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[#f34749]">
                        <Users size={14} /> Ideal Client Profile
                      </h3>
                      <div className="space-y-2 rounded-xl border border-white/[0.06] bg-white/[0.03] p-4">
                        <div>
                          <span className="text-xs text-muted-foreground">Target Title</span>
                          <p className="text-sm text-white">{study.icp.title}</p>
                        </div>
                        <div>
                          <span className="text-xs text-muted-foreground">Company Stage</span>
                          <p className="text-sm text-white">{study.icp.company}</p>
                        </div>
                        <div>
                          <span className="text-xs text-muted-foreground">Industries</span>
                          <p className="text-sm text-white">{study.icp.industry}</p>
                        </div>
                        <div>
                          <span className="text-xs text-muted-foreground">Geography</span>
                          <p className="text-sm text-white">{study.icp.location}</p>
                        </div>
                        <div>
                          <span className="text-xs text-muted-foreground">Buying Signals</span>
                          <p className="text-sm text-white">{study.icp.signals}</p>
                        </div>
                      </div>
                    </div>

                    {/* Infrastructure */}
                    <div>
                      <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[#f34749]">
                        <Globe size={14} /> Infrastructure Built
                      </h3>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="rounded-xl border border-white/[0.06] bg-white/[0.03] p-4 text-center">
                          <p className="text-2xl font-bold text-white">{study.infrastructure.domains}</p>
                          <p className="text-xs text-muted-foreground">Sending Domains</p>
                        </div>
                        <div className="rounded-xl border border-white/[0.06] bg-white/[0.03] p-4 text-center">
                          <p className="text-2xl font-bold text-white">{study.infrastructure.mailboxes}</p>
                          <p className="text-xs text-muted-foreground">Warm Mailboxes</p>
                        </div>
                        <div className="rounded-xl border border-white/[0.06] bg-white/[0.03] p-4 text-center">
                          <p className="text-2xl font-bold text-white">{study.infrastructure.warmupDays}</p>
                          <p className="text-xs text-muted-foreground">Days to Launch</p>
                        </div>
                        <div className="rounded-xl border border-white/[0.06] bg-white/[0.03] p-4 text-center">
                          <p className="text-lg font-bold text-white">{study.infrastructure.dailySendVolume}</p>
                          <p className="text-xs text-muted-foreground">Daily Send Volume</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Email Example */}
                  <div className="mt-8">
                    <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[#f34749]">
                      <Mail size={14} /> Sample Email
                    </h3>
                    <div className="rounded-xl border border-white/[0.06] bg-[#1a1a1a] p-5">
                      <div className="mb-3 flex items-center gap-2 border-b border-white/[0.06] pb-3">
                        <Send size={12} className="text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">Subject:</span>
                        <span className="text-sm text-white">{study.emailExample.subject}</span>
                      </div>
                      <p className="whitespace-pre-line text-sm leading-relaxed text-white/80">
                        {study.emailExample.preview}
                      </p>
                    </div>
                  </div>

                  {/* Estimated Results */}
                  <div className="mt-8">
                    <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[#f34749]">
                      <TrendingUp size={14} /> Projected Results
                    </h3>
                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                      <div className="rounded-xl border border-[#f34749]/20 bg-[#f34749]/[0.05] p-4 text-center">
                        <p className="text-xl font-bold text-[#f34749]">{study.results.callsPerMonth}</p>
                        <p className="text-xs text-muted-foreground">Discovery Calls / Month</p>
                      </div>
                      <div className="rounded-xl border border-[#f34749]/20 bg-[#f34749]/[0.05] p-4 text-center">
                        <p className="text-xl font-bold text-[#f34749]">{study.results.replyRate}</p>
                        <p className="text-xs text-muted-foreground">Reply Rate</p>
                      </div>
                      <div className="rounded-xl border border-[#f34749]/20 bg-[#f34749]/[0.05] p-4 text-center">
                        <p className="text-lg font-bold text-[#f34749]">{study.results.estimatedPipelineValue}</p>
                        <p className="text-xs text-muted-foreground">Est. Pipeline / Quarter</p>
                      </div>
                      <div className="rounded-xl border border-[#f34749]/20 bg-[#f34749]/[0.05] p-4 text-center">
                        <p className="text-xl font-bold text-[#f34749]">{study.results.timeToFirstCall}</p>
                        <p className="text-xs text-muted-foreground">First Discovery Call</p>
                      </div>
                    </div>
                    <p className="mt-3 text-xs text-muted-foreground/70">
                      * Projections based on industry benchmarks and typical cold email performance. Actual results vary based on offer, market, and sales process.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* What Every Engagement Includes */}
        <div className="mt-20">
          <div className="text-center">
            <Badge
              variant="outline"
              className="mb-4 border-[#f34749]/30 text-[#f34749]"
            >
              <BarChart3 size={12} className="mr-1" /> Every Engagement Includes
            </Badge>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              The Full Stack
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
              No matter your niche, every Blackline system is built with the
              same battle-tested components and tools.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "ICP workshop and buyer persona mapping (live call)",
              "Dedicated sending domains with full DNS authentication",
              "Warmed mailboxes ready for primary inbox delivery",
              "500+ verified, enriched leads matched to your ICP",
              "AI-personalized email sequences (Claude API)",
              "Make.com automation for real-time reply handling",
              "A/B testing on subject lines, copy, and send timing",
              "Deliverability monitoring with weekly performance reports",
              "Ongoing list refresh and campaign optimization",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 rounded-xl border border-white/[0.06] bg-white/[0.03] p-4"
              >
                <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-[#f34749]" />
                <span className="text-sm text-white/90">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Ready to See What This Looks Like for Your Business?
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-muted-foreground">
            Every system is custom-built around your offer and your ideal client.
            Book a strategy session and we&apos;ll map out exactly what your outbound engine looks like.
          </p>
          <div className="mt-6">
            <Button
              asChild
              size="lg"
              className="bg-[#f34749] px-8 text-white hover:bg-[#d93d3f]"
            >
              <Link href="/contact">
                Book Your Strategy Session <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
