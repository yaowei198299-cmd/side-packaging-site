import React, { useState } from 'react';

const InquiryForm = ({ productTitle, lang = 'en' }: { productTitle?: string; lang?: string }) => {
  const translations: any = {
    en: {
      title: "Get Packaging Quote in 24 Hours",
      desc: "Direct from factory. Free dieline support & packaging consultation. We help reduce 10-30% packaging cost.",
      name: "Name",
      email: "Email",
      phone: "Phone / WhatsApp",
      country: "Country",
      company: "Company",
      industry: "Industry",
      requirements: "Project Brief",
      placeholderReq: "Size, Quantity, Material, Printing (e.g. 20x15x10cm, 500pcs, Rigid Box, Gold Foil)...",
      submit: "Get My Free Technical Quote",
      sample: "Include Free Sample Pack",
      joined: "Joined 500+ global brands",
      thanks: "Thank you, {name}!",
      successDesc: "Your inquiry has been received. Jocelyn will contact you via WhatsApp/Email within 24 hours with a custom quotation and structural analysis.",
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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/inquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        const data = await response.json();
        setError(data.message || 'Failed to send inquiry. Please try again.');
      }
    } catch (err) {
      setError('An error occurred. Please contact us directly via WhatsApp.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className={`bg-[#0f0f0f] p-12 md:p-16 rounded-sm border border-white/5 shadow-2xl max-w-5xl mx-auto text-center ${lang === 'ar' ? 'rtl' : 'ltr'}`} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
        <div className="w-20 h-20 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
          <svg className="w-10 h-10 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        <h2 className="text-3xl font-black mb-4 uppercase tracking-tighter italic text-white">{t.thanks.replace('{name}', formData.name)}</h2>
        <p className="text-white/40 font-medium leading-relaxed mb-8 uppercase tracking-widest text-xs">
          {t.successDesc}
        </p>
        <button 
          onClick={() => setSubmitted(false)}
          className="bg-white text-black px-8 py-3 rounded-full font-black uppercase tracking-widest text-[10px] hover:bg-gray-200 transition-all"
        >
          {t.another}
        </button>
      </div>
    );
  }

  return (
    <div className={`bg-[#0f0f0f] p-12 md:p-16 rounded-sm border border-white/5 shadow-2xl max-w-5xl mx-auto ${lang === 'ar' ? 'rtl text-right' : 'ltr'}`} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <h2 className="text-3xl font-black text-white mb-4 uppercase tracking-tighter italic">{t.title}</h2>
      <p className="text-white/40 mb-12 uppercase tracking-[0.2em] text-[10px] font-bold leading-relaxed">
        {t.desc}
      </p>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
          {[
            { id: 'name', label: t.name, placeholder: t.name, required: true },
            { id: 'email', label: t.email, placeholder: t.email, required: true, type: 'email' },
            { id: 'phone', label: t.phone, placeholder: t.phone, required: true },
            { id: 'country', label: t.country, placeholder: t.country },
            { id: 'company', label: t.company, placeholder: t.company },
            { id: 'industry', label: t.industry, placeholder: t.industry },
          ].map((field) => (
            <div key={field.id} className="space-y-2">
              <label className="block text-[10px] font-black text-white/20 uppercase tracking-[0.3em]">{field.label} {field.required ? '*' : ''}</label>
              <input 
                type={field.type || "text"} 
                required={field.required}
                placeholder={field.placeholder}
                className="w-full px-6 py-4 bg-black border border-white/5 text-white rounded-sm focus:border-gold-500 outline-none transition font-medium text-sm placeholder:text-white/10"
                value={(formData as any)[field.id]}
                onChange={(e) => setFormData({...formData, [field.id]: e.target.value})}
              />
            </div>
          ))}
        </div>

        <div className="space-y-2">
          <label className="block text-[10px] font-black text-white/20 uppercase tracking-[0.3em]">{t.requirements} *</label>
          <textarea 
            rows={4}
            required
            placeholder={t.placeholderReq}
            className="w-full px-6 py-4 bg-black border border-white/5 text-white rounded-sm focus:border-gold-500 outline-none transition resize-none font-medium text-sm placeholder:text-white/10"
            value={formData.message}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
          ></textarea>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-12 pt-6">
          <button 
            type="submit" 
            disabled={loading}
            className="bg-white text-black px-12 py-5 rounded-full font-black text-[11px] uppercase tracking-widest hover:bg-gray-200 transition-all shadow-xl disabled:bg-gray-400"
          >
            {loading ? 'Sending...' : t.submit}
          </button>
          
          {error && (
            <p className="text-red-500 font-bold text-xs uppercase tracking-widest">{error}</p>
          )}
          
          <div className="flex flex-col gap-2">
             <span className="text-gold-500 font-black text-[9px] uppercase tracking-[0.3em] italic">✓ Free Dieline Support</span>
             <span className="text-gold-500 font-black text-[9px] uppercase tracking-[0.3em] italic">✓ Cost Optimization</span>
          </div>

          <div className="flex items-center gap-4">
            <label className="flex items-center gap-3 cursor-pointer group">
              <input type="checkbox" className="w-5 h-5 bg-black border-white/10 rounded text-gold-500 focus:ring-gold-500" defaultChecked />
              <span className="text-[9px] font-black uppercase tracking-widest text-white/40 group-hover:text-white transition-colors">{t.sample}</span>
            </label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default InquiryForm;
