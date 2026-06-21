import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

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
            link: "/products/magnetic-gift-boxes",
            moq: "100 pcs",
            leadTime: "12-15 days",
            extra: "Satin Ribbon"
          },
          {
            badge: "E-COMMERCE",
            title: "Easy-Tear Kraft Mailer Box",
            desc: "Kraft corrugated mailer with built-in tear-strip for instant opening. Sustainable and durable unboxing experience.",
            image: "https://sc04.alicdn.com/kf/H4cebdb0cd26b429f897a7b927f587eb64.jpg",
            link: "/products/custom-mailer-boxes",
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
        <title>Packaging Catalog | Luxo-Bespoke Solutions | Saide Packaging HK Limited</title>
        <meta name="description" content="Explore our technical packaging catalog. Industrial specs, MOQ, and lead times for luxury rigid boxes and retail solutions." />
      </Head>

      {/* Navbar: Sophisticated & Minimalist */}
      <nav className="fixed top-0 left-0 right-0 z-[100] bg-black/40 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
          <Link href="/" className="text-2xl font-black tracking-tighter uppercase italic text-white font-montserrat">Saide Packaging</Link>
          <div className="hidden lg:flex items-center space-x-12 text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <Link href="/gallery" className="hover:text-white transition-colors">Case Studies</Link>
            <Link href="/products" className="text-white">Catalog</Link>
            <Link href="/blog" className="hover:text-white transition-colors">Insights</Link>
          </div>
          <a href="/#contact" className="bg-[#C9A84C] text-black px-10 py-3.5 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-white shadow-xl">Get Quote</a>
        </div>
      </nav>

      <main className="pt-40 pb-24 bg-[#0A0A0F]">
        <div className="max-w-[1400px] mx-auto px-6">
          <header className="mb-24">
            <span className="text-[#C9A84C] font-black uppercase text-[10px] tracking-[0.5em] mb-4 block">PREMIUM SOLUTIONS</span>
            <h1 className="text-6xl font-black uppercase tracking-tighter mb-4 italic font-montserrat">Bespoke Catalog</h1>
            <p className="text-gray-500 font-medium uppercase text-xs tracking-widest">Technical specifications for professional B2B procurement.</p>
          </header>

          {categories.map((cat, idx) => (
            <section key={idx} className="mb-32">
              <div className="border-b border-white/5 pb-6 mb-12">
                <h2 className="text-3xl font-black uppercase tracking-tighter text-white/20 italic font-montserrat">{cat.name}</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {cat.items.map((item, i) => (
                  <div key={i} className="group flex flex-col bg-[#111111] border border-white/[0.08] hover:border-[#C9A84C]/40 transition-all rounded-[1rem] overflow-hidden shadow-2xl h-full">
                    {/* Image Area */}
                    <div className="aspect-[4/3] overflow-hidden relative bg-white">
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110" />
                    </div>

                    {/* Content Area */}
                    <div className="p-10 flex-grow flex flex-col">
                      <div className="flex items-center gap-2 mb-6">
                        <span className="text-[#C9A84C] text-[12px]">★</span>
                        <span className="text-[#C9A84C] font-black text-[10px] uppercase tracking-[0.2em] font-montserrat">{item.badge}</span>
                      </div>
                      
                      <h3 className="text-2xl font-black text-white mb-6 tracking-tight leading-[1.2] font-montserrat min-h-[4rem]">{item.title}</h3>
                      
                      <p className="text-gray-400 text-sm font-medium leading-relaxed mb-12 line-clamp-4">
                        {item.desc}
                      </p>

                      {/* Technical Specs - Grid Layout from Screenshot */}
                      <div className="grid grid-cols-3 gap-0 mb-12">
                        <div className="space-y-2 pr-2">
                          <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest">MOQ</p>
                          <p className="text-[13px] font-black text-white uppercase font-montserrat">{item.moq}</p>
                        </div>
                        <div className="space-y-2 border-x border-white/10 px-4">
                          <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest">LEAD TIME</p>
                          <p className="text-[13px] font-black text-white uppercase font-montserrat">{item.leadTime}</p>
                        </div>
                        <div className="space-y-2 pl-4">
                          <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest">FINISH</p>
                          <p className="text-[13px] font-black text-white truncate font-montserrat" title={item.extra}>{item.extra}</p>
                        </div>
                      </div>

                      {/* Action Button - Luxo Style Outlined */}
                      <Link href={item.link} className="w-full border border-white/10 hover:border-[#C9A84C] py-4 text-center rounded-xl transition-all group/btn flex items-center justify-center gap-3 mt-auto">
                        <span className="text-[11px] font-black uppercase tracking-[0.25em] text-white group-hover/btn:text-[#C9A84C] transition-colors font-montserrat">
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

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ProductsPage;

