import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import Navbar from "@/components/Navbar"; // <-- BU SATIRI EKLE
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
        <Navbar /> {/* <-- BU SATIRI EKLE (Body'nin hemen içine) */}
        {children}
      </body>
    </html>
  );
}