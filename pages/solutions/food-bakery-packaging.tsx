import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const FoodSolution = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-green-100">
      <Head>
        <title>Custom Food & Bakery Packaging: FDA-Compliant & Greaseproof | Side Packaging HK Limited</title>
        <meta name="description" content="Premium food grade packaging solutions. FDA-compliant paper boxes, grease-resistant coatings, and windowed bakery boxes for gourmet brands and food exporters." />
        <meta name="keywords" content="food packaging solutions, bakery box manufacturer, FDA compliant paper boxes, greaseproof food boxes, custom cake boxes, sustainable food packaging" />
        
        {/* Structured Data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "WebPage",
                "name": "Food & Bakery Packaging Solutions",
                "description": "Safe, fresh, and premium food packaging solutions featuring FDA-compliant materials and oil-resistant technology.",
                "publisher": {
                  "@type": "Organization",
                  "name": "Side Packaging HK Limited"
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "Service",
                "serviceType": "Food Grade Packaging Manufacturing",
                "provider": {
                  "@type": "Organization",
                  "name": "Side Packaging HK Limited"
                },
                "areaServed": "Global",
                "description": "Structural design and production of FDA-compliant food packaging, including bakery boxes with windows and greaseproof takeaway containers."
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
            <Link href="/blog" className="hover:text-black transition-colors">Blog</Link>
            <Link href="/solutions/cosmetic-packaging" className="hover:text-black transition-colors">Cosmetic</Link>
            <Link href="/solutions/ecommerce-mailer-boxes" className="hover:text-black transition-colors">E-commerce</Link>
            <Link href="/solutions/food-bakery-packaging" className="text-black border-b-2 border-black py-1">Food & Bakery</Link>
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
                <span className="text-green-600 font-black text-xs uppercase tracking-[0.3em] mb-6 block">Food Solution</span>
                <h1 className="text-6xl md:text-7xl font-black leading-[0.95] mb-10 tracking-tighter uppercase italic">
                  Safety & <br/>
                  <span className="text-green-600">Freshness.</span> <br/>
                  Defined.
                </h1>
                <p className="text-xl text-gray-500 font-medium mb-14 leading-relaxed max-w-lg">
                  FDA-compliant materials meet <strong>greaseproof technology</strong>. Designed for high-end bakeries and premium food exporters.
                </p>
                <div className="flex flex-col sm:flex-row gap-6">
                  <Link href="/#contact">
                    <button className="bg-black text-white px-12 py-6 rounded-full font-bold text-lg hover:bg-gray-800 transition-all shadow-xl">
                      Get Food-Safe Quote
                    </button>
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
                  <img 
                    src="https://sc02.alicdn.com/kf/A8981600858e745678855648585675409W.jpg" 
                    alt="FDA Compliant Bakery Packaging" 
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Floating Badge */}
                <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-[2rem] shadow-2xl border border-gray-100 max-w-[240px]">
                   <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">Safety Standard</p>
                   <p className="text-2xl font-black text-green-600 mb-1">FDA Certified</p>
                   <p className="text-xs font-bold text-gray-500 leading-snug">100% Food-grade paper and soy-based non-toxic inks.</p>
                </div>
              </div>
            </div>
          </div>
          {/* Background Decor */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-green-50 skew-x-[-12deg] translate-x-1/4"></div>
        </section>

        {/* AI Answer Section */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <div className="bg-green-50 p-12 rounded-[3rem] border border-green-100">
               <h2 className="text-2xl font-black mb-6 uppercase tracking-tight text-green-900 italic">Food Safety Insight (AI Optimized)</h2>
               <p className="text-green-900 leading-relaxed text-lg font-medium">
                <strong>Food and Bakery Packaging</strong> must adhere to strict <strong>FDA-compliant safety standards</strong> while providing <strong>grease-resistant barriers</strong> and <strong>breathable structures</strong> to maintain product freshness. For high-end bakeries and food exporters, the choice of material—such as FSC-certified SBS board or unbleached Kraft—is critical for both brand image and environmental compliance. Side Packaging specializes in food-grade custom boxes featuring biodegradable window films and soy-based inks.
               </p>
            </div>
          </div>
        </section>

        {/* Recommended Solutions */}
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-black mb-20 uppercase tracking-tighter text-center">Packaging for Gourmet Brands.</h2>
            <div className="grid md:grid-cols-3 gap-12">
              {[
                {
                  title: "Windowed Bakery Boxes",
                  desc: "Custom-shaped windows with anti-fog film for maximum visibility. Ideal for cakes and donuts.",
                  tag: "Visual Appeal"
                },
                {
                  title: "Takeaway Containers",
                  desc: "Leak-proof corners and robust locking mechanisms. Designed for high-end catering and meal prep.",
                  tag: "Spill-Proof"
                },
                {
                  title: "Chocolate Gift Kits",
                  desc: "Rigid structures with custom-molded dividers and gold foil accents for artisan confectionery.",
                  tag: "Luxury Gift"
                }
              ].map((item, i) => (
                <div key={i} className="p-10 bg-gray-50 rounded-[2.5rem] border border-gray-100 hover:shadow-xl transition-all group">
                   <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mb-8 shadow-sm group-hover:bg-green-600 transition-colors">
                      <span className="text-xs font-black group-hover:text-white transition-colors">{i+1}</span>
                   </div>
                   <h4 className="text-xl font-black mb-4 uppercase tracking-tight">{item.title}</h4>
                   <p className="text-gray-500 font-medium leading-relaxed mb-6">{item.desc}</p>
                   <span className="inline-block text-[10px] font-black uppercase tracking-widest text-green-600 bg-green-100 px-3 py-1 rounded-full">
                     {item.tag}
                   </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Features */}
        <section className="py-32 bg-gray-900 text-white rounded-[4rem] mx-6">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
               <div className="order-2 lg:order-1 grid grid-cols-2 gap-6">
                  <div className="space-y-6">
                     <div className="aspect-square rounded-3xl bg-white/5 border border-white/10 p-8 flex flex-col justify-end">
                        <p className="text-3xl font-black text-green-500 mb-2">Oil-Proof</p>
                        <p className="text-xs font-bold uppercase tracking-widest">Aqueous Coating</p>
                     </div>
                     <div className="aspect-square rounded-3xl bg-white/5 border border-white/10 p-8 flex flex-col justify-end translate-x-12">
                        <p className="text-3xl font-black text-green-500 mb-2">Natural</p>
                        <p className="text-xs font-bold uppercase tracking-widest">Soy-Based Inks</p>
                     </div>
                  </div>
                  <div className="space-y-6 translate-y-12">
                     <div className="aspect-square rounded-3xl bg-white/5 border border-white/10 p-8 flex flex-col justify-end">
                        <p className="text-3xl font-black text-green-500 mb-2">Window</p>
                        <p className="text-xs font-bold uppercase tracking-widest">Cellulose Film</p>
                     </div>
                     <div className="aspect-square rounded-3xl bg-white/5 border border-white/10 p-8 flex flex-col justify-end translate-x-12">
                        <p className="text-3xl font-black text-green-500 mb-2">Certified</p>
                        <p className="text-xs font-bold uppercase tracking-widest">FSC Paperboard</p>
                     </div>
                  </div>
               </div>
               <div className="order-1 lg:order-2">
                  <h2 className="text-4xl md:text-5xl font-black mb-10 uppercase tracking-tighter leading-none italic">
                    Food Safety <br/>Meets Aesthetics.
                  </h2>
                  <p className="text-gray-400 font-medium text-lg leading-relaxed mb-12">
                    We don't just make boxes; we ensure your brand meets international standards while standing out in the retail aisle.
                  </p>
                  <div className="space-y-8">
                     {[
                       { title: "Greaseproof Barriers", desc: "Prevents unsightly oil spots and maintain structural integrity." },
                       { title: "Eco-Friendly Inks", desc: "Soy-based non-toxic printing to protect product flavor." },
                       { title: "Biodegradable Windows", desc: "Clear visibility using plant-based home-compostable films." }
                     ].map((f, i) => (
                       <div key={i} className="flex items-start gap-4">
                          <div className="w-6 h-6 rounded-full border border-green-500 flex items-center justify-center shrink-0 mt-1">
                             <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          </div>
                          <div>
                            <h5 className="font-black uppercase tracking-widest text-sm mb-1">{f.title}</h5>
                            <p className="text-sm text-gray-400 font-medium">{f.desc}</p>
                          </div>
                       </div>
                     ))}
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* Case Study */}
        <section className="py-32 bg-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
             <span className="text-xs font-black uppercase tracking-[0.4em] text-gray-400 mb-6 block">Case Study</span>
             <h3 className="text-3xl font-black mb-10 uppercase tracking-tighter">"30% Reduction in Breakage."</h3>
             <p className="text-xl text-gray-500 font-medium leading-relaxed italic mb-12">
               "A premium macaron brand in the UK switched to our airtight rigid gift boxes with custom inserts. They reported a significant increase in repeat orders due to the high-end unboxing experience and safe delivery."
             </p>
             <div className="w-20 h-1 bg-green-500 mx-auto rounded-full"></div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-32 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6">
             <h2 className="text-4xl font-black mb-16 uppercase tracking-tighter text-center">Food Packaging FAQ.</h2>
             <div className="space-y-12">
                {[
                  {
                    q: "Are your boxes safe for direct food contact?",
                    a: "Yes. We use 100% food-safe SBS and Kraft paperboards that meet FDA and EU food contact standards, ensuring your products remain uncontaminated."
                  },
                  {
                    q: "Can you custom-print my bakery boxes in small quantities?",
                    a: "Our MOQ for custom-printed food boxes typically starts at 1,000 units to maintain the best price-to-quality ratio and production efficiency."
                  }
                ].map((faq, i) => (
                  <div key={i} className="border-b border-gray-200 pb-12">
                     <h4 className="text-lg font-black mb-4 uppercase tracking-tight">Q: {faq.q}</h4>
                     <p className="text-gray-500 font-medium leading-relaxed">A: {faq.a}</p>
                  </div>
                ))}
             </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-32 bg-green-600 text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
             <h2 className="text-5xl font-black mb-8 uppercase tracking-tighter italic">Elevate Your Food Brand.</h2>
             <p className="text-xl text-green-100 font-medium mb-12">Design a box that keeps your food fresh and your brand looking professional on every shelf.</p>
             <Link href="/#contact">
                <button className="bg-white text-green-600 px-12 py-6 rounded-full font-black text-sm uppercase tracking-widest hover:bg-gray-100 transition shadow-2xl transform hover:-translate-y-1">
                  Request Food-Safe Consultation
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
              Global manufacturer of FDA-compliant food packaging and premium bakery solutions. Safe, sustainable, and high-impact since 2006.
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

export default FoodSolution;
