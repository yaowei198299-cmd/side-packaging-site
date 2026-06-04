import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import InquiryForm from '../../components/InquiryForm';
import WhatsAppButton from '../../components/WhatsAppButton';

const WhiteCardMailerPage = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-gold-500 overflow-x-hidden">
      <Head>
        <title>Maßgeschneiderte Versandbox aus weißem Karton | Premium E-Commerce & Abo-Verpackung</title>
        <meta name="description" content="Maßgeschneiderte Versandbox mit Logodruck. Hochwertige weiße Kartonverpackung für E-Commerce, Geschenkabos und Einzelhandel. Umweltfreundlich und recycelbar." />
      </Head>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-[100] bg-black/40 backdrop-blur-2xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/de" className="text-xl font-black tracking-tighter uppercase italic text-white">Side Packaging</Link>
          <div className="hidden lg:flex items-center space-x-10 text-[9px] font-black uppercase tracking-[0.3em] text-gray-400">
            <Link href="/de/products" className="hover:text-white transition-colors">Katalog</Link>
            <Link href="/de/gallery" className="hover:text-white transition-colors">Fallstudien</Link>
            <Link href="/de/about-founder" className="hover:text-white transition-colors">Gründer</Link>
          </div>
          <Link href="/de/inquiry" className="bg-[#d4af37] text-black px-8 py-2.5 rounded-full text-[9px] font-black uppercase tracking-widest hover:bg-white transition-all shadow-xl">Angebot anfordern</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://sc02.alicdn.com/kf/A6944a60384cf46a89e823d17403dc1e4Z.png" 
            alt="Maßgeschneiderte Versandbox aus weißem Karton" 
            className="w-full h-full object-cover grayscale brightness-75 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="inline-block border border-[#d4af37]/30 bg-black/50 backdrop-blur-md px-4 py-1.5 rounded-full mb-8">
              <span className="text-[10px] font-bold text-[#d4af37] uppercase tracking-[0.2em]">Umweltfreundlich · Premium-Weißkarton</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-8 italic">
              Premium-Versandbox <br/>aus weißem Karton.
            </h1>
            <p className="text-xl text-white/60 mb-12 max-w-xl font-medium tracking-tight uppercase tracking-widest leading-relaxed">
              Individueller Logodruck. Hochwertiges Finish. Perfekt für Abo-Boxen & Einzelhandelslieferung.
            </p>
          </div>
        </div>
      </section>

      {/* Technical Breakdown */}
      <section className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-32 items-start">
             <div>
                <h2 className="text-4xl font-black uppercase tracking-tighter italic mb-10 pb-6 border-b border-white/5">Technische Daten.</h2>
                <div className="space-y-12">
                   <div className="grid grid-cols-2 gap-10">
                      <div>
                         <p className="text-[10px] font-black text-[#d4af37] uppercase tracking-widest mb-3">Material</p>
                         <p className="text-lg font-bold text-white/80">350g/m² - 400g/m² weißer Karton</p>
                      </div>
                      <div>
                         <p className="text-[10px] font-black text-[#d4af37] uppercase tracking-widest mb-3">Druck</p>
                         <p className="text-lg font-bold text-white/80">CMYK / Pantone Vollfarbe</p>
                      </div>
                   </div>
                   <div className="grid grid-cols-2 gap-10">
                      <div>
                         <p className="text-[10px] font-black text-[#d4af37] uppercase tracking-widest mb-3">Veredelung</p>
                         <p className="text-lg font-bold text-white/80">Matte/Glänzende Laminierung, Spot-UV</p>
                      </div>
                      <div>
                         <p className="text-[10px] font-black text-[#d4af37] uppercase tracking-widest mb-3">Eigenschaft</p>
                         <p className="text-lg font-bold text-white/80">100% recycelbar & umweltfreundlich</p>
                      </div>
                   </div>
                   <div className="grid grid-cols-2 gap-10 border-t border-white/5 pt-10">
                      <div>
                         <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-3">Mindestbestellmenge</p>
                         <p className="text-lg font-bold text-white/40 italic">500 Einheiten</p>
                      </div>
                      <div>
                         <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-3">Lieferzeit</p>
                         <p className="text-lg font-bold text-white/40 italic">10-12 Werktage</p>
                      </div>
                   </div>
                </div>
             </div>

             <div className="bg-[#0f0f15] p-12 border border-white/5 rounded-sm">
                <h3 className="text-2xl font-black uppercase tracking-tighter italic mb-8">Industrieanwendungen</h3>
                <ul className="space-y-6 text-sm font-bold uppercase tracking-[0.2em] text-white/60">
                   <li className="flex items-center gap-4 border-l border-[#d4af37] pl-6">Abo-Box-Dienste</li>
                   <li className="flex items-center gap-4 border-l border-[#d4af37] pl-6">E-Commerce Versand & Logistik</li>
                   <li className="flex items-center gap-4 border-l border-[#d4af37] pl-6">Luxus-Einzelhandelsverpackung</li>
                   <li className="flex items-center gap-4 border-l border-[#d4af37] pl-6">Maßgeschneiderte Geschenkverpackung</li>
                </ul>
             </div>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section id="quote" className="py-40 bg-black border-t border-white/5">
        <InquiryForm productTitle="Maßgeschneiderte Versandbox aus weißem Karton" />
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-20 border-t border-white/5 text-center">
        <p className="text-[10px] font-black uppercase tracking-[0.3em] opacity-30 italic">Side Packaging HK Limited. © 2026. Industrielle Luxusstandards.</p>
      </footer>

      <WhatsAppButton />
    </div>
  );
};

export default WhiteCardMailerPage;
