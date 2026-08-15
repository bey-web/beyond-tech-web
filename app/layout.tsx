import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://beyondtech.africa";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Beyond Tech — Technology That Takes Your Business Further",
    template: "%s — Beyond Tech",
  },
  description:
    "We build the systems, platforms, and digital presence that let African businesses operate at a global standard — and prove it with real, delivered work.",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Beyond Tech",
  url: siteUrl,
  description:
    "Beyond Tech builds the systems, platforms, and digital presence that let African businesses operate at a global standard.",
  parentOrganization: {
    "@type": "Organization",
    name: "Beyond Group Ltd",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased text-ink bg-paper`}>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
