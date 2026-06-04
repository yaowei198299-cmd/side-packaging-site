import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const ProductsPage = () => {
  const categories = [
    {
      name: "Luxury Rigid Series",
      desc: "High-density 1200gsm greyboard with premium bespoke finishes.",
      items: [
        {
          badge: "ECO-LUXURY",
          title: "The Perpetual Eco-Luxury Set",
          desc: "FSC Certified Eco-Luxury Beauty Gift Box featuring Stone Paper Soft-Touch finish and 100% Plastic-Free custom mycelium molded inserts.",
          image: "https://sc02.alicdn.com/kf/Ae50efd75cc6d448a8e45325d12c0ddcab.png",
          link: "/products/eco-luxury-set",
          moq: "500 pcs",
          leadTime: "15-20 days",
          extra: "FSC / Stone Paper"
        },
        {
          badge: "CUSTOM INSERT",
          title: "Magnetic Box with Insert Tray",
          desc: "Premium matte-black magnetic lid box with precisely molded foam insert tray. Ideal for grooming sets and skincare.",
          image: "https://sc04.alicdn.com/kf/Had1198f76e8244f7b6e067519bad703co.jpg",
          link: "/products/custom-magnetic-gift-boxes",
          moq: "200 pcs",
          leadTime: "12-15 days",
          extra: "EVA Foam / Tray"
        },
        {
          badge: "RIBBON FINISH",
          title: "Rigid Lid & Base with Ribbon",
          desc: "Classic two-piece rigid setup box with a pre-tied satin ribbon bow. Perfect for luxury jewelry and gift sets.",
          image: "https://sc04.alicdn.com/kf/Hbebfc26f6fe74be2a241b3b45b5a69d3g.jpg",
          link: "/products",
          moq: "100 pcs",
          leadTime: "12-15 days",
          extra: "Satin Ribbon"
        },
        {
          badge: "E-COMMERCE",
          title: "Easy-Tear Kraft Mailer Box",
          desc: "Kraft corrugated mailer with built-in tear-strip for instant opening. Sustainable and durable unboxing experience.",
          image: "https://sc04.alicdn.com/kf/H4cebdb0cd26b429f897a7b927f587eb64.jpg",
          link: "/products",
          moq: "300 pcs",
          leadTime: "10-12 days",
          extra: "FSC Kraft"
        },
        {
          badge: "ECO-FRIENDLY",
          title: "Premium White Card Mailer Box",
          desc: "High-quality white card paper mailer box with custom logo printing. Durable, stylish, and 100% recyclable for premium e-commerce shipping.",
          image: "https://sc02.alicdn.com/kf/A6944a60384cf46a89e823d17403dc1e4Z.png",
          link: "/products/custom-white-card-mailer-box",
          moq: "500 pcs",
          leadTime: "10-12 days",
          extra: "White Cardboard"
        },
        {
          badge: "COSMETIC",
          title: "Self-Erecting Cosmetic Box",
          desc: "Collapsible high-end folding carton with premium finishes. Designed for beauty brands needing flat-pack efficiency without compromising luxury.",
          image: "https://sc04.alicdn.com/kf/Had73de458596340d2b7f9d73d279f32b94.jpg",
          link: "/products/cosmetic-packaging-boxes",
          moq: "2000 pcs",
          leadTime: "10-12 days",
          extra: "350gsm Art Paper"
        }
      ]
    },
    {
      name: "Boutique & Accessories",
      desc: "Elegance for high-end retail, jewelry, and specialty brands.",
      items: [
        {
          badge: "PREMIUM",
          title: "Rose Leather Jewelry Box",
          desc: "Premium leather finish with a smooth sliding drawer organizer. Ideal for high-end rings and boutique jewelry.",
          image: "https://sc04.alicdn.com/kf/H6a331bc412a64a00b7c4af3df365dac1i.jpg",
          link: "/blog/jewelry-box-trends-2026-customization",
          moq: "500 pcs",
          leadTime: "12-15 days",
          extra: "Leather / Velvet"
        },
        {
          badge: "LUXURY",
          title: "Magnetic Box with Gold Leaf",
          desc: "High-end magnetic rigid box featuring exquisite gold leaf detailing. Designed for premium gift sets.",
          image: "https://sc04.alicdn.com/kf/H227b0954e2ad4bf0ba3f0fddc502a3faY.jpg",
          link: "/products",
          moq: "200 pcs",
          leadTime: "15-18 days",
          extra: "Gold Foil"
        },
        {
          badge: "CUSTOM",
          title: "Ribbon Handle Paper Bags",
          desc: "Elegant paper bags with soft ribbon handles and reinforced base. Perfect for luxury retail and boutiques.",
          image: "https://sc04.alicdn.com/kf/H689a746594d24194910903328f4d9526n.jpg",
          link: "/products",
          moq: "1000 pcs",
          leadTime: "10-12 days",
          extra: "Ribbon Handle"
        },
        {
          badge: "ECO-FRIENDLY",
          title: "Fast Food Packaging Set",
          desc: "Eco-friendly and FSC certified grease-resistant paper sets. Sustainable and stylish for artisanal brands.",
          image: "https://sc04.alicdn.com/kf/H177398f7aa15456ca80b4af84f84382a6.jpg",
          link: "/products",
          moq: "2000 pcs",
          leadTime: "12-15 days",
          extra: "Recyclable"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-gold-500">
      <Head>
        <title>Packaging Catalog | Luxo-Bespoke Solutions | Side Packaging HK Limited</title>
        <meta name="description" content="Explore our technical packaging catalog. Industrial specs, MOQ, and lead times for luxury rigid boxes and retail solutions." />
      </Head>

      {/* Navbar: Sophisticated & Minimalist */}
      <nav className="fixed top-0 left-0 right-0 z-[100] bg-black/40 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
          <Link href="/" className="text-2xl font-black tracking-tighter uppercase italic text-white">Side Packaging</Link>
          <div className="hidden lg:flex items-center space-x-12 text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <Link href="/gallery" className="hover:text-white transition-colors">Case Studies</Link>
            <Link href="/products" className="text-white">Catalog</Link>
            <Link href="/blog" className="hover:text-white transition-colors">Insights</Link>
          </div>
          <a href="/#contact" className="bg-white text-black px-10 py-3.5 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-gray-200 shadow-xl">Get Quote</a>
        </div>
      </nav>

      <main className="pt-40 pb-24 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-[1600px] mx-auto px-6">
          <header className="mb-24">
            <h1 className="text-5xl font-black uppercase tracking-tighter mb-4 italic">Bespoke Catalog</h1>
            <p className="text-gray-500 font-medium">Technical specifications for professional B2B procurement.</p>
          </header>

          {categories.map((cat, idx) => (
            <section key={idx} className="mb-32">
              <div className="border-b border-white/10 pb-6 mb-12">
                <h2 className="text-3xl font-black uppercase tracking-tighter text-white/40">{cat.name}</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {cat.items.map((item, i) => (
                  <div key={i} className="group flex flex-col bg-[#0f0f0f] border border-white/5 hover:border-white/10 transition-all rounded-sm">
                    {/* Image Area */}
                    <div className="aspect-[4/3] overflow-hidden relative">
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-all duration-700" />
                    </div>

                    {/* Content Area */}
                    <div className="p-8 flex-grow flex flex-col">
                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-gold-500 text-[10px]">★</span>
                        <span className="text-gold-500 font-black text-[9px] uppercase tracking-widest">{item.badge}</span>
                      </div>
                      <h3 className="text-xl font-black text-white uppercase mb-4 tracking-tight leading-tight">{item.title}</h3>
                      <p className="text-gray-500 text-xs font-medium leading-relaxed mb-8 line-clamp-3">
                        {item.desc}
                      </p>

                      {/* Technical Specs */}
                      <div className="grid grid-cols-3 gap-4 border-t border-white/5 pt-6 mt-auto">
                        <div>
                          <p className="text-[8px] font-black text-gray-600 uppercase tracking-widest mb-1">MOQ</p>
                          <p className="text-[10px] font-bold text-gray-300">{item.moq}</p>
                        </div>
                        <div>
                          <p className="text-[8px] font-black text-gray-600 uppercase tracking-widest mb-1">Lead Time</p>
                          <p className="text-[10px] font-bold text-gray-300">{item.leadTime}</p>
                        </div>
                        <div>
                          <p className="text-[8px] font-black text-gray-600 uppercase tracking-widest mb-1">Interior/Material</p>
                          <p className="text-[10px] font-bold text-gray-300">{item.extra}</p>
                        </div>
                      </div>

                      {/* Action */}
                      <Link href={item.link} className="mt-8 border border-white/10 hover:border-gold-500/50 py-3 text-center rounded-sm transition-all group/btn">
                        <span className="text-[9px] font-black uppercase tracking-widest text-gray-400 group-hover/btn:text-white transition-colors">
                          → Quote This Product
                        </span>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>

      <footer className="bg-black text-white py-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex flex-col gap-4">
             <p className="text-xl font-black tracking-tighter uppercase italic text-white/40">Side Packaging</p>
             <p className="text-[10px] font-bold uppercase tracking-widest text-gray-600">Premium B2B Manufacturing Solutions.</p>
          </div>
          <p className="text-[10px] font-bold uppercase tracking-widest text-gray-600">&copy; 2026 Side Packaging HK Limited. FSC & BSCI Certified.</p>
        </div>
      </footer>
    </div>
  );
};

export default ProductsPage;
