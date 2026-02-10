"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent } from "react";
import { ArrowRight, MapPin } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ clientX, clientY, currentTarget }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  // Maske ayarı: 300px genişliğinde bir alan açar
  const maskImage = useMotionTemplate`radial-gradient(300px circle at ${mouseX}px ${mouseY}px, transparent 0%, black 100%)`;

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-background"
      onMouseMove={handleMouseMove}
    >
      {/* 1. KATMAN (EN ALT): TEMİZ ARABA */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/audi-temiz.png" 
          alt="Birlik Oto Clean Service"
          fill
          className="object-cover"
          priority // Sayfa açılır açılmaz yükle
          quality={100} // Maksimum kalite
          unoptimized={true} // 🔥 KRİTİK AYAR: Next.js sıkıştırmasını kapatır, orijinal dosyayı kullanır.
        />
      </div>

      {/* 2. KATMAN (ÜST): PİS ARABA (Sadece Masaüstü) */}
      <motion.div 
        className="absolute inset-0 z-10 hidden md:block"
        style={{ 
          maskImage: maskImage,
          WebkitMaskImage: maskImage 
        }}
      >
        <Image 
          src="/audi-pis.png" 
          alt="Birlik Oto Dirty Service"
          fill
          className="object-cover"
          priority
          quality={100} 
          unoptimized={true} // 🔥 KRİTİK AYAR: Sıkıştırmayı iptal et
        />
      </motion.div>

      {/* 3. KATMAN: GÖLGELENDİRME VE EFEKTLER (Yazı okunurluğu için) */}
      <div className="absolute inset-0 z-20 bg-gradient-to-t from-background via-background/40 to-transparent pointer-events-none"></div>
      <div className="absolute inset-0 z-20 bg-gradient-to-r from-background/70 via-transparent to-background/70 pointer-events-none"></div>

      {/* 4. KATMAN: İÇERİK */}
      <div className="container mx-auto px-4 relative z-30 pt-20">
        <div className="flex flex-col items-center text-center">
          
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 border border-white/10 bg-red-900/20 px-4 py-2 rounded-full mb-6 backdrop-blur-md"
          >
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-xs font-bold tracking-widest text-white uppercase">
              Yeşilpınar, İstanbul
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-8xl font-bold tracking-tighter text-white mb-6 drop-shadow-2xl"
          >
            USTALIK, GÜVEN <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-red-600">
              VE TİTİZLİK
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-200 max-w-2xl mb-10 leading-relaxed font-medium drop-shadow-md"
          >
            Aracınızın dilinden anlayan uzman kadro. 
            <span className="text-primary font-bold"> Birlik Oto</span> güvencesiyle 
            performansın sınırlarını zorlayın.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 bg-primary hover:bg-red-700 text-white rounded-lg font-bold transition-all flex items-center gap-3 group shadow-[0_0_20px_rgba(220,38,38,0.4)]"
            >
                RANDEVU OLUŞTUR
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button 
              onClick={() => scrollToSection('services')}
              className="px-8 py-4 bg-black/40 border border-white/20 hover:bg-white/10 text-white rounded-lg font-bold transition-all backdrop-blur-md"
            >
                HİZMETLERİMİZ
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}