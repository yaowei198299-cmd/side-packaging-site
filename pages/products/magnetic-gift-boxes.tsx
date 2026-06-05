import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import InquiryForm from '../../components/InquiryForm';
import WhatsAppButton from '../../components/WhatsAppButton';

const MagneticGiftBoxesPage = () => {
  const features = [
    { title: "Premium Closure", desc: "Hidden strong magnets ensure a satisfying snap closure and high-end unboxing feel." },
    { title: "Rigid Construction", desc: "Built with 1200gsm-1800gsm grayboard for structural integrity and luxury weight." },
    { title: "Collapsible Options", desc: "Save 70% on shipping costs and storage space with our high-quality foldable designs." },
    { title: "Luxury Finishes", desc: "Choose from soft-touch, foil stamping, embossing, and custom-fit inserts (foam, EVA, velvet)." }
  ];

  const types = [
    { title: "Luxury Magnetic Box", image: "https://sc04.alicdn.com/kf/H227b0954e2ad4bf0ba3f0fddc502a3faY.jpg", desc: "Our signature high-end magnetic gift box." },
    { title: "Foldable Magnetic", image: "https://sc04.alicdn.com/kf/Hbebfc26f6fe74be2a241b3b45b5a69d3g.jpg", desc: "Smart design that ships flat and pops up in seconds." },
    { title: "Ribbon Tie Magnetic", image: "https://sc04.alicdn.com/kf/H610079537f9f40988ccbb03e6eebec3cE.jpg", desc: "Additional ribbon closure for an extra touch of elegance." }
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-gold-500 overflow-x-hidden">
      <Head>
        <title>Custom Magnetic Gift Boxes | Wholesale Rigid Packaging with Logo | Saide Packaging</title>
        <meta name="description" content="Premium custom magnetic gift boxes with logo. Factory-direct wholesale rigid magnetic boxes for luxury jewelry, cosmetics, and electronics. Global shipping." />
      </Head>

      <nav className="fixed top-0 left-0 right-0 z-[100] bg-black/40 backdrop-blur-2xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="text-xl font-black tracking-tighter uppercase italic text-white">Saide Packaging</Link>
          <div className="hidden lg:flex items-center space-x-10 text-[9px] font-black uppercase tracking-[0.3em] text-gray-400">
            <Link href="/products" className="hover:text-white transition-colors">Catalog</Link>
            <Link href="/gallery" className="hover:text-white transition-colors">Case Studies</Link>
            <Link href="/about-founder" className="hover:text-white transition-colors">Founders</Link>
          </div>
          <Link href="/inquiry" className="bg-[#C9A84C] text-black px-8 py-2.5 rounded-full text-[9px] font-black uppercase tracking-widest hover:bg-white transition-all shadow-xl">Get a Quote</Link>
        </div>
      </nav>

      <header className="relative pt-48 pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <span className="text-[#C9A84C] text-xs font-black uppercase tracking-[0.5em] mb-6 block">Luxury Packaging</span>
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] mb-12">
            Magnetic <br/>
            <span className="text-white/40 italic">Gift Boxes.</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl font-medium leading-relaxed uppercase tracking-tight">
            The ultimate statement in luxury. Our magnetic closure boxes combine structural durability with a sophisticated unboxing experience.
          </p>
        </div>
      </header>

      <section className="py-32 border-y border-white/5 bg-[#0A0A0F]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((f, i) => (
            <div key={i} className="space-y-6">
              <div className="w-12 h-1 border-t-2 border-[#C9A84C]" />
              <h3 className="text-xl font-black uppercase tracking-tighter italic">{f.title}</h3>
              <p className="text-sm text-gray-500 font-medium leading-relaxed uppercase tracking-wider">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-40 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black uppercase tracking-tighter italic mb-24 text-center">Style Options</h2>
          <div className="grid md:grid-cols-3 gap-16">
            {types.map((type, i) => (
              <div key={i} className="group">
                <div className="aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-white/5 border border-white/10 mb-8">
                  <img src={type.image} alt={type.title} className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" />
                </div>
                <h3 className="text-2xl font-black uppercase tracking-tighter italic mb-4">{type.title}</h3>
                <p className="text-gray-500 text-sm font-medium uppercase tracking-widest">{type.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-40 bg-black border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-5xl font-black uppercase tracking-tighter italic mb-20 text-center">Inquire About Luxury Boxes</h2>
          <InquiryForm productTitle="Custom Magnetic Gift Boxes" />
        </div>
      </section>

      <footer className="bg-black text-white py-20 border-t border-white/5 text-center">
        <p className="text-[10px] font-black uppercase tracking-[0.3em] opacity-30 italic">Saide Packaging HK Limited. © 2026. Industrial Luxury standards.</p>
      </footer>

      <WhatsAppButton />
    </div>
  );
};

export default MagneticGiftBoxesPage;
