import { MessageCircle, Phone, ArrowDown, ShieldCheck, Sparkles, Clock, Truck } from 'lucide-react';
import { siteConfig } from '../../data/content';
import logo from '../../assets/gokayhalilogo.png';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden bg-primary">
      {/* Background with Gradient and Abstract Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-[150px]" />
        {/* Pattern overlay */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          {/* Logo in Hero */}
          <div className="mb-8 animate-fade-in-down">
            <img src={logo} alt="Gökay Halı Yıkama Logo" className="h-24 md:h-32 w-auto object-contain" />
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-accent font-semibold text-sm mb-8 animate-fade-in transition-all hover:bg-white/20">
            <Sparkles size={14} className="animate-pulse" />
            <span>Küçükçekmece & Avcılar Bölgesi Premium Temizlik</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
            Gökyüzü Kadar <span className="text-accent underline decoration-white/20 underline-offset-8">Gök</span>,<br />
            Ay Kadar <span className="text-accent italic">Parlak</span> Hizmet
          </h1>

          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl leading-relaxed">
            Halı, koltuk ve perdelerinizde profesyonel dokunuş. En ileri teknoloji ve hijyen standartlarıyla halılarınız ilk günkü temizliğine kavuşuyor.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-center">
            <a 
              href={siteConfig.whatsapp} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-10 py-5 rounded-full bg-[#25D366] text-white font-bold text-lg flex items-center justify-center gap-3 transition-all duration-300 hover:scale-105 shadow-[0_0_50px_rgba(37,211,102,0.3)] w-full sm:w-auto"
            >
              <MessageCircle size={24} />
              Hemen WhatsApp'tan Yazın
            </a>
            <a 
              href={`tel:${siteConfig.phone.replace(/\s/g, '')}`} 
              className="px-10 py-5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold text-lg flex items-center justify-center gap-3 transition-all duration-300 hover:bg-white/20 w-full sm:w-auto"
            >
              <Phone size={24} />
              Bize Ulaşın
            </a>
          </div>

          {/* Quick Trust Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 pt-12 border-t border-white/10 w-full">
            <div className="flex items-center justify-center gap-4 text-white/70">
              <ShieldCheck className="text-accent" size={32} />
              <div className="text-left">
                <span className="block font-bold text-white">%100 Hijyen</span>
                <p className="text-xs uppercase tracking-wider font-semibold opacity-60">Garantili Sonuç</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-4 text-white/70">
              <Clock className="text-accent" size={32} />
              <div className="text-left">
                <span className="block font-bold text-white">Hızlı Teslimat</span>
                <p className="text-xs uppercase tracking-wider font-semibold opacity-60">Söz Verdiğimiz Gibi</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-4 text-white/70">
              <Truck className="text-accent" size={32} />
              <div className="text-left">
                <span className="block font-bold text-white">Ücretsiz Servis</span>
                <p className="text-xs uppercase tracking-wider font-semibold opacity-60">Kapınıza Kadar</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Scroll Icon */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white animate-bounce opacity-40">
        <ArrowDown size={32} />
      </div>
    </section>
  );
};

export default Hero;
