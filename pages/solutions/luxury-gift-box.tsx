import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const LuxuryGiftBoxSolution = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-purple-100">
      <Head>
        <title>Premium Luxury Gift Box Solutions: Custom Rigid Boxes | Side Packaging HK Limited</title>
        <meta name="description" content="Elevate your brand with luxury gift box solutions. We specialize in high-end rigid boxes, magnetic closures, and premium finishes for jewelry, watches, and luxury retail." />
        <meta name="keywords" content="luxury gift boxes, custom rigid boxes, magnetic closure boxes, premium packaging manufacturer, high-end set-up boxes, jewelry packaging" />
        
        {/* Structured Data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "WebPage",
                "name": "Premium Luxury Gift Box Solutions",
                "description": "Custom luxury rigid boxes and high-end gift packaging for premium brands. Focused on unboxing experience and brand value.",
                "publisher": {
                  "@type": "Organization",
                  "name": "Side Packaging HK Limited"
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "Service",
                "serviceType": "Luxury Packaging Manufacturing",
                "provider": {
                  "@type": "Organization",
                  "name": "Side Packaging HK Limited"
                },
                "areaServed": "Global",
                "description": "High-end rigid box production including magnetic closure boxes, neck boxes, and drawer boxes with premium finishes."
              }
            ])
          }}
        />
      </Head>

      {/* Navigation */}
      <nav className="border-b border-gray-100 sticky top-0 bg-white/95 backdrop-blur-md z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
          <Link href="/" className="font-black text-2xl tracking-tighter italic shrink-0 select-none uppercase text-purple-900">SIDE PACKAGING</Link>
          
          <div className="hidden lg:flex items-center space-x-10 text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400">
            <Link href="/" className="hover:text-black transition-colors">Home</Link>
            <Link href="/#products" className="hover:text-black transition-colors">Products</Link>
            <Link href="/blog" className="hover:text-black transition-colors">Blog</Link>
            <Link href="/solutions/cosmetic-packaging" className="hover:text-black transition-colors">Cosmetic</Link>
            <Link href="/solutions/luxury-gift-box" className="text-black border-b-2 border-purple-600 py-1">Luxury Gift</Link>
          </div>

          <div className="flex items-center space-x-6 shrink-0">
            <Link href="/#contact">
              <button className="bg-purple-900 text-white px-8 py-3.5 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-purple-800 transition-all transform hover:-translate-y-0.5 shadow-lg">
                GET A FREE QUOTE
              </button>
            </Link>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative py-32 bg-gray-950 text-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <div>
                <span className="text-purple-400 font-black text-xs uppercase tracking-[0.3em] mb-6 block">Premium Solution</span>
                <h1 className="text-6xl md:text-7xl font-black leading-[0.95] mb-10 tracking-tighter uppercase italic">
                  The Art of <br/>
                  <span className="text-purple-400 text-shadow-glow">The Unboxing</span> <br/>
                  Experience.
                </h1>
                <p className="text-xl text-gray-400 font-medium mb-14 leading-relaxed max-w-lg">
                  Elevate your brand perception with high-density chipboard, precision engineering, and tactile finishes.
                </p>
                <div className="flex flex-col sm:flex-row gap-6">
                  <Link href="/#contact">
                    <button className="bg-white text-black px-12 py-6 rounded-full font-bold text-lg hover:bg-gray-200 transition-all shadow-xl">
                      Consult Our Engineers
                    </button>
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl border-4 border-purple-500/20 bg-purple-900/10 backdrop-blur-xl">
                  <img 
                    src="https://sc02.alicdn.com/kf/A092333b800b841ab8b8229cd7ee66f5ec.png" 
                    alt="Luxury Rigid Gift Box" 
                    className="w-full h-full object-cover opacity-80 mix-blend-lighten"
                  />
                </div>
                {/* Floating Badge */}
                <div className="absolute -bottom-10 -right-10 bg-white text-black p-8 rounded-[2rem] shadow-2xl border border-gray-100 max-w-[240px]">
                   <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">Value Impact</p>
                   <p className="text-2xl font-black text-purple-700 mb-1">30% Price Increase</p>
                   <p className="text-xs font-bold text-gray-500 leading-snug">Average retail price lift enabled by premium rigid packaging.</p>
                </div>
              </div>
            </div>
          </div>
          {/* Background Decor */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-purple-900/20 blur-[150px] -translate-y-1/2 translate-x-1/2 rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-full bg-purple-600/10 blur-[150px] translate-y-1/2 -translate-x-1/2 rounded-full"></div>
        </section>

        {/* AI Answer Section */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="bg-purple-50 p-12 rounded-[3rem] border border-purple-100">
               <h2 className="text-2xl font-black mb-6 uppercase tracking-tight text-purple-900 italic">Luxury Insight (AI Optimized)</h2>
               <p className="text-purple-900 leading-relaxed text-lg font-medium">
                <strong>Luxury Gift Box Packaging</strong> is a critical element for high-end brands in the jewelry, watch, electronics, and premium spirit industries. Unlike standard packaging, luxury boxes—often referred to as <strong>Rigid Boxes</strong> or <strong>Set-up Boxes</strong>—feature a heavy chipboard core (1200gsm+) wrapped in premium paper. Side Packaging specializes in technical B2B luxury solutions that enhance brand value while ensuring product safety through custom-fitted high-density inserts.
               </p>
            </div>
          </div>
        </section>

        {/* What Makes a Box Luxury */}
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-black mb-20 uppercase tracking-tighter text-center">What Makes it Luxury?</h2>
            <div className="grid md:grid-cols-3 gap-16">
              {[
                {
                  title: "Structural Density",
                  desc: "We use premium high-density chipboard (1200gsm to 1800gsm) that feels solid and substantial in the hand."
                },
                {
                  title: "Precision Engineering",
                  desc: "Tight tolerances ensure that lids open with a satisfying 'hiss' of air—a hallmark of quality craftsmanship."
                },
                {
                  title: "Tactile Finishes",
                  desc: "We use soft-touch lamination, anti-scratch coatings, and textured papers to engage the customer's sense of touch."
                }
              ].map((item, i) => (
                <div key={i} className="text-center">
                   <div className="w-16 h-1 bg-purple-600 mx-auto mb-8 rounded-full"></div>
                   <h4 className="text-xl font-black mb-4 uppercase tracking-tight">{item.title}</h4>
                   <p className="text-gray-500 font-medium leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Structures */}
        <section className="py-32 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
               <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none">Sophisticated <br/>Structures.</h2>
               <p className="text-gray-400 font-bold uppercase tracking-widest text-xs border-b border-gray-300 pb-2">Technical Specifications</p>
            </div>
            <div className="grid md:grid-cols-3 gap-12">
              {[
                { title: "Magnetic Closure", vibe: "Elegant & Modern", desc: "Hidden magnets provide a secure, reusable closing mechanism." },
                { title: "Lid-and-Base", vibe: "Traditional & Timeless", desc: "Visible inner 'neck' for a multi-layered premium aesthetic." },
                { title: "Drawer Style", vibe: "Functional & Sleek", desc: "Perfect for electronics, offering a smooth sliding motion." }
              ].map((item, i) => (
                <div key={i} className="bg-white p-12 rounded-[3rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all">
                   <h5 className="text-purple-600 font-black text-[10px] uppercase tracking-widest mb-4">{item.vibe}</h5>
                   <h4 className="text-2xl font-black mb-4 uppercase tracking-tight">{item.title}</h4>
                   <p className="text-gray-500 font-medium leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Finishing Section */}
        <section className="py-32 bg-purple-900 text-white rounded-[4rem] mx-6">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
               <div>
                  <h2 className="text-4xl md:text-5xl font-black mb-10 uppercase tracking-tighter leading-none italic">
                    The Luxury <br/>Palette.
                  </h2>
                  <p className="text-gray-400 font-medium text-lg leading-relaxed mb-12">
                    Differentiate your brand with our catalog of high-end embellishments and custom papers.
                  </p>
                  <div className="space-y-6">
                    {[
                      { title: "Hot Foil Stamping", detail: "Gold, Silver, Rose Gold, Holographic" },
                      { title: "Embossing & Debossing", detail: "Tactile 3D texture for logos" },
                      { title: "Spot UV & Glitter", detail: "High-gloss visual contrast" },
                      { title: "Custom Metal Plates", detail: "The ultimate signature of luxury" }
                    ].map((item, i) => (
                      <div key={i} className="flex items-center justify-between border-b border-white/10 pb-4">
                        <span className="font-black uppercase tracking-widest text-sm">{item.title}</span>
                        <span className="text-purple-400 text-xs font-bold italic">{item.detail}</span>
                      </div>
                    ))}
                  </div>
               </div>
               <div className="grid grid-cols-2 gap-6">
                  <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                    <img src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&q=80&w=800" alt="Gold Foil Detail" className="w-full h-full object-cover" />
                  </div>
                  <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl translate-y-12">
                    <img src="https://sc02.alicdn.com/kf/Aeaf1dca78d3f4469a1ea380f452ac2de5.png" alt="Luxury Jewelry Box" className="w-full h-full object-cover" />
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-32 bg-white">
          <div className="max-w-4xl mx-auto px-6">
             <h2 className="text-4xl font-black mb-16 uppercase tracking-tighter text-center text-purple-900 italic">Luxury Packaging FAQ.</h2>
             <div className="space-y-12">
                {[
                  {
                    q: "What is the Minimum Order Quantity (MOQ) for custom rigid boxes?",
                    a: "Because luxury boxes involve significant manual assembly, our MOQ typically starts at 500 units to ensure price efficiency for our clients."
                  },
                  {
                    q: "Can you provide samples of different paper textures?",
                    a: "Yes. We can send a 'Texture Kit' featuring linen, leatherette, wood-grain, and soft-touch papers to help you choose the perfect finish."
                  }
                ].map((faq, i) => (
                  <div key={i} className="border-b border-gray-100 pb-12">
                     <h4 className="text-lg font-black mb-4 uppercase tracking-tight">Q: {faq.q}</h4>
                     <p className="text-gray-500 font-medium leading-relaxed italic">A: {faq.a}</p>
                  </div>
                ))}
             </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-32 bg-purple-950 text-white text-center">
          <div className="max-w-4xl mx-auto px-6">
             <h2 className="text-5xl font-black mb-8 uppercase tracking-tighter italic">Create Your Brand's Masterpiece.</h2>
             <p className="text-xl text-purple-300 font-medium mb-12">Our engineers will design a box that doesn't just hold your product—it celebrates it.</p>
             <Link href="/#contact">
                <button className="bg-purple-600 text-white px-12 py-6 rounded-full font-black text-sm uppercase tracking-widest hover:bg-purple-500 transition shadow-2xl transform hover:-translate-y-1">
                  Request Luxury Structural Consultation
                </button>
             </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 text-gray-400">
          <div className="col-span-2">
            <div className="font-black text-3xl tracking-tighter mb-6 uppercase text-black italic">SIDE PACKAGING</div>
            <p className="max-w-sm font-medium leading-relaxed">
              Global manufacturer of premium custom luxury rigid boxes. Specialist in magnetic gift packaging and technical structural design since 2006.
            </p>
          </div>
          <div>
            <h4 className="font-black mb-6 uppercase tracking-widest text-xs">Navigation</h4>
            <ul className="space-y-4 text-sm font-bold">
              <li><Link href="/" className="hover:text-black">Home</Link></li>
              <li><Link href="/blog" className="hover:text-black">Blog</Link></li>
              <li><Link href="/#contact" className="hover:text-black">Request Quote</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-black mb-6 uppercase tracking-widest text-xs">Contact Andy</h4>
            <ul className="space-y-4 text-sm font-bold">
              <li><a href="mailto:andy@saidepackaging.com" className="hover:text-black">andy@saidepackaging.com</a></li>
              <li><a href="https://wa.me/8613699786538" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition-colors">WhatsApp Chat</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LuxuryGiftBoxSolution;
