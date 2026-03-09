import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import RegionDetail from './pages/RegionDetail';
import Footer from './components/layout/Footer';
import SEO from './components/ui/SEO';
import ScrollToTop from './components/ui/ScrollToTop';
import { MessageCircle } from 'lucide-react';
import { siteConfig } from './data/content';
import { HelmetProvider } from 'react-helmet-async';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="relative font-sans antialiased text-primary selection:bg-accent selection:text-primary">
          <ScrollToTop />
          <SEO />
          <Navbar />
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bolge/:regionName" element={<RegionDetail />} />
          </Routes>

          <Footer />

          {/* Floating WhatsApp Button */}
          <a 
            href={siteConfig.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-[#25D366] text-white shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 md:hidden"
            aria-label="WhatsApp İletişim"
          >
            <MessageCircle size={32} />
          </a>
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
