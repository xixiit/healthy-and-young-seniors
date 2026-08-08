import type { Metadata, Viewport } from "next";
import { Adamina, Poppins, Libre_Baskerville } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

// preload is disabled on all three: they're defined in the root layout (so
// every route preloads them regardless of whether that page uses them),
// which triggers Chrome's "preloaded but not used within a few seconds"
// warning on fast static-file-server loads. `display: "swap"` (the next/font
// default) already avoids invisible text while the real font downloads, so
// the actual UX cost of not preloading is negligible.
const adamina = Adamina({
  variable: "--font-adamina",
  subsets: ["latin"],
  weight: "400",
  preload: false,
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "600"],
  preload: false,
});

const libreBaskerville = Libre_Baskerville({
  variable: "--font-libre-baskerville",
  subsets: ["latin"],
  weight: "400",
  preload: false,
});

export const metadata: Metadata = {
  title: "Healthy and Young Seniors",
  description:
    "Our mission is to help seniors be at their best health by inspiring a healthy lifestyle.",
};

export const viewport: Viewport = {
  themeColor: "#53a5e4",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${adamina.variable} ${poppins.variable} ${libreBaskerville.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
