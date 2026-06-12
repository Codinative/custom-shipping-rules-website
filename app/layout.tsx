import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ variable: "--font-sans", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://custom-shipping-rules.codinative.com"),
  title: {
    default: "Custom Shipping Rules — UPS weight-based quotes for BigCommerce",
    template: "%s — Custom Shipping Rules",
  },
  description:
    "A BigCommerce app by Codinative that quotes real UPS UAE Domestic shipping rates at checkout — calculated automatically from cart weight, in AED, as two delivery tiers.",
  keywords: [
    "BigCommerce shipping app", "UPS shipping rates", "weight-based shipping",
    "UAE shipping", "shipping quote builder", "Codinative", "AED shipping rates",
  ],
  openGraph: {
    type: "website",
    title: "Custom Shipping Rules — UPS weight-based quotes for BigCommerce",
    description:
      "Quote real UPS UAE Domestic shipping rates at your BigCommerce checkout — automatic, weight-based, priced in AED.",
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
