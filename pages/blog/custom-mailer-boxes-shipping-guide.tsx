import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import InquiryForm from '../../components/InquiryForm';
import WhatsAppButton from '../../components/WhatsAppButton';

const ShippingGuide = () => {
  return (
    <div className="min-h-screen bg-[#0A0A0F] text-white font-sans selection:bg-[#C9A84C]/30 overflow-x-hidden">
      <Head>
        <title>The Comprehensive Guide to Custom Mailer Boxes: Boosting E-commerce Branding in 2026 | Saide Packaging</title>
        <meta name="description" content="Discover how custom mailer boxes can elevate your brand's unboxing experience and reduce shipping costs. A complete 2026 guide for e-commerce entrepreneurs." />
      </Head>

      <nav className="fixed top-0 left-0 right-0 z-[100] bg-[#0A0A0F]/40 backdrop-blur-2xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="text-xl font-black tracking-tighter uppercase italic text-white font-montserrat">Saide Packaging</Link>
          <div className="hidden lg:flex items-center space-x-10 text-[9px] font-black uppercase tracking-[0.3em] text-gray-400">
            <Link href="/products" className="hover:text-white transition-colors">Catalog</Link>
            <Link href="/gallery" className="hover:text-white transition-colors">Case Studies</Link>
            <Link href="/about-founder" className="hover:text-white transition-colors">Founders</Link>
          </div>
          <Link href="/inquiry" className="bg-[#C9A84C] text-black px-8 py-2.5 rounded-full text-[9px] font-black uppercase tracking-widest hover:bg-white transition-all shadow-xl font-montserrat">Get a Quote</Link>
        </div>
      </nav>

      <main className="pt-48 pb-32">
        <div className="max-w-4xl mx-auto px-6">
          <Link href="/blog" className="text-[#C9A84C] font-black text-xs uppercase tracking-widest mb-12 block hover:translate-x-[-4px] transition-transform">鈫?Back to Blog</Link>

          <article className="space-y-16">
            <header className="space-y-8">
              <span className="text-[#C9A84C] text-xs font-black uppercase tracking-[0.5em] block">Shipping & Logistics</span>
              <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[1.0] italic font-montserrat">
                The Comprehensive Guide to <br/>
                <span className="text-white/40">Custom Mailer Boxes in 2026</span>
              </h1>
              <p className="text-xl text-gray-400 font-medium leading-relaxed uppercase tracking-tight">
                How premium unboxing and structural engineering drive DTC brand growth.
              </p>
              <div className="border-t border-white/10 pt-6 flex gap-12 text-[10px] font-bold uppercase tracking-widest text-gray-500">
                <span>By: Saide Expert Team</span>
                <span>Date: June 22, 2026</span>
                <span>Read Time: 12 min</span>
              </div>
            </header>

            <section className="space-y-8">
              <h2 className="text-2xl font-black uppercase tracking-tighter italic border-b border-white/5 pb-4 font-montserrat text-[#C9A84C]">Why Source from China in 2026?</h2>
              <p className="text-gray-400 leading-relaxed text-sm md:text-base uppercase tracking-wider">
                China remains the global hub for packaging innovation. By working with a direct factory like **Saide Packaging**, you benefit from:
              </p>
              <ul className="grid md:grid-cols-2 gap-4 text-sm font-bold uppercase tracking-widest text-gray-300">
                <li className="flex items-center gap-2">✅Factory-Direct Pricing</li>
                <li className="flex items-center gap-2">✅Advanced R&D capabilities</li>
                <li className="flex items-center gap-2">✅FSC-Certified Materials</li>
                <li className="flex items-center gap-2">✅Global Logistics Expertise</li>
              </ul>
            </section>

            <section className="py-16 border-t border-white/5">
              <h2 className="text-3xl font-black uppercase tracking-tighter italic mb-12 text-center font-montserrat">Request a Custom Mailer Quote</h2>
              <InquiryForm productTitle="Custom Mailer Box Inquiry" />
            </section>
          </article>
        </div>
      </main>

      <footer className="bg-black text-white py-20 border-t border-white/5 text-center">
        <p className="text-[10px] font-black uppercase tracking-[0.3em] opacity-30 italic">漏 2026 Saide Packaging. All rights reserved.</p>
      </footer>

      <WhatsAppButton />
    </div>
  );
};

export default ShippingGuide;

