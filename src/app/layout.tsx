import type { Metadata } from "next";
import { Fraunces, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/layout/Footer";
import { NavBar } from "@/components/layout/NavBar";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
});

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken-grotesk",
});

export const metadata: Metadata = {
  title: "Tov Interiors and Integrated Services",
  description: "Interior design, construction and facility management under one roof.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${fraunces.variable} ${hankenGrotesk.variable}`}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
