import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import InquiryForm from '../../components/InquiryForm';
import WhatsAppButton from '../../components/WhatsAppButton';
import Footer from '../../components/Footer';

const HomePageFr = () => {
  const group1 = "https://sc01.alicdn.com/kf/A3a4c9b4df52c4178b9387cd98246b8426.png";
  const group2 = "https://sc01.alicdn.com/kf/Ab4aec4b7e81744da97c367f74b3ed6b1K.png";

  const categories = [
    { title: "SACS 脌 MAIN", label: "Sacs 脿 main", image: group1, x: "0%" },
    { title: "BO脦TES EN PAPIER", label: "Bo卯tes en papier", image: group1, x: "33.33%" },
    { title: "脡TIQUETTES ADH脡SIVES", label: "脡tiquettes adh茅sives", image: group1, x: "66.66%" },
    { title: "PAPIER DE SOIE", label: "Papier de soie", image: group1, x: "100%" },
    { title: "BO脦TES DE LUXE", label: "Bo卯tes de luxe", image: group2, x: "0%" },
    { title: "BO脦TES PR脡SENTOIRS", label: "Bo卯tes pr茅sentoirs", image: group2, x: "33.33%" },
    { title: "BO脦TES D'EXP脡DITION", label: "Bo卯tes d'exp茅dition", image: group2, x: "66.66%" },
    { title: "CARTES DE REMERCIEMENT", label: "Cartes de remerciement", image: group2, x: "100%" },
  ];

  const faqs = [
    {
      q: "Quelle est votre quantit茅 minimale de commande (MOQ) ?",
      a: "Notre MOQ standard commence 脿 500 unit茅s pour les bo卯tes rigides de luxe et les bo卯tes cadeaux magn茅tiques. Pour les bo卯tes d'exp茅dition e-commerce, nous pouvons accepter des commandes 脿 partir de 100 unit茅s pour soutenir les marques en croissance."
    },
    {
      q: "Comment puis-je r茅duire mes co没ts d'emballage ?",
      a: "Nous proposons une analyse technique gratuite de r茅duction des co没ts. En optimisant les structures des bo卯tes, l'茅paisseur des mat茅riaux et les conceptions d'emballage 脿 plat, nous aidons g茅n茅ralement nos clients 脿 茅conomiser de 10 脿 30 % sur la production et l'exp茅dition."
    },
    {
      q: "Proposez-vous un support gratuit pour le trac茅 de d茅coupe et la structure ?",
      a: "Oui, chaque demande inclut un support professionnel gratuit pour le trac茅 de d茅coupe. Nos ing茅nieurs fourniront des dessins techniques pour garantir que votre graphisme s'adapte parfaitement avant la production en s茅rie."
    },
    {
      q: "Votre emballage est-il certifi茅 FSC ?",
      a: "Absolutment. Nous sommes une usine certifi茅e FSC, garantissant que tous les mat茅riaux proviennent de for锚ts g茅r茅es de mani猫re responsable. C'est crucial pour les marques qui p茅n猫trent les march茅s am茅ricain et europ茅en."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-gold-500 overflow-x-hidden">
      <Head>
        <title>Saide Packaging | Fabricant de Bo卯tes Cadeaux de Luxe Premium en Chine</title>
        <meta name="description" content="Direct Usine : Bo卯tes Magn茅tiques, Rigides, 脿 Tiroir et d'Exp茅dition de Luxe avec Logo. MOQ 脿 partir de 100 pi猫ces. Maquette 3D gratuite. Exp茅dition mondiale." />
      </Head>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-[100] bg-black/40 backdrop-blur-2xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
           <Link href="/fr" className="text-xl font-black tracking-tighter uppercase italic text-white font-montserrat">Saide Packaging</Link>
          <div className="hidden lg:flex items-center space-x-10 text-[9px] font-black uppercase tracking-[0.3em] text-gray-400">
            <Link href="/products" className="hover:text-white transition-colors">Catalogue</Link>
            <Link href="/gallery" className="hover:text-white transition-colors">脡tudes de Cas</Link>
            <Link href="/about-founder" className="hover:text-white transition-colors">Fondateurs</Link>
          </div>
          <a href="#contact" className="bg-[#C9A84C] text-black px-8 py-2.5 rounded-full text-[9px] font-black uppercase tracking-widest hover:bg-white transition-all shadow-xl font-montserrat">Obtenir un Devis Gratuit</a>
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
                Fabricant de Bo卯tes Cadeaux Premium en Chine 路 Est. 2006
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] mb-8 italic font-montserrat">
              Bo卯tes d'Emballage <br/>
              <span className="text-white">sur Mesure</span> <br/>
              Fabricant Direct <br/>
              en Chine
            </h1>

            <p className="text-lg md:text-xl text-white/60 mb-8 max-w-xl font-medium tracking-tight">
              Direct Usine : Bo卯tes Magn茅tiques, Rigides, 脿 Tiroir et d'Exp茅dition avec Logo Personnalis茅
            </p>

            <p className="text-sm font-black text-[#C9A84C] uppercase tracking-[0.2em] mb-10">
              MOQ 脿 partir de 100 pi猫ces 鈥?Maquette 3D gratuite 鈥?Exp茅dition mondiale
            </p>

            <div className="flex flex-wrap gap-3 mb-12">
              {[
                "MOQ : 100 pcs",
                "D茅lai : 15 Jours",
                "Exp茅dition dans 50+ Pays",
                "Service de Design Gratuit"
              ].map((pill, i) => (
                <span key={i} className="px-5 py-2.5 bg-white/5 border border-white/10 rounded-full text-[10px] font-black uppercase tracking-widest text-white/80">
                  {pill}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
               <a href="/inquiry" className="inline-block bg-[#C9A84C] text-black px-12 py-5 rounded-full font-black uppercase tracking-widest text-sm hover:scale-105 transition-all shadow-[0_0_30px_rgba(201,168,76,0.3)]">
                 Obtenir les Prix d'Usine (脡conomisez 30-50%)
               </a>
            </div>
          </div>
        </div>
      </section>

      {/* Category Grid */}
      <section className="py-32 bg-black border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6">
          <header className="mb-20 text-center">
             <span className="text-[#C9A84C] text-[10px] font-black uppercase tracking-[0.5em] mb-4 block">Cat茅gories de Produits</span>
             <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter italic font-montserrat">Con莽u pour le Luxe.</h2>
          </header>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-20">
            {categories.map((cat, i) => (
              <Link key={i} href="/products" className="group block text-center">
                <div className="aspect-square bg-white rounded-[2.5rem] overflow-hidden mb-6 flex items-center justify-center p-8 group-hover:scale-105 transition-all duration-500 shadow-2xl">
                  <div 
                    className="w-full h-full"
                    style={{
                      backgroundImage: `url(${cat.image})`,
                      backgroundSize: '400% 100%',
                      backgroundPosition: `${cat.x} center`,
                      backgroundRepeat: 'no-repeat'
                    }}
                  />
                </div>
                <div className="space-y-2">
                  <p className="text-gray-400 text-sm font-medium">{cat.label}</p>
                  <h3 className="text-xl md:text-2xl font-black italic uppercase tracking-tighter text-white group-hover:text-[#C9A84C] transition-colors font-montserrat">
                    {cat.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Expert Q&A Section */}
      <section className="py-40 bg-black border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <header className="mb-20 text-center">
            <span className="text-[#C9A84C] text-[10px] font-black uppercase tracking-[0.5em] mb-4 block">Q&A d'Experts</span>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter italic font-montserrat">Intelligence de l'Emballage.</h2>
          </header>

          <div className="space-y-12">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-white/5 pb-12 group text-left">
                <h3 className="text-xl font-black text-white uppercase tracking-tighter italic mb-4 group-hover:text-[#C9A84C] transition-colors font-montserrat">Q : {faq.q}</h3>
                <p className="text-gray-400 font-medium leading-relaxed uppercase tracking-wide text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form Section */}
      <section id="contact" className="py-24 bg-[#0A0A0F] border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <InquiryForm lang="fr" />
        </div>
      </section>

      <Footer />

      <WhatsAppButton />
    </div>
  );
};

export default HomePageFr;

