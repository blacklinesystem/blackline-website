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

/* ── Case Study Data ── */
const caseStudies = [
  {
    icon: Building2,
    industry: "B2B SaaS",
    company: "Cloud-based project management platform",
    companySize: "Series A, 30 employees",
    challenge:
      "Founding team was doing all outbound manually. CEO spending 15+ hours a week on LinkedIn and cold emails with a 0.3% reply rate. Pipeline was unpredictable and they were burning runway fast.",
    icp: {
      title: "Director of Operations / VP of Engineering",
      company: "Mid-market tech companies (200-2,000 employees)",
      industry: "SaaS, FinTech, HealthTech",
      location: "US & Canada",
      signals: "Recently hired project managers, growing engineering teams, using legacy tools like Jira or Asana",
    },
    infrastructure: {
      domains: 4,
      mailboxes: 16,
      warmupDays: 14,
      dailySendVolume: "120-180 emails/day",
    },
    emailExample: {
      subject: "{{firstName}}, quick thought on {{company}}'s project workflow",
      preview:
        "Noticed your team just crossed 50 engineers. At that size, most ops leaders tell us the same thing: projects slip through the cracks because nobody has real-time visibility across teams.\n\nWe built [Platform] specifically for engineering orgs scaling past the point where spreadsheets and standup meetings keep things on track.\n\nWorth a 15-min look, or is your current setup actually working?",
    },
    results: {
      meetingsPerMonth: "15-22",
      replyRate: "4.8%",
      estimatedPipelineValue: "$180K-$260K/quarter",
      timeToFirstMeeting: "6 days after launch",
    },
  },
  {
    icon: Briefcase,
    industry: "Management Consulting",
    company: "Boutique strategy consulting firm",
    companySize: "12 consultants, $3M revenue",
    challenge:
      "100% referral-dependent. When referrals slowed, revenue dropped 40% in one quarter. No outbound system, no pipeline visibility, and zero predictability on where the next client was coming from.",
    icp: {
      title: "CEO / COO / VP of Strategy",
      company: "Private equity-backed companies ($10M-$100M revenue)",
      industry: "Manufacturing, Professional Services, Healthcare",
      location: "Northeast US",
      signals: "Recent PE acquisition, new C-suite hires, undergoing operational transformation",
    },
    infrastructure: {
      domains: 3,
      mailboxes: 12,
      warmupDays: 12,
      dailySendVolume: "80-120 emails/day",
    },
    emailExample: {
      subject: "Post-acquisition growing pains at {{company}}?",
      preview:
        "Most PE-backed companies in the $10-50M range hit the same wall 6 months after acquisition: the playbook that got them here won't get them there.\n\nWe've helped 30+ portfolio companies build the operational infrastructure to actually hit those growth targets the partners are expecting.\n\nOpen to a quick conversation about what that could look like for {{company}}?",
    },
    results: {
      meetingsPerMonth: "8-14",
      replyRate: "5.2%",
      estimatedPipelineValue: "$320K-$520K/quarter",
      timeToFirstMeeting: "4 days after launch",
    },
  },
  {
    icon: ShoppingBag,
    industry: "E-Commerce Agency",
    company: "Shopify Plus development and CRO agency",
    companySize: "22 employees, $2.1M revenue",
    challenge:
      "Relied entirely on Clutch listings and word-of-mouth. Competitors were outbidding them on paid ads. Tried hiring an SDR who lasted 3 months and booked 5 meetings total before quitting.",
    icp: {
      title: "Founder / Head of E-Commerce / CMO",
      company: "DTC brands doing $2M-$20M in annual revenue",
      industry: "Fashion, Health & Wellness, Home Goods, CPG",
      location: "US, UK, Australia",
      signals: "Running on basic Shopify (not Plus), declining conversion rates, recently raised capital, scaling ad spend",
    },
    infrastructure: {
      domains: 5,
      mailboxes: 20,
      warmupDays: 14,
      dailySendVolume: "150-220 emails/day",
    },
    emailExample: {
      subject: "{{company}}'s Shopify store is leaving money on the table",
      preview:
        "Pulled up {{company}}'s site and noticed a few things that are probably costing you 15-20% in lost conversions. The checkout flow alone has 3 friction points we've fixed for brands your size before.\n\nWe just helped a similar DTC brand go from $180K/mo to $290K/mo with a Shopify Plus migration + CRO overhaul.\n\nWorth showing you what we found?",
    },
    results: {
      meetingsPerMonth: "18-28",
      replyRate: "4.1%",
      estimatedPipelineValue: "$90K-$170K/quarter",
      timeToFirstMeeting: "3 days after launch",
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
            Every business is different. Here&apos;s what a Blackline outbound system
            looks like when we build it for specific industries. Real strategies,
            real infrastructure, real numbers.
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

                  {/* Projected Results */}
                  <div className="mt-8">
                    <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[#f34749]">
                      <TrendingUp size={14} /> Projected Results
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
                        <p className="text-xs text-muted-foreground">Pipeline / Quarter</p>
                      </div>
                      <div className="rounded-xl border border-[#f34749]/20 bg-[#f34749]/[0.05] p-4 text-center">
                        <p className="text-xl font-bold text-[#f34749]">{study.results.timeToFirstMeeting}</p>
                        <p className="text-xs text-muted-foreground">First Meeting</p>
                      </div>
                    </div>
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
