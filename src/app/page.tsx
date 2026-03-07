import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedCounter } from "@/components/animated-counter";
import { ROICalculator } from "@/components/roi-calculator";
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
} from "lucide-react";

export const metadata: Metadata = {
  title: "Blackline | AI Cold Email Systems for Coaches & Consultants",
  description:
    "Blackline builds done-for-you AI cold email systems that book qualified discovery calls for coaches and consultants. Domains, mailboxes, leads, copy, and campaigns — launched in 14 days.",
  alternates: { canonical: "/" },
};

/* ── How It Works steps ── */
const steps = [
  {
    icon: Search,
    title: "ICP Workshop & Strategy",
    desc: "We get on a call and reverse-engineer your best clients. Who are they, what problems are they trying to solve, and exactly how to reach them. The output is a precise ICP document and outbound playbook built specifically around your coaching or consulting offer.",
  },
  {
    icon: Server,
    title: "Bulletproof Infrastructure",
    desc: "Dedicated sending domains, authenticated mailboxes, and warmup sequences that build real inbox trust. We build the technical foundation that lands in the primary inbox — not spam — before a single campaign email goes out.",
  },
  {
    icon: Users,
    title: "Targeted Prospect Sourcing",
    desc: "500+ verified decision-makers who match your exact ICP, sourced from premium databases and triple-verified for deliverability. Enriched with personalization data so every email feels like it was written for that one person.",
  },
  {
    icon: PenTool,
    title: "AI-Powered Email Sequences",
    desc: "Multi-step sequences crafted by AI and refined by us. Personal, punchy, and designed to start real conversations — not trigger spam filters. Every follow-up adds value instead of annoying. The goal is replies, not volume.",
  },
  {
    icon: Rocket,
    title: "Launch & Continuous Optimization",
    desc: "Campaigns go live with controlled sending ramps and real-time monitoring. We track opens, replies, and meetings booked — then optimize every variable. New subject lines, tighter copy, better targeting. The system gets sharper every week.",
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
            <Zap size={12} className="mr-1" /> Done-For-You Client Acquisition for Coaches &amp; Consultants
          </Badge>

          <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            We Fill Your Calendar.{" "}
            <span className="gradient-text">You Coach Your Clients.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Most coaches and consultants depend on referrals and LinkedIn posts to get clients.
            That&apos;s unpredictable. Blackline builds a done-for-you AI cold email system that
            books qualified discovery calls on autopilot — so you have a real pipeline, not just hope.
            We handle everything: domains, mailboxes, lead sourcing, AI copy, and ongoing campaigns.
            You just show up to the calls.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button
              asChild
              size="lg"
              className="bg-[#f34749] px-8 text-white hover:bg-[#d93d3f]"
            >
              <Link href="/contact">
                Book Your Strategy Session <ArrowRight size={16} className="ml-2" />
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
              <CalendarCheck size={14} className="text-[#f34749]" /> 14-Day System Launch
            </span>
            <span className="flex items-center gap-1">
              <Clock size={14} className="text-[#f34749]" /> No Long-Term Contracts
            </span>
            <span className="flex items-center gap-1">
              <Zap size={14} className="text-[#f34749]" /> Custom-Built For Your Offer
            </span>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="border-y border-white/[0.06] bg-white/[0.02] py-16">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 px-4 sm:grid-cols-4 sm:px-6">
          <AnimatedCounter
            end={500}
            suffix="+"
            label="Targeted Prospects Per Engagement"
          />
          <AnimatedCounter
            end={92}
            suffix="%+"
            label="Inbox Placement Rate"
          />
          <AnimatedCounter
            end={14}
            suffix=" Days"
            label="From Zero to Live"
          />
          <AnimatedCounter
            end={3}
            suffix="-5%"
            label="Targeted Reply Rate"
          />
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="relative py-20 sm:py-28">
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center">
            <Badge
              variant="outline"
              className="mb-4 border-[#f34749]/30 text-[#f34749]"
            >
              The Playbook
            </Badge>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Five Steps. A Full Pipeline.
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
              From blank slate to booked discovery calls in under three weeks.
              Every component built specifically around your coaching or consulting offer.
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
                See the Full Process <ArrowRight size={14} className="ml-2" />
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
              <Calculator size={12} className="mr-1" /> ROI Analyzer
            </Badge>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              What&apos;s Your Pipeline Worth?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
              Plug in your close rate and average client value. See what adding
              consistent discovery calls could do to your revenue. No fluff &mdash; just math.
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
                Get Your Custom Strategy <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
            <p className="mt-3 text-xs text-muted-foreground">
              Every engagement is custom-scoped around your offer, your ICP, and your market.
            </p>
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="relative border-t border-white/[0.06] bg-white/[0.02] py-20 sm:py-28 overflow-hidden">
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Your Next Clients Are Already in Their Inbox
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">
            The only question is whether they&apos;re hearing from you or your competitor.
            Book the strategy session. We&apos;ll show you exactly what your system would look like.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
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
          <p className="mt-4 text-xs text-muted-foreground">
            60-minute call. No obligation. No sales pitch. Just a real look at what your pipeline could be.
          </p>
        </div>
      </section>
    </>
  );
}
