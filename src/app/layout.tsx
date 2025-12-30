import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { generateOrganizationJsonLd } from "@/lib/jsonld";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const organizationJsonLd = generateOrganizationJsonLd();

export const metadata: Metadata = {
  title: {
    default: "BrainBazaar | Global Research Insights",
    template: "%s | BrainBazaar",
  },
  description:
    "Real human insights from around the world. We help brands understand their customers through qualitative and quantitative research across 55+ countries.",
  keywords: [
    "market research",
    "global research",
    "consumer insights",
    "qualitative research",
    "quantitative research",
    "UX research",
  ],
  authors: [{ name: "BrainBazaar" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://brainbazaar.com",
    siteName: "BrainBazaar",
    title: "BrainBazaar | Global Research Insights",
    description:
      "Real human insights from around the world. We help brands understand their customers through qualitative and quantitative research.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "BrainBazaar - Global Research Insights",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BrainBazaar | Global Research Insights",
    description: "Real human insights from around the world.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
      </head>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
