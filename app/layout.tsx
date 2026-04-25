import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import TrustedForm from "@/components/tracking/TrustedForm";
import Jornaya from "@/components/tracking/Jornaya";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Compare Auto Insurance Quotes | AutoShield",
  description:
    "Compare free auto insurance quotes from 30+ top providers in 90 seconds. Find the best rates and save up to $597/year. No spam, no obligations — just real savings.",
  keywords: "auto insurance, car insurance quotes, cheap car insurance, compare insurance rates",
  openGraph: {
    title: "Compare Auto Insurance Quotes | AutoShield",
    description: "Save up to $597/year. Compare free quotes from 30+ top providers in 90 seconds.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={manrope.variable}>
      <body>
        <TrustedForm />
        <Jornaya />
        {children}
      </body>
    </html>
  );
}
