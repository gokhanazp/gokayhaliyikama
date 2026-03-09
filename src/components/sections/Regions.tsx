import { Link } from 'react-router-dom';
import { regions, siteConfig } from '../../data/content';
import { MapPin, MessageCircle, Phone } from 'lucide-react';
import { slugify } from '../../utils/slugify';

const Regions = () => {
  return (
    <section id="bolgeler" className="py-24 bg-primary text-white relative overflow-hidden">
      {/* Decorative Moon/Sky Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[100px] -mr-48 -mt-24" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-sky-500/5 rounded-full blur-[150px] -ml-96 -mb-48" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Content */}
          <div className="lg:w-1/2 space-y-8">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
                Hizmet Verdiğimiz<br />
                <span className="text-accent underline decoration-white/20 underline-offset-8">Geniş Bölge Ağı</span>
              </h2>
              <p className="text-white/70 text-lg leading-relaxed max-w-xl">
                İstanbul'un en hızlı ve titiz halı yıkama ekiplerinden biriyiz. Kapınızdan alıp, tertemiz kokular eşliğinde kapınıza bırakıyoruz.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 space-y-6 shadow-2xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/20 rounded-2xl flex items-center justify-center text-accent shrink-0">
                  <MapPin size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2 text-white">Öncelikli Bölgeler</h4>
                  <p className="text-white/60 leading-relaxed text-sm">
                    Bu bölgelere özel ekiplerimizle gün içerisinde servis imkanı sunmaktayız. Şehrin her noktasına ulaşıyoruz.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {regions.map((region) => (
                  <Link 
                    key={region} 
                    to={`/bolge/${slugify(region)}`}
                    className="flex items-center gap-3 py-3 px-5 rounded-2xl bg-white/5 border border-white/10 group transition-all duration-300 hover:bg-white/10 hover:border-accent/40 hover:scale-[1.03]"
                  >
                    <div className="w-2 h-2 rounded-full bg-accent group-hover:scale-150 transition-transform" />
                    <span className="font-semibold text-white/90 group-hover:text-white transition-colors capitalize">
                      {region}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href={siteConfig.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp px-8 py-4 text-lg"
              >
                <MessageCircle size={24} />
                Bölgeniz İçin Teklif Alın
              </a>
              <a 
                href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
                className="btn-primary bg-white hover:bg-white/90 text-primary px-8 py-4 text-lg"
              >
                <Phone size={24} />
                Arayın
              </a>
            </div>
          </div>

          {/* Right Visual Representation (Map Placeholder or Illustration) */}
          <div className="lg:w-1/2 relative w-full aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-white/5 flex items-center justify-center">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:30px_30px]" />
            <div className="text-center p-8 space-y-6 animate-pulse">
              <div className="mx-auto w-24 h-24 bg-accent/20 rounded-full flex items-center justify-center text-accent mb-4">
                <MapPin size={48} />
              </div>
              <h3 className="text-2xl font-bold">Lojistik Ağımız Aktif</h3>
              <p className="text-white/60 max-w-sm mx-auto">
                İstanbul genelinde geniş araç filomuz ile halılarınızı güvenle alıyor ve zamanında teslim ediyoruz.
              </p>
            </div>
            
            {/* Visual Region Tags (SEO emphasis) */}
            <div className="absolute top-10 left-10 p-4 rounded-xl bg-accent text-primary font-bold shadow-xl -rotate-6 animate-bounce transition-all hover:rotate-0 cursor-default">
              Küçükçekmece
            </div>
            <div className="absolute bottom-1/4 right-10 p-4 rounded-xl bg-white/90 text-primary font-bold shadow-xl rotate-3 animate-bounce-slow transition-all hover:rotate-0 cursor-default">
              Avcılar Merkez
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Regions;
