import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "RelaxCast",
  description: "An online streaming station for relaxing sounds",
  openGraph: {
    title: "RelaxCast",
    description: "An online streaming station for relaxing sounds",
    url: "https://relaxcast.net",
    siteName: "RelaxCast",
    images: [
      {
        url: "https://relaxcast.net/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "RelaxCast",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID!;

  return (
    <html lang="en">
      <body className="antialiased bg-stone-800 ">
        {children}
        <Footer />
      </body>
      <GoogleAnalytics gaId={gaId} />
    </html>
  );
}
