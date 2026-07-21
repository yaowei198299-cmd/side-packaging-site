import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import WhatsAppButton from '../components/WhatsAppButton';
import InquiryForm from '../components/InquiryForm';
import Footer from '../components/Footer';

const InquiryPage = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white font-sans selection:bg-[#C9A84C] overflow-x-hidden">
      <Head>
        <title>Get a Quote | Luxury B2B Packaging Solutions | Saide Packaging</title>
        <meta name="description" content="Request a free technical quote and 3D mockup for your luxury jewelry and gift packaging. 24-hour response guaranteed." />
      </Head>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-[100] bg-black/40 backdrop-blur-2xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="text-xl font-black tracking-tighter uppercase italic text-white font-montserrat">Saide Packaging</Link>
          <div className="hidden lg:flex items-center space-x-10 text-[9px] font-black uppercase tracking-[0.3em] text-gray-400">
            <Link href="/products" className="hover:text-white transition-colors">Catalog</Link>
            <Link href="/gallery" className="hover:text-white transition-colors">Case Studies</Link>
            <Link href="/about-founder" className="hover:text-white transition-colors">Founders</Link>
          </div>
          <Link href="/" className="text-[9px] font-black uppercase tracking-widest text-white/40 hover:text-white transition-all">鈫?Back to Site</Link>
        </div>
      </nav>

      <main className="pt-40 pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-20">
            
            {/* Left Column: Context & Trust */}
            <div className="lg:col-span-5">
              <div className="inline-block border border-[#C9A84C]/30 bg-[#C9A84C]/5 px-4 py-1.5 rounded-full mb-8">
                <span className="text-[10px] font-bold text-[#C9A84C] uppercase tracking-[0.2em]">B2B Priority Support</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] mb-10 italic font-montserrat">
                Request a <br/>
                <span className="text-[#C9A84C]">Free Quote</span> <br/>
                & 3D Mockup.
              </h1>
              <p className="text-xl text-white/50 mb-10 font-medium leading-relaxed uppercase tracking-widest">
                Our engineering team provides structural analysis and cost optimization within <span className="text-white italic underline decoration-[#C9A84C]">24 hours</span>.
              </p>
              
              <div className="bg-[#0f0f15] p-8 rounded-2xl border border-white/5 mb-16 flex items-center gap-8 group">
                <div className="relative">
                   <div className="w-24 h-24 rounded-full overflow-hidden grayscale group-hover:grayscale-0 transition-all border-2 border-white/10">
                      <img src="https://sc04.alicdn.com/kf/Hdf03eb602caa4dd4bce2e15c8f77cb1aA.jpg" alt="Jocelyn" className="w-full h-full object-cover" />
                   </div>
                   <div className="absolute bottom-1 right-1 w-5 h-5 bg-green-500 rounded-full border-4 border-[#0f0f15]" />
                </div>
                <div>
                  <p className="text-[10px] font-black text-[#C9A84C] uppercase tracking-widest mb-1">Packaging Consultant</p>
                  <h3 className="text-2xl font-black italic mb-2 font-montserrat">Jocelyn</h3>
                  <p className="text-[10px] font-black text-green-500 uppercase tracking-widest">Online 路 Avg. 2h reply</p>
                </div>
              </div>

              <div className="space-y-6 mb-16">
                 {[
                   "Free Design & 3D Mockup Service",
                   "Direct Factory Pricing (No Middleman)",
                   "Sample Production Before Bulk Order",
                   "24-Hour Response Guaranteed"
                 ].map((item, i) => (
                   <div key={i} className="flex items-center gap-4">
                      <div className="w-5 h-5 rounded-full border border-[#C9A84C] flex items-center justify-center">
                        <svg className="w-3 h-3 text-[#C9A84C]" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" /></svg>
                      </div>
                      <span className="text-[11px] font-black uppercase tracking-[0.1em] text-white/70">{item}</span>
                   </div>
                 ))}
              </div>
            </div>

            {/* Right Column: The Integrated Form */}
            <div className="lg:col-span-7">
              <InquiryForm />
            </div>

          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default InquiryPage;

