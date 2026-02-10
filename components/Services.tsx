"use client";

import { motion } from "framer-motion";
import { Wrench, Car, Activity, Disc, Sparkles, Droplets, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    slug: "periyodik-bakim",
    icon: <Wrench className="w-8 h-8" />,
    title: "Periyodik Bakım",
    desc: "Aracınızın ömrünü uzatan, üretici standartlarında detaylı filtre ve yağ bakımları."
  },
  {
    slug: "motor-mekanik",
    icon: <Activity className="w-8 h-8" />,
    title: "Motor & Mekanik",
    desc: "Motor rektifiye, şanzıman ve ağır mekanik onarımlarda uzman mühendislik çözümleri."
  },
  {
    slug: "fren-agir-bakim",
    icon: <Disc className="w-8 h-8" />,
    title: "Fren & Ağır Bakım",
    desc: "Triger seti, baskı balata ve fren sistemlerinde orijinal parça garantili değişim."
  },
  {
    slug: "ariza-tespit",
    icon: <Car className="w-8 h-8" />,
    title: "Arıza Tespit & Check-Up",
    desc: "Son teknoloji diyagnostik cihazlarla nokta atışı arıza tespiti ve raporlama."
  },
  {
    slug: "detayli-yikama",
    icon: <Droplets className="w-8 h-8" />,
    title: "Detaylı Yıkama",
    desc: "Motor, iç mekan ve dış yüzey için özel kimyasallarla derinlemesine temizlik."
  },
  {
    slug: "pasta-cila",
    icon: <Sparkles className="w-8 h-8" />,
    title: "Pasta Cila & Koruma",
    desc: "Seramik kaplama ve boya koruma ile aracınız ilk günkü parlaklığına kavuşsun."
  }
];

export default function Services() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-900/10 via-background to-background pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            Hizmetlerimiz
          </motion.h2>
          <p className="text-metallic text-lg">
            Yeşilpınar'daki 750m²'lik servisimizde, aracınızın ihtiyaç duyduğu tüm bakım ve onarım hizmetlerini tek çatı altında sunuyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Link href={`/hizmetler/${service.slug}`} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all duration-300 h-full cursor-pointer hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

                <div className="relative mb-6 inline-flex p-4 rounded-xl bg-primary/20 text-primary group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>

                <h3 className="relative text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="relative text-metallic text-sm leading-relaxed mb-6">
                  {service.desc}
                </p>

                <div className="relative flex items-center text-sm font-semibold text-white/50 group-hover:text-white transition-colors mt-auto">
                  Detaylı İncele 
                  <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}