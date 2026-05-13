import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import { ThemeProvider } from "@/components/ThemeProvider";
import ThemeToggle from "@/components/ThemeToggle";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "AI Compliance System | Amazon Portfolio Case Study",
  description: "Senior AI Product Case Study: AI-Powered Real Estate Compliance Detection & Removal System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-[white] dark:bg-[#1C1E21] text-[#1C1E21] dark:text-slate-50 selection:bg-[#BFDBFE] selection:text-slate-900 dark:selection:bg-[#2563EB]/40 dark:selection:text-white transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <SiteHeader />
          <ThemeToggle />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

