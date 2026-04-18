// Last updated: 2026-04-13 for B2B optimization
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
    type: 'Quote' 
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // track event
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'form_submission', {
        'event_category': 'Engagement',
        'event_label': formData.type,
        'value': formData.quantity
      });
    }
    alert(`Thank you for your ${formData.type} request! Andy will contact you via WhatsApp/Email shortly.`);
    setFormData({ name: '', email: '', phone: '', message: '', quantity: '', type: 'Quote' });
  };

  const categories = [
    {
      title: "Luxury Magnetic Boxes",
      desc: "Premium rigid gift boxes with hidden magnetic closures. Built for luxury unboxing.",
      image: "https://sc02.alicdn.com/kf/A092333b800b841ab8b8229cd7ee66f5ec.png",
      link: "/products/custom-magnetic-gift-boxes",
      tag: "Best Seller"
    },
    {
      title: "Custom Mailer Boxes",
      desc: "Durable branded shipping boxes for e-commerce and retail subscription brands.",
      image: "https://sc02.alicdn.com/kf/A3645295ca51c411e8b875eb53436ec490.png",
      link: "/products/custom-mailer-boxes",
      tag: "Eco-Friendly"
    },
    {
      title: "Cosmetic Packaging",
      desc: "High-end paper boxes for skincare, perfume, and makeup brands. Custom finishes.",
      image: "https://sc02.alicdn.com/kf/Ad479d4d9f3944161bf481e0ad9adc1feM.png",
      link: "/products/cosmetic-packaging-boxes",
      tag: "New Arrival"
    },
    {
      title: "Jewelry & Watch Boxes",
      desc: "Elegant rigid boxes for luxury watches and jewelry. Custom velvet inserts.",
      image: "https://sc02.alicdn.com/kf/Aeaf1dca78d3f4469a1ea380f452ac2de5.png",
      link: "/products/jewelry-packaging-boxes",
      tag: "High End"
    },
    {
      title: "Apparel Gift Boxes",
      desc: "Premium large rigid boxes for clothing, shoes, and textiles. Strong & stylish.",
      image: "https://sc02.alicdn.com/kf/A7b2cac8d4efe401f9df1793bf9071d0bu.png",
      link: "/products/apparel-packaging-boxes",
      tag: "Wholesale"
    },
    {
      title: "Luxury Paper Bags",
      desc: "Custom printed boutique shopping bags with premium handles and finishes.",
      image: "https://sc02.alicdn.com/kf/Abb05fa0a57e944bf85b8889811c248a4w.png",
      link: "/products/custom-paper-bags",
      tag: "Retail Ready"
    }
  ];

  const steps = [
    { num: "01", title: "Free Quote", desc: "Send your requirements and get a factory-direct price within 24 hours." },
    { num: "02", title: "3D Mockup", desc: "We provide a professional 3D design to visualise your packaging before sampling." },
    { num: "03", title: "Rapid Sample", desc: "Get a physical prototype in 3-5 days to confirm material and magnet strength." },
    { num: "04", title: "Bulk Production", desc: "10-15 day manufacturing lead time with strict quality control on every box." }
  ];

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-blue-100">
      <Head>
        <title>Side Packaging HK Limited - Official Factory Portal | Custom Luxury Gift Boxes & Mailers Manufacturer</title>
        <meta name="description" content="Side Packaging: Factory Direct Custom Packaging & Luxury Gift Boxes. FSC Certified manufacturer offering Wholesale Price and Free Samples. Custom magnetic boxes, mailers & rigid packaging since 2006." />
        <meta name="keywords" content="Side Packaging HK Limited, custom magnetic box, luxury gift packaging, rigid box manufacturer, custom mailers, factory direct China" />
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
              "description": "China's leading B2B manufacturer of premium rigid gift boxes and luxury retail packaging. Factory direct since 2006.",
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
              "hasCertification": ["FSC", "BSCI", "ISO 9001"]
            })
          }}
        />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX'); // Placeholder GA4 ID
            `,
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
      </a>

      {/* Navigation */}
      <nav className="border-b border-gray-100 bg-white/95 backdrop-blur-md sticky top-0 z-[80]">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="text-2xl font-black tracking-tighter uppercase italic">Side Packaging</Link>
          
          <div className="hidden lg:flex items-center space-x-8 text-[11px] font-bold uppercase tracking-widest text-gray-500">
            <Link href="/" className="text-black border-b-2 border-black pb-1">Home</Link>
            <a href="#products" className="hover:text-black transition-colors">Custom Boxes</a>
            <a href="#process" className="hover:text-black transition-colors">How it Works</a>
            <a href="#factory" className="hover:text-black transition-colors">Factory</a>
            <Link href="/blog" className="hover:text-black transition-colors">Blog</Link>
          </div>

          <div className="flex items-center space-x-6">
            <a href="#contact" className="hidden sm:block text-[11px] font-bold uppercase tracking-widest border-b-2 border-transparent hover:border-black transition-all">Get a Quote</a>
            <a href="#contact">
              <button className="bg-black text-white px-8 py-3.5 rounded-full text-[11px] font-bold uppercase tracking-widest hover:bg-gray-800 transition-all shadow-sm">
                Request Samples
              </button>
            </a>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section - LuxoPack Inspired */}
        <section className="relative pt-32 pb-48 overflow-hidden bg-[#f9f9f9]">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-6">
                <div className="inline-block bg-white border border-gray-200 px-4 py-1.5 rounded-full mb-8 shadow-sm">
                   <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                    <span className="text-blue-600">China's #1</span> B2B Manufacturing Facility
                   </p>
                </div>
                <h1 className="text-6xl md:text-[5.5rem] font-black leading-[0.95] mb-10 tracking-tighter uppercase">
                  Luxury Packaging <br/>
                  <span className="text-blue-600">Factory Direct.</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-500 mb-14 leading-relaxed font-medium max-w-xl">
                  Custom rigid gift boxes, magnetic boxes and mailers. From <strong>MOQ 100pcs</strong> with 10-15 day global turnaround.
                </p>
                <div className="flex flex-col sm:flex-row gap-6">
                  <a href="#contact">
                    <button className="bg-black text-white px-12 py-6 rounded-full font-bold text-lg hover:bg-gray-800 transition-all shadow-xl">
                      Get Free Quote
                    </button>
                  </a>
                  <div className="flex items-center space-x-4">
                     <div className="flex -space-x-2">
                        {[1,2,3].map(i => (
                          <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-gray-100">
                            <img src={`https://i.pravatar.cc/100?img=${i+20}`} alt="Client" />
                          </div>
                        ))}
                     </div>
                     <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Trusted by 800+ Global Brands</p>
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-6 relative">
                <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl bg-white p-4">
                  <img 
                    src="https://sc02.alicdn.com/kf/A092333b800b841ab8b8229cd7ee66f5ec.png" 
                    alt="Luxury Magnetic Box" 
                    className="w-full h-auto transform hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-8 right-8 bg-blue-600 text-white px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg">
                    Best Seller
                  </div>
                </div>
                {/* Visual Accent */}
                <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-blue-600/10 rounded-full blur-[80px]"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Strip */}
        <section className="py-20 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { label: "Minimum Order", value: "100 Pcs" },
              { label: "Sampling Time", value: "3-5 Days" },
              { label: "Bulk Lead Time", value: "10-15 Days" },
              { label: "Global Shipping", value: "DDP Ready" }
            ].map((f, i) => (
              <div key={i}>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-2">{f.label}</p>
                <p className="text-2xl font-black uppercase tracking-tight">{f.value}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications (Visual) */}
        <section className="py-16 bg-[#fcfcfc] border-b border-gray-100">
           <div className="max-w-5xl mx-auto px-6 text-center">
              <img 
                src="https://sc01.alicdn.com/kf/Aa33381bfa06d472cad56bc460860626eF.png" 
                alt="Side Packaging Certifications - FSC, BSCI, ISO 9001, SGS" 
                className="mx-auto max-w-full h-auto grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
              />
           </div>
        </section>

        {/* Product Collection */}
        <section id="products" className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-24 text-center max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-black mb-8 uppercase tracking-tighter leading-[0.9]">Premium Custom <br/>Packaging Solutions.</h2>
              <p className="text-gray-500 font-medium text-lg leading-relaxed">
                From high-end magnetic rigid boxes to sustainable e-commerce mailers, we deliver factory-direct quality with meticulous attention to detail.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-16">
              {categories.map((cat, i) => (
                <div key={i} className="group">
                  <div className="relative aspect-square overflow-hidden rounded-[2.5rem] bg-gray-50 mb-10 border border-gray-100 shadow-sm transition-all hover:shadow-2xl">
                    <img src={cat.image} alt={cat.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  <h3 className="text-2xl font-black mb-4 uppercase tracking-tighter">{cat.title}</h3>
                  <p className="text-gray-400 font-medium leading-relaxed mb-8">{cat.desc}</p>
                  <Link href={cat.link} className="inline-flex items-center text-[11px] font-black uppercase tracking-widest text-black group border-b-2 border-black pb-1 hover:text-blue-600 hover:border-blue-600 transition-all">
                    View Specifications
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it Works - LuxoPack Step Style */}
        <section id="process" className="py-32 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-10">
               <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-[0.9]">Your Vision to <br/>Production in 4 Steps.</h2>
               <div className="hidden md:block w-32 h-1 bg-black rounded-full"></div>
            </div>
            
            <div className="grid md:grid-cols-4 gap-12">
              {steps.map((step, i) => (
                <div key={i} className="relative p-10 bg-white rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all">
                  <span className="text-5xl font-black text-gray-100 absolute top-8 right-8">{step.num}</span>
                  <h4 className="text-xl font-black mb-4 uppercase tracking-tight relative z-10">{step.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed relative z-10">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Factory Heritage */}
        <section id="factory" className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-24 text-center max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-black mb-8 uppercase tracking-tighter leading-[0.9]">Factory Integrity & <br/>Global Standards.</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mt-16 border-y border-gray-100 py-16">
                 {[
                   { label: "Production Space", value: "20,000m²+" },
                   { label: "Daily Capacity", value: "15,000+ Boxes" },
                   { label: "Skilled Artisans", value: "200+" },
                   { label: "Export Markets", value: "45+ Countries" }
                 ].map((stat, i) => (
                   <div key={i}>
                      <p className="text-4xl font-black tracking-tighter mb-2">{stat.value}</p>
                      <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">{stat.label}</p>
                   </div>
                 ))}
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="rounded-3xl overflow-hidden aspect-square shadow-lg">
                      <img src="https://sc01.alicdn.com/kf/Ac788cba78979424ab2c2ba15b024de295.jpg" alt="Production" className="w-full h-full object-cover" />
                    </div>
                    <div className="rounded-3xl overflow-hidden aspect-[4/5] shadow-lg">
                      <img src="https://sc01.alicdn.com/kf/Af1c888b0929d45d08bbc6d245ea133848.jpg" alt="Process" className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div className="space-y-4 pt-12">
                    <div className="rounded-3xl overflow-hidden aspect-[4/5] shadow-lg">
                      <img src="https://sc01.alicdn.com/kf/A893e5006c09948eb8d8e65b46231e98fi.jpg" alt="Craftsmanship" className="w-full h-full object-cover" />
                    </div>
                    <div className="rounded-3xl overflow-hidden aspect-square shadow-lg">
                      <img src="https://sc01.alicdn.com/kf/Af794f5525f534d2f8a1998c045fce0066.jpg" alt="Inspection" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:pl-12">
                <h2 className="text-5xl font-black mb-10 tracking-tighter uppercase leading-[0.9]">20+ Years of <br/>Manufacturing <br/>Integrity.</h2>
                <div className="space-y-12">
                  {[
                    { title: "Direct Ownership", desc: "We are not a middleman. We own the production lines, ensuring consistent quality and better pricing for your brand." },
                    { title: "FSC Certification", desc: "Our commitment to sustainability is verified. We source materials from responsibly managed forests." },
                    { title: "Quality Guarantee", desc: "Every box undergoes a 3-stage manual inspection before shipment to ensure zero defects." }
                  ].map((item, i) => (
                    <div key={i}>
                      <h4 className="text-xl font-black mb-2 uppercase tracking-tight">{item.title}</h4>
                      <p className="text-gray-500 font-medium leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Expert Insights */}
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-[0.9] mb-6">Expert <br/>Insights.</h2>
                <p className="text-gray-500 font-medium max-w-md">The latest trends and guides on luxury packaging, global sourcing, and brand strategy.</p>
              </div>
              <Link href="/blog" className="text-[11px] font-black uppercase tracking-widest border-b-2 border-black pb-1 hover:text-blue-600 hover:border-blue-600 transition-all">View All Articles</Link>
            </div>
            
            <div className="grid md:grid-cols-3 gap-12">
              {[
                {
                  title: "2026 Packaging Trends Whitepaper",
                  link: "/blog/2026-packaging-trends-whitepaper",
                  desc: "Future-proof your brand with the latest luxury unboxing trends and material innovations.",
                  img: "https://images.unsplash.com/photo-1607167663901-49658b97e93f?auto=format&fit=crop&q=80&w=800"
                },
                {
                  title: "Sourcing Custom Packaging from China",
                  link: "/blog/sourcing-custom-packaging-from-china-guide",
                  desc: "A complete B2B guide to finding reliable manufacturers and ensuring quality control.",
                  img: "https://sc01.alicdn.com/kf/Ac788cba78979424ab2c2ba15b024de295.jpg"
                },
                {
                  title: "FSC Certified Luxury Packaging Guide",
                  link: "/blog/fsc-certified-luxury-packaging-guide",
                  desc: "Why FSC certification is the gold standard for premium sustainable brands in 2026.",
                  img: "https://sc01.alicdn.com/kf/Aa33381bfa06d472cad56bc460860626eF.png"
                },
                {
                  title: "Recyclable Magnetic Gift Boxes Design",
                  link: "/blog/recyclable-magnetic-gift-boxes-design-guide",
                  desc: "Innovative designs that combine the luxury of magnets with 100% recyclability.",
                  img: "https://sc02.alicdn.com/kf/A092333b800b841ab8b8229cd7ee66f5ec.png"
                },
                {
                  title: "USA Customs Duties & Import Guide",
                  link: "/blog/usa-customs-duties-importing-packaging-china-guide",
                  desc: "Essential tax and duty information for US brands importing custom packaging.",
                  img: "https://sc01.alicdn.com/kf/A893e5006c09948eb8d8e65b46231e98fi.jpg"
                }
              ].map((blog, i) => (
                <Link key={i} href={blog.link} className="group">
                  <div className="relative aspect-[16/9] overflow-hidden rounded-[2.5rem] bg-gray-100 mb-8 shadow-sm group-hover:shadow-2xl transition-all duration-500">
                    <img src={blog.img} alt={blog.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <h3 className="text-xl font-black uppercase tracking-tighter mb-4 group-hover:text-blue-600 transition-colors line-clamp-2">{blog.title}</h3>
                  <p className="text-gray-400 font-medium leading-relaxed mb-6 line-clamp-2">{blog.desc}</p>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-black border-b border-black pb-1 group-hover:text-blue-600 group-hover:border-blue-600">Read More →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Inquiry Form Section */}
        <section id="contact" className="py-40 bg-gray-50 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-6">
             <div className="grid lg:grid-cols-2 gap-32">
                <div>
                   <h2 className="text-5xl md:text-6xl font-black mb-10 uppercase tracking-tighter leading-[0.9]">Ready to Build <br/>Your Brand?</h2>
                   <p className="text-xl text-gray-500 font-medium mb-16 leading-relaxed">
                     Let's start your project today. Get a factory-direct quote or request a custom sample pack for your next launch.
                   </p>
                   
                   <div className="space-y-10">
                      <div className="flex items-center space-x-6 group">
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md group-hover:bg-green-500 group-hover:text-white transition-all">
                           <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                        </div>
                        <div>
                           <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">WhatsApp Support</p>
                           <p className="font-bold">+86 136 9978 6538</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-6 group">
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md group-hover:bg-black group-hover:text-white transition-all">
                           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L22 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                        </div>
                        <div>
                           <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Direct Email</p>
                           <p className="font-bold">andy@saidepackaging.com</p>
                        </div>
                      </div>
                   </div>
                </div>

                <div>
                   <form onSubmit={handleSubmit} className="space-y-8 bg-white p-12 md:p-16 rounded-[3rem] shadow-2xl">
                      <div className="flex gap-4">
                        {['Quote', 'Sample'].map(type => (
                          <button 
                            key={type}
                            type="button"
                            onClick={() => setFormData({...formData, type})}
                            className={`flex-1 py-4 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${formData.type === type ? 'bg-black text-white shadow-xl scale-105' : 'bg-gray-50 text-gray-400 border border-transparent hover:border-black hover:text-black'}`}
                          >
                            {type === 'Quote' ? '💰 Free Quote' : '📦 Sample Request'}
                          </button>
                        ))}
                      </div>

                      <div className="grid md:grid-cols-2 gap-8">
                        <input 
                          type="text" 
                          required
                          placeholder="Full Name"
                          className="w-full px-8 py-5 rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:ring-2 focus:ring-black transition"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                        />
                        <input 
                          type="email" 
                          required
                          placeholder="Work Email"
                          className="w-full px-8 py-5 rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:ring-2 focus:ring-black transition"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                        />
                      </div>

                      <input 
                        type="text" 
                        placeholder="Estimated Quantity"
                        className="w-full px-8 py-5 rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:ring-2 focus:ring-black transition"
                        value={formData.quantity}
                        onChange={(e) => setFormData({...formData, quantity: e.target.value})}
                      />

                      <textarea 
                        rows={4}
                        placeholder="Tell us about your project..."
                        className="w-full px-8 py-6 rounded-3xl bg-gray-50 border-transparent focus:bg-white focus:ring-2 focus:ring-black transition resize-none"
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                      ></textarea>

                      <button type="submit" className="w-full bg-black text-white py-6 rounded-full font-bold text-xl hover:bg-gray-800 transition-all shadow-xl uppercase tracking-widest">
                        Submit Request
                      </button>
                      <p className="text-center text-[10px] font-bold uppercase tracking-widest text-gray-300">Fast 24h Factory Reply</p>
                   </form>
                </div>
             </div>
          </div>
        </section>
      </main>

      {/* Sticky Quick Inquiry Button */}
      <div className="fixed bottom-10 right-10 z-[100] flex flex-col items-end gap-4">
        <a 
          href="https://wa.me/8613699786538" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-[#25D366] text-white p-5 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center gap-3 font-bold text-sm"
        >
          <span className="hidden md:inline pl-2 uppercase tracking-widest text-[10px]">Chat on WhatsApp</span>
          <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
            <div className="w-3 h-3 bg-[#25D366] rounded-full"></div>
          </div>
        </a>
        <a 
          href="#contact"
          className="bg-black text-white px-8 py-5 rounded-full shadow-2xl hover:scale-110 transition-transform font-black text-[10px] uppercase tracking-widest"
        >
          Quick Inquiry
        </a>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-32 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
          <div className="col-span-1">
            <Link href="/" className="text-3xl font-black tracking-tighter uppercase italic mb-8 block">Side Packaging</Link>
            <p className="text-gray-400 font-medium max-w-sm leading-relaxed mb-10">
              China's premium B2B manufacturer for high-end custom rigid boxes, magnetic gift boxes and luxury mailers. Factory direct since 2006.
            </p>
            <div className="flex gap-4">
               {['instagram', 'linkedin', 'twitter'].map(social => (
                 <a key={social} href="#" className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center hover:bg-black hover:text-white transition-all">
                    <span className="sr-only">{social}</span>
                    <div className="w-4 h-4 bg-current rounded-sm"></div>
                 </a>
               ))}
            </div>
          </div>
          <div>
            <h4 className="font-bold text-[10px] uppercase tracking-widest mb-10 text-gray-400">Products</h4>
            <ul className="space-y-6 text-[11px] font-bold uppercase tracking-widest">
               <li><Link href="/products/custom-magnetic-gift-boxes" className="hover:text-blue-600 transition-colors">Magnetic Gift Boxes</Link></li>
               <li><Link href="/products/custom-mailer-boxes" className="hover:text-blue-600 transition-colors">Mailer Boxes</Link></li>
               <li><Link href="/products/cosmetic-packaging-boxes" className="hover:text-blue-600 transition-colors">Cosmetic Boxes</Link></li>
               <li><Link href="/products/jewelry-packaging-boxes" className="hover:text-blue-600 transition-colors">Jewelry Boxes</Link></li>
               <li><Link href="/products/custom-paper-bags" className="hover:text-blue-600 transition-colors">Luxury Paper Bags</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-[10px] uppercase tracking-widest mb-10 text-gray-400">Company</h4>
            <ul className="space-y-6 text-[11px] font-bold uppercase tracking-widest">
               <li><a href="#factory" className="hover:text-blue-600 transition-colors">Our Factory</a></li>
               <li><a href="#process" className="hover:text-blue-600 transition-colors">How it Works</a></li>
               <li><Link href="/blog" className="hover:text-blue-600 transition-colors">Industry Blog</Link></li>
               <li><a href="https://sidehk.m.en.alibaba.com/" className="text-blue-600">Alibaba Store</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-[10px] uppercase tracking-widest mb-10 text-gray-400">Contact</h4>
            <div className="space-y-6 text-[11px] font-medium leading-relaxed text-gray-500">
               <p>Room 1501, 15/F, SPA Centre, <br/>53-55 Lockhart Road, Wanchai, Hong Kong</p>
               <p>andy@saidepackaging.com</p>
               <p>+86 136 9978 6538</p>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center text-[9px] font-bold uppercase tracking-widest text-gray-300 gap-4">
           <p>&copy; 2026 Side Packaging HK Limited. FSC Certified.</p>
           <div className="flex space-x-8">
             <a href="#">Privacy</a>
             <a href="#">Terms</a>
             <a href="#">FSC Compliance</a>
           </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
