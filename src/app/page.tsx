import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedCounter } from "@/components/animated-counter";
import { ROICalculator } from "@/components/roi-calculator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Search,
  Server,
  Users,
  PenTool,
  Rocket,
  ArrowRight,
  Clock,
  Zap,
  Calculator,
  CalendarCheck,
  Check,
  X,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Blackline | AI Cold Email Systems for Business Coaches",
  description:
    "Done-for-you AI cold email systems that book 8–15 qualified discovery calls per month for business coaches. We build the entire engine: domains, mailboxes, leads, and AI-personalized sequences. You close the calls.",
  alternates: { canonical: "/" },
};

/* ── The Blackline System steps ── */
const steps = [
  {
    icon: Search,
    title: "ICP Workshop & Strategy",
    desc: "We reverse-engineer your best clients. Who are they, what problems are they trying to solve, and exactly how to reach them. The output is a precise ICP document and outbound playbook built specifically around your coaching offer. Not a template.",
  },
  {
    icon: Server,
    title: "Infrastructure Build",
    desc: "10–15 warmed email domains, 30–45 dedicated email accounts, and enterprise sending tools built for deliverability. Full SPF, DKIM, and DMARC authentication. This isn't your Gmail account. This is a dedicated outbound engine that lands in the primary inbox.",
  },
  {
    icon: Users,
    title: "Targeting & Prospect Research",
    desc: "We identify your ideal clients (not just 'coaches' but your specific niche), build targeted prospect lists, and validate contact data before we send a single email. 500–1,000+ verified contacts per month, enriched with personalization data.",
  },
  {
    icon: PenTool,
    title: "AI-Personalized Email Sequences",
    desc: "Every email is personalized using AI research on your prospect's business, recent activity, and pain points. No generic templates. No copy-paste. Each message reads like you wrote it yourself. The goal is replies, not volume.",
  },
  {
    icon: Rocket,
    title: "Campaign Management & Optimization",
    desc: "We write the sequences, manage replies, qualify prospects, and book meetings directly to your calendar. You show up to the call. We A/B test messaging, refine targeting, and optimize send times until we hit consistent flow. Then we scale.",
  },
];

/* ── FAQ data ── */
const faqs = [
  {
    q: "How long until I see results?",
    a: "First meetings typically book in weeks 6–8. Consistent flow of 8–15 per month by month 4. Anyone promising faster is either lying or sending garbage leads.",
  },
  {
    q: "Do you guarantee meetings?",
    a: "We guarantee the infrastructure, volume, and effort. We can't guarantee reply rates because we don't control the market. But we'll hit 8–15 meetings/month at steady state or we'll keep working until we do.",
  },
  {
    q: "What if my niche is really specific?",
    a: "Better. Hyper-targeted campaigns outperform broad ones every time. As long as there are 10,000+ prospects in your ICP, we can make it work.",
  },
  {
    q: "Do I need a CRM?",
    a: "Not required, but helpful. We can integrate with HubSpot, Pipedrive, ClickUp, or whatever you use. If you don't have one, we'll set up a simple system.",
  },
  {
    q: "What's the minimum commitment?",
    a: "We'll discuss commitment terms on the strategy call based on your specific needs and goals. Cold email takes 60–90 days to dial in, so we build that into the engagement.",
  },
  {
    q: "Can you write my emails?",
    a: "Yes. We write everything. You review and approve, but we handle all copywriting, sequencing, and follow-up messaging.",
  },
  {
    q: "What if I'm already doing cold email?",
    a: "We'll audit your current setup and either improve it or rebuild from scratch. Most DIY campaigns are broken in 3–5 places: deliverability, targeting, messaging, or follow-up structure.",
  },
  {
    q: "How does pricing work?",
    a: "Every coaching business is different. Your niche, ICP, complexity, and goals all factor into the scope of work. We create custom quotes based on your specific situation. Book a strategy call and we'll walk you through exactly what we'd build for you.",
  },
  {
    q: "What happens on the strategy call?",
    a: "We'll audit your current lead gen, define your ICP, show you how we'd target and message your ideal clients, and outline what the first 90 days would look like. No pressure, no pitch. Just a real conversation about whether this is a fit.",
  },
];

/* ── Page ── */
export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
        {/* Red glow */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-[#f34749]/[0.07] blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
          <Badge
            variant="outline"
            className="mb-6 border-[#f34749]/30 text-[#f34749]"
          >
            <Zap size={12} className="mr-1" /> AI-Powered Cold Email for Business Coaches
          </Badge>

          <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            We Book 8–15 Qualified Discovery Calls{" "}
            <span className="gradient-text">Per Month for Business Coaches</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            We build and run your entire cold email engine: domains, mailboxes, leads, and
            AI-personalized sequences. You close the calls. We fill your calendar.
            No ads. No guesswork. Just a system that works.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button
              asChild
              size="lg"
              className="bg-[#f34749] px-8 text-white hover:bg-[#d93d3f]"
            >
              <Link href="/contact">
                Book a Strategy Call <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/10 bg-transparent text-white hover:bg-white/5"
            >
              <Link href="/how-it-works">See How It Works</Link>
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <CalendarCheck size={14} className="text-[#f34749]" /> 8–15 Meetings/Month at Steady State
            </span>
            <span className="flex items-center gap-1">
              <Clock size={14} className="text-[#f34749]" /> 60–90 Day Ramp to Consistent Results
            </span>
            <span className="flex items-center gap-1">
              <Zap size={14} className="text-[#f34749]" /> Custom-Built For Your Coaching Niche
            </span>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="border-y border-white/[0.06] bg-white/[0.02] py-16">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 px-4 sm:grid-cols-4 sm:px-6">
          <AnimatedCounter
            end={15}
            suffix=" domains"
            label="Sending Domains Per Engagement"
          />
          <AnimatedCounter
            end={10000}
            suffix="+"
            label="Emails Sent Per Month"
          />
          <AnimatedCounter
            end={15}
            suffix="/mo"
            label="Discovery Calls at Steady State"
          />
          <AnimatedCounter
            end={90}
            suffix=" days"
            label="Ramp to Consistent Results"
          />
        </div>
      </section>

      {/* ── The Problem ── */}
      <section className="border-t border-white/[0.06] py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="mb-14 text-center">
            <Badge
              variant="outline"
              className="mb-4 border-[#f34749]/30 text-[#f34749]"
            >
              The Problem
            </Badge>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Referrals Are Not a Business Strategy
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Most coaches rely almost entirely on word-of-mouth. It feels great when
              it&apos;s working. But you&apos;re one slow quarter away from panic.
              Referrals are unpredictable, unscalable, and outside your control.
              Cold email, done right, is the opposite.
            </p>
          </div>

          {/* Comparison table */}
          <div className="overflow-hidden rounded-2xl border border-white/[0.06]">
            {/* Header row */}
            <div className="grid grid-cols-3 border-b border-white/[0.06] bg-white/[0.03]">
              <div className="p-4 sm:p-5" />
              <div className="border-l border-white/[0.06] p-4 sm:p-5">
                <p className="text-sm font-semibold text-white/50">Referral-Only Pipeline</p>
              </div>
              <div className="border-l border-[#f34749]/20 bg-[#f34749]/[0.04] p-4 sm:p-5">
                <p className="text-sm font-semibold text-[#f34749]">With a Blackline System</p>
              </div>
            </div>

            {[
              {
                label: "Discovery calls/month",
                without: "0–3 (unpredictable)",
                with: "8–15 (predictable flow)",
              },
              {
                label: "Time spent on lead gen",
                without: "Hours on LinkedIn, DMs, events",
                with: "Zero. We handle everything.",
              },
              {
                label: "Pipeline visibility",
                without: "No idea where next client comes from",
                with: "Full visibility into what's working",
              },
              {
                label: "Revenue predictability",
                without: "Feast or famine",
                with: "Trackable, scalable, compounding",
              },
              {
                label: "Infrastructure ownership",
                without: "Entirely dependent on your network",
                with: "You own the domains, lists, and system",
              },
            ].map((row, i) => (
              <div
                key={i}
                className="grid grid-cols-3 border-b border-white/[0.04] last:border-0"
              >
                <div className="p-4 sm:p-5">
                  <p className="text-sm font-medium text-white/60">{row.label}</p>
                </div>
                <div className="border-l border-white/[0.04] p-4 sm:p-5">
                  <p className="text-sm text-muted-foreground">{row.without}</p>
                </div>
                <div className="border-l border-[#f34749]/10 bg-[#f34749]/[0.02] p-4 sm:p-5">
                  <p className="text-sm text-white/90">{row.with}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── The Blackline System ── */}
      <section className="relative py-20 sm:py-28">
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center">
            <Badge
              variant="outline"
              className="mb-4 border-[#f34749]/30 text-[#f34749]"
            >
              The Blackline System
            </Badge>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              What We Actually Build
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
              Five components, built specifically for your coaching offer and your ideal client.
              Every piece working together to book qualified discovery calls on autopilot.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {steps.map((step, i) => (
              <Card
                key={i}
                className="glass-card group border-white/[0.06] bg-white/[0.03] transition-all hover:border-[#f34749]/30"
              >
                <CardContent className="p-6">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[#f34749]/10 text-[#f34749] transition-colors group-hover:bg-[#f34749]/20">
                    <step.icon size={20} />
                  </div>
                  <p className="mb-1 text-xs font-medium text-[#f34749]">
                    Step {i + 1}
                  </p>
                  <h3 className="mb-2 font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {step.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button
              asChild
              variant="outline"
              className="border-white/10 bg-transparent text-white hover:bg-white/5"
            >
              <Link href="/how-it-works">
                See the Full Timeline <ArrowRight size={14} className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── ROI Analyzer ── */}
      <section className="border-t border-white/[0.06] bg-white/[0.02] py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="text-center">
            <Badge
              variant="outline"
              className="mb-4 border-[#f34749]/30 text-[#f34749]"
            >
              <Calculator size={12} className="mr-1" /> Pipeline Math
            </Badge>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              What&apos;s Your Pipeline Worth?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
              Plug in your close rate and average client value. See what adding
              8–15 consistent discovery calls per month could do to your revenue.
              No fluff. Just math.
            </p>
          </div>

          <div className="mt-12">
            <ROICalculator />
          </div>

          <div className="mt-8 text-center">
            <Button
              asChild
              size="lg"
              className="bg-[#f34749] px-8 text-white hover:bg-[#d93d3f]"
            >
              <Link href="/contact">
                Book a Strategy Call <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
            <p className="mt-3 text-xs text-muted-foreground">
              Every engagement is custom-scoped around your offer, your ICP, and your market.
            </p>
          </div>
        </div>
      </section>

      {/* ── Who This Is For ── */}
      <section className="border-t border-white/[0.06] py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="text-center">
            <Badge
              variant="outline"
              className="mb-4 border-[#f34749]/30 text-[#f34749]"
            >
              Is This For You?
            </Badge>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Built for Business Coaches Making $100K–$300K
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
              Built for coaches with a proven offer who want to add a predictable
              outbound channel, without becoming salespeople.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {/* This IS for */}
            <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 sm:p-8">
              <h3 className="mb-6 text-lg font-semibold text-white">This is for you if&hellip;</h3>
              <ul className="space-y-4">
                {[
                  "You have a proven offer. You know how to close, you just need more calls.",
                  "You charge $3,000–$15,000 per client or program",
                  "You close 20–40% of discovery calls",
                  "You want predictable lead flow, not feast-or-famine referrals",
                  "You're willing to commit 90 days to building a real system",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Check size={16} className="mt-0.5 shrink-0 text-[#f34749]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* This is NOT for */}
            <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 sm:p-8">
              <h3 className="mb-6 text-lg font-semibold text-white">This is NOT for you if&hellip;</h3>
              <ul className="space-y-4">
                {[
                  "You're a brand new coach still figuring out your offer",
                  "You can't clearly define who your ideal client is",
                  "You're looking for instant results. Cold email takes 60–90 days to ramp.",
                  "You close less than 15% of calls (fix your offer first)",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <X size={16} className="mt-0.5 shrink-0 text-white/30" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-8 border-t border-white/[0.06] pt-6 text-sm text-muted-foreground">
                If you&apos;re doing $100K–$300K/year and ready to scale to $500K+,{" "}
                <Link href="/contact" className="text-[#f34749] hover:text-[#ff6b6b] transition-colors">
                  let&apos;s talk.
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Blackline ── */}
      <section className="border-t border-white/[0.06] bg-white/[0.02] py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="text-center mb-12">
            <Badge
              variant="outline"
              className="mb-4 border-[#f34749]/30 text-[#f34749]"
            >
              Why Blackline
            </Badge>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Why We Built This
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Most lead gen agencies are a black box. You pay thousands per month and have no idea
              what&apos;s actually happening. Leads trickle in maybe, quality is questionable,
              and you&apos;re stuck in a long contract. We built Blackline differently.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Transparency",
                desc: "You see exactly what we're building: the domains, the email accounts, the sequences, the prospect lists. No black box. You own the infrastructure.",
              },
              {
                title: "Focus",
                desc: "We don't serve everyone. We serve business coaches. That's it. We know your market, your buyers, and what messaging actually works for your niche.",
              },
              {
                title: "Quality Over Volume",
                desc: "We're not booking 50 meetings a month with tire-kickers. We're booking 8–15 meetings with people who actually fit your ICP and have a real problem you solve.",
              },
              {
                title: "Honest Timelines",
                desc: "Cold email takes 60–90 days to dial in. Anyone promising instant results is lying. We tell you the truth upfront and set realistic expectations from day one.",
              },
              {
                title: "Built by Operators",
                desc: "We use the same systems for our own business. If it doesn't work for us, we don't sell it to you.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-xl border border-white/[0.06] bg-white/[0.03] p-6"
              >
                <h3 className="mb-2 font-semibold text-white">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="border-t border-white/[0.06] py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="mb-10 text-center">
            <Badge
              variant="outline"
              className="mb-4 border-[#f34749]/30 text-[#f34749]"
            >
              FAQ
            </Badge>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Common Questions
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="rounded-xl border border-white/[0.06] bg-white/[0.02] px-6 [&:not(:last-child)]:mb-2"
              >
                <AccordionTrigger className="text-white hover:text-[#f34749] hover:no-underline text-left font-medium">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="relative border-t border-white/[0.06] bg-white/[0.02] py-20 sm:py-28 overflow-hidden">
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Ready to Fill Your Calendar?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">
            If you&apos;re a business coach doing $100K–$300K and ready to scale,
            book a strategy call. We&apos;ll show you exactly what your system would look like.
          </p>

          <div className="mx-auto mt-8 max-w-sm text-left">
            <ul className="space-y-3 mb-8">
              {[
                "Audit your current lead gen approach",
                "Define your ICP and ideal prospects",
                "Show you how we'd fill your calendar with qualified meetings",
                "Walk through what the first 90 days would look like",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Check size={16} className="mt-0.5 shrink-0 text-[#f34749]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
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
          <p className="mt-4 text-xs text-muted-foreground">
            No pitch. No pressure. Just a real conversation about whether this is a fit.
          </p>
        </div>
      </section>
    </>
  );
}
