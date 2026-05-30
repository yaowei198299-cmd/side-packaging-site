import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const ProductsPage = () => {
  const categories = [
    {
      name: "Luxury Rigid Series",
      desc: "High-density 1200gsm greyboard with premium finishes.",
      items: [
        {
          title: "Magnetic Closure Boxes",
          image: "https://s.alicdn.com/@sc04/kf/Had1198f76e8244f7b6e067519bad703co/Custom-Luxury-Eco-Friendly-Biodegradable-Magnetic-Closure.jpg",
          link: "/products/custom-magnetic-gift-boxes",
          moq: "500"
        },
        {
          title: "Lid and Base Rigid Boxes",
          image: "https://s.alicdn.com/@sc04/kf/Hbebfc26f6fe74be2a241b3b45b5a69d3g/Custom-Logo-Gold-Foil-Birthday-Valentine-s.jpg",
          link: "/products",
          moq: "500"
        },
        {
          title: "Bespoke Jewelry Boxes",
          image: "https://s.alicdn.com/@sc04/kf/H6a331bc412a64a00b7c4af3df365dac1i/Custom-Jewelry-Pink-Sponge-Pouch-Bags-Earring.jpg",
          link: "/blog/jewelry-box-trends-2026-customization",
          moq: "500"
        }
      ]
    },
    {
      name: "Retail & Ecommerce",
      desc: "Durable and sustainable solutions for modern brands.",
      items: [
        {
          title: "Premium Mailer Boxes",
          image: "https://s.alicdn.com/@sc04/kf/H4cebdb0cd26b429f897a7b927f587eb64/Kraft-Paper-Mailer-Boxes-Rectangle-Gift-Craft.jpg",
          link: "/products",
          moq: "1000"
        },
        {
          title: "Premium Paper Shopping Bags",
          image: "/images/premium-paper-shopping-bag.png",
          link: "/products",
          moq: "1000"
        },
        {
          title: "Self-Erecting Cosmetic Boxes",
          image: "https://s.alicdn.com/@sc04/kf/Had73de458596340d2b7f9d73d279f32b94/Eco-Friendly-Recycled-Materials-Recyclable-Self-Erecting.jpg",
          link: "/products",
          moq: "2000"
        },
        {
          title: "Foldable Gift Boxes",
          image: "https://s.alicdn.com/@sc04/kf/H9134a41416e541009187313a4369a19cZ.jpg",
          link: "/products",
          moq: "500"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-gold-500">
      <Head>
        <title>Packaging Catalog | Bespoke Luxury Boxes | Side Packaging HK Limited</title>
        <meta name="description" content="Explore our complete catalog of bespoke luxury packaging. From rigid magnetic boxes to eco-friendly mailers. Factory direct B2B solutions." />
      </Head>

      {/* Navbar: Sophisticated & Minimalist */}
      <nav className="fixed top-0 left-0 right-0 z-[100] bg-black/20 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
          <Link href="/" className="text-2xl font-black tracking-tighter uppercase italic text-white">Side Packaging</Link>
          <div className="hidden lg:flex items-center space-x-12 text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <Link href="/gallery" className="hover:text-white transition-colors">Case Studies</Link>
            <Link href="/products" className="text-white">Catalog</Link>
            <Link href="/blog" className="hover:text-white transition-colors">Insights</Link>
          </div>
          <a href="/#contact" className="bg-white text-black px-10 py-3.5 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-gray-200 transition-all shadow-xl">Get Quote</a>
        </div>
      </nav>

      <main className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <header className="mb-32 text-center">
            <span className="text-blue-500 font-black text-xs uppercase tracking-[0.5em] mb-6 block">Bespoke Catalog 2026</span>
            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] mb-8">Packaging <br/><span className="text-white/40 italic">Collections.</span></h1>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto font-medium">Precision engineering meets luxury aesthetic. All collections are customizable with your choice of material, finish, and structural design.</p>
          </header>

          {categories.map((cat, idx) => (
            <section key={idx} className="mb-32">
              <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                <div>
                  <h2 className="text-4xl font-black uppercase tracking-tighter italic mb-4">{cat.name}</h2>
                  <p className="text-gray-500 font-medium">{cat.desc}</p>
                </div>
                <div className="h-px bg-white/10 flex-grow mx-12 hidden md:block"></div>
                <span className="text-[10px] font-black uppercase tracking-widest text-white/20">{cat.items.length} Series</span>
              </div>

              <div className="grid md:grid-cols-3 gap-12">
                {cat.items.map((item, i) => (
                  <div key={i} className="group relative border border-white/5 rounded-[2.5rem] p-10 hover:border-white/20 transition-all bg-black shadow-2xl">
                    <div className="aspect-square bg-gray-900 rounded-3xl flex items-center justify-center mb-8 overflow-hidden relative border border-white/5">
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 opacity-60 group-hover:opacity-100" />
                      <div className="absolute top-6 right-6 bg-black/60 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full text-[9px] font-black uppercase tracking-widest">
                        MOQ: {item.moq}
                      </div>
                    </div>
                    <h3 className="text-2xl font-black uppercase mb-4 tracking-tight">{item.title}</h3>
                    <div className="flex justify-between items-center">
                      <Link href={item.link} className="text-[10px] font-bold uppercase tracking-widest text-blue-500 hover:text-white transition-colors">
                        Explore Specs <span>→</span>
                      </Link>
                      <a href={`https://wa.me/8613699786538?text=I'm interested in ${item.title}`} className="bg-white/5 hover:bg-white text-white hover:text-black w-10 h-10 rounded-full flex items-center justify-center transition-all border border-white/10">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}

          {/* Catalog CTA */}
          <section className="bg-white/5 p-20 rounded-[4rem] border border-white/10 text-center backdrop-blur-sm">
            <h2 className="text-4xl font-black uppercase tracking-tighter mb-8 italic">Need a Custom Structure?</h2>
            <p className="text-gray-400 font-medium text-lg mb-12 max-w-2xl mx-auto">Our structural engineers can develop unique packaging solutions tailored to your product's specific dimensions and protection requirements.</p>
            <Link href="/#contact" className="bg-white text-black px-16 py-6 rounded-full font-black uppercase tracking-widest hover:scale-105 transition-all shadow-2xl inline-block">Consult Our Engineers</Link>
          </section>
        </div>
      </main>

      <footer className="bg-black text-white py-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex flex-col items-center md:items-start gap-4">
             <p className="text-xl font-black tracking-tighter uppercase italic">Side Packaging</p>
             <p className="text-[10px] font-bold uppercase tracking-widest text-gray-600 max-w-xs text-center md:text-left">Factory Direct Luxury Packaging Solutions for Global Brands.</p>
          </div>
          <p className="text-[10px] font-bold uppercase tracking-widest text-gray-600">&copy; 2026 Side Packaging HK Limited. FSC & BSCI Certified.</p>
        </div>
      </footer>
    </div>
  );
};

export default ProductsPage;
