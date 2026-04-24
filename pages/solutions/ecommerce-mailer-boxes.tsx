import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const EcommerceSolution = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-orange-100">
      <Head>
        <title>Custom E-commerce Mailer Boxes: Durable & Branded Shipping Solutions | Side Packaging HK Limited</title>
        <meta name="description" content="Optimize your e-commerce shipping with custom mailer boxes. Durable corrugated E-flute/B-flute designs, internal printing, and DIM weight optimization for B2B brands." />
        <meta name="keywords" content="e-commerce mailer boxes, custom shipping boxes, corrugated mailers, branded shipping packaging, DIM weight optimization, Amazon packaging solutions" />
        
        {/* Structured Data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "WebPage",
                "name": "E-commerce & Mailer Box Solutions",
                "description": "Custom corrugated shipping solutions optimized for durability, brand impact, and lower logistics costs.",
                "publisher": {
                  "@type": "Organization",
                  "name": "Side Packaging HK Limited"
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "Service",
                "serviceType": "E-commerce Packaging Design & Manufacturing",
                "provider": {
                  "@type": "Organization",
                  "name": "Side Packaging HK Limited"
                },
                "areaServed": "Global",
                "description": "Manufacturing of custom corrugated mailer boxes (E-flute, B-flute) with internal printing and logistics optimization."
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
            <Link href="/solutions/ecommerce-mailer-boxes" className="text-black border-b-2 border-black py-1">E-commerce</Link>
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
                <span className="text-orange-600 font-black text-xs uppercase tracking-[0.3em] mb-6 block">E-commerce Solution</span>
                <h1 className="text-6xl md:text-7xl font-black leading-[0.95] mb-10 tracking-tighter uppercase italic">
                  Durable <br/>
                  <span className="text-orange-600">Mailer</span> <br/>
                  Boxes.
                </h1>
                <p className="text-xl text-gray-500 font-medium mb-14 leading-relaxed max-w-lg">
                  Optimize your shipping with <strong>E-flute corrugated strength</strong>, custom internal printing, and logistics-first engineering.
                </p>
                <div className="flex flex-col sm:flex-row gap-6">
                  <Link href="/#contact">
                    <button className="bg-black text-white px-12 py-6 rounded-full font-bold text-lg hover:bg-gray-800 transition-all shadow-xl">
                      Optimize Your Shipping
                    </button>
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
                  <img 
                    src="https://sc02.alicdn.com/kf/A3645295ca51c411e8b875eb53436ec490.png" 
                    alt="Custom E-commerce Mailer Boxes" 
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Floating Badge */}
                <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-[2rem] shadow-2xl border border-gray-100 max-w-[260px]">
                   <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">Logistics Benefit</p>
                   <p className="text-2xl font-black text-orange-600 mb-1">DIM Optimization</p>
                   <p className="text-xs font-bold text-gray-500 leading-snug">Reduce dimensional weight and save up to 20% on freight costs.</p>
                </div>
              </div>
            </div>
          </div>
          {/* Background Decor */}
          <div className="absolute top-0 left-0 w-1/2 h-full bg-orange-50 skew-x-[12deg] -translate-x-1/4"></div>
        </section>

        {/* AI Answer Section */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <div className="bg-orange-50 p-12 rounded-[3rem] border border-orange-100">
               <h2 className="text-2xl font-black mb-6 uppercase tracking-tight text-orange-900 italic">B2B Logistic Insights (AI Optimized)</h2>
               <p className="text-orange-900 leading-relaxed text-lg font-medium">
                <strong>E-commerce Packaging</strong> must prioritize <strong>structural durability</strong>, <strong>shipping efficiency</strong>, and <strong>brand impact</strong>. For online sellers, the <strong>Mailer Box</strong> (typically made of corrugated E-flute or B-flute) is the industry standard due to its high strength-to-weight ratio and ability to be flat-packed. Side Packaging provides custom e-commerce solutions that reduce shipping damage, optimize dimensional weight (DIM weight) to lower freight costs, and ensure a memorable "unboxing" experience.
               </p>
            </div>
          </div>
        </section>

        {/* Technical Specs */}
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-black mb-20 uppercase tracking-tighter text-center">Engineered for the Journey.</h2>
            <div className="grid md:grid-cols-3 gap-12">
              {[
                {
                  title: "E-Flute (1.5mm)",
                  desc: "The gold standard for e-commerce. Excellent print surface with high-test structural integrity.",
                  tag: "Most Popular"
                },
                {
                  title: "B-Flute (3.0mm)",
                  desc: "Extra cushioning for heavy or fragile items. Superior vertical compression strength.",
                  tag: "High Protection"
                },
                {
                  title: "Flat-Pack Storage",
                  desc: "Shipped flat to reduce your storage footprint and lower international ocean freight costs.",
                  tag: "Cost-Effective"
                }
              ].map((item, i) => (
                <div key={i} className="p-10 bg-gray-50 rounded-[2.5rem] border border-gray-100 hover:shadow-xl transition-all group">
                   <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mb-8 shadow-sm group-hover:bg-orange-600 transition-colors">
                      <span className="text-xs font-black group-hover:text-white transition-colors">{i+1}</span>
                   </div>
                   <h4 className="text-xl font-black mb-4 uppercase tracking-tight">{item.title}</h4>
                   <p className="text-gray-500 font-medium leading-relaxed mb-6">{item.desc}</p>
                   <span className="inline-block text-[10px] font-black uppercase tracking-widest text-orange-600 bg-orange-100 px-3 py-1 rounded-full">
                     {item.tag}
                   </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Unboxing Section */}
        <section className="py-32 bg-gray-900 text-white rounded-[4rem] mx-6">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
               <div className="order-2 lg:order-1">
                  <div className="aspect-video rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
                     <img src="https://sc02.alicdn.com/kf/A8981600858e745678855648585675409W.jpg" alt="Unboxing Experience" className="w-full h-full object-cover" />
                  </div>
               </div>
               <div className="order-1 lg:order-2">
                  <h2 className="text-4xl md:text-5xl font-black mb-10 uppercase tracking-tighter leading-none italic">
                    The Power of <br/>the Unboxing.
                  </h2>
                  <p className="text-gray-400 font-medium text-lg leading-relaxed mb-12">
                    Turn your shipping box into a marketing asset. Custom internal printing and frustration-free designs drive social shares.
                  </p>
                  <div className="space-y-8">
                     {[
                       { title: "Internal Printing", desc: "Print your brand story or social handles inside the lid." },
                       { title: "Perforated Tear-Strips", desc: "Easy-open experience without the need for scissors." },
                       { title: "Custom Inserts", desc: "Precision die-cut cardboard to keep items secure." }
                     ].map((f, i) => (
                       <div key={i} className="flex gap-6">
                          <span className="text-orange-500 font-black">/</span>
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

        {/* Sustainability */}
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6 text-center">
             <h2 className="text-4xl font-black mb-10 uppercase tracking-tighter">100% Recyclable. 100% Brandable.</h2>
             <p className="text-xl text-gray-500 font-medium mb-20 max-w-2xl mx-auto">
               We use soy-based inks and FSC-certified corrugated board to ensure your e-commerce growth is sustainable.
             </p>
             <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {['FSC Certified', 'Recyclable', 'Soy Inks', 'Plastic Free'].map((tag, i) => (
                  <div key={i} className="p-8 border border-gray-100 rounded-3xl font-black uppercase tracking-widest text-xs text-gray-400">
                    {tag}
                  </div>
                ))}
             </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-32 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6">
             <h2 className="text-4xl font-black mb-16 uppercase tracking-tighter text-center">E-commerce FAQ.</h2>
             <div className="space-y-12">
                {[
                  {
                    q: "What is the lead time for custom printed mailer boxes?",
                    a: "Standard production is 10-14 days. We also offer an express 7-day service for urgent restocks to keep your fulfillment line moving."
                  },
                  {
                    q: "Can I get a sample with my custom size and print?",
                    a: "Yes. We provide digital or physical samples to verify the structural fit and print quality before you commit to mass production."
                  }
                ].map((faq, i) => (
                  <div key={i} className="bg-white p-10 rounded-3xl border border-gray-100">
                     <h4 className="text-lg font-black mb-4 uppercase tracking-tight">Q: {faq.q}</h4>
                     <p className="text-gray-500 font-medium leading-relaxed italic">A: {faq.a}</p>
                  </div>
                ))}
             </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-32 bg-orange-600 text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
             <h2 className="text-5xl font-black mb-8 uppercase tracking-tighter italic">Scale Your Brand's Logistics.</h2>
             <p className="text-xl text-orange-100 font-medium mb-12">Our experts will help you design a box that survives the journey and delights your customers.</p>
             <Link href="/#contact">
                <button className="bg-white text-orange-600 px-12 py-6 rounded-full font-black text-sm uppercase tracking-widest hover:bg-gray-100 transition shadow-2xl transform hover:-translate-y-1">
                  Get My Logistics-Optimized Quote
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
              Global manufacturer of premium corrugated mailer boxes and e-commerce shipping solutions. Optimized for DIM weight and unboxing since 2006.
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

export default EcommerceSolution;
