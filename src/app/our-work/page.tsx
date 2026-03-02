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
  Building2,
  Briefcase,
  ShoppingBag,
  Globe,
  CheckCircle2,
  TrendingUp,
  Send,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Our Work — Blackline Cold Email Case Studies",
  description:
    "See how Blackline builds AI cold email systems for B2B SaaS, business coaches, and e-commerce brands. Real strategies, infrastructure, and estimated results.",
  alternates: { canonical: "/our-work" },
};

/* ── Case Study Data ── */
const caseStudies = [
  {
    icon: Building2,
    industry: "B2B SaaS",
    company: "Early-stage task management tool for remote teams",
    companySize: "Seed-funded, 8 employees",
    challenge:
      "Two co-founders splitting time between building product and doing outbound. CEO spending 15+ hours a week on LinkedIn DMs and cold emails with a 0.3% reply rate. Pipeline was unpredictable and they needed consistent demos to hit their next funding milestone.",
    icp: {
      title: "Head of Operations / Team Lead",
      company: "Remote-first startups and agencies (15-150 employees)",
      industry: "SaaS, Digital Agencies, Professional Services",
      location: "US & Canada",
      signals: "Recently went remote-first, growing headcount, using spreadsheets or basic tools for project tracking",
    },
    infrastructure: {
      domains: 3,
      mailboxes: 12,
      warmupDays: 14,
      dailySendVolume: "80-120 emails/day",
    },
    emailExample: {
      subject: "{{firstName}}, quick thought on how {{company}} tracks projects remotely",
      preview:
        "Noticed {{company}} has been growing the remote team. Once you're past 20 people, most ops leads say the same thing: things start slipping through the cracks because nobody has real visibility across teams.\n\nWe built something specifically for remote-first teams at that stage. Might be worth a 15-min look, or is your current setup actually holding up?",
    },
    results: {
      meetingsPerMonth: "8-14",
      replyRate: "3.5-4.5%",
      estimatedPipelineValue: "$45K-$90K/quarter",
      timeToFirstMeeting: "7-10 days after launch",
    },
  },
  {
    icon: Briefcase,
    industry: "Business Coaching",
    company: "Solo business coach expanding into group programs",
    companySize: "1 coach + 1 VA, ~$400K revenue",
    challenge:
      "100% referral-dependent. When referrals slowed down one quarter, revenue dropped 35%. No outbound system, no pipeline visibility, and zero predictability on where the next client was coming from. Needed a reliable way to fill group coaching cohorts.",
    icp: {
      title: "Founder / CEO / Owner",
      company: "Small businesses doing $500K-$5M in revenue",
      industry: "Professional Services, Local Businesses, Trades",
      location: "US (English-speaking)",
      signals: "Recently hired first employees, posting about growing pains on LinkedIn, looking for mentorship or advisory",
    },
    infrastructure: {
      domains: 3,
      mailboxes: 9,
      warmupDays: 14,
      dailySendVolume: "60-90 emails/day",
    },
    emailExample: {
      subject: "Scaling past $500K without burning out?",
      preview:
        "Most founders at the $500K-$1M stage hit the same wall: the stuff that got you here won't get you to the next level. You're doing everything, and the business doesn't run without you.\n\nI work with founders at exactly this stage to build the systems and team structure that lets you grow without working 70-hour weeks.\n\nOpen to a quick conversation about what that could look like for {{company}}?",
    },
    results: {
      meetingsPerMonth: "6-10",
      replyRate: "3.8-5.0%",
      estimatedPipelineValue: "$30K-$75K/quarter",
      timeToFirstMeeting: "5-8 days after launch",
    },
  },
  {
    icon: ShoppingBag,
    industry: "E-Commerce Services",
    company: "Shopify design and conversion optimization freelancer going agency",
    companySize: "4 contractors, ~$350K revenue",
    challenge:
      "Relied entirely on Upwork and word-of-mouth. Competitors were outbidding on every freelancer platform. Tried cold DMs on Instagram for 2 months and booked 1 call. Needed a professional outbound channel to land retainer clients and move off gig platforms.",
    icp: {
      title: "Founder / Head of E-Commerce / Marketing Manager",
      company: "DTC brands doing $500K-$5M in annual revenue",
      industry: "Fashion, Health & Wellness, Home Goods, Beauty",
      location: "US, UK, Australia",
      signals: "Running on basic Shopify, low conversion rates compared to industry average, spending on paid ads but not optimizing the store",
    },
    infrastructure: {
      domains: 3,
      mailboxes: 12,
      warmupDays: 14,
      dailySendVolume: "80-130 emails/day",
    },
    emailExample: {
      subject: "{{company}}'s Shopify store might be leaving money on the table",
      preview:
        "Pulled up {{company}}'s site and spotted a few things that are probably costing you 10-15% in lost conversions. The checkout flow alone has a couple friction points we've cleaned up for brands at your stage before.\n\nNo pitch, just thought it was worth flagging. Want me to send over what I found?",
    },
    results: {
      meetingsPerMonth: "10-16",
      replyRate: "3.2-4.2%",
      estimatedPipelineValue: "$25K-$60K/quarter",
      timeToFirstMeeting: "5-8 days after launch",
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
            See the System{" "}
            <span className="gradient-text">In Action</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            Every business is different. Below are examples of how we&apos;d approach
            outbound for specific industries and business types. Real strategies,
            real infrastructure, estimated outcomes based on proven benchmarks.
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
                        <Users size={14} /> Ideal Customer Profile
                      </h3>
                      <div className="space-y-2 rounded-xl border border-white/[0.06] bg-white/[0.03] p-4">
                        <div>
                          <span className="text-xs text-muted-foreground">Target Title</span>
                          <p className="text-sm text-white">{study.icp.title}</p>
                        </div>
                        <div>
                          <span className="text-xs text-muted-foreground">Company Size</span>
                          <p className="text-sm text-white">{study.icp.company}</p>
                        </div>
                        <div>
                          <span className="text-xs text-muted-foreground">Industries</span>
                          <p className="text-sm text-white">{study.icp.industry}</p>
                        </div>
                        <div>
                          <span className="text-xs text-muted-foreground">Location</span>
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
                      <TrendingUp size={14} /> Estimated Results
                    </h3>
                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                      <div className="rounded-xl border border-[#f34749]/20 bg-[#f34749]/[0.05] p-4 text-center">
                        <p className="text-xl font-bold text-[#f34749]">{study.results.meetingsPerMonth}</p>
                        <p className="text-xs text-muted-foreground">Meetings / Month</p>
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
                        <p className="text-xl font-bold text-[#f34749]">{study.results.timeToFirstMeeting}</p>
                        <p className="text-xs text-muted-foreground">First Meeting</p>
                      </div>
                    </div>
                    <p className="mt-3 text-xs text-muted-foreground/70">
                      * Estimates based on industry benchmarks and proven cold email campaign data. Actual results vary based on offer, market, and sales process.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* What You Get Summary */}
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
              No matter your industry, every Blackline system is built with
              the same battle-tested components.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Deep ICP research and buyer persona mapping",
              "Dedicated sending domains with full DNS authentication",
              "Warmed mailboxes ready for primary inbox delivery",
              "Verified, enriched lead lists matched to your ICP",
              "AI-personalized email sequences that feel handwritten",
              "Real-time campaign monitoring and optimization",
              "A/B testing on subject lines, copy, and send times",
              "Detailed analytics dashboard with reply tracking",
              "Ongoing strategy calls to refine and scale",
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
            Every system is custom-built. Book a strategy session and we&apos;ll
            map out exactly what your outbound engine looks like.
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
