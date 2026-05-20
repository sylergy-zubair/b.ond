import type { Metadata } from "next";
import { Cormorant_Garamond } from "next/font/google";
import Home2Footer from "@/components/home2/Home2Footer";
import Home2Header from "@/components/home2/Home2Header";

const lussoSerif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-lusso-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lusso Dental Studio — Cosmetic dentistry in London",
  description:
    "Boutique cosmetic dentistry in London. Composite bonding, smile makeovers, and AI smile preview.",
};

export const viewport = {
  themeColor: "#1a2a3a",
};

export default function Home2Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div data-page="home2" className={lussoSerif.variable}>
      <Home2Header />
      <div className="flex flex-1 flex-col">{children}</div>
      <Home2Footer />
    </div>
  );
}
