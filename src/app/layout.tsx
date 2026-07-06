import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://zerogvac.com"),
  title: {
    default: "Zero G HVAC | Premium HVAC & Indoor Air Quality Services",
    template: "%s | Zero G HVAC",
  },
  description:
    "Professional HVAC installation, repair, maintenance, air purification, indoor air quality, and commercial HVAC solutions for homes and businesses.",
  keywords: [
    "Zero G HVAC",
    "HVAC installation",
    "HVAC repair",
    "indoor air quality",
    "air purification",
    "commercial HVAC",
    "HVAC maintenance plans",
  ],
  openGraph: {
    title: "Zero G HVAC | Cleaner, Healthier Indoor Air",
    description:
      "Premium HVAC installation, repair, maintenance, and indoor air quality solutions.",
    url: "https://zerogvac.com",
    siteName: "Zero G HVAC",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1600&q=80",
        width: 1600,
        height: 1067,
        alt: "Modern indoor comfort and HVAC service",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zero G HVAC | Premium HVAC Services",
    description:
      "HVAC installation, repair, maintenance, indoor air quality, and commercial HVAC services.",
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
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body>{children}</body>
    </html>
  );
}
