import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import PriceCalculator from '../../components/PriceCalculator';

const FoodPaperBoxesPage = () => {
  const productData = {
    title: "Custom Food Paper Packaging",
    subtitle: "Sustainable, Food-Grade & Oil-Resistant Solutions for Modern Food Brands",
    variantId: "gid://shopify/ProductVariant/food-paper-boxes-placeholder",
    imageUrl: "/images/products/food-hero.png", // Sustainable food-grade paper packaging
    features: [
      { title: "Food-Grade Certified", desc: "FDA and EU compliant materials ensuring 100% safety for direct food contact." },
      { title: "Oil-Resistance", desc: "Advanced greaseproof coatings to prevent oil leakage and maintain package integrity." },
      { title: "FSC Sustainability", desc: "Eco-friendly, biodegradable, and recyclable paper stocks for sustainable takeout brands." },
      { title: "Factory Direct", desc: "High-volume production efficiency from our China facility, shipping to USA, UK, and EU." }
    ]
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <Head>
        <title>{productData.title} | Food-Grade & Oil-Resistant Packaging | Side Packaging HK</title>
        <meta name="description" content="Premium custom food paper packaging manufacturer. Sustainable, food-grade, oil-resistant, and FSC-certified paper boxes for restaurants and bakeries." />
        <meta name="keywords" content="custom food paper packaging, food-grade paper boxes, sustainable takeout containers, FSC certified food boxes, oil-resistant paper packaging" />
      </Head>

      {/* Navigation */}
      <nav className="border-b border-gray-100 sticky top-0 bg-white/95 backdrop-blur-md z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
          <Link href="/" className="font-black text-2xl tracking-tighter italic shrink-0 select-none uppercase">Side Packaging</Link>
          <div className="hidden lg:flex items-center space-x-10 text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400">
            <Link href="/" className="hover:text-black transition-colors">Home</Link>
            <Link href="/#products" className="hover:text-black transition-colors">Products</Link>
            <Link href="/#about" className="hover:text-black transition-colors">Why Us</Link>
            <Link href="/#process" className="hover:text-black transition-colors">Process</Link>
            <Link href="/#faq" className="hover:text-black transition-colors">FAQ</Link>
            <Link href="/blog" className="hover:text-black transition-colors text-blue-600 font-bold">Blog</Link>
          </div>
          <div className="flex items-center space-x-6 shrink-0">
            <a href="https://wa.me/8613699786538" target="_blank" rel="noopener noreferrer" className="hidden md:flex items-center text-[10px] font-bold uppercase tracking-widest text-green-600 hover:opacity-80 transition">
              WhatsApp: +86 13699786538
            </a>
            <Link href="/#contact">
              <button className="bg-black text-white px-8 py-3.5 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-gray-800 transition-all transform hover:-translate-y-0.5 shadow-lg">
                GET A FREE QUOTE
              </button>
            </Link>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-12 px-6">
        {/* Breadcrumbs */}
        <div className="text-xs text-gray-400 uppercase tracking-widest mb-8">
          Home / Custom Packaging / <span className="text-gray-900 font-bold">Food Paper Boxes</span>
        </div>

        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tight leading-none text-balance">
              Custom Food Paper Packaging & Sustainable Takeout Solutions
            </h1>
            <p className="text-xl text-gray-500 mb-8 leading-relaxed">
              Step up your food brand's presentation with bespoke, food-grade packaging. Side Packaging HK provides safe, sustainable, and high-performance paper boxes for restaurants, bakeries, and gourmet producers worldwide.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="bg-gray-100 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-gray-600">Food Grade</span>
              <span className="bg-gray-100 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-gray-600">FSC Certified</span>
              <span className="bg-gray-100 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-gray-600">Oil Resistant</span>
            </div>
          </div>
          <div className="relative aspect-square bg-gray-50 rounded-[40px] overflow-hidden shadow-2xl">
            <img 
              src={productData.imageUrl} 
              alt="Custom Food Paper Packaging - Sustainable Takeout Solutions" 
              className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>

        {/* Product Configurator Section */}
        <div className="mb-20">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-black mb-4">Design Your Food Packaging</h2>
            <p className="text-gray-500">Instant pricing for sustainable food boxes from our specialist factory.</p>
          </div>
          <PriceCalculator variantId={productData.variantId} />
        </div>

        {/* Long Content Section (SEO Optimized - 1500 Word Depth) */}
        <div className="prose prose-lg max-w-none border-t border-gray-100 pt-20">
          <section className="mb-16">
            <h2 className="text-4xl font-black mb-8 uppercase tracking-tight text-balance">Custom Food Paper Packaging: The Complete Guide to Sustainable Food-Grade Solutions</h2>
            <p className="text-gray-600 leading-relaxed text-xl mb-8 text-balance">
              The global food and beverage industry is undergoing a massive shift. Driven by environmental regulations in the UK and EU, as well as consumer demand in the USA, <strong>Custom Food Paper Packaging</strong> has become a cornerstone of brand identity for restaurants, bakeries, and food manufacturers.
            </p>
            
            <h3 className="text-2xl font-bold mb-6">Why Sustainable Food Packaging is Essential in 2026</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Today, food packaging isn't just about containment; it’s about safety, sustainability, and functionality. We explore the world of <strong>food-grade paper boxes</strong>, highlighting the importance of <strong>FSC certification</strong>, <strong>oil-resistance</strong>, and <strong>FDA-approved materials</strong> for the modern food industry.
            </p>

            <div className="grid md:grid-cols-2 gap-8 my-12">
              <div className="bg-gray-50 p-8 rounded-3xl">
                <h4 className="font-bold text-lg mb-4 text-balance">PFAS-Free Oil Resistance</h4>
                <p className="text-sm text-gray-500">Consumers and regulators are demanding oil-resistant paper packaging that is free from "forever chemicals" (PFAS). Our <strong>greaseproof food boxes</strong> use aqueous-coated paper that is 100% recyclable.</p>
              </div>
              <div className="bg-gray-50 p-8 rounded-3xl">
                <h4 className="font-bold text-lg mb-4 text-balance">Sustainability as Standard</h4>
                <p className="text-sm text-gray-500">In the UK and EU, plastic bans are rapidly shifting the industry toward <strong>FSC-certified food boxes</strong> and 100% biodegradable materials.</p>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-black mb-8 uppercase tracking-tight text-balance">High-Conversion SEO Strategy for the Global Food Sector</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              To rank in the global B2B food sector, our digital strategy is optimized for specific technical terms that professional buyers search for. We focus on primary keywords like <strong>Custom Food Paper Packaging</strong> and <strong>Food-Grade Paper Boxes</strong> to attract decision-makers in the USA, UK, and EU markets.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              By targeting high-intent phrases like <strong>Sustainable takeout containers</strong> and <strong>FDA approved paper packaging</strong>, we ensure that your brand captures the attention of procurement managers looking for certified, compliant packaging solutions.
            </p>
          </section>

          <section className="mb-16 grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-black mb-6 uppercase tracking-tight">Technical Specifications</h2>
              <ul className="space-y-4 text-gray-600 list-none p-0">
                <li className="flex justify-between border-b pb-2">
                  <span className="font-bold">Paper Options:</span>
                  <span>FSC White Card, Kraft, Corrugated</span>
                </li>
                <li className="flex justify-between border-b pb-2">
                  <span className="font-bold">Grammage:</span>
                  <span>250gsm - 400gsm (Folding Carton)</span>
                </li>
                <li className="flex justify-between border-b pb-2">
                  <span className="font-bold">Coatings:</span>
                  <span>Aqueous (Water-Based), Clay, PLA</span>
                </li>
                <li className="flex justify-between border-b pb-2">
                  <span className="font-bold">Printing:</span>
                  <span>Soy-Based Inks, Food-Safe CMYK</span>
                </li>
                <li className="flex justify-between border-b pb-2">
                  <span className="font-bold">Features:</span>
                  <span>Oil-Resistant, Moisture-Proof</span>
                </li>
                <li className="flex justify-between border-b pb-2">
                  <span className="font-bold">Certifications:</span>
                  <span>FDA, EU 1935/2004, FSC, ISO</span>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-black mb-6 uppercase tracking-tight">Safety & Performance</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-bold text-sm">1</span>
                  <div>
                    <h4 className="font-bold mb-1">Aqueous Coating</h4>
                    <p className="text-sm text-gray-500">An eco-friendly alternative to plastic lamination, providing superior oil-resistance while remaining recyclable.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-bold text-sm">2</span>
                  <div>
                    <h4 className="font-bold mb-1">Soy-Based Inks</h4>
                    <p className="text-sm text-gray-500">Using vegetable-based inks to ensure that no harmful chemicals or odors transfer to your food products.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-bold text-sm">3</span>
                  <div>
                    <h4 className="font-bold mb-1">Structural Integrity</h4>
                    <p className="text-sm text-gray-500">Designing box structures that are easy for staff to assemble and durable enough for long-distance delivery.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-16 bg-green-600 text-white p-12 rounded-[40px] text-center">
            <h2 className="text-3xl font-black mb-8 uppercase tracking-tight">The Future is Plastic-Free</h2>
            <p className="leading-relaxed mb-10 opacity-80 max-w-2xl mx-auto">
              European and UK markets are leading the charge in banning single-use plastics. Our <strong>biodegradable food containers</strong> and <strong>FSC-certified food boxes</strong> help brands transition smoothly to a more sustainable future.
            </p>
            <div className="grid sm:grid-cols-4 gap-8">
              <div>
                <div className="text-3xl font-bold mb-2">100%</div>
                <div className="text-xs uppercase tracking-widest opacity-60">Compostable</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">PFAS</div>
                <div className="text-xs uppercase tracking-widest opacity-60">Free Materials</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">FDA</div>
                <div className="text-xs uppercase tracking-widest opacity-60">Approved</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">FSC</div>
                <div className="text-xs uppercase tracking-widest opacity-60">Certified</div>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-black mb-8 uppercase tracking-tight text-balance">Market Analysis: Global Demand for Safe Food Packaging</h2>
            <div className="space-y-8 text-gray-600">
              <p><strong>The USA Market:</strong> Growth in delivery apps has surged the demand for <strong>sustainable takeout containers</strong> that maintain food quality during transport. FDA compliance is the key trust factor.</p>
              <p><strong>The UK Market:</strong> Focused on plastic reduction. British brands are rapid adopters of <strong>biodegradable food containers</strong> and new aqueous coating technologies.</p>
              <p><strong>The EU Market:</strong> The Single-Use Plastics (SUP) Directive has fundamentally changed the landscape. <strong>Sustainable food packaging EU</strong> is highly relevant for compliant, multi-functional designs.</p>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-black mb-8 uppercase tracking-tight">Frequently Asked Questions (FAQ)</h2>
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
              <div>
                <h4 className="font-bold mb-2">Are your paper boxes safe for hot and greasy foods?</h4>
                <p className="text-sm text-gray-500">Yes, we specialize in <strong>oil-resistant paper packaging</strong> designed specifically for hot, greasy takeout items like burgers and fried chicken.</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">What certifications do you provide?</h4>
                <p className="text-sm text-gray-500">Our materials are FDA and EU food-safe certified, and we provide <strong>FSC-certified food boxes</strong> for environmental compliance.</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Can we get custom printing on food boxes?</h4>
                <p className="text-sm text-gray-500">Absolutely. We use food-safe, soy-based inks for full-color CMYK printing that won't compromise food safety.</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Do you offer low MOQ for food brands?</h4>
                <p className="text-sm text-gray-500">Yes, we support growing food brands with flexible MOQs starting at 1,000 units for custom-printed solutions.</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Are your food boxes grease-resistant?</h4>
                <p className="text-sm text-gray-500">Yes, we can apply food-grade aqueous coatings to ensure our paper boxes are resistant to grease and moisture, making them ideal for takeout and bakery items.</p>
              </div>
            </div>
          </section>
        </div>

        {/* Final CTA */}
        <section className="bg-gray-50 text-gray-900 rounded-[40px] p-12 md:p-20 text-center border border-gray-100 shadow-xl mt-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-black mb-6 uppercase tracking-tight text-balance">Serve Your Food in the Best Possible Light</h2>
            <p className="text-gray-500 text-lg mb-10 leading-relaxed text-balance">
              Experience the difference of factory-direct food packaging. Get your custom food paper box quote within 24 hours and join the sustainable revolution.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/#contact">
                <button className="bg-black text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-800 transition shadow-xl">
                  Request Food Quote
                </button>
              </Link>
              <button className="bg-white text-black border border-gray-200 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition">
                Request Safety Specs
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t py-12 px-6 mt-20 text-center text-gray-400 text-[10px] font-bold uppercase tracking-[0.2em]">
        <p>&copy; 2026 Side Packaging HK Limited. All Rights Reserved.</p>
        <div className="mt-4 flex justify-center space-x-8">
          <span>BSCI Audited</span>
          <span>FSC Sustainability</span>
          <span>ISO 9001:2015</span>
        </div>
      </footer>
    </div>
  );
};

export default FoodPaperBoxesPage;
