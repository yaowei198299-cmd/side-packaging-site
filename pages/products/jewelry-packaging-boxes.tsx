import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import PriceCalculator from '../../components/PriceCalculator';

const JewelryPackagingBoxesPage = () => {
  const productData = {
    title: "Jewelry & Watch Packaging Boxes",
    subtitle: "Sophisticated Rigid Box Solutions for Timeless Luxuries",
    variantId: "gid://shopify/ProductVariant/jewelry-boxes-placeholder",
    imageUrl: "/images/products/jewelry-hero.png",
    features: [
      { title: "Artisan Quality", desc: "Hand-finished rigid boxes crafted from high-density greyboard and premium textures." },
      { title: "Precision Engineering", desc: "Specialising in magnetic closures and velvet-lined inserts for maximum product protection." },
      { title: "Global Compliance", desc: "FSC certified and BSCI audited manufacturing ensuring ethical and sustainable production." },
      { title: "Factory Direct", desc: "Direct from our specialist China facility, offering exceptional value for high-end brands." }
    ]
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <Head>
        <title>Luxury Jewelry & Watch Boxes | Factory-Direct Bespoke Packaging | Side Packaging HK</title>
        <meta name="description" content="Premium custom jewelry and watch boxes manufacturer. Factory-direct rigid boxes with velvet inserts, gold foil stamping, and luxury unboxing experience. Low MOQ." />
        <meta name="keywords" content="Luxury Jewelry Boxes, Custom Watch Boxes, Wholesale Jewelry Boxes, Rigid Jewelry Packaging, Velvet Jewelry Inserts, Gold Foil Stamping, B2B Packaging Manufacturer, Bespoke Jewelry Boxes, Factory-Direct Jewelry Packaging, Luxury Unboxing Experience, Premium Watch Packaging, Eco-Luxury Packaging" />
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
          Home / Custom Packaging / <span className="text-gray-900 font-bold">Jewelry & Watch Boxes</span>
        </div>

        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tight leading-none">
              Custom Jewelry & Watch Packaging China Manufacturer
            </h1>
            <p className="text-xl text-gray-500 mb-8 leading-relaxed">
              Exude luxury and elegance with bespoke packaging designed for the world's finest jewelry and watches. Side Packaging HK provides factory-direct, high-end rigid box solutions that protect and present your masterpieces.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="bg-gray-100 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-gray-600">Hand-Finished</span>
              <span className="bg-gray-100 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-gray-600">FSC Certified</span>
              <span className="bg-gray-100 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-gray-600">Low MOQ</span>
            </div>
          </div>
          <div className="relative aspect-square bg-gray-50 rounded-[40px] overflow-hidden shadow-2xl">
            <img 
              src={productData.imageUrl} 
              alt="Luxury Jewelry and Watch Boxes - Custom Rigid Packaging" 
              className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>

        {/* Product Configurator Section */}
        <div className="mb-20">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-black mb-4">Create Your Signature Jewelry Box</h2>
            <p className="text-gray-500">Calculate bespoke pricing for your high-end accessory collections.</p>
          </div>
          <PriceCalculator variantId={productData.variantId} />
        </div>

        {/* Long Content Section (SEO Optimized) */}
        <div className="prose prose-lg max-w-none border-t border-gray-100 pt-20">
          <section className="mb-16">
            <h2 className="text-3xl font-black mb-6 uppercase tracking-tight">Executive Summary: The Essence of Luxury Presentation</h2>
            <p className="text-gray-600 leading-relaxed">
              In the world of high jewelry and horology, the box is not merely a container; it is an integral part of the unboxing ritual that builds anticipation and signifies heritage. As a leading <strong>custom jewelry & watch packaging boxes China manufacturer</strong>, Side Packaging HK specialises in the design and production of ultra-premium rigid boxes. Our <strong>factory direct</strong> model ensures that your brand receives the highest levels of craftsmanship and material quality, typically reserved for heritage houses, but at competitive manufacturing costs.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We understand that jewelry requires sensitive handling and precise protection. Our facility utilizes <strong>FSC certified</strong> papers and eco-friendly structural components to meet modern sustainability standards without compromising on the tactile luxury your customers expect. Whether you are launching a startup jewelry line or seeking a reliable partner for large-scale watch packaging, our <strong>low MOQ</strong> options provide the flexibility needed to maintain exclusivity while scaling your operations efficiently.
            </p>
          </section>

          <section className="mb-16 grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-black mb-6 uppercase tracking-tight">Technical Specifications</h2>
              <ul className="space-y-4 text-gray-600 list-none p-0">
                <li className="flex justify-between border-b pb-2">
                  <span className="font-bold">Structural Board:</span>
                  <span>800gsm - 1800gsm High-Density Greyboard</span>
                </li>
                <li className="flex justify-between border-b pb-2">
                  <span className="font-bold">Wrapping Materials:</span>
                  <span>Specialty Embossed Paper, PU Leather, Velvet, Silk</span>
                </li>
                <li className="flex justify-between border-b pb-2">
                  <span className="font-bold">Opening Styles:</span>
                  <span>Hinged Box, Slide Drawer, Ribbon Lift, Magnetic Closure</span>
                </li>
                <li className="flex justify-between border-b pb-2">
                  <span className="font-bold">Branding Techniques:</span>
                  <span>Debossing, Precision Hot Foil, Screen Printing</span>
                </li>
                <li className="flex justify-between border-b pb-2">
                  <span className="font-bold">Interior Inserts:</span>
                  <span>Microfiber Velvet, Suede, Satin-lined Foam</span>
                </li>
                <li className="flex justify-between border-b pb-2">
                  <span className="font-bold">Testing Standards:</span>
                  <span>Drop Tests, Anti-tarnish Material Approval</span>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-black mb-6 uppercase tracking-tight">Factory Process</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-bold text-sm">1</span>
                  <div>
                    <h4 className="font-bold mb-1">Precision Structural Engineering</h4>
                    <p className="text-sm text-gray-500">Every watch pillow and jewelry slit is engineered to hold your product securely, preventing movement during transit.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-bold text-sm">2</span>
                  <div>
                    <h4 className="font-bold mb-1">Material Selection & Curing</h4>
                    <p className="text-sm text-gray-500">We source anti-tarnish materials specifically for jewelry to ensure long-term preservation of precious metals and stones.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-bold text-sm">3</span>
                  <div>
                    <h4 className="font-bold mb-1">Hand-Wrapping & Assembly</h4>
                    <p className="text-sm text-gray-500">Luxury rigid boxes require a human touch; our skilled artisans hand-wrap every corner to ensure seamless, bubble-free finishes.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-bold text-sm">4</span>
                  <div>
                    <h4 className="font-bold mb-1">Microscopic Quality Review</h4>
                    <p className="text-sm text-gray-500">Final inspection focuses on hinge durability, magnetic snap strength, and branding alignment before global white-glove delivery.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-black mb-8 uppercase tracking-tight text-center">Case Studies: Jewelry Excellence</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-8 rounded-3xl">
                <h3 className="text-xl font-bold mb-4">Luxury Watch House Launch</h3>
                <p className="text-gray-600 mb-6 italic">"The structural integrity of the watch boxes from Side Packaging is astounding. They managed to integrate a hidden magnetic mechanism that feels incredibly premium."</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center font-bold text-yellow-600">W</div>
                  <div>
                    <p className="font-bold text-sm">Founder, Bespoke Timepieces London</p>
                    <p className="text-xs text-gray-400">Order: 500 Premium Watch Caskets</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 p-8 rounded-3xl">
                <h3 className="text-xl font-bold mb-4">Sustainable Jewelry Brand Expansion</h3>
                <p className="text-gray-600 mb-6 italic">"Switching to Side Packaging allowed us to use 100% recycled greyboard and FSC papers while improving our unboxing aesthetic. Our customer satisfaction ratings have never been higher."</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-600">J</div>
                  <div>
                    <p className="font-bold text-sm">Head of Design, Eco-Jewel HK</p>
                    <p className="text-xs text-gray-400">Outcome: Zero-Plastic Transition Success</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-black mb-8 uppercase tracking-tight">Frequently Asked Questions (FAQ)</h2>
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
              <div>
                <h4 className="font-bold mb-2">1. Do your jewelry boxes use anti-tarnish materials?</h4>
                <p className="text-sm text-gray-500">Yes, all our velvet, suede, and microfiber inserts are specially treated to prevent tarnishing of silver and gold jewelry during long-term storage.</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">2. What is the MOQ for custom jewelry boxes?</h4>
                <p className="text-sm text-gray-500">Our low MOQ starts at 500 units for fully bespoke rigid boxes, though we can accommodate smaller runs for ultra-luxury limited editions.</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">3. Can you manufacture watch pillows to specific sizes?</h4>
                <p className="text-sm text-gray-500">Absolutely. We customize watch pillows for any case diameter, from delicate ladies' watches to oversized chronograph timepieces.</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">4. What is the difference between hand-wrapping and machine-wrapping?</h4>
                <p className="text-sm text-gray-500">Hand-wrapping allows for thicker specialty papers and sharp, crisp corners that automated machines cannot replicate for luxury rigid boxes.</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">5. Do you offer recycled material options?</h4>
                <p className="text-sm text-gray-500">Yes, we offer high-percentage recycled greyboard and post-consumer waste (PCW) papers that are FSC certified.</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">6. How do you handle complex branding like multi-level debossing?</h4>
                <p className="text-sm text-gray-500">Our factory uses precision CNC-engraved brass dies to achieve sharp, multi-level debossing that adds significant tactile value.</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">7. Can I request a pre-production sample?</h4>
                <p className="text-sm text-gray-500">Yes, we provide physical samples with your branding and specific materials to ensure every detail is perfect before mass production.</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">8. What opening mechanisms do you recommend for watches?</h4>
                <p className="text-sm text-gray-500">We highly recommend hinged lids with magnetic snaps or "click-shut" mechanisms for a satisfying and secure opening experience.</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">9. How do you ship rigid boxes globally?</h4>
                <p className="text-sm text-gray-500">To prevent damage, we ship in double-walled export cartons with corner protectors, typically via sea freight or air freight with DDP terms.</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">10. Can you include custom ribbons or tags?</h4>
                <p className="text-sm text-gray-500">Yes, we can provide matching luxury ribbons, authenticity cards, and branded paper bags to create a complete packaging suite.</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">11. Do your jewelry boxes include padding?</h4>
                <p className="text-sm text-gray-500">Yes, we provide a variety of padding options, including velvet-lined foam, linen-wrapped inserts, and recycled cotton fills to protect delicate jewelry.</p>
              </div>
            </div>
          </section>
        </div>

        {/* Marketing / Factory Backing Section */}
        <section className="grid md:grid-cols-2 gap-16 py-20 border-t border-gray-100 mt-20">
          <div>
            <h2 className="text-3xl font-black mb-8 leading-tight uppercase tracking-tight">
              Heritage Craftsmanship <br/>for Modern Brands
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
          
          <div className="bg-gray-900 text-white p-12 rounded-[40px] flex flex-col justify-center relative overflow-hidden shadow-2xl">
            <blockquote className="text-2xl font-medium italic mb-6 relative z-10">
              "Working with Side Packaging HK transformed our presentation. Their attention to the 'snap' of the magnetic closure was exactly the detail we needed for our high-end watch collection."
            </blockquote>
            <div className="flex items-center space-x-4 relative z-10">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center font-bold">A</div>
              <div>
                <p className="font-bold">Creative Director</p>
                <p className="text-sm text-gray-400">Swiss Watch Group</p>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/10 blur-3xl rounded-full -mr-32 -mt-32"></div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-gray-50 rounded-[40px] p-12 md:p-20 text-center border border-gray-100">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-black mb-6">Create a Masterpiece for Your Masterpiece</h2>
            <p className="text-gray-500 text-lg mb-10 leading-relaxed">
              Experience the difference of factory-direct luxury. Get your custom jewelry packaging quote within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/#contact">
                <button className="bg-black text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-800 transition shadow-xl">
                  Get a Luxury Quote
                </button>
              </Link>
              <button className="bg-white text-black border border-gray-200 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition">
                Book a Video Consultation
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
          <span>ISO 9001 Expert</span>
          <span>FSC Certified Paper</span>
        </div>
      </footer>
    </div>
  );
};

export default JewelryPackagingBoxesPage;
