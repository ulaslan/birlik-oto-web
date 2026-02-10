import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import Navbar from "@/components/Navbar";
import BrandMarquee from "@/components/BrandMarquee";
import "./globals.css";

const manrope = Manrope({ 
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Birlik Oto | Premium Otomotiv Servis",
  description: "İstanbul Eyüpsultan'da 750m² modern servis alanı.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body className={`${manrope.variable} font-sans bg-background text-white antialiased`}>
        
        {/* 🔥 OVERLAY KUTUSU 🔥 */}
        {/* absolute: Hero'nun üzerinde yüzsün. */}
        {/* flex-col: İçindekiler (Şerit ve Navbar) alt alta dizilsin, çakışmasın. */}
        <div className="absolute top-0 left-0 w-full z-50 flex flex-col">
          
          {/* 1. Sıra: Şerit */}
          <BrandMarquee />
          
          {/* 2. Sıra: Navbar (Globals.css sayesinde şeridin altına gelir) */}
          <Navbar />
          
        </div>

        {/* Hero ve Sayfa İçeriği */}
        {children}
        
      </body>
    </html>
  );
}