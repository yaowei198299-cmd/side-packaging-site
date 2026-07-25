import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Footer from '../../components/Footer';
import WhatsAppButton from '../../components/WhatsAppButton';

const ProductsPage = () => {
  const categories = [
    {
      name: "Luxury Rigid Serie",
      desc: "Hochdichter 1200g-Graukarton mit erstklassigen, ma脽geschneiderten Oberfl盲chen.",
      items: [
        {
          badge: "脰KO-LUXUS",
          title: "Das Perpetual 脰ko-Luxus-Set",
          desc: "FSC-zertifizierte 脰ko-Luxus-Kosmetik-Geschenkbox mit Stone Paper Soft-Touch-Finish und 100 % plastikfreien, ma脽geschneiderten Myzel-Formeins盲tzen.",
          image: "https://sc02.alicdn.com/kf/Ae50efd75cc6d448a8e45325d12c0ddcab.png",
          link: "/de/products/eco-luxury-set",
          moq: "100 Stk",
          leadTime: "15-20 Tage",
          extra: "FSC / Stone Paper"
        },
        {
          badge: "MAB-EINSATZ",
          title: "Magnetbox mit Einlegeschale",
          desc: "Erstklassige matt-schwarze Magnetdeckelbox mit pr盲zise geformter Schaumstoff-Einlegeschale. Ideal f眉r Pflegesets und Hautpflege.",
          image: "https://sc04.alicdn.com/kf/Had1198f76e8244f7b6e067519bad703co.jpg",
          link: "/de/products/custom-magnetic-gift-boxes",
          moq: "500 Stk",
          leadTime: "12-15 Tage",
          extra: "EVA-Schaum / Schale"
        },
          {
            badge: "SCHLEIFENFINISH",
            title: "Starrer Deckel & Boden mit Schleife",
            desc: "Klassische zweiteilige starre Setup-Box mit einer vorgebundenen Satinschleife. Perfekt f眉r Luxusschmuck und Geschenksets.",
            image: "https://sc04.alicdn.com/kf/Hbebfc26f6fe74be2a241b3b45b5a69d3g.jpg",
            link: "/de/products/magnetic-gift-boxes",
            moq: "500 Stk",
            leadTime: "12-15 Tage",
            extra: "Satinband"
          },
          {
            badge: "E-COMMERCE",
            title: "Easy-Tear Kraft-Versandkarton",
            desc: "Kraftwellpappen-Versandtasche mit integriertem Aufrei脽streifen zum sofortigen 脰ffnen. Nachhaltiges und langlebiges Auspackerlebnis.",
            image: "https://sc04.alicdn.com/kf/H4cebdb0cd26b429f897a7b927f587eb64.jpg",
            link: "/de/products/custom-mailer-boxes",
            moq: "100 Stk",
            leadTime: "10-12 Tage",
            extra: "FSC-Kraft"
          },
        {
          badge: "UMWELTFREUNDLICH",
          title: "Premium Wei脽karton-Versandkarton",
          desc: "Hochwertiger Versandkarton aus wei脽em Kartonpapier mit individuellem Logodruck. Langlebig, stilvoll und 100 % recycelbar f眉r erstklassigen E-Commerce-Versand.",
          image: "https://sc02.alicdn.com/kf/A6944a60384cf46a89e823d17403dc1e4Z.png",
          link: "/de/products/custom-white-card-mailer-box",
          moq: "100 Stk",
          leadTime: "10-12 Tage",
          extra: "Wei脽karton"
        },
        {
          badge: "KOSMETIK",
          title: "Selbstaufrichtende Kosmetikbox",
          desc: "Hochwertiger faltbarer Karton mit erstklassigen Oberfl盲chen. Entwickelt f眉r Beautymarken, die Flachpack-Effizienz ohne Kompromisse beim Luxus ben枚tigen.",
          image: "https://sc04.alicdn.com/kf/Had73de458596340d2b7f9d73d279f32b94.jpg",
          link: "/de/products/cosmetic-packaging-boxes",
          moq: "2000 Stk",
          leadTime: "10-12 Tage",
          extra: "350g Bilderdruck"
        }
      ]
    },
    {
      name: "Boutique & Accessoires",
      desc: "Eleganz f眉r den gehobenen Einzelhandel, Schmuck und Spezialmarken.",
      items: [
        {
          badge: "PREMIUM",
          title: "Rose Leder Schmuckschatulle",
          desc: "Premium-Lederfinish mit einem glatten Schiebeschubladen-Organizer. Ideal f眉r hochwertige Ringe und Boutique-Schmuck.",
          image: "https://sc04.alicdn.com/kf/H6a331bc412a64a00b7c4af3df365dac1i.jpg",
          link: "/de/blog/jewelry-box-trends-2026-customization",
          moq: "500 Stk",
          leadTime: "12-15 Tage",
          extra: "Leder / Samt"
        },
        {
          badge: "LUXUS",
          title: "Magnetbox mit Blattgold",
          desc: "Hochwertige magnetische starre Box mit exquisiten Blattgolddetails. Entwickelt f眉r erstklassige Geschenksets.",
          image: "https://sc04.alicdn.com/kf/H227b0954e2ad4bf0ba3f0fddc502a3faY.jpg",
          link: "/de/products/magnetic-gift-boxes",
          moq: "500 Stk",
          leadTime: "15-18 Tage",
          extra: "Goldfolie"
        },
        {
          badge: "INDIVIDUELL",
          title: "Papiert眉ten mit Schleifengriff",
          desc: "Elegante Papiert眉ten mit weichen Schleifengriffen und verst盲rktem Boden. Perfekt f眉r den Luxuseinzelhandel und Boutiquen.",
          image: "https://sc04.alicdn.com/kf/H689a746594d24194910903328f4d9526n.jpg",
          link: "/de/products",
          moq: "1000 Stk",
          leadTime: "10-12 Tage",
          extra: "Schleifengriff"
        },
        {
          badge: "脰KO",
          title: "Fast-Food-Verpackungsset",
          desc: "Umweltfreundliche und FSC-zertifizierte fettdichte Papiersets. Nachhaltig und stilvoll f眉r handwerkliche Marken.",
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
        <title>Verpackungskatalog | Ma脽geschneiderte L枚sungen | Saide Packaging</title>
        <meta name="description" content="Entdecken Sie unseren technischen Verpackungskatalog. Industrielle Spezifikationen, MOQ und Lieferzeiten f眉r Luxus-Geschenkboxen." />
      </Head>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-[100] bg-black/40 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
          <Link href="/de" className="text-2xl font-black tracking-tighter uppercase italic text-white font-montserrat">Saide Packaging</Link>
          <div className="hidden lg:flex items-center space-x-12 text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">
            <Link href="/de" className="hover:text-white transition-colors">Startseite</Link>
            <Link href="/gallery" className="hover:text-white transition-colors">Fallstudien</Link>
            <Link href="/de/products" className="text-white">Katalog</Link>
            <Link href="/blog" className="hover:text-white transition-colors">Einblicke</Link>
          </div>
          <a href="/de#contact" className="bg-[#C9A84C] text-black px-10 py-3.5 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-white shadow-xl">Angebot anfordern</a>
        </div>
      </nav>

      <main className="pt-40 pb-24 bg-[#0A0A0F]">
        <div className="max-w-[1400px] mx-auto px-6">
          <header className="mb-24">
            <span className="text-[#C9A84C] font-black uppercase text-[10px] tracking-[0.5em] mb-4 block">PREMIUM-L脰SUNGEN</span>
            <h1 className="text-6xl font-black uppercase tracking-tighter mb-4 italic font-montserrat">Bespoke Katalog</h1>
            <p className="text-gray-500 font-medium uppercase text-xs tracking-widest">Technische Spezifikationen f眉r professionelle B2B-Beschaffung.</p>
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
                      
                      <h3 className="text-xl md:text-2xl font-black text-white mb-6 tracking-tight leading-tight font-montserrat min-h-[4rem]">{item.title}</h3>
                      
                      <p className="text-gray-400 text-[13px] font-medium leading-relaxed mb-12 line-clamp-4">
                        {item.desc}
                      </p>

                      {/* Technical Specs */}
                      <div className="grid grid-cols-3 gap-0 mb-12 border-t border-white/10 pt-8 mt-auto">
                        <div className="space-y-2 pr-2">
                          <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest">MOQ</p>
                          <p className="text-[13px] font-bold text-white font-montserrat">{item.moq}</p>
                        </div>
                        <div className="space-y-2 border-x border-white/10 px-4">
                          <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest">LIEFERZEIT</p>
                          <p className="text-[13px] font-bold text-white font-montserrat">{item.leadTime}</p>
                        </div>
                        <div className="space-y-2 pl-4">
                          <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest">FINISH</p>
                          <p className="text-[13px] font-bold text-white truncate font-montserrat" title={item.extra}>{item.extra}</p>
                        </div>
                      </div>

                      {/* Action Button */}
                      <Link href={item.link} className="w-full border border-white/10 hover:border-[#C9A84C] py-4 text-center rounded-xl transition-all group/btn flex items-center justify-center gap-3 mt-auto">
                        <span className="text-[11px] font-black uppercase tracking-[0.25em] text-white group-hover/btn:text-[#C9A84C] transition-colors font-montserrat">
                          鈫?Produkt anfragen
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
