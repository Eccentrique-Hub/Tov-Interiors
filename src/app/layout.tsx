import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tov Interiors",
  description: "Full-service interior design, architecture, construction, and facility management.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
