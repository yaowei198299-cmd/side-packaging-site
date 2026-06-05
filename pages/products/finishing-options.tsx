import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import InquiryForm from '../../components/InquiryForm';
import WhatsAppButton from '../../components/WhatsAppButton';

const FinishingOptionsPage = () => {
  const options = [
    {
      title: "Gold & Silver Foil",
      image: "https://sc04.alicdn.com/kf/H227b0954e2ad4bf0ba3f0fddc502a3faY.jpg",
      desc: "Add a metallic, reflective layer to your logo or text for an instant luxury feel."
    },
    {
      title: "Spot UV Coating",
      image: "https://sc04.alicdn.com/kf/Hdf03eb602caa4dd4bce2e15c8f77cb1aA.jpg",
      desc: "Create a glossy, raised effect on specific areas to contrast with matte surfaces."
    },
    {
      title: "Embossing & Debossing",
      image: "https://sc04.alicdn.com/kf/H897da67689e44678976fd2a650c13954R.jpg",
      desc: "Create a 3D tactile experience that customers can feel when they touch your packaging."
    },
    {
      title: "Soft-Touch Lamination",
      image: "https://sc04.alicdn.com/kf/Hfc6f9a416d73448b8d7a8a62c7f6b9edF.jpg",
      desc: "A premium matte finish that feels like velvet to the touch. Anti-scratch and finger-print proof."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-gold-500 overflow-x-hidden">
      <Head>
        <title>Packaging Finishing Options | Gold Foil, Spot UV & Embossing | Saide Packaging</title>
        <meta name="description" content="Explore luxury packaging finishing options: Hot foil stamping, Spot UV, Embossing, and Soft-touch lamination. Elevate your brand identity." />
      </Head>

      <nav className="fixed top-0 left-0 right-0 z-[100] bg-black/40 backdrop-blur-2xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="text-xl font-black tracking-tighter uppercase italic text-white">Saide Packaging</Link>
          <div className="hidden lg:flex items-center space-x-10 text-[9px] font-black uppercase tracking-[0.3em] text-gray-400">
            <Link href="/products" className="hover:text-white transition-colors">Catalog</Link>
            <Link href="/gallery" className="hover:text-white transition-colors">Case Studies</Link>
            <Link href="/about-founder" className="hover:text-white transition-colors">Founders</Link>
          </div>
          <Link href="/inquiry" className="bg-[#d4af37] text-black px-8 py-2.5 rounded-full text-[9px] font-black uppercase tracking-widest hover:bg-white transition-all shadow-xl">Get a Quote</Link>
        </div>
      </nav>

      <header className="relative pt-48 pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <span className="text-[#d4af37] text-xs font-black uppercase tracking-[0.5em] mb-6 block">Art of the Finish</span>
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] mb-12">
            Luxury <br/>
            <span className="text-white/40 italic">Finishing.</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl font-medium leading-relaxed uppercase tracking-tight">
            It's all in the details. Our advanced printing and finishing techniques turn standard cardboard into a premium brand experience.
          </p>
        </div>
      </header>

      <section className="py-40 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-24">
          {options.map((opt, i) => (
            <div key={i} className="group">
              <div className="aspect-video overflow-hidden rounded-[2.5rem] bg-white/5 border border-white/10 mb-10">
                <img src={opt.image} alt={opt.title} className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000" />
              </div>
              <h3 className="text-3xl font-black uppercase tracking-tighter italic mb-6">{opt.title}</h3>
              <p className="text-lg text-gray-500 font-medium leading-relaxed uppercase tracking-tight">{opt.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-40 bg-black border-t border-white/5 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-5xl font-black uppercase tracking-tighter italic mb-12">Elevate Your Brand</h2>
          <p className="text-xl text-gray-500 mb-20">Not sure which finish is best for your design? Our experts provide free technical consultations to ensure your vision is realized perfectly.</p>
          <InquiryForm productTitle="Luxury Finishing Consultation" />
        </div>
      </section>

      <footer className="bg-black text-white py-20 border-t border-white/5 text-center">
        <p className="text-[10px] font-black uppercase tracking-[0.3em] opacity-30 italic">Saide Packaging HK Limited. © 2026. Industrial Luxury standards.</p>
      </footer>

      <WhatsAppButton />
    </div>
  );
};

export default FinishingOptionsPage;
