import React, { useState } from 'react';

const InquiryForm = ({ productTitle, lang = 'en' }: { productTitle?: string; lang?: string }) => {
  const [formMode, setFormMode] = useState<'quick' | 'full'>('quick');
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    productType: productTitle || 'Magnetic Rigid Box',
    quantity: '300-500',
    materialFinish: '',
    logoPlacement: '',
    dimensions: '',
    sampleKit: false,
    message: productTitle ? `Inquiry for ${productTitle}. ` : ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('idle');

    try {
      const response = await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          inquiryType: formMode === 'quick' ? '⚡ 60s Fast Quote' : '📐 Full Technical RFQ'
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({
          name: '',
          company: '',
          email: '',
          phone: '',
          productType: 'Magnetic Rigid Box',
          quantity: '300-500',
          materialFinish: '',
          logoPlacement: '',
          dimensions: '',
          sampleKit: false,
          message: ''
        });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Inquiry error:', error);
      setStatus('error');
    }
    setIsSubmitting(false);
  };

  const whatsappDirectUrl = `https://wa.me/message/WRDEFMR2ETUJH1?text=Hi%20Jocelyn%2C%20I%20am%20looking%20for%20a%20factory-direct%20quote%20for%20${encodeURIComponent(formData.productType || 'Custom Boxes')}%20(Qty%3A%20${encodeURIComponent(formData.quantity)}).`;

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Header & Value Proposition */}
      <div className="mb-10 text-center px-4">
        <div className="inline-flex items-center gap-2 border border-[#C9A84C]/40 bg-[#C9A84C]/10 px-4 py-1.5 rounded-full mb-5">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-[#C9A84C] font-black uppercase text-[10px] tracking-[0.3em]">Direct China Factory &#8226; Est. 2006</span>
        </div>

        <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter leading-tight mb-4 font-montserrat">
          Get Factory-Direct Pricing <br className="hidden sm:block"/>
          <span className="text-[#C9A84C] italic">&amp; Free 3D Mockup in 12h</span>
        </h2>
        
        <p className="text-white/60 text-sm md:text-base max-w-2xl mx-auto leading-relaxed font-medium mb-8">
          Save 15&#8211;30% on luxury packaging. Low MOQ (from 300 pcs), complete DDP shipping (customs &amp; duties paid to USA/EU), and dedicated engineering support.
        </p>

        {/* Jocelyn Live Status Card */}
        <div className="bg-[#111116] border border-white/10 rounded-2xl p-4 md:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-2xl mx-auto shadow-xl">
          <div className="flex items-center gap-4 text-left">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-tr from-[#C9A84C] to-yellow-200 rounded-full flex items-center justify-center text-black font-black text-xl font-montserrat shadow-lg">
                J
              </div>
              <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-[#111116]" />
            </div>
            <div>
              <p className="text-white font-bold text-sm">Jocelyn &#8212; Senior Packaging Consultant</p>
              <p className="text-white/40 text-[10px] uppercase tracking-wider font-semibold">Online Now &#8226; Average Response: 15&#8211;30 mins</p>
            </div>
          </div>
          
          <a
            href={whatsappDirectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366]/15 hover:bg-[#25D366] text-[#25D366] hover:text-white border border-[#25D366]/40 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.411-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Chat WhatsApp
          </a>
        </div>
      </div>

      {/* Main Form Box */}
      <div className="bg-[#0b0b10] p-6 md:p-12 rounded-[2.5rem] border border-white/10 shadow-2xl relative">
        
        {/* Mode Tabs */}
        <div className="flex bg-[#16161e] p-1.5 rounded-2xl mb-8 border border-white/5 max-w-md mx-auto">
          <button
            type="button"
            onClick={() => setFormMode('quick')}
            className={`flex-1 py-3 px-4 rounded-xl text-xs font-black uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
              formMode === 'quick' 
                ? 'bg-[#C9A84C] text-black shadow-lg' 
                : 'text-white/60 hover:text-white'
            }`}
          >
            <span>⚡ 60s Fast Quote</span>
          </button>
          <button
            type="button"
            onClick={() => setFormMode('full')}
            className={`flex-1 py-3 px-4 rounded-xl text-xs font-black uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
              formMode === 'full' 
                ? 'bg-[#C9A84C] text-black shadow-lg' 
                : 'text-white/60 hover:text-white'
            }`}
          >
            <span>📐 Full Technical RFQ</span>
          </button>
        </div>

        {/* Lead Magnet Option: $19.9 Sample Box Kit */}
        <div 
          onClick={() => setFormData({...formData, sampleKit: !formData.sampleKit})}
          className={`cursor-pointer p-4 md:p-5 rounded-2xl mb-8 border transition-all flex items-center justify-between gap-4 ${
            formData.sampleKit 
              ? 'bg-[#C9A84C]/15 border-[#C9A84C]' 
              : 'bg-[#14141c] border-white/10 hover:border-white/20'
          }`}
        >
          <div className="flex items-center gap-3.5">
            <input 
              type="checkbox"
              checked={formData.sampleKit}
              onChange={() => {}} // Handled by div click
              className="w-5 h-5 accent-[#C9A84C] rounded cursor-pointer"
            />
            <div>
              <p className="text-white font-bold text-sm flex items-center gap-2">
                📦 Request $19.9 Custom Sample Kit
                <span className="bg-[#C9A84C] text-black text-[9px] font-black uppercase px-2 py-0.5 rounded-full">Popular</span>
              </p>
              <p className="text-white/50 text-xs">
                Includes 5+ box structures, luxury foil &amp; paper swatches. <strong>$50 credit refunded on your 1st bulk order!</strong>
              </p>
            </div>
          </div>
          <span className="text-xs font-bold text-[#C9A84C] whitespace-nowrap hidden sm:inline">Free Dielines Included</span>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Essential Fields */}
            <div className="space-y-2">
              <label className="block text-[11px] font-bold text-white/70 uppercase tracking-wider font-montserrat">
                Your Email Address *
              </label>
              <input 
                type="email" 
                required
                placeholder="name@company.com"
                className="w-full px-5 py-4 bg-[#14141c] border border-white/15 text-white rounded-xl focus:border-[#C9A84C] outline-none transition-all font-medium text-sm placeholder:text-white/20"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>

            <div className="space-y-2">
              <label className="block text-[11px] font-bold text-white/70 uppercase tracking-wider font-montserrat">
                Your Name / Brand Name
              </label>
              <input 
                type="text" 
                placeholder="e.g. John (Luxe Jewelry)"
                className="w-full px-5 py-4 bg-[#14141c] border border-white/15 text-white rounded-xl focus:border-[#C9A84C] outline-none transition-all font-medium text-sm placeholder:text-white/20"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>

            <div className="space-y-2">
              <label className="block text-[11px] font-bold text-white/70 uppercase tracking-wider font-montserrat">
                WhatsApp / Phone (For Instant Mockup)
              </label>
              <input 
                type="text" 
                placeholder="+1 (555) 000-0000"
                className="w-full px-5 py-4 bg-[#14141c] border border-white/15 text-white rounded-xl focus:border-[#C9A84C] outline-none transition-all font-medium text-sm placeholder:text-white/20"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />
            </div>

            <div className="space-y-2">
              <label className="block text-[11px] font-bold text-white/70 uppercase tracking-wider font-montserrat">
                Box Style
              </label>
              <select 
                className="w-full px-5 py-4 bg-[#14141c] border border-white/15 text-white rounded-xl focus:border-[#C9A84C] outline-none transition-all font-medium text-sm appearance-none cursor-pointer"
                value={formData.productType} 
                onChange={(e) => setFormData({...formData, productType: e.target.value})}
              >
                <option value="Magnetic Rigid Box" className="bg-[#14141c]">Magnetic Rigid Box (Luxury)</option>
                <option value="Rigid Lid & Base Box" className="bg-[#14141c]">Rigid Lid &amp; Base Box</option>
                <option value="Drawer / Sliding Box" className="bg-[#14141c]">Drawer / Sliding Box</option>
                <option value="Corrugated Mailer Box" className="bg-[#14141c]">Corrugated Mailer Box</option>
                <option value="Folding Carton / Paper Bag" className="bg-[#14141c]">Folding Carton / Luxury Bag</option>
                <option value="Other Custom Packaging" className="bg-[#14141c]">Other Custom Packaging</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="block text-[11px] font-bold text-white/70 uppercase tracking-wider font-montserrat">
                Estimated Order Quantity
              </label>
              <select 
                className="w-full px-5 py-4 bg-[#14141c] border border-white/15 text-white rounded-xl focus:border-[#C9A84C] outline-none transition-all font-medium text-sm appearance-none cursor-pointer"
                value={formData.quantity} 
                onChange={(e) => setFormData({...formData, quantity: e.target.value})}
              >
                <option value="100-300" className="bg-[#14141c]">100 - 300 PCS (Sample / Test Order)</option>
                <option value="300-500" className="bg-[#14141c]">300 - 500 PCS (Low MOQ Standard)</option>
                <option value="500-1000" className="bg-[#14141c]">500 - 1,000 PCS (Most Popular)</option>
                <option value="1000-3000" className="bg-[#14141c]">1,000 - 3,000 PCS (Best Unit Cost)</option>
                <option value="5000+" className="bg-[#14141c]">5,000+ PCS (Volume Wholesale)</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="block text-[11px] font-bold text-white/70 uppercase tracking-wider font-montserrat">
                Dimensions (L x W x H)
              </label>
              <input 
                type="text" 
                placeholder="e.g. 4x3x1.25 in (or cm / not sure yet)"
                className="w-full px-5 py-4 bg-[#14141c] border border-white/15 text-white rounded-xl focus:border-[#C9A84C] outline-none transition-all font-medium text-sm placeholder:text-white/20"
                value={formData.dimensions} 
                onChange={(e) => setFormData({...formData, dimensions: e.target.value})} 
              />
            </div>
          </div>

          {/* Full Mode Additional Fields */}
          {formMode === 'full' && (
            <div className="grid md:grid-cols-2 gap-6 pt-2 animate-in fade-in duration-300">
              <div className="space-y-2">
                <label className="block text-[11px] font-bold text-white/70 uppercase tracking-wider font-montserrat">
                  Material &amp; Paper Finish
                </label>
                <select 
                  className="w-full px-5 py-4 bg-[#14141c] border border-white/15 text-white rounded-xl focus:border-[#C9A84C] outline-none transition-all font-medium text-sm appearance-none cursor-pointer"
                  value={formData.materialFinish} 
                  onChange={(e) => setFormData({...formData, materialFinish: e.target.value})}
                >
                  <option value="" className="bg-[#14141c]">Select preferred material...</option>
                  <option value="1200gsm Rigid Board + Matte Paper" className="bg-[#14141c]">1200gsm Rigid Board + Matte Soft Touch</option>
                  <option value="Kraft Eco Corrugated" className="bg-[#14141c]">FSC Kraft Eco Corrugated (Recyclable)</option>
                  <option value="Specialty Gold/Silver Foil Board" className="bg-[#14141c]">Specialty Texture / Foil Paper</option>
                  <option value="Need Recommendation" className="bg-[#14141c]">Advise me the most cost-effective option</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="block text-[11px] font-bold text-white/70 uppercase tracking-wider font-montserrat">
                  Logo &amp; Finish Options
                </label>
                <select 
                  className="w-full px-5 py-4 bg-[#14141c] border border-white/15 text-white rounded-xl focus:border-[#C9A84C] outline-none transition-all font-medium text-sm appearance-none cursor-pointer"
                  value={formData.logoPlacement} 
                  onChange={(e) => setFormData({...formData, logoPlacement: e.target.value})}
                >
                  <option value="" className="bg-[#14141c]">Select logo technique...</option>
                  <option value="Gold / Rose Gold Hot Stamping" className="bg-[#14141c]">Gold / Rose Gold / Silver Hot Foil</option>
                  <option value="Embossing / Debossing" className="bg-[#14141c]">3D Embossing / Debossing</option>
                  <option value="Spot UV Varnish" className="bg-[#14141c]">Spot UV Gloss Highlight</option>
                  <option value="Full Color CMYK / Pantone" className="bg-[#14141c]">Full Color CMYK / Pantone Print</option>
                </select>
              </div>
            </div>
          )}

          {/* Message / Details */}
          <div className="space-y-2">
            <label className="block text-[11px] font-bold text-white/70 uppercase tracking-wider font-montserrat">
              Notes or Special Requirements (Optional)
            </label>
            <textarea 
              rows={3} 
              placeholder="Tell us about your product, target delivery country for DDP shipping, or insert requirements..."
              className="w-full px-5 py-4 bg-[#14141c] border border-white/15 text-white rounded-xl focus:border-[#C9A84C] outline-none transition-all font-medium text-sm placeholder:text-white/20 resize-none"
              value={formData.message} 
              onChange={(e) => setFormData({...formData, message: e.target.value})} 
            />
          </div>

          {/* Submit CTA */}
          <div className="pt-4 space-y-6">
            <button 
              type="submit" 
              disabled={isSubmitting}
              className={`w-full bg-[#C9A84C] text-black font-black uppercase italic tracking-widest py-5 rounded-full hover:bg-white hover:scale-[1.01] active:scale-95 transition-all shadow-[0_10px_30px_rgba(201,168,76,0.3)] flex items-center justify-center gap-3 ${
                isSubmitting ? 'opacity-60 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? (
                <span className="animate-pulse text-sm">Transmitting to Engineering Team...</span>
              ) : (
                <span className="text-sm md:text-base">
                  {formData.sampleKit ? 'REQUEST $19.9 SAMPLE KIT &amp; QUOTE &#8212; 12H REPLY' : 'GET FACTORY QUOTE &amp; FREE 3D MOCKUP &#8212; 12H REPLY'}
                </span>
              )}
            </button>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-3 text-white/60 text-xs">
              <span className="flex items-center gap-1.5"><strong className="text-green-400">&#10003;</strong> Low MOQ 300 pcs</span>
              <span className="flex items-center gap-1.5"><strong className="text-green-400">&#10003;</strong> DDP Duty-Paid Shipping (USA/EU)</span>
              <span className="flex items-center gap-1.5"><strong className="text-green-400">&#10003;</strong> Free CAD Dielines</span>
              <span className="flex items-center gap-1.5"><strong className="text-green-400">&#10003;</strong> No Hidden Broker Fees</span>
            </div>
          </div>

          {/* Feedback alerts */}
          {status === 'success' && (
            <div className="p-6 bg-green-500/15 border border-green-500/30 rounded-2xl text-center space-y-2 animate-in zoom-in-95 duration-300">
              <p className="text-green-400 font-black text-sm uppercase tracking-wider">
                &#10003; Thank you! Your request has been received.
              </p>
              <p className="text-white/70 text-xs">
                Jocelyn and our structural engineers are preparing your pricing and 3D mockup. We will contact you at <strong>{formData.email || 'your email'}</strong> within 2&#8211;4 business hours.
              </p>
            </div>
          )}

          {status === 'error' && (
            <div className="p-6 bg-red-500/15 border border-red-500/30 rounded-2xl text-center space-y-2">
              <p className="text-red-400 font-black text-sm uppercase tracking-wider">
                &#10005; Transmission issue. Please contact directly via WhatsApp:
              </p>
              <a 
                href={whatsappDirectUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-block text-xs text-[#25D366] font-bold underline"
              >
                Click here to chat with Jocelyn on WhatsApp (+86 186 6432 0000)
              </a>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default InquiryForm;
