import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Features from "@/components/Features"; // Yeni ekledik
import Footer from "@/components/Footer";     // Yeni ekledik

export default function Home() {
  return (
    <main className="bg-background min-h-screen selection:bg-primary selection:text-white">
      <Hero />
      
      {/* ID'leri ekledik ki butonlar buraya kayabilsin */}
      <div id="services">
        <Services />
      </div>
      
      <Features />
      
      <div id="contact">
        <Footer />
      </div>
    </main>
  );
}