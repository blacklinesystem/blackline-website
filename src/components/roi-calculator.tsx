"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

export function ROICalculator() {
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
