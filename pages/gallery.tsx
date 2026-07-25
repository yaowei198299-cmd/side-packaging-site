import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import InquiryForm from '../components/InquiryForm';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

const GalleryPage = () => {
  const [filter, setFilter] = useState('All');

  const categories = [
    "All", "Magnetic", "Rigid Setup", "Folding", "Mailer", "Drawer", "Lid & Base", "Jewelry", "Cosmetic", "Food"
  ];

  const projects = [
    { title: "Luxury Magnetic Perfume Box", category: "Magnetic", image: "https://sc04.alicdn.com/kf/H227b0954e2ad4bf0ba3f0fddc502a3faY.jpg", tags: ["FSC", "Gold Foil"] },
    { title: "Bespoke Jewelry Set Box", category: "Jewelry", image: "https://sc04.alicdn.com/kf/H6a331bc412a64a00b7c4af3df365dac1i.jpg", tags: ["Velvet", "Small MOQ"] },
    { title: "Premium Kraft Mailer", category: "Mailer", image: "https://sc04.alicdn.com/kf/H4cebdb0cd26b429f897a7b927f587eb64.jpg", tags: ["Sustainable", "Durable"] },
    { title: "Lid & Base Gift Box", category: "Lid & Base", image: "https://sc04.alicdn.com/kf/Hbebfc26f6fe74be2a241b3b45b5a69d3g.jpg", tags: ["Rigid", "Art Paper"] },
    { title: "Cosmetic Sliding Drawer", category: "Drawer", image: "https://sc04.alicdn.com/kf/Hdf03eb602caa4dd4bce2e15c8f77cb1aA.jpg", tags: ["Soft Touch", "Spot UV"] },
    { title: "Eco-Friendly Food Packaging", category: "Food", image: "https://sc04.alicdn.com/kf/Had73de458596340d2b7f9d73d279f32b94.jpg", tags: ["Food Grade", "Oil Proof"] },
    { title: "Custom Watch Rigid Box", category: "Rigid Setup", image: "https://sc04.alicdn.com/kf/Hfc6f9a416d73448b8d7a8a62c7f6b9edF.jpg", tags: ["Luxury", "Industrial"] },
    { title: "Electronics Accessory Box", category: "Cosmetic", image: "https://sc04.alicdn.com/kf/H897da67689e44678976fd2a650c13954R.jpg", tags: ["Embossed", "Seal"] },
    { title: "Triangle Snack Box", category: "Food", image: "https://sc04.alicdn.com/kf/H177398f7aa15456ca80b4af84f84382a6.jpg", tags: ["Unique Shape", "Magnetic"] },
    { title: "Flower Bouquet Rigid Box", category: "Rigid Setup", image: "https://sc04.alicdn.com/kf/H610079537f9f40988ccbb03e6eebec3cE.jpg", tags: ["Illustration", "Handmade"] },
    { title: "Laser Cut Macaron Box", category: "Rigid Setup", image: "https://sc04.alicdn.com/kf/H69eba95d165a4b129b8abe2baf561c0f9.jpg", tags: ["Laser Cut", "Mini"] },
    { title: "Folding Kraft Gift Folder", category: "Folding", image: "https://sc04.alicdn.com/kf/Hd2a4d4ee7b674771a4921b9d43bff2b73.jpg", tags: ["Folder", "Reusable"] }
  ];

  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-gold-500">
      <Head>
        <title>Project Gallery | Custom Box Styles & Case Studies | Saide Packaging</title>
        <meta name="description" content="Browse our extensive gallery of custom packaging projects. Shop by box style: magnetic, rigid, mailer, folding, and more. B2B packaging inspiration." />
      </Head>

      {/* Navbar: Sophisticated & Minimalist */}
      <nav className="fixed top-0 left-0 right-0 z-[100] bg-black/20 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
          <Link href="/" className="text-2xl font-black tracking-tighter uppercase italic text-white">Saide Packaging</Link>
          <div className="hidden lg:flex items-center space-x-12 text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <Link href="/gallery" className="text-white">Case Studies</Link>
            <Link href="/products" className="hover:text-white transition-colors">Catalog</Link>
            <Link href="/blog" className="hover:text-white transition-colors">Insights</Link>
          </div>
          <a href="/#contact" className="bg-white text-black px-10 py-3.5 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-gray-200 transition-all shadow-xl">Get Quote</a>
        </div>
      </nav>

      <main className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <header className="mb-24 text-center">
            <span className="text-blue-500 font-black text-xs uppercase tracking-[0.5em] mb-6 block">Inspiration & Excellence</span>
            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] mb-8">Case <br/><span className="text-white/40 italic">Studies.</span></h1>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto font-medium italic">Discover why 500+ global brands trust Saide Packaging for their most critical product launches.</p>
          </header>

          {/* Filtering System */}
          <div className="flex flex-wrap justify-center gap-4 mb-20">
            {categories.map((cat, i) => (
              <button
                key={i}
                onClick={() => setFilter(cat)}
                className={`px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all border ${
                  filter === cat ? 'bg-white text-black border-white' : 'bg-white/5 text-gray-400 border-white/10 hover:border-white/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid: Case Studies */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-32">
            {filteredProjects.map((p, i) => (
              <div key={i} className="group relative border border-white/5 rounded-[3rem] p-10 hover:border-white/20 transition-all bg-black shadow-2xl flex flex-col">
                <div className="aspect-square bg-gray-900 rounded-[2.5rem] flex items-center justify-center mb-8 overflow-hidden relative border border-white/5">
                   <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700" />
                   <div className="absolute top-6 left-6 bg-black/60 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full text-[9px] font-black uppercase tracking-widest">
                     {p.category}
                   </div>
                </div>
                <h3 className="text-2xl font-black uppercase mb-6 tracking-tight group-hover:text-blue-500 transition-colors">{p.title}</h3>
                <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                   {p.tags.map((tag, idx) => (
                     <span key={idx} className="text-[9px] font-bold text-gray-500 uppercase tracking-widest bg-white/5 px-3 py-1 rounded-full">{tag}</span>
                   ))}
                </div>
                <a href={`https://wa.me/8613699786538?text=I'm interested in a project like: ${p.title}`} className="text-[10px] font-black uppercase tracking-widest text-white border-b border-white self-start pb-2 hover:text-gray-400 hover:border-gray-400 transition-all">
                  Consult This Style <span>→</span>
                </a>
              </div>
            ))}
          </div>

          {/* Before / After Section */}
          <section className="py-32 border-t border-white/5">
             <div className="grid lg:grid-cols-2 gap-24 items-center">
                <div>
                   <span className="text-blue-500 font-black text-xs uppercase tracking-[0.5em] mb-6 block">Optimization Impact</span>
                   <h2 className="text-5xl font-black uppercase tracking-tighter mb-8 leading-tight italic underline decoration-blue-600">The Power of <br/>Upgraded Unboxing.</h2>
                   <p className="text-xl text-gray-400 font-medium mb-12">See how a boutique jewelry brand reduced transit damage by 40% and increased social media unboxing shares by 300% after switching to our custom magnetic rigid boxes.</p>
                   <div className="grid grid-cols-2 gap-8">
                      <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
                         <p className="text-white font-black uppercase text-[10px] tracking-widest mb-4">Before</p>
                         <p className="text-gray-500 text-sm italic">Standard thin folding box. High damage rate. Forgettable brand experience.</p>
                      </div>
                      <div className="bg-blue-600/20 p-8 rounded-3xl border border-blue-600/30">
                         <p className="text-white font-black uppercase text-[10px] tracking-widest mb-4 text-blue-400">After (Saide Packaging)</p>
                         <p className="text-white text-sm font-medium">1200gsm Magnetic Rigid Box. Velvet insert. Premium foil finish. Zero damage.</p>
                      </div>
                   </div>
                </div>
                 <div className="aspect-[4/5] bg-white/5 rounded-[4rem] border border-white/10 overflow-hidden relative shadow-2xl">
                    <img src="https://sc04.alicdn.com/kf/Had1198f76e8244f7b6e067519bad703co.jpg" alt="Optimization Result" className="w-full h-full object-cover   group-hover:-0 transition-all" />
                   <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white text-black px-8 py-4 rounded-full font-black uppercase tracking-widest text-xs shadow-2xl">Bespoke Upgrade</div>
                   </div>
                </div>
             </div>
          </section>

          {/* Inquiry Section */}
          <section id="contact" className="py-32">
             <div className="max-w-5xl mx-auto">
                <h2 className="text-6xl font-black uppercase tracking-tighter text-center mb-20 italic">Start Your Project</h2>
                <div className="bg-white/5 p-16 rounded-[3rem] border border-white/10 backdrop-blur-lg">
                   <InquiryForm />
                </div>
             </div>
          </section>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default GalleryPage;
