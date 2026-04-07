import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import PriceCalculator from '../../components/PriceCalculator';

const CustomPaperBagsPage = () => {
  const productData = {
    title: "Custom Luxury Paper Bags",
    subtitle: "Premium Carrier Solutions for High-End Retail & Boutique Brands",
    variantId: "gid://shopify/ProductVariant/paper-bags-placeholder",
    imageUrl: "https://sc02.alicdn.com/kf/Abb05fa0a57e944bf85b8889811c248a4w.png",
    features: [
      { title: "Bespoke Finishing", desc: "Specialising in luxury handles, hot foil stamping, and textured finishes for ultimate retail appeal." },
      { title: "Eco-Friendly", desc: "100% recyclable and biodegradable materials with FSC-certified paper options available." },
      { title: "Factory Direct", desc: "Straight from our China-based manufacturing facility to ensure the best possible value." },
      { title: "Low MOQ", desc: "Custom-printed luxury bags with low minimum orders starting at 500 units." }
    ]
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <Head>
        <title>{productData.title} | Custom Luxury Paper Bag China Manufacturer | Side Packaging HK</title>
        <meta name="description" content="Premium custom luxury paper bags manufacturer in China. Factory direct pricing, FSC certified, and low MOQ for boutique and high-end retail brands." />
        <meta name="keywords" content="custom luxury paper bags China, paper bag manufacturer, luxury carrier bags factory, FSC certified paper bags, low MOQ luxury bags" />
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
          Home / Custom Packaging / <span className="text-gray-900 font-bold">Luxury Paper Bags</span>
        </div>

        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tight leading-none">
              Custom Luxury Paper Bag China Manufacturer
            </h1>
            <p className="text-xl text-gray-500 mb-8 leading-relaxed">
              Make a lasting impression with bespoke luxury paper bags. Side Packaging HK combines factory-direct efficiency with high-end craftsmanship to create the perfect carrier for your boutique or retail brand.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="bg-gray-100 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-gray-600">Bespoke Design</span>
              <span className="bg-gray-100 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-gray-600">FSC Certified</span>
              <span className="bg-gray-100 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-gray-600">Low MOQ</span>
            </div>
          </div>
          <div className="relative aspect-square bg-gray-50 rounded-[40px] overflow-hidden shadow-2xl">
            <img 
              src={productData.imageUrl} 
              alt="Custom Luxury Paper Bags" 
              className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>

        {/* Product Configurator Section */}
        <div className="mb-20">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-black mb-4">Design Your Custom Carrier Bag</h2>
            <p className="text-gray-500">Instant pricing for high-end luxury paper bags from our China factory.</p>
          </div>
          <PriceCalculator variantId={productData.variantId} />
        </div>

        {/* Long Content Section (SEO Optimized) */}
        <div className="prose prose-lg max-w-none border-t border-gray-100 pt-20">
          <section className="mb-16">
            <h2 className="text-3xl font-black mb-6 uppercase tracking-tight">Executive Summary: The Walk of Fame for Your Brand</h2>
            <p className="text-gray-600 leading-relaxed">
              In retail, your brand's presence doesn't end when a customer walks out the door. A luxury paper bag is a walking billboard, extending the premium experience from the shop floor to the streets. As a premier <strong>custom luxury paper bags China manufacturer</strong>, Side Packaging HK specializes in high-quality, factory-direct carrier solutions that exude elegance and durability. Our <strong>factory direct</strong> model ensures that you receive the highest quality standards while maintaining a competitive edge in your market.
            </p>
            <p className="text-gray-600 leading-relaxed">
              By utilizing <strong>FSC certified</strong> papers and advanced printing techniques, we enable brands to deliver a luxury shopping experience that is also environmentally responsible. Our <strong>low MOQ</strong> capability allows boutique brands and luxury retailers to launch new designs and seasonal collections with ease. Whether you require cotton ribbon handles, hot foil stamping, or bespoke textured paper, our facility is equipped to meet your most demanding specifications.
            </p>
          </section>

          <section className="mb-16 grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-black mb-6 uppercase tracking-tight">Technical Specifications</h2>
              <ul className="space-y-4 text-gray-600 list-none p-0">
                <li className="flex justify-between border-b pb-2">
                  <span className="font-bold">Paper Options:</span>
                  <span>Art Paper (C2S), White Cardboard, Kraft Paper, Specialty Paper</span>
                </li>
                <li className="flex justify-between border-b pb-2">
                  <span className="font-bold">Grammage:</span>
                  <span>180gsm - 300gsm (customizable)</span>
                </li>
                <li className="flex justify-between border-b pb-2">
                  <span className="font-bold">Handle Types:</span>
                  <span>Cotton Ribbon, PP Rope, Twisted Paper, Die-cut Handle</span>
                </li>
                <li className="flex justify-between border-b pb-2">
                  <span className="font-bold">Printing:</span>
                  <span>Full-colour CMYK, Pantone Spot Colour, Inside Printing</span>
                </li>
                <li className="flex justify-between border-b pb-2">
                  <span className="font-bold">Surface Finishes:</span>
                  <span>Matte/Gloss Lamination, Spot UV, Foil Stamping, Embossing</span>
                </li>
                <li className="flex justify-between border-b pb-2">
                  <span className="font-bold">Reinforcement:</span>
                  <span>Top & Bottom Cardboard Inserts for Extra Strength</span>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-black mb-6 uppercase tracking-tight">Factory Process</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-bold text-sm">1</span>
                  <div>
                    <h4 className="font-bold mb-1">Structural Design & Template Approval</h4>
                    <p className="text-sm text-gray-500">We provide free dielines and structural advice to ensure your artwork is perfectly aligned for the final folding process.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-bold text-sm">2</span>
                  <div>
                    <h4 className="font-bold mb-1">Precision Printing & Finishing</h4>
                    <p className="text-sm text-gray-500">High-resolution offset printing ensures your brand colours are vibrant and accurate, followed by luxury surface treatments.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-bold text-sm">3</span>
                  <div>
                    <h4 className="font-bold mb-1">Automated Die-Cutting & Manual Glueing</h4>
                    <p className="text-sm text-gray-500">Precision die-cutting is followed by expert manual assembly to ensure all seams are perfectly glued and edges are sharp.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-bold text-sm">4</span>
                  <div>
                    <h4 className="font-bold mb-1">Quality Inspection & Export Shipping</h4>
                    <p className="text-sm text-gray-500">Final QC checks for glue residue and handle strength before shipping flat-packed to minimize volume and cost.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-black mb-8 uppercase tracking-tight text-center">Case Studies: Luxury Retail Success</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-8 rounded-3xl">
                <h3 className="text-xl font-bold mb-4">High-End Watch Boutique</h3>
                <p className="text-gray-600 mb-6 italic">"The quality of the paper bags from Side Packaging HK is simply unmatched. The reinforced handles and precision foil stamping have added a new level of luxury to our customer's purchase experience."</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center font-bold text-yellow-600">W</div>
                  <div>
                    <p className="font-bold text-sm">Marketing Director, Luxury Watches London</p>
                    <p className="text-xs text-gray-400">Result: 40% Increase in Reusable Bag Mentions</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 p-8 rounded-3xl">
                <h3 className="text-xl font-bold mb-4">Sustainable Fashion Designer</h3>
                <p className="text-gray-600 mb-6 italic">"We needed a paper bag that was as ethical as our clothing. Side Packaging provided us with FSC-certified recycled paper bags that are both beautiful and biodegradable."</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center font-bold text-green-600">F</div>
                  <div>
                    <p className="font-bold text-sm">Founder, Ethical Fashion House</p>
                    <p className="text-xs text-gray-400">Outcome: Zero-Plastic Retail Accomplished</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-black mb-8 uppercase tracking-tight">Frequently Asked Questions (FAQ)</h2>
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
              <div>
                <h4 className="font-bold mb-2">1. What is the MOQ for custom luxury paper bags?</h4>
                <p className="text-sm text-gray-500">Our standard low MOQ starts at 500 units, which allows for cost-effective manufacturing and bespoke customisation.</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">2. Can you provide FSC certified paper for bags?</h4>
                <p className="text-sm text-gray-500">Yes, we offer FSC-certified paper options to ensure your packaging is environmentally responsible and traceable.</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">3. Do you support inside-the-bag printing?</h4>
                <p className="text-sm text-gray-500">Certainly. We can print on the interior of the bag to create a surprising and delightful unboxing (or unpacking) experience.</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">4. What handle options do you recommend for heavy items?</h4>
                <p className="text-sm text-gray-500">We recommend reinforced cotton ribbon or PP rope handles with top and bottom cardboard inserts for maximum weight-bearing capacity.</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">5. Can I request a physical sample from China?</h4>
                <p className="text-sm text-gray-500">Yes, we offer physical pre-production samples (chargeable) so you can verify the material feel and finish before the full run.</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">6. How are the luxury bags shipped to the UK?</h4>
                <p className="text-sm text-gray-500">Bags are shipped flat-packed in heavy-duty export cartons. We offer DDP shipping terms, handling all customs and duties for you.</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">7. Do you offer anti-scratch lamination?</h4>
                <p className="text-sm text-gray-500">Yes, we provide anti-scratch matte lamination to ensure your luxury bags remain pristine during transit and customer use.</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">8. Can you handle large format bags for luxury apparel?</h4>
                <p className="text-sm text-gray-500">Absolutely. We can produce oversized luxury bags with reinforced structures designed specifically for high-end fashion items.</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">9. What is the typical production lead time?</h4>
                <p className="text-sm text-gray-500">Standard production takes 10-14 working days after artwork approval, plus transit time from our China facility.</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">10. Are the bags 100% recyclable?</h4>
                <p className="text-sm text-gray-500">Yes, when using our water-based glues and untreated paper handles, our bags are fully recyclable and biodegradable.</p>
              </div>
            </div>
          </section>
        </div>

        {/* Marketing / Factory Backing Section */}
        <section className="grid md:grid-cols-2 gap-16 py-20 border-t border-gray-100 mt-20">
          <div>
            <h2 className="text-3xl font-black mb-8 leading-tight uppercase tracking-tight">
              Crafting Quality <br/>at the Source
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {productData.features.map((feature, i) => (
                <div key={i} className="space-y-2">
                  <div className="w-10 h-1 rounded bg-black mb-4"></div>
                  <h3 className="font-bold text-lg">{feature.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-gray-100 text-gray-900 p-12 rounded-[40px] flex flex-col justify-center relative overflow-hidden">
            <blockquote className="text-2xl font-medium italic mb-6 relative z-10">
              "Working with a factory-direct partner in China allowed us to customize every detail of our luxury carrier bags while significantly reducing our costs."
            </blockquote>
            <div className="flex items-center space-x-4 relative z-10">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center font-bold">L</div>
              <div>
                <p className="font-bold">Operations Manager</p>
                <p className="text-sm text-gray-400">Luxury Lifestyle Brand, London</p>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-black/5 blur-3xl rounded-full -mr-32 -mt-32"></div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-black text-white rounded-[40px] p-12 md:p-20 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-black mb-6">Elevate Your Brand Presence</h2>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
              Experience the difference of factory-direct luxury paper bags. Get your custom carrier quote within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/#contact">
                <button className="bg-white text-black px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition shadow-xl">
                  Request Bag Quote
                </button>
              </Link>
              <button className="bg-white/10 text-white border border-white/20 px-10 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition">
                Order a Sample Pack
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t py-12 px-6 mt-20 text-center text-gray-400 text-[10px] font-bold uppercase tracking-[0.2em]">
        <p>&copy; 2026 Side Packaging HK Limited. All Rights Reserved.</p>
        <div className="mt-4 flex justify-center space-x-8">
          <span>BSCI Certified</span>
          <span>FSC Sustainability</span>
          <span>ISO 9001:2015</span>
        </div>
      </footer>
    </div>
  );
};

export default CustomPaperBagsPage;
