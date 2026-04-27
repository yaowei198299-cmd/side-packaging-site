import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const UltimateGuide = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-blue-100">
      <Head>
        <title>Ultimate 2026 Packaging Material & Structure Guide | Side Packaging HK Limited</title>
        <meta name="description" content="The comprehensive B2B reference for packaging material science, flute engineering, and global sustainability standards. Download our 2026 technical catalog." />
        <meta name="keywords" content="packaging material guide, paperboard specs, corrugated flute types, SBS vs Kraft, custom packaging structure, sustainable packaging standards" />
        
        {/* Structured Data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TechArticle",
              "headline": "The Ultimate 2026 Packaging Material & Structure Guide",
              "description": "A technical deep-dive into materials, finishes, and structures for the modern B2B packaging market.",
              "author": {
                "@type": "Organization",
                "name": "Side Packaging HK Limited"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Side Packaging HK Limited"
              }
            })
          }}
        />
      </Head>

      {/* Navigation */}
      <nav className="border-b border-gray-100 sticky top-0 bg-white/95 backdrop-blur-md z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
          <Link href="/" className="font-black text-2xl tracking-tighter italic shrink-0 select-none uppercase text-black">SIDE PACKAGING</Link>
          <div className="hidden lg:flex items-center space-x-10 text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400">
            <Link href="/" className="hover:text-black transition-colors">Home</Link>
            <Link href="/blog" className="hover:text-black transition-colors">Blog</Link>
            <span className="text-black border-b-2 border-black py-1">Technical Guide</span>
          </div>
          <div className="flex items-center space-x-6 shrink-0">
            <button 
              onClick={() => window.print()} 
              className="bg-blue-600 text-white px-8 py-3.5 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-blue-700 transition-all shadow-lg"
            >
              SAVE AS PDF
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-24">
        {/* Hero */}
        <header className="mb-20 text-center">
          <span className="text-blue-600 font-black text-xs uppercase tracking-[0.4em] mb-6 block">Premium B2B Resource</span>
          <h1 className="text-5xl md:text-6xl font-black leading-[0.95] mb-10 tracking-tighter uppercase italic">
            Ultimate 2026 <br/>
            <span className="text-blue-600">Material & Structure</span> <br/>
            Guide.
          </h1>
          <p className="text-xl text-gray-500 font-medium leading-relaxed max-w-2xl mx-auto">
            A technical deep-dive into materials, finishes, and structures available in 2026, helping brands make data-driven packaging decisions.
          </p>
        </header>

        {/* Content Section */}
        <article className="prose prose-blue prose-lg max-w-none">
          <section className="bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100 mb-16">
            <h2 className="text-2xl font-black uppercase italic tracking-tight mb-6">Introduction</h2>
            <p className="text-gray-600 font-medium">
              Choosing the right packaging material and structure is the most critical step in balancing brand image, product safety, and logistics costs. This guide provides a technical reference helping brands align with global sustainability and unboxing trends.
            </p>
          </section>

          <div className="space-y-20 text-gray-700">
            {/* Part 1 */}
            <section>
              <h2 className="text-3xl font-black uppercase tracking-tighter italic mb-8 border-b-4 border-blue-600 inline-block">01. Paperboard & Materials</h2>
              <div className="grid md:grid-cols-3 gap-8 mt-10">
                {[
                  { title: "SBS Board", desc: "100% bleached virgin pulp. High brightness. Best for Cosmetics and Premium Retail." },
                  { title: "Kraft Board", desc: "Unbleached virgin or recycled fibers. High tear resistance. Best for Organic & Sustainable brands." },
                  { title: "CCNB", desc: "Clay Coated News Back. Recycled greyboard. Best for cost-sensitive mass-market retail." }
                ].map((item, i) => (
                  <div key={i} className="p-8 bg-white border border-gray-100 rounded-3xl shadow-sm">
                    <h3 className="font-black uppercase tracking-tight mb-4 text-blue-600">{item.title}</h3>
                    <p className="text-sm font-medium leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Part 2 */}
            <section>
              <h2 className="text-3xl font-black uppercase tracking-tighter italic mb-8 border-b-4 border-blue-600 inline-block">02. Corrugated Flute Engineering</h2>
              <div className="overflow-x-auto mt-10">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-950 text-white text-[10px] font-black uppercase tracking-widest">
                      <th className="px-6 py-4">Flute Type</th>
                      <th className="px-6 py-4">Thickness</th>
                      <th className="px-6 py-4">Strength</th>
                      <th className="px-6 py-4">Ideal Usage</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm font-bold uppercase tracking-tight divide-y divide-gray-100">
                    <tr><td className="px-6 py-4">E-Flute</td><td className="px-6 py-4">1.5mm</td><td className="px-6 py-4">Medium</td><td className="px-6 py-4 text-blue-600">Printed Mailers</td></tr>
                    <tr><td className="px-6 py-4">B-Flute</td><td className="px-6 py-4">3.0mm</td><td className="px-6 py-4">High</td><td className="px-6 py-4 text-blue-600">Heavy Shipping</td></tr>
                    <tr><td className="px-6 py-4">F-Flute</td><td className="px-6 py-4">0.8mm</td><td className="px-6 py-4">Low</td><td className="px-6 py-4 text-blue-600">Small Cosmetics</td></tr>
                    <tr><td className="px-6 py-4">BC-Flute</td><td className="px-6 py-4">7.0mm</td><td className="px-6 py-4">Ultra High</td><td className="px-6 py-4 text-blue-600">Global Export</td></tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Part 3 */}
            <section>
              <h2 className="text-3xl font-black uppercase tracking-tighter italic mb-8 border-b-4 border-blue-600 inline-block">03. Premium Finishing</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
                {["Lamination", "Spot UV", "Hot Foil", "Embossing", "Debossing", "Aqueous Coating", "Soy Inks", "FSC Board"].map((item, i) => (
                  <div key={i} className="flex flex-col items-center p-6 bg-gray-50 rounded-2xl text-center">
                    <div className="w-8 h-8 bg-blue-100 rounded-full mb-4 flex items-center justify-center text-blue-600 text-[10px] font-black">✓</div>
                    <span className="text-[10px] font-black uppercase tracking-widest leading-tight">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ */}
            <section className="bg-blue-600 text-white p-12 rounded-[3rem] shadow-2xl">
              <h2 className="text-2xl font-black uppercase italic tracking-tight mb-8">Technical FAQ</h2>
              <div className="space-y-8">
                <div>
                  <h4 className="font-black uppercase tracking-widest text-xs text-blue-200 mb-2">Q: How does material choice affect DIM weight?</h4>
                  <p className="font-medium text-blue-50">Using a slimmer, higher-strength flute like E-flute can reduce external dimensions by 5-10%, leading to significant savings in logistics charges.</p>
                </div>
                <div>
                  <h4 className="font-black uppercase tracking-widest text-xs text-blue-200 mb-2">Q: Can I achieve a luxury feel with sustainable materials?</h4>
                  <p className="font-medium text-blue-50">Yes. Using unbleached Kraft board with white screen printing or debossing creates a high-end minimalist sustainable look.</p>
                </div>
              </div>
            </section>
          </div>
        </article>

        {/* Final CTA */}
        <section className="mt-32 text-center border-t border-gray-100 pt-24">
           <h2 className="text-4xl font-black uppercase italic tracking-tighter mb-8 text-black">Need a Structural Audit?</h2>
           <p className="text-gray-500 font-medium mb-12 max-w-lg mx-auto leading-relaxed">Let our engineers analyze your product size, weight, and budget to find the perfect technical solution.</p>
           <Link href="/#contact">
              <button className="bg-black text-white px-12 py-6 rounded-full font-black text-sm uppercase tracking-widest hover:bg-gray-800 transition shadow-2xl">
                Get Your Professional Audit
              </button>
           </Link>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t py-20 px-6 mt-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
           <div className="font-black text-2xl tracking-tighter italic uppercase text-black">SIDE PACKAGING</div>
           <div className="flex space-x-12 text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">
              <Link href="/" className="hover:text-black transition-colors">Home</Link>
              <Link href="/blog" className="hover:text-black transition-colors">Blog</Link>
              <a href="mailto:andy@saidepackaging.com" className="hover:text-black transition-colors">Contact Andy</a>
           </div>
        </div>
      </footer>
    </div>
  );
};

export default UltimateGuide;
