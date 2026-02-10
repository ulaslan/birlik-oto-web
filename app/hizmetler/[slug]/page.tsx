"use client";

import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Phone } from "lucide-react";
import { useParams } from "next/navigation";

// Hizmetlerin Detaylı İçerikleri
const serviceData: Record<string, { title: string; desc: string; content: string; features: string[] }> = {
  "periyodik-bakim": {
    title: "Periyodik Bakım",
    desc: "Motorunuzun ömrünü uzatan, performansını koruyan kapsamlı bakım paketi.",
    content: "Birlik Oto olarak aracınızın üretici standartlarına uygun periyodik bakımlarını titizlikle gerçekleştiriyoruz. Yağ değişimi, hava, polen ve yakıt filtresi değişimlerinin yanı sıra, aracınızın genel kondisyonunu etkileyen 30 nokta kontrolü ile yola güvenle devam etmenizi sağlıyoruz. Düzenli bakım, ileride oluşabilecek yüksek maliyetli arızaların önüne geçer.",
    features: ["Motor Yağı ve Filtre Değişimi", "Hava ve Polen Filtresi Kontrolü", "Fren Balatası ve Disk Kontrolü", "Sıvı Seviyeleri ve Kaçak Kontrolü", "Lastik Diş Derinliği ve Basınç Kontrolü"]
  },
  "motor-mekanik": {
    title: "Motor & Mekanik",
    desc: "Aracınızın kalbi olan motor ve şanzıman sistemleri için uzman onarım.",
    content: "Motor rektifiye, silindir kapak contası değişimi, triger seti değişimi ve şanzıman onarımları gibi ağır mekanik işlemlerde uzman kadromuzla hizmetinizdeyiz. Motor sesinden şanzıman geçişlerine kadar her detayı inceliyor, arızayı kaynağında tespit edip garantili çözümler sunuyoruz.",
    features: ["Motor Rektifiye İşlemleri", "Şanzıman Tamiri ve Bakımı", "Triger Seti Değişimi", "Baskı Balata Değişimi", "Soğutma Sistemi Onarımı"]
  },
  "fren-agir-bakim": {
    title: "Fren & Ağır Bakım",
    desc: "Güvenliğiniz için hayati önem taşıyan fren sistemlerinde sıfır hata prensibi.",
    content: "Fren diskleri, balatalar, hidrolik sistemler ve ABS sensörleri... Aracınızın duruş mesafesini ve güvenliğini etkileyen tüm bileşenleri orijinal veya eşdeğer kaliteli parçalarla yeniliyoruz. Ağır bakımlarda üretici verilerine sadık kalarak aracınızın fabrika kondisyonuna dönmesini sağlıyoruz.",
    features: ["Fren Balatası Değişimi", "Disk Tornalama ve Değişim", "ABS Beyin ve Sensör Kontrolü", "Fren Hidroliği Testi ve Değişimi", "El Freni Mekanizması Onarımı"]
  },
  "ariza-tespit": {
    title: "Arıza Tespit & Check-Up",
    desc: "Deneme yanılma yok. Son teknoloji cihazlarla nokta atışı teşhis.",
    content: "Gösterge panelinde yanan arıza lambalarının sebebini lisanslı diyagnostik cihazlarımızla saniyeler içinde tespit ediyoruz. Aracınızın beynine (ECU) bağlanarak geçmiş arıza kayıtlarını okuyor, anlık verileri analiz ediyor ve gereksiz parça değişiminin önüne geçiyoruz.",
    features: ["Bilgisayarlı Arıza Tespiti", "Motor Beyni (ECU) Analizi", "Airbag ve ABS Sistemi Kontrolü", "Elektrik Tesisatı Kontrolü", "Detaylı Ekspertiz Raporu"]
  },
  "detayli-yikama": {
    title: "Detaylı Yıkama & Temizlik",
    desc: "Aracınızın içini ve dışını ilk günkü temizliğine kavuşturuyoruz.",
    content: "Sıradan bir yıkamanın ötesinde; koltuklarınızdaki inatçı lekelerden motor bloğundaki yağ kalıntılarına kadar derinlemesine temizlik sunuyoruz. Antibakteriyel iç temizlik ile aracınızın içindeki kötü kokuları ve bakterileri yok ediyor, aileniz için hijyenik bir ortam sağlıyoruz.",
    features: ["Detaylı İç Kuaför", "Motor Yıkama ve Koruma", "Koltuk Yıkama ve Leke Çıkarma", "Tavan ve Taban Döşeme Temizliği", "Klima Kanalı Dezenfeksiyonu"]
  },
  "pasta-cila": {
    title: "Pasta Cila & Boya Koruma",
    desc: "Matlaşmış boyayı canlandırın, kılcal çiziklere veda edin.",
    content: "Güneş yanıkları, fırça çizikleri ve reçine lekeleri aracınızın eski görünmesine neden olur. Profesyonel pasta cila uygulamamızla boyanızdaki kusurları gideriyor, seramik kaplama veya boya koruma ürünleriyle aracınıza uzun süreli parlaklık ve su iticilik kazandırıyoruz.",
    features: ["Kılcal Çizik Giderme", "Hare Giderme İşlemi", "Seramik Kaplama Uygulaması", "Boya Koruma Filmi", "Far Temizliği ve Parlatma"]
  }
};

export default function ServiceDetail() {
  const params = useParams();
  const slug = params?.slug as string;
  const service = serviceData[slug];

  if (!service) {
    return (
      <div className="h-screen flex items-center justify-center bg-background text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Hizmet Bulunamadı</h1>
          <Link href="/" className="text-primary hover:underline">Anasayfaya Dön</Link>
        </div>
      </div>
    );
  }

  return (
    <main className="bg-background min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        
        {/* Geri Dön Butonu */}
        <Link 
          href="/#services" 
          className="inline-flex items-center text-metallic hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Hizmetlere Dön
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Sol: İçerik */}
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {service.title}
            </h1>
            <p className="text-xl text-primary font-medium mb-8">
              {service.desc}
            </p>
            <div className="prose prose-invert max-w-none text-gray-300 mb-10 leading-relaxed">
              <p>{service.content}</p>
            </div>

            <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-6">Neler Yapıyoruz?</h3>
              <ul className="space-y-4">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sağ: İletişim Kartı */}
          <div className="sticky top-32">
            <div className="bg-surface border border-white/10 rounded-2xl p-8 text-center shadow-2xl shadow-primary/5">
              <h3 className="text-2xl font-bold text-white mb-2">Randevu Alın</h3>
              <p className="text-gray-400 mb-8 text-sm">
                Bu hizmet için hemen uzmanlarımızla görüşün ve size uygun saati belirleyin.
              </p>
              
              <a 
                href="tel:05465826658" 
                className="flex items-center justify-center w-full bg-primary hover:bg-red-700 text-white font-bold py-4 rounded-xl transition-all mb-4 group"
              >
                <Phone className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                0546 582 66 58
              </a>
              
              <Link 
                href="/#contact"
                className="flex items-center justify-center w-full bg-white/5 hover:bg-white/10 text-white font-bold py-4 rounded-xl transition-all border border-white/10"
              >
                Konum ve Adres
              </Link>

              <div className="mt-8 pt-8 border-t border-white/5">
                <p className="text-metallic text-xs uppercase tracking-widest mb-2">ÇALIŞMA SAATLERİ</p>
                <p className="text-white font-medium">Pzt - Cmt: 09:00 - 21:00</p>
                <p className="text-gray-500 text-sm">Pazar: Açık</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}