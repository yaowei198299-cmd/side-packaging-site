import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import InquiryForm from '../components/InquiryForm';

const HomePage = () => {
  const boxStyles = [
    { title: "The Perpetual Eco-Luxury Set", badge: "2026 FLAGSHIP", image: "https://sc02.alicdn.com/kf/Ae50efd75cc6d448a8e45325d12c0ddcab.png", link: "/products/eco-luxury-set" },
    { title: "Double-Sided Printed Mailer", badge: "E-COMMERCE", image: "https://sc04.alicdn.com/kf/H4d0f3440368f42ec86490f55e64be502P.jpg?v=1", link: "/products" },
    { title: "Luxury Magnetic Rigid Box", badge: "PREMIUM", image: "https://sc04.alicdn.com/kf/H28aff4222df5454fbde2704bbee757e90.jpg?v=1", link: "/products" },
    { title: "Elegant Lid & Base Box", badge: "CLASSIC", image: "https://sc04.alicdn.com/kf/Hbebfc26f6fe74be2a241b3b45b5a69d3g.jpg?v=1", link: "/products" },
    { title: "Sliding Drawer Box", badge: "BOUTIQUE", image: "https://sc04.alicdn.com/kf/Hdf03eb602caa4dd4bce2e15c8f77cb1aA.jpg?v=1", link: "/products" },
    { title: "Luxury Finished Paper Bag", badge: "RETAIL", image: "https://sc04.alicdn.com/kf/H689a746594d24194910903328f4d9526n.jpg?v=1", link: "/products" },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-gold-500 overflow-x-hidden">
      <Head>
        <title>Side Packaging | China's Premium Luxury Gift Box Manufacturer</title>
        <meta name="description" content="Factory-Direct Luxury Magnetic, Rigid, Drawer & Mailer Boxes with Logo. MOQ from 100 pcs. Free 3D Mockup. Global Shipping." />
      </Head>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-[100] bg-black/40 backdrop-blur-2xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="text-xl font-black tracking-tighter uppercase italic text-white">Side Packaging</Link>
          <div className="hidden lg:flex items-center space-x-10 text-[9px] font-black uppercase tracking-[0.3em] text-gray-400">
            <Link href="/products" className="hover:text-white transition-colors">Catalog</Link>
            <Link href="/gallery" className="hover:text-white transition-colors">Case Studies</Link>
            <Link href="/about-founder" className="hover:text-white transition-colors">Founders</Link>
          </div>
          <a href="#contact" className="bg-[#d4af37] text-black px-8 py-2.5 rounded-full text-[9px] font-black uppercase tracking-widest hover:bg-white transition-all shadow-xl">Get a Free Quote</a>
        </div>
      </nav>

      {/* Hero: Reference-Inspired Layout */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        {/* Background Image (Right-weighted) */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://sc01.alicdn.com/kf/A421aa657fbeb4c8690351f33c3bbf7cdA.png" 
            alt="Luxury Packaging Collage" 
            className="absolute right-0 top-0 h-full w-full lg:w-3/4 object-cover object-right grayscale opacity-40 lg:opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <div className="animate-in fade-in slide-in-from-left-10 duration-1000">
            {/* Top Badge */}
            <div className="inline-block border border-[#d4af37]/30 bg-black/50 backdrop-blur-md px-4 py-1.5 rounded-full mb-8">
              <span className="text-[10px] font-bold text-[#d4af37] uppercase tracking-[0.2em] flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#d4af37] rounded-full animate-pulse" />
                China's Premium Gift Box Manufacturer · Est. 2006
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] mb-8 italic">
              Custom Luxury <br/>
              <span className="text-white">Gift Box</span> <br/>
              Manufacturer <br/>
              In China
            </h1>

            {/* Subtext */}
            <p className="text-lg md:text-xl text-white/60 mb-8 max-w-xl font-medium tracking-tight">
              Factory-Direct Magnetic, Rigid, Drawer & Mailer Boxes with Custom Logo
            </p>

            {/* USP Line */}
            <p className="text-sm font-black text-[#d4af37] uppercase tracking-[0.2em] mb-10">
              MOQ from 100 pcs • Free 3D Mockup • Global Shipping
            </p>

            {/* Pill Badges */}
            <div className="flex flex-wrap gap-3 mb-12">
              {[
                "MOQ: 100 pcs",
                "Lead Time: 15 Days",
                "Shipping to 50+ Countries",
                "Free Design Service"
              ].map((pill, i) => (
                <span key={i} className="px-5 py-2.5 bg-white/5 border border-white/10 rounded-full text-[10px] font-black uppercase tracking-widest text-white/80">
                  {pill}
                </span>
              ))}
            </div>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-6">
               <a href="#contact" className="inline-block bg-[#d4af37] text-black px-12 py-5 rounded-full font-black uppercase tracking-widest text-sm hover:scale-105 transition-all shadow-[0_0_30px_rgba(212,175,55,0.3)]">
                 Get Factory Pricing (Save 30-50%)
               </a>
            </div>
          </div>
        </div>
      </section>

      {/* Product Highlight: The 5 Pillars */}
      <section className="py-32 bg-black border-t border-white/5">
        <div className="max-w-[1600px] mx-auto px-6">
          <header className="mb-20">
             <span className="text-[#d4af37] text-[10px] font-black uppercase tracking-[0.5em] mb-4 block">Core Product Line</span>
             <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter italic">Engineered For Luxury.</h2>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {boxStyles.map((box, i) => (
              <Link key={i} href={box.link} className="group relative block aspect-[4/5] overflow-hidden bg-[#0f0f0f] rounded-sm border border-white/5 hover:border-[#d4af37]/30 transition-all">
                <img 
                  src={box.image} 
                  alt={box.title} 
                  className="absolute inset-0 w-full h-full object-cover grayscale opacity-50 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />
                <div className="absolute bottom-8 left-8 right-8">
                  <span className="text-[8px] font-black text-[#d4af37] uppercase tracking-[0.3em] mb-2 block">{box.badge}</span>
                  <h3 className="text-xl font-black text-white uppercase tracking-tighter italic">{box.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Factory Authority Section */}
      <section className="py-40 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-32 items-center">
          <div className="relative aspect-video rounded-sm overflow-hidden border border-white/5 group shadow-2xl">
             <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover grayscale opacity-60" />
             <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 border border-white/20 rounded-full flex items-center justify-center bg-black/40 backdrop-blur-md">
                   <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-white border-b-[8px] border-b-transparent ml-1" />
                </div>
             </div>
          </div>
          <div>
            <h2 className="text-5xl font-black uppercase tracking-tighter italic leading-none mb-10">Direct Factory. <br/>Unmatched Value.</h2>
            <p className="text-gray-500 text-lg font-medium leading-relaxed mb-12 uppercase tracking-wide">
              We eliminate the middleman. By owning our manufacturing facility in China, we provide 100% transparent pricing and direct quality control for your luxury packaging needs.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <p className="text-[#d4af37] text-3xl font-black mb-1 italic">20+</p>
                <p className="text-[9px] font-black text-white/40 uppercase tracking-widest">Years Experience</p>
              </div>
              <div>
                <p className="text-[#d4af37] text-3xl font-black mb-1 italic">FSC</p>
                <p className="text-[9px] font-black text-white/40 uppercase tracking-widest">Certified Material</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Form Section */}
      <section id="contact" className="py-40 bg-black border-t border-white/5">
        <InquiryForm />
      </section>

      <footer className="bg-black text-white py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-12">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] opacity-30 italic">Side Packaging HK Limited. © 2026. Industrial Luxury standards.</p>
          <div className="flex gap-12 text-[10px] font-black uppercase tracking-[0.3em] opacity-30">
            <Link href="/ar" className="text-[#d4af37] hover:opacity-100">Arabic / العربية</Link>
            <Link href="/de" className="text-[#d4af37] hover:opacity-100">German / Deutsch</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
