"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "First month: 17 qualified meetings. Second month: 23. We closed $140K in new business from cold email alone in 60 days. I used to think outbound was dead. It was just broken.",
    name: "Marcus T.",
    role: "Founder, SaaS Startup (Series A)",
  },
  {
    quote:
      "We burned $8K on an SDR who booked 3 meetings in 2 months. Blackline had our infrastructure live in 12 days and we had 9 meetings on the calendar before month one was over. Not even close.",
    name: "Sarah K.",
    role: "VP Sales, B2B Agency",
  },
  {
    quote:
      "Six months trying to figure out cold email in-house. Deliverability issues, garbage copy, bounced leads. Blackline rebuilt the whole thing in two weeks and we hit a 4.2% reply rate out the gate. Should have called them first.",
    name: "David R.",
    role: "CEO, Management Consulting Firm",
  },
  {
    quote:
      "My sales team was spending 60% of their time prospecting instead of closing. Now the meetings just show up on their calendars. Pipeline is up 3x and my closers are actually closing.",
    name: "Jen A.",
    role: "Head of Growth, FinTech Startup",
  },
];

export function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative mx-auto max-w-2xl">
      <Card className="glass-card border-white/[0.06] bg-white/[0.03]">
        <CardContent className="px-8 py-10 text-center">
          <Quote className="mx-auto mb-4 h-8 w-8 text-[#f34749] opacity-60" />
          <p className="text-lg leading-relaxed text-white/90">
            &ldquo;{testimonials[current].quote}&rdquo;
          </p>
          <div className="mt-6">
            <p className="font-semibold text-white">
              {testimonials[current].name}
            </p>
            <p className="text-sm text-muted-foreground">
              {testimonials[current].role}
            </p>
          </div>
        </CardContent>
      </Card>

      <div className="mt-6 flex items-center justify-center gap-4">
        <button
          onClick={() =>
            setCurrent(
              (prev) =>
                (prev - 1 + testimonials.length) % testimonials.length
            )
          }
          className="rounded-full border border-white/10 p-2 text-white/50 transition hover:border-[#f34749] hover:text-[#f34749]"
          aria-label="Previous testimonial"
        >
          <ChevronLeft size={16} />
        </button>

        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all ${
                i === current
                  ? "w-6 bg-[#f34749]"
                  : "w-2 bg-white/20 hover:bg-white/40"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={() =>
            setCurrent((prev) => (prev + 1) % testimonials.length)
          }
          className="rounded-full border border-white/10 p-2 text-white/50 transition hover:border-[#f34749] hover:text-[#f34749]"
          aria-label="Next testimonial"
        >
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
}
