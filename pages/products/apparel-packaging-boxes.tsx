import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import PriceCalculator from '../../components/PriceCalculator';

const ApparelPackagingBoxesPage = () => {
  const productData = {
    title: "Apparel & Textile Packaging Boxes",
    subtitle: "Premium Cardboard Solutions for Fashion, Accessories, and Home Textiles",
    variantId: "gid://shopify/ProductVariant/apparel-boxes-placeholder",
    imageUrl: "https://sc02.alicdn.com/kf/A7b2cac8d4efe401f9df1793bf9071d0bu.png",
    features: [
      { title: "Retail Ready", desc: "Specialising in apparel presentation boxes that enhance the shelf appeal of your fashion line." },
      { title: "Eco-Friendly", desc: "Committed to sustainability with 100% recyclable materials and FSC-certified paper stock." },
      { title: "Factory Direct", desc: "Eliminate middlemen and enjoy factory-direct pricing from our China-based facility." },
      { title: "Low MOQ", desc: "Flexible order quantities starting from 500 units to support seasonal fashion launches." }
    ]
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <Head>
        <title>{productData.title} | Custom Apparel Box China Manufacturer | Side Packaging HK</title>
        <meta name="description" content="Premium apparel and textile packaging boxes manufacturer in China. Factory direct pricing, FSC certified, and low MOQ for fashion and lifestyle brands." />
        <meta name="keywords" content="custom apparel packaging boxes China, apparel box manufacturer, fashion packaging factory, FSC certified apparel boxes, low MOQ textile boxes" />
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
          Home / Custom Packaging / <span className="text-gray-900 font-bold">Apparel & Textile Boxes</span>
        </div>

        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tight leading-none">
              Custom Apparel & Textile Packaging China Manufacturer
            </h1>
            <p className="text-xl text-gray-500 mb-8 leading-relaxed">
              Step up your fashion brand's presentation with bespoke apparel packaging. Side Packaging HK combines factory-direct efficiency with high-end craftsmanship to create the perfect box for your clothing and textile collections.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="bg-gray-100 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-gray-600">Retail Ready</span>
              <span className="bg-gray-100 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-gray-600">FSC Certified</span>
              <span className="bg-gray-100 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-gray-600">Low MOQ</span>
            </div>
          </div>
          <div className="relative aspect-square bg-gray-50 rounded-[40px] overflow-hidden shadow-2xl">
            <img 
              src={productData.imageUrl} 
              alt="Custom Apparel Packaging Boxes - Luxury Clothing Presentation" 
              className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>

        {/* Product Configurator Section */}
        <div className="mb-20">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-black mb-4">Design Your Fashion Packaging</h2>
            <p className="text-gray-500">Instant pricing for high-end apparel boxes from our China factory.</p>
          </div>
          <PriceCalculator variantId={productData.variantId} />
        </div>

        {/* Long Content Section (SEO Optimized) */}
        <div className="prose prose-lg max-w-none border-t border-gray-100 pt-20">
          <section className="mb-16">
            <h2 className="text-3xl font-black mb-6 uppercase tracking-tight">Executive Summary: High-End Fashion Deserves High-End Packaging</h2>
            <p className="text-gray-600 leading-relaxed">
              In the fast-paced world of fashion and apparel, the unboxing experience is an extension of the brand's aesthetic. As a premier <strong>custom apparel & textile packaging boxes China manufacturer</strong>, Side Packaging HK understands the unique requirements of clothing and home textile brands. Our <strong>factory direct</strong> model in China allows us to provide luxury-grade, bespoke packaging solutions that reflect the quality of the garments within, all while maintaining competitive pricing for our global clients.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our packaging solutions range from simple tuck-end boxes to complex rigid boxes for high-end accessories. We are committed to sustainability, offering <strong>FSC certified</strong> paper options and ensuring all materials are 100% recyclable to meet the environmental expectations of modern consumers. With <strong>low MOQ</strong> capability, we empower independent designers and established fashion houses to create seasonal and limited-edition packaging that stands out in a crowded market.
            </p>
          </section>

          <section className="mb-16 grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-black mb-6 uppercase tracking-tight">Technical Specifications</h2>
              <ul className="space-y-4 text-gray-600 list-none p-0">
                <li className="flex justify-between border-b pb-2">
                  <span className="font-bold">Paper Options:</span>
                  <span>Art Paper, Kraft Paper, White Cardboard</span>
                </li>
                <li className="flex justify-between border-b pb-2">
                  <span className="font-bold">Grammage:</span>
                  <span>250gsm - 400gsm (Cardboard), 800gsm+ (Rigid)</span>
                </li>
                <li className="flex justify-between border-b pb-2">
                  <span className="font-bold">Box Structures:</span>
                  <span>Tuck End, Handle Box, Pillow Box, Rigid Two-Piece</span>
                </li>
                <li className="flex justify-between border-b pb-2">
                  <span className="font-bold">Printing Methods:</span>
                  <span>Offset CMYK, Pantone Spot Colour, UV Digital</span>
                </li>
                <li className="flex justify-between border-b pb-2">
                  <span className="font-bold">Lamination:</span>
                  <span>Matte, Gloss, Soft-Touch (Velvet)</span>
                </li>
                <li className="flex justify-between border-b pb-2">
                  <span className="font-bold">Certifications:</span>
                  <span>BSCI, FSC, ISO 9001:2015</span>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-black mb-6 uppercase tracking-tight">Factory Process</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-bold text-sm">1</span>
                  <div>
                    <h4 className="font-bold mb-1">Dieline & Artwork Consultation</h4>
                    <p className="text-sm text-gray-500">Our design team works with you to ensure your artwork fits perfectly on the box dieline, avoiding any design distortion.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-bold text-sm">2</span>
                  <div>
                    <h4 className="font-bold mb-1">Precision Die-Cutting</h4>
                    <p className="text-sm text-gray-500">Automated machinery ensures each box is cut to exact dimensions, providing consistency across large production runs.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-bold text-sm">3</span>
                  <div>
                    <h4 className="font-bold mb-1">Finishing & Lamination</h4>
                    <p className="text-sm text-gray-500">Advanced coating technology applies matte or gloss finishes that protect the box and enhance its tactile appeal.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-bold text-sm">4</span>
                  <div>
                    <h4 className="font-bold mb-1">Assembly & Flat-Packing</h4>
                    <p className="text-sm text-gray-500">Most boxes are shipped flat-packed to reduce shipping costs and storage requirements for our fashion industry clients.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-black mb-8 uppercase tracking-tight text-center">Case Studies: Fashion Industry Impact</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-8 rounded-3xl">
                <h3 className="text-xl font-bold mb-4">Ethical Cotton Brand Rebrand</h3>
                <p className="text-gray-600 mb-6 italic">"Side Packaging HK provided us with FSC-certified kraft boxes that matched our brand's ethical mission perfectly. The unboxing experience became as sustainable as the product itself."</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center font-bold text-green-600">E</div>
                  <div>
                    <p className="font-bold text-sm">Creative Lead, Ethical Apparel London</p>
                    <p className="text-xs text-gray-400">Result: 25% Increase in Brand Loyalty</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 p-8 rounded-3xl">
                <h3 className="text-xl font-bold mb-4">Luxury Scarf Collection Launch</h3>
                <p className="text-gray-600 mb-6 italic">"We needed a rigid box for our silk scarves that exuded luxury. The soft-touch lamination and gold foil stamping from Side Packaging were simply exquisite."</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center font-bold text-purple-600">S</div>
                  <div>
                    <p className="font-bold text-sm">Founder, Luxury Textiles Paris</p>
                    <p className="text-xs text-gray-400">Outcome: Sold Out in 48 Hours</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-black mb-8 uppercase tracking-tight">Frequently Asked Questions (FAQ)</h2>
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
              <div>
                <h4 className="font-bold mb-2">1. What is the MOQ for custom apparel boxes?</h4>
                <p className="text-sm text-gray-500">For custom-printed cardboard boxes, our low MOQ starts at 500 units, which ensures production efficiency and competitive unit costs.</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">2. Can you provide handle boxes for fashion retail?</h4>
                <p className="text-sm text-gray-500">Yes, we specialise in apparel boxes with integrated handles, providing a convenient and stylish solution for in-store purchases.</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">3. Are your boxes suitable for home textiles like bedding?</h4>
                <p className="text-sm text-gray-500">Certainly. We manufacture larger-format boxes designed specifically for blankets, towels, and luxury bedding sets with reinforced structures.</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">4. Do you offer FSC certified paper options?</h4>
                <p className="text-sm text-gray-500">Yes, we provide FSC-certified materials to help brands meet their sustainability goals and environmental compliance.</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">5. Can I get a sample before placing a full order?</h4>
                <p className="text-sm text-gray-500">Yes, we offer both digital mockups (free) and physical prototypes (chargeable) for you to test the fit and finish of your apparel packaging.</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">6. How are the boxes shipped from China?</h4>
                <p className="text-sm text-gray-500">We ship boxes flat-packed to minimize shipping costs. For urgent orders, we offer air freight, while sea freight is best for large volumes.</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">7. Do you support multi-colour printing?</h4>
                <p className="text-sm text-gray-500">Yes, we provide full-colour CMYK offset printing and Pantone spot colour matching for precise brand reproduction.</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">8. Can you handle custom sizes for different garment types?</h4>
                <p className="text-sm text-gray-500">Absolutely. We create custom dielines based on your specific product dimensions, ensuring a perfect fit for everything from ties to winter coats.</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">9. What is the typical production lead time?</h4>
                <p className="text-sm text-gray-500">Production typically takes 10-12 working days after artwork approval, plus shipping time from our China facility.</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">10. Can you include interior elements like tissue paper or stickers?</h4>
                <p className="text-sm text-gray-500">Yes, we can provide a complete packaging suite, including custom-printed tissue paper, stickers, and thank-you cards.</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">11. Do you offer luxury inserts for apparel boxes?</h4>
                <p className="text-sm text-gray-500">Yes, we provide custom-cut foam, silk linings, and molded pulp inserts to enhance the presentation of high-end garments and accessories.</p>
              </div>
            </div>
          </section>
        </div>

        {/* Marketing / Factory Backing Section */}
        <section className="grid md:grid-cols-2 gap-16 py-20 border-t border-gray-100 mt-20">
          <div>
            <h2 className="text-3xl font-black mb-8 leading-tight uppercase tracking-tight">
              Factory Direct Fashion <br/>Packaging Specialists
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
          
          <div className="bg-blue-50 text-gray-900 p-12 rounded-[40px] flex flex-col justify-center relative overflow-hidden">
            <blockquote className="text-2xl font-medium italic mb-6 relative z-10">
              "The finish on the boxes was incredible. Side Packaging helped us create a cohesive look across our entire apparel line while staying within our budget."
            </blockquote>
            <div className="flex items-center space-x-4 relative z-10">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center font-bold">M</div>
              <div>
                <p className="font-bold">Operations Manager</p>
                <p className="text-sm text-gray-400">Contemporary Fashion House, London</p>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 blur-3xl rounded-full -mr-32 -mt-32"></div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-gray-50 rounded-[40px] p-12 md:p-20 text-center border border-gray-100">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-black mb-6">Dress Your Products for Success</h2>
            <p className="text-gray-500 text-lg mb-10 leading-relaxed">
              Experience the difference of factory-direct fashion packaging. Get your custom apparel box quote within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/#contact">
                <button className="bg-black text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-800 transition shadow-xl">
                  Request Apparel Quote
                </button>
              </Link>
              <button className="bg-white text-black border border-gray-200 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition">
                Order Swatch Samples
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

export default ApparelPackagingBoxesPage;
