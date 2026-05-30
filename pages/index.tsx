// Version: Luxury Poster 2.1 - Force Update
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import LeadMagnet from '../components/LeadMagnet';
import InquiryForm from '../components/InquiryForm';

const HomePage = () => {
  const boxStyles = [
    { title: "Magnetic Box", image: "https://s.alicdn.com/@sc04/kf/Had1198f76e8244f7b6e067519bad703co/Custom-Luxury-Eco-Friendly-Biodegradable-Magnetic-Closure.jpg", link: "/products/custom-magnetic-gift-boxes" },
    { title: "Lid & Base Box", image: "https://s.alicdn.com/@sc04/kf/Hbebfc26f6fe74be2a241b3b45b5a69d3g/Custom-Logo-Gold-Foil-Birthday-Valentine-s.jpg", link: "/products" },
    { title: "Drawer Box", image: "https://sc04.alicdn.com/kf/Hdf03eb602caa4dd4bce2e15c8f77cb1aA.jpg", link: "/products" },
    { title: "Mailer Box", image: "https://s.alicdn.com/@sc04/kf/H4cebdb0cd26b429f897a7b927f587eb64/Kraft-Paper-Mailer-Boxes-Rectangle-Gift-Craft.jpg", link: "/products" },
    { title: "Folding Box", image: "https://s.alicdn.com/@sc04/kf/Had73de458596340d2b7f9d73d279f32b94/Eco-Friendly-Recycled-Materials-Recyclable-Self-Erecting.jpg", link: "/products" },
    { title: "Jewelry Box", image: "https://s.alicdn.com/@sc04/kf/H6a331bc412a64a00b7c4af3df365dac1i/Custom-Jewelry-Pink-Sponge-Pouch-Bags-Earring.jpg", link: "/blog/jewelry-box-trends-2026-customization" }
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-gold-500">
      <Head>
        <title>Side Packaging | Official Luxury Factory Site | FSC 2026</title>
        <meta name="description" content="Official luxury factory website for Side Packaging. Premium custom boxes with 20 years of manufacturing expertise. FSC certified." />
      </Head>

      {/* Navbar: Sophisticated & Minimalist */}
      <nav className="fixed top-0 left-0 right-0 z-[100] bg-black/40 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
          <Link href="/" className="text-2xl font-black tracking-tighter uppercase italic text-white">Side Packaging</Link>
          <div className="hidden lg:flex items-center space-x-12 text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">
            <Link href="/" className="text-white">Home</Link>
            <Link href="/gallery" className="hover:text-white transition-colors">Case Studies</Link>
            <Link href="/products" className="hover:text-white transition-colors">Catalog</Link>
            <Link href="/blog" className="hover:text-white transition-colors">Insights</Link>
          </div>
          <a href="#contact" className="bg-white text-black px-10 py-3.5 rounded-full text-[10px] font-black uppercase tracking-widest hover:scale-105 transition-all shadow-2xl">Get Quote</a>
        </div>
      </nav>

      {/* Hero: Luxury Poster Style */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Full Bleed Poster Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://sc02.alicdn.com/kf/Af3e549277998401db5cd4e45e1b89543F.png" 
            alt="Luxury Packaging Hero Poster" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center mt-20">
          <div className="flex justify-center gap-4 mb-10">
             <span className="bg-white/10 backdrop-blur-md text-white px-5 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.3em] border border-white/20">FSC Certified Factory</span>
             <span className="bg-blue-600/80 backdrop-blur-md text-white px-5 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.3em]">20Y Expertise</span>
          </div>
          <h1 className="text-7xl md:text-9xl font-black uppercase tracking-tighter mb-8 leading-[0.85] text-white">
            20 Years in <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-white italic">Packaging.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-14 max-w-3xl mx-auto font-medium leading-relaxed">
            Your Packaging Partner in China. Not just a manufacturer, but a seasoned insider dedicated to helping your brand avoid expensive mistakes.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <a href="#contact" className="bg-white text-black px-16 py-6 rounded-full font-black uppercase tracking-widest hover:scale-105 shadow-2xl transition-all">Get Quote in 24h</a>
            <Link href="/about-founder" className="bg-transparent text-white border-2 border-white/30 px-16 py-6 rounded-full font-black uppercase tracking-widest hover:bg-white/10 backdrop-blur-sm transition-all">Meet the Founder</Link>
          </div>
        </div>
      </section>

      {/* Trust & Factory Status Strip */}
      <section className="py-20 bg-black border-y border-white/5 relative z-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-between items-center gap-12 text-center md:text-left">
           <div>
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-500 mb-2">Daily Production</p>
              <p className="text-3xl font-black italic">15,000+ Units</p>
           </div>
           <div>
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-500 mb-2">Lead Time</p>
              <p className="text-3xl font-black italic">10-15 Days</p>
           </div>
           <div>
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-500 mb-2">Sustainability</p>
              <p className="text-3xl font-black italic text-blue-500">FSC / 100% Recyclable</p>
           </div>
           <div>
              <a href="https://wa.me/8613699786538" className="bg-blue-600 text-white px-8 py-4 rounded-full font-black uppercase tracking-widest text-[10px] hover:bg-blue-700 transition-all">WhatsApp Consultation</a>
           </div>
        </div>
      </section>

      {/* Shop by Box Style (Direct Navigation) */}
      <section className="py-32 bg-black border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div>
              <h2 className="text-5xl font-black uppercase tracking-tighter leading-none mb-4">Shop By <br/><span className="italic text-white/40">Box Style.</span></h2>
              <p className="text-gray-500 font-medium italic">Skip the fluff. Find the exact structure your product needs.</p>
            </div>
            <Link href="/products" className="text-[11px] font-black uppercase tracking-widest border-b-2 border-white pb-2 hover:text-gray-400 transition-all">View All 150+ Designs</Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {boxStyles.map((style, i) => (
              <Link key={i} href={style.link} className="group text-center">
                <div className="aspect-square bg-white/5 rounded-[2rem] border border-white/10 mb-4 overflow-hidden shadow-2xl">
                   <img src={style.image} alt={style.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 opacity-60 group-hover:opacity-100" />
                </div>
                <p className="text-[11px] font-black uppercase tracking-widest text-gray-500 group-hover:text-white transition-colors">{style.title}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* The Factory: Heavy Machinery & QC */}
      <section className="py-32 bg-gray-950">
         <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-32 items-center">
               <div className="grid grid-cols-2 gap-6 relative">
                  <div className="aspect-square bg-white/5 rounded-3xl border border-white/10 p-8 flex flex-col justify-end overflow-hidden group/machine">
                     <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover/machine:opacity-40 transition-opacity">
                        <source src="/videos/automated-production.mp4" type="video/mp4" />
                     </video>
                     <div className="relative z-10">
                        <p className="text-4xl font-black mb-2 italic text-blue-600">01.</p>
                        <p className="text-[11px] font-black uppercase tracking-widest">High-Speed Lamination</p>
                     </div>
                  </div>
                  <div className="aspect-square bg-white/5 rounded-3xl border border-white/10 p-8 flex flex-col justify-end">
                     <p className="text-4xl font-black mb-2 italic text-blue-600">02.</p>
                     <p className="text-[11px] font-black uppercase tracking-widest">Precision Die-Cutting</p>
                  </div>
                  <div className="aspect-square bg-white/5 rounded-3xl border border-white/10 p-8 flex flex-col justify-end">
                     <p className="text-4xl font-black mb-2 italic text-blue-600">03.</p>
                     <p className="text-[11px] font-black uppercase tracking-widest">Auto Rigid Box Setup</p>
                  </div>
                  <div className="aspect-square bg-white/5 rounded-3xl border border-white/10 p-8 flex flex-col justify-end">
                     <p className="text-4xl font-black mb-2 italic text-blue-600">04.</p>
                     <p className="text-[11px] font-black uppercase tracking-widest">In-house QC Lab</p>
                  </div>
               </div>
               <div>
                  <h2 className="text-5xl font-black uppercase tracking-tighter leading-[0.85] mb-8">Real Factory. <br/><span className="text-white/40 italic">Real Responsibility.</span></h2>
                  <p className="text-xl text-gray-400 mb-12 font-medium leading-relaxed">
                     We operate 20,000 sqm of manufacturing space in Southern China. Every box is crafted using 100% recyclable, FSC-certified materials. No trading agent markups. No communication delays.
                  </p>
                  <div className="space-y-8">
                     <div className="flex items-center gap-6">
                        <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-blue-500">✓</div>
                        <p className="font-black uppercase tracking-widest text-xs">FSC COC Certified Supply Chain</p>
                     </div>
                     <div className="flex items-center gap-6">
                        <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-blue-500">✓</div>
                        <p className="font-black uppercase tracking-widest text-xs">BSCI Audited Social Standards</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Industrial Vertical Case Studies */}
      <section className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-black uppercase tracking-tighter mb-20 text-center">Bespoke By <br/><span className="italic text-white/40">Industry.</span></h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { title: 'Beauty & Skincare', img: 'https://s.alicdn.com/@sc04/kf/Had73de458596340d2b7f9d73d279f32b94/Eco-Friendly-Recycled-Materials-Recyclable-Self-Erecting.jpg' },
              { title: 'High-End Jewelry', img: 'https://s.alicdn.com/@sc04/kf/Hbebfc26f6fe74be2a241b3b45b5a69d3g/Custom-Logo-Gold-Foil-Birthday-Valentine-s.jpg' },
              { title: 'E-commerce Brands', img: 'https://s.alicdn.com/@sc04/kf/H4cebdb0cd26b429f897a7b927f587eb64/Kraft-Paper-Mailer-Boxes-Rectangle-Gift-Craft.jpg' },
              { title: 'Luxury Watches', img: 'https://s.alicdn.com/@sc04/kf/Hbebfc26f6fe74be2a241b3b45b5a69d3g/Custom-Logo-Gold-Foil-Birthday-Valentine-s.jpg' }
            ].map((s, i) => (
              <div key={i} className="relative group rounded-[2.5rem] overflow-hidden h-[400px] border border-white/5">
                <img src={s.img} alt={s.title} className="absolute inset-0 w-full h-full object-cover grayscale opacity-40 group-hover:opacity-60 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent p-10 flex flex-col justify-end">
                   <h3 className="text-xl font-black text-white uppercase mb-4 leading-none">{s.title}</h3>
                   <Link href="/products" className="text-white text-[9px] font-bold uppercase tracking-widest border-b border-white self-start pb-2">Explore Solutions</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 24H Quote Promise Section */}
      <section id="contact" className="py-32 bg-gray-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-32 items-start">
            <div>
               <span className="text-blue-500 font-black text-xs uppercase tracking-[0.5em] mb-6 block italic">Inquiry Center</span>
               <h2 className="text-7xl font-black uppercase tracking-tighter leading-[0.85] mb-10">Bespoke <br/>Briefing.</h2>
               <div className="space-y-12 mb-16">
                  <div className="flex gap-8">
                     <p className="text-4xl font-black text-white/20 italic">01.</p>
                     <div>
                        <p className="text-white font-black uppercase text-sm tracking-widest mb-2">24h Quote Guarantee</p>
                        <p className="text-gray-500 text-sm">Submit your specs and get a technical cost breakdown in 1 business day.</p>
                     </div>
                  </div>
                  <div className="flex gap-8">
                     <p className="text-4xl font-black text-white/20 italic">02.</p>
                     <div>
                        <p className="text-white font-black uppercase text-sm tracking-widest mb-2">Free Dieline Support</p>
                        <p className="text-gray-500 text-sm">Need help with structural design? Our engineers provide free dielines for your artwork.</p>
                     </div>
                  </div>
                  <div className="flex gap-8">
                     <p className="text-4xl font-black text-white/20 italic">03.</p>
                     <div>
                        <p className="text-white font-black uppercase text-sm tracking-widest mb-2">Direct Lab Analysis</p>
                        <p className="text-gray-500 text-sm">Send us your target box, and we'll analyze the material to reduce 10-30% cost.</p>
                     </div>
                  </div>
               </div>
               <div className="bg-white/5 p-12 rounded-[2.5rem] border border-white/10">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-4">Direct Contact</p>
                  <p className="text-2xl font-black mb-2">jocelyn@saidepackaging.com</p>
                  <p className="text-xl font-bold text-blue-500">+86-13699786538</p>
               </div>
            </div>
            <div className="bg-white/5 p-16 rounded-[3rem] border border-white/10 backdrop-blur-lg">
              <h3 className="text-2xl font-black uppercase mb-12 italic text-center underline decoration-blue-600">Start Your Brief</h3>
              <InquiryForm />
              <p className="text-center text-[10px] font-bold text-gray-600 mt-12 uppercase tracking-widest">
                 Upload Artwork or Reference Photo for Faster Response.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black text-white py-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
          <div className="flex flex-col gap-4">
             <p className="text-xl font-black tracking-tighter uppercase italic">Side Packaging</p>
             <p className="text-[10px] font-bold uppercase tracking-widest text-gray-600">Factory Direct Custom Packaging Solutions.</p>
          </div>
          <div className="flex flex-col items-center md:items-end gap-4">
             <p className="text-[10px] font-bold uppercase tracking-widest text-gray-600">&copy; 2026 Side Packaging HK Limited. All Rights Reserved.</p>
             <div className="flex gap-8 opacity-20">
                <span className="text-[9px] font-black uppercase tracking-widest">FSC Certified</span>
                <span className="text-[9px] font-black uppercase tracking-widest">BSCI Audited</span>
                <span className="text-[9px] font-black uppercase tracking-widest">ISO9001:2015</span>
             </div>
          </div>
        </div>
      </footer >

      <LeadMagnet />
    </div >
  );
};

export default HomePage;
v>
      </footer >

      <LeadMagnet />
    </div >
  );
};

export default HomePage;
