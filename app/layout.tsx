import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SITE_URL } from "@/lib/site";

const inter = Inter({ variable: "--font-sans", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  verification: { google: "mE51E51lm1Lwm73kSnZ_DXll15Ab0zp2aWaCnir5q2s" },
  title: {
    default: "Custom Shipping Rules - UPS UAE Shipping App for BigCommerce",
    template: "%s - Custom Shipping Rules",
  },
  description:
    "BigCommerce app that quotes real UPS UAE shipping rates at checkout - auto-calculated from cart weight in AED, across two delivery tiers. Try it free.",
  keywords: [
    "BigCommerce shipping app", "UPS shipping rates", "weight-based shipping",
    "UAE shipping", "shipping quote builder", "Codinative", "AED shipping rates",
  ],
  openGraph: {
    type: "website",
    title: "Custom Shipping Rules - UPS weight-based quotes for BigCommerce",
    description:
      "Quote real UPS UAE Domestic shipping rates at your BigCommerce checkout - automatic, weight-based, priced in AED.",
    siteName: "Custom Shipping Rules",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.variable}>{children}</body>
    </html>
  );
}
