import { services, siteConfig } from '../../data/content';
import { Check, MessageCircle } from 'lucide-react';

const Services = () => {
  return (
    <section id="hizmetler" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-sky-100/50 rounded-full blur-[80px]" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-accent/5 rounded-full blur-[80px]" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="section-title">Hizmetlerimiz</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Halı, koltuk ve perdeleriniz için özel temizlik çözümleri sunuyoruz. Her ürünün dokusuna ve ihtiyacına uygun, ileri teknoloji ekipmanlar ve sağlıklı şampuanlar kullanıyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="group bg-white p-8 rounded-3xl border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-accent/20"
            >
              <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center text-primary mb-6 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-accent shadow-inner">
                <service.icon size={32} />
              </div>
              
              <h3 className="text-2xl font-bold text-primary mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-gray-700 font-medium">
                    <Check size={16} className="text-accent" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <a 
                href={siteConfig.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full btn-whatsapp py-3 text-sm opacity-90 hover:opacity-100"
              >
                <MessageCircle size={18} />
                WhatsApp Teklif
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
