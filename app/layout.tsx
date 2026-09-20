import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { brand } from "@/lib/brand";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
});

const description =
  "Esquire Asset Recovery, LLC helps individuals and families reclaim surplus funds and excess proceeds after foreclosure. No upfront costs. Attorney-owned. Austin, Texas.";

export const metadata: Metadata = {
  metadataBase: new URL("https://esquireassetrecovery.com"),
  title: {
    default: brand.name,
    template: `%s | ${brand.shortName}`,
  },
  description,
  openGraph: {
    title: brand.name,
    description,
    type: "website",
    locale: "en_US",
    siteName: brand.name,
    images: [{ url: brand.logoSrc, alt: brand.name }],
  },
  twitter: {
    card: "summary",
    title: brand.name,
    description,
  },
  icons: {
    icon: brand.logoSrc,
    apple: brand.logoSrc,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-ivory font-sans text-charcoal">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[60] focus:bg-gold focus:px-4 focus:py-2 focus:text-forest"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
