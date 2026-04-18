import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import PriceCalculator from '../../components/PriceCalculator';

const CustomPaperBagsPage = () => {
  const productData = {
    title: "Custom Luxury Paper Bags",
    subtitle: "Factory-Direct Premium Carrier Solutions for Global Brands",
    variantId: "gid://shopify/ProductVariant/paper-bags-placeholder",
    imageUrl: "/images/products/paper-bag-hero.png",
    features: [
      { title: "Bespoke Finishing", desc: "Specializing in hot foil stamping, Spot UV, and custom textures for a multi-sensory brand experience." },
      { title: "Sustainability (FSC)", desc: "100% recyclable materials with FSC-certified paper options to meet global environmental standards." },
      { title: "Factory Direct", desc: "Uncompromising quality control and significant cost savings by sourcing directly from our facility." },
      { title: "Low MOQ", desc: "Custom-printed luxury bags with agile minimum orders starting at just 300-500 units." }
    ]
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <Head>
        <title>{productData.title} | Factory-Direct Premium Packaging 2026 | Side Packaging HK</title>
        <meta name="description" content="Research-backed custom luxury paper bags for USA, UK, and EU markets. Factory-direct, FSC certified, low MOQ, and bespoke finishing including gold foil and spot UV." />
        <meta name="keywords" content="custom luxury paper bags, premium shopping bags wholesale, luxury paper bags factory direct, FSC certified paper bags USA, bespoke retail packaging UK, high-end gift bags EU" />
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
              Factory-Direct <br/>Luxury Paper Bags
            </h1>
            <p className="text-xl text-gray-500 mb-8 leading-relaxed">
              Elevate your brand with bespoke carrier solutions. We combine advanced manufacturing with high-end craftsmanship for the USA, UK, and EU markets.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="bg-gray-100 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-gray-600">Bespoke Finishing</span>
              <span className="bg-gray-100 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-gray-600">FSC Certified</span>
              <span className="bg-gray-100 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-gray-600">Low MOQ</span>
            </div>
          </div>
          <div className="relative aspect-video bg-gray-50 rounded-[40px] overflow-hidden shadow-2xl">
            <img 
              src={productData.imageUrl} 
              alt="Custom Luxury Paper Bags with Premium Branding" 
              className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>

        {/* Product Configurator Section */}
        <div className="mb-20">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-black mb-4 uppercase tracking-tight">Design Your Custom Luxury Bag</h2>
            <p className="text-gray-500">Configure your premium carrier bags with instant factory-direct pricing.</p>
          </div>
          <PriceCalculator variantId={productData.variantId} />
        </div>

        {/* Extended SEO Content Section */}
        <div className="prose prose-lg max-w-none border-t border-gray-100 pt-20">
          <section className="mb-20">
            <h2 className="text-4xl font-black mb-8 uppercase tracking-tighter">The Strategic Advantage of Factory-Direct Sourcing</h2>
            <p className="text-gray-600 leading-relaxed text-xl">
              In the competitive landscape of luxury retail, your packaging is more than just a carrier—it is a tangible extension of your brand’s identity. As we move into 2026, the demand for <strong>Custom Luxury Paper Bags</strong> has reached new heights, driven by a global shift toward sustainable elegance and high-touch consumer experiences.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="bg-gray-50 p-8 rounded-3xl">
                <h3 className="font-bold text-lg mb-4">Quality Control</h3>
                <p className="text-sm text-gray-500">Every stage—from pulp selection to foil stamping—is monitored under one roof for batch-to-batch consistency.</p>
              </div>
              <div className="bg-gray-50 p-8 rounded-3xl">
                <h3 className="font-bold text-lg mb-4">Cost Efficiency</h3>
                <p className="text-sm text-gray-500">Eliminate distributor markups and save 15-25%, allowing for higher-quality finishes within your budget.</p>
              </div>
              <div className="bg-gray-50 p-8 rounded-3xl">
                <h3 className="font-bold text-lg mb-4">Direct Expertise</h3>
                <p className="text-sm text-gray-500">Work directly with engineers for rapid prototyping of unique die-cuts or handle reinforcements.</p>
              </div>
            </div>
          </section>

          <section className="mb-20 bg-black text-white p-12 md:p-20 rounded-[40px]">
            <h2 className="text-3xl font-black mb-8 uppercase tracking-tight text-white">Bespoke Finishing: A Multi-Sensory Experience</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-bold mb-4 text-blue-400">Tactile Excellence</h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  Texture is the secret language of luxury. Our <strong>Spot UV</strong> creates a striking contrast between matte paper and high-gloss accents. <strong>Embossing</strong> and <strong>debossing</strong> create a three-dimensional experience that invites touch.
                </p>
                <h3 className="text-xl font-bold mb-4 text-blue-400">Metallic Brilliance</h3>
                <p className="text-gray-400 leading-relaxed">
                  Hot Foil Stamping in Gold, Silver, Rose Gold, or Holographic finishes conveys prestige and value, perfect for high-end jewelry and fashion.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-blue-400">Premium Handle Options</h3>
                <ul className="space-y-4 text-gray-400">
                  <li><strong>Cotton Rope:</strong> Soft, classic, and high-strength.</li>
                  <li><strong>Satin Ribbon:</strong> Elegant and often used in high-fashion.</li>
                  <li><strong>Grosgrain Ribbon:</strong> Durable with a sophisticated ribbed texture.</li>
                  <li><strong>Die-cut Handles:</strong> Modern, minimalist, and sleek.</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-20">
            <h2 className="text-3xl font-black mb-8 uppercase tracking-tight">Sustainability: The FSC Standard and Beyond</h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              In 2026, sustainability is no longer optional. All our premium papers are available with <strong>FSC (Forest Stewardship Council) certification</strong>, ensuring wood pulp is sourced from responsibly managed forests.
            </p>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h4 className="font-bold text-lg mb-2">Plastic-Free Construction</h4>
                <p className="text-gray-500 text-sm mb-6">We utilize aqueous coatings and biodegradable laminations that provide durability without the environmental footprint of plastic.</p>
                <h4 className="font-bold text-lg mb-2">The "Keep" Factor</h4>
                <p className="text-gray-500 text-sm">Because of their durability and aesthetic appeal, luxury consumers often reuse these bags for months, extending your brand's lifecycle.</p>
              </div>
              <div className="bg-green-50 p-10 rounded-[40px] border border-green-100 text-center">
                <span className="text-5xl mb-4 block">🌿</span>
                <p className="text-green-800 font-bold italic">"Luxury is only truly luxurious when it respects the planet. Our 100% recyclable construction leads the industry."</p>
              </div>
            </div>
          </section>

          <section className="mb-20 border-y border-gray-100 py-20">
            <h2 className="text-3xl font-black mb-8 uppercase tracking-tight text-center">Global Market Analysis (2026 Trends)</h2>
            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center">
                <h3 className="font-bold text-2xl mb-4">USA</h3>
                <p className="text-sm text-gray-500 italic mb-4">Boldness and Scale</p>
                <p className="text-sm text-gray-600">Focus on "The Big Reveal" with oversized typography, vibrant interior printing, and social-media-ready unboxing experiences.</p>
              </div>
              <div className="text-center">
                <h3 className="font-bold text-2xl mb-4">UK</h3>
                <p className="text-sm text-gray-500 italic mb-4">Heritage and Subtlety</p>
                <p className="text-sm text-gray-600">Rooted in "Quiet Luxury" with muted palettes (Forest Green, Navy), subtle textures, and classic gold foil accents.</p>
              </div>
              <div className="text-center">
                <h3 className="font-bold text-2xl mb-4">EU</h3>
                <p className="text-sm text-gray-500 italic mb-4">Innovation and Regulation</p>
                <p className="text-sm text-gray-600">Leader in design-led packaging with geometric shapes and the strictest plastic-free construction standards in the world.</p>
              </div>
            </div>
          </section>

          <section className="mb-20">
            <h2 className="text-3xl font-black mb-8 uppercase tracking-tight">Agile Logistics: Low MOQ and Global Delivery</h2>
            <div className="bg-gray-900 text-white p-12 rounded-[40px] grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-bold mb-4">Starting at 300-500 Units</h3>
                <p className="text-gray-400 text-sm mb-6">Test new designs or launch seasonal collections without heavy inventory risk. Ideal for both emerging boutiques and established global brands.</p>
                <Link href="/#contact">
                  <button className="bg-white text-black px-8 py-3 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-gray-200 transition">
                    Get Agile Quote
                  </button>
                </Link>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Door-to-Door (DDP) Shipping</h3>
                <p className="text-gray-400 text-sm">We handle all customs, duties, and logistics for shipments to the USA, UK, and EU. Your bags arrive ready for your retail floor.</p>
              </div>
            </div>
          </section>

          <section className="mb-20">
            <h2 className="text-3xl font-black mb-8 uppercase tracking-tight">High-Conversion SEO Clusters</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full text-left">
                <thead>
                  <tr className="border-b">
                    <th className="py-4 font-bold text-gray-900">Keyword Category</th>
                    <th className="py-4 font-bold text-gray-900">Target Region</th>
                    <th className="py-4 font-bold text-gray-900">Search Intent</th>
                  </tr>
                </thead>
                <tbody className="text-sm text-gray-500">
                  <tr className="border-b">
                    <td className="py-4">Custom Luxury Paper Bags Wholesale</td>
                    <td className="py-4">USA / Global</td>
                    <td className="py-4">High-Volume B2B Purchase</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4">Bespoke Retail Packaging UK</td>
                    <td className="py-4">United Kingdom</td>
                    <td className="py-4">Premium Boutique Solution</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4">Eco-friendly Luxury Gift Bags EU</td>
                    <td className="py-4">European Union</td>
                    <td className="py-4">Sustainability Compliance</td>
                  </tr>
                  <tr>
                    <td className="py-4">Low MOQ Luxury Packaging</td>
                    <td className="py-4">Global</td>
                    <td className="py-4">Agile Brand Launch</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-20">
            <h2 className="text-3xl font-black mb-8 uppercase tracking-tight">Frequently Asked Questions (FAQ)</h2>
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
              <div>
                <h4 className="font-bold mb-2">What handle types do you offer for paper bags?</h4>
                <p className="text-sm text-gray-500">We offer twisted paper handles, flat paper handles, cotton rope, and ribbon handles to match your brand's aesthetic and durability requirements.</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Can you handle multi-colour printing on luxury bags?</h4>
                <p className="text-sm text-gray-500">Yes, we provide high-definition offset printing and Pantone spot colour matching for precise brand reproduction on every bag.</p>
              </div>
            </div>
          </section>
        </div>

        {/* Final CTA */}
        <section className="bg-black text-white rounded-[40px] p-12 md:p-20 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-black mb-6 uppercase tracking-tighter">Elevate Your Brand Presence</h2>
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
