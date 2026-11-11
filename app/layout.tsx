import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar"; 
import Footer from "@/components/Footer"; 
import ScrollToTop  from "@/components/ScrollToTop"; 
import WhatsAppButton  from "@/components/WhatsAppButton"; 
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dreamdesty - Incredible India, beautifully explored",
  description: "Curated journeys across the country.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0b1329] text-white">
        
        {/* 1. Navbar sabse upar */}
        <Navbar />
        
        {/* 2. Main content beech me */}
        <main className="flex-grow">{children}</main>
        
        {/* 3. Footer sabse last me */}
        <Footer />
        <ScrollToTop />
        <WhatsAppButton />
        
      </body>
    </html>
  );
}