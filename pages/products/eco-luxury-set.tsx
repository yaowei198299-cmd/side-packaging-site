import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import InquiryForm from '../../components/InquiryForm';

const EcoLuxurySetPage = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-gold-500 overflow-x-hidden">
      <Head>
        <title>The Perpetual Eco-Luxury Set | 2026 Flagship Sustainable Packaging</title>
        <meta name="description" content="FSC Certified Eco-Luxury Beauty Gift Box. Plastic-free, Stone Paper Soft-Touch finish, and Mycelium molded inserts." />
      </Head>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-[100] bg-black/40 backdrop-blur-2xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="text-xl font-black tracking-tighter uppercase italic text-white">Saide Packaging</Link>
          <div className="hidden lg:flex items-center space-x-10 text-[9px] font-black uppercase tracking-[0.3em] text-gray-400">
            <Link href="/products" className="hover:text-white transition-colors">Catalog</Link>
            <Link href="/gallery" className="hover:text-white transition-colors">Case Studies</Link>
            <Link href="/about-founder" className="hover:text-white transition-colors">Founders</Link>
          </div>
          <a href="/inquiry" className="bg-[#d4af37] text-black px-8 py-2.5 rounded-full text-[9px] font-black uppercase tracking-widest hover:bg-white transition-all shadow-xl">Inquiry Now</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://sc02.alicdn.com/kf/Ae50efd75cc6d448a8e45325d12c0ddcab.png" 
            alt="The Perpetual Eco-Luxury Set" 
            className="w-full h-full object-cover  brightness-75 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="inline-block border border-[#d4af37]/30 bg-black/50 backdrop-blur-md px-4 py-1.5 rounded-full mb-8">
              <span className="text-[10px] font-bold text-[#d4af37] uppercase tracking-[0.2em]">2026 Flagship 路 Eco-Luxury Series</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-8 italic">
              The Perpetual <br/>Eco-Luxury Set.
            </h1>
            <p className="text-xl text-white/60 mb-12 max-w-xl font-medium tracking-tight uppercase tracking-widest leading-relaxed">
              100% Plastic-Free Engineering. Tree-Free Stone Paper Finish. Mycelium Composite Inserts.
            </p>
          </div>
        </div>
      </section>

      {/* Technical Breakdown */}
      <section className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-32 items-start">
             <div>
                <h2 className="text-4xl font-black uppercase tracking-tighter italic mb-10 pb-6 border-b border-white/5">Technical Specs.</h2>
                <div className="space-y-12">
                   <div className="grid grid-cols-2 gap-10">
                      <div>
                         <p className="text-[10px] font-black text-[#d4af37] uppercase tracking-widest mb-3">Structure</p>
                         <p className="text-lg font-bold text-white/80">Rigid Gift Set Box</p>
                      </div>
                      <div>
                         <p className="text-[10px] font-black text-[#d4af37] uppercase tracking-widest mb-3">Core Material</p>
                         <p className="text-lg font-bold text-white/80">1200gsm Recycled Greyboard</p>
                      </div>
                   </div>
                   <div className="grid grid-cols-2 gap-10">
                      <div>
                         <p className="text-[10px] font-black text-[#d4af37] uppercase tracking-widest mb-3">Finish</p>
                         <p className="text-lg font-bold text-white/80">Soft-Touch Stone Paper (Tree-Free)</p>
                      </div>
                      <div>
                         <p className="text-[10px] font-black text-[#d4af37] uppercase tracking-widest mb-3">Interior</p>
                         <p className="text-lg font-bold text-white/80">Black Molded Mycelium Inserts</p>
                      </div>
                   </div>
                   <div className="grid grid-cols-2 gap-10 border-t border-white/5 pt-10">
                      <div>
                         <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-3">Minimum Order</p>
                         <p className="text-lg font-bold text-white/40 italic">500 Units</p>
                      </div>
                      <div>
                         <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-3">Lead Time</p>
                         <p className="text-lg font-bold text-white/40 italic">15-20 Working Days</p>
                      </div>
                   </div>
                </div>
             </div>

             <div className="bg-[#0f0f0f] p-12 border border-white/5 rounded-sm">
                <h3 className="text-2xl font-black uppercase tracking-tighter italic mb-8">Bespoke Options</h3>
                <ul className="space-y-6 text-sm font-bold uppercase tracking-[0.2em] text-white/60">
                   <li className="flex items-center gap-4 border-l border-[#d4af37] pl-6">Embossed Gold/Silver Foil Logo</li>
                   <li className="flex items-center gap-4 border-l border-[#d4af37] pl-6">Custom Mycelium Internal Geometry</li>
                   <li className="flex items-center gap-4 border-l border-[#d4af37] pl-6">Soy-Ink High Definition Printing</li>
                   <li className="flex items-center gap-4 border-l border-[#d4af37] pl-6">Stone Paper Texture Selection (Matte/Silk)</li>
                </ul>
             </div>
          </div>
        </div>
      </section>

      {/* Sustainable Narrative */}
      <section className="py-40 bg-[#050505]">
         <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter italic mb-12">Circular Luxury.</h2>
            <p className="text-xl md:text-2xl text-white/50 leading-relaxed font-medium mb-20 uppercase tracking-widest">
               "The Perpetual" is engineered to challenge the paradox of luxury and waste. By utilizing stone-based finishes and fungal-based inserts, we offer a 100% biodegradable solution that surpasses the tactile quality of traditional plastic-laminated packaging.
            </p>
            <div className="flex flex-wrap justify-center gap-12 opacity-30">
               <span className="text-[10px] font-black uppercase tracking-[0.5em]">FSC Certified</span>
               <span className="text-[10px] font-black uppercase tracking-[0.5em]">BSCI Audited</span>
               <span className="text-[10px] font-black uppercase tracking-[0.5em]">100% Recyclable</span>
            </div>
         </div>
      </section>

      {/* Inquiry Form */}
      <section id="quote" className="py-40 bg-black border-t border-white/5">
        <InquiryForm productTitle="The Perpetual Eco-Luxury Set (2026 Flagship)" />
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] opacity-30 italic">Saide Packaging. 漏 2026. Industrial Luxury standards.</p>
        </div>
      </footer>
    </div>
  );
};

export default EcoLuxurySetPage;
