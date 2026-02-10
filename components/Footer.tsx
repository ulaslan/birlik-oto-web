"use client";

import { Phone, MapPin, Instagram, Mail, ArrowUp, Facebook } from "lucide-react";
import Image from "next/image";

// TikTok ikonu
const TikTokIcon = () => (
  <svg 
    viewBox="0 0 24 24" 
    width="24" 
    height="24" 
    stroke="currentColor" 
    strokeWidth="2" 
    fill="none" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black border-t border-white/10 pt-20 pb-10">
      <div className="container mx-auto px-4">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          
          {/* Sol Taraf: İletişim ve Sosyal Medya */}
          <div>
            
            {/* LOGO ALANI (Büyütüldü) */}
            {/* Yüksekliği artırdık (h-28), marjini azalttık (mb-2) ki alttaki yazı kaymasın */}
            <div className="mb-2 relative w-80 h-28"> 
              <Image 
                src="/logo.png" 
                alt="Birlik Oto Logo" 
                fill
                className="object-contain object-left" // Sola yaslı
                priority
              />
            </div>

            <p className="text-gray-400 max-w-md mb-10 text-lg">
              Aracınızın performansı ve güvenliği için profesyonel çözümler. 
              Yeşilpınar'ın en kapsamlı otomotiv bakım merkezi.
            </p>

            {/* İletişim Bilgileri */}
            <div className="space-y-6 mb-10">
              
              {/* Adres */}
              <a href="https://maps.google.com/?q=Yeşilpınar,Gündem+Towers" target="_blank" className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Adresimiz</h4>
                  <p className="text-gray-400 group-hover:text-white transition-colors">
                    Yeşilpınar Mah. Eyüpsultan / İstanbul
                  </p>
                </div>
              </a>

              {/* Telefon */}
              <a href="tel:05465826658" className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Telefon</h4>
                  <p className="text-gray-400 group-hover:text-white transition-colors">
                    0546 582 66 58
                  </p>
                </div>
              </a>

              {/* Mail */}
              <a href="mailto:otobirlik.servis@gmail.com" className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">E-Posta</h4>
                  <p className="text-gray-400 group-hover:text-white transition-colors">
                    otobirlik.servis@gmail.com
                  </p>
                </div>
              </a>
            </div>

            {/* Sosyal Medya (Yan Yana) */}
            <div>
              <h4 className="text-white font-bold mb-6 text-sm tracking-widest uppercase opacity-70">Sosyal Medya</h4>
              <div className="flex flex-wrap gap-8">
                
                {/* Instagram */}
                <a href="https://instagram.com/birlikotoeyup" target="_blank" className="flex items-center gap-3 group min-w-[140px]">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors shrink-0">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-white text-sm font-bold">Instagram</h5>
                    <p className="text-gray-500 text-xs group-hover:text-white transition-colors">@birlikotoeyup</p>
                  </div>
                </a>

                {/* Facebook */}
                <a href="https://www.facebook.com/profile.php?id=61587321788203" target="_blank" className="flex items-center gap-3 group min-w-[140px]">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors shrink-0">
                    <Facebook className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-white text-sm font-bold">Facebook</h5>
                    <p className="text-gray-500 text-xs group-hover:text-white transition-colors">Birlik Oto</p>
                  </div>
                </a>

                {/* TikTok */}
                <a href="https://www.tiktok.com/@birlik.oto" target="_blank" className="flex items-center gap-3 group min-w-[140px]">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors shrink-0">
                    <TikTokIcon />
                  </div>
                  <div>
                    <h5 className="text-white text-sm font-bold">TikTok</h5>
                    <p className="text-gray-500 text-xs group-hover:text-white transition-colors">@birlik.oto</p>
                  </div>
                </a>

              </div>
            </div>

          </div>

          {/* Sağ Taraf: Harita */}
          <div className="h-[500px] w-full rounded-2xl overflow-hidden border border-white/10 relative shadow-2xl">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.665768784336!2d28.9245!3d41.0715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDA0JzE3LjQiTiAyOMKwNTUnMjguMiJF!5e0!3m2!1str!2str!4v1625000000000!5m2!1str!2str" 
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: "grayscale(100%) invert(90%) contrast(85%)" }} 
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            ></iframe>
            {/* Harita Çerçeve Efekti */}
            <div className="absolute inset-0 pointer-events-none border-4 border-white/5 rounded-2xl"></div>
          </div>

        </div>

        {/* Alt Çizgi: Telif Hakkı */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2024 Birlik Oto. Tüm hakları saklıdır.
          </p>
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm text-white hover:text-primary transition-colors"
          >
            Yukarı Çık <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}