import { Helmet } from 'react-helmet-async';
import { siteConfig } from '../../data/content';

const SEO = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": siteConfig.name,
    "image": "https://gokayhali.com/logo.png",
    "@id": "https://gokayhali.com",
    "url": "https://gokayhali.com",
    "telephone": siteConfig.phone,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Halkalı Merkez Mah.",
      "addressLocality": "Küçükçekmece",
      "addressRegion": "İstanbul",
      "postalCode": "34303",
      "addressCountry": "TR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 41.042,
      "longitude": 28.785
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "19:00"
    },
    "sameAs": [
      "https://facebook.com/gokayhali",
      "https://instagram.com/gokayhali"
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Halılar kaç günde teslim edilir?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Hava durumuna ve yıkama yoğunluğuna bağlı olarak ortalama 3-5 iş günü içerisinde teslim ediyoruz."
        }
      },
      {
        "@type": "Question",
        "name": "Koltuk yıkama yerinde mi yapılıyor?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Evet, koltuk yıkama hizmetimizi son teknoloji vakumlu makinelerimiz ile evinizde veya ofisinizde gerçekleştiriyoruz."
        }
      }
    ]
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{siteConfig.seo.title}</title>
      <meta name="description" content={siteConfig.seo.description} />
      <meta name="keywords" content={siteConfig.seo.keywords} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://gokayhali.com/" />
      <meta property="og:title" content={siteConfig.seo.title} />
      <meta property="og:description" content={siteConfig.seo.description} />
      <meta property="og:image" content={siteConfig.seo.ogImage} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://gokayhali.com/" />
      <meta property="twitter:title" content={siteConfig.seo.title} />
      <meta property="twitter:description" content={siteConfig.seo.description} />
      <meta property="twitter:image" content={siteConfig.seo.ogImage} />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
    </Helmet>
  );
};

export default SEO;
