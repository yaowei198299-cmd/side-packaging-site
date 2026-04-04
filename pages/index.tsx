import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

const HomePage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    quantity: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send data to an API
    alert("Thank you for your inquiry! Andy will contact you shortly.");
    setFormData({ name: '', email: '', phone: '', message: '', quantity: '' });
  };

  const categories = [
    {
      title: "Magnetic Gift Boxes",
      desc: "Premium rigid boxes with hidden magnetic closures. Perfect for luxury retail.",
      image: "https://sc02.alicdn.com/kf/A092333b800b841ab8b8229cd7ee66f5ec.png",
      link: "/products/custom-magnetic-box",
      tag: "Best Seller"
    },
    {
      title: "Custom Mailer Boxes",
      desc: "Eco-friendly corrugated mailers for e-commerce, subscriptions, and shipping.",
      image: "https://sc02.alicdn.com/kf/Aff82ba8d177b4ad5a6e78e165082b88fF.png",
      link: "#",
      tag: "Eco-Friendly"
    },
    {
      title: "Luxury Rigid Boxes",
      desc: "Classic two-piece lid and base boxes for jewelry, electronics, and gifts.",
      image: "https://sc02.alicdn.com/kf/Aa102fe113883456d96481350b3e32950c.png",
      link: "#",
      tag: "Premium"
    }
  ];

  const benefits = [
    { title: "Factory Direct Pricing", desc: "Skip the middlemen and buy directly from our China-based manufacturing facility." },
    { title: "Low MOQ (100pcs)", desc: "Start small with just 100 units for custom printed magnetic and rigid gift boxes." },
    { title: "Fast Lead Times", desc: "Production completed in 10-15 business days with global door-to-door shipping." },
    { title: "FSC-Certified Materials", desc: "Commitment to sustainability using eco-friendly and responsibly sourced paper." }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-blue-100">
      <Head>
        <title>LuxoPack | Custom Gift Box Manufacturer China — Luxury Packaging Factory Direct</title>
        <meta name="description" content="China's #1 B2B manufacturer of premium rigid gift boxes, magnetic boxes & custom luxury packaging. MOQ 100pcs, 10-15 day lead time. Factory direct pricing." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navigation */}
      <nav className="border-b border-gray-100 sticky top-0 bg-white/95 backdrop-blur-md z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
          <div className="font-black text-2xl tracking-tighter italic shrink-0 select-none">SIDE PACKAGING</div>
          
          <div className="hidden lg:flex items-center space-x-10 text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400">
            <Link href="/" className="text-black border-b-2 border-black py-1">Home</Link>
            <Link href="/products/custom-magnetic-box" className="hover:text-black transition-colors">Products</Link>
            <a href="#about" className="hover:text-black transition-colors">About Us</a>
            <a href="#contact" className="hover:text-black transition-colors">Contact</a>
          </div>

          <div className="flex items-center space-x-6 shrink-0">
            <a href="https://wa.me/8613699786538" target="_blank" rel="noopener noreferrer" className="hidden md:flex items-center text-[10px] font-bold uppercase tracking-widest text-green-600 hover:opacity-80 transition">
              WhatsApp: +86 13699786538
            </a>
            <a href="#contact">
              <button className="bg-black text-white px-8 py-3.5 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-gray-800 transition-all transform hover:-translate-y-0.5 shadow-lg">
                GET A FREE QUOTE
              </button>
            </a>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative pt-20 pb-32 overflow-hidden bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
            <div className="max-w-4xl">
              <h1 className="text-6xl md:text-8xl font-black text-gray-900 leading-[1.0] mb-8 tracking-tighter">
                Luxury Custom Packaging.<br/>
                <span className="text-gray-400">Factory Direct Pricing.</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-500 mb-12 leading-relaxed max-w-3xl font-medium">
                China's leading manufacturer of premium rigid gift boxes, magnetic closure boxes, and custom retail packaging. 
                <span className="block mt-4 text-black font-black uppercase tracking-widest text-sm">MOQ 100pcs | 10-15 Day Lead Time | FSC-Certified</span>
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <a href="#contact">
                  <button className="bg-black text-white px-12 py-6 rounded-full font-black text-lg hover:bg-gray-800 transition-all shadow-xl flex items-center justify-center group">
                    GET YOUR QUOTE NOW
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-3 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </a>
                <a href="#products">
                  <button className="bg-white border-2 border-gray-200 text-gray-900 px-12 py-6 rounded-full font-black text-lg hover:border-black transition-all flex items-center justify-center">
                    EXPLORE COLLECTIONS
                  </button>
                </a>
              </div>
            </div>
          </div>
          
          {/* Abstract geometric decoration */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-white clip-path-polygon hidden lg:block">
            <img 
              src="https://sc02.alicdn.com/kf/A092333b800b841ab8b8229cd7ee66f5ec.png" 
              alt="Luxury Packaging" 
              className="w-full h-full object-cover opacity-20 grayscale"
            />
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="py-24 bg-white border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid md:grid-cols-4 gap-12">
              {benefits.map((benefit, i) => (
                <div key={i}>
                  <h4 className="text-lg font-black mb-4 uppercase tracking-tighter">{benefit.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Product Collections */}
        <section id="products" className="py-32 max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-20 text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6 uppercase">Our Core Expertise</h2>
            <p className="text-gray-500 font-medium text-lg">We specialize in high-end rigid construction that elevates your brand's unboxing experience.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {categories.map((cat, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative aspect-square overflow-hidden rounded-2xl bg-gray-50 mb-8 border border-gray-100 transition-all hover:shadow-xl">
                  <img src={cat.image} alt={cat.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute top-6 left-6">
                    <span className="bg-black text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest">
                      {cat.tag}
                    </span>
                  </div>
                </div>
                <h3 className="text-2xl font-black mb-3">{cat.title}</h3>
                <p className="text-gray-400 font-medium leading-relaxed mb-6">{cat.desc}</p>
                <Link href={cat.link} className="text-black font-black text-sm border-b-2 border-black pb-1 hover:text-gray-400 hover:border-gray-400 transition">
                  CUSTOMIZE THIS BOX →
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Factory Trust Section */}
        <section id="about" className="bg-gray-900 py-32 text-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <div>
                <h2 className="text-5xl font-black mb-10 leading-[1.1] tracking-tighter uppercase italic">
                  20 Years of <br/>Manufacturing <br/>Excellence.
                </h2>
                <div className="space-y-10">
                  <div className="border-l-4 border-white pl-8 py-2">
                    <h4 className="text-xl font-black mb-2 uppercase">Custom Engineering</h4>
                    <p className="text-gray-400">Our structural designers work with your product to create the perfect fitment and unboxing sound.</p>
                  </div>
                  <div className="border-l-4 border-gray-700 pl-8 py-2">
                    <h4 className="text-xl font-black mb-2 uppercase">Global Logistics</h4>
                    <p className="text-gray-400">We handle the entire process from our China factory to your warehouse in the USA, UK, or EU.</p>
                  </div>
                  <div className="border-l-4 border-gray-700 pl-8 py-2">
                    <h4 className="text-xl font-black mb-2 uppercase">Quality Control</h4>
                    <p className="text-gray-400">Every single box undergoes rigorous inspection to ensure perfect magnetic alignment and surface finish.</p>
                  </div>
                </div>
              </div>
              <div className="relative aspect-[4/5] bg-gray-800 rounded-3xl overflow-hidden shadow-2xl">
                 <img 
                   src="https://sc02.alicdn.com/kf/A092333b800b841ab8b8229cd7ee66f5ec.png" 
                   className="w-full h-full object-cover opacity-60"
                   alt="Factory Interior"
                 />
                 <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                       <p className="text-8xl font-black tracking-tighter mb-2">800+</p>
                       <p className="text-sm font-bold uppercase tracking-[0.4em]">Brands Trusted Us</p>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact" className="py-32 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-black mb-6 tracking-tighter uppercase">Request A Free Quote</h2>
              <p className="text-gray-500 font-medium text-lg">Send us your project details and Andy will provide a factory-direct quote within 24 hours.</p>
            </div>
            
            <form onSubmit={handleSubmit} className="bg-white p-10 md:p-16 rounded-[3rem] shadow-2xl border border-gray-100">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-3">Full Name</label>
                  <input 
                    type="text" 
                    required
                    className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-black transition"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-3">Work Email</label>
                  <input 
                    type="email" 
                    required
                    className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-black transition"
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-3">WhatsApp / Phone</label>
                  <input 
                    type="text" 
                    className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-black transition"
                    placeholder="+1 234 567 890"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-3">Estimated Quantity</label>
                  <input 
                    type="text" 
                    className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-black transition"
                    placeholder="e.g. 500 pcs"
                    value={formData.quantity}
                    onChange={(e) => setFormData({...formData, quantity: e.target.value})}
                  />
                </div>
              </div>

              <div className="mb-10">
                <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-3">Project Details (Size, Style, Printing)</label>
                <textarea 
                  rows={4}
                  className="w-full px-6 py-4 rounded-3xl bg-gray-50 border-none focus:ring-2 focus:ring-black transition resize-none"
                  placeholder="Tell us about your box requirements..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>

              <button type="submit" className="w-full bg-black text-white py-6 rounded-full font-black text-xl hover:bg-gray-800 transition shadow-xl uppercase tracking-widest">
                SEND QUOTE REQUEST
              </button>
            </form>

            <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-10 opacity-50">
               <div className="flex items-center gap-2">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path></svg>
                  <span className="text-xs font-bold uppercase tracking-widest">Free Consultation</span>
               </div>
               <div className="flex items-center gap-2">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path></svg>
                  <span className="text-xs font-bold uppercase tracking-widest">Factory Direct Price</span>
               </div>
               <div className="flex items-center gap-2">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path></svg>
                  <span className="text-xs font-bold uppercase tracking-widest">Worldwide Shipping</span>
               </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
          <div className="col-span-2">
            <div className="font-black text-3xl tracking-tighter mb-6 uppercase">SIDE PACKAGING</div>
            <p className="text-gray-400 max-w-sm font-medium leading-relaxed">
              Premium manufacturer of custom magnetic closure gift boxes and luxury rigid packaging solutions. China-based factory direct excellence.
            </p>
          </div>
          <div>
            <h4 className="font-black mb-6 uppercase tracking-widest text-xs text-gray-400">Navigation</h4>
            <ul className="space-y-4 text-sm font-bold text-gray-500">
              <li><Link href="/" className="hover:text-black">Home</Link></li>
              <li><Link href="/products/custom-magnetic-box" className="hover:text-black">Products</Link></li>
              <li><a href="#about" className="hover:text-black">About Our Factory</a></li>
              <li><a href="#contact" className="hover:text-black">Request Quote</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-black mb-6 uppercase tracking-widest text-xs text-gray-400">Contact Andy</h4>
            <ul className="space-y-4 text-sm font-bold text-gray-500">
              <li><a href="mailto:andy@saidepackaging.com" className="hover:text-black transition-colors">andy@saidepackaging.com</a></li>
              <li><a href="https://wa.me/8613699786538" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-green-500 transition-colors group">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                WhatsApp Chat
              </a></li>
              <li><a href="https://sidehk.m.en.alibaba.com/" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors underline underline-offset-4">Alibaba Official Store</a></li>
              <li>Side Packaging HK Limited</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t flex flex-col md:flex-row justify-between items-center text-[10px] font-black uppercase tracking-widest text-gray-300 gap-4">
          <p>&copy; 2026 Side Packaging HK Limited. All rights Reserved.</p>
          <div className="flex space-x-8">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Shipping Info</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
