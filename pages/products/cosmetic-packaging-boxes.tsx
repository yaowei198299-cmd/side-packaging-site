import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import PriceCalculator from '../../components/PriceCalculator';

const CosmeticPackagingBoxesPage = () => {
  const productData = {
    title: "Cosmetic Packaging Boxes",
    subtitle: "High-End Luxury Solutions for Skincare, Makeup, and Fragrance",
    variantId: "gid://shopify/ProductVariant/cosmetic-boxes-placeholder",
    imageUrl: "https://sc02.alicdn.com/kf/Ad479d4d9f3944161bf481e0ad9adc1feM.png",
    features: [
      { title: "Bespoke Finishes", desc: "Specialising in soft-touch lamination, hot foil stamping, and multi-level embossing." },
      { title: "Factory Direct", desc: "Our China-based facility offers unparalleled manufacturing precision at factory-direct pricing." },
      { title: "FSC Certified", desc: "Committed to sustainability with 100% recyclable materials and FSC-certified paper options." },
      { title: "Low MOQ", desc: "Low minimum order quantities starting at 500 units for luxury-grade custom solutions." }
    ]
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <Head>
        <title>{productData.title} | Custom Cosmetic Packaging China Manufacturer | Side Packaging HK</title>
        <meta name="description" content="Premium custom cosmetic packaging boxes manufacturer in China. Factory direct pricing, FSC certified, and low MOQ for luxury skincare and makeup brands." />
        <meta name="keywords" content="custom cosmetic packaging boxes China, cosmetic box manufacturer, luxury makeup boxes, FSC certified cosmetic packaging, low MOQ cosmetic boxes" />
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
          Home / Custom Packaging / <span className="text-gray-900 font-bold">Cosmetic Boxes</span>
        </div>

        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tight leading-none">
              Custom Cosmetic Packaging China Manufacturer
            </h1>
            <p className="text-xl text-gray-500 mb-8 leading-relaxed">
              Define your brand's luxury identity with bespoke cosmetic packaging. Side Packaging HK combines factory-direct efficiency with high-end craftsmanship to create the perfect box for your skincare and makeup collections.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="bg-gray-100 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-gray-600">Luxury Grade</span>
              <span className="bg-gray-100 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-gray-600">FSC Certified</span>
              <span className="bg-gray-100 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-gray-600">Low MOQ</span>
            </div>
          </div>
          <div className="relative aspect-square bg-gray-50 rounded-[40px] overflow-hidden shadow-2xl">
            <img 
              src={productData.imageUrl} 
              alt="Custom Cosmetic Packaging Boxes" 
              className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>

        {/* Product Configurator Section */}
        <div className="mb-20">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-black mb-4">Design Your Luxury Packaging</h2>
            <p className="text-gray-500">Instant pricing for high-end cosmetic boxes from our China factory.</p>
          </div>
          <PriceCalculator variantId={productData.variantId} />
        </div>

        {/* Long Content Section (SEO Optimized) */}
        <div className="prose prose-lg max-w-none border-t border-gray-100 pt-20">
          <section className="mb-16">
            <h2 className="text-3xl font-black mb-6 uppercase tracking-tight">Executive Summary: Elevating the Beauty Experience</h2>
            <p className="text-gray-600 leading-relaxed">
              In the beauty and personal care industry, packaging is far more than a protective shell; it is a primary communicator of brand value and product quality. As a premier <strong>custom cosmetic packaging boxes China manufacturer</strong>, Side Packaging HK understands the intricate balance between aesthetic appeal and structural functionality. Our factory specialises in creating high-end, bespoke packaging solutions for skincare, makeup, and fragrances that capture the essence of your brand's story.
            </p>
            <p className="text-gray-600 leading-relaxed">
              By working <strong>factory direct</strong> with our team in China, brands gain access to advanced manufacturing techniques and luxury finishes that are often cost-prohibitive elsewhere. We are committed to environmental responsibility, offering <strong>FSC certified</strong> materials and sustainable coating options to align with the growing demand for eco-conscious beauty products. With our <strong>low MOQ</strong> capability, we empower both independent boutique brands and established luxury houses to innovate and launch new product lines with minimal risk and maximum impact.
            </p>
          </section>

          <section className="mb-16 grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-black mb-6 uppercase tracking-tight">Technical Specifications</h2>
              <ul className="space-y-4 text-gray-600 list-none p-0">
                <li className="flex justify-between border-b pb-2">
                  <span className="font-bold">Paper Stocks:</span>
                  <span>C1S/C2S Art Paper, Black Card, Specialty Textured Paper</span>
                </li>
                <li className="flex justify-between border-b pb-2">
                  <span className="font-bold">Box Structures:</span>
                  <span>Tuck End, Drawer Box, Magnetic Closure, Two-Piece Lid & Base</span>
                </li>
                <li className="flex justify-between border-b pb-2">
                  <span className="font-bold">Surface Finishes:</span>
                  <span>Soft-touch, Matte/Gloss, Anti-scratch Lamination</span>
                </li>
                <li className="flex justify-between border-b pb-2">
                  <span className="font-bold">Decorative Effects:</span>
                  <span>Hot Foil (Gold/Silver/Rose Gold), Spot UV, Embossing/Debossing</span>
                </li>
                <li className="flex justify-between border-b pb-2">
                  <span className="font-bold">Inserts & Internal:</span>
                  <span>EVA Foam, Paper Pulp, Vacuum-formed Plastic, Silk Lining</span>
                </li>
                <li className="flex justify-between border-b pb-2">
                  <span className="font-bold">Certifications:</span>
                  <span>ISO 9001, BSCI, FSC, G7 Colour Management</span>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-black mb-6 uppercase tracking-tight">Factory Process</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-bold text-sm">1</span>
                  <div>
                    <h4 className="font-bold mb-1">Concept & Artwork Approval</h4>
                    <p className="text-sm text-gray-500">We review your designs or provide creative dieline support to ensure technical feasibility for mass production.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-bold text-sm">2</span>
                  <div>
                    <h4 className="font-bold mb-1">Luxury Finish Application</h4>
                    <p className="text-sm text-gray-500">State-of-the-art machinery applies complex finishes such as multi-level embossing and precision foil stamping with micrometre accuracy.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-bold text-sm">3</span>
                  <div>
                    <h4 className="font-bold mb-1">Automated Rigid Box Assembly</h4>
                    <p className="text-sm text-gray-500">Our automated assembly lines ensure consistent quality and perfectly straight edges for every luxury rigid box produced.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-bold text-sm">4</span>
                  <div>
                    <h4 className="font-bold mb-1">Stringent Quality Control</h4>
                    <p className="text-sm text-gray-500">A 5-step QC process checks for glue residue, colour consistency, and structural integrity before global dispatch.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-black mb-8 uppercase tracking-tight text-center">Case Studies: Beauty Brand Success</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-8 rounded-3xl">
                <h3 className="text-xl font-bold mb-4">Clean Beauty Rebrand</h3>
                <p className="text-gray-600 mb-6 italic">"Side Packaging helped us achieve a premium feel using only sustainable materials. The FSC-certified paper and soy-based inks exceeded our sustainability criteria without compromising on luxury."</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center font-bold text-pink-600">C</div>
                  <div>
                    <p className="font-bold text-sm">Creative Director, Nordic Skincare</p>
                    <p className="text-xs text-gray-400">Outcome: 40% Increase in Retail Interest</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 p-8 rounded-3xl">
                <h3 className="text-xl font-bold mb-4">Limited Edition Makeup Launch</h3>
                <p className="text-gray-600 mb-6 italic">"The precision of their hot foil stamping is unmatched. We launched a limited edition collection with 1,000 units and the quality was consistent across every single piece."</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center font-bold text-purple-600">M</div>
                  <div>
                    <p className="font-bold text-sm">Product Manager, Luxury Makeup House</p>
                    <p className="text-xs text-gray-400">Launch Size: 1,000 Bespoke Units</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-black mb-8 uppercase tracking-tight">Frequently Asked Questions (FAQ)</h2>
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
              <div>
                <h4 className="font-bold mb-2">1. What makes your cosmetic boxes "luxury grade"?</h4>
                <p className="text-sm text-gray-500">We use high-grammage greyboard (up to 1200gsm) and premium wrapping papers combined with advanced finishes like soft-touch lamination and precision embossing.</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">2. Can you match my specific brand colours?</h4>
                <p className="text-sm text-gray-500">Yes, we utilise G7-certified colour management and Pantone matching systems to ensure absolute consistency across all your packaging components.</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">3. Do you offer eco-friendly inserts?</h4>
                <p className="text-sm text-gray-500">Certainly. We provide moulded paper pulp, biodegradable sugar cane inserts, and 100% recyclable cardboard dividers as alternatives to plastic.</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">4. What is the MOQ for luxury rigid boxes?</h4>
                <p className="text-sm text-gray-500">For our premium rigid box lines, the standard MOQ starts at 500 units, which allows for cost-effective custom setup.</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">5. How do you ensure the boxes won't get scratched during shipping?</h4>
                <p className="text-sm text-gray-500">We offer anti-scratch matte lamination and individual poly-bagging (or tissue wrapping) to protect delicate finishes during international transit.</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">6. Can I request a structural prototype?</h4>
                <p className="text-sm text-gray-500">Yes, we provide unprinted structural samples (CAD samples) within 48 hours for fit testing with your actual products.</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">7. Are your factories in China BSCI audited?</h4>
                <p className="text-sm text-gray-500">Yes, our facility maintains full BSCI compliance, ensuring ethical labor practices and safe working conditions for all our team members.</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">8. Do you support multi-SKU orders?</h4>
                <p className="text-sm text-gray-500">Yes, we can produce multiple designs (e.g., for different shades of lipstick) in a single production run to help you manage inventory.</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">9. What is the typical lead time?</h4>
                <p className="text-sm text-gray-500">Luxury rigid boxes typically require 12-15 working days for production due to the intricate assembly and finishing processes.</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">10. Can you handle fragrance packaging requirements?</h4>
                <p className="text-sm text-gray-500">Yes, we specialise in fragrance packaging that accommodates heavy glass bottles and provides the necessary internal support to prevent breakage.</p>
              </div>
            </div>
          </section>
        </div>

        {/* Marketing / Factory Backing Section */}
        <section className="grid md:grid-cols-2 gap-16 py-20 border-t border-gray-100 mt-20">
          <div>
            <h2 className="text-3xl font-black mb-8 leading-tight uppercase tracking-tight">
              Bespoke Craftsmanship <br/>at Industrial Scale
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
          
          <div className="bg-pink-50 text-gray-900 p-12 rounded-[40px] flex flex-col justify-center relative overflow-hidden">
            <blockquote className="text-2xl font-medium italic mb-6 relative z-10">
              "The finish quality Side Packaging provides is on par with European manufacturers, but at a price point that allowed us to scale our boutique brand globally."
            </blockquote>
            <div className="flex items-center space-x-4 relative z-10">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center font-bold">V</div>
              <div>
                <p className="font-bold">Operations Director</p>
                <p className="text-sm text-gray-400">Artisanal Perfumery, Paris</p>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 blur-3xl rounded-full -mr-32 -mt-32"></div>
          </div>
        </section>

        {/* Pricing Calculator Section */}
        <section id="quote" className="py-24 bg-gray-50 rounded-[4rem] border border-gray-100 overflow-hidden text-center">
           <div className="max-w-4xl mx-auto px-6 mb-16">
              <h2 className="text-4xl md:text-5xl font-black mb-8 uppercase tracking-tighter leading-[0.9]">Configure Your <br/>Cosmetic Box.</h2>
              <p className="text-gray-500 font-medium text-lg leading-relaxed">
                Get an instant estimate for your premium cosmetic packaging. For custom inserts or special high-volume requirements, contact our design team.
              </p>
           </div>
           <PriceCalculator variantId={productData.variantId} />
           <p className="text-center text-xs text-gray-300 font-bold uppercase tracking-[0.2em] mt-10">Prices based on CIF/DDP shipping estimates. Final quote may vary.</p>
        </section>

        {/* Final CTA */}
        <section className="bg-gray-50 rounded-[40px] p-12 md:p-20 text-center border border-gray-100">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-black mb-6">Elevate Your Brand Signature</h2>
            <p className="text-gray-500 text-lg mb-10 leading-relaxed">
              Don't settle for generic packaging. Work with a specialist China manufacturer that understands the nuances of luxury beauty.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/#contact">
                <button className="bg-black text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-800 transition shadow-xl">
                  Request Luxury Quote
                </button>
              </Link>
              <button className="bg-white text-black border border-gray-200 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition">
                Order a Sample Swatch Kit
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

export default CosmeticPackagingBoxesPage;
