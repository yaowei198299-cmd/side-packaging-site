import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import InquiryForm from '../../components/InquiryForm';

const HomePageFr = () => {
  const boxStyles = [
    { title: "Boîte Magnétique Rigide", image: "https://sc04.alicdn.com/kf/H28aff4222df5454fbde2704bbee757e90.jpg?v=1", link: "/products" },
    { title: "Boîte à Tiroir", image: "https://sc04.alicdn.com/kf/Hdf03eb602caa4dd4bce2e15c8f77cb1aA.jpg?v=1", link: "/products" },
    { title: "Boîte d'Expédition", image: "https://sc04.alicdn.com/kf/H4d0f3440368f42ec86490f55e64be502P.jpg?v=1", link: "/products" },
    { title: "Boîte Cosmétique Pliante", image: "https://images.unsplash.com/photo-1612817288484-6f916006741a?q=80&w=800", link: "/products" },
    { title: "Sac en Papier de Luxe", image: "https://sc04.alicdn.com/kf/H689a746594d24194910903328f4d9526n.jpg?v=1", link: "/products" },
    { title: "Coffret Cadeau Sur Mesure", image: "https://sc04.alicdn.com/kf/Hc9d42403e05342a58b8875eb53436ec4E.jpg?v=1", link: "/products" },
  ];

  const factoryTrust = [
    { label: "Histoire de l'usine", value: "20+ Ans" },
    { label: "Certifications", value: "FSC / BSCI / ISO" },
    { label: "Capacité de Production", value: "50k Unités/Jour" },
    { label: "Présence Globale", value: "50+ Pays" },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-gold-500 overflow-x-hidden">
      <Head>
        <title>Side Packaging | Usine de Luxe en Direct | Solutions Sur Mesure</title>
        <meta name="description" content="Side Packaging HK Limited : Fabrication B2B premium pour boîtes rigides, mailers et emballages sur mesure. Direct usine depuis 2006." />
      </Head>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-[100] bg-black/40 backdrop-blur-2xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
          <Link href="/fr" className="text-2xl font-black tracking-tighter uppercase italic text-white">Side Packaging</Link>
          <div className="hidden lg:flex items-center space-x-12 text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">
            <Link href="/products" className="hover:text-white transition-colors">Catalogue</Link>
            <Link href="/gallery" className="hover:text-white transition-colors">Études de Cas</Link>
            <Link href="/about-founder" className="hover:text-white transition-colors">Fondateurs</Link>
            <Link href="/blog" className="hover:text-white transition-colors">Insights</Link>
          </div>
          <a href="#contact" className="bg-white text-black px-10 py-3.5 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-gray-200 shadow-xl transition-all">Devis</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-black z-10" />
        <img 
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2000" 
          alt="Luxury Factory" 
          className="absolute inset-0 w-full h-full object-cover grayscale brightness-50 scale-105"
        />
        
        <div className="relative z-20 text-center max-w-5xl px-6">
          <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-2 rounded-full mb-10 backdrop-blur-lg">
            <span className="w-2 h-2 bg-gold-500 rounded-full animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/60">Direct Usine · Guide 2026</span>
          </div>
          <h1 className="text-7xl md:text-[10rem] font-black uppercase tracking-tighter leading-[0.85] mb-12 italic text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20">
            Luxe <br/>Industriel.
          </h1>
          <p className="text-xl md:text-2xl text-white/50 mb-16 max-w-2xl mx-auto font-medium leading-relaxed uppercase tracking-widest">
            Ingénierie de l'emballage sur mesure pour les marques premium mondiales.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <Link href="/products" className="bg-white text-black px-14 py-6 rounded-full font-black uppercase tracking-widest hover:scale-105 transition-all shadow-2xl">
              Explorer le Catalogue
            </Link>
            <a href="#contact" className="bg-transparent border border-white/20 text-white px-14 py-6 rounded-full font-black uppercase tracking-widest hover:bg-white/5 transition-all backdrop-blur-md">
              Devis Personnalisé
            </a>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="bg-black py-20 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {factoryTrust.map((stat, i) => (
            <div key={i} className="group">
              <p className="text-[10px] font-black text-gray-600 uppercase tracking-[0.3em] mb-3 group-hover:text-gold-500 transition-colors">{stat.label}</p>
              <p className="text-3xl font-black text-white italic group-hover:scale-110 transition-transform">{stat.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Grid */}
      <section className="py-40 bg-black" id="catalog">
        <div className="max-w-[1600px] mx-auto px-6">
          <header className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-32 border-b border-white/5 pb-20">
            <div className="max-w-2xl">
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-8 italic">Structure & <br/>Finition.</h2>
              <p className="text-gray-500 font-medium leading-relaxed uppercase tracking-widest text-sm">Chaque boîte est un chef-d'œuvre d'ingénierie.</p>
            </div>
            <Link href="/products" className="text-[11px] font-black uppercase tracking-[0.4em] text-white border-b border-gold-500 pb-2 hover:text-gold-500 transition-colors">Spécifications Techniques →</Link>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {boxStyles.map((box, i) => (
              <Link key={i} href={box.link} className="group relative block aspect-[4/5] overflow-hidden bg-[#0f0f0f] rounded-sm border border-white/5 hover:border-white/10 transition-all">
                <img src={box.image} alt={box.title} className="absolute inset-0 w-full h-full object-cover grayscale opacity-60 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />
                <div className="absolute bottom-10 left-10 right-10">
                  <div className="w-10 h-[2px] bg-gold-500 mb-6 group-hover:w-full transition-all duration-700" />
                  <h3 className="text-3xl font-black text-white uppercase tracking-tighter italic mb-2">{box.title}</h3>
                  <p className="text-[9px] font-black text-white/40 uppercase tracking-[0.4em]">Certifié FSC · Dessin Technique Inclus</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry */}
      <section id="contact" className="py-60 bg-black relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-40">
            <div>
              <h2 className="text-7xl md:text-9xl font-black uppercase tracking-tighter leading-[0.85] mb-12 italic">Let's <br/>Build.</h2>
              <p className="text-xl text-white/40 mb-20 font-medium leading-relaxed uppercase tracking-[0.2em]">Optimisation des coûts en 24 heures.</p>
              
              <div className="space-y-16">
                <div>
                  <p className="text-[10px] font-black text-gold-500 uppercase tracking-widest mb-4">Email Direct</p>
                  <p className="text-3xl font-black italic">jocelyn@saidepackaging.com</p>
                </div>
                <div>
                  <p className="text-[10px] font-black text-gold-500 uppercase tracking-widest mb-4">Support Global</p>
                  <p className="text-3xl font-black italic">+86-13699786538</p>
                </div>
              </div>
            </div>
            <div className="bg-[#0f0f0f] p-12 rounded-sm border border-white/5 shadow-2xl">
              <InquiryForm lang="fr" />
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black text-white py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-12">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] opacity-30 italic">Side Packaging HK Limited. © 2026.</p>
          <div className="flex gap-12 text-[10px] font-black uppercase tracking-[0.3em] opacity-30">
            <Link href="/" className="text-gold-500 hover:opacity-100">English</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePageFr;
