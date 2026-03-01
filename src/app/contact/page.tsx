import { Badge } from "@/components/ui/badge";
import { Mail, Clock, Shield, Zap } from "lucide-react";

export default function ContactPage() {
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
            <Zap size={12} className="mr-1" /> Let&apos;s Build Something
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Your Pipeline Won&apos;t{" "}
            <span className="gradient-text">Build Itself</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            Grab an hour on our calendar. We&apos;ll dig into your business, your buyers,
            and your goals, then map out exactly what a custom outbound system
            looks like for you. No pitch deck. No pressure. Just a real conversation
            about how to fill your pipeline.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <Clock size={16} className="text-[#f34749]" /> 60-min strategy session
            </span>
            <span className="flex items-center gap-2">
              <Shield size={16} className="text-[#f34749]" /> Zero obligation
            </span>
            <span className="flex items-center gap-2">
              <Mail size={16} className="text-[#f34749]" /> Instant confirmation
            </span>
          </div>
        </div>
      </section>

      {/* Cal.com Embed */}
      <section className="mx-auto max-w-4xl px-4 pb-20 sm:px-6 sm:pb-28">
        <div className="overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02]">
          {/* Replace "your-cal-link" with your actual Cal.com username/event */}
          <iframe
            src="https://cal.com/nicholastochev/60min?embed=true&theme=dark"
            className="h-[700px] w-full border-0"
            title="Book a Strategy Call"
            loading="lazy"
          />
        </div>
        <div className="mt-6 text-center">
          <p className="text-sm text-muted-foreground">
            Prefer email?{" "}
            <a
              href="mailto:hello@blacklinesystem.com"
              className="text-[#f34749] hover:text-[#ff6b6b] transition-colors"
            >
              hello@blacklinesystem.com
            </a>
          </p>
          <p className="mt-2 text-xs text-muted-foreground">
            You&apos;ll get a confirmation email with meeting details instantly.
          </p>
        </div>
      </section>
    </>
  );
}
