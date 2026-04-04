import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const HomePage = () => {
  const categories = [
    {
      title: "Magnetic Closure Boxes",
      desc: "Luxury gift packaging with high-strength invisible magnets.",
      image: "https://sc02.alicdn.com/kf/A092333b800b841ab8b8229cd7ee66f5ec.png",
      link: "/products/custom-magnetic-box",
      tag: "Best Seller"
    },
    {
      title: "Custom Mailer Boxes",
      desc: "Eco-friendly corrugated boxes for e-commerce & subscriptions.",
      image: "https://sc02.alicdn.com/kf/Aff82ba8d177b4ad5a6e78e165082b88fF.png",
      link: "#",
      tag: "Eco-Friendly"
    },
    {
      title: "Collapsible Gift Boxes",
      desc: "Space-saving designs that fold flat for shipping and storage.",
      image: "https://sc02.alicdn.com/kf/Aa102fe113883456d96481350b3e32950c.png",
      link: "#",
      tag: "Space Saver"
    }
  ];

  const stats = [
    { label: "Years of Experience", value: "20+" },
    { label: "Global Clients", value: "800+" },
    { label: "Annual Capacity", value: "10M+" },
    { label: "Certifications", value: "FSC/BSCI" }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-blue-100">
      <Head>
        <title>Side Packaging HK | Custom Magnetic Closure Boxes Wholesale Manufacturer</title>
        <meta name="description" content="Leading manufacturer of custom magnetic closure boxes wholesale. Factory-direct premium packaging for luxury brands. 20 years experience." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navigation */}
      <nav className="border-b border-gray-100 sticky top-0 bg-white/95 backdrop-blur-md z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="font-black text-2xl tracking-tighter italic shrink-0 select-none">SIDE PACKAGING</div>
          
          <div className="hidden lg:flex items-center space-x-10 text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400">
            <Link href="/" className="text-blue-600 border-b-2 border-blue-600 py-1">Home</Link>
            <Link href="/products/custom-magnetic-box" className="hover:text-black transition-colors">Products</Link>
            <a href="#factory" className="hover:text-black transition-colors">Factory</a>
            <a href="#about" className="hover:text-black transition-colors">About Us</a>
          </div>

          <div className="flex items-center space-x-6 shrink-0">
            <button className="hidden md:block text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-black transition">Sign In</button>
            <Link href="/products/custom-magnetic-box">
              <button className="bg-black text-white px-8 py-3.5 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-blue-600 transition-all transform hover:-translate-y-0.5 active:translate-y-0 shadow-lg hover:shadow-blue-500/20">
                GET A QUOTE
              </button>
            </Link>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#0a0a0a]">
          <div className="absolute inset-0 z-0">
             {/* High-end gradient background */}
             <div className="w-full h-full bg-[radial-gradient(circle_at_top_right,_rgba(37,99,235,0.15),_transparent_50%),_radial-gradient(circle_at_bottom_left,_rgba(37,99,235,0.05),_transparent_50%)]"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full pt-20 pb-32">
            <div className="max-w-4xl">
              <div className="inline-flex items-center space-x-2 bg-blue-600/10 border border-blue-600/20 text-blue-500 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-10">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                <span>FSC-Certified Factory Direct</span>
              </div>

              <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.95] mb-12 tracking-tighter">
                Premium Custom <br/>
                <span className="text-blue-600 italic">Magnetic Boxes</span> <br/>
                For Global Brands.
              </h1>

              <p className="text-xl text-gray-400 mb-14 leading-relaxed max-w-2xl font-medium">
                Engineering-grade structural design meets luxury aesthetics. 20 years of manufacturing excellence delivered directly to your doorstep.
              </p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <Link href="/products/custom-magnetic-box">
                  <button className="bg-blue-600 text-white px-12 py-6 rounded-full font-black text-lg hover:bg-blue-700 transition-all shadow-[0_20px_50px_rgba(37,99,235,0.3)] flex items-center justify-center group">
                    START CUSTOMIZING 
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-3 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </Link>
                <button className="bg-white/5 backdrop-blur-xl border border-white/10 text-white px-12 py-6 rounded-full font-black text-lg hover:bg-white/10 transition-all flex items-center justify-center">
                  REQUEST SAMPLE KIT
                </button>
              </div>
            </div>
          </div>
          
          {/* Scroll indicator */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center">
            <div className="w-[1px] h-24 bg-gradient-to-b from-blue-600 via-blue-600/50 to-transparent"></div>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="bg-white py-12 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, i) => (
                <div key={i} className="text-center md:text-left border-l-2 border-blue-600 pl-6 py-2">
                  <p className="text-3xl font-black text-gray-900">{stat.value}</p>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Product Categories */}
        <section className="py-24 max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-xl">
              <h2 className="text-4xl font-black tracking-tight mb-4">Signature Collections</h2>
              <p className="text-gray-500 font-medium">From luxury magnetic closure boxes to sustainable mailing solutions, we engineer every box to protect your product and elevate your brand experience.</p>
            </div>
            <Link href="/products/custom-magnetic-box" className="text-blue-600 font-black flex items-center group">
              View All Products
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {categories.map((cat, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-gray-100 mb-8 transition-all hover:shadow-2xl">
                  <img src={cat.image} alt={cat.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute top-6 left-6">
                    <span className="bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest text-blue-600">
                      {cat.tag}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Link href={cat.link}>
                      <button className="bg-white text-black px-8 py-3 rounded-full font-black transform translate-y-4 group-hover:translate-y-0 transition-transform">
                        QUICK VIEW
                      </button>
                    </Link>
                  </div>
                </div>
                <h3 className="text-2xl font-black mb-2">{cat.title}</h3>
                <p className="text-gray-400 font-medium line-clamp-2">{cat.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Factory / Trust Section */}
        <section id="factory" className="bg-gray-50 py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                   <div className="aspect-square bg-gray-200 rounded-3xl overflow-hidden shadow-xl translate-y-8">
                     <img src="https://sc02.alicdn.com/kf/A092333b800b841ab8b8229cd7ee66f5ec.png" className="w-full h-full object-cover" />
                   </div>
                   <div className="aspect-square bg-blue-600 rounded-3xl flex items-center justify-center p-8 text-white">
                      <p className="text-xl font-black italic">Quality First, Always.</p>
                   </div>
                </div>
                <div className="space-y-4">
                   <div className="aspect-[4/5] bg-gray-300 rounded-3xl overflow-hidden shadow-xl">
                      <img src="https://sc02.alicdn.com/kf/Aff82ba8d177b4ad5a6e78e165082b88fF.png" className="w-full h-full object-cover" />
                   </div>
                   <div className="aspect-square bg-gray-200 rounded-3xl overflow-hidden shadow-xl -translate-y-4">
                      <img src="https://sc02.alicdn.com/kf/Aa102fe113883456d96481350b3e32950c.png" className="w-full h-full object-cover" />
                   </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-4xl font-black mb-8 leading-tight italic">
                  20 Years of Craftsmanship. <br/>
                  Direct from Our Factory.
                </h2>
                <p className="text-lg text-gray-500 mb-10 leading-relaxed font-medium">
                  We don't just manufacture boxes; we engineer unboxing statements. As a direct manufacturer, we offer unbeatable factory pricing with full control over material quality and lead times. 
                </p>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center flex-shrink-0 text-blue-600 font-black">01</div>
                    <div>
                      <h4 className="font-black text-lg">In-House Structural Lab</h4>
                      <p className="text-sm text-gray-400">Custom dielines created within 24 hours for perfect fitment.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center flex-shrink-0 text-blue-600 font-black">02</div>
                    <div>
                      <h4 className="font-black text-lg">Premium Materials Only</h4>
                      <p className="text-sm text-gray-400">Strict sourcing from FSC-certified mills and recycled fibers.</p>
                    </div>
                  </div>
                </div>
                <button className="mt-12 text-blue-600 font-black border-b-2 border-blue-600 pb-1 hover:text-blue-700 transition">LEARN ABOUT OUR PROCESS →</button>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 text-center">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-5xl font-black mb-8 tracking-tighter">Your Brand Deserves <br/><span className="text-blue-600">Better Packaging.</span></h2>
            <p className="text-xl text-gray-400 mb-12 font-medium">Join 800+ global brands who trust Side Packaging for their custom magnetic closure boxes and retail shipping solutions.</p>
            <Link href="/products/custom-magnetic-box">
              <button className="bg-black text-white px-12 py-5 rounded-full font-black text-xl hover:bg-blue-600 transition shadow-2xl">
                START YOUR FREE QUOTE
              </button>
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
          <div className="col-span-2">
            <div className="font-black text-3xl tracking-tighter mb-6">SIDE PACKAGING</div>
            <p className="text-gray-400 max-w-sm font-medium leading-relaxed">
              Premium manufacturer of custom magnetic closure gift boxes and sustainable e-commerce shipping solutions.
            </p>
          </div>
          <div>
            <h4 className="font-black mb-6 uppercase tracking-widest text-xs">Navigation</h4>
            <ul className="space-y-4 text-sm font-bold text-gray-500">
              <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
              <li><Link href="/products/custom-magnetic-box" className="hover:text-blue-600">Products</Link></li>
              <li><a href="#" className="hover:text-blue-600">Factory Tour</a></li>
              <li><a href="#" className="hover:text-blue-600">Blog</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-black mb-6 uppercase tracking-widest text-xs">Contact Us</h4>
            <ul className="space-y-4 text-sm font-bold text-gray-500">
              <li>yaowei198299@gmail.com</li>
              <li>Side Packaging HK Limited</li>
              <li>Hong Kong SAR</li>
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
