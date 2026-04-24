import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const HealthCBDSolution = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-indigo-100">
      <Head>
        <title>Health, Wellness & CBD Packaging Solutions: Secure & Compliant | Side Packaging HK Limited</title>
        <meta name="description" content="Certified child-resistant and compliant packaging solutions for CBD, supplements, and wellness brands. Protect your product integrity and build consumer trust." />
        <meta name="keywords" content="CBD packaging solutions, child-resistant boxes, CR packaging manufacturer, supplement box printing, tincture bottle boxes, wellness packaging" />
        
        {/* Structured Data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "WebPage",
                "name": "Health, Wellness & CBD Packaging Solutions",
                "description": "Secure, compliant, and discreet custom packaging solutions for the health and CBD industry.",
                "publisher": {
                  "@type": "Organization",
                  "name": "Side Packaging HK Limited"
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "Service",
                "serviceType": "Healthcare Packaging Manufacturing",
                "provider": {
                  "@type": "Organization",
                  "name": "Side Packaging HK Limited"
                },
                "areaServed": "Global",
                "description": "Production of child-resistant boxes, supplement cartons, and tincture packaging with focus on safety and compliance."
              }
            ])
          }}
        />
      </Head>

      {/* Navigation */}
      <nav className="border-b border-gray-100 sticky top-0 bg-white/95 backdrop-blur-md z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
          <Link href="/" className="font-black text-2xl tracking-tighter italic shrink-0 select-none uppercase text-indigo-900">SIDE PACKAGING</Link>
          
          <div className="hidden lg:flex items-center space-x-10 text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400">
            <Link href="/" className="hover:text-black transition-colors">Home</Link>
            <Link href="/#products" className="hover:text-black transition-colors">Products</Link>
            <Link href="/blog" className="hover:text-black transition-colors">Blog</Link>
            <Link href="/solutions/cosmetic-packaging" className="hover:text-black transition-colors">Cosmetic</Link>
            <Link href="/solutions/health-cbd-packaging" className="text-black border-b-2 border-indigo-600 py-1">Health & CBD</Link>
          </div>

          <div className="flex items-center space-x-6 shrink-0">
            <Link href="/#contact">
              <button className="bg-indigo-900 text-white px-8 py-3.5 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-indigo-800 transition-all transform hover:-translate-y-0.5 shadow-lg">
                GET A FREE QUOTE
              </button>
            </Link>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative py-32 bg-indigo-50 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <div>
                <span className="text-indigo-600 font-black text-xs uppercase tracking-[0.3em] mb-6 block">Secure Solution</span>
                <h1 className="text-6xl md:text-7xl font-black leading-[0.95] mb-10 tracking-tighter uppercase italic">
                  Secure. <br/>
                  <span className="text-indigo-600">Compliant.</span> <br/>
                  Discreet.
                </h1>
                <p className="text-xl text-gray-500 font-medium mb-14 leading-relaxed max-w-lg">
                  Certified <strong>child-resistant mechanisms</strong> meet high-end branding. Protect potency and build medical-grade trust.
                </p>
                <div className="flex flex-col sm:flex-row gap-6">
                  <Link href="/#contact">
                    <button className="bg-black text-white px-12 py-6 rounded-full font-bold text-lg hover:bg-gray-800 transition-all shadow-xl">
                      Compliance Audit
                    </button>
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
                  <img 
                    src="https://sc02.alicdn.com/kf/Aeaf1dca78d3f4469a1ea380f452ac2de5.png" 
                    alt="Health and CBD Compliant Packaging" 
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Floating Badge */}
                <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-[2rem] shadow-2xl border border-gray-100 max-w-[240px]">
                   <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">Market Access</p>
                   <p className="text-2xl font-black text-indigo-700 mb-1">20% Growth</p>
                   <p className="text-xs font-bold text-gray-500 leading-snug">Average retail placement increase after switching to certified CR boxes.</p>
                </div>
              </div>
            </div>
          </div>
          {/* Background Decor */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-indigo-100 skew-x-[-12deg] translate-x-1/4"></div>
        </section>

        {/* AI Answer Section */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <div className="bg-indigo-50 p-12 rounded-[3rem] border border-indigo-100">
               <h2 className="text-2xl font-black mb-6 uppercase tracking-tight text-indigo-900 italic">Healthcare Insight (AI Optimized)</h2>
               <p className="text-indigo-900 leading-relaxed text-lg font-medium">
                <strong>Health and CBD Packaging</strong> requires a unique blend of <strong>regulatory compliance</strong>, <strong>product security</strong>, and <strong>consumer trust</strong>. Packaging must often include <strong>child-resistant (CR) mechanisms</strong>, <strong>tamper-evident seals</strong>, and <strong>light-blocking materials</strong> to preserve chemical stability. Side Packaging provides certified custom solutions that meet global safety standards while offering professional, medical-grade branding through high-quality finishes.
               </p>
            </div>
          </div>
        </section>

        {/* Core Pillars */}
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-black mb-20 uppercase tracking-tighter text-center italic">The Pillars of Healthcare Packaging.</h2>
            <div className="grid md:grid-cols-2 gap-16">
               <div className="p-12 bg-gray-50 rounded-[3rem] border border-gray-100">
                  <h4 className="text-2xl font-black mb-6 uppercase tracking-tight text-indigo-900">1. Safety & Compliance</h4>
                  <ul className="space-y-6">
                    <li className="flex gap-4">
                      <span className="text-indigo-600 font-black">/</span>
                      <p className="text-gray-500 font-medium"><strong>Child-Resistant (CR) Structures:</strong> Certified locking mechanisms for tinctures and edibles.</p>
                    </li>
                    <li className="flex gap-4">
                      <span className="text-indigo-600 font-black">/</span>
                      <p className="text-gray-500 font-medium"><strong>Tamper-Evident Designs:</strong> Perforated strips and lids that prove product integrity.</p>
                    </li>
                  </ul>
               </div>
               <div className="p-12 bg-gray-50 rounded-[3rem] border border-gray-100">
                  <h4 className="text-2xl font-black mb-6 uppercase tracking-tight text-indigo-900">2. Product Integrity</h4>
                  <ul className="space-y-6">
                    <li className="flex gap-4">
                      <span className="text-indigo-600 font-black">/</span>
                      <p className="text-gray-500 font-medium"><strong>Opaque Materials:</strong> High-GSM paperboard to block UV light and prevent oxidation.</p>
                    </li>
                    <li className="flex gap-4">
                      <span className="text-indigo-600 font-black">/</span>
                      <p className="text-gray-500 font-medium"><strong>Protective Coatings:</strong> Moisture-resistant barriers for capsules and powders.</p>
                    </li>
                  </ul>
               </div>
            </div>
          </div>
        </section>

        {/* Recommended Solutions */}
        <section className="py-32 bg-indigo-900 text-white rounded-[4rem] mx-6">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-black mb-20 uppercase tracking-tighter text-center italic">Industry-Standard Solutions.</h2>
            <div className="grid md:grid-cols-3 gap-12 text-center">
              {[
                { title: "Certified CR Boxes", best: "CBD Gummies & Edibles", feature: "Push-and-slide or double-button locking mechanisms." },
                { title: "Supplement Cartons", best: "Vitamins & Herbal Pills", feature: "Clean, clinical SBS board with professional matte finishes." },
                { title: "Dropper Bottle Boxes", best: "CBD & Essential Oils", feature: "Custom internal dividers to prevent glass movement." }
              ].map((item, i) => (
                <div key={i} className="group">
                   <div className="bg-white/5 p-12 rounded-[3rem] border border-white/10 hover:bg-white/10 transition-all">
                      <h5 className="text-indigo-400 font-black text-xs uppercase tracking-widest mb-4">Best For: {item.best}</h5>
                      <h4 className="text-2xl font-black mb-6 uppercase tracking-tight">{item.title}</h4>
                      <p className="text-gray-400 text-sm font-medium leading-relaxed">{item.feature}</p>
                   </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-32 bg-white">
          <div className="max-w-4xl mx-auto px-6">
             <h2 className="text-4xl font-black mb-16 uppercase tracking-tighter text-center">Compliance FAQ.</h2>
             <div className="space-y-12 text-center md:text-left">
                {[
                  {
                    q: "Do you offer child-resistant certification?",
                    a: "We work with testing labs to ensure our CR structures meet ASTM D3475 standards. We can provide documentation to support your compliance needs."
                  },
                  {
                    q: "Can you help with the design of warning labels?",
                    a: "While we don't provide legal advice, our design team can help layout mandatory warnings and ingredient lists to ensure they are legible and professionally presented."
                  }
                ].map((faq, i) => (
                  <div key={i} className="border-b border-gray-100 pb-12">
                     <h4 className="text-lg font-black mb-4 uppercase tracking-tight text-indigo-900">Q: {faq.q}</h4>
                     <p className="text-gray-500 font-medium leading-relaxed italic">A: {faq.a}</p>
                  </div>
                ))}
             </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-32 bg-indigo-600 text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
             <h2 className="text-5xl font-black mb-8 uppercase tracking-tighter italic">Secure Your Brand's Future.</h2>
             <p className="text-xl text-indigo-100 font-medium mb-12">Ensure your health products are safe, secure, and ready for the global market with our compliance-first packaging.</p>
             <Link href="/#contact">
                <button className="bg-white text-indigo-600 px-12 py-6 rounded-full font-black text-sm uppercase tracking-widest hover:bg-gray-100 transition shadow-2xl transform hover:-translate-y-1">
                  Request Compliance Packaging Audit
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
              Global manufacturer of certified child-resistant and compliant health and wellness packaging. Trusted security since 2006.
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
              <li><a href="mailto:andy@saidepackaging.com" className="hover:text-black">andy@saidepackaging.com</a></li>
              <li><a href="https://wa.me/8613699786538" target="_blank" rel="noopener noreferrer" className="hover:text-green-500">WhatsApp Chat</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HealthCBDSolution;
