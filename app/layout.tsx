import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  title: "Agricultural Marketplace",
  description:
    "A platform connecting farmers and buyers for sustainable agriculture.",
  // themeColor should be provided in the `viewport` export (Next 14+) — see generate-viewport docs
  openGraph: {
    title: "Agricultural Marketplace",
    description:
      "A platform connecting farmers and buyers for sustainable agriculture.",
    url: SITE_URL,
    siteName: "ETSEC",
    images: [
      {
        url: `${SITE_URL}/placeholder-logo.png`,
        width: 1200,
        height: 630,
        alt: "ETSEC logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agricultural Marketplace",
    description:
      "A platform connecting farmers and buyers for sustainable agriculture.",
    images: [`${SITE_URL}/placeholder-logo.png`],
  },
};

// Provide a metadataBase so Next can resolve absolute URLs for social images.
// Use NEXT_PUBLIC_SITE_URL in production, fallback to localhost for dev.
export const metadataBase = new URL(
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
);

// Provide viewport metadata (themeColor moved here to satisfy Next.js)
export const viewport = {
  themeColor: "#8B5E3C",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        {/* Skip link: hidden offscreen until focused */}
        <a
          href="#main-content"
          className="absolute -top-10 left-4 bg-background text-sm p-2 rounded focus:top-4 focus:ring-2 focus:outline-none"
        >
          Skip to content
        </a>

        <main id="main-content" tabIndex={-1}>
          {children}
        </main>

        <Analytics />
      </body>
    </html>
  );
}
