import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import InquiryForm from '../../components/InquiryForm';
import WhatsAppButton from '../../components/WhatsAppButton';

const SoyInkGuide = () => {
  return (
    <div className="min-h-screen bg-[#0A0A0F] text-white font-sans selection:bg-[#C9A84C]/30 overflow-x-hidden">
      <Head>
        <title>Soy-Based Ink & VOC Compliance: Sourcing Carbon-Neutral Luxury Printing | Saide Packaging</title>
        <meta name="description" content="Technical guide to soy-based ink printing for luxury packaging. Learn about VOC-free compliance, color fidelity on kraft, and how bio-degradable inks improve brand ethics." />
        <meta name="keywords" content="soy based ink printing, voc free packaging, carbon neutral printing china, sustainable luxury boxes, eco friendly ink certification, custom box printing wholesale" />
        <link rel="canonical" href="https://saidepackaging.com/blog/soy-based-ink-voc-compliance-luxury-printing-guide" />
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
          <Link href="/blog" className="text-[#C9A84C] font-black text-xs uppercase tracking-widest mb-12 block hover:translate-x-[-4px] transition-transform">← Back to Blog</Link>

          <article className="space-y-16">
            <header className="space-y-8">
              <span className="text-[#C9A84C] text-xs font-black uppercase tracking-[0.5em] block">Print Technology</span>
              <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[1.0] italic font-montserrat">
                Soy-Based Ink & VOC Compliance: <br/>
                <span className="text-white/40">The Engineering of Carbon-Neutral Luxury Printing</span>
              </h1>
              <p className="text-xl text-gray-400 font-medium leading-relaxed uppercase tracking-tight">
                Transitioning from petrochemical pigments to plant-based chemistry without sacrificing color vibrancy or haptic depth.
              </p>
              <div className="border-t border-white/10 pt-6 flex gap-12 text-[10px] font-bold uppercase tracking-widest text-gray-500">
                <span>By: Andy (Founder)</span>
                <span>Date: June 16, 2026</span>
                <span>Read Time: 7 min</span>
              </div>
            </header>

            <section className="space-y-8">
              <h2 className="text-2xl font-black uppercase tracking-tighter italic border-b border-white/5 pb-4 font-montserrat text-[#C9A84C]">The Chemistry of Clean Printing</h2>
              <p className="text-gray-400 leading-relaxed text-sm md:text-base uppercase tracking-wider">
                Traditional offset printing relies on petroleum-based inks that release Volatile Organic Compounds (VOCs) into the atmosphere during the drying process. For global B2B brands, especially in the cosmetics and food sectors, these VOCs are a major obstacle to achieving ESG (Environmental, Social, and Governance) targets. 
              </p>
              <p className="text-gray-400 leading-relaxed text-sm md:text-base uppercase tracking-wider">
                The solution is **Soy-Based Ink**. Derived from renewable soybeans, these inks replace mineral oils with refined vegetable oils, resulting in a 95% reduction in VOC emissions during the production of your **4x3x1.25"** boxes.
              </p>
            </section>

            <section className="space-y-8">
              <h2 className="text-2xl font-black uppercase tracking-tighter italic border-b border-white/5 pb-4 font-montserrat text-[#C9A84C]">Technical Performance: Soy vs. Petroleum Inks</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse border border-white/5 text-xs md:text-sm uppercase tracking-wider">
                  <thead>
                    <tr className="bg-white/5 border-b border-white/10 text-[#C9A84C] font-black">
                      <th className="p-4 border-r border-white/5">Parameter</th>
                      <th className="p-4 border-r border-white/5">Refined Soy-Based Ink</th>
                      <th className="p-4">Standard Petroleum Ink</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-400 font-medium">
                    <tr className="border-b border-white/5">
                      <td className="p-4 border-r border-white/5 font-black text-white">Color Vibrancy</td>
                      <td className="p-4 border-r border-white/5">🟢 High (Superior pigment suspension)</td>
                      <td className="p-4">Moderate</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="p-4 border-r border-white/5 font-black text-white">VOC Emissions</td>
                      <td className="p-4 border-r border-white/5">🟢 &lt; 2% (Bio-neutral)</td>
                      <td className="p-4">25% - 40% (High pollutants)</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="p-4 border-r border-white/5 font-black text-white">Rub Resistance</td>
                      <td className="p-4 border-r border-white/5">🟢 Excellent (Hard-curing)</td>
                      <td className="p-4">Moderate (Subject to scuffing)</td>
                    </tr>
                    <tr>
                      <td className="p-4 border-r border-white/5 font-black text-white">De-inking Recyclability</td>
                      <td className="p-4 border-r border-white/5">🟢 Very Easy (Plant-fibers)</td>
                      <td className="p-4">Difficult (Chemical bonding)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="space-y-8">
              <h2 className="text-2xl font-black uppercase tracking-tighter italic border-b border-white/5 pb-4 font-montserrat text-[#C9A84C]">The "Deep Black" Advantage</h2>
              <p className="text-gray-400 leading-relaxed text-sm md:text-base uppercase tracking-wider">
                A common technical myth is that eco-friendly inks cannot achieve the same "Rich Black" ($K=100\%$) as chemical inks. In fact, due to the clearer molecular structure of soybean oil, pigments are distributed more evenly. 
              </p>
              <p className="text-gray-400 leading-relaxed text-sm md:text-base uppercase tracking-wider">
                For Saide Packaging's signature **Matte Black 4x3x1.25"** jewelry boxes, our soy-based formulation delivers a visual depth that is 12% darker than standard alternatives, while remaining 100% biodegradable in landfill conditions within 18 months.
              </p>
            </section>

            <section className="py-16 border-t border-white/5 text-center">
              <h2 className="text-3xl font-black uppercase tracking-tighter italic mb-12 font-montserrat">Request a Carbon-Neutral Print Audit</h2>
              <p className="text-gray-500 text-sm font-medium mb-12 uppercase tracking-widest">Are you aiming for Net-Zero by 2030? Send us your current box artwork. We will conduct a free VOC-impact audit and provide a technical roadmap for transitioning to Soy-Based inks and FSC materials. 12H Technical response.</p>
              <InquiryForm productTitle="Soy-Ink Compliance Audit" />
            </section>
          </article>
        </div>
      </main>

      <footer className="bg-black text-white py-20 border-t border-white/5 text-center">
        <p className="text-[10px] font-black uppercase tracking-[0.3em] opacity-30 italic">Saide Packaging HK Limited. © 2026. Industrial Luxury standards.</p>
      </footer>

      <WhatsAppButton />
    </div>
  );
};

export default SoyInkGuide;
