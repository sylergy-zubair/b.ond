import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import WhatsAppButton from "@/components/global/WhatsAppButton";
import CookieBanner from "@/components/global/CookieBanner";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "B.OND — Composite bonding in London",
    template: "%s · B.OND",
  },
  description:
    "Cosmetic composite bonding, the way it should feel. AI smile preview, transparent pricing, friendly clinicians in London.",
  metadataBase: new URL("https://bond.dental"),
  openGraph: {
    title: "B.OND — Composite bonding in London",
    description:
      "Cosmetic composite bonding, the way it should feel. AI smile preview, transparent pricing.",
    url: "https://bond.dental",
    siteName: "B.OND",
    locale: "en_GB",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#f4efe8",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col font-sans">
        {children}
        <WhatsAppButton />
        <CookieBanner />
      </body>
    </html>
  );
}
