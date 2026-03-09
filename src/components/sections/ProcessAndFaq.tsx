import { processSteps, faqs, siteConfig } from '../../data/content';
import { HelpCircle, ArrowRight } from 'lucide-react';

const ProcessAndFaq = () => {
  return (
    <section id="surec" className="py-24 bg-secondary-light">
      <div className="container mx-auto px-4 md:px-8">
        {/* Process Section */}
        <div className="mb-32">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="section-title">Süreç Nasıl İşliyor?</h2>
            <p className="text-gray-600 text-lg">Halılarınızı biz emanet aldığımızdan teslim edene kadar her adımda profesyonellik ve titizlikle yanınızdayız.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Connecting line (Desktop) */}
            <div className="hidden lg:block absolute top-1/3 left-0 w-full h-0.5 border-t-2 border-dashed border-accent/20 -z-0" />
            
            {processSteps.map((step, idx) => (
              <div key={step.id} className="relative z-10 group bg-white p-8 rounded-3xl border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-xl">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-accent mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  <step.icon size={32} />
                </div>
                <div className="absolute top-8 right-8 text-4xl font-extrabold text-primary/10">0{step.id}</div>
                <h3 className="text-xl font-bold text-primary mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{step.description}</p>
                {idx < processSteps.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute -right-6 top-1/2 -translate-y-1/2 text-accent/30" size={24} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div id="sss" className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="md:w-1/3 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent/10 rounded-full text-accent font-bold text-xs uppercase tracking-wider">
                <HelpCircle size={14} />
                Merak Edilenler
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight">Sıkça Sorulan Sorular</h2>
              <p className="text-gray-600 text-sm">Aradığınız cevabı bulamadınız mı? Bize hemen WhatsApp üzerinden danışabilirsiniz.</p>
              <a href={siteConfig.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-whatsapp py-3 px-6 text-sm">
                WhatsApp Danışma
              </a>
            </div>

            <div className="md:w-2/3 space-y-4">
              {faqs.map((faq, idx) => (
                <details 
                  key={idx} 
                  className="group bg-white rounded-2xl border border-gray-100 open:shadow-xl open:border-accent/20 transition-all duration-300"
                >
                  <summary className="list-none p-6 flex items-center justify-between cursor-pointer font-bold text-primary group-open:text-accent transition-colors">
                    <span>{faq.question}</span>
                    <span className="w-8 h-8 rounded-full border border-gray-100 flex items-center justify-center text-primary group-open:rotate-180 transition-transform">
                      ↓
                    </span>
                  </summary>
                  <div className="px-6 pb-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-50 mt-4 text-sm">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessAndFaq;
