import type { Metadata, Viewport } from "next";
import { Adamina, Poppins, Libre_Baskerville } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

const adamina = Adamina({
  variable: "--font-adamina",
  subsets: ["latin"],
  weight: "400",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "600"],
});

const libreBaskerville = Libre_Baskerville({
  variable: "--font-libre-baskerville",
  subsets: ["latin"],
  weight: "400",
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
