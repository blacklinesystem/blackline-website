"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedCounter } from "@/components/animated-counter";
import {
  Search,
  Server,
  Users,
  PenTool,
  Rocket,
  ArrowRight,
  Shield,
  Clock,
  Zap,
  Calculator,
  Sparkles,
} from "lucide-react";

/* ── How It Works steps ── */
const steps = [
  {
    icon: Search,
    title: "Deep-Dive Strategy",
    desc: "We reverse-engineer your best clients. Who are they, what keeps them up at night, and exactly how to get their attention. No generic templates. A playbook built from your wins.",
  },
  {
    icon: Server,
    title: "Bulletproof Infrastructure",
    desc: "Dedicated domains, authenticated mailboxes, warmup sequences that actually work. We build the engine that lands in the primary inbox, not the promotions tab.",
  },
  {
    icon: Users,
    title: "Surgical Lead Sourcing",
    desc: "Thousands of verified decision-makers who match your ideal buyer profile. Enriched, segmented, and ready to hear from you. No spray-and-pray.",
  },
  {
    icon: PenTool,
    title: "Copy That Converts",
    desc: "AI-crafted emails that read like they were written by your sharpest sales rep at 2am on a caffeine high. Personal, punchy, impossible to ignore.",
  },
  {
    icon: Rocket,
    title: "Launch & Dominate",
    desc: "Campaigns go live, replies start flowing, and we optimize every variable in real-time. Open rates, reply rates, meeting rates. We obsess so you don't have to.",
  },
];

/* ── ROI Calculator Component ── */
function ROICalculator() {
  const [monthlyRevenue, setMonthlyRevenue] = useState(50000);
  const [dealSize, setDealSize] = useState(5000);
  const [currentMeetings, setCurrentMeetings] = useState(4);

  // Conservative calculation logic
  // Additional meetings scale based on current operation size
  const baseAdditionalMeetings = 8;
  const scaleFactor = Math.min(monthlyRevenue / 50000, 2.5);
  const additionalMeetingsLow = Math.round(baseAdditionalMeetings * scaleFactor);
  const additionalMeetingsHigh = Math.round(additionalMeetingsLow * 2.2);

  // Conservative close rates: 15% low, 25% high
  const closeRateLow = 0.15;
  const closeRateHigh = 0.25;

  const newRevenueLow = Math.round(additionalMeetingsLow * dealSize * closeRateLow);
  const newRevenueHigh = Math.round(additionalMeetingsHigh * dealSize * closeRateHigh);

  const formatCurrency = (n: number) =>
    n >= 1000 ? `$${(n / 1000).toFixed(n % 1000 === 0 ? 0 : 1)}K` : `$${n.toLocaleString()}`;

  return (
    <Card className="border-white/[0.08] bg-gradient-to-br from-[#1a1a1a] to-[#111111] shadow-2xl">
      <CardContent className="p-6 sm:p-10">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Inputs */}
          <div className="space-y-8">
            <div>
              <div className="mb-3 flex justify-between text-sm">
                <span className="text-muted-foreground">Monthly Revenue</span>
                <span className="font-semibold text-white">${monthlyRevenue.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min={10000}
                max={500000}
                step={5000}
                value={monthlyRevenue}
                onChange={(e) => setMonthlyRevenue(Number(e.target.value))}
                className="w-full accent-[#f34749]"
              />
              <div className="mt-1 flex justify-between text-xs text-muted-foreground">
                <span>$10K</span>
                <span>$500K</span>
              </div>
            </div>

            <div>
              <div className="mb-3 flex justify-between text-sm">
                <span className="text-muted-foreground">Average Deal Size</span>
                <span className="font-semibold text-white">${dealSize.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min={500}
                max={100000}
                step={500}
                value={dealSize}
                onChange={(e) => setDealSize(Number(e.target.value))}
                className="w-full accent-[#f34749]"
              />
              <div className="mt-1 flex justify-between text-xs text-muted-foreground">
                <span>$500</span>
                <span>$100K</span>
              </div>
            </div>

            <div>
              <div className="mb-3 flex justify-between text-sm">
                <span className="text-muted-foreground">Current Outbound Meetings / Month</span>
                <span className="font-semibold text-white">{currentMeetings}</span>
              </div>
              <input
                type="range"
                min={0}
                max={30}
                step={1}
                value={currentMeetings}
                onChange={(e) => setCurrentMeetings(Number(e.target.value))}
                className="w-full accent-[#f34749]"
              />
              <div className="mt-1 flex justify-between text-xs text-muted-foreground">
                <span>0</span>
                <span>30</span>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="flex flex-col justify-center">
            <div className="space-y-6">
              <div className="rounded-xl border border-white/[0.06] bg-white/[0.03] p-5">
                <p className="text-sm text-muted-foreground">Estimated Additional Meetings / Month</p>
                <p className="mt-1 text-2xl font-bold text-white">
                  {additionalMeetingsLow} &ndash; {additionalMeetingsHigh}
                </p>
              </div>

              <div className="rounded-xl border border-[#f34749]/20 bg-[#f34749]/[0.05] p-5">
                <p className="text-sm text-muted-foreground">Estimated New Revenue / Month</p>
                <p className="mt-1 text-3xl font-bold text-[#f34749]">
                  {formatCurrency(newRevenueLow)} &ndash; {formatCurrency(newRevenueHigh)}
                </p>
              </div>

              <div className="rounded-xl border border-white/[0.06] bg-white/[0.03] p-5">
                <p className="text-sm text-muted-foreground">Your Current Outbound Meetings</p>
                <p className="mt-1 text-2xl font-bold text-white">
                  {currentMeetings} / month{" "}
                  <span className="text-base font-normal text-muted-foreground">
                    &rarr; {currentMeetings + additionalMeetingsLow}&ndash;{currentMeetings + additionalMeetingsHigh} / month
                  </span>
                </p>
              </div>
            </div>

            <p className="mt-5 text-xs leading-relaxed text-muted-foreground">
              Based on conservative estimates (15&ndash;25% close rate, proven campaign benchmarks).
              Actual results depend on your offer, market, and sales process.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

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
            <Zap size={12} className="mr-1" /> Cold Email Systems Built to Print Pipeline
          </Badge>

          <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            We Build the Machine.{" "}
            <span className="gradient-text">You Close the Deals.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Your competitors are still cold-calling into the void. Meanwhile,
            your inbox fills with &ldquo;let&apos;s talk&rdquo; replies from decision-makers
            who actually want to hear from you. We build your entire outbound engine
            and launch it in 14 days. Domains, mailboxes, leads, copy, campaigns.
            You just show up to the meetings.
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
              <Shield size={14} className="text-[#f34749]" /> 14-Day Launch Guarantee
            </span>
            <span className="flex items-center gap-1">
              <Clock size={14} className="text-[#f34749]" /> No Contracts
            </span>
            <span className="flex items-center gap-1">
              <Sparkles size={14} className="text-[#f34749]" /> Custom-Built For You
            </span>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="border-y border-white/[0.06] bg-white/[0.02] py-16">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 px-4 sm:grid-cols-4 sm:px-6">
          <AnimatedCounter
            end={50}
            suffix="K+"
            label="Cold Emails Sent Monthly"
          />
          <AnimatedCounter
            end={97}
            suffix="%"
            label="Inbox Placement Rate"
          />
          <AnimatedCounter
            end={14}
            suffix=" Days"
            label="From Zero to Live"
          />
          <AnimatedCounter
            end={4}
            suffix=".1%"
            label="Avg. Reply Rate"
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
              Five Steps. Full Pipeline.
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
              From blank slate to booked meetings in under three weeks.
              No guesswork. No wasted months figuring it out.
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

      {/* ── ROI Analyzer (replaces pricing) ── */}
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
              See What&apos;s Sitting on the Table
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
              Plug in your numbers. See what a real outbound system could add to
              your bottom line. No fluff &mdash; just math.
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
              Every engagement is custom-scoped. We build the system around YOUR numbers, not a one-size-fits-all package.
            </p>
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="relative border-t border-white/[0.06] bg-white/[0.02] py-20 sm:py-28 overflow-hidden">
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Your Next 50 Clients Are Already in Their Inbox
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">
            The only question is whether they&apos;re hearing from you or your competitor.
            Book the call. Let&apos;s build the machine.
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
            60-minute call. No obligation. No sales pitch. Just strategy.
          </p>
        </div>
      </section>
    </>
  );
}
