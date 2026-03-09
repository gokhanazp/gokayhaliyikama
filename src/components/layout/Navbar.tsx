import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MessageCircle, PhoneCall } from 'lucide-react';
import { siteConfig } from '../../data/content';
import logo from '../../assets/gokayhalilogo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Ana Sayfa', href: '/' },
    { name: 'Hizmetler', href: '/#hizmetler' },
    { name: 'Bölgeler', href: '/#bolgeler' },
    { name: 'Nasıl Çalışır?', href: '/#surec' },
    { name: 'SSS', href: '/#sss' },
  ];

  const isHome = location.pathname === '/';

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isMobileMenuOpen 
        ? 'bg-primary py-4' 
        : (isScrolled || !isHome ? 'bg-white/95 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6')
    }`}>
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between relative z-50">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3" onClick={() => setIsMobileMenuOpen(false)}>
          <img 
            src={logo} 
            alt="Gökay Halı Yıkama Logo" 
            className="h-12 w-auto object-contain transition-all duration-300" 
          />
          <div className="hidden sm:block">
            <span className={`text-xl font-bold block leading-none transition-colors ${
              isMobileMenuOpen || isScrolled || !isHome ? 'text-white' : 'text-white'
            } ${isMobileMenuOpen || isScrolled || !isHome ? '' : ''}`}>
              {/* Refined color logic for text logo */}
              <span className={isMobileMenuOpen || !isScrolled && isHome ? 'text-white' : 'text-primary'}>GÖKAY</span>
            </span>
            <span className={`text-[10px] tracking-[0.2em] font-medium transition-colors block ${
              isMobileMenuOpen || !isScrolled && isHome ? 'text-white/70' : 'text-primary/70'
            }`}>
              HALI YIKAMA
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-semibold transition-colors hover:text-accent ${
                isScrolled || !isHome ? 'text-primary' : 'text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href={siteConfig.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp px-6 py-2.5 text-sm"
          >
            <MessageCircle size={18} />
            Hızlı Teklif
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`lg:hidden p-2 transition-colors relative z-[60] ${
            isMobileMenuOpen || (!isScrolled && isHome) ? 'text-white' : 'text-primary'
          }`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Menüyü Kapat" : "Menüyü Aç"}
        >
          {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-primary z-[45] transition-all duration-500 ease-in-out flex flex-col p-8 pt-32 ${
        isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none translate-y-4'
      }`}>
        <div className="flex flex-col gap-8 text-3xl font-bold text-white mb-auto items-center text-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-accent transition-colors active:scale-95 duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>
        <div className="flex flex-col gap-4 max-w-sm mx-auto w-full">
          <a 
            href={`tel:${siteConfig.phone.replace(/\s/g, '')}`} 
            className="btn-primary w-full py-5 text-lg flex items-center justify-center gap-3 bg-accent text-primary border-none"
          >
            <PhoneCall size={24} />
            Hemen Ara
          </a>
          <a 
            href={siteConfig.whatsapp} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-whatsapp w-full py-5 text-lg flex items-center justify-center gap-3"
          >
            <MessageCircle size={24} />
            WhatsApp Yaz
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
