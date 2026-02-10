"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const brands = [
  { name: "Audi", slug: "audi" },
  { name: "BMW", slug: "bmw" },
  // Mercedes listeden çıkarıldı, aşağıda manuel eklenecek
  { name: "Volkswagen", slug: "volkswagen" },
  { name: "Volvo", slug: "volvo" },
  { name: "Toyota", slug: "toyota" },
  { name: "Honda", slug: "honda" },
  { name: "Ford", slug: "ford" },
  { name: "Hyundai", slug: "hyundai" },
  { name: "Renault", slug: "renault" },
  { name: "Peugeot", slug: "peugeot" },
  { name: "Citroen", slug: "citroen" },
  { name: "Fiat", slug: "fiat" },
  { name: "Opel", slug: "opel" },
  { name: "Kia", slug: "kia" },
  { name: "Nissan", slug: "nissan" },
  { name: "Seat", slug: "seat" },
  { name: "Skoda", slug: "skoda" },
  { name: "Dacia", slug: "dacia" },
  { name: "Chevrolet", slug: "chevrolet" },
  { name: "Mini", slug: "mini" },
];

export default function BrandMarquee() {
  return (
    // z-index 100 vererek her şeyin üstünde olmasını garantiliyoruz
    <div className="bg-[#b91c1c] h-10 overflow-hidden flex items-center relative z-[100] border-b border-white/10">
      <motion.div
        className="flex gap-16 pr-16 items-center"
        animate={{ x: "-50%" }}
        transition={{ 
          ease: "linear", 
          duration: 40, 
          repeat: Infinity 
        }}
        style={{ width: "fit-content" }}
      >
        {[...brands, ...brands].map((brand, i) => (
          <div key={i} className="flex items-center justify-center shrink-0 min-w-[50px]">
            {(i === 2 || i === brands.length + 2) ? ( 
               <div className="relative h-6 w-16">
                 {/* Public klasöründeki mercedes.png */}
                 <Image 
                   src="/mercedes.png" 
                   alt="Mercedes" 
                   fill 
                   className="object-contain brightness-0 invert opacity-90 hover:opacity-100" 
                 />
               </div>
            ) : (
              <img
                src={`https://cdn.simpleicons.org/${brand.slug}/white`} 
                alt={`${brand.name} logo`}
                className="h-5 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
                style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))" }}
              />
            )}
          </div>
        ))}
      </motion.div>
    </div>
  );
}