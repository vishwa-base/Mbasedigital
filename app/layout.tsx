import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mbasedigital.com"),
  title: {
    default: "Mbase Digital | Search-Ready Websites and Digital Growth Systems",
    template: "%s | Mbase Digital",
  },
  description:
    "Mbase Digital builds fast, accessible, search-ready websites, content systems, and technical marketing workflows for growth-focused businesses.",
  applicationName: "Mbase Digital",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Mbase Digital | Search-Ready Websites and Digital Growth Systems",
    description:
      "Professional digital strategy, SEO, content systems, website development, and automation built around speed, clarity, and discoverability.",
    url: "https://mbasedigital.com",
    siteName: "Mbase Digital",
    images: [
      {
        url: "/images/mbase-digital-hero.webp",
        width: 1600,
        height: 900,
        alt: "Mbase Digital strategy workspace visual",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mbase Digital",
    description:
      "Fast, accessible, search-ready websites and digital growth systems.",
    images: ["/images/mbase-digital-hero.webp"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "light",
  themeColor: "#111827",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
