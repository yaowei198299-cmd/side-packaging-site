import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import InquiryForm from '../../components/InquiryForm';
import WhatsAppButton from '../../components/WhatsAppButton';

const WhiteCardMailerPage = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-gold-500 overflow-x-hidden">
      <Head>
        <title>Boîte d'expédition personnalisée en carton blanc | Emballage Premium E-commerce & Abonnement</title>
        <meta name="description" content="Boîte d'expédition personnalisée avec impression de logo. Emballage en papier cartonné blanc de haute qualité pour l'e-commerce, les abonnements cadeaux et la vente au détail. Écologique et recyclable." />
      </Head>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-[100] bg-black/40 backdrop-blur-2xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/fr" className="text-xl font-black tracking-tighter uppercase italic text-white">Side Packaging</Link>
          <div className="hidden lg:flex items-center space-x-10 text-[9px] font-black uppercase tracking-[0.3em] text-gray-400">
            <Link href="/fr/products" className="hover:text-white transition-colors">Catalogue</Link>
            <Link href="/fr/gallery" className="hover:text-white transition-colors">Études de cas</Link>
            <Link href="/fr/about-founder" className="hover:text-white transition-colors">Fondateurs</Link>
          </div>
          <Link href="/fr/inquiry" className="bg-[#d4af37] text-black px-8 py-2.5 rounded-full text-[9px] font-black uppercase tracking-widest hover:bg-white transition-all shadow-xl">Obtenir un devis</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://sc02.alicdn.com/kf/A6944a60384cf46a89e823d17403dc1e4Z.png" 
            alt="Boîte d'expédition personnalisée en carton blanc" 
            className="w-full h-full object-cover grayscale brightness-75 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="inline-block border border-[#d4af37]/30 bg-black/50 backdrop-blur-md px-4 py-1.5 rounded-full mb-8">
              <span className="text-[10px] font-bold text-[#d4af37] uppercase tracking-[0.2em]">Écologique · Carton Blanc Premium</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-8 italic">
              Boîte d'expédition <br/>en carton blanc.
            </h1>
            <p className="text-xl text-white/60 mb-12 max-w-xl font-medium tracking-tight uppercase tracking-widest leading-relaxed">
              Impression de logo personnalisé. Finition haut de gamme. Parfait pour les boîtes d'abonnement et la livraison au détail.
            </p>
          </div>
        </div>
      </section>

      {/* Technical Breakdown */}
      <section className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-32 items-start">
             <div>
                <h2 className="text-4xl font-black uppercase tracking-tighter italic mb-10 pb-6 border-b border-white/5">Spécifications techniques.</h2>
                <div className="space-y-12">
                   <div className="grid grid-cols-2 gap-10">
                      <div>
                         <p className="text-[10px] font-black text-[#d4af37] uppercase tracking-widest mb-3">Matériau</p>
                         <p className="text-lg font-bold text-white/80">Carton blanc 350g - 400g</p>
                      </div>
                      <div>
                         <p className="text-[10px] font-black text-[#d4af37] uppercase tracking-widest mb-3">Impression</p>
                         <p className="text-lg font-bold text-white/80">Impression couleur CMJN / Pantone</p>
                      </div>
                   </div>
                   <div className="grid grid-cols-2 gap-10">
                      <div>
                         <p className="text-[10px] font-black text-[#d4af37] uppercase tracking-widest mb-3">Finition</p>
                         <p className="text-lg font-bold text-white/80">Pelliculage mat/brillant, vernis sélectif UV</p>
                      </div>
                      <div>
                         <p className="text-[10px] font-black text-[#d4af37] uppercase tracking-widest mb-3">Caractéristique</p>
                         <p className="text-lg font-bold text-white/80">100% recyclable et écologique</p>
                      </div>
                   </div>
                   <div className="grid grid-cols-2 gap-10 border-t border-white/5 pt-10">
                      <div>
                         <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-3">Commande minimale</p>
                         <p className="text-lg font-bold text-white/40 italic">500 unités</p>
                      </div>
                      <div>
                         <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-3">Délai de livraison</p>
                         <p className="text-lg font-bold text-white/40 italic">10-12 jours ouvrables</p>
                      </div>
                   </div>
                </div>
             </div>

             <div className="bg-[#0f0f15] p-12 border border-white/5 rounded-sm">
                <h3 className="text-2xl font-black uppercase tracking-tighter italic mb-8">Applications industrielles</h3>
                <ul className="space-y-6 text-sm font-bold uppercase tracking-[0.2em] text-white/60">
                   <li className="flex items-center gap-4 border-l border-[#d4af37] pl-6">Services de boîtes d'abonnement</li>
                   <li className="flex items-center gap-4 border-l border-[#d4af37] pl-6">Expédition et logistique e-commerce</li>
                   <li className="flex items-center gap-4 border-l border-[#d4af37] pl-6">Emballage de vente au détail de luxe</li>
                   <li className="flex items-center gap-4 border-l border-[#d4af37] pl-6">Emballage cadeau sur mesure</li>
                </ul>
             </div>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section id="quote" className="py-40 bg-black border-t border-white/5">
        <InquiryForm productTitle="Boîte d'expédition personnalisée en carton blanc" />
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-20 border-t border-white/5 text-center">
        <p className="text-[10px] font-black uppercase tracking-[0.3em] opacity-30 italic">Side Packaging HK Limited. © 2026. Normes de luxe industriel.</p>
      </footer>

      <WhatsAppButton />
    </div>
  );
};

export default WhiteCardMailerPage;
