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
      title_2: "Mat\u00E9riaux d'Emballage",
      title_3: "& Structure.",
      desc: "Une r\u00E9f\u00E9rence technique compl\u00E8te pour la science des mat\u00E9riaux, l'ing\u00E9nierie des cannelures et les normes mondiales de durabilit\u00E9. Rejoignez plus de 500 marques pour optimiser votre strat\u00E9gie d'emballage.",
      items: [
        "Sp\u00E9cificit\u00E9s du Carton : SBS, Kraft, & CCNB",
        "Ing\u00E9nierie des Cannelures : E, B, F, & BC",
        "Finitions Premium & Rev\u00EAtements Tactiles",
        "Liste de contr\u00F4le de durabilit\u00E9 mondiale 2026"
      ],
      formTitle: "T\u00E9l\u00E9charger le PDF Technique",
      formDesc: "Entrez votre e-mail professionnel pour recevoir le catalogue technique complet de 45 pages.",
      placeholder: "Adresse E-mail Professionnelle",
      submit: "Acc\u00E8s Gratuit Imm\u00E9diat",
      footer: "Livraison instantan\u00E9e dans votre bo\u00EEte de r\u00E9ception",
      successTitle: "Guide Pr\u00EAt !",
      successDesc: "Le Guide Ultime de l'Emballage 2026 est maintenant disponible. Nous avons \u00E9galement envoy\u00E9 une copie \u00E0 {email}.",
      view: "Voir le Guide Complet",
      another: "T\u00E9l\u00E9charger une autre copie"
    },
    de: {
      badge: "Kostenlose B2B-Ressource",
      title_1: "Der ultimative 2026",
      title_2: "Verpackungsmaterial",
      title_3: "& Struktur-Leitfaden.",
      desc: "Ein umfassendes technisches Referenzwerk f\u00FCr Materialwissenschaften, Wellen-Engineering und globale Nachhaltigkeitsstandards. Optimieren Sie Ihre Verpackungsstrategie.",
      items: [
        "Karton-Spezifikationen: SBS, Kraft, & CCNB",
        "Wellen-Engineering: E-, B-, F- & BC-Wellen",
        "Premium-Veredelungen & haptische Beschichtungen",
        "Globale Nachhaltigkeits-Checkliste 2026"
      ],
      formTitle: "Technisches PDF herunterladen",
      formDesc: "Geben Sie Ihre gesch\u00E4ftliche E-Mail-Adresse ein, um den vollst\u00E4ndigen 45-seitigen technischen Katalog zu erhalten.",
      placeholder: "Gesch\u00E4ftliche E-Mail-Adresse",
      submit: "Jetzt kostenloser Zugriff",
      footer: "Sofortige Zustellung in Ihren Posteingang",
      successTitle: "Leitfaden bereit!",
      successDesc: "Der ultimative Verpackungsleitfaden 2026 ist jetzt f\u00FCr Sie verf\u00FCgbar. Wir haben auch eine Kopie an {email} gesendet.",
      view: "Vollst\u00E4ndigen Leitfaden ansehen",
      another: "Weitere Kopie herunterladen"
    },
    es: {
      badge: "Recurso B2B Gratuito",
      title_1: "La Gu\u00EDa Definitiva 2026",
      title_2: "Materiales de Embalaje",
      title_3: "& Estructura.",
      desc: "Una referencia t\u00E9cnica completa sobre ciencia de materiales, ingenier\u00EDa de flautas y est\u00E1ndares globales de sostenibilidad. Optimice su estrategia de embalaje.",
      items: [
        "Especificaciones de Cart\u00F3n: SBS, Kraft, & CCNB",
        "Ingenier\u00EDa de Flautas: E, B, F, & BC",
        "Acabados Premium y Recubrimientos T\u00E1ctiles",
        "Lista de Verificaci\u00F3n de Sostenibilidad Global 2026"
      ],
      formTitle: "Descargar PDF T\u00E9cnico",
      formDesc: "Ingrese su correo electr\u00F3nico profesional para recibir el cat\u00E1logo t\u00E9cnico completo de 45 p\u00E1ginas.",
      placeholder: "Correo Electr\u00F3nico de Empresa",
      submit: "Obtener Acceso Gratuito Ahora",
      footer: "Entrega instant\u00E1nea en su bandeja de entrada",
      successTitle: "\u00A1Gu\u00EDa Lista!",
      successDesc: "La Gu\u00EDa Definitiva de Embalaje 2026 ya est\u00E1 disponible. Tambi\u00E9n hemos enviado una copia a {email}.",
      view: "Ver Gu\u00EDa CompletNow",
      another: "Descargar Otra Copia"
    },
    ar: {
      badge: "\u0645\u0648\u0631\u062F B2B \u0645\u062C\u0627\u0646\u064A",
      title_1: "\u0627\u0644\u062F\u0644\u064A\u0644 \u0627\u0644\u0646\u0647\u0627\u0626\u064A \u0644\u0639\u0627\u0645 2026",
      title_2: "\u0645\u0648\u0627\u062F \u0627\u0644\u062A\u063A\u0644\u064A\u0641",
      title_3: "\u0648\u0647\u064A\u0643\u0644\u0647\u0627.",
      desc: "\u0645\u0631\u062C\u0639 \u0641\u0646\u064A \u0634\u0627\u0645\u0644 \u0644\u0639\u0644\u0648\u0645 \u0627\u0644\u0645\u0648\u0627\u062F\u060C \u0648\u0647\u0646\u062F\u0633\u0629 \u0627\u0644\u0641\u0644\u0648\u062A\u060C \u0648\u0645\u0639\u0627\u064A\u064A\u0631 \u0627\u0644\u0627\u0633\u062A\u062F\u0627\u0645\u0629 \u0627\u0644\u0639\u0627\u0644\u0645\u064A\u0629. \u0627\u0646\u0636\u0645 \u0625\u0644\u0649 \u0623\u0643\u062B\u0631 \u0645\u0646 500 \u0639\u0644\u0627\u0645\u0629 \u062A\u062C\u0627\u0631\u064A\u0629 \u0641\u064A \u062A\u062D\u0633\u064A\u0646 \u0627\u0633\u062A\u0631\u0627\u062A\u064A\u062C\u064A\u0629 \u0627\u0644\u062A\u063A\u0644\u064A\u0641 \u0627\u0644\u062E\u0627\u0635\u0629 \u0628\u0647\u0627.",
      items: [
        "\u0645\u0648\u0627\u0635\u0641\u0627\u062A \u0627\u0644\u0648\u0631\u0642 \u0627\u0644\u0645\u0642\u0648\u0649: SBS\u060C Kraft\u060C \u0648 CCNB",
        "\u0647\u0646\u062F\u0633\u0629 \u0627\u0644\u0641\u0644\u0648\u062A: E\u060C B\u060C F\u060C \u0648 BC",
        "\u0627\u0644\u062A\u0634\u0637\u064A\u0628\u0627\u062A \u0627\u0644\u0641\u0627\u062E\u0631\u0629 \u0648\u0627\u0644\u0637\u0644\u0627\u0621\u0627\u062A \u0627\u0644\u0645\u0644\u0645\u0648\u0633\u0629",
        "\u0642\u0627\u0626\u0645\u0629 \u0645\u0631\u0627\u062C\u0639\u0629 \u0627\u0644\u0627\u0633\u062A\u062F\u0627\u0645\u0629 \u0627\u0644\u0639\u0627\u0644\u0645\u064A\u0629 \u0644\u0639\u0627\u0645 2026"
      ],
      formTitle: "\u062A\u062D\u0645\u064A\u0644 \u0645\u0644\u0641 PDF \u0627\u0644\u0641\u0646\u064A",
      formDesc: "\u0623\u062F\u062E\u0644 \u0628\u0631\u064A\u062F\u0643 \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A \u0627\u0644\u0645\u062E\u0635\u0635 \u0644\u0644\u0639\u0645\u0644 \u0644\u062A\u0644\u0642\u064A \u0627\u0644\u0643\u062A\u0627\u0644\u0648\u062C \u0627\u0644\u0641\u0646\u064A \u0627\u0644\u0643\u0627\u0645\u0644 \u0627\u0644\u0645\u0643\u0648\u0646 \u0645\u0646 45 \u0635\u0641\u062D\u0629.",
      placeholder: "\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A \u0644\u0644\u0639\u0645\u0644",
      submit: "\u0627\u062D\u0635\u0644 \u0639\u0644\u0649 \u0648\u0635\u0648\u0644 \u0645\u062C\u0627\u0646\u064A \u0627\u0644\u0622\u0646",
      footer: "\u062A\u0633\u0644\u064A\u0645 \u0641\u0648\u0631\u064A \u0625\u0644\u0649 \u0635\u0646\u062F\u0648\u0642 \u0627\u0644\u0648\u0627\u0631\u062F \u0627\u0644\u062E\u0627\u0635 \u0628\u0643",
      successTitle: "\u0627\u0644\u062F\u0644\u064A\u0644 \u062C\u0627\u0647\u0632!",
      successDesc: "\u0627\u0644\u062F\u0644\u064A\u0644 \u0627\u0644\u0646\u0647\u0627\u0626\u064A \u0644\u0644\u062A\u063A\u0644\u064A\u0641 \u0644\u0639\u0627\u0645 2026 \u0645\u062A\u0627\u062D \u0644\u0643 \u0627\u0644\u0622\u0646. \u0644\u0642\u062F \u0623\u0631\u0633\u0644\u0646\u0627 \u0623\u064A\u0636\u064B\u0627 \u0646\u0633\u062E\u0629 \u0627\u062D\u062A\u064A\u0627\u0637\u064A\u0629 \u0625\u0644\u0649 {email}.",
      view: "\u0639\u0631\u0636 \u0627\u0644\u062F\u0644\u064A\u0644 \u0627\u0644\u0643\u0627\u0645\u0644 \u0627\u0644\u0622\u0646",
      another: "\u062A\u062D\u0645\u064A\u0644 \u0646\u0633\u062E\u0629 \u0623\u062E\u0631\u0649"
    }
  };

  const t = translations[lang] || translations['en'];

  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
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
                  <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center text-[10px] text-white">&#10003;</div>
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
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/10 blur-[120px] rounded-full -translate-x-1/2 translate-y-1/2"></div>
    </section>
  );
};

export default LeadMagnet;
