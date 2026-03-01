import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const siteUrl = "https://blacklinesystem.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Blackline | AI Cold Email Systems That Book Meetings",
    template: "%s | Blackline",
  },
  description:
    "Done-for-you AI cold email infrastructure. Launched in 14 days. We build the domains, mailboxes, leads, and AI-written emails so you just show up to meetings.",
  keywords: [
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
    icon: "/favicon.svg",
    apple: "/favicon.svg",
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
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
