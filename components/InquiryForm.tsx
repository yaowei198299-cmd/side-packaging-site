import React, { useState } from 'react';

const InquiryForm = ({ productTitle, lang = 'en' }: { productTitle?: string; lang?: string }) => {
  const translations: any = {
    en: {
      title: "Request a Tailored Quote",
      desc: "Direct from factory. Our specialists will provide a tailored quotation and packaging solution within 24 hours.",
      name: "Name",
      email: "Email",
      phone: "Phone / WhatsApp",
      country: "Country",
      company: "Company",
      industry: "Industry",
      requirements: "Requirements",
      placeholderReq: "Please describe your requirements (size, quantity, material, application)...",
      submit: "Get a Factory Quote",
      sample: "Include Free Sample Pack",
      joined: "Joined 500+ global brands",
      thanks: "Thank you, {name}!",
      successDesc: "Your inquiry has been received. Jocelyn will contact you via WhatsApp/Email within 24 hours with a custom quotation.",
      another: "Send Another Inquiry"
    },
    fr: {
      title: "Demander un Devis Personnalisé",
      desc: "Direct usine. Nos spécialistes vous fourniront un devis et une solution d'emballage sur mesure sous 24 heures.",
      name: "Nom",
      email: "E-mail",
      phone: "Téléphone / WhatsApp",
      country: "Pays",
      company: "Entreprise",
      industry: "Secteur",
      requirements: "Besoins",
      placeholderReq: "Veuillez décrire vos besoins (taille, quantité, matériau, application)...",
      submit: "Obtenir un Devis Usine",
      sample: "Inclure un pack d'échantillons gratuit",
      joined: "Rejoint par plus de 500 marques mondiales",
      thanks: "Merci, {name} !",
      successDesc: "Votre demande a été reçue. Jocelyn vous contactera par WhatsApp/E-mail sous 24 heures avec un devis personnalisé.",
      another: "Envoyer une autre demande"
    },
    de: {
      title: "Maßgeschneidertes Angebot anfordern",
      desc: "Direkt ab Werk. Unsere Spezialisten erstellen innerhalb von 24 Stunden ein individuelles Angebot und eine Verpackungslösung.",
      name: "Name",
      email: "E-Mail",
      phone: "Telefon / WhatsApp",
      country: "Land",
      company: "Unternehmen",
      industry: "Branche",
      requirements: "Anforderungen",
      placeholderReq: "Bitte beschreiben Sie Ihre Anforderungen (Größe, Menge, Material, Anwendung)...",
      submit: "Werksangebot anfordern",
      sample: "Kostenloses Musterpaket anfordern",
      joined: "Über 500 globale Marken sind bereits dabei",
      thanks: "Vielen Dank, {name}!",
      successDesc: "Ihre Anfrage ist eingegangen. Jocelyn wird Sie innerhalb von 24 Stunden per WhatsApp/E-Mail kontaktieren.",
      another: "Weitere Anfrage senden"
    },
    es: {
      title: "Solicitar un Presupuesto Personalizado",
      desc: "Directo de fábrica. Nuestros especialistas le proporcionarán un presupuesto y una solución de embalaje a medida en 24 horas.",
      name: "Nombre",
      email: "Correo electrónico",
      phone: "Teléfono / WhatsApp",
      country: "País",
      company: "Empresa",
      industry: "Industria",
      requirements: "Requisitos",
      placeholderReq: "Describa sus requisitos (tamaño, cantidad, material, aplicación)...",
      submit: "Obtener Presupuesto de Fábrica",
      sample: "Incluir paquete de muestras gratis",
      joined: "Más de 500 marcas globales ya confían en nosotros",
      thanks: "¡Gracias, {name}!",
      successDesc: "Hemos recibido su consulta. Jocelyn se pondrá en contacto con usted por WhatsApp/Email en un plazo de 24 horas.",
      another: "Enviar otra consulta"
    },
    ar: {
      title: "طلب عرض سعر مخصص",
      desc: "مباشرة من المصنع. سيقدم خبراؤنا عرض سعر مخصصًا وحل تغليف في غضون 24 ساعة.",
      name: "الاسم",
      email: "البريد الإلكتروني",
      phone: "الهاتف / واتساب",
      country: "الدولة",
      company: "الشركة",
      industry: "الصناعة",
      requirements: "المتطلبات",
      placeholderReq: "يرجى وصف متطلباتك (الحجم، الكمية، المادة، التطبيق)...",
      submit: "احصل على عرض سعر من المصنع",
      sample: "تضمين حزمة عينات مجانية",
      joined: "انضمت إلينا أكثر من 500 علامة تجارية عالمية",
      thanks: "شكراً لك، {name}!",
      successDesc: "تم استلام استفسارك. ستتواصل معك جوسلين عبر واتساب/البريد الإلكتروني في غضون 24 ساعة مع عرض سعر مخصص.",
      another: "إرسال استفسار آخر"
    }
  };

  const t = translations[lang] || translations['en'];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    company: '',
    industry: '',
    message: productTitle ? `${lang === 'zh' ? '我对' : 'I\'m interested in'} ${productTitle}. ` : ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // track event
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'form_submission', {
        'event_category': 'Engagement',
        'event_label': 'Quote',
        'value': formData.company
      });
    }
    setSubmitted(true);
    // In a real app, this would send to a backend
  };

  if (submitted) {
    return (
      <div className={`bg-white p-12 md:p-16 rounded-[3rem] shadow-2xl max-w-5xl mx-auto text-center ${lang === 'ar' ? 'rtl' : 'ltr'}`} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
        <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        <h2 className="text-3xl font-black mb-4 uppercase tracking-tighter">{t.thanks.replace('{name}', formData.name)}</h2>
        <p className="text-gray-500 font-medium leading-relaxed mb-8">
          {t.successDesc}
        </p>
        <button 
          onClick={() => setSubmitted(false)}
          className="bg-black text-white px-8 py-3 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-gray-800 transition-all"
        >
          {t.another}
        </button>
      </div>
    );
  }

  return (
    <div className={`bg-white p-12 md:p-16 rounded-[3rem] shadow-2xl max-w-5xl mx-auto ${lang === 'ar' ? 'rtl text-right' : 'ltr'}`} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.title}</h2>
      <p className="text-gray-600 mb-12">
        {t.desc}
      </p>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
          <div className="space-y-2">
            <label className="block text-sm font-bold text-gray-700 uppercase tracking-widest">{t.name} *</label>
            <input 
              type="text" 
              required
              placeholder={t.name}
              className="w-full px-6 py-4 border border-gray-100 bg-gray-50 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition text-gray-600 font-medium"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-bold text-gray-700 uppercase tracking-widest">{t.email} *</label>
            <input 
              type="email" 
              required
              placeholder={t.email}
              className="w-full px-6 py-4 border border-gray-100 bg-gray-50 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition text-gray-600 font-medium"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-bold text-gray-700 uppercase tracking-widest">{t.phone} *</label>
            <input 
              type="text" 
              required
              placeholder={t.phone}
              className="w-full px-6 py-4 border border-gray-100 bg-gray-50 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition text-gray-600 font-medium"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-bold text-gray-700 uppercase tracking-widest">{t.country}</label>
            <input 
              type="text" 
              placeholder={t.country}
              className="w-full px-6 py-4 border border-gray-100 bg-gray-50 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition text-gray-600 font-medium"
              value={formData.country}
              onChange={(e) => setFormData({...formData, country: e.target.value})}
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-bold text-gray-700 uppercase tracking-widest">{t.company}</label>
            <input 
              type="text" 
              placeholder={t.company}
              className="w-full px-6 py-4 border border-gray-100 bg-gray-50 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition text-gray-600 font-medium"
              value={formData.company}
              onChange={(e) => setFormData({...formData, company: e.target.value})}
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-bold text-gray-700 uppercase tracking-widest">{t.industry}</label>
            <input 
              type="text" 
              placeholder={t.industry}
              className="w-full px-6 py-4 border border-gray-100 bg-gray-50 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition text-gray-600 font-medium"
              value={formData.industry}
              onChange={(e) => setFormData({...formData, industry: e.target.value})}
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-bold text-gray-700 uppercase tracking-widest">{t.requirements} *</label>
          <textarea 
            rows={4}
            required
            placeholder={t.placeholderReq}
            className="w-full px-6 py-4 border border-gray-100 bg-gray-50 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition resize-none text-gray-600 font-medium"
            value={formData.message}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
          ></textarea>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-8">
          <button type="submit" className="bg-black text-white px-12 py-5 rounded-full font-black text-sm uppercase tracking-widest hover:bg-gray-800 transition-all shadow-xl">
            {t.submit}
          </button>
          <div className="flex items-center gap-4 text-gray-400">
            <label className="flex items-center gap-2 cursor-pointer group">
              <input type="checkbox" className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500" defaultChecked />
              <span className="text-[10px] font-black uppercase tracking-widest group-hover:text-black transition-colors">{t.sample}</span>
            </label>
          </div>
          <div className="flex items-center gap-4 text-gray-400">
            <div className="flex -space-x-2">
              {[1,2,3].map(i => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200"></div>
              ))}
            </div>
            <p className="text-[10px] font-bold uppercase tracking-widest">{t.joined}</p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default InquiryForm;
