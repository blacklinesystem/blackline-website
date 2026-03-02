import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const siteUrl = "https://blacklinesystem.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Blackline | AI Cold Email Systems That Book Meetings",
    template: "%s | Blackline",
  },
  description:
    "Done-for-you AI cold email infrastructure. Launched in 14 days. We build the domains, mailboxes, leads, and AI-written emails so you just show up to meetings.",
  keywords: [
    "Blackline",
    "Blackline cold email",
    "Blackline email system",
    "cold email agency",
    "AI cold email",
    "cold email infrastructure",
    "outbound email system",
    "email lead generation",
    "B2B lead generation",
    "cold email setup",
    "email outreach agency",
    "done for you cold email",
    "cold email deliverability",
    "book meetings with cold email",
    "AI email copywriting",
    "outbound sales system",
    "cold email campaign management",
  ],
  authors: [{ name: "Blackline" }],
  creator: "Blackline",
  publisher: "Blackline",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Blackline",
    title: "Blackline | AI Cold Email Systems That Book Meetings",
    description:
      "Done-for-you AI cold email infrastructure. Launched in 14 days. We build the domains, mailboxes, leads, and AI-written emails so you just show up to meetings.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blackline | AI Cold Email Systems That Book Meetings",
    description:
      "Done-for-you AI cold email infrastructure. Launched in 14 days. Domains, mailboxes, leads, AI copy — you just show up to meetings.",
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: "/icon",
    apple: "/icon",
  },
  verification: {
    google: "lx_ej24nbzo8JYOMuY-Zzp5kLFLntvGvF15kyBxAH7k",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Blackline",
              description:
                "Done-for-you AI cold email infrastructure. We build complete outbound systems — domains, mailboxes, leads, AI-written emails — launched in 14 days.",
              url: siteUrl,
              logo: `${siteUrl}/logo.svg`,
              email: "hello@blacklinesystem.com",
              areaServed: "Worldwide",
              serviceType: [
                "Cold Email Infrastructure",
                "AI Email Copywriting",
                "B2B Lead Generation",
                "Outbound Sales Systems",
                "Email Deliverability Setup",
              ],
              priceRange: "$$",
              sameAs: [],
              contactPoint: {
                "@type": "ContactPoint",
                email: "hello@blacklinesystem.com",
                contactType: "sales",
                availableLanguage: "English",
              },
              offers: {
                "@type": "Offer",
                description:
                  "Custom AI cold email system built and launched in 14 days",
                availability: "https://schema.org/InStock",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "What is Blackline?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Blackline is a done-for-you AI cold email agency. We build complete outbound systems — domains, mailboxes, verified leads, and AI-written email campaigns — and launch them in 14 days so you can focus on closing deals.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How long does it take Blackline to set up a cold email system?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Blackline launches your complete cold email system in 14 days. This includes domain setup, mailbox authentication, lead sourcing, AI copywriting, and campaign launch with real-time monitoring.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What does Blackline's cold email service include?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Every Blackline engagement includes: deep ICP research, dedicated sending domains with full DNS authentication, warmed mailboxes, verified and enriched lead lists, AI-personalized email sequences, campaign monitoring, A/B testing, and ongoing optimization.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How is Blackline different from other cold email agencies?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Blackline builds the entire infrastructure from scratch — we don't use shared domains or recycled lead lists. Every system is custom-built for your business, your ICP, and your market. We use AI to write personalized copy and continuously optimize campaigns for maximum reply rates.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What kind of results can I expect from Blackline?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Results vary based on your offer, market, and sales process. Our systems are built to target 3-5% reply rates and deliver qualified meetings consistently. We provide estimated projections based on industry benchmarks during your strategy call.",
                  },
                },
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Blackline",
              alternateName: "Blackline Cold Email Systems",
              url: siteUrl,
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
