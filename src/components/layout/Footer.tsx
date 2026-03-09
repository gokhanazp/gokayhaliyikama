import { Link } from 'react-router-dom';
import { siteConfig, services, regions } from '../../data/content';
import { MessageCircle, Phone, MapPin } from 'lucide-react';
import { slugify } from '../../utils/slugify';
import logo from '../../assets/gokayhalilogo.png';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-16 px-4 md:px-8 border-t border-white/5">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <img src={logo} alt="Gökay Halı Yıkama Logo" className="h-10 w-auto object-contain" />
              <div>
                <span className="text-xl font-bold block leading-none">GÖKAY</span>
                <span className="text-[10px] tracking-[0.2em] font-medium text-white/60 uppercase">Halı Yıkama</span>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              İstanbul Küçükçekmece ve çevre bölgelerde profesyonel temizlik hizmetleri. Premium ekipmanlarımız ile halılarınız güvende.
            </p>
            <div className="flex flex-col gap-3">
              <a href={`tel:${siteConfig.phone.replace(/\s/g, '')}`} className="flex items-center gap-3 text-white/80 hover:text-accent transition-colors">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-accent"><Phone size={16} /></div>
                <div>
                  <span className="block text-xs text-white/40">Cep / WhatsApp</span>
                  {siteConfig.phone}
                </div>
              </a>
              <a href={`tel:${siteConfig.phoneLandline?.replace(/\s/g, '')}`} className="flex items-center gap-3 text-white/80 hover:text-accent transition-colors">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-accent"><Phone size={16} /></div>
                <div>
                  <span className="block text-xs text-white/40">Sabit Hat</span>
                  {siteConfig.phoneLandline}
                </div>
              </a>
              <div className="flex items-center gap-3 text-white/80">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-accent"><MapPin size={16} /></div>
                <span className="text-sm leading-tight">{siteConfig.address}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-6">
            <h4 className="text-lg font-bold border-b border-white/10 pb-4">Hizmetlerimiz</h4>
            <div className="flex flex-col gap-3">
              {services.map(s => (
                <a key={s.id} href="/#hizmetler" className="text-white/60 hover:text-accent transition-colors text-sm underline decoration-transparent hover:decoration-accent underline-offset-4">{s.title}</a>
              ))}
            </div>
          </div>

          {/* Regions Links (SEO) */}
          <div className="flex flex-col gap-6">
            <h4 className="text-lg font-bold border-b border-white/10 pb-4">Servis Bölgeleri</h4>
            <div className="grid grid-cols-2 gap-3">
              {regions.map(r => (
                <Link 
                  key={r} 
                  to={`/bolge/${slugify(r)}`}
                  className="text-white/60 hover:text-accent transition-colors text-sm"
                >
                  {r}
                </Link>
              ))}
            </div>
          </div>

          {/* Social / CTA */}
          <div className="flex flex-col gap-8">
            <div className="space-y-4">
              <h4 className="text-lg font-bold">Teklif Alın</h4>
              <p className="text-white/60 text-sm">Hemen WhatsApp üzerinden fiyat teklifi almak için butona tıklayın.</p>
              <a href={siteConfig.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-whatsapp w-full py-4 text-base">
                <MessageCircle size={24} />
                WhatsApp İletişim
              </a>
            </div>
            
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-all cursor-pointer">
                <span className="text-xs font-bold opacity-40">INSTA</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-all cursor-pointer">
                <span className="text-xs font-bold opacity-40">FB</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-white/40">
          <p>© {new Date().getFullYear()} {siteConfig.name}. Tüm hakları saklıdır.</p>
          <p className="text-xs">Tasarım & Geliştirme: Profesyonel Temizlik Çözümleri</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
