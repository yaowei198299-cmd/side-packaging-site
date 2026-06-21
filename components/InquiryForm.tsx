import React, { useState } from 'react';

const InquiryForm = ({ productTitle, lang = 'en' }: { productTitle?: string; lang?: string }) => {
  const localizedCopy: any = {
    en: "Already have a box? Send us the dimensions, we will engineer a collapsible version that saves you 15-30% in shipping volume for free. Free Dieline blueprint delivered to your email in 12 hours.",
    fr: "Vous avez déjà une boîte ? Envoyez-nous les dimensions, nous concevrons gratuitement une version pliable qui vous fera économiser 15-30% de volume de transport. Plan de découpe (Dieline) gratuit envoyé par e-mail en 12h.",
    de: "Haben Sie bereits eine Box? Senden Sie uns die Maße, wir entwickeln kostenlos eine faltbare Version, mit der Sie 15-30% Versandvolumen sparen. Kostenlose Stanzkontur (Dieline) innerhalb von 12h per E-Mail.",
    es: "¿Ya tiene una caja? Envíenos las dimensiones, diseñaremos gratis una versión plegable que le ahorrará un 15-30% de volumen de transporte. Plano de troquelado (Dieline) gratuito enviado por email en 12h.",
    ar: "هل لديك صندوق بالفعل؟ أرسل لنا الأبعاد، وسنصمم لك مجانًا نسخة قابلة للطي توفر لك 15-30% من حجم الشحن. مخطط خط السكين (Dieline) مجاني يصلك خلال 12 ساعة."
  };
  const currentCopy = localizedCopy[lang] || localizedCopy['en'];

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    productType: '',
    quantity: '',
    materialFinish: '',
    logoPlacement: '',
    dimensions: '',
    message: productTitle ? `Inquiry for ${productTitle}. ` : ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', company: '', email: '', phone: '', productType: '', quantity: '', materialFinish: '', logoPlacement: '', dimensions: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
    setIsSubmitting(false);
  };

  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* LuxoPack Style Header Section */}
      <div className="mb-12 text-center">
        <span className="text-[#C9A84C] font-black uppercase text-[10px] tracking-[0.4em] mb-6 block">GET A FREE QUOTE</span>
        
        <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-tight mb-8">
          🎁 Free Quote + 3D Mockup <br/>
          <span className="text-[#C9A84C] italic">in 24 Hours</span>
        </h2>
        
        <p className="text-white/40 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed font-medium mb-12">
          No commitment. No spam. Our packaging consultant will contact you directly with a free design mockup and factory-direct price.
        </p>

        {/* Packaging Consultant Bar */}
        <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-4 md:p-6 flex items-center justify-between max-w-3xl mx-auto mb-16">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-[#C9A84C] rounded-full flex items-center justify-center text-black font-black text-xl">J</div>
            <div className="text-left">
              <p className="text-white font-bold text-sm md:text-base">Hi, I'm Jocelyn — your packaging consultant 👋</p>
              <p className="text-white/40 text-[10px] md:text-xs uppercase tracking-widest">Fill the form below and I'll personally respond with your free quote.</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-white/60 text-[10px] font-bold uppercase tracking-widest">Online • Avg. 2h reply</span>
          </div>
        </div>
      </div>

      <div className="bg-black p-8 md:p-16 rounded-[2.5rem] border border-white/5 shadow-2xl relative overflow-hidden">

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-x-6 gap-y-4">
          {[
            { id: 'name', label: 'Your Name *', placeholder: 'John Smith', required: true },
            { id: 'company', label: 'Company Name', placeholder: 'Your Brand / Company' },
            { id: 'email', label: 'Email Address *', placeholder: 'john@company.com', type: 'email', required: true },
            { id: 'phone', label: 'WhatsApp / Phone', placeholder: '+1 234 567 8900' },
          ].map((field) => (
            <div key={field.id} className="space-y-1.5">
              <label className="block text-[9px] font-black text-white/50 uppercase tracking-[0.4em]">{field.label}</label>
              <input 
                type={field.type || "text"} 
                required={field.required}
                placeholder={field.placeholder}
                className="w-full px-5 py-3.5 bg-[#111111] border border-white/20 text-white rounded-lg focus:border-[#C9A84C] outline-none transition-all font-medium text-sm placeholder:text-white/20"
                value={(formData as any)[field.id]}
                onChange={(e) => setFormData({...formData, [field.id]: e.target.value})}
              />
            </div>
          ))}

          {/* Dropdowns */}
          <div className="space-y-1.5">
            <label className="block text-[9px] font-black text-white/50 uppercase tracking-[0.4em]">Product Type *</label>
            <select 
              required
              className="w-full px-5 py-3.5 bg-[#111111] border border-white/20 text-white rounded-lg focus:border-[#C9A84C] outline-none transition-all font-medium text-sm appearance-none"
              value={formData.productType}
              onChange={(e) => setFormData({...formData, productType: e.target.value})}
            >
              <option value="" className="bg-black">Select box type...</option>
              <option value="Magnetic Rigid Box" className="bg-black">Magnetic Rigid Box</option>
              <option value="Rigid Lid & Base" className="bg-black">Rigid Lid & Base</option>
              <option value="Drawer Box" className="bg-black">Drawer / Sliding Box</option>
              <option value="Corrugated Mailer" className="bg-black">Corrugated Mailer</option>
              <option value="Folding Carton" className="bg-black">Folding Carton / Paper Bag</option>
            </select>
          </div>

          <div className="space-y-1.5">
            <label className="block text-[9px] font-black text-white/50 uppercase tracking-[0.4em]">Estimated Quantity *</label>
            <select 
              required
              className="w-full px-5 py-3.5 bg-[#111111] border border-white/20 text-white rounded-lg focus:border-[#C9A84C] outline-none transition-all font-medium text-sm appearance-none"
              value={formData.quantity}
              onChange={(e) => setFormData({...formData, quantity: e.target.value})}
            >
              <option value="" className="bg-black">Select quantity...</option>
              <option value="100-300" className="bg-black">100 - 300 PCS (Low MOQ)</option>
              <option value="300-500" className="bg-black">300 - 500 PCS</option>
              <option value="500-1000" className="bg-black">500 - 1000 PCS</option>
              <option value="1000-5000" className="bg-black">1000 - 5000 PCS</option>
              <option value="5000+" className="bg-black">5000+ PCS (Bulk Discount)</option>
            </select>
          </div>

          <div className="space-y-1.5">
            <label className="block text-[9px] font-black text-white/50 uppercase tracking-[0.4em]">Material & Finish</label>
            <select 
              className="w-full px-5 py-3.5 bg-[#111111] border border-white/20 text-white rounded-lg focus:border-[#C9A84C] outline-none transition-all font-medium text-sm appearance-none"
              value={formData.materialFinish}
              onChange={(e) => setFormData({...formData, materialFinish: e.target.value})}
            >
              <option value="" className="bg-black">Select material...</option>
              <option value="Rigid Paper Board" className="bg-black">Rigid Paper Board (Luxury)</option>
              <option value="Kraft Corrugated" className="bg-black">Kraft Corrugated (Eco-friendly)</option>
              <option value="White Cardboard" className="bg-black">White Cardboard (Retail)</option>
              <option value="Specialty Paper" className="bg-black">Specialty / Textured Paper</option>
            </select>
          </div>

          <div className="space-y-1.5">
            <label className="block text-[9px] font-black text-white/50 uppercase tracking-[0.4em]">Logo Placement</label>
            <select 
              className="w-full px-5 py-3.5 bg-[#111111] border border-white/20 text-white rounded-lg focus:border-[#C9A84C] outline-none transition-all font-medium text-sm appearance-none"
              value={formData.logoPlacement}
              onChange={(e) => setFormData({...formData, logoPlacement: e.target.value})}
            >
              <option value="" className="bg-black">Select placement...</option>
              <option value="Lid Center" className="bg-black">Lid Center (Top)</option>
              <option value="Front Panel" className="bg-black">Front Panel</option>
              <option value="Inside Lid" className="bg-black">Inside Lid (Unboxing Detail)</option>
              <option value="Full Print" className="bg-black">Full Exterior Print</option>
            </select>
          </div>

          <div className="space-y-1.5 md:col-span-2">
            <label className="block text-[9px] font-black text-white/50 uppercase tracking-[0.4em]">Internal Dimensions (L x W x H)</label>
            <input 
              type="text"
              placeholder="e.g. 4x3x1.25 in (10.2x7.6x3.2 cm)"
              className="w-full px-5 py-3.5 bg-[#111111] border border-white/20 text-white rounded-lg focus:border-[#C9A84C] outline-none transition-all font-medium text-sm placeholder:text-white/20"
              value={formData.dimensions}
              onChange={(e) => setFormData({...formData, dimensions: e.target.value})}
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="block text-[9px] font-black text-white/50 uppercase tracking-[0.4em]">Tell Us More (Optional)</label>
          <textarea 
            rows={3}
            placeholder="Box size, color, special finish, intended use..."
            className="w-full px-5 py-4 bg-[#111111] border border-white/20 text-white rounded-xl focus:border-[#C9A84C] outline-none transition-all font-medium text-sm placeholder:text-white/20 resize-none"
            value={formData.message}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
          />
        </div>

        <div className="space-y-1.5">
          <label className="block text-[9px] font-black text-gray-500 uppercase tracking-[0.4em]">Upload Logo / Reference</label>
          <div className="w-full px-5 py-6 bg-[#111111] border border-dashed border-white/20 text-center rounded-xl group hover:border-[#C9A84C]/50 transition-all cursor-pointer">
              <p className="text-gray-500 font-bold uppercase text-[8px] tracking-widest group-hover:text-white transition-colors">
                📎 Click to upload PNG, AI, PDF · Max 10MB
              </p>
          </div>
        </div>

        <div className="pt-4">
            <button 
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-[#C9A84C] text-black font-black uppercase italic tracking-widest py-5 rounded-full hover:bg-white hover:scale-[1.01] active:scale-95 transition-all shadow-2xl flex items-center justify-center space-x-3 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
                {isSubmitting ? (
                    <span className="animate-pulse">Processing...</span>
                ) : (
                    <span>🚀 Send My Request — Free & No Commitment</span>
                )}
            </button>
        </div>

        {status === 'success' && (
          <div className="p-8 bg-green-500/10 border border-green-500/20 rounded-3xl text-center">
            <p className="text-green-500 font-black uppercase text-[10px] tracking-[0.3em] animate-bounce">
              ✓ Successfully Sent! Our team will contact you in 24 hours.
            </p>
          </div>
        )}
        {status === 'error' && (
          <div className="p-8 bg-red-500/10 border border-red-500/20 rounded-3xl text-center">
            <p className="text-red-500 font-black uppercase text-[10px] tracking-[0.3em]">
              ✕ Something went wrong. Please check your connection and try again.
            </p>
          </div>
        )}
      </form>
    </div>
    </div>
  );
};

export default InquiryForm;
