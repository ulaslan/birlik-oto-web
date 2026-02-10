"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, MapPin } from "lucide-react";

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-white/5"
    >
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        
        {/* LOGO KISMI */}
        <div className="flex items-center gap-3">
          <div className="relative w-12 h-12 md:w-14 md:h-14">
             {/* Logo dosyanı public klasörüne attıysan burası çalışır */}
            <Image 
              src="/logo.png" 
              alt="Birlik Oto Logo" 
              fill
              className="object-contain"
            />
          </div>
          <div className="hidden md:block">
            <h1 className="text-xl font-bold text-white tracking-tighter">BİRLİK OTO</h1>
            <p className="text-[10px] text-metallic tracking-[0.2em]">MEKANİK • BAKIM • YIKAMA SERVİSİ</p>
          </div>
        </div>

        {/* SAĞ TARAFAKİ BUTONLAR */}
        <div className="flex items-center gap-4">
          <a href="tel:05465826658" className="hidden md:flex items-center gap-2 text-sm font-medium text-white hover:text-primary transition-colors">
            <Phone className="w-4 h-4" />
            0546 582 66 58
          </a>
          <button className="bg-primary hover:bg-red-700 text-white px-5 py-2.5 rounded-lg text-sm font-bold transition-all shadow-[0_0_15px_rgba(220,38,38,0.4)] hover:shadow-[0_0_25px_rgba(220,38,38,0.6)]">
            RANDEVU AL
          </button>
        </div>
      </div>
    </motion.nav>
  );
}