import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const ProductsPage = () => {
  const categories = [
    {
      name: "Luxus-Hartkarton-Serie",
      desc: "Hochdichte 1200g Graupappe mit erstklassigen, ma脽geschneiderten Oberfl盲chen.",
      items: [
        {
          badge: "脰KO-LUXUS",
          title: "Das Ewige 脰ko-Luxus-Set",
          desc: "FSC-zertifizierte 脰ko-Luxus-Beauty-Geschenkbox mit Steinpapier-Soft-Touch-Oberfl盲che und 100% plastikfreien, ma脽geschneiderten Myzel-Formeins盲tzen.",
          image: "https://sc02.alicdn.com/kf/Ae50efd75cc6d448a8e45325d12c0ddcab.png",
          link: "/de/products/eco-luxury-set",
          moq: "500 Stk",
          leadTime: "15-20 Tage",
          extra: "FSC / Steinpapier"
        },
        {
          badge: "INDIVIDUELLER EINSATZ",
          title: "Magnetbox mit Einsatzfach",
          desc: "Premium matt-schwarze Magnetdeckelbox mit pr盲zise geformtem Schaumstoffeinsatz. Ideal f眉r Pflegesets und Hautpflege.",
          image: "https://sc04.alicdn.com/kf/Had1198f76e8244f7b6e067519bad703co.jpg",
          link: "/de/products/custom-magnetic-gift-boxes",
          moq: "200 Stk",
          leadTime: "12-15 Tage",
          extra: "EVA-Schaum / Einsatz"
        },
        {
          badge: "SCHLEIFEN-FINISH",
          title: "Hartkarton-Deckel & Boden mit Schleife",
          desc: "Klassische zweiteilige Hartkartonbox mit einer vorgebundenen Satinschleife. Perfekt f眉r Luxusschmuck und Geschenksets.",
          image: "https://sc04.alicdn.com/kf/Hbebfc26f6fe74be2a241b3b45b5a69d3g.jpg",
          link: "/de/products",
          moq: "100 Stk",
          leadTime: "12-15 Tage",
          extra: "Satinband"
        },
        {
          badge: "E-COMMERCE",
          title: "Easy-Tear Kraft-Versandkarton",
          desc: "Kraft-Wellpappen-Versandkarton mit integriertem Aufrei脽streifen f眉r sofortiges 脰ffnen. Nachhaltiges und langlebiges Unboxing-Erlebnis.",
          image: "https://sc04.alicdn.com/kf/H4cebdb0cd26b429f897a7b927f587eb64.jpg",
          link: "/de/products",
          moq: "300 Stk",
          leadTime: "10-12 Tage",
          extra: "FSC-Kraftpapier"
        },
        {
          badge: "UMWELTFREUNDLICH",
          title: "Premium Wei脽karton-Versandbox",
          desc: "Hochwertiger Versandkarton aus wei脽em Karton mit individuellem Logodruck. Langlebig, stilvoll und 100% recycelbar f眉r erstklassigen E-Commerce-Versand.",
          image: "https://sc02.alicdn.com/kf/A6944a60384cf46a89e823d17403dc1e4Z.png",
          link: "/de/products/custom-white-card-mailer-box",
          moq: "500 Stk",
          leadTime: "10-12 Tage",
          extra: "Wei脽er Karton"
        },
        {
          badge: "KOSMETIK",
          title: "Selbstaufrichtende Kosmetikbox",
          desc: "Faltbarer High-End-Faltschachtel-Karton mit erstklassigen Oberfl盲chen. Entwickelt f眉r Beautymarken, die Effizienz bei der Flachverpackung ohne Kompromisse beim Luxus ben枚tigen.",
          image: "https://sc04.alicdn.com/kf/Had73de458596340d2b7f9d73d279f32b94.jpg",
          link: "/de/products/cosmetic-packaging-boxes",
          moq: "2000 Stk",
          leadTime: "10-12 Tage",
          extra: "350g Bilderdruckpapier"
        }
      ]
    },
    {
      name: "Boutique & Accessoires",
      desc: "Eleganz f眉r den gehobenen Einzelhandel, Schmuck und Spezialmarken.",
      items: [
        {
          badge: "PREMIUM",
          title: "Rosa Leder-Schmuckk盲stchen",
          desc: "Premium-Leder-Finish mit einem sanft gleitenden Schubladen-Organizer. Ideal f眉r hochwertige Ringe und Boutique-Schmuck.",
          image: "https://sc04.alicdn.com/kf/H6a331bc412a64a00b7c4af3df365dac1i.jpg",
          link: "/de/blog/jewelry-box-trends-2026-customization",
          moq: "500 Stk",
          leadTime: "12-15 Tage",
          extra: "Leder / Samt"
        },
        {
          badge: "LUXUS",
          title: "Magnetbox mit Blattgold",
          desc: "Hochwertige magnetische Hartkartonbox mit exquisiten Blattgold-Details. Entwickelt f眉r Premium-Geschenksets.",
          image: "https://sc04.alicdn.com/kf/H227b0954e2ad4bf0ba3f0fddc502a3faY.jpg",
          link: "/de/products",
          moq: "200 Stk",
          leadTime: "15-18 Tage",
          extra: "Goldfolie"
        },
        {
          badge: "INDIVIDUELL",
          title: "Papiert眉ten mit Bandgriff",
          desc: "Elegante Papiert眉ten mit weichen Bandgriffen und verst盲rktem Boden. Perfekt f眉r Luxus-Einzelhandel und Boutiquen.",
          image: "https://sc04.alicdn.com/kf/H689a746594d24194910903328f4d9526n.jpg",
          link: "/de/products",
          moq: "1000 Stk",
          leadTime: "10-12 Tage",
          extra: "Bandgriff"
        },
        {
          badge: "UMWELTFREUNDLICH",
          title: "Fast-Food-Verpackungsset",
          desc: "Umweltfreundliche und FSC-zertifizierte fettbest盲ndige Papier-Sets. Nachhaltig und stilvoll f眉r handwerkliche Marken.",
          image: "https://sc04.alicdn.com/kf/H177398f7aa15456ca80b4af84f84382a6.jpg",
          link: "/de/products",
          moq: "2000 Stk",
          leadTime: "12-15 Tage",
          extra: "Recycelbar"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-gold-500">
      <Head>
        <title>Verpackungskatalog | Luxus-Ma脽geschneiderte L枚sungen | Saide Packaging</title>
        <meta name="description" content="Entdecken Sie unseren technischen Verpackungskatalog. Industriespezifikationen, MOQ und Lieferzeiten f眉r Luxus-Hartkartonboxen und Einzelhandelsl枚sungen." />
      </Head>

      {/* Navbar: Sophisticated & Minimalist */}
      <nav className="fixed top-0 left-0 right-0 z-[100] bg-black/40 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
          <Link href="/de" className="text-2xl font-black tracking-tighter uppercase italic text-white">Saide Packaging</Link>
          <div className="hidden lg:flex items-center space-x-12 text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">
            <Link href="/de" className="hover:text-white transition-colors">Home</Link>
            <Link href="/de/gallery" className="hover:text-white transition-colors">Fallstudien</Link>
            <Link href="/de/products" className="text-white">Katalog</Link>
            <Link href="/de/blog" className="hover:text-white transition-colors">Einblicke</Link>
          </div>
          <a href="/de/#contact" className="bg-white text-black px-10 py-3.5 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-gray-200 shadow-xl">Angebot anfordern</a>
        </div>
      </nav>

      <main className="pt-40 pb-24 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-[1600px] mx-auto px-6">
          <header className="mb-24">
            <h1 className="text-5xl font-black uppercase tracking-tighter mb-4 italic">Ma脽geschneiderter Katalog</h1>
            <p className="text-gray-500 font-medium">Technische Spezifikationen f眉r die professionelle B2B-Beschaffung.</p>
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
                        <span className="text-gold-500 text-[10px]">鈽?/span>
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
                          <p className="text-[8px] font-black text-gray-600 uppercase tracking-widest mb-1">Lieferzeit</p>
                          <p className="text-[10px] font-bold text-gray-300">{item.leadTime}</p>
                        </div>
                        <div>
                          <p className="text-[8px] font-black text-gray-600 uppercase tracking-widest mb-1">Innen/Material</p>
                          <p className="text-[10px] font-bold text-gray-300">{item.extra}</p>
                        </div>
                      </div>

                      {/* Action */}
                      <Link href={item.link} className="mt-8 border border-white/10 hover:border-gold-500/50 py-3 text-center rounded-sm transition-all group/btn">
                        <span className="text-[9px] font-black uppercase tracking-widest text-gray-400 group-hover/btn:text-white transition-colors">
                          鈫?Angebot f眉r dieses Produkt anfordern
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
             <p className="text-xl font-black tracking-tighter uppercase italic text-white/40">Saide Packaging</p>
             <p className="text-[10px] font-bold uppercase tracking-widest text-gray-600">Premium B2B-Fertigungsl枚sungen.</p>
          </div>
          <p className="text-[10px] font-bold uppercase tracking-widest text-gray-600">&copy; 2026 Saide Packaging. FSC & BSCI zertifiziert.</p>
        </div>
      </footer>
    </div>
  );
};

export default ProductsPage;
