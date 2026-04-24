import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const CosmeticSolution = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-pink-100">
      <Head>
        <title>Custom Cosmetic Packaging Solutions: Luxury Beauty Box Manufacturer | Side Packaging HK Limited</title>
        <meta name="description" content="Elevate your beauty brand with custom cosmetic packaging. We specialize in luxury rigid magnetic boxes, high-GSM folding cartons, and FSC-certified skincare packaging." />
        <meta name="keywords" content="cosmetic packaging solutions, luxury beauty boxes, skincare packaging manufacturer, makeup box printing, custom perfume boxes, sustainable beauty packaging" />
        
        {/* Structured Data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "WebPage",
                "name": "Custom Cosmetic Packaging Solutions",
                "description": "Premium packaging solutions for beauty, skincare, and makeup brands. Factory-direct luxury rigid boxes and sustainable options.",
                "publisher": {
                  "@type": "Organization",
                  "name": "Side Packaging HK Limited"
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "Service",
                "serviceType": "Cosmetic Packaging Manufacturing",
                "provider": {
                  "@type": "Organization",
                  "name": "Side Packaging HK Limited"
                },
                "areaServed": "Global",
                "description": "Structural design and manufacturing of custom cosmetic boxes, including magnetic rigid boxes and eco-friendly folding cartons."
              }
            ])
          }}
        />
      </Head>

      {/* Navigation */}
      <nav className="border-b border-gray-100 sticky top-0 bg-white/95 backdrop-blur-md z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
          <Link href="/" className="font-black text-2xl tracking-tighter italic shrink-0 select-none uppercase">SIDE PACKAGING</Link>
          
          <div className="hidden lg:flex items-center space-x-10 text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400">
            <Link href="/" className="hover:text-black transition-colors">Home</Link>
            <Link href="/#products" className="hover:text-black transition-colors">Products</Link>
            <Link href="/#about" className="hover:text-black transition-colors">Why Us</Link>
            <Link href="/blog" className="hover:text-black transition-colors">Blog</Link>
            <Link href="/solutions/cosmetic-packaging" className="text-black border-b-2 border-black py-1">Cosmetic Solution</Link>
          </div>

          <div className="flex items-center space-x-6 shrink-0">
            <Link href="/#contact">
              <button className="bg-black text-white px-8 py-3.5 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-gray-800 transition-all transform hover:-translate-y-0.5 shadow-lg">
                GET A FREE QUOTE
              </button>
            </Link>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative py-32 bg-gray-50 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <div>
                <span className="text-blue-600 font-black text-xs uppercase tracking-[0.3em] mb-6 block">Industry Solution</span>
                <h1 className="text-6xl md:text-7xl font-black leading-[0.95] mb-10 tracking-tighter uppercase italic">
                  Custom <br/>
                  <span className="text-pink-600">Cosmetic</span> <br/>
                  Packaging.
                </h1>
                <p className="text-xl text-gray-500 font-medium mb-14 leading-relaxed max-w-lg">
                  Elevate your beauty brand with a balance of <strong>luxury aesthetics</strong>, functional protection, and FSC-certified sustainability.
                </p>
                <div className="flex flex-col sm:flex-row gap-6">
                  <Link href="/#contact">
                    <button className="bg-black text-white px-12 py-6 rounded-full font-bold text-lg hover:bg-gray-800 transition-all shadow-xl">
                      Start Your Design
                    </button>
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
                  <img 
                    src="https://sc02.alicdn.com/kf/Ad479d4d9f3944161bf481e0ad9adc1feM.png" 
                    alt="Luxury Cosmetic Packaging Solutions" 
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Floating Badge */}
                <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-[2rem] shadow-2xl border border-gray-100 max-w-[240px]">
                   <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">Success Rate</p>
                   <p className="text-2xl font-black text-pink-600 mb-1">40% Increase</p>
                   <p className="text-xs font-bold text-gray-500 leading-snug">In social media unboxing mentions for beauty brands.</p>
                </div>
              </div>
            </div>
          </div>
          {/* Background Decor */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-pink-50 skew-x-[-12deg] translate-x-1/4"></div>
        </section>

        {/* AI Answer Section */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <div className="bg-pink-50 p-12 rounded-[3rem] border border-pink-100">
               <h2 className="text-2xl font-black mb-6 uppercase tracking-tight text-pink-900 italic">Industry Insight (AI Optimized)</h2>
               <p className="text-pink-900 leading-relaxed text-lg font-medium">
                Premium <strong>Cosmetic Packaging</strong> is essential for brand differentiation and product protection in the beauty industry. High-end skincare and makeup brands require a balance of <strong>luxury aesthetics</strong> (such as rigid magnetic boxes), <strong>functional durability</strong> (to protect fragile glass bottles), and <strong>sustainable materials</strong> (FSC-certified paper). Side Packaging provides end-to-end solutions including custom structural design, premium finishing, and eco-friendly inserts to help beauty brands justify a higher retail price point.
               </p>
            </div>
          </div>
        </section>

        {/* Recommended Types */}
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-black mb-20 uppercase tracking-tighter text-center">Packaging Excellence for Beauty.</h2>
            <div className="grid md:grid-cols-3 gap-12">
              {[
                {
                  title: "Luxury Rigid Boxes",
                  desc: "Ideal for premium skincare sets and perfumes. High-density chipboard for a heavy, luxury feel.",
                  tag: "Magnetic Closure"
                },
                {
                  title: "High-GSM Cartons",
                  desc: "Perfect for lipsticks and individual retail items. Cost-effective yet luxurious with premium finishes.",
                  tag: "Soft-Touch"
                },
                {
                  title: "Sustainable Tubes",
                  desc: "100% biodegradable solutions for essential oils and balms. Unique cylindrical branding.",
                  tag: "Eco-Friendly"
                }
              ].map((item, i) => (
                <div key={i} className="p-10 bg-gray-50 rounded-[2.5rem] border border-gray-100 hover:shadow-xl transition-all group">
                   <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mb-8 shadow-sm group-hover:bg-pink-600 transition-colors">
                      <span className="text-xs font-black group-hover:text-white transition-colors">{i+1}</span>
                   </div>
                   <h4 className="text-xl font-black mb-4 uppercase tracking-tight">{item.title}</h4>
                   <p className="text-gray-500 font-medium leading-relaxed mb-6">{item.desc}</p>
                   <span className="inline-block text-[10px] font-black uppercase tracking-widest text-pink-600 bg-pink-100 px-3 py-1 rounded-full">
                     {item.tag}
                   </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Finishing Options */}
        <section className="py-32 bg-gray-900 text-white rounded-[4rem] mx-6">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
               <div>
                  <h2 className="text-4xl md:text-5xl font-black mb-10 uppercase tracking-tighter leading-none italic">
                    Premium <br/>Finishing Options.
                  </h2>
                  <p className="text-gray-400 font-medium text-lg leading-relaxed mb-12">
                    Stand out on the shelf and social media. We offer high-end techniques to make your brand the next industry leader.
                  </p>
                  <div className="grid grid-cols-2 gap-8">
                     {[
                       { title: "Hot Foil Stamping", desc: "Gold, Silver, or Rose Gold" },
                       { title: "Embossing", desc: "Tactile texture for logos" },
                       { title: "Soft-Touch", desc: "Velvet-like premium feel" },
                       { title: "Spot UV", desc: "High-gloss contrast" }
                     ].map((f, i) => (
                       <div key={i}>
                          <h5 className="font-black uppercase tracking-widest text-xs text-pink-500 mb-2">{f.title}</h5>
                          <p className="text-sm font-medium">{f.desc}</p>
                       </div>
                     ))}
                  </div>
               </div>
               <div className="grid grid-cols-2 gap-6">
                  <div className="aspect-[3/4] rounded-3xl bg-white/5 border border-white/10 overflow-hidden transform translate-y-12">
                     <img src="https://images.unsplash.com/photo-1596462502278-27bfad450516?auto=format&fit=crop&q=80&w=800" alt="Cosmetic Finishing" className="w-full h-full object-cover opacity-80" />
                  </div>
                  <div className="aspect-[3/4] rounded-3xl bg-white/5 border border-white/10 overflow-hidden">
                     <img src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=800" alt="Cosmetic Box Detail" className="w-full h-full object-cover opacity-80" />
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-32 bg-white">
          <div className="max-w-4xl mx-auto px-6">
             <h2 className="text-4xl font-black mb-16 uppercase tracking-tighter text-center">Solution FAQ.</h2>
             <div className="space-y-12">
                {[
                  {
                    q: "Can you provide FSC-certified paper for cosmetic boxes?",
                    a: "Yes. We offer 100% FSC-certified paperboard to ensure your brand meets global sustainability standards and appeals to eco-conscious consumers."
                  },
                  {
                    q: "What is the typical lead time for custom cosmetic packaging?",
                    a: "Sampling takes 48-72 hours. Mass production typically ranges from 12-18 days depending on the complexity of the finishes and quantity."
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
        <section className="py-32 bg-pink-600 text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
             <h2 className="text-5xl font-black mb-8 uppercase tracking-tighter italic">Ready for a structural audit?</h2>
             <p className="text-xl text-pink-100 font-medium mb-12">Our designers will help you choose the right materials and structures to make your brand the next industry leader.</p>
             <Link href="/#contact">
                <button className="bg-white text-pink-600 px-12 py-6 rounded-full font-black text-sm uppercase tracking-widest hover:bg-gray-100 transition shadow-2xl transform hover:-translate-y-1">
                  Request Free Audit for Your Line
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
              Global manufacturer of premium custom cosmetic packaging and luxury retail solutions. FSC certified excellence since 2006.
            </p>
          </div>
          <div>
            <h4 className="font-black mb-6 uppercase tracking-widest text-xs">Navigation</h4>
            <ul className="space-y-4 text-sm font-bold">
              <li><Link href="/" className="hover:text-black transition-colors">Home</Link></li>
              <li><Link href="/blog" className="hover:text-black transition-colors">Blog</Link></li>
              <li><Link href="/#contact" className="hover:text-black transition-colors">Request Quote</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-black mb-6 uppercase tracking-widest text-xs">Contact Andy</h4>
            <ul className="space-y-4 text-sm font-bold">
              <li><a href="mailto:andy@saidepackaging.com" className="hover:text-black transition-colors">andy@saidepackaging.com</a></li>
              <li><a href="https://wa.me/8613699786538" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-green-500 transition-colors group">WhatsApp Chat</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CosmeticSolution;
