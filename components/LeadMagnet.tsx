import React, { useState } from 'react';

const LeadMagnet = ({ lang = 'en' }: { lang?: string }) => {
  const translations: any = {
    en: {
      badge: "Free B2B Resource",
      title_1: "The Ultimate 2026",
      title_2: "Packaging Material",
      title_3: "& Structure Guide.",
      desc: "A comprehensive technical reference for material science, flute engineering, and global sustainability standards. Join 500+ brands in optimizing their packaging strategy for the AI-driven market.",
      items: [
        "Paperboard Specs: SBS, Kraft, & CCNB",
        "Flute Engineering: E, B, F, & BC Flutes",
        "Premium Finishes & Tactile Coatings",
        "2026 Global Sustainability Checklist"
      ],
      formTitle: "Download Technical PDF",
      formDesc: "Enter your business email to receive the full 45-page technical catalog and spec-sheet.",
      placeholder: "Business Email Address",
      submit: "Get Free Access Now",
      footer: "Instant Delivery to your Inbox",
      successTitle: "Guide Ready!",
      successDesc: "The Ultimate 2026 Packaging Guide is now available for you. We've also sent a backup copy to {email}.",
      view: "View Full Guide Now",
      another: "Download Another Copy"
    },
    fr: {
      badge: "Ressource B2B Gratuite",
      title_1: "Le Guide Ultime 2026",
      title_2: "Matériaux d'Emballage",
      title_3: "& Structure.",
      desc: "Une référence technique complète pour la science des matériaux, l'ingénierie des cannelures et les normes mondiales de durabilité. Rejoignez plus de 500 marques pour optimiser votre stratégie d'emballage.",
      items: [
        "Spécificités du Carton : SBS, Kraft, & CCNB",
        "Ingénierie des Cannelures : E, B, F, & BC",
        "Finitions Premium & Revêtements Tactiles",
        "Liste de contrôle de durabilité mondiale 2026"
      ],
      formTitle: "Télécharger le PDF Technique",
      formDesc: "Entrez votre e-mail professionnel pour recevoir le catalogue technique complet de 45 pages.",
      placeholder: "Adresse E-mail Professionnelle",
      submit: "Accès Gratuit Immédiat",
      footer: "Livraison instantanée dans votre boîte de réception",
      successTitle: "Guide Prêt !",
      successDesc: "Le Guide Ultime de l'Emballage 2026 est maintenant disponible. Nous avons également envoyé une copie à {email}.",
      view: "Voir le Guide Complet",
      another: "Télécharger une autre copie"
    },
    de: {
      badge: "Kostenlose B2B-Ressource",
      title_1: "Der ultimative 2026",
      title_2: "Verpackungsmaterial",
      title_3: "& Struktur-Leitfaden.",
      desc: "Ein umfassendes technisches Referenzwerk für Materialwissenschaften, Wellen-Engineering und globale Nachhaltigkeitsstandards. Optimieren Sie Ihre Verpackungsstrategie.",
      items: [
        "Karton-Spezifikationen: SBS, Kraft, & CCNB",
        "Wellen-Engineering: E-, B-, F- & BC-Wellen",
        "Premium-Veredelungen & haptische Beschichtungen",
        "Globale Nachhaltigkeits-Checkliste 2026"
      ],
      formTitle: "Technisches PDF herunterladen",
      formDesc: "Geben Sie Ihre geschäftliche E-Mail-Adresse ein, um den vollständigen 45-seitigen technischen Katalog zu erhalten.",
      placeholder: "Geschäftliche E-Mail-Adresse",
      submit: "Jetzt kostenloser Zugriff",
      footer: "Sofortige Zustellung in Ihren Posteingang",
      successTitle: "Leitfaden bereit!",
      successDesc: "Der ultimative Verpackungsleitfaden 2026 ist jetzt für Sie verfügbar. Wir haben auch eine Kopie an {email} gesendet.",
      view: "Vollständigen Leitfaden ansehen",
      another: "Weitere Kopie herunterladen"
    },
    es: {
      badge: "Recurso B2B Gratuito",
      title_1: "La Guía Definitiva 2026",
      title_2: "Materiales de Embalaje",
      title_3: "& Estructura.",
      desc: "Una referencia técnica completa sobre ciencia de materiales, ingeniería de flautas y estándares globales de sostenibilidad. Optimice su estrategia de embalaje.",
      items: [
        "Especificaciones de Cartón: SBS, Kraft, & CCNB",
        "Ingeniería de Flautas: E, B, F, & BC",
        "Acabados Premium y Recubrimientos Táctiles",
        "Lista de Verificación de Sostenibilidad Global 2026"
      ],
      formTitle: "Descargar PDF Técnico",
      formDesc: "Ingrese su correo electrónico profesional para recibir el catálogo técnico completo de 45 páginas.",
      placeholder: "Correo Electrónico de Empresa",
      submit: "Obtener Acceso Gratuito Ahora",
      footer: "Entrega instantánea en su bandeja de entrada",
      successTitle: "¡Guía Lista!",
      successDesc: "La Guía Definitiva de Embalaje 2026 ya está disponible. También hemos enviado una copia a {email}.",
      view: "Ver Guía Completa Ahora",
      another: "Descargar Otra Copia"
    },
    ar: {
      badge: "مورد B2B مجاني",
      title_1: "الدليل النهائي لعام 2026",
      title_2: "مواد التغليف",
      title_3: "وهيكلها.",
      desc: "مرجع فني شامل لعلوم المواد، وهندسة الفلوت، ومعايير الاستدامة العالمية. انضم إلى أكثر من 500 علامة تجارية في تحسين استراتيجية التغليف الخاصة بها.",
      items: [
        "مواصفات الورق المقوى: SBS، Kraft، و CCNB",
        "هندسة الفلوت: E، B، F، و BC",
        "التشطيبات الفاخرة والطلاءات الملموسة",
        "قائمة مراجعة الاستدامة العالمية لعام 2026"
      ],
      formTitle: "تحميل ملف PDF الفني",
      formDesc: "أدخل بريدك الإلكتروني المخصص للعمل لتلقي الكتالوج الفني الكامل المكون من 45 صفحة.",
      placeholder: "البريد الإلكتروني للعمل",
      submit: "احصل على وصول مجاني الآن",
      footer: "تسليم فوري إلى صندوق الوارد الخاص بك",
      successTitle: "الدليل جاهز!",
      successDesc: "الدليل النهائي للتغليف لعام 2026 متاح لك الآن. لقد أرسلنا أيضًا نسخة احتياطية إلى {email}.",
      view: "عرض الدليل الكامل الآن",
      another: "تحميل نسخة أخرى"
    }
  };

  const t = translations[lang] || translations['en'];

  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      // In a real app, this would send the email to a backend/CRM
    }
  };

  return (
    <section className={`py-24 bg-gray-950 text-white rounded-[4rem] mx-6 overflow-hidden relative shadow-2xl ${lang === 'ar' ? 'rtl' : 'ltr'}`} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className={lang === 'ar' ? 'text-right' : 'text-left'}>
            <span className="text-blue-500 font-black text-xs uppercase tracking-[0.4em] mb-6 block">{t.badge}</span>
            <h2 className="text-4xl md:text-5xl font-black mb-10 uppercase tracking-tighter leading-[0.9] italic">
              {t.title_1} <br/>
              <span className="text-blue-500">{t.title_2}</span> <br/>
              {t.title_3}
            </h2>
            <p className="text-gray-400 font-medium text-lg leading-relaxed mb-12">
              {t.desc}
            </p>
            <ul className="space-y-4 mb-12">
              {t.items.map((item: string, i: number) => (
                <li key={i} className="flex items-center gap-4 text-sm font-bold uppercase tracking-widest text-gray-300">
                  <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center text-[10px] text-white">✓</div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white/5 p-12 rounded-[3rem] border border-white/10 backdrop-blur-sm">
            {!submitted ? (
              <form onSubmit={handleSubmit}>
                <h3 className="text-2xl font-black mb-8 uppercase tracking-tighter text-center">{t.formTitle}</h3>
                <p className="text-gray-400 text-center mb-10 text-sm font-medium">{t.formDesc}</p>
                <div className="space-y-6">
                  <input 
                    type="email" 
                    placeholder={t.placeholder} 
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white/10 border border-white/20 rounded-full px-8 py-5 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-all"
                  />
                  <button type="submit" className="w-full bg-blue-600 text-white py-5 rounded-full font-black text-sm uppercase tracking-widest hover:bg-blue-700 transition-all shadow-xl">
                    {t.submit}
                  </button>
                </div>
                <p className="text-[10px] text-gray-500 text-center mt-6 uppercase tracking-widest">{t.footer}</p>
              </form>
            ) : (
              <div className="text-center py-10">
                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-glow">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <h3 className="text-3xl font-black mb-4 uppercase tracking-tighter text-white">{t.successTitle}</h3>
                <p className="text-gray-400 font-medium leading-relaxed mb-8">
                  {t.successDesc.replace('{email}', email)}
                </p>
                <div className="space-y-4">
                  <a href="/resources/ultimate-packaging-guide" target="_blank" rel="noopener noreferrer">
                    <button className="w-full bg-blue-600 text-white py-5 rounded-full font-black text-sm uppercase tracking-widest hover:bg-blue-700 transition-all shadow-xl mb-4">
                      {t.view}
                    </button>
                  </a>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="text-[11px] font-black uppercase tracking-widest text-blue-500 border-b border-blue-500 pb-1"
                  >
                    {t.another}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/10 blur-[120px] rounded-full -translate-x-1/2 translate-y-1/2"></div>
    </section>
  );
};

export default LeadMagnet;
