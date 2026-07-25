import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Footer from '../../components/Footer';
import WhatsAppButton from '../../components/WhatsAppButton';

const ProductsPage = () => {
  const categories = [
    {
      name: "S茅rie Rigide de Luxe",
      desc: "Carton gris haute densit茅 1200g avec finitions sur mesure haut de gamme.",
      items: [
        {
          badge: "脡CO-LUXE",
          title: "Le Coffret 脡co-Luxe Perp茅tuel",
          desc: "Coffret cadeau beaut茅 茅co-luxe certifi茅 FSC avec finition Soft-Touch en papier de pierre et calages moul茅s en myc茅lium 100 % sans plastique.",
          image: "https://sc02.alicdn.com/kf/Ae50efd75cc6d448a8e45325d12c0ddcab.png",
          link: "/fr/products/eco-luxury-set",
          moq: "100 pcs",
          leadTime: "15-20 jours",
          extra: "FSC / Papier Pierre"
        },
        {
          badge: "CALAGE SUR MESURE",
          title: "Bo卯te Magn茅tique avec Plateau",
          desc: "Bo卯te 脿 couvercle magn茅tique noir mat haut de gamme avec plateau de calage en mousse moul茅 avec pr茅cision. Id茅al pour les coffrets de soin.",
          image: "https://sc04.alicdn.com/kf/Had1198f76e8244f7b6e067519bad703co.jpg",
          link: "/fr/products/custom-magnetic-gift-boxes",
          moq: "500 pcs",
          leadTime: "12-15 jours",
          extra: "Mousse EVA / Plateau"
        },
          {
            badge: "FINITION RUBAN",
            title: "Bo卯te Cloche Rigide avec Ruban",
            desc: "Bo卯te rigide classique en deux parties avec un n艙ud en ruban de satin pr茅-nou茅. Parfait pour les bijoux de luxe et les coffrets cadeaux.",
            image: "https://sc04.alicdn.com/kf/Hbebfc26f6fe74be2a241b3b45b5a69d3g.jpg",
            link: "/fr/products/magnetic-gift-boxes",
            moq: "500 pcs",
            leadTime: "12-15 jours",
            extra: "Ruban Satin"
          },
          {
            badge: "E-COMMERCE",
            title: "Bo卯te d'Exp茅dition Kraft 脿 Ouverture Facile",
            desc: "Bo卯te d'exp茅dition en carton ondul茅 kraft avec bande d'arrachage int茅gr茅e pour une ouverture instantan茅e. Exp茅rience de d茅ballage durable.",
            image: "https://sc04.alicdn.com/kf/H4cebdb0cd26b429f897a7b927f587eb64.jpg",
            link: "/fr/products/custom-mailer-boxes",
            moq: "100 pcs",
            leadTime: "10-12 jours",
            extra: "Kraft FSC"
          },
        {
          badge: "脡COLOGIQUE",
          title: "Bo卯te d'Exp茅dition en Carte Blanche Premium",
          desc: "Bo卯te d'exp茅dition en papier carte blanche de haute qualit茅 avec impression de logo personnalis茅e. Durable, 茅l茅gante et 100 % recyclable.",
          image: "https://sc02.alicdn.com/kf/A6944a60384cf46a89e823d17403dc1e4Z.png",
          link: "/fr/products/custom-white-card-mailer-box",
          moq: "100 pcs",
          leadTime: "10-12 jours",
          extra: "Carte Blanche"
        },
        {
          badge: "COSM脡TIQUE",
          title: "Bo卯te Cosm茅tique Auto-Montable",
          desc: "Carton pliant haut de gamme avec finitions premium. Con莽u pour les marques de beaut茅 ayant besoin d'une efficacit茅 de stockage 脿 plat sans compromis.",
          image: "https://sc04.alicdn.com/kf/Had73de458596340d2b7f9d73d279f32b94.jpg",
          link: "/fr/products/cosmetic-packaging-boxes",
          moq: "2000 pcs",
          leadTime: "10-12 jours",
          extra: "Papier Couch茅 350g"
        }
      ]
    },
    {
      name: "Boutique & Accessoires",
      desc: "脡l茅gance pour le commerce de d茅tail haut de gamme, la bijouterie et les marques sp茅cialis茅es.",
      items: [
        {
          badge: "PREMIUM",
          title: "Bo卯te 脿 Bijoux en Cuir Rose",
          desc: "Finition en cuir de premi猫re qualit茅 avec un organisateur 脿 tiroir coulissant fluide. Id茅al pour les bagues de luxe et la bijouterie fine.",
          image: "https://sc04.alicdn.com/kf/H6a331bc412a64a00b7c4af3df365dac1i.jpg",
          link: "/fr/blog/jewelry-box-trends-2026-customization",
          moq: "500 pcs",
          leadTime: "12-15 jours",
          extra: "Cuir / Velours"
        },
        {
          badge: "LUXE",
          title: "Bo卯te Magn茅tique avec Feuille d'Or",
          desc: "Bo卯te rigide magn茅tique haut de gamme avec des d茅tails exquis en feuille d'or. Con莽ue pour les coffrets cadeaux premium.",
          image: "https://sc04.alicdn.com/kf/H227b0954e2ad4bf0ba3f0fddc502a3faY.jpg",
          link: "/fr/products/magnetic-gift-boxes",
          moq: "500 pcs",
          leadTime: "15-18 jours",
          extra: "Feuille d'Or"
        },
        {
          badge: "SUR MESURE",
          title: "Sacs en Papier avec Poign茅e Ruban",
          desc: "Sacs en papier 茅l茅gants avec poign茅es en ruban souple et base renforc茅e. Parfait pour le commerce de d茅tail de luxe et les boutiques.",
          image: "https://sc04.alicdn.com/kf/H689a746594d24194910903328f4d9526n.jpg",
          link: "/fr/products",
          moq: "1000 pcs",
          leadTime: "10-12 jours",
          extra: "Poign茅e Ruban"
        },
        {
          badge: "脡COLOGIQUE",
          title: "Ensemble d'Emballage Fast-Food",
          desc: "Ensembles de papier r茅sistants aux graisses, 茅cologiques et certifi茅s FSC. Durables et 茅l茅gants pour les marques artisanales.",
          image: "https://sc04.alicdn.com/kf/H177398f7aa15456ca80b4af84f84382a6.jpg",
          link: "/fr/products",
          moq: "2000 pcs",
          leadTime: "12-15 jours",
          extra: "Recyclable"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-gold-500">
      <Head>
        <title>Catalogue d'Emballage | Solutions Sur Mesure | Saide Packaging</title>
        <meta name="description" content="Explorez notre catalogue d'emballage technique. Sp茅cifications industrielles, MOQ et d茅lais de livraison pour les coffrets cadeaux de luxe." />
      </Head>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-[100] bg-black/40 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
          <Link href="/fr" className="text-2xl font-black tracking-tighter uppercase italic text-white font-montserrat">Saide Packaging</Link>
          <div className="hidden lg:flex items-center space-x-12 text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">
            <Link href="/fr" className="hover:text-white transition-colors">Accueil</Link>
            <Link href="/gallery" className="hover:text-white transition-colors">脡tudes de Cas</Link>
            <Link href="/fr/products" className="text-white">Catalogue</Link>
            <Link href="/blog" className="hover:text-white transition-colors">Analyses</Link>
          </div>
          <a href="/fr#contact" className="bg-[#C9A84C] text-black px-10 py-3.5 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-white shadow-xl">Obtenir un Devis</a>
        </div>
      </nav>

      <main className="pt-40 pb-24 bg-[#0A0A0F]">
        <div className="max-w-[1400px] mx-auto px-6">
          <header className="mb-24">
            <span className="text-[#C9A84C] font-black uppercase text-[10px] tracking-[0.5em] mb-4 block">SOLUTIONS PREMIUM</span>
            <h1 className="text-6xl font-black uppercase tracking-tighter mb-4 italic font-montserrat">Catalogue Bespoke</h1>
            <p className="text-gray-500 font-medium uppercase text-xs tracking-widest">Sp茅cifications techniques pour l'approvisionnement professionnel B2B.</p>
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
                          <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest">D脡LAI</p>
                          <p className="text-[13px] font-bold text-white font-montserrat">{item.leadTime}</p>
                        </div>
                        <div className="space-y-2 pl-4">
                          <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest">FINITION</p>
                          <p className="text-[13px] font-bold text-white truncate font-montserrat" title={item.extra}>{item.extra}</p>
                        </div>
                      </div>

                      {/* Action Button */}
                      <Link href={item.link} className="w-full border border-white/10 hover:border-[#C9A84C] py-4 text-center rounded-xl transition-all group/btn flex items-center justify-center gap-3 mt-auto">
                        <span className="text-[11px] font-black uppercase tracking-[0.25em] text-white group-hover/btn:text-[#C9A84C] transition-colors font-montserrat">
                          鈫?Demander ce Produit
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
