import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const gWeiss = localFont({
  src: "./fonts/GABRWFFR.woff2",
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shayne Lachapelle | Computer Science Student at McGill University",
  description:
    "Computer Science student at McGill University, Summer Technology Analyst at Morgan Stanley.",
  openGraph: {
    title: "Shayne Lachapelle | Computer Science Student at McGill University",
    description:
      "Computer Science Student at McGill University | Summer Technology Analyst at Morgan Stanley",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${gWeiss.variable}`}>
      <body>{children}</body>
    </html>
  );
}
