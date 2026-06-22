import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const ProductsPage = () => {
  const categories = [
    {
      name: "S茅rie Rigide de Luxe",
      desc: "Carton gris haute densit茅 1200g avec finitions sur mesure haut de gamme.",
      items: [
        {
          badge: "脡CO-LUXE",
          title: "Le Set 脡co-Luxe Perp茅tuel",
          desc: "Coffret beaut茅 茅co-luxe certifi茅 FSC avec finition Stone Paper Soft-Touch et inserts moul茅s en myc茅lium 100% sans plastique.",
          image: "https://sc02.alicdn.com/kf/Ae50efd75cc6d448a8e45325d12c0ddcab.png",
          link: "/fr/products/eco-luxury-set",
          moq: "500 pcs",
          leadTime: "15-20 jours",
          extra: "FSC / Stone Paper"
        },
        {
          badge: "INSERT SUR MESURE",
          title: "Bo卯te Magn茅tique avec Plateau",
          desc: "Bo卯te 脿 couvercle magn茅tique noir mat haut de gamme avec plateau en mousse moul茅e avec pr茅cision. Id茅al pour les sets de soin et la cosm茅tique.",
          image: "https://sc04.alicdn.com/kf/Had1198f76e8244f7b6e067519bad703co.jpg",
          link: "/fr/products/custom-magnetic-gift-boxes",
          moq: "200 pcs",
          leadTime: "12-15 jours",
          extra: "Mousse EVA / Plateau"
        },
        {
          badge: "FINITION RUBAN",
          title: "Bo卯te Rigide Cloche avec Ruban",
          desc: "Bo卯te rigide classique en deux parties avec un n艙ud en ruban de satin pr茅-nou茅. Parfait pour les bijoux de luxe et les coffrets cadeaux.",
          image: "https://sc04.alicdn.com/kf/Hbebfc26f6fe74be2a241b3b45b5a69d3g.jpg",
          link: "/fr/products",
          moq: "100 pcs",
          leadTime: "12-15 jours",
          extra: "Ruban Satin"
        },
        {
          badge: "E-COMMERCE",
          title: "Bo卯te d'Exp茅dition Kraft 脿 Ouverture Facile",
          desc: "Bo卯te d'exp茅dition en carton ondul茅 kraft avec bande d'arrachage int茅gr茅e pour une ouverture instantan茅e. Exp茅rience de d茅ballage durable et r茅sistante.",
          image: "https://sc04.alicdn.com/kf/H4cebdb0cd26b429f897a7b927f587eb64.jpg",
          link: "/fr/products",
          moq: "300 pcs",
          leadTime: "10-12 jours",
          extra: "Kraft FSC"
        },
        {
          badge: "脡CO-RESPONSABLE",
          title: "Bo卯te d'Exp茅dition en Carton Blanc Premium",
          desc: "Bo卯te d'exp茅dition en carton blanc de haute qualit茅 avec impression de logo personnalis茅. Durable, 茅l茅gante et 100% recyclable pour le e-commerce haut de gamme.",
          image: "https://sc02.alicdn.com/kf/A6944a60384cf46a89e823d17403dc1e4Z.png",
          link: "/fr/products/custom-white-card-mailer-box",
          moq: "500 pcs",
          leadTime: "10-12 jours",
          extra: "Carton Blanc"
        },
        {
          badge: "COSM脡TIQUE",
          title: "Bo卯te Cosm茅tique Auto-Montable",
          desc: "Carton pliant haut de gamme avec finitions premium. Con莽u pour les marques de beaut茅 ayant besoin d'une efficacit茅 de stockage 脿 plat sans compromis sur le luxe.",
          image: "https://sc04.alicdn.com/kf/Had73de458596340d2b7f9d73d279f32b94.jpg",
          link: "/fr/products/cosmetic-packaging-boxes",
          moq: "2000 pcs",
          leadTime: "10-12 jours",
          extra: "Papier d'art 350g"
        }
      ]
    },
    {
      name: "Boutique & Accessoires",
      desc: "脡l茅gance pour le commerce de d茅tail haut de gamme, la joaillerie et les marques sp茅cialis茅es.",
      items: [
        {
          badge: "PREMIUM",
          title: "Bo卯te 脿 Bijoux en Cuir Rose",
          desc: "Finition en cuir premium avec un organiseur 脿 tiroir coulissant fluide. Id茅al pour les bagues haut de gamme et les bijoux de boutique.",
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
          link: "/fr/products",
          moq: "200 pcs",
          leadTime: "15-18 jours",
          extra: "Feuille d'Or"
        },
        {
          badge: "SUR MESURE",
          title: "Sacs en Papier avec Poign茅e Ruban",
          desc: "Sacs en papier 茅l茅gants avec poign茅es en ruban doux et base renforc茅e. Parfait pour la vente au d茅tail de luxe et les boutiques.",
          image: "https://sc04.alicdn.com/kf/H689a746594d24194910903328f4d9526n.jpg",
          link: "/fr/products",
          moq: "1000 pcs",
          leadTime: "10-12 jours",
          extra: "Poign茅e Ruban"
        },
        {
          badge: "脡CO-RESPONSABLE",
          title: "Set d'Emballage Fast-Food",
          desc: "Sets de papier ingraissables certifi茅s FSC et 茅co-responsables. Durables et 茅l茅gants pour les marques artisanales.",
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
        <title>Catalogue d'Emballage | Solutions de Luxe sur Mesure | Saide Packaging</title>
        <meta name="description" content="Explorez notre catalogue technique d'emballage. Sp茅cifications industrielles, MOQ et d茅lais de livraison pour les bo卯tes rigides de luxe et les solutions de vente au d茅tail." />
      </Head>

      {/* Navbar: Sophisticated & Minimalist */}
      <nav className="fixed top-0 left-0 right-0 z-[100] bg-black/40 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
          <Link href="/fr" className="text-2xl font-black tracking-tighter uppercase italic text-white">Saide Packaging</Link>
          <div className="hidden lg:flex items-center space-x-12 text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">
            <Link href="/fr" className="hover:text-white transition-colors">Accueil</Link>
            <Link href="/fr/gallery" className="hover:text-white transition-colors">脡tudes de cas</Link>
            <Link href="/fr/products" className="text-white">Catalogue</Link>
            <Link href="/fr/blog" className="hover:text-white transition-colors">Analyses</Link>
          </div>
          <a href="/fr/#contact" className="bg-white text-black px-10 py-3.5 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-gray-200 shadow-xl">Obtenir un devis</a>
        </div>
      </nav>

      <main className="pt-40 pb-24 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-[1600px] mx-auto px-6">
          <header className="mb-24">
            <h1 className="text-5xl font-black uppercase tracking-tighter mb-4 italic">Catalogue sur Mesure</h1>
            <p className="text-gray-500 font-medium">Sp茅cifications techniques pour l'approvisionnement B2B professionnel.</p>
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
                          <p className="text-[8px] font-black text-gray-600 uppercase tracking-widest mb-1">D茅lai</p>
                          <p className="text-[10px] font-bold text-gray-300">{item.leadTime}</p>
                        </div>
                        <div>
                          <p className="text-[8px] font-black text-gray-600 uppercase tracking-widest mb-1">Int茅rieur/Mat茅riau</p>
                          <p className="text-[10px] font-bold text-gray-300">{item.extra}</p>
                        </div>
                      </div>

                      {/* Action */}
                      <Link href={item.link} className="mt-8 border border-white/10 hover:border-gold-500/50 py-3 text-center rounded-sm transition-all group/btn">
                        <span className="text-[9px] font-black uppercase tracking-widest text-gray-400 group-hover/btn:text-white transition-colors">
                          鈫?Demander un devis pour ce produit
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
             <p className="text-[10px] font-bold uppercase tracking-widest text-gray-600">Solutions de fabrication B2B premium.</p>
          </div>
          <p className="text-[10px] font-bold uppercase tracking-widest text-gray-600">&copy; 2026 Saide Packaging. Certifi茅 FSC & BSCI.</p>
        </div>
      </footer>
    </div>
  );
};

export default ProductsPage;
