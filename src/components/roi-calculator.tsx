"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, TrendingUp, Minus } from "lucide-react";

export function ROICalculator() {
  const [monthlyRevenue, setMonthlyRevenue] = useState(50000);
  const [dealSize, setDealSize] = useState(5000);
  const [currentMeetings, setCurrentMeetings] = useState(4);

  // Conservative calculation logic
  const baseAdditionalMeetings = 8;
  const scaleFactor = Math.min(monthlyRevenue / 50000, 2.5);
  const additionalMeetingsLow = Math.round(baseAdditionalMeetings * scaleFactor);
  const additionalMeetingsHigh = Math.round(additionalMeetingsLow * 2.2);

  // Close rates: 15% low, 25% high
  const closeRateLow = 0.15;
  const closeRateHigh = 0.25;

  // Current estimated revenue from outbound
  const currentOutboundRevenue = Math.round(currentMeetings * dealSize * 0.2);

  // New totals with Blackline
  const newMeetingsLow = currentMeetings + additionalMeetingsLow;
  const newMeetingsHigh = currentMeetings + additionalMeetingsHigh;
  const newRevenueLow = Math.round(newMeetingsLow * dealSize * closeRateLow);
  const newRevenueHigh = Math.round(newMeetingsHigh * dealSize * closeRateHigh);

  const formatCurrency = (n: number) => {
    if (n >= 1000000) return `$${(n / 1000000).toFixed(1)}M`;
    if (n >= 1000) return `$${(n / 1000).toFixed(n % 1000 === 0 ? 0 : 1)}K`;
    return `$${n.toLocaleString()}`;
  };

  // Estimated reply rate based on scale
  const estimatedReplyRate = Math.min(3.0 + scaleFactor * 0.6, 5.0).toFixed(1);

  return (
    <Card className="border-white/[0.08] bg-gradient-to-br from-[#1a1a1a] to-[#111111] shadow-2xl overflow-hidden">
      <CardContent className="p-0">
        {/* ── Input Section ── */}
        <div className="border-b border-white/[0.06] p-6 sm:p-8">
          <p className="mb-6 text-sm font-medium text-white/60 uppercase tracking-wider">
            Tell us about your business
          </p>
          <div className="grid gap-6 sm:gap-8 lg:grid-cols-3">
            <div>
              <div className="mb-3 flex justify-between text-sm">
                <span className="text-muted-foreground">Monthly Revenue</span>
                <span className="font-semibold text-white tabular-nums">
                  ${monthlyRevenue.toLocaleString()}
                </span>
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
                <span className="font-semibold text-white tabular-nums">
                  ${dealSize.toLocaleString()}
                </span>
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
                <span className="text-muted-foreground">Outbound Meetings / Month</span>
                <span className="font-semibold text-white tabular-nums">
                  {currentMeetings}
                </span>
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
        </div>

        {/* ── Before / After Comparison ── */}
        <div className="grid lg:grid-cols-[1fr,auto,1fr]">
          {/* NOW — Before */}
          <div className="p-6 sm:p-8">
            <div className="mb-5 flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10">
                <Minus size={12} className="text-white/50" />
              </div>
              <p className="text-sm font-semibold uppercase tracking-wider text-white/40">
                Where you are now
              </p>
            </div>

            <div className="space-y-4">
              <div className="rounded-xl border border-white/[0.06] bg-white/[0.03] p-4">
                <p className="text-xs text-muted-foreground">Outbound Meetings</p>
                <p className="mt-1 text-3xl font-bold tabular-nums text-white/50">
                  {currentMeetings}
                  <span className="text-sm font-normal text-white/30"> / month</span>
                </p>
              </div>

              <div className="rounded-xl border border-white/[0.06] bg-white/[0.03] p-4">
                <p className="text-xs text-muted-foreground">Estimated Outbound Revenue</p>
                <p className="mt-1 text-3xl font-bold tabular-nums text-white/50">
                  {formatCurrency(currentOutboundRevenue)}
                  <span className="text-sm font-normal text-white/30"> / month</span>
                </p>
              </div>

              <div className="rounded-xl border border-white/[0.06] bg-white/[0.03] p-4">
                <p className="text-xs text-muted-foreground">Reply Rate</p>
                <p className="mt-1 text-3xl font-bold tabular-nums text-white/50">
                  {currentMeetings > 0 ? "~1%" : "0%"}
                </p>
                <p className="mt-1 text-xs text-white/25">
                  {currentMeetings === 0 ? "No outbound system" : "Industry avg. for DIY outbound"}
                </p>
              </div>
            </div>
          </div>

          {/* Arrow divider */}
          <div className="hidden lg:flex items-center justify-center px-2">
            <div className="flex h-full flex-col items-center justify-center">
              <div className="h-full w-px bg-gradient-to-b from-transparent via-[#f34749]/30 to-transparent" />
              <div className="my-4 flex h-10 w-10 items-center justify-center rounded-full border border-[#f34749]/30 bg-[#f34749]/10">
                <ArrowRight size={18} className="text-[#f34749]" />
              </div>
              <div className="h-full w-px bg-gradient-to-b from-transparent via-[#f34749]/30 to-transparent" />
            </div>
          </div>
          {/* Mobile arrow */}
          <div className="flex items-center justify-center py-2 lg:hidden">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#f34749]/30 bg-[#f34749]/10 rotate-90 lg:rotate-0">
              <ArrowRight size={18} className="text-[#f34749]" />
            </div>
          </div>

          {/* WITH BLACKLINE — After */}
          <div className="p-6 sm:p-8 bg-[#f34749]/[0.03]">
            <div className="mb-5 flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#f34749]/20">
                <TrendingUp size={12} className="text-[#f34749]" />
              </div>
              <p className="text-sm font-semibold uppercase tracking-wider text-[#f34749]">
                With Blackline
              </p>
            </div>

            <div className="space-y-4">
              <div className="rounded-xl border border-[#f34749]/20 bg-[#f34749]/[0.06] p-4">
                <p className="text-xs text-[#f34749]/60">Outbound Meetings</p>
                <p className="mt-1 text-3xl font-bold tabular-nums text-white">
                  {newMeetingsLow}–{newMeetingsHigh}
                  <span className="text-sm font-normal text-white/50"> / month</span>
                </p>
                {additionalMeetingsLow > 0 && (
                  <p className="mt-1 text-xs text-[#f34749]">
                    +{additionalMeetingsLow}–{additionalMeetingsHigh} additional meetings
                  </p>
                )}
              </div>

              <div className="rounded-xl border border-[#f34749]/20 bg-[#f34749]/[0.06] p-4">
                <p className="text-xs text-[#f34749]/60">Estimated Outbound Revenue</p>
                <p className="mt-1 text-3xl font-bold tabular-nums text-white">
                  {formatCurrency(newRevenueLow)}–{formatCurrency(newRevenueHigh)}
                  <span className="text-sm font-normal text-white/50"> / month</span>
                </p>
                {newRevenueLow > currentOutboundRevenue && (
                  <p className="mt-1 text-xs text-[#f34749]">
                    +{formatCurrency(newRevenueLow - currentOutboundRevenue)}–{formatCurrency(newRevenueHigh - currentOutboundRevenue)} increase
                  </p>
                )}
              </div>

              <div className="rounded-xl border border-[#f34749]/20 bg-[#f34749]/[0.06] p-4">
                <p className="text-xs text-[#f34749]/60">Target Reply Rate</p>
                <p className="mt-1 text-3xl font-bold tabular-nums text-white">
                  {estimatedReplyRate}%+
                </p>
                <p className="mt-1 text-xs text-white/40">
                  Based on optimized infrastructure + AI copy
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-white/[0.06] px-6 py-4 sm:px-8">
          <p className="text-xs text-center text-muted-foreground/60">
            Estimates based on conservative benchmarks (15–25% close rate). Actual results
            depend on your offer, market, and sales process. These are targets, not guarantees.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
