"use client";

import { motion } from "framer-motion";
import { Gauge, Clock, ShieldCheck, Cpu } from "lucide-react";

const features = [
  {
    icon: <Cpu className="w-10 h-10" />,
    title: "Orjinal Arıza Tespit",
    desc: "Aracınızı deneme-yanılma ile değil, lisanslı ve güncel diyagnostik cihazlarla analiz ediyoruz."
  },
  {
    icon: <Clock className="w-10 h-10" />,
    title: "Hızlı & Şeffaf Süreç",
    desc: "Aracınız servise girdiği andan itibaren yapılan işlemler hakkında WhatsApp üzerinden bilgilendirilirsiniz."
  },
  {
    icon: <ShieldCheck className="w-10 h-10" />,
    title: "Parça & İşçilik Garantisi",
    desc: "Kullandığımız yedek parçalar ve yaptığımız işçilik Birlik Oto güvencesi altındadır."
  },
  {
    icon: <Gauge className="w-10 h-10" />,
    title: "Performans Odaklı",
    desc: "Sadece tamir etmiyoruz; aracınızın fabrika verilerine en yakın performansa dönmesini sağlıyoruz."
  }
];

export default function Features() {
  return (
    <section className="py-24 bg-surface relative overflow-hidden">
      {/* Dekoratif Arkaplan Çizgileri */}
      <div className="absolute inset-0 opacity-5 bg-[linear-gradient(45deg,transparent_25%,#DC2626_25%,#DC2626_50%,transparent_50%,transparent_75%,#DC2626_75%,#DC2626_100%)] bg-[length:20px_20px]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Sol Taraf: Yazı */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-primary font-bold tracking-widest uppercase mb-4 text-sm">NEDEN BİRLİK OTO?</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Teknoloji ve Ustalık <br />
              <span className="text-metallic">Aynı Çatı Altında.</span>
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              750m² kapalı alanımızda, geleneksel ustalığı modern teknoloji ile birleştiriyoruz. 
              Aracınız bizim için sadece bir makine değil, güvenliğinizin emanetidir.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="p-4 border border-white/10 rounded-xl bg-background/50">
                <div className="text-3xl font-bold text-white mb-1">15+</div>
                <div className="text-xs text-metallic uppercase">Yıllık Tecrübe</div>
              </div>
              <div className="p-4 border border-white/10 rounded-xl bg-background/50">
                <div className="text-3xl font-bold text-white mb-1">1k+</div>
                <div className="text-xs text-metallic uppercase">Mutlu Müşteri</div>
              </div>
            </div>
          </motion.div>

          {/* Sağ Taraf: Kartlar */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-background border border-white/5 hover:border-primary/50 hover:bg-white/5 transition-all group"
              >
                <div className="mb-4 text-metallic group-hover:text-primary transition-colors">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-bold text-white mb-2">{feature.title}</h4>
                <p className="text-sm text-gray-400">{feature.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}