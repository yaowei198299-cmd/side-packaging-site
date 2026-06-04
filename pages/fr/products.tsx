import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const ProductsPage = () => {
  const categories = [
    {
      name: "Série Rigide de Luxe",
      desc: "Carton gris haute densité 1200g avec finitions sur mesure haut de gamme.",
      items: [
        {
          badge: "ÉCO-LUXE",
          title: "Le Set Éco-Luxe Perpétuel",
          desc: "Coffret beauté éco-luxe certifié FSC avec finition Stone Paper Soft-Touch et inserts moulés en mycélium 100% sans plastique.",
          image: "https://sc02.alicdn.com/kf/Ae50efd75cc6d448a8e45325d12c0ddcab.png",
          link: "/fr/products/eco-luxury-set",
          moq: "500 pcs",
          leadTime: "15-20 jours",
          extra: "FSC / Stone Paper"
        },
        {
          badge: "INSERT SUR MESURE",
          title: "Boîte Magnétique avec Plateau",
          desc: "Boîte à couvercle magnétique noir mat haut de gamme avec plateau en mousse moulée avec précision. Idéal pour les sets de soin et la cosmétique.",
          image: "https://sc04.alicdn.com/kf/Had1198f76e8244f7b6e067519bad703co.jpg",
          link: "/fr/products/custom-magnetic-gift-boxes",
          moq: "200 pcs",
          leadTime: "12-15 jours",
          extra: "Mousse EVA / Plateau"
        },
        {
          badge: "FINITION RUBAN",
          title: "Boîte Rigide Cloche avec Ruban",
          desc: "Boîte rigide classique en deux parties avec un nœud en ruban de satin pré-noué. Parfait pour les bijoux de luxe et les coffrets cadeaux.",
          image: "https://sc04.alicdn.com/kf/Hbebfc26f6fe74be2a241b3b45b5a69d3g.jpg",
          link: "/fr/products",
          moq: "100 pcs",
          leadTime: "12-15 jours",
          extra: "Ruban Satin"
        },
        {
          badge: "E-COMMERCE",
          title: "Boîte d'Expédition Kraft à Ouverture Facile",
          desc: "Boîte d'expédition en carton ondulé kraft avec bande d'arrachage intégrée pour une ouverture instantanée. Expérience de déballage durable et résistante.",
          image: "https://sc04.alicdn.com/kf/H4cebdb0cd26b429f897a7b927f587eb64.jpg",
          link: "/fr/products",
          moq: "300 pcs",
          leadTime: "10-12 jours",
          extra: "Kraft FSC"
        },
        {
          badge: "ÉCO-RESPONSABLE",
          title: "Boîte d'Expédition en Carton Blanc Premium",
          desc: "Boîte d'expédition en carton blanc de haute qualité avec impression de logo personnalisé. Durable, élégante et 100% recyclable pour le e-commerce haut de gamme.",
          image: "https://sc02.alicdn.com/kf/A6944a60384cf46a89e823d17403dc1e4Z.png",
          link: "/fr/products/custom-white-card-mailer-box",
          moq: "500 pcs",
          leadTime: "10-12 jours",
          extra: "Carton Blanc"
        },
        {
          badge: "COSMÉTIQUE",
          title: "Boîte Cosmétique Auto-Montable",
          desc: "Carton pliant haut de gamme avec finitions premium. Conçu pour les marques de beauté ayant besoin d'une efficacité de stockage à plat sans compromis sur le luxe.",
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
      desc: "Élégance pour le commerce de détail haut de gamme, la joaillerie et les marques spécialisées.",
      items: [
        {
          badge: "PREMIUM",
          title: "Boîte à Bijoux en Cuir Rose",
          desc: "Finition en cuir premium avec un organiseur à tiroir coulissant fluide. Idéal pour les bagues haut de gamme et les bijoux de boutique.",
          image: "https://sc04.alicdn.com/kf/H6a331bc412a64a00b7c4af3df365dac1i.jpg",
          link: "/fr/blog/jewelry-box-trends-2026-customization",
          moq: "500 pcs",
          leadTime: "12-15 jours",
          extra: "Cuir / Velours"
        },
        {
          badge: "LUXE",
          title: "Boîte Magnétique avec Feuille d'Or",
          desc: "Boîte rigide magnétique haut de gamme avec des détails exquis en feuille d'or. Conçue pour les coffrets cadeaux premium.",
          image: "https://sc04.alicdn.com/kf/H227b0954e2ad4bf0ba3f0fddc502a3faY.jpg",
          link: "/fr/products",
          moq: "200 pcs",
          leadTime: "15-18 jours",
          extra: "Feuille d'Or"
        },
        {
          badge: "SUR MESURE",
          title: "Sacs en Papier avec Poignée Ruban",
          desc: "Sacs en papier élégants avec poignées en ruban doux et base renforcée. Parfait pour la vente au détail de luxe et les boutiques.",
          image: "https://sc04.alicdn.com/kf/H689a746594d24194910903328f4d9526n.jpg",
          link: "/fr/products",
          moq: "1000 pcs",
          leadTime: "10-12 jours",
          extra: "Poignée Ruban"
        },
        {
          badge: "ÉCO-RESPONSABLE",
          title: "Set d'Emballage Fast-Food",
          desc: "Sets de papier ingraissables certifiés FSC et éco-responsables. Durables et élégants pour les marques artisanales.",
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
        <title>Catalogue d'Emballage | Solutions de Luxe sur Mesure | Side Packaging HK Limited</title>
        <meta name="description" content="Explorez notre catalogue technique d'emballage. Spécifications industrielles, MOQ et délais de livraison pour les boîtes rigides de luxe et les solutions de vente au détail." />
      </Head>

      {/* Navbar: Sophisticated & Minimalist */}
      <nav className="fixed top-0 left-0 right-0 z-[100] bg-black/40 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
          <Link href="/fr" className="text-2xl font-black tracking-tighter uppercase italic text-white">Side Packaging</Link>
          <div className="hidden lg:flex items-center space-x-12 text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">
            <Link href="/fr" className="hover:text-white transition-colors">Accueil</Link>
            <Link href="/fr/gallery" className="hover:text-white transition-colors">Études de cas</Link>
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
            <p className="text-gray-500 font-medium">Spécifications techniques pour l'approvisionnement B2B professionnel.</p>
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
                          <p className="text-[8px] font-black text-gray-600 uppercase tracking-widest mb-1">Délai</p>
                          <p className="text-[10px] font-bold text-gray-300">{item.leadTime}</p>
                        </div>
                        <div>
                          <p className="text-[8px] font-black text-gray-600 uppercase tracking-widest mb-1">Intérieur/Matériau</p>
                          <p className="text-[10px] font-bold text-gray-300">{item.extra}</p>
                        </div>
                      </div>

                      {/* Action */}
                      <Link href={item.link} className="mt-8 border border-white/10 hover:border-gold-500/50 py-3 text-center rounded-sm transition-all group/btn">
                        <span className="text-[9px] font-black uppercase tracking-widest text-gray-400 group-hover/btn:text-white transition-colors">
                          → Demander un devis pour ce produit
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
             <p className="text-[10px] font-bold uppercase tracking-widest text-gray-600">Solutions de fabrication B2B premium.</p>
          </div>
          <p className="text-[10px] font-bold uppercase tracking-widest text-gray-600">&copy; 2026 Side Packaging HK Limited. Certifié FSC & BSCI.</p>
        </div>
      </footer>
    </div>
  );
};

export default ProductsPage;
