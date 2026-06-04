import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import WhatsAppButton from '../components/WhatsAppButton';

const InquiryPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    productType: 'Magnetic Rigid Box',
    quantity: '500 - 1000 pcs',
    material: 'Luxury Rigid Board',
    logoPlacement: 'Lid Center',
    dimensions: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Inquiry Data:", formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#0a0a0f] text-white flex items-center justify-center px-6">
        <div className="text-center max-w-xl">
          <div className="w-24 h-24 bg-[#C9A84C] rounded-full flex items-center justify-center mx-auto mb-10 shadow-[0_0_50px_rgba(201,168,76,0.4)]">
            <svg className="w-12 h-12 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <h1 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter mb-6">Request Received.</h1>
          <p className="text-white/50 text-lg font-medium leading-relaxed uppercase tracking-widest mb-12">
            Jocelyn is reviewing your specifications. You will receive a technical quote and 3D mockup within 24 hours.
          </p>
          <Link href="/" className="inline-block bg-white text-black px-12 py-4 rounded-full font-black uppercase tracking-widest text-xs hover:bg-[#C9A84C] transition-all">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white font-sans selection:bg-[#C9A84C] overflow-x-hidden">
      <Head>
        <title>Get a Quote | Luxury B2B Packaging Solutions | Side Packaging</title>
        <meta name="description" content="Request a free technical quote and 3D mockup for your luxury jewelry and gift packaging. 24-hour response guaranteed." />
      </Head>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-[100] bg-black/40 backdrop-blur-2xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="text-xl font-black tracking-tighter uppercase italic text-white">Side Packaging</Link>
          <div className="hidden lg:flex items-center space-x-10 text-[9px] font-black uppercase tracking-[0.3em] text-gray-400">
            <Link href="/products" className="hover:text-white transition-colors">Catalog</Link>
            <Link href="/gallery" className="hover:text-white transition-colors">Case Studies</Link>
            <Link href="/about-founder" className="hover:text-white transition-colors">Founders</Link>
          </div>
          <Link href="/" className="text-[9px] font-black uppercase tracking-widest text-white/40 hover:text-white transition-all">← Back to Site</Link>
        </div>
      </nav>

      <main className="pt-40 pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-24">
            
            {/* Left Column: Context & Trust */}
            <div className="lg:col-span-5">
              <div className="inline-block border border-[#C9A84C]/30 bg-[#C9A84C]/5 px-4 py-1.5 rounded-full mb-8">
                <span className="text-[10px] font-bold text-[#C9A84C] uppercase tracking-[0.2em]">B2B Priority Support</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] mb-10 italic">
                Request a <br/>
                <span className="text-[#C9A84C]">Free Quote</span> <br/>
                & 3D Mockup.
              </h1>
              <p className="text-xl text-white/50 mb-16 font-medium leading-relaxed uppercase tracking-widest">
                Our engineering team provides structural analysis and cost optimization within <span className="text-white italic underline decoration-[#C9A84C]">24 hours</span>.
              </p>

              {/* Consultant Card (Amy/Jocelyn Style) */}
              <div className="bg-[#0f0f15] p-8 rounded-2xl border border-white/5 mb-16 flex items-center gap-8 group">
                <div className="relative">
                   <div className="w-24 h-24 rounded-full overflow-hidden grayscale group-hover:grayscale-0 transition-all border-2 border-white/10">
                      <img src="https://sc04.alicdn.com/kf/Hdf03eb602caa4dd4bce2e15c8f77cb1aA.jpg" alt="Jocelyn" className="w-full h-full object-cover" />
                   </div>
                   <div className="absolute bottom-1 right-1 w-5 h-5 bg-green-500 rounded-full border-4 border-[#0f0f15]" />
                </div>
                <div>
                  <p className="text-[10px] font-black text-[#C9A84C] uppercase tracking-widest mb-1">Packaging Consultant</p>
                  <h3 className="text-2xl font-black italic mb-2">Jocelyn</h3>
                  <p className="text-[10px] font-black text-green-500 uppercase tracking-widest">Online · Avg. 2h reply</p>
                </div>
              </div>

              {/* Trust Checkboxes */}
              <div className="space-y-6 mb-16">
                 {[
                   "Free Design & 3D Mockup Service",
                   "Direct Factory Pricing (No Middleman)",
                   "Sample Production Before Bulk Order",
                   "24-Hour Response Guaranteed"
                 ].map((item, i) => (
                   <div key={i} className="flex items-center gap-4">
                      <div className="w-5 h-5 rounded-full border border-[#C9A84C] flex items-center justify-center">
                        <svg className="w-3 h-3 text-[#C9A84C]" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" /></svg>
                      </div>
                      <span className="text-[11px] font-black uppercase tracking-[0.1em] text-white/70">{item}</span>
                   </div>
                 ))}
              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-8 opacity-30 grayscale">
                 <img src="https://upload.wikimedia.org/wikipedia/en/thumb/0/0e/FSC_logo.svg/1200px-FSC_logo.svg.png" className="h-10" alt="FSC" />
                 <img src="https://www.sgs.com/-/media/sgssite/images/logos/sgs-logo-black.svg" className="h-10" alt="SGS" />
                 <img src="https://www.iso.org/files/live/sites/isoorg/files/about%20ISO/isologo.png" className="h-10" alt="ISO" />
              </div>
            </div>

            {/* Right Column: The Form (LuxoPack 2-Column Grid) */}
            <div className="lg:col-span-7 bg-[#0f0f15] p-10 md:p-16 rounded-[2.5rem] border border-white/5 shadow-3xl">
              <form onSubmit={handleSubmit} className="space-y-10">
                <div className="grid md:grid-cols-2 gap-x-10 gap-y-10">
                  {/* Name | Company */}
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em]">Your Name *</label>
                    <input 
                      required type="text" placeholder="John Doe"
                      className="w-full bg-black/50 border border-white/5 rounded-xl px-6 py-4 focus:border-[#C9A84C] outline-none transition text-sm font-medium"
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em]">Company Name</label>
                    <input 
                      type="text" placeholder="Lux Brand Ltd."
                      className="w-full bg-black/50 border border-white/5 rounded-xl px-6 py-4 focus:border-[#C9A84C] outline-none transition text-sm font-medium"
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                    />
                  </div>

                  {/* Email | Phone */}
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em]">Email Address *</label>
                    <input 
                      required type="email" placeholder="john@company.com"
                      className="w-full bg-black/50 border border-white/5 rounded-xl px-6 py-4 focus:border-[#C9A84C] outline-none transition text-sm font-medium"
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em]">WhatsApp / Phone *</label>
                    <input 
                      required type="text" placeholder="+1 (555) 000-0000"
                      className="w-full bg-black/50 border border-white/5 rounded-xl px-6 py-4 focus:border-[#C9A84C] outline-none transition text-sm font-medium"
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>

                  {/* Product Type | Quantity */}
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em]">Product Type *</label>
                    <select 
                      className="w-full bg-black/50 border border-white/5 rounded-xl px-6 py-4 focus:border-[#C9A84C] outline-none transition text-sm font-medium appearance-none"
                      onChange={(e) => setFormData({...formData, productType: e.target.value})}
                    >
                      <option>Magnetic Rigid Box</option>
                      <option>Mailer Box (E-commerce)</option>
                      <option>Lid & Base Rigid Box</option>
                      <option>Sliding Drawer Box</option>
                      <option>Luxury Paper Bag</option>
                      <option>Bespoke Jewelry Packaging</option>
                    </select>
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em]">Estimated Quantity *</label>
                    <select 
                      className="w-full bg-black/50 border border-white/5 rounded-xl px-6 py-4 focus:border-[#C9A84C] outline-none transition text-sm font-medium appearance-none"
                      onChange={(e) => setFormData({...formData, quantity: e.target.value})}
                    >
                      <option>100 - 300 pcs</option>
                      <option>300 - 500 pcs</option>
                      <option>500 - 1000 pcs</option>
                      <option>1000 - 3000 pcs</option>
                      <option>3000 - 5000 pcs</option>
                      <option>5000+ pcs</option>
                    </select>
                  </div>

                  {/* Material | Logo */}
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em]">Material & Finish</label>
                    <select 
                      className="w-full bg-black/50 border border-white/5 rounded-xl px-6 py-4 focus:border-[#C9A84C] outline-none transition text-sm font-medium appearance-none"
                      onChange={(e) => setFormData({...formData, material: e.target.value})}
                    >
                      <option>Luxury Rigid Board (1200gsm)</option>
                      <option>Eco-Friendly Kraft (Recycled)</option>
                      <option>Specialty Art Paper (Textured)</option>
                      <option>Corrugated (High Strength)</option>
                    </select>
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em]">Logo Placement</label>
                    <select 
                      className="w-full bg-black/50 border border-white/5 rounded-xl px-6 py-4 focus:border-[#C9A84C] outline-none transition text-sm font-medium appearance-none"
                      onChange={(e) => setFormData({...formData, logoPlacement: e.target.value})}
                    >
                      <option>Lid Center (Top)</option>
                      <option>Inside Lid</option>
                      <option>Full Wrap Print</option>
                      <option>Debossed / Embossed Only</option>
                    </select>
                  </div>
                </div>

                {/* Dimensions */}
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em]">Internal Dimensions (L x W x H in cm)</label>
                  <input 
                    type="text" placeholder="e.g. 20 x 15 x 8 cm"
                    className="w-full bg-black/50 border border-white/5 rounded-xl px-6 py-4 focus:border-[#C9A84C] outline-none transition text-sm font-medium"
                    onChange={(e) => setFormData({...formData, dimensions: e.target.value})}
                  />
                </div>

                {/* Message */}
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em]">Tell Us More (Optional)</label>
                  <textarea 
                    rows={4} placeholder="Specific requirements, budget, or timeline..."
                    className="w-full bg-black/50 border border-white/5 rounded-xl px-6 py-4 focus:border-[#C9A84C] outline-none transition text-sm font-medium resize-none"
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>

                {/* File Upload Placeholder */}
                <div className="border-2 border-dashed border-white/10 rounded-2xl p-10 text-center hover:border-[#C9A84C]/40 transition-all cursor-pointer">
                   <p className="text-[10px] font-black text-white/30 uppercase tracking-widest">Upload Logo / Reference Image (Max 10MB)</p>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-[#C9A84C] text-black py-6 rounded-2xl font-black uppercase tracking-[0.3em] text-sm hover:bg-white hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_20px_40px_rgba(201,168,76,0.2)]"
                >
                  🚀 Send My Request — Free & No Commitment
                </button>

                <p className="text-center text-[9px] font-black text-white/20 uppercase tracking-widest italic">
                  🔒 Your information is encrypted and safe.
                </p>
              </form>
            </div>

          </div>
        </div>
      </main>

      <footer className="bg-black py-20 border-t border-white/5 text-center">
         <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20 italic">Side Packaging HK Limited. © 2026. Industrial Luxury standards.</p>
      </footer>

      <WhatsAppButton />
    </div>
  );
};

export default InquiryPage;
