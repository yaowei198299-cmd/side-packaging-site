import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import LeadMagnet from '../components/LeadMagnet';
import InquiryForm from '../components/InquiryForm';

const HomePage = () => {
  const featuredProducts = [
    {
      title: "Magnetic Closure Box",
      desc: "Luxury rigid packaging with magnetic closure.",
      image: "https://sc04.alicdn.com/kf/H28aff4222df5454fbde2704bbee757e90.jpg?v=1",
      link: "/products/luxury-magnetic-box"
    },
    {
      title: "Drawer Box",
      desc: "Elegant sliding drawer packaging solutions.",
      image: "https://sc04.alicdn.com/kf/Hdf03eb602caa4dd4bce2e15c8f77cb1aA.jpg?v=1",
      link: "/products/custom-drawer-box"
    },
    {
      title: "Mailer Box",
      desc: "Premium ecommerce packaging experience.",
      image: "https://sc04.alicdn.com/kf/H4d0f3440368f42ec86490f55e64be502P.jpg?v=1",
      link: "/products/premium-mailer-box"
    }
  ];

  const industrySolutions = [
    {
      title: "Cosmetic Packaging Solutions",
      desc: "Elevate your brand with premium rigid boxes and eco-friendly inserts.",
      image: "https://sc02.alicdn.com/kf/Ad479d4d9f3944161bf481e0ad9adc1feM.png",
      link: "/solutions/cosmetic-packaging",
      tag: "Luxury"
    },
    {
      title: "Food & Bakery Packaging",
      desc: "FDA-compliant paper boxes with oil-resistant coatings.",
      image: "https://s.alicdn.com/@sc04/kf/H59aa2a5ada2f4b24bd4a9746673a6fc0n/Customizable-Biodegradable-Food-Grade-Rigid-Cake-Box.jpg_480x480.jpg",
      link: "/solutions/food-bakery-packaging",
      tag: "FDA-Compliant"
    },
    {
      title: "E-commerce & Mailer Boxes",
      desc: "High-strength corrugated mailer boxes for global logistics.",
      image: "https://sc02.alicdn.com/kf/A3645295ca51c411e8b875eb53436ec490.png",
      link: "/solutions/ecommerce-mailer-boxes",
      tag: "Durable"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-gold-500">
      <Head>
        <title>Luxo-Bespoke Packaging | Side Packaging HK Limited</title>
        <meta name="description" content="Luxury B2B jewelry packaging & gift box solutions. Premium magnetic boxes, gold foil finishing, and bespoke structural design. Global factory direct." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Floating WhatsApp */}
      <a href="https://wa.me/8613699786538" className="fixed bottom-8 right-8 z-[100] bg-green-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all flex items-center justify-center border-4 border-white/20">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
      </a>

      {/* Navbar */}
      <nav className="border-b border-white/10 bg-black/95 backdrop-blur-md sticky top-0 z-[80]">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="text-2xl font-black tracking-tighter uppercase italic text-white hover:text-gray-300 transition-colors">Side Packaging</Link>
          <div className="hidden lg:flex items-center space-x-8 text-[11px] font-bold uppercase tracking-widest text-gray-400">
            <Link href="/" className="text-white border-b-2 border-white pb-1">Home</Link>
            <Link href="/products" className="hover:text-white transition-colors">Bespoke Products</Link>
            <Link href="/blog" className="hover:text-white transition-colors">Insights</Link>
            <a href="#contact" className="hover:text-white transition-colors">Consultation</a>
          </div>
          <a href="#contact" className="bg-white text-black px-8 py-3 rounded-full text-[11px] font-bold uppercase tracking-widest hover:bg-gray-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)]">Quick Quote</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-b from-black to-gray-900 py-32 text-center relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <span className="text-blue-500 font-black text-xs uppercase tracking-[0.5em] mb-6 block">Bespoke Jewelry & Gift Solutions</span>
          <h1 className="text-7xl font-black uppercase tracking-tighter mb-8 leading-[0.85]">Luxury Packaging <br/><span className="text-white/40 italic">Redefined.</span></h1>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-medium">Elevate your brand with sophisticated structural engineering and premium tactile finishes. Factory-direct expertise since 2006.</p>
          <div className="flex justify-center gap-6">
            <Link href="/products" className="bg-white text-black px-12 py-5 rounded-full font-black uppercase tracking-widest hover:scale-105 shadow-2xl transition-all">Explore Collections</Link>
            <a href="https://wa.me/8613699786538" className="bg-transparent text-white border-2 border-white/20 px-12 py-5 rounded-full font-black uppercase tracking-widest hover:bg-white/5 transition-all">WhatsApp Inquiry</a>
          </div>
        </div>
        {/* Abstract Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/10 blur-[150px] rounded-full"></div>
      </section>

      {/* Trust Strip */}
      <section className="py-12 bg-black border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-30 grayscale">
             {/* Placeholder for Luxury Brand Logos */}
             <span className="text-2xl font-black tracking-tighter italic">L'OCCITANE</span>
             <span className="text-2xl font-black tracking-tighter italic">PANDORA</span>
             <span className="text-2xl font-black tracking-tighter italic">TIFFANY & CO.</span>
             <span className="text-2xl font-black tracking-tighter italic">SWAROVSKI</span>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            <div>
              <p className="text-5xl font-black mb-2 text-white">30k+</p>
              <p className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.3em]">SQM Factory</p>
            </div>
            <div>
              <p className="text-5xl font-black mb-2 text-white">20+</p>
              <p className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.3em]">Production Lines</p>
            </div>
            <div>
              <p className="text-5xl font-black mb-2 text-white">500+</p>
              <p className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.3em]">Global Brands</p>
            </div>
            <div>
              <p className="text-5xl font-black mb-2 text-white">24h</p>
              <p className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.3em]">Quote Response</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-32 bg-gray-950" id="products">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div>
              <h2 className="text-5xl font-black uppercase tracking-tighter leading-none mb-4">Bespoke <br/>Collections</h2>
              <p className="text-gray-500 font-medium">Uncompromising quality in every structural detail.</p>
            </div>
            <Link href="/products" className="text-[11px] font-black uppercase tracking-widest border-b-2 border-white pb-2 hover:text-gray-400 hover:border-gray-400 transition-all">View All Products</Link>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {featuredProducts.map((p, i) => (
              <div key={i} className="group relative border border-white/5 rounded-[2rem] p-10 hover:border-white/20 transition-all bg-black shadow-2xl">
                <div className="aspect-square bg-gray-900 rounded-3xl flex items-center justify-center mb-8 overflow-hidden relative">
                  <img src={p.image} alt={p.title} className="w-2/3 h-2/3 object-contain group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-8">
                    <Link href={p.link} className="bg-white text-black px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest">Detail View</Link>
                  </div>
                </div>
                <h3 className="text-2xl font-black uppercase mb-4 tracking-tight">{p.title}</h3>
                <p className="text-gray-500 mb-8 font-medium text-sm leading-relaxed">{p.desc}</p>
                <a href={`https://wa.me/8613699786538?text=Hi, I'm interested in the ${p.title}`} className="text-[10px] font-bold uppercase tracking-widest text-blue-500 flex items-center gap-2 hover:gap-4 transition-all">
                  WhatsApp Inquiry <span>→</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Luxury Finishes (Dark Mode) */}
      <section className="py-32 bg-black border-y border-white/5 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <h2 className="text-4xl font-black uppercase tracking-tighter mb-20 text-center italic">Signature Tactile Finishes</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: 'Gold Foil Stamping', desc: 'Precision metallic foiling' },
              { name: 'Deep Embossing', desc: 'Sculpted structural depth' },
              { name: 'Soft Touch Velvet', desc: 'Ultra-matte tactile coating' },
              { name: 'Raised Spot UV', desc: 'Dimensional gloss highlights' }
            ].map((f, i) => (
              <div key={i} className="border border-white/10 rounded-[2rem] p-12 text-center hover:bg-white hover:text-black transition-all cursor-default group">
                <p className="text-xl font-black uppercase tracking-tighter mb-2">{f.name}</p>
                <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest group-hover:text-black/40">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainable Section */}
      <section className="py-32 bg-gray-900 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <span className="text-green-500 font-black text-xs uppercase tracking-[0.5em] mb-6 block">Responsible Craftsmanship</span>
          <h2 className="text-4xl font-black uppercase tracking-tighter mb-8 leading-tight">Eco-Luxury: Beauty <br/>Without Compromise.</h2>
          <p className="text-gray-400 font-medium mb-12">FSC certified paperboards, soy-based inks, and plastic-free structural engineering for the modern global market.</p>
          <div className="flex flex-wrap justify-center gap-8 opacity-40">
             <span className="text-[11px] font-black uppercase tracking-widest">FSC Certified</span>
             <span className="text-[11px] font-black uppercase tracking-widest">100% Recyclable</span>
             <span className="text-[11px] font-black uppercase tracking-widest">Plastic Free</span>
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-black uppercase tracking-tighter mb-20">Industry <br/>Verticals</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {industrySolutions.map((s, i) => (
              <div key={i} className="relative group rounded-[2.5rem] overflow-hidden h-[500px] shadow-2xl border border-white/5">
                <img src={s.image} alt={s.title} className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 opacity-40 group-hover:opacity-60" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent p-12 flex flex-col justify-end">
                  <span className="text-[10px] font-bold text-white uppercase tracking-widest mb-4 bg-white/10 self-start px-4 py-2 rounded-full backdrop-blur-sm">{s.tag}</span>
                  <h3 className="text-3xl font-black text-white uppercase mb-4 leading-none">{s.title}</h3>
                  <Link href={s.link} className="text-white text-[11px] font-bold uppercase tracking-widest border-b border-white self-start pb-2 hover:text-gray-400 hover:border-gray-400 transition-colors">Consult Solution</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / Inquiry */}
      <section id="contact" className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-32 items-center">
            <div>
              <h2 className="text-7xl font-black uppercase tracking-tighter leading-[0.85] mb-10">Bespoke <br/>Inquiry.</h2>
              <p className="text-xl text-gray-400 mb-16 font-medium leading-relaxed">Join 500+ global brands. Our packaging engineers will provide a technical analysis and cost evaluation within 24 hours.</p>
              <div className="space-y-10">
                <div className="flex items-center gap-8">
                  <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center text-white text-xl font-black border border-white/10">E</div>
                  <div>
                    <h4 className="font-bold uppercase tracking-widest text-[10px] text-gray-500 mb-1">Direct Correspondence</h4>
                    <p className="text-white font-bold text-lg underline">jocelyn@saidepackaging.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-8">
                  <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center text-white text-xl font-black border border-white/10">W</div>
                  <div>
                    <h4 className="font-bold uppercase tracking-widest text-[10px] text-gray-500 mb-1">Instant WhatsApp</h4>
                    <p className="text-white font-bold text-lg">+86-13699786538</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white/5 p-16 rounded-[3rem] border border-white/10 backdrop-blur-lg">
              <InquiryForm />
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black text-white py-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex flex-col items-center md:items-start gap-4">
             <p className="text-xl font-black tracking-tighter uppercase italic">Side Packaging</p>
             <p className="text-[10px] font-bold uppercase tracking-widest text-gray-600 max-w-xs text-center md:text-left">Premium B2B Jewelry Packaging & Gift Box Solutions for Global Brands.</p>
          </div>
          <p className="text-[10px] font-bold uppercase tracking-widest text-gray-600">&copy; 2026 Side Packaging HK Limited. All Rights Reserved.</p>
          <div className="flex gap-10 text-[10px] font-bold uppercase tracking-widest text-gray-600">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </footer>

      <LeadMagnet />
    </div>
  );
};

export default HomePage;
