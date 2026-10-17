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
        <title>Get a Factory Quote &amp; Free 3D Mockup | Saide Packaging</title>
        <meta name="description" content="Request a direct factory quote and 3D mockup for luxury rigid gift boxes, magnetic boxes, and mailer boxes. Low MOQ 300 pcs, DDP shipping to USA/EU." />
      </Head>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-[100] bg-black/50 backdrop-blur-2xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="text-xl font-black tracking-tighter uppercase italic text-white font-montserrat">
            Saide Packaging
          </Link>
          <div className="hidden lg:flex items-center space-x-10 text-[9px] font-black uppercase tracking-[0.3em] text-gray-400">
            <Link href="/products" className="hover:text-white transition-colors">Catalog</Link>
            <Link href="/products/magnetic-gift-boxes" className="hover:text-white transition-colors">Rigid Boxes</Link>
            <Link href="/products/custom-mailer-boxes" className="hover:text-white transition-colors">Mailer Boxes</Link>
            <Link href="/gallery" className="hover:text-white transition-colors">Case Studies</Link>
            <Link href="/blog" className="hover:text-white transition-colors">Engineering Blog</Link>
          </div>
          <Link href="/" className="text-[9px] font-black uppercase tracking-widest text-[#C9A84C] hover:text-white transition-all">
            &#8592; Back to Home
          </Link>
        </div>
      </nav>

      <main className="pt-36 pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Context & Trust */}
            <div className="lg:col-span-5 space-y-8">
              <div className="inline-flex items-center gap-2 border border-[#C9A84C]/40 bg-[#C9A84C]/10 px-4 py-1.5 rounded-full">
                <span className="text-[10px] font-bold text-[#C9A84C] uppercase tracking-[0.2em]">Direct Factory Priority Support</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.95] italic font-montserrat">
                Request a <br/>
                <span className="text-[#C9A84C]">Factory Quote</span> <br/>
                &amp; 3D Mockup.
              </h1>

              <p className="text-base md:text-lg text-white/60 font-medium leading-relaxed">
                Connect directly with our engineering workshop. We provide structural drawings, DDP shipping estimates, and cost optimization within <span className="text-white font-bold underline decoration-[#C9A84C]">12 hours</span>.
              </p>

              {/* Trust Box */}
              <div className="bg-[#111116] p-6 rounded-2xl border border-white/10 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#C9A84C]/20 border border-[#C9A84C]/40 flex items-center justify-center text-[#C9A84C] font-black text-lg">
                    ★
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">Guaranteed B2B Factory Terms</h3>
                    <p className="text-white/40 text-xs">Serving 500+ global brands across USA, UK, EU, and AU.</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2 border-t border-white/5">
                  <div className="bg-white/[0.02] p-3 rounded-xl border border-white/5">
                    <p className="text-lg font-black text-[#C9A84C] font-montserrat">300 PCS</p>
                    <p className="text-[10px] text-white/50 uppercase font-semibold">Low MOQ Flexibility</p>
                  </div>
                  <div className="bg-white/[0.02] p-3 rounded-xl border border-white/5">
                    <p className="text-lg font-black text-[#C9A84C] font-montserrat">DDP Door</p>
                    <p className="text-[10px] text-white/50 uppercase font-semibold">Duties &amp; Tax Paid</p>
                  </div>
                  <div className="bg-white/[0.02] p-3 rounded-xl border border-white/5">
                    <p className="text-lg font-black text-[#C9A84C] font-montserrat">12H CAD</p>
                    <p className="text-[10px] text-white/50 uppercase font-semibold">Free Dieline Drawing</p>
                  </div>
                  <div className="bg-white/[0.02] p-3 rounded-xl border border-white/5">
                    <p className="text-lg font-black text-[#C9A84C] font-montserrat">$19.9 Kit</p>
                    <p className="text-[10px] text-white/50 uppercase font-semibold">Sample Box Kit</p>
                  </div>
                </div>
              </div>

              {/* Guarantees List */}
              <div className="space-y-4 pt-2">
                {[
                  "Free Design & 3D Realistic Mockup Service",
                  "Direct Factory Pricing (Save 15-30% vs Brokers)",
                  "FSC & ISO Certified Eco-Friendly Materials",
                  "Pre-Production Physical Sample for Final Sign-off"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#C9A84C]/20 border border-[#C9A84C] flex items-center justify-center shrink-0">
                      <span className="text-[#C9A84C] text-xs font-bold">&#10003;</span>
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-white/80">{item}</span>
                  </div>
                ))}
              </div>

              {/* WhatsApp direct contact */}
              <div className="p-5 rounded-2xl bg-gradient-to-r from-[#25D366]/10 to-transparent border border-[#25D366]/30 flex items-center justify-between">
                <div>
                  <p className="text-xs font-black text-[#25D366] uppercase tracking-wider">Fastest Response</p>
                  <p className="text-sm font-bold text-white">Chat on WhatsApp: +86 186 6432 0000</p>
                </div>
                <a
                  href="https://wa.me/message/WRDEFMR2ETUJH1?text=Hi%20Jocelyn%2C%20I%20am%20looking%20for%20a%20factory-direct%20packaging%20quote%20(Low%20MOQ%20%2F%20DDP%20to%20USA%2FEU)."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] hover:bg-white text-black font-black px-4 py-2 rounded-full text-xs uppercase tracking-wider transition-all"
                >
                  Chat Now
                </a>
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
