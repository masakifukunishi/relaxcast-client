import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "RelaxCast",
  description: "An online streaming station for relaxing sounds",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID!;
  const adsenseId = process.env.NEXT_PUBLIC_ADSENSE_ID!;

  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
      <GoogleAnalytics gaId={gaId} />
    </html>
  );
}
