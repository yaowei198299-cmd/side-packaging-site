import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

const HomePage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    quantity: '',
    type: 'Quote' // 'Quote', 'Sample', 'Rush'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you for your ${formData.type} request! Andy will contact you via WhatsApp/Email shortly.`);
    setFormData({ name: '', email: '', phone: '', message: '', quantity: '', type: 'Quote' });
  };

  const categories = [
    {
      title: "Custom Magnetic Gift Boxes",
      desc: "Luxury rigid boxes with hidden magnetic closures. High-end finish for premium retail brands.",
      image: "https://sc02.alicdn.com/kf/A092333b800b841ab8b8229cd7ee66f5ec.png",
      link: "/products/custom-magnetic-gift-boxes",
      tag: "Best Seller"
    },
    {
      title: "FSC Certified Mailer Boxes",
      desc: "Sustainable corrugated shipping boxes for e-commerce, subscriptions, and branded mailing.",
      image: "https://sc02.alicdn.com/kf/A670f5bad379f4827ab376384d974e493g.png",
      link: "#contact",
      tag: "Eco-Friendly"
    },
    {
      title: "Rigid Box Manufacturer China",
      desc: "Premium two-piece lid and base boxes. Low MOQ factory-direct manufacturing.",
      image: "https://sc02.alicdn.com/kf/Aa102fe113883456d96481350b3e32950c.png",
      link: "#contact",
      tag: "Low MOQ"
    }
  ];

  const benefits = [
    { title: "Direct Factory Pricing", desc: "No middleman. Buy directly from our ISO 9001 certified production facility in China." },
    { title: "Low MOQ (100pcs)", desc: "Flexible order quantities for startups and high-end limited edition collections." },
    { title: "Rapid Turnaround", desc: "Sample in 3-5 days. Bulk production in 10-15 days with global door-to-door shipping." },
    { title: "Sustainability First", desc: "FSC-certified materials, soy-based inks, and plastic-free packaging options available." }
  ];

  const factoryImages = [
    { url: "https://sc01.alicdn.com/kf/Ac788cba78979424ab2c2ba15b024de295.jpg", title: "Skilled Hand-Assembled Rigid Boxes" },
    { url: "https://sc01.alicdn.com/kf/Af1c888b0929d45d08bbc6d245ea133848.jpg", title: "Automated Magnetic Alignment Line" },
    { url: "https://sc01.alicdn.com/kf/A893e5006c09948eb8d8e65b46231e98fi.jpg", title: "Precision Die-Cutting & Embossing" },
    { url: "https://sc01.alicdn.com/kf/Af794f5525f534d2f8a1998c045fce0066.jpg", title: "Strict Quality Control & Inspection" }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-blue-100">
      <Head>
        <title>Side Packaging HK Limited | China's Leading Custom Magnetic Gift Box Manufacturer</title>
        <meta name="description" content="Side Packaging HK — 20+ years of manufacturing custom luxury gift boxes, FSC-certified mailer boxes, and rigid packaging. Low MOQ 100pcs, Global DDP shipping. Factory-direct pricing." />
        <meta name="keywords" content="custom magnetic gift boxes China, FSC certified rigid boxes, luxury packaging manufacturer, wholesale mailer boxes with logo, low MOQ rigid boxes" />
        <meta name="google-site-verification" content="1M4JeciyH92CxblYUEVd-CyORMJY4u6zAsot5l8ztJs" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Structured Data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Side Packaging HK Limited",
              "alternateName": "Side Packaging",
              "description": "Premium B2B manufacturer of luxury rigid gift boxes and custom retail packaging with 20+ years of factory-direct experience.",
              "foundingDate": "2006",
              "url": "https://saidepackaging.com",
              "logo": "https://saidepackaging.com/logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+86-13699786538",
                "contactType": "customer service",
                "email": "andy@saidepackaging.com",
                "availableLanguage": ["en", "zh"]
              },
              "areaServed": ["US", "GB", "CA", "AU", "FR", "DE"],
              "knowsAbout": ["Custom Packaging", "Rigid Box Manufacturing", "Luxury Retail Packaging", "Sustainability", "FSC-Certified Materials"],
              "hasCertification": ["FSC", "BSCI", "ISO 9001"],
              "brand": {
                "@type": "Brand",
                "name": "Side Packaging",
                "slogan": "Factory-Direct Luxury Packaging Excellence"
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Hong Kong",
                "addressCountry": "HK"
              }
            })
          }}
        />
      </Head>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/8613699786538" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="fixed bottom-8 right-8 z-[100] bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all transform hover:scale-110 flex items-center justify-center group"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 group-hover:ml-3 whitespace-nowrap font-bold text-sm">Chat with Andy</span>
      </a>

      {/* Navigation */}
      <nav className="border-b border-gray-100 sticky top-0 bg-white/95 backdrop-blur-md z-[60]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
          <div className="font-black text-2xl tracking-tighter italic shrink-0 select-none uppercase">Side Packaging</div>
          
          <div className="hidden lg:flex items-center space-x-10 text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400">
            <Link href="/" className="text-black border-b-2 border-black py-1">Home</Link>
            <a href="#products" className="hover:text-black transition-colors">Products</a>
            <a href="#about" className="hover:text-black transition-colors">Factory</a>
            <a href="#process" className="hover:text-black transition-colors">Process</a>
            <a href="#reviews" className="hover:text-black transition-colors">Reviews</a>
            <Link href="/blog" className="hover:text-black transition-colors text-blue-600">Blog</Link>
          </div>

          <div className="flex items-center space-x-6">
            <a href="#contact" className="hidden sm:block">
              <button className="bg-black text-white px-8 py-3.5 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-gray-800 transition-all shadow-lg">
                GET A QUOTE
              </button>
            </a>
            <a href="#contact" className="bg-blue-600 text-white px-8 py-3.5 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-blue-700 transition-all shadow-lg">
              SAMPLES
            </a>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section - 3-Second Memorable Version */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#0a0a0a] text-white">
          {/* Background Abstract Light */}
          <div className="absolute top-0 right-0 w-full h-full opacity-30">
            <div className="absolute top-[-20%] right-[-10%] w-[70%] h-[120%] bg-blue-600/20 blur-[150px] rounded-full"></div>
            <div className="absolute bottom-[-20%] left-[-10%] w-[50%] h-[100%] bg-indigo-600/10 blur-[150px] rounded-full"></div>
          </div>

          <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <div className="inline-flex items-center space-x-3 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-8 backdrop-blur-md">
                   <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
                   <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-400">20+ Years Factory Heritage</span>
                </div>
                
                <h1 className="text-7xl md:text-[10rem] font-black leading-[0.85] mb-12 tracking-tighter">
                  Luxury <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600">Packaging</span><br/>
                  Redefined.
                </h1>

                <p className="text-xl md:text-2xl text-gray-400 mb-16 leading-relaxed max-w-xl font-medium">
                  Direct from our FSC-Certified manufacturing facility. We engineer the perfect "unboxing" for the world's most ambitious brands.
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-8">
                  <a href="#contact" className="w-full sm:w-auto">
                    <button className="w-full sm:w-auto bg-blue-600 text-white px-12 py-7 rounded-full font-black text-xl hover:bg-blue-700 transition-all shadow-[0_0_50px_rgba(37,99,235,0.4)] flex items-center justify-center group">
                      CUSTOMIZE NOW
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-3 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                  </a>
                  <div className="flex items-center space-x-4">
                    <div className="flex -space-x-3">
                       {[11,12,13].map(i => (
                        <div key={i} className="w-10 h-10 rounded-full border-2 border-[#0a0a0a] overflow-hidden">
                          <img src={`https://i.pravatar.cc/100?img=${i}`} alt="User" className="w-full h-full object-cover grayscale" />
                        </div>
                       ))}
                    </div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
                      Trusted by <span className="text-white">800+ Clients</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative hidden lg:block">
                 <div className="relative z-10 transform hover:scale-105 transition-transform duration-700">
                   <img 
                    src="https://sc02.alicdn.com/kf/A092333b800b841ab8b8229cd7ee66f5ec.png" 
                    alt="Side Packaging Luxury Box" 
                    className="w-full h-auto drop-shadow-[0_35px_60px_rgba(255,255,255,0.1)]"
                  />
                 </div>
                 {/* Floating Badge */}
                 <div className="absolute top-1/2 right-[-5%] bg-white text-black p-8 rounded-3xl shadow-2xl rotate-12 flex flex-col items-center justify-center z-20">
                    <p className="text-4xl font-black tracking-tighter">100%</p>
                    <p className="text-[8px] font-black uppercase tracking-widest whitespace-nowrap">Factory Direct</p>
                 </div>
              </div>
            </div>
          </div>

          {/* Bottom Gradient Fade */}
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>
        </section>

        {/* Core Expertise Grid */}
        <section id="products" className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-10">
              <div className="max-w-2xl">
                <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-8 uppercase leading-[1.0]">Premium B2B <br/>Manufacturing Experts.</h2>
                <p className="text-gray-500 font-medium text-xl leading-relaxed">
                  We bridge the gap between complex structural design and mass production, delivering perfection at every MOQ level.
                </p>
              </div>
              <div className="flex gap-4">
                 <div className="bg-gray-50 px-8 py-6 rounded-2xl border border-gray-100">
                   <p className="text-4xl font-black mb-1">Low MOQ</p>
                   <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">100pcs Start</p>
                 </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              {categories.map((cat, i) => (
                <div key={i} className="group relative">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-gray-50 mb-10 border border-gray-100 transition-all hover:shadow-2xl">
                    <img src={cat.image} alt={cat.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                    <div className="absolute top-8 left-8">
                      <span className="bg-white/90 backdrop-blur-sm text-black px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest shadow-sm">
                        {cat.tag}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-3xl font-black mb-4 uppercase tracking-tighter">{cat.title}</h3>
                  <p className="text-gray-400 font-medium leading-relaxed mb-8">{cat.desc}</p>
                  <a href="#contact" className="inline-flex items-center text-black font-black text-sm uppercase tracking-widest group">
                    <span className="border-b-2 border-black pb-1 group-hover:text-blue-600 group-hover:border-blue-600 transition-all">Get Specifications</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Strip */}
        <section className="py-24 bg-gray-900 text-white overflow-hidden relative">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 grid md:grid-cols-4 gap-16 relative z-10">
            {benefits.map((benefit, i) => (
              <div key={i}>
                <h4 className="text-xs font-black mb-4 uppercase tracking-[0.3em] text-blue-500">{benefit.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications Strip (NEW) */}
        <section className="py-16 bg-white border-b border-gray-100">
           <div className="max-w-5xl mx-auto px-6 text-center">
              <img 
                src="https://sc01.alicdn.com/kf/Aa33381bfa06d472cad56bc460860626eF.png" 
                alt="Side Packaging Certifications - FSC, BSCI, ISO 9001, SGS, RoHS" 
                className="mx-auto max-w-full h-auto grayscale hover:grayscale-0 transition-all duration-700 opacity-60 hover:opacity-100"
                loading="lazy"
              />
           </div>
        </section>

        {/* Factory & Heritage */}
        <section id="about" className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-32 items-center">
              <div className="grid grid-cols-2 gap-6 relative">
                 {factoryImages.map((img, i) => (
                    <div key={i} className={`rounded-3xl overflow-hidden aspect-[3/4] ${i % 2 === 1 ? 'mt-12' : ''} group relative`}>
                       <img src={img.url} alt={img.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                       <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-6 text-center">
                          <p className="text-white text-[10px] font-black uppercase tracking-widest leading-relaxed">{img.title}</p>
                       </div>
                    </div>
                 ))}
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white w-32 h-32 rounded-full flex flex-col items-center justify-center shadow-2xl rotate-12">
                    <p className="text-3xl font-black tracking-tighter">20Y+</p>
                    <p className="text-[8px] font-black uppercase tracking-widest">Est. 2006</p>
                 </div>
              </div>
              <div>
                <h2 className="text-5xl md:text-7xl font-black mb-12 tracking-tighter uppercase leading-[1.0]">Factory <br/>Direct <br/>Integrity.</h2>
                <div className="space-y-12">
                   {[
                    { title: "Structural Integrity", desc: "Our engineers focus on the 'clunk' of the magnetic closure—a signature of luxury rigid box quality." },
                    { title: "Eco-Transparency", desc: "100% Recyclable boards and FSC-Certified paper sourced from sustainable forests." },
                    { title: "Final-Mile QC", desc: "A rigorous 3-stage inspection process before any box leaves our production floor." }
                   ].map((item, i) => (
                    <div key={i} className="flex gap-8 group">
                       <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                          <span className="font-black text-xs">0{i+1}</span>
                       </div>
                       <div>
                          <h4 className="text-xl font-black mb-2 uppercase tracking-tight">{item.title}</h4>
                          <p className="text-gray-500 font-medium leading-relaxed">{item.desc}</p>
                       </div>
                    </div>
                   ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Global Reach Section */}
        <section className="py-32 bg-gray-50 border-y border-gray-100">
           <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
              <h2 className="text-3xl md:text-5xl font-black mb-16 tracking-tighter uppercase">Serving 50+ Countries Worldwide</h2>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-10 opacity-30 grayscale items-center">
                 {/* Placeholders for partner logos */}
                 <div className="font-black text-2xl tracking-tighter italic">USA MARKET</div>
                 <div className="font-black text-2xl tracking-tighter italic">EUROPE MARKET</div>
                 <div className="font-black text-2xl tracking-tighter italic">UK BRANDS</div>
                 <div className="font-black text-2xl tracking-tighter italic">AUSTRALIA</div>
                 <div className="font-black text-2xl tracking-tighter italic">CANADA</div>
              </div>
           </div>
        </section>

        {/* Conversion / Contact Form */}
        <section id="contact" className="py-40 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid lg:grid-cols-5 gap-20">
              <div className="lg:col-span-2">
                <h2 className="text-5xl font-black mb-10 tracking-tighter uppercase leading-[1.0]">Start Your <br/>Project.</h2>
                <p className="text-gray-500 font-medium text-lg leading-relaxed mb-12">
                  Ready to elevate your unboxing experience? Select your request type and Andy will provide a factory-direct solution within 24 hours.
                </p>
                <div className="space-y-8">
                   <div className="flex items-center gap-6 group">
                      <div className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center group-hover:bg-green-500 group-hover:text-white transition-all">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                      </div>
                      <a href="https://wa.me/8613699786538" className="text-sm font-black uppercase tracking-widest border-b-2 border-transparent hover:border-green-500 transition-all">WhatsApp Response <br/> <span className="text-[10px] text-gray-400 font-bold">Fastest Response</span></a>
                   </div>
                   <div className="flex items-center gap-6 group">
                      <div className="w-14 h-14 bg-gray-50 rounded-full flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L22 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                      </div>
                      <a href="mailto:andy@saidepackaging.com" className="text-sm font-black uppercase tracking-widest border-b-2 border-transparent hover:border-black transition-all">andy@saidepackaging.com <br/> <span className="text-[10px] text-gray-400 font-bold">24h Email Support</span></a>
                   </div>
                </div>
              </div>

              <div className="lg:col-span-3">
                <form onSubmit={handleSubmit} className="bg-gray-50 p-10 md:p-16 rounded-[3rem] border border-gray-100 shadow-xl">
                  <div className="flex gap-4 mb-10">
                     {['Quote', 'Sample', 'Rush'].map(type => (
                        <button 
                          key={type}
                          type="button"
                          onClick={() => setFormData({...formData, type})}
                          className={`flex-1 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${formData.type === type ? 'bg-black text-white shadow-lg scale-105' : 'bg-white text-gray-400 border border-gray-100 hover:border-black hover:text-black'}`}
                        >
                          {type === 'Rush' ? '⚡ Rush Order' : type === 'Sample' ? '📦 Sample Request' : '💰 Free Quote'}
                        </button>
                     ))}
                  </div>

                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <input 
                      type="text" 
                      required
                      className="w-full px-8 py-5 rounded-2xl bg-white border-transparent focus:ring-2 focus:ring-blue-600 transition shadow-sm"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                    <input 
                      type="email" 
                      required
                      className="w-full px-8 py-5 rounded-2xl bg-white border-transparent focus:ring-2 focus:ring-blue-600 transition shadow-sm"
                      placeholder="Work Email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <input 
                      type="text" 
                      className="w-full px-8 py-5 rounded-2xl bg-white border-transparent focus:ring-2 focus:ring-blue-600 transition shadow-sm"
                      placeholder="WhatsApp / Phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                    <input 
                      type="text" 
                      className="w-full px-8 py-5 rounded-2xl bg-white border-transparent focus:ring-2 focus:ring-blue-600 transition shadow-sm"
                      placeholder="Estimated Quantity (e.g. 500pcs)"
                      value={formData.quantity}
                      onChange={(e) => setFormData({...formData, quantity: e.target.value})}
                    />
                  </div>

                  <div className="mb-10">
                    <textarea 
                      rows={5}
                      className="w-full px-8 py-6 rounded-3xl bg-white border-transparent focus:ring-2 focus:ring-blue-600 transition shadow-sm resize-none"
                      placeholder="Tell us about your box project (Size, Style, Printing needs)..."
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    ></textarea>
                  </div>

                  <button type="submit" className="w-full bg-blue-600 text-white py-6 rounded-full font-black text-xl hover:bg-blue-700 transition-all shadow-xl uppercase tracking-widest transform hover:-translate-y-1">
                    SUBMIT {formData.type.toUpperCase()} REQUEST
                  </button>
                  <p className="mt-8 text-center text-[10px] font-black uppercase tracking-widest text-gray-300">Fast Response Guaranteed within 24 Hours</p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-32 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-20">
          <div className="col-span-2">
            <div className="font-black text-4xl tracking-tighter mb-10 uppercase italic">SIDE PACKAGING</div>
            <div className="space-y-6 text-gray-400 font-medium">
               <p className="max-w-md leading-relaxed">
                20+ years of excellence in manufacturing luxury magnetic closure boxes, mailers, and custom retail packaging solutions.
               </p>
               <div className="pt-6 space-y-4">
                  <p className="text-white font-black text-[10px] uppercase tracking-widest">Office</p>
                  <p className="text-xs">Room 1501, 15/F, SPA Centre, 53-55 Lockhart Road, Wanchai, Hong Kong</p>
                  <p className="text-white font-black text-[10px] uppercase tracking-widest pt-4">Manufacturing Facility</p>
                  <p className="text-xs">No. 28, Industrial Second Road, Dongguan, Guangdong, China</p>
               </div>
            </div>
          </div>
          <div>
            <h4 className="font-black mb-10 uppercase tracking-widest text-[10px] text-gray-500">Quick Links</h4>
            <ul className="space-y-6 text-xs font-black uppercase tracking-widest">
              <li><Link href="/" className="hover:text-blue-500 transition-colors">Home</Link></li>
              <li><a href="#products" className="hover:text-blue-500 transition-colors">Products</a></li>
              <li><a href="#about" className="hover:text-blue-500 transition-colors">Factory</a></li>
              <li><Link href="/blog" className="hover:text-blue-500 transition-colors">Industry Blog</Link></li>
              <li><a href="https://sidehk.m.en.alibaba.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500">Alibaba Official Store</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-black mb-10 uppercase tracking-widest text-[10px] text-gray-500">Follow Our Craft</h4>
            <div className="flex gap-6">
               <a href="https://www.instagram.com/sidepackaging" className="w-12 h-12 rounded-2xl bg-gray-800 flex items-center justify-center hover:bg-pink-600 transition-all">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.245 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.063 1.366-.333 2.633-1.308 3.608-.975.975-2.242 1.245-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.063-2.633-.333-3.608-1.308-.975-.975-1.245-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.245 3.608-1.308 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.277.057-2.31.259-3.14.582-.87.338-1.603.789-2.333 1.519-.73.73-1.18 1.463-1.519 2.333-.323.83-.525 1.863-.582 3.14-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.057 1.277.259 2.31.582 3.14.338.87.789 1.603 1.519 2.333.73.73 1.463 1.18 2.333 1.519.83.323 1.863.525 3.14.582 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.277-.057 2.31-.259 3.14-.582.87-.338 1.603-.789 2.333-1.519.73-.73 1.18-1.463 1.519-2.333.323-.83.525-1.863.582-3.14.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.057-1.277-.259-2.31-.582-3.14-.338-.87-.789-1.603-1.519-2.333-.73-.73-1.463-1.18-2.333-1.519-.83-.323-1.863-.525-3.14-.582-1.28-.058-1.688-.072-4.947-.072zM12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
               </a>
               <a href="#" className="w-12 h-12 rounded-2xl bg-gray-800 flex items-center justify-center hover:bg-blue-700 transition-all">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
               </a>
               <a href="#" className="w-12 h-12 rounded-2xl bg-gray-800 flex items-center justify-center hover:bg-black transition-all border border-gray-700">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.25h-6.657l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.451-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/></svg>
               </a>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-[10px] font-black uppercase tracking-widest text-gray-500 gap-4">
          <p>&copy; 2026 Side Packaging HK Limited. All rights Reserved.</p>
          <div className="flex space-x-8">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">FSC Compliance</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
