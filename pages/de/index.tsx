import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import InquiryForm from '../../components/InquiryForm';
import WhatsAppButton from '../../components/WhatsAppButton';

const HomePageDe = () => {
  const group1 = "https://sc01.alicdn.com/kf/A3a4c9b4df52c4178b9387cd98246b8426.png";
  const group2 = "https://sc01.alicdn.com/kf/Ab4aec4b7e81744da97c367f74b3ed6b1K.png";

  const categories = [
    { title: "HANDTASCHEN", image: group1, x: "0%" },
    { title: "PAPIERSCHACHTELN", image: group1, x: "33.33%" },
    { title: "ETIKETTENAUFKLEBER", image: group1, x: "66.66%" },
    { title: "SEIDENPAPIER", image: group1, x: "100%" },
    { title: "LUXUSBOXEN", image: group2, x: "0%" },
    { title: "DISPLAYBOXEN", image: group2, x: "33.33%" },
    { title: "VERSANDKARTONS", image: group2, x: "66.66%" },
    { title: "DANKESKARTEN", image: group2, x: "100%" },
  ];

  const faqs = [
    {
      q: "Was ist Ihre Mindestbestellmenge (MOQ)?",
      a: "Unsere Standard-MOQ beginnt bei 500 Einheiten für Luxus-Magnetboxen und starre Geschenkboxen. Für E-Commerce-Versandkartons können wir Bestellungen ab 100 Einheiten entgegennehmen, um wachsende Marken zu unterstützen."
    },
    {
      q: "Wie kann ich meine Verpackungskosten senken?",
      a: "Wir bieten eine kostenlose technische Kosten-Nutzen-Analyse an. Durch die Optimierung von Boxstrukturen, Materialstärken und flach verpackten Designs helfen wir Kunden in der Regel, 10-30 % bei Produktion und Versand zu sparen."
    },
    {
      q: "Bieten Sie kostenlose Dieline- und Strukturunterstützung an?",
      a: "Ja, jede Anfrage beinhaltet professionelle Dieline-Unterstützung. Unsere Ingenieure erstellen technische Zeichnungen, um sicherzustellen, dass Ihr Artwork vor der Massenproduktion perfekt passt."
    },
    {
      q: "Ist Ihre Verpackung FSC-zertifiziert?",
      a: "Absolut. Wir sind eine FSC-zertifizierte Fabrik, die sicherstellt, dass alle Materialien aus verantwortungsvoll bewirtschafteten Wäldern stammen. Dies ist entscheidend für Marken, die in den US- und EU-Markt eintreten."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-gold-500 overflow-x-hidden">
      <Head>
        <title>Saide Packaging | Chinas Premium-Hersteller für Luxus-Geschenkboxen</title>
        <meta name="description" content="Direkt ab Werk: Luxus-Magnetboxen, starre Boxen, Schubladen- & Versandkartons mit Logo. MOQ ab 100 Stück. Kostenloses 3D-Mockup. Weltweiter Versand." />
      </Head>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-[100] bg-black/40 backdrop-blur-2xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/de" className="text-xl font-black tracking-tighter uppercase italic text-white font-montserrat">Saide Packaging</Link>
          <div className="hidden lg:flex items-center space-x-10 text-[9px] font-black uppercase tracking-[0.3em] text-gray-400">
            <Link href="/products" className="hover:text-white transition-colors">Katalog</Link>
            <Link href="/gallery" className="hover:text-white transition-colors">Fallstudien</Link>
            <Link href="/about-founder" className="hover:text-white transition-colors">Gründer</Link>
          </div>
          <a href="#contact" className="bg-[#C9A84C] text-black px-8 py-2.5 rounded-full text-[9px] font-black uppercase tracking-widest hover:bg-white transition-all shadow-xl font-montserrat">Kostenloses Angebot</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20 bg-[#0A0A0F]">
        <div className="absolute top-0 bottom-0 right-0 z-0 flex justify-end items-center w-full lg:w-[55%] h-full">
          <img 
            src="https://sc01.alicdn.com/kf/A50266d485601490f977db118833d7fb4a.png" 
            alt="Luxury Packaging Collage" 
            className="h-auto w-full max-h-[85%] object-contain object-right pr-6 lg:pr-20 animate-in fade-in zoom-in-95 duration-1000"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center text-left">
          <div className="animate-in fade-in slide-in-from-left-10 duration-1000">
            <div className="inline-block border border-[#C9A84C]/30 bg-black/50 backdrop-blur-md px-4 py-1.5 rounded-full mb-8">
              <span className="text-[10px] font-bold text-[#C9A84C] uppercase tracking-[0.2em] flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#C9A84C] rounded-full animate-pulse" />
                Chinas Premium-Hersteller für Geschenkboxen · Seit 2006
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] mb-8 italic font-montserrat">
              Maßgeschneiderte <br/>
              <span className="text-white">Verpackungsboxen</span> <br/>
              Hersteller <br/>
              in China
            </h1>

            <p className="text-lg md:text-xl text-white/60 mb-8 max-w-xl font-medium tracking-tight">
              Direkt ab Werk: Magnet-, starre, Schubladen- & Versandkartons mit eigenem Logo
            </p>

            <p className="text-sm font-black text-[#C9A84C] uppercase tracking-[0.2em] mb-10">
              MOQ ab 100 Stück • Kostenloses 3D-Mockup • Weltweiter Versand
            </p>

            <div className="flex flex-wrap gap-3 mb-12">
              {[
                "MOQ: 100 Stück",
                "Lieferzeit: 15 Tage",
                "Versand in 50+ Länder",
                "Kostenloser Designservice"
              ].map((pill, i) => (
                <span key={i} className="px-5 py-2.5 bg-white/5 border border-white/10 rounded-full text-[10px] font-black uppercase tracking-widest text-white/80">
                  {pill}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
               <a href="/inquiry" className="inline-block bg-[#C9A84C] text-black px-12 py-5 rounded-full font-black uppercase tracking-widest text-sm hover:scale-105 transition-all shadow-[0_0_30px_rgba(201,168,76,0.3)]">
                 Fabrikpreise sichern (30-50% sparen)
               </a>
            </div>
          </div>
        </div>
      </section>

      {/* Category Grid */}
      <section className="py-32 bg-black border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6">
          <header className="mb-20 text-center">
             <span className="text-[#C9A84C] text-[10px] font-black uppercase tracking-[0.5em] mb-4 block">Produktkategorien</span>
             <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter italic font-montserrat">Entwickelt für Luxus.</h2>
          </header>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-16">
            {categories.map((cat, i) => (
              <Link key={i} href="/products" className="group block text-center">
                <div 
                  className="aspect-square bg-[#f3f3f3] rounded-[2rem] overflow-hidden mb-8 border border-white/5 group-hover:border-[#C9A84C]/50 transition-all shadow-2xl"
                  style={{
                    backgroundImage: `url(${cat.image})`,
                    backgroundSize: '400% 100%',
                    backgroundPosition: `${cat.x} center`,
                    backgroundRepeat: 'no-repeat'
                  }}
                />
                <h3 className="text-xl md:text-2xl font-black italic uppercase tracking-tighter text-white group-hover:text-[#C9A84C] transition-colors font-montserrat">
                  {cat.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Expert Q&A Section */}
      <section className="py-40 bg-black border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <header className="mb-20 text-center">
            <span className="text-[#C9A84C] text-[10px] font-black uppercase tracking-[0.5em] mb-4 block">Experten-Q&A</span>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter italic font-montserrat">Verpackungsintelligenz.</h2>
          </header>

          <div className="space-y-12">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-white/5 pb-12 group text-left">
                <h3 className="text-xl font-black text-white uppercase tracking-tighter italic mb-4 group-hover:text-[#C9A84C] transition-colors font-montserrat">F: {faq.q}</h3>
                <p className="text-gray-400 font-medium leading-relaxed uppercase tracking-wide text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form Section */}
      <section id="contact" className="py-40 bg-black border-t border-white/5">
        <InquiryForm lang="de" />
      </section>

      <footer className="bg-black text-white py-20 border-t border-white/5 text-center">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-12">
           <p className="text-[10px] font-black uppercase tracking-[0.3em] opacity-30 italic">Saide Packaging HK Limited. © 2026. Industrielle Luxusstandards.</p>
          <div className="flex gap-12 text-[10px] font-black uppercase tracking-[0.3em] opacity-30">
            <Link href="/" className="text-[#C9A84C] ">English</Link>
            <Link href="/ar" className="text-[#C9A84C] ">Arabic / العربية</Link>
          </div>
        </div>
      </footer>

      <WhatsAppButton />
    </div>
  );
};

export default HomePageDe;
