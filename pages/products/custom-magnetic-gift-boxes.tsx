import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import PriceCalculator from '../../components/PriceCalculator';
import InquiryForm from '../../components/InquiryForm';

const ProductPage = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-gold-500">
      <Head>
        <title>Custom Magnetic Gift Boxes | Luxury Rigid Box Manufacturer | Side Packaging HK Limited</title>
        <meta name="description" content="Premium custom magnetic gift boxes from Side Packaging HK Limited. 20+ years of manufacturing luxury rigid packaging. FSC & BSCI certified factory direct." />
        <link rel="canonical" href="https://saidepackaging.com/products/custom-magnetic-gift-boxes" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org/",
                "@type": "Product",
                "name": "Custom Magnetic Gift Boxes",
                "image": [
                  "https://s.alicdn.com/@sc04/kf/Had1198f76e8244f7b6e067519bad703co/Custom-Luxury-Eco-Friendly-Biodegradable-Magnetic-Closure.jpg"
                ],
                "description": "Premium luxury rigid boxes with hidden magnetic closures. Features 1200gsm-1800gsm greyboard, premium art paper wrapping, and industrial-strength neodymium magnets. FSC-certified sustainable packaging.",
                "sku": "SIDE-MAG-001",
                "mpn": "SIDE-MAG-SPEC-2026",
                "brand": {
                  "@type": "Brand",
                  "name": "Side Packaging HK Limited"
                },
                "material": "1200gsm-1800gsm high-density greyboard, 157gsm art paper",
                "additionalProperty": [
                  {
                    "@type": "PropertyValue",
                    "name": "Minimum Order Quantity",
                    "value": "500 pcs"
                  },
                  {
                    "@type": "PropertyValue",
                    "name": "Certifications",
                    "value": "FSC, BSCI, ISO9001:2015"
                  }
                ],
                "offers": {
                  "@type": "AggregateOffer",
                  "priceCurrency": "USD",
                  "lowPrice": "0.85",
                  "highPrice": "4.50",
                  "offerCount": "100",
                  "availability": "https://schema.org/InStock"
                }
              }
            ])
          }}
        />
      </Head>

      {/* Navbar */}
      <nav className="border-b border-white/10 bg-black/95 backdrop-blur-md sticky top-0 z-[80]">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="text-2xl font-black tracking-tighter uppercase italic text-white hover:text-gray-300 transition-colors">Side Packaging</Link>
          <div className="hidden lg:flex items-center space-x-8 text-[11px] font-bold uppercase tracking-widest text-gray-400">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <Link href="/products" className="text-white border-b-2 border-white pb-1">Bespoke Products</Link>
            <Link href="/blog" className="hover:text-white transition-colors">Insights</Link>
            <a href="#contact" className="hover:text-white transition-colors">Consultation</a>
          </div>
          <a href="#contact" className="bg-white text-black px-8 py-3 rounded-full text-[11px] font-bold uppercase tracking-widest hover:bg-gold-400 transition-all shadow-lg">Quick Quote</a>
        </div>
      </nav>

      <main className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 mb-32">
            <div className="space-y-12">
              <div>
                <span className="text-blue-500 font-black text-xs uppercase tracking-[0.5em] mb-6 block">Premium Rigid Series</span>
                <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.85] mb-8">Custom <br/>Magnetic <br/><span className="text-white/40 italic">Gift Boxes.</span></h1>
                <p className="text-xl text-gray-400 font-medium leading-relaxed">The pinnacle of luxury unboxing. Engineered with industrial-strength magnets and high-density 1200gsm greyboard for a weighted, premium feel.</p>
              </div>

              <div className="grid grid-cols-2 gap-8">
                 <div className="border border-white/10 rounded-3xl p-8 bg-white/5">
                    <p className="text-3xl font-black mb-1">500+</p>
                    <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">MOQ (Standard)</p>
                 </div>
                 <div className="border border-white/10 rounded-3xl p-8 bg-white/5">
                    <p className="text-3xl font-black mb-1">12-15d</p>
                    <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Lead Time</p>
                 </div>
              </div>

              <div className="flex gap-6">
                 <a href="#contact" className="bg-white text-black px-12 py-5 rounded-full font-black uppercase tracking-widest hover:scale-105 transition-all">Request Sample</a>
                 <a href="https://wa.me/8613699786538" className="bg-transparent text-white border-2 border-white/20 px-12 py-5 rounded-full font-black uppercase tracking-widest hover:bg-white/5 transition-all">WhatsApp Consult</a>
              </div>
            </div>

            <div className="relative group">
               <div className="aspect-square bg-white/5 rounded-[4rem] border border-white/10 overflow-hidden shadow-2xl">
                  <img 
                    src="https://s.alicdn.com/@sc04/kf/Had1198f76e8244f7b6e067519bad703co/Custom-Luxury-Eco-Friendly-Biodegradable-Magnetic-Closure.jpg" 
                    alt="Magnetic Gift Box" 
                    className="w-full h-full object-cover  hover:-0 transition-all duration-1000  " 
                  />
               </div>
               <div className="absolute -bottom-8 -left-8 bg-blue-600 text-white p-10 rounded-[2.5rem] shadow-2xl border-4 border-black">
                  <p className="text-sm font-black uppercase tracking-widest leading-none mb-2">Technical Standard</p>
                  <p className="text-2xl font-black italic">FSC CERTIFIED</p>
               </div>
            </div>
          </div>

          {/* Technical Specs Table */}
          <section className="py-24 border-t border-white/5">
             <h2 className="text-4xl font-black uppercase tracking-tighter mb-16 italic">Technical Specifications</h2>
             <div className="grid md:grid-cols-2 gap-16">
                <div className="space-y-8">
                   {[
                     { k: 'Core Material', v: '1200gsm - 1800gsm High-Density Rigid Greyboard' },
                     { k: 'Wrapping Paper', v: '157gsm Art Paper / Specialty Textured Paper / Kraft' },
                     { k: 'Liner Option', v: 'Velvet, Satin, EVA Foam, Plastic Tray, Cardboard Insert' },
                     { k: 'Closure Type', v: 'Hidden Dual Neodymium Magnets' }
                   ].map((item, i) => (
                     <div key={i} className="flex justify-between items-center border-b border-white/5 pb-4">
                        <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{item.k}</span>
                        <span className="text-sm font-bold">{item.v}</span>
                     </div>
                   ))}
                </div>
                <div className="space-y-8">
                   {[
                     { k: 'Printing', v: 'CMYK Offset / Pantone Spot Color / Soy Ink' },
                     { k: 'Finishing', v: 'Matt/Gloss Lam, Soft Touch, Foil, UV, Emboss' },
                     { k: 'Certification', v: 'FSC, BSCI, ISO9001, GRS' },
                     { k: 'Application', v: 'Jewelry, Apparel, Electronics, Luxury Gifts' }
                   ].map((item, i) => (
                     <div key={i} className="flex justify-between items-center border-b border-white/5 pb-4">
                        <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{item.k}</span>
                        <span className="text-sm font-bold">{item.v}</span>
                     </div>
                   ))}
                </div>
             </div>
          </section>

          {/* Pricing Section */}
          <section id="quote" className="py-32 bg-white/5 rounded-[4rem] border border-white/10 text-center mb-32">
             <div className="max-w-4xl mx-auto px-6 mb-16">
                <h2 className="text-5xl font-black uppercase tracking-tighter mb-8 italic">Configure Bespoke Order</h2>
                <p className="text-gray-400 font-medium text-lg">Instant technical estimation for luxury magnetic boxes. Minimum Order: 500 Units.</p>
             </div>
             <div className="px-6 text-black">
                <PriceCalculator variantId="gid://shopify/ProductVariant/magnetic-boxes-placeholder" />
             </div>
          </section>

          {/* FAQ */}
          <section className="py-24 border-t border-white/5">
             <h2 className="text-4xl font-black uppercase tracking-tighter mb-16">Common Consultations</h2>
             <div className="grid md:grid-cols-2 gap-12 text-gray-400">
                <div className="space-y-4">
                   <h4 className="text-white font-black uppercase text-sm tracking-widest">Global DDP Shipping?</h4>
                   <p className="text-sm leading-relaxed">Yes, we provide global DDP (Delivered Duty Paid) shipping to the USA, UK, EU, and Canada, handling all customs and duties for you.</p>
                </div>
                <div className="space-y-4">
                   <h4 className="text-white font-black uppercase text-sm tracking-widest">Prototyping Cost?</h4>
                   <p className="text-sm leading-relaxed">Existing samples are free. Custom prototypes with your artwork require a small fee, 100% refundable upon bulk order placement.</p>
                </div>
             </div>
          </section>

          {/* Inquiry Form */}
          <section id="contact" className="py-32">
             <div className="max-w-5xl mx-auto">
                <h2 className="text-6xl font-black uppercase tracking-tighter text-center mb-20 italic">Project Brief</h2>
                <div className="bg-white/5 p-16 rounded-[3rem] border border-white/10 backdrop-blur-lg">
                   <InquiryForm productTitle="Custom Magnetic Gift Boxes" />
                </div>
             </div>
          </section>
        </div>
      </main>

      <footer className="bg-black text-white py-16 border-t border-white/5 text-center">
        <p className="text-[10px] font-bold uppercase tracking-widest text-gray-600">
          &copy; 2026 Side Packaging HK Limited. FSC Certified Manufacturer.
        </p>
      </footer>
    </div>
  );
};

export default ProductPage;
