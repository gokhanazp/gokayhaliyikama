import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { siteConfig, services, regions } from '../data/content';
import { MessageCircle, Phone, ArrowLeft, ShieldCheck, Truck } from 'lucide-react';
import { unslugify, slugify } from '../utils/slugify';
import logo from '../assets/gokayhalilogo.png';

const RegionDetail = () => {
  const { regionName } = useParams();
  
  // Find original region name from data to preserve Turkish characters
  const originalRegion = regions.find(r => slugify(r) === regionName);
  const formattedRegion = originalRegion || (regionName ? unslugify(regionName) : '');

  const seoTitle = `${formattedRegion} Halı Yıkama - Gökay Halı Yıkama %100 Temizlik`;
  const seoDesc = `${formattedRegion} bölgesinde profesyonel halı, koltuk ve perde yıkama hizmeti. Gökay Halı Yıkama ile ${formattedRegion} sakinlerine özel premium hijyen ve hızlı teslimat.`;

  return (
    <div className="pt-24 min-h-screen bg-white">
      <Helmet>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDesc} />
        <link rel="canonical" href={`https://gokayhali.com/bolge/${regionName}`} />
      </Helmet>

      {/* Hero / Header Section for Region */}
      <section className="bg-primary py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]" />
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <Link to="/" className="inline-flex items-center gap-2 text-accent mb-8 hover:underline text-sm">
            <ArrowLeft size={16} />
            Ana Sayfaya Dön
          </Link>
          <div className="mb-6 flex justify-center">
             <img src={logo} alt="Logo" className="h-20 w-auto object-contain" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 italic underline decoration-white/20 underline-offset-8">
            {formattedRegion} Halı Yıkama
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            {formattedRegion} bölgesinde en kaliteli halı yıkama deneyimi için yanınızdayız. 
            Hijyenik şartlarda, modern tesisimizde derinlemesine temizlik ve ücretsiz servis imkanıyla hizmetinizdeyiz.
          </p>
        </div>
      </section>

      {/* Region Specific Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2 space-y-8">
              <h2 className="section-title text-3xl font-bold text-primary italic">
                 {formattedRegion} İçin Profesyonel Çözümler
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                <p>
                  <strong>Gökay Halı Yıkama</strong> olarak, {formattedRegion} mahallelerinin tamamına her gün servis çıkartıyoruz. 
                  Halılarınızın dokusuna uygun özel şampuanlar ve son teknoloji ful otomatik makinelerimizle, halılarınızı ilk günkü parlaklığına kavuşturuyoruz.
                </p>
                <p>
                  Sadece halı değil; {formattedRegion} koltuk yıkama ve perde yıkama ihtiyaçlarınızda da uzman ekibimiz yerinde hizmet vererek yaşam alanlarınızı ferahlatıyor.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="flex items-center gap-3 p-4 bg-secondary-light rounded-2xl border border-blue-50">
                  <Truck className="text-accent" />
                  <span className="font-bold text-sm">{formattedRegion} Ücretsiz Servis</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-secondary-light rounded-2xl border border-blue-50">
                  <ShieldCheck className="text-accent" />
                  <span className="font-bold text-sm">%100 Hijyen Garantisi</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a href={siteConfig.whatsapp} className="btn-whatsapp px-8 py-4">
                  <MessageCircle size={24} />
                  WhatsApp'tan Teklif Al
                </a>
                <a href={`tel:${siteConfig.phone.replace(/\s/g, '')}`} className="btn-primary px-8 py-4">
                   <Phone size={24} />
                   Hemen Bizi Arayın
                </a>
              </div>
            </div>

            <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
               {services.map(service => (
                 <div key={service.id} className="p-6 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-all">
                    <service.icon className="text-accent mb-4" size={32} />
                    <h3 className="font-bold text-lg mb-2">{formattedRegion} {service.title}</h3>
                    <p className="text-sm text-gray-500">{service.description}</p>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* Local SEO Text Section */}
      <section className="py-16 bg-gray-50 border-y border-gray-100 italic">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-4xl">
           <h2 className="text-2xl font-bold mb-6">Neden {formattedRegion} Bölgesinde Bizi Seçmelisiniz?</h2>
           <p className="text-gray-600 leading-relaxed">
             {formattedRegion} halı yıkama firmaları arasında bizi ayıran en büyük fark, her halının türüne (makine, el dokuma, yün) göre özel işlem uygulamamızdır. 
             Bölgemizdeki trafiğe ve yerleşim yapısına hakim servis ağımız sayesinde, halılarınızı söz verdiğimiz saatte kapınızdan alıyor ve temizlenmiş, parfümlenmiş, paketlenmiş şekilde geri getiriyoruz. 
             {formattedRegion}'de hijyen ve güvenin adresi Gökay Halı Yıkama.
           </p>
        </div>
      </section>
    </div>
  );
};

export default RegionDetail;
