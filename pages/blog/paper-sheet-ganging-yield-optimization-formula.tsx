import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import InquiryForm from '../../components/InquiryForm';
import WhatsAppButton from '../../components/WhatsAppButton';

const SheetYieldGuide = () => {
  return (
    <div className="min-h-screen bg-[#0A0A0F] text-white font-sans selection:bg-[#C9A84C]/30 overflow-x-hidden">
      <Head>
        <title>Sheet Ganging Formula: How a 3mm Change in Box Size Saves 15% on Unit Price | Saide Packaging</title>
        <meta name="description" content="Technical guide to paper sheet yield optimization. Learn how ganging formulas and press-sheet layout analysis reduce raw material waste for 4x3x1.25 custom box orders." />
        <meta name="keywords" content="sheet ganging packaging, paper yield optimization, custom box cost reduction, packaging engineering china, paper sheet size 787x1092, wholesale box manufacturing, dieline layout formula" />
        <link rel="canonical" href="https://saidepackaging.com/blog/paper-sheet-ganging-yield-optimization-formula" />
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
              <span className="text-[#C9A84C] text-xs font-black uppercase tracking-[0.5em] block">Efficiency Engineering</span>
              <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[1.0] italic font-montserrat">
                The Ganging Formula: <br/>
                <span className="text-white/40">How a 3mm Change in Box Size Saves 15% on Material Costs</span>
              </h1>
              <p className="text-xl text-gray-400 font-medium leading-relaxed uppercase tracking-tight">
                An objective analysis of press-sheet utilization, "The 3mm Rule," and the math behind industrial waste reduction.
              </p>
              <div className="border-t border-white/10 pt-6 flex gap-12 text-[10px] font-bold uppercase tracking-widest text-gray-500">
                <span>By: Andy (Founder)</span>
                <span>Date: June 16, 2026</span>
                <span>Read Time: 6 min</span>
              </div>
            </header>

            <section className="space-y-8">
              <h2 className="text-2xl font-black uppercase tracking-tighter italic border-b border-white/5 pb-4 font-montserrat text-[#C9A84C]">The "Silent" Waste in Custom Box Manufacturing</h2>
              <p className="text-gray-400 leading-relaxed text-sm md:text-base uppercase tracking-wider">
                In B2B packaging procurement, the unit price is largely dictated by **Paper Yield**. When a designer specifies a box dimension, they often don't realize that those dimensions must be "nested" onto a standard industrial paper sheet (typically **787 x 1092 mm** or **889 x 1194 mm**).
              </p>
              <p className="text-gray-400 leading-relaxed text-sm md:text-base uppercase tracking-wider">
                If the box's flat dieline is just slightly too wide, you may only fit 8 units per sheet instead of 10. You are essentially paying for the 20% of the paper that goes into the factory's recycling bin. 
              </p>
            </section>

            <section className="space-y-8">
              <h2 className="text-2xl font-black uppercase tracking-tighter italic border-b border-white/5 pb-4 font-montserrat text-[#C9A84C]">{'The Ganging Formula: $Y = \\lfloor \\frac{S_W}{D_W} \\rfloor \\times \\lfloor \\frac{S_H}{D_H} \\rfloor$'}</h2>
              <p className="text-gray-400 leading-relaxed text-sm md:text-base uppercase tracking-wider">
                At **Saide Packaging**, our engineers use a nesting algorithm to calculate the maximum yield ($Y$) of dielines ($D$) per master sheet ($S$). 
              </p>
              <div className="bg-[#1C1C28] p-8 rounded-3xl border border-white/5 font-mono text-xs md:text-sm text-gray-300 leading-relaxed">
                Case Study: 4x3x1.25" (102x76x32mm) Rigid Box Wrap
                <br/><br/>
                - Flat Dieline (incl. bleeds): 185 x 155 mm
                <br/>
                - Standard Sheet Yield: 24 units per sheet
                <br/>
                - Optimized Dieline (Trimmed 3mm): 182 x 152 mm
                <br/>
                - 🟢 New Sheet Yield: 28 units per sheet
                <br/><br/>
                This 3mm structural adjustment increases yield by **16.6%**, which translates directly into a lower B2B wholesale unit price.
              </div>
            </section>

            <section className="space-y-8">
              <h2 className="text-2xl font-black uppercase tracking-tighter italic border-b border-white/5 pb-4 font-montserrat text-[#C9A84C]">Technical Waste Comparison</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse border border-white/5 text-xs md:text-sm uppercase tracking-wider">
                  <thead>
                    <tr className="bg-white/5 border-b border-white/10 text-[#C9A84C] font-black">
                      <th className="p-4 border-r border-white/5">Optimization Status</th>
                      <th className="p-4 border-r border-white/5">Paper Utilization %</th>
                      <th className="p-4 border-r border-white/5">Off-cut Waste</th>
                      <th className="p-4">Unit Price Impact</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-400 font-medium">
                    <tr className="border-b border-white/5">
                      <td className="p-4 border-r border-white/5 font-black text-white">Standard Design</td>
                      <td className="p-4 border-r border-white/5">~ 78%</td>
                      <td className="p-4 border-r border-white/5">22% (Paid by client)</td>
                      <td className="p-4">Baseline ($1.00)</td>
                    </tr>
                    <tr>
                      <td className="p-4 border-r border-white/5 font-black text-white">Saide Optimized</td>
                      <td className="p-4 border-r border-white/5">🟢 &gt; 92%</td>
                      <td className="p-4 border-r border-white/5">🟢 &lt; 8%</td>
                      <td className="p-4 text-green-500 font-bold">🟢 Savings: $0.12 - $0.15/unit</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="space-y-8">
              <h2 className="text-2xl font-black uppercase tracking-tighter italic border-b border-white/5 pb-4 font-montserrat text-[#C9A84C]">The "3mm Rule" for Jewelry Brands</h2>
              <p className="text-gray-400 leading-relaxed text-sm md:text-base uppercase tracking-wider">
                Before finalizing your order for **4x3x1.25"** boxes, ask your supplier for a "Nesting Audit." For many high-end brands, a box that is 10.2cm wide looks identical to a box that is 10.5cm wide. However, that 3mm difference could be the threshold that forces a move to a more expensive, larger paper sheet. 
              </p>
              <p className="text-gray-400 leading-relaxed text-sm md:text-base uppercase tracking-wider">
                We provide this structural audit for free to every client to ensure you are buying packaging, not paper waste.
              </p>
            </section>

            <section className="py-16 border-t border-white/5 text-center">
              <h2 className="text-3xl font-black uppercase tracking-tighter italic mb-12 font-montserrat">Request a Free Nesting & Yield Audit</h2>
              <p className="text-gray-500 text-sm font-medium mb-12 uppercase tracking-widest">Are your packaging costs creeping up? Send us your current box dimensions and order volume. We will run your specs through our nesting algorithm to identify 10-15% in potential material savings. Technical blueprints returned in 12 hours.</p>
              <InquiryForm productTitle="Sheet Yield Cost Audit" />
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

export default SheetYieldGuide;
