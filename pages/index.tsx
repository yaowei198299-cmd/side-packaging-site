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
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <Head>
        <title>Side Packaging HK | Custom Magnetic Closure Boxes Wholesale Manufacturer</title>
        <meta name="description" content="Leading manufacturer of custom magnetic closure boxes wholesale. Factory-direct premium packaging for luxury brands. 20 years experience." />
      </Head>

      {/* Navigation */}
      <nav className="border-b sticky top-0 bg-white/80 backdrop-blur-md z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="font-black text-2xl tracking-tighter italic">SIDE PACKAGING</div>
          <div className="hidden lg:flex space-x-10 text-sm font-bold uppercase tracking-widest">
            <Link href="/" className="text-blue-600">Home</Link>
            <Link href="/products/custom-magnetic-box" className="hover:text-blue-600 transition">Products</Link>
            <a href="#factory" className="hover:text-blue-600 transition">Factory</a>
            <a href="#about" className="hover:text-blue-600 transition">About Us</a>
          </div>
          <div className="flex items-center space-x-4">
            <button className="hidden sm:block text-sm font-bold px-6 py-2 border border-gray-200 rounded-full hover:bg-gray-50 transition">Login</button>
            <Link href="/products/custom-magnetic-box">
              <button className="bg-black text-white px-8 py-3 rounded-full text-sm font-black hover:bg-blue-600 transition shadow-lg">GET A QUOTE</button>
            </Link>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section - Reserved for Vibe Selling Agent's Visuals */}
        <section className="relative h-[85vh] flex items-center overflow-hidden bg-gray-900">
          <div className="absolute inset-0 z-0 opacity-40">
             {/* Placeholder for high-end factory/product video/image */}
             <div className="w-full h-full bg-gradient-to-br from-blue-900 to-black"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-8 tracking-tighter">
                Premium Custom <br/>
                <span className="text-blue-500 italic">Magnetic Closure Boxes</span> <br/>
                Wholesale Manufacturer.
              </h1>
              <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-xl font-medium">
                Engineering-grade structural design meets luxury aesthetics. Direct from our FSC-certified factory to your global brand.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/products/custom-magnetic-box">
                  <button className="bg-blue-600 text-white px-10 py-5 rounded-full font-black text-lg hover:bg-blue-700 transition shadow-2xl flex items-center group">
                    START CUSTOMIZING 
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </Link>
                <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-5 rounded-full font-black text-lg hover:bg-white/20 transition">
                  REQUEST SAMPLE KIT
                </button>
              </div>
            </div>
          </div>
          
          {/* Subtle scroll indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/40">
            <p className="text-[10px] font-bold uppercase tracking-widest mb-2">Scroll to explore</p>
            <div className="w-[1px] h-12 bg-gradient-to-b from-white/40 to-transparent"></div>
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
