import { Droplets, Sofa, Sparkles, Wind, ShieldCheck, Truck, Phone } from 'lucide-react';

export const siteConfig = {
  name: "Gökay Halı Yıkama",
  phone: "0501 341 58 58",
  phoneLandline: "0212 343 58 58",
  whatsapp: "https://wa.me/905013415858?text=Merhaba,%20hizmetleriniz%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.",
  email: "info@gokayhali.com",
  address: "Tevfik Bey Mah. 1.Gökmen Sok. No:10A Küçükçekmece / İstanbul",
  seo: {
    title: "Gökay Halı Yıkama | İstanbul - Küçükçekmece & Avcılar Bölgesi",
    description: "Profesyonel halı, koltuk ve perde yıkama hizmetleri. Gökay Halı Yıkama ile premium temizlik, hijyen ve zamanında teslimat garantisi. Hemen teklif alın!",
    keywords: "halı yıkama, koltuk yıkama, perde yıkama, küçükçekmece halı yıkama, avcılar halı yıkama, sefaköy halı yıkama, kaliteli temizlik",
    ogImage: "/og-image.jpg"
  }
};

export const services = [
  {
    id: "hali-yikama",
    title: "Halı Yıkama",
    description: "Derinlemesine temizlik ve özel şampuanlar ile halılarınızın dokusuna zarar vermeden hijyen sağlıyoruz.",
    icon: Droplets,
    features: ["Antibakteriyel Yıkama", "Leke Çıkarma", "Hızlı Kurutma"]
  },
  {
    id: "koltuk-yikama",
    title: "Koltuk Yıkama",
    description: "Yerinde vakumlu yıkama ile koltuklarınızdaki kir, mite ve lekeleri tamamen temizliyoruz.",
    icon: Sofa,
    features: ["Buharlı Temizleme", "Yerinde Hizmet", "Koku Giderme"]
  },
  {
    id: "perde-yikama",
    title: "Perde Yıkama",
    description: "Stor, zebra ve fon perdelerinizi titizlikle söküp, yıkayıp tekrar monte ediyoruz.",
    icon: Wind,
    features: ["Montaj Desteği", "Narin Temizleme", "Kırışıklık Giderme"]
  },
  {
    id: "premium-hizmet",
    title: "Premium Hizmet",
    description: "En değerli parçalarınız için özel el yıkama ve kurumsal temizlik çözümleri sunuyoruz.",
    icon: Sparkles,
    features: ["El Dokuma Uzmanlığı", "VIP Teslimat", "%100 Garanti"]
  }
];

export const regions = [
  "Küçükçekmece",
  "Sefaköy",
  "Büyükçekmece",
  "Avcılar",
  "Atakent",
  "Halkalı Merkez",
  "Söğütlüçeşme"
];

export const processSteps = [
  {
    id: 1,
    title: "İletişim",
    description: "WhatsApp veya telefon ile bize ulaşın, hızlıca fiyat teklifi alın.",
    icon: Phone
  },
  {
    id: 2,
    title: "Alım / Planlama",
    description: "Ücretsiz servisimiz ile halılarınızı kapınızdan alıyoruz.",
    icon: Truck
  },
  {
    id: 3,
    title: "Temizlik Süreci",
    description: "Modern tesisimizde profesyonel ekipmanlarla hijyenik yıkama.",
    icon: Sparkles
  },
  {
    id: 4,
    title: "Teslimat",
    description: "Parfüm kokulu ve paketlenmiş halılarınızı söz verdiğimiz günde getiriyoruz.",
    icon: ShieldCheck
  }
];

export const faqs = [
  {
    question: "Halılar kaç günde teslim edilir?",
    answer: "Hava durumuna ve yıkama yoğunluğuna bağlı olarak ortalama 3-5 iş günü içerisinde teslim ediyoruz."
  },
  {
    question: "Koltuk yıkama yerinde mi yapılıyor?",
    answer: "Evet, koltuk yıkama hizmetimizi son teknoloji vakumlu makinelerimiz ile evinizde veya ofisinizde gerçekleştiriyoruz."
  },
  {
    question: "WhatsApp üzerinden fiyat alabilir miyim?",
    answer: "Tabii ki! Yıkatmak istediğiniz ürünlerin (halı m2 bilgisi, koltuk tipi vb.) bilgilerini WhatsApp'tan iletirseniz anında fiyat teklifi alabilirsiniz."
  },
  {
    question: "Hangi bölgelere servisiniz var?",
    answer: "Küçükçekmece, Avcılar, Sefaköy, Büyükçekmece, Atakent, Halkalı ve çevre mahallelere ücretsiz servisimiz bulunmaktadır."
  }
];
