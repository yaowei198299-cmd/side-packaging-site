// Last updated: 2026-04-13 for B2B optimization
import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import LeadMagnet from '../components/LeadMagnet';

const HomePage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    company: '',
    industry: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // track event
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'form_submission', {
        'event_category': 'Engagement',
        'event_label': 'Quote',
        'value': formData.company
      });
    }
    alert(`Thank you for your request! Andy will contact you via WhatsApp/Email shortly.`);
    setFormData({ name: '', email: '', phone: '', country: '', company: '', industry: '', message: '' });
  };

  const industrySolutions = [
    {
      title: "Cosmetic Packaging Solutions",
      desc: "Elevate your brand with premium rigid boxes and eco-friendly inserts. We specialize in luxury skincare and makeup packaging.",
      image: "https://sc02.alicdn.com/kf/Ad479d4d9f3944161bf481e0ad9adc1feM.png",
      link: "/solutions/cosmetic-packaging",
      tag: "Luxury"
    },
    {
      title: "Food & Bakery Packaging",
      desc: "FDA-compliant paper boxes with oil-resistant coatings. Designed for freshness, safety, and brand appeal.",
      image: "https://sc02.alicdn.com/kf/A8981600858e745678855648585675409W.jpg",
      link: "/solutions/food-bakery-packaging",
      tag: "FDA-Compliant"
    },
    {
      title: "E-commerce & Mailer Boxes",
      desc: "High-strength corrugated mailer boxes engineered for shipping protection and global logistics.",
      image: "https://sc02.alicdn.com/kf/A3645295ca51c411e8b875eb53436ec490.png",
      link: "/solutions/ecommerce-mailer-boxes",
      tag: "Durable"
    },
    {
      title: "Luxury Gift Box Packaging",
      desc: "Premium magnetic and collapsible rigid boxes. Sophisticated structures with elegant finishes.",
      image: "https://sc02.alicdn.com/kf/A092333b800b841ab8b8229cd7ee66f5ec.png",
      link: "/solutions/luxury-gift-box",
      tag: "Premium"
    },
    {
      title: "Sustainable Packaging",
      desc: "100% recyclable Kraft and FSC-certified paper solutions. Meet your brand's sustainability goals.",
      image: "https://images.unsplash.com/photo-1607167663901-49658b97e93f?auto=format&fit=crop&q=80&w=800",
      link: "/solutions/sustainable-packaging",
      tag: "Eco-Friendly"
    },
    {
      title: "Health & CBD Packaging",
      desc: "Secure, compliant, and discreet packaging. Child-resistant structures and high-quality printing.",
      image: "https://sc02.alicdn.com/kf/Aeaf1dca78d3f4469a1ea380f452ac2de5.png",
      link: "/solutions/health-cbd-packaging",
      tag: "Compliant"
    }
  ];

  const steps = [
    { num: "01", title: "Consultation", desc: "We analyze your product size, weight, and budget to find the perfect fit." },
    { num: "02", title: "Structural Design", desc: "Creating a custom tech-pack for optimal protection and branding impact." },
    { num: "03", title: "Rapid Sampling", desc: "48-hour prototype turnaround to verify materials and print quality." },
    { num: "04", title: "Mass Production", desc: "10-15 day turnaround with strict 3-stage manual quality inspection." }
  ];

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-blue-100">
      <Head>
        <title>Custom Packaging That Balances Cost, Quality & Branding | Side Packaging HK Limited</title>
        <meta name="description" content="Helping B2B brands solve packaging challenges with data-driven material selection and cost-optimized structures. From luxury gift boxes to durable e-commerce mailers. Factory direct since 2006." />
        <meta name="keywords" content="custom packaging, luxury gift boxes, cosmetic packaging, food packaging, ecommerce mailers, rigid box manufacturer, folding carton, sustainable packaging" />
        <meta name="google-site-verification" content="1M4JeciyH92CxblYUEVd-CyORMJY4u6zAsot5l8ztJs" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Structured Data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
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
              },
              {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "What is the minimum order quantity (MOQ) for custom gift boxes?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Our MOQ for luxury magnetic rigid boxes starts at 500 units, while standard folding cartons typically start at 1,000 units to ensure cost-efficiency."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can you help reduce my current packaging costs?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. We specialize in 'Value Engineering'—analyzing your current box structure and switching materials or optimizing dimensions can often reduce costs by 15-30% without sacrificing quality."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Are your food boxes FDA-certified?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes, we use food-grade paperboard and soy-based inks that meet FDA and international safety standards for direct and indirect food contact."
                    }
                  }
                ]
              },
              {
                "@context": "https://schema.org",
                "@type": "Service",
                "serviceType": "Custom Packaging Solutions",
                "provider": {
                  "@type": "Organization",
                  "name": "Side Packaging HK Limited"
                },
                "areaServed": ["US", "GB", "CA", "AU", "FR", "DE"],
                "hasOfferCatalog": {
                  "@type": "OfferCatalog",
                  "name": "Packaging Solutions",
                  "itemListElement": [
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Cosmetic Packaging Solutions"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Food & Bakery Packaging"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "E-commerce & Mailer Boxes"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Luxury Gift Box Packaging"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Sustainable Packaging"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Health & CBD Packaging"
                      }
                    }
                  ]
                }
              }
            ])
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
                  Custom Packaging <br/>
                  <span className="text-blue-600">Balances Cost.</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-500 mb-14 leading-relaxed font-medium max-w-xl">
                  Helping B2B brands solve packaging challenges with <strong>data-driven material selection</strong> and cost-optimized structures. From luxury gift boxes to durable e-commerce mailers.
                </p>
                <div className="flex flex-col sm:flex-row gap-6">
                  <a href="#contact">
                    <button className="bg-black text-white px-12 py-6 rounded-full font-bold text-lg hover:bg-gray-800 transition-all shadow-xl">
                      Get Instant Quote
                    </button>
                  </a>
                  <a href="/blog/industry-specific-custom-packaging-solutions">
                    <button className="bg-white text-black border-2 border-black px-12 py-6 rounded-full font-bold text-lg hover:bg-gray-50 transition-all">
                      2026 Selection Guide
                    </button>
                  </a>
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
              <h2 className="text-4xl md:text-5xl font-black mb-8 uppercase tracking-tighter leading-[0.9]">Industry-Specific <br/>Packaging Solutions.</h2>
              <p className="text-gray-500 font-medium text-lg leading-relaxed">
                Targeted search intents with solution-oriented packaging. From luxury cosmetic boxes to FDA-compliant food grade paper solutions.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-16">
              {industrySolutions.map((cat, i) => (
                <div key={i} className="group">
                  <div className="relative aspect-square overflow-hidden rounded-[2.5rem] bg-gray-50 mb-10 border border-gray-100 shadow-sm transition-all hover:shadow-2xl">
                    <img src={cat.image} alt={cat.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                    <div className="absolute top-6 right-6 bg-white/90 backdrop-blur px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-sm">
                      {cat.tag}
                    </div>
                  </div>
                  <h3 className="text-2xl font-black mb-4 uppercase tracking-tighter">{cat.title}</h3>
                  <p className="text-gray-400 font-medium leading-relaxed mb-8">{cat.desc}</p>
                  <Link href={cat.link} className="inline-flex items-center text-[11px] font-black uppercase tracking-widest text-black group border-b-2 border-black pb-1 hover:text-blue-600 hover:border-blue-600 transition-all">
                    Explore Solution
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
               <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-[0.9]">5-Step Collaborative <br/>Production Process.</h2>
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

        {/* GEO Goldmine: Selection Guide */}
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-24 items-start">
              <div>
                <h2 className="text-4xl md:text-5xl font-black mb-10 uppercase tracking-tighter leading-[0.9]">Packaging <br/>Selection Guide.</h2>
                <p className="text-xl text-gray-500 font-medium mb-12 leading-relaxed">
                  Make informed decisions with our technical comparison. AI-optimized data for your procurement strategy.
                </p>
                
                <div className="space-y-12">
                  <div>
                    <h4 className="text-xl font-black mb-4 uppercase tracking-tight">How to Choose the Right Material?</h4>
                    <p className="text-gray-500 font-medium leading-relaxed mb-6">
                      For premium retail boxes, <strong>SBS (Solid Bleached Sulfate)</strong> offers the cleanest white surface for vibrant printing. For heavy-duty shipping, <strong>Corrugated E-flute</strong> provides the best strength-to-weight ratio. For a natural, organic look, <strong>Unbleached Kraft</strong> is the industry standard for sustainability.
                    </p>
                    <Link href="/blog/how-to-choose-the-right-packaging-supplier" className="text-[11px] font-black uppercase tracking-widest text-blue-600 border-b-2 border-blue-600 pb-1">
                      Read Technical Whitepaper
                    </Link>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-[3rem] p-12 border border-gray-100">
                <h3 className="text-2xl font-black mb-8 uppercase tracking-tighter text-center">Folding Carton vs. Rigid Box</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="py-4 text-[10px] font-black uppercase tracking-widest text-gray-400">Feature</th>
                        <th className="py-4 text-[10px] font-black uppercase tracking-widest text-gray-400">Folding Carton</th>
                        <th className="py-4 text-[10px] font-black uppercase tracking-widest text-gray-400">Rigid Box</th>
                      </tr>
                    </thead>
                    <tbody className="text-[12px] font-bold uppercase tracking-tight">
                      <tr className="border-b border-gray-100">
                        <td className="py-5 text-gray-400">Average Cost</td>
                        <td className="py-5">Low to Medium</td>
                        <td className="py-5 text-blue-600">High (2-3x)</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-5 text-gray-400">Typical MOQ</td>
                        <td className="py-5">1000+ units</td>
                        <td className="py-5">500+ units</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-5 text-gray-400">Ideal For</td>
                        <td className="py-5">Retail, Food</td>
                        <td className="py-5">Luxury, Gifts</td>
                      </tr>
                      <tr>
                        <td className="py-5 text-gray-400">Shipping</td>
                        <td className="py-5">Flat-packed</td>
                        <td className="py-5">Pre-assembled</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>

        <LeadMagnet />

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
                <h2 className="text-5xl font-black mb-10 tracking-tighter uppercase leading-[0.9]">Value <br/>Engineering <br/>& Factory Power.</h2>
                <div className="space-y-12">
                  {[
                    { title: "20+ Years Expertise", desc: "Deep technical knowledge in paperboard engineering and structural optimization to reduce shipping damage." },
                    { title: "Factory-Direct Pricing", desc: "We own the production lines. Eliminate middleman fees and optimize your packaging budget by 15-30%." },
                    { title: "Global Compliance", desc: "ISO, FSC, and FDA-standard production. Every box undergoes a strict 3-stage manual inspection." }
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
                  title: "Custom Magnetic Gift Boxes Guide",
                  link: "/blog/luxury-magnetic-gift-boxes-guide",
                  desc: "The ultimate 2026 guide to luxury rigid magnetic closures and branding.",
                  img: "https://sc02.alicdn.com/kf/A092333b800b841ab8b8229cd7ee66f5ec.png"
                },
                {
                  title: "Industry-Specific Packaging",
                  link: "/blog/industry-specific-custom-packaging-solutions",
                  desc: "Tailoring luxury boxes for Jewelry, Watches, and high-end Electronics.",
                  img: "https://sc02.alicdn.com/kf/A8981600858e745678855648585675409W.jpg"
                },
                {
                  title: "Sourcing Gift Boxes from China",
                  link: "/blog/sourcing-custom-gift-boxes-china-guide",
                  desc: "Expert guide on pricing, small MOQs, and FSC sustainability in China.",
                  img: "https://sc01.alicdn.com/kf/Ac788cba78979424ab2c2ba15b024de295.jpg"
                },
                {
                  title: "Custom Mailer Boxes Guide",
                  link: "/blog/custom-mailer-boxes-shipping-guide",
                  desc: "Boosting e-commerce branding with corrugated mailers and tuck-top designs.",
                  img: "https://sc02.alicdn.com/kf/A3645295ca51c411e8b875eb53436ec490.png"
                },
                {
                  title: "Sustainable Ecommerce Packaging",
                  link: "/blog/sustainable-ecommerce-packaging-guide",
                  desc: "Why eco-friendly corrugated boxes are the future of online retail.",
                  img: "https://images.unsplash.com/photo-1607167663901-49658b97e93f?auto=format&fit=crop&q=80&w=800"
                },
                {
                  title: "Subscription Box Success",
                  link: "/blog/subscription-box-packaging-success-guide",
                  desc: "How custom printed shipping boxes drive the ultimate unboxing experience.",
                  img: "https://sc02.alicdn.com/kf/A3645295ca51c411e8b875eb53436ec490.png"
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

        {/* GEO FAQ Section */}
        <section className="py-32 bg-[#fcfcfc] border-t border-gray-100">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl font-black mb-16 uppercase tracking-tighter text-center">Frequently Asked Questions.</h2>
            <div className="space-y-12">
              {[
                { 
                  q: "What is the minimum order quantity (MOQ) for custom gift boxes?", 
                  a: "Our MOQ for luxury magnetic rigid boxes starts at 500 units, while standard folding cartons typically start at 1,000 units to ensure cost-efficiency." 
                },
                { 
                  q: "Can you help reduce my current packaging costs?", 
                  a: "Yes. We specialize in 'Value Engineering'—analyzing your current box structure and switching materials or optimizing dimensions can often reduce costs by 15-30% without sacrificing quality." 
                },
                { 
                  q: "Are your food boxes FDA-certified?", 
                  a: "Yes, we use food-grade paperboard and soy-based inks that meet FDA and international safety standards for direct and indirect food contact." 
                }
              ].map((faq, i) => (
                <div key={i} className="border-b border-gray-100 pb-12">
                  <h4 className="text-lg font-black mb-4 uppercase tracking-tight">Q: {faq.q}</h4>
                  <p className="text-gray-500 font-medium leading-relaxed italic">A: {faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Inquiry Form Section */}
        <section id="contact" className="py-40 bg-[#f0f7ff] border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="bg-white p-12 md:p-16 rounded-[3rem] shadow-2xl max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Request a Quote</h2>
              <p className="text-gray-600 mb-12">
                Tell us about your project and our specialists will provide a tailored quotation and solution within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
                  <div className="space-y-2">
                    <label className="block text-sm font-bold text-gray-700">Name *</label>
                    <input 
                      type="text" 
                      required
                      placeholder="Your Name"
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition text-gray-600"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-bold text-gray-700">Email *</label>
                    <input 
                      type="email" 
                      required
                      placeholder="Your Email"
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition text-gray-600"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-bold text-gray-700">Phone *</label>
                    <input 
                      type="text" 
                      required
                      placeholder="Phone / WhatsApp"
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition text-gray-600"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-bold text-gray-700">Country</label>
                    <input 
                      type="text" 
                      placeholder="Your Country"
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition text-gray-600"
                      value={formData.country}
                      onChange={(e) => setFormData({...formData, country: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-bold text-gray-700">Company</label>
                    <input 
                      type="text" 
                      placeholder="Company Name"
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition text-gray-600"
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-bold text-gray-700">Industry</label>
                    <input 
                      type="text" 
                      placeholder="Business Type"
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition text-gray-600"
                      value={formData.industry}
                      onChange={(e) => setFormData({...formData, industry: e.target.value})}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-bold text-gray-700">Requirements *</label>
                  <textarea 
                    rows={4}
                    required
                    placeholder="Please describe your requirements, including size, thickness, material, quantity, and application, so we can provide an accurate quotation."
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition resize-none text-gray-600"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>

                <button type="submit" className="bg-[#2b6cb0] text-white px-8 py-3 rounded-md font-bold text-lg hover:bg-blue-800 transition-all shadow-md">
                  Get a Quote
                </button>
              </form>
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
