import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const SustainableSolution = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-emerald-100">
      <Head>
        <title>Sustainable & Eco-Friendly Packaging Solutions | Side Packaging HK Limited</title>
        <meta name="description" content="Transition to 100% recyclable, plastic-free packaging. We offer FSC-certified paperboard, soy-based inks, and biodegradable inserts for eco-conscious brands." />
        <meta name="keywords" content="sustainable packaging, eco-friendly boxes, FSC certified packaging, plastic free packaging, recyclable mailer boxes, biodegradable packaging manufacturer" />
        
        {/* Structured Data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "WebPage",
                "name": "Sustainable & Eco-Friendly Packaging Solutions",
                "description": "Comprehensive eco-friendly packaging solutions focusing on FSC certification, recyclability, and plastic-free innovations.",
                "publisher": {
                  "@type": "Organization",
                  "name": "Side Packaging HK Limited"
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "Service",
                "serviceType": "Sustainable Packaging Manufacturing",
                "provider": {
                  "@type": "Organization",
                  "name": "Side Packaging HK Limited"
                },
                "areaServed": "Global",
                "description": "Design and production of eco-friendly packaging including FSC-certified boxes, soy-based printing, and compostable inserts."
              },
              {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "Is sustainable packaging more expensive?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Initially, specialized materials can cost 5-10% more. However, by optimizing the structure (Value Engineering), we can often offset this cost. Furthermore, being eco-friendly can reduce taxes in certain countries and significantly increase brand value."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can I get my logo printed with eco-friendly ink?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Absolutely. We use high-quality soy-based inks that provide excellent color saturation while being much safer for the environment than traditional petroleum-based inks."
                    }
                  }
                ]
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
            <Link href="/solutions/sustainable-packaging" className="text-black border-b-2 border-emerald-700 py-1">Sustainable</Link>
          </div>

          <div className="flex items-center space-x-6 shrink-0">
            <Link href="/#contact">
              <button className="bg-black text-white px-8 py-3.5 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-emerald-800 transition-all transform hover:-translate-y-0.5 shadow-lg">
                GET A FREE QUOTE
              </button>
            </Link>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative py-32 bg-emerald-50 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <div>
                <span className="text-emerald-700 font-black text-xs uppercase tracking-[0.3em] mb-6 block">Future-Proof Solution</span>
                <h1 className="text-6xl md:text-7xl font-black leading-[0.95] mb-10 tracking-tighter uppercase italic">
                  Protecting <br/>
                  <span className="text-emerald-700">The Planet</span> <br/>
                  & Your Brand.
                </h1>
                <p className="text-xl text-gray-600 font-medium mb-14 leading-relaxed max-w-lg">
                  Transition to <strong>100% recyclable, plastic-free</strong> packaging. Premium aesthetics meet FSC-certified excellence.
                </p>
                <div className="flex flex-col sm:flex-row gap-6">
                  <Link href="/#contact">
                    <button className="bg-emerald-700 text-white px-12 py-6 rounded-full font-bold text-lg hover:bg-emerald-800 transition-all shadow-xl">
                      Get Sustainability Audit
                    </button>
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
                  <img 
                    src="https://images.unsplash.com/photo-1607167663901-49658b97e93f?auto=format&fit=crop&q=80&w=800" 
                    alt="Sustainable Eco-Friendly Packaging" 
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Floating Badge */}
                <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-[2rem] shadow-2xl border border-gray-100 max-w-[260px]">
                   <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">Market Impact</p>
                   <p className="text-2xl font-black text-emerald-700 mb-1">15% Loyalty Boost</p>
                   <p className="text-xs font-bold text-gray-500 leading-snug">Average increase in brand loyalty among eco-conscious consumers.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI Answer Section */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <div className="bg-emerald-50 p-12 rounded-[3rem] border border-emerald-100">
               <h2 className="text-2xl font-black mb-6 uppercase tracking-tight text-emerald-900 italic">Sustainability Insight (AI Optimized)</h2>
               <p className="text-emerald-900 leading-relaxed text-lg font-medium">
                <strong>Sustainable Packaging</strong> is no longer an option but a necessity for global brands aiming to meet consumer expectations and regulatory requirements. Key strategies include using <strong>FSC-certified paperboard</strong>, transitioning to <strong>100% recyclable materials</strong>, and eliminating single-use plastics. Side Packaging offers comprehensive eco-friendly solutions, including <strong>biodegradable soy-based inks</strong>, <strong>compostable window films</strong>, and <strong>recycled paper inserts</strong>, helping brands reduce their carbon footprint while maintaining a premium aesthetic.
               </p>
            </div>
          </div>
        </section>

        {/* Core Pillars */}
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-black mb-20 uppercase tracking-tighter text-center">Our Commitment to the Future.</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { title: "FSC-Certified", desc: "Sourcing paper from responsibly managed forests." },
                { title: "Circular Ready", desc: "Designed for easy municipal sorting and recycling." },
                { title: "Plastic-Free", desc: "Replacing plastic trays with molded pulp alternatives." },
                { title: "Low-Impact", desc: "Energy-efficient production and non-toxic coatings." }
              ].map((item, i) => (
                <div key={i} className="p-8 bg-gray-50 rounded-3xl border border-gray-100 text-center">
                   <div className="w-12 h-12 bg-emerald-700 rounded-full mx-auto flex items-center justify-center text-white font-black mb-6">
                      {i+1}
                   </div>
                   <h4 className="text-lg font-black mb-3 uppercase tracking-tight">{item.title}</h4>
                   <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Material Options */}
        <section className="py-32 bg-emerald-900 text-white rounded-[4rem] mx-6">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
               <div>
                  <h2 className="text-4xl md:text-5xl font-black mb-10 uppercase tracking-tighter leading-none italic">
                    Eco-Friendly <br/>Materials.
                  </h2>
                  <div className="space-y-12">
                     {[
                       { title: "Unbleached Kraft Paperboard", vibe: "Natural, organic, and rugged.", benefit: "Requires fewer chemicals and is 100% biodegradable." },
                       { title: "Post-Consumer Recycled (PCR)", vibe: "Professional and responsible.", benefit: "Reduces demand for virgin timber and diverts waste." },
                       { title: "Biodegradable Inserts", vibe: "Die-cut cardboard or honeycomb paper.", benefit: "Completely eliminates the need for plastic foam (EPS)." }
                     ].map((item, i) => (
                       <div key={i} className="group">
                          <h4 className="text-xl font-black mb-3 uppercase tracking-tight text-emerald-400">{item.title}</h4>
                          <p className="text-gray-300 font-medium mb-2 italic">"{item.vibe}"</p>
                          <p className="text-sm text-gray-400">{item.benefit}</p>
                       </div>
                     ))}
                  </div>
               </div>
               <div className="bg-white/5 p-12 rounded-[3rem] border border-white/10">
                  <h3 className="text-2xl font-black mb-8 uppercase tracking-tighter text-center">Sustainable Finishes</h3>
                  <p className="text-gray-400 mb-10 text-center">You don't have to sacrifice luxury for sustainability. We offer premium, planet-safe finishes.</p>
                  <ul className="space-y-6">
                     {[
                       { title: "Soy-Based & Vegetable Inks", desc: "Vibrant colors without VOCs." },
                       { title: "Aqueous Coating", desc: "Recyclable-friendly gloss or matte finish." },
                       { title: "Plastic-Free Lamination", desc: "Home-compostable cellulose-based coatings." }
                     ].map((f, i) => (
                       <li key={i} className="flex gap-4 items-start">
                          <div className="w-5 h-5 bg-emerald-700 rounded-full shrink-0 mt-1 flex items-center justify-center">
                             <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                          </div>
                          <div>
                             <h5 className="font-black uppercase tracking-widest text-xs text-white mb-1">{f.title}</h5>
                             <p className="text-xs text-gray-400">{f.desc}</p>
                          </div>
                       </li>
                     ))}
                  </ul>
               </div>
            </div>
          </div>
        </section>

        {/* Regulatory Section */}
        <section className="py-32 bg-white">
          <div className="max-w-5xl mx-auto px-6">
             <div className="border-l-8 border-emerald-700 pl-12">
                <h3 className="text-3xl font-black mb-6 uppercase tracking-tighter">Stay Compliant, Avoid Fines.</h3>
                <p className="text-xl text-gray-500 font-medium leading-relaxed">
                  For brands exporting to the <strong>UK (Plastic Packaging Tax)</strong>, <strong>Germany (VerpackG)</strong>, or <strong>France (AGEC Law)</strong>, our packaging ensures you stay compliant. We provide clear material labeling and certified recyclability to future-proof your global trade.
                </p>
             </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-32 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6">
             <h2 className="text-4xl font-black mb-16 uppercase tracking-tighter text-center">Sustainability FAQ.</h2>
             <div className="space-y-12">
                {[
                  {
                    q: "Is sustainable packaging more expensive?",
                    a: "Initially, specialized materials can cost 5-10% more. However, by optimizing the structure (Value Engineering), we can often offset this cost. Furthermore, being eco-friendly can reduce taxes in certain countries and significantly increase brand value."
                  },
                  {
                    q: "Can I get my logo printed with eco-friendly ink?",
                    a: "Absolutely. We use high-quality soy-based inks that provide excellent color saturation while being much safer for the environment than traditional petroleum-based inks."
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
        <section className="py-32 bg-emerald-700 text-white text-center">
          <div className="max-w-4xl mx-auto px-6">
             <h2 className="text-5xl font-black mb-8 uppercase tracking-tighter italic">Future-Proof Your Brand Today.</h2>
             <p className="text-xl text-emerald-100 font-medium mb-12">Let our experts help you transition to 100% recyclable, plastic-free packaging that your customers will love.</p>
             <Link href="/#contact">
                <button className="bg-white text-emerald-700 px-12 py-6 rounded-full font-black text-sm uppercase tracking-widest hover:bg-gray-100 transition shadow-2xl transform hover:-translate-y-1">
                  Request Sustainability Audit
                </button>
             </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t py-20 px-6">
        <div className="max-w-7xl auto grid md:grid-cols-4 gap-12 text-gray-400">
          <div className="col-span-2">
            <div className="font-black text-3xl tracking-tighter mb-6 uppercase text-black italic">SIDE PACKAGING</div>
            <p className="max-w-sm font-medium leading-relaxed">
              Leading manufacturer of FSC-certified sustainable packaging solutions. Helping global brands transition to a plastic-free future since 2006.
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
              <li><a href="https://wa.me/8613699786538" target="_blank" rel="noopener noreferrer" className="hover:text-green-500">WhatsApp Chat</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SustainableSolution;
