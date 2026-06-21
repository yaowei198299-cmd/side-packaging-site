import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import InquiryForm from '../components/InquiryForm';
import WhatsAppButton from '../components/WhatsAppButton';

const HomePage = () => {
  // 分组定义图片素材
  const group1 = "https://sc01.alicdn.com/kf/A3a4c9b4df52c4178b9387cd98246b8426.png";
  const group2 = "https://sc01.alicdn.com/kf/Ab4aec4b7e81744da97c367f74b3ed6b1K.png";

  const categories = [
    { title: "HAND BAGS", image: group1, x: "0%", link: "/products" },
    { title: "PAPER BOXES", image: group1, x: "33.33%", link: "/products" },
    { title: "LABEL STICKER", image: group1, x: "66.66%", link: "/products" },
    { title: "TISSUE PAPER", image: group1, x: "100%", link: "/products" },
    { title: "LUXURY BOXES", image: group2, x: "0%", link: "/products/magnetic-gift-boxes" },
    { title: "DISPLAY BOXES", image: group2, x: "33.33%", link: "/products" },
    { title: "SHIPPING BOXES", image: group2, x: "66.66%", link: "/products/custom-mailer-boxes" },
    { title: "THANK YOU CARDS", image: group2, x: "100%", link: "/products" },
  ];

  const faqs = [
    {
      q: "What is your minimum order quantity (MOQ)?",
      a: "Our standard MOQ starts at 500 units for luxury rigid boxes and magnetic gift boxes. For e-commerce mailer boxes, we can accommodate orders starting from 100 units to support growing brands."
    },
    {
      q: "How can I reduce my packaging costs?",
      a: "We offer free technical cost-reduction analysis. By optimizing box structures, material thickness, and flat-packing designs, we typically help clients save 10-30% on production and shipping."
    },
    {
      q: "Do you offer free dieline and structural support?",
      a: "Yes, every inquiry includes free professional dieline support. Our engineers will provide technical drawings to ensure your artwork fits perfectly before mass production."
    },
    {
      q: "Is your packaging FSC certified?",
      a: "Absolutely. We are an FSC-certified factory, ensuring all materials are sourced from responsibly managed forests. This is crucial for brands entering the US and EU markets."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-gold-500 overflow-x-hidden">
      <Head>
        <title>Custom Packaging Box Manufacturer in China | MOQ 100 - Free 3D Mockup & 12H Dieline | Saide Packaging</title>
        <meta name="description" content="Direct China packaging factory. Save 15-30% in shipping volume with our collapsible designs. Get your free custom dieline in 12 hours. Order from 100 pcs!" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": faqs.map(faq => ({
                "@type": "Question",
                "name": faq.q,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.a
                }
              }))
            })
          }}
        />
      </Head>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-[100] bg-black/40 backdrop-blur-2xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="text-xl font-black tracking-tighter uppercase italic text-white font-montserrat">Saide Packaging</Link>
          <div className="hidden lg:flex items-center space-x-10 text-[9px] font-black uppercase tracking-[0.3em] text-gray-400">
            <Link href="/products" className="hover:text-white transition-colors">Catalog</Link>
            <Link href="/products/magnetic-gift-boxes" className="hover:text-white transition-colors">Rigid Boxes</Link>
            <Link href="/products/custom-mailer-boxes" className="hover:text-white transition-colors">Mailer Boxes</Link>
            <Link href="/gallery" className="hover:text-white transition-colors">Case Studies</Link>
            <Link href="/about-founder" className="hover:text-white transition-colors">Founders</Link>
          </div>
          <a href="#contact" className="bg-[#C9A84C] text-black px-8 py-2.5 rounded-full text-[9px] font-black uppercase tracking-widest hover:bg-white transition-all shadow-xl">Get a Free Quote</a>
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
                China's Premium Gift Box Manufacturer · Est. 2006
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] mb-8 italic font-montserrat">
              Custom Packaging <br/>
              <span className="text-white">Box Manufacturer</span> <br/>
              In China
            </h1>

            <p className="text-lg md:text-xl text-white/60 mb-8 max-w-xl font-medium tracking-tight">
              Factory-Direct Magnetic, Rigid, Drawer & Mailer Boxes with Custom Logo
            </p>

            <p className="text-sm font-black text-[#C9A84C] uppercase tracking-[0.2em] mb-10">
              MOQ from 100 pcs • Free 3D Mockup • Global Shipping
            </p>

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

            <div className="flex flex-col sm:flex-row gap-6">
                <a href="/inquiry" className="inline-block bg-[#C9A84C] text-black px-12 py-5 rounded-full font-black uppercase tracking-widest text-sm hover:scale-105 transition-all shadow-[0_0_30px_rgba(201,168,76,0.3)]">
                 Get Factory Pricing (Save 30-50%)
               </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar (Authority Signals) */}
      <div className="bg-white/5 border-y border-white/5 py-12 relative z-20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {[
            { label: "20+ Years", sub: "Production Expert" },
            { label: "20,000 sqm", sub: "Factory Facility" },
            { label: "FSC & BSCI", sub: "Global Standards" },
            { label: "50+ Countries", sub: "Global Logistics" }
          ].map((item, i) => (
            <div key={i} className="space-y-2">
              <p className="text-2xl md:text-3xl font-black italic uppercase tracking-tighter text-[#C9A84C]">{item.label}</p>
              <p className="text-[9px] font-black uppercase tracking-[0.3em] text-white/40">{item.sub}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Category Grid (100% Visual Match with LuxoPack Style) */}
      <section className="py-32 bg-black border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6">
          <header className="mb-20 text-center">
             <span className="text-[#C9A84C] text-[10px] font-black uppercase tracking-[0.5em] mb-4 block">Product Categories</span>
             <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter italic">Engineered For Luxury.</h2>
          </header>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-16">
            {categories.map((cat, i) => (
              <Link key={i} href="/products" className="group block text-center">
                <div 
                  className="aspect-square bg-[#1C1C28] rounded-[2rem] overflow-hidden mb-8 border border-white/5 group-hover:border-[#C9A84C]/50 transition-all shadow-2xl"
                  style={{
                    backgroundImage: `url(${cat.image})`,
                    backgroundSize: '400% 100%',
                    backgroundPosition: `${cat.x} center`,
                    backgroundRepeat: 'no-repeat'
                  }}
                />
                <h3 className="text-xl md:text-2xl font-black italic uppercase tracking-tighter text-white group-hover:text-[#C9A84C] transition-colors">
                  {cat.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Expert Q&A (AEO) Section */}
      <section className="py-40 bg-black border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <header className="mb-20 text-center">
            <span className="text-[#C9A84C] text-[10px] font-black uppercase tracking-[0.5em] mb-4 block">Expert Q&A</span>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter italic">Packaging Intelligence.</h2>
          </header>

          <div className="space-y-12">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-white/5 pb-12 group text-left">
                <h3 className="text-xl font-black text-white uppercase tracking-tighter italic mb-4 group-hover:text-[#C9A84C] transition-colors">Q: {faq.q}</h3>
                <p className="text-gray-400 font-medium leading-relaxed uppercase tracking-wide text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form Section */}
      <section id="contact" className="py-24 bg-[#0A0A0F] border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <InquiryForm />
        </div>
      </section>

      <footer className="bg-[#0A0A0F] text-white py-16 border-t border-white/5 text-center">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-12">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] opacity-30 italic">Saide Packaging HK Limited. © 2026. Industrial Luxury standards.</p>
          <div className="flex gap-12 text-[10px] font-black uppercase tracking-[0.3em] opacity-30">
            <Link href="/ar" className="text-[#C9A84C] ">Arabic / العربية</Link>
            <Link href="/de" className="text-[#C9A84C] ">German / Deutsch</Link>
          </div>
        </div>
      </footer>

      <WhatsAppButton />
    </div>
  );
};

export default HomePage;
