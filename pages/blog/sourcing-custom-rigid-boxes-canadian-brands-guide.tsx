import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const CanadianSourcingGuide = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-blue-100">
      <Head>
        <title>Sourcing Custom Rigid Boxes for Canadian Brands: Logistics & Duty Guide | Side Packaging</title>
        <meta name="description" content="A strategic guide for Canadian businesses sourcing custom rigid gift boxes from China. Expert insights on DDP shipping, GST/HST compliance, and factory selection." />
        <meta name="keywords" content="Custom rigid boxes Canada, Sourcing packaging from China, DDP shipping to Toronto, Canada customs duties packaging, Luxury gift boxes Vancouver" />
      </Head>

      {/* Navigation */}
      <nav className="border-b border-gray-100 sticky top-0 bg-white/95 backdrop-blur-md z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
          <Link href="/" className="font-black text-2xl tracking-tighter italic shrink-0 select-none">SIDE PACKAGING</Link>
          <div className="hidden lg:flex items-center space-x-10 text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400">
            <Link href="/" className="hover:text-black transition-colors">Home</Link>
            <Link href="/blog" className="text-black border-b-2 border-black py-1">Blog</Link>
            <Link href="/#contact" className="hover:text-black transition-colors">Quote</Link>
          </div>
        </div>
      </nav>

      <main className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <Link href="/blog" className="text-blue-600 font-black text-xs uppercase tracking-widest mb-8 block hover:translate-x-[-4px] transition-transform">← Back to Blog</Link>
          
          <article>
            <header className="mb-16">
              <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-8 leading-[1.1] uppercase italic">Sourcing Custom Rigid Boxes for Canadian Brands: The 2026 Strategy</h1>
              <p className="text-gray-400 font-bold mb-12 uppercase tracking-widest text-sm">Published April 21, 2026 | By Andy Pan, Side Packaging HK</p>
            </header>

            <div className="prose prose-xl prose-gray max-w-none font-medium leading-relaxed text-gray-600 space-y-12">
              <p className="text-2xl text-gray-900 font-bold italic">
                From Toronto's luxury boutiques to Vancouver's tech startups, Canadian brands are increasingly looking to China for high-end rigid packaging. But navigating the logistics and taxes requires a specialized approach.
              </p>

              <h2 className="text-4xl font-black text-black tracking-tight uppercase">Why Canada Sourced Rigid Boxes are Surging</h2>
              <p>
                Canadian companies often face high local manufacturing costs for low-to-medium volume rigid boxes. By sourcing directly from our factory in China, brands in Montreal, Toronto, and Vancouver can achieve **30-50% cost savings** even after including global shipping and duties.
              </p>

              <h2 className="text-4xl font-black text-black tracking-tight uppercase">Logistics: DDP vs. CIF for Canadian Importers</h2>
              <p>
                For most B2B clients in Canada, we recommend **DDP (Delivered Duty Paid)** shipping. This means Side Packaging handles everything: ocean or air freight, Canadian customs clearance, GST/HST payments, and final delivery to your warehouse. Whether you are located in the GTA (Greater Toronto Area) or Western Canada, DDP provides a "domestic" buying experience.
              </p>

              <h2 className="text-4xl font-black text-black tracking-tight uppercase">Understanding CBSA Duties and Taxes</h2>
              <p>
                Custom rigid boxes (HS Code 4819.20) entering Canada are subject to standard GST/HST depending on the destination province (e.g., 13% for Ontario, 5% for BC). Most paper-based packaging from China currently faces minimal additional duty under the most-favored-nation status, making it a highly competitive sourcing option.
              </p>

              <div className="bg-gray-50 p-12 rounded-[3rem] my-16 border border-gray-100">
                <h3 className="text-2xl font-black mb-6 uppercase">Canada-Specific Sourcing Checklist</h3>
                <ul className="space-y-4 text-sm font-bold text-gray-500 uppercase tracking-wide">
                  <li>✅ FSC-Certified Sustainable Materials</li>
                  <li>✅ Cold-Weather Adhesive Testing (Essential for Canadian Winters)</li>
                  <li>✅ Flat-Pack Collapsible Designs to Reduce Trans-Pacific Freight</li>
                  <li>✅ GST-Compliant Invoicing for Tax Credit Recovery</li>
                </ul>
              </div>

              <h2 className="text-4xl font-black text-black tracking-tight uppercase">Conclusion</h2>
              <p>
                Side Packaging HK Limited has been serving the Canadian market for over two decades. We understand the specific quality expectations of Canadian consumers—clean lines, sustainable materials, and structural durability.
              </p>

              <div className="bg-black text-white p-16 rounded-[3.5rem] mt-24 shadow-2xl">
                <h3 className="text-3xl font-black mb-8 uppercase italic">Ready to ship to Canada?</h3>
                <p className="text-gray-400 mb-12">Contact our North American strategy team for a landed-cost quote including all Canadian duties and taxes.</p>
                <Link href="/#contact" className="inline-block bg-white text-black px-12 py-5 rounded-full font-black text-sm uppercase tracking-widest hover:bg-gray-200 transition">Get a Canadian DDP Quote</Link>
              </div>
            </div>
          </article>
        </div>
      </main>

      <footer className="bg-white border-t py-24 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="font-black text-3xl tracking-tighter mb-8 uppercase italic">SIDE PACKAGING</div>
          <p className="text-gray-400 text-sm font-bold uppercase tracking-widest">© 2026 Side Packaging HK Limited. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default CanadianSourcingGuide;
