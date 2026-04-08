import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import PriceCalculator from '../../components/PriceCalculator';

const ProductPage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-blue-100">
      <Head>
        <title>Custom Magnetic Gift Boxes | Luxury Rigid Box Manufacturer China | Side Packaging</title>
        <meta name="description" content="Premium custom magnetic gift boxes from Side Packaging HK. 20+ years of manufacturing luxury rigid packaging. FSC certified, Low MOQ 100pcs. Factory direct pricing." />
        <meta name="keywords" content="custom magnetic gift boxes China, luxury rigid box manufacturer, FSC certified packaging, Low MOQ 100pcs, wholesale magnetic boxes" />
        
        {/* Product Schema (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "Product",
              "name": "Custom Magnetic Gift Boxes",
              "image": [
                "https://sc02.alicdn.com/kf/A092333b800b841ab8b8229cd7ee66f5ec.png"
              ],
              "description": "Premium luxury rigid boxes with hidden magnetic closures. Custom sizes, materials, and finishes available factory-direct from China.",
              "sku": "SIDE-MAG-001",
              "brand": {
                "@type": "Brand",
                "name": "Side Packaging"
              },
              "offers": {
                "@type": "AggregateOffer",
                "priceCurrency": "USD",
                "lowPrice": "0.85",
                "highPrice": "4.50",
                "offerCount": "100",
                "availability": "https://schema.org/InStock"
              }
            })
          }}
        />
      </Head>

      {/* Navigation */}
      <nav className="border-b border-gray-100 sticky top-0 bg-white/95 backdrop-blur-md z-[60]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
          <Link href="/" className="font-black text-2xl tracking-tighter italic uppercase">Side Packaging</Link>
          <div className="hidden lg:flex items-center space-x-10 text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400">
            <Link href="/" className="hover:text-black transition-colors">Home</Link>
            <Link href="/#products" className="text-black border-b-2 border-black py-1">Products</Link>
            <Link href="/#about" className="hover:text-black transition-colors">Factory</Link>
            <Link href="/blog" className="hover:text-black transition-colors">Blog</Link>
          </div>
          <Link href="/#contact">
            <button className="bg-black text-white px-8 py-3.5 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-gray-800 transition-all shadow-lg">
              GET A QUOTE
            </button>
          </Link>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-24">
        <h1 className="text-5xl md:text-7xl font-black mb-12 tracking-tighter uppercase leading-[0.9]">
          The Art of the <br/>
          <span className="text-blue-600">Magnetic Closure.</span>
        </h1>

        <div className="prose prose-xl prose-blue max-w-none font-medium text-gray-600 leading-relaxed">
          <section className="mb-20">
            <h2 className="text-3xl font-black text-gray-900 uppercase tracking-tight mb-6">Executive Summary: Why Global Brands Choose Magnetic Rigid Boxes</h2>
            <p>
              In the competitive world of luxury retail, the first physical touchpoint between your brand and your customer isn't the product itself—it's the packaging. The "unboxing experience" has evolved from a simple logistics necessity into a powerful marketing tool. At <strong>Side Packaging HK Limited</strong>, we specialise in <em>custom magnetic gift boxes manufactured in China</em> that define this moment of truth.
            </p>
            <p>
              Magnetic closure boxes, also known as book-style boxes, offer a unique combination of structural durability and aesthetic elegance. The satisfying "clunk" of a high-grade magnet engaging is a visceral signal of quality that cardboard flaps or tape simply cannot replicate. For brands in the beauty, jewellery, and high-end electronics sectors, these boxes are an investment in customer loyalty and perceived value.
            </p>
          </section>

          <section className="mb-20 bg-gray-50 p-12 rounded-[3rem] border border-gray-100">
            <h2 className="text-3xl font-black text-gray-900 uppercase tracking-tight mb-6">Technical Specifications & Customisation</h2>
            <p>
              As a leading <strong>luxury rigid box manufacturer</strong>, we provide a vast array of technical customisations to ensure your packaging aligns perfectly with your brand identity.
            </p>
            <ul className="list-disc pl-6 space-y-4">
              <li><strong>Core Material:</strong> High-density greyboard (1200gsm - 1800gsm) for maximum rigidity.</li>
              <li><strong>Wrapping Paper:</strong> Premium art paper, speciality textured papers, or eco-friendly kraft liners.</li>
              <li><strong>Magnet Strength:</strong> Neodymium industrial-strength magnets for a secure, high-end closure feel.</li>
              <li><strong>Premium Finishes:</strong> Anti-scratch matte lamination, soft-touch "velvet" coating, spot UV, or traditional hot-foil stamping (Gold, Silver, Rose Gold).</li>
              <li><strong>Inserts:</strong> Custom-moulded EVA foam, satin lining, velvet-flocked plastic trays, or sustainable die-cut cardboard inserts.</li>
            </ul>
          </section>

          <section className="mb-20">
            <h2 className="text-3xl font-black text-gray-900 uppercase tracking-tight mb-6">Our 5-Step Manufacturing Process in Dongguan</h2>
            <p>
              Quality is never an accident; it is the result of high intention and sincere effort. Our factory in Dongguan, China, follows a rigorous 5-step process to ensure every magnetic box is a masterpiece.
            </p>
            <div className="space-y-8 mt-8">
              <div className="flex gap-6">
                <span className="font-black text-4xl text-blue-200">01</span>
                <div>
                  <h4 className="font-black text-lg uppercase">Structural Design & Prototyping</h4>
                  <p className="text-base">We create white samples in 3-5 days to test the fit and magnet strength before full-scale production begins.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <span className="font-black text-4xl text-blue-200">02</span>
                <div>
                  <h4 className="font-black text-lg uppercase">Precision Printing & Finishing</h4>
                  <p className="text-base">Utilising state-of-the-art Heidelberg offset presses to achieve pixel-perfect colour accuracy and premium tactile finishes.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <span className="font-black text-4xl text-blue-200">03</span>
                <div>
                  <h4 className="font-black text-lg uppercase">Automated Die-Cutting & Magnet Insertion</h4>
                  <p className="text-base">Our automated lines precisely rout the greyboard to house the magnets, ensuring they remain hidden and perfectly aligned.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <span className="font-black text-4xl text-blue-200">04</span>
                <div>
                  <h4 className="font-black text-lg uppercase">Skilled Hand-Assembly</h4>
                  <p className="text-base">Luxury rigid boxes require a human touch. Our skilled artisans wrap and glue each box by hand to eliminate bubbles and imperfections.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <span className="font-black text-4xl text-blue-200">05</span>
                <div>
                  <h4 className="font-black text-lg uppercase">3-Stage Quality Inspection</h4>
                  <p className="text-base">Every single box is inspected for magnet strength, alignment, and surface cleanliness before final packing.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-20 py-12 border-y border-gray-100">
            <h2 className="text-3xl font-black text-gray-900 uppercase tracking-tight mb-6">Sustainability: FSC Certified Packaging</h2>
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="flex-1">
                <p>
                  The luxury of tomorrow is sustainable. Side Packaging is proud to be an <strong>FSC-certified packaging manufacturer</strong>. We source all our paper and board from responsibly managed forests that provide environmental, social, and economic benefits.
                </p>
                <p>
                  Beyond FSC certification, we offer soy-based inks and plastic-free finishes, allowing your brand to provide a luxury experience without compromising on environmental values. Our <strong>Low MOQ of 100pcs</strong> also helps reduce waste for small-batch artisanal collections.
                </p>
              </div>
              <div className="shrink-0 bg-gray-50 p-6 rounded-3xl border border-gray-100">
                <img 
                  src="https://sc01.alicdn.com/kf/Aa33381bfa06d472cad56bc460860626eF.png" 
                  alt="Side Packaging FSC BSCI ISO Certifications" 
                  className="w-full max-w-[280px] h-auto"
                />
              </div>
            </div>
          </section>

          <section className="mb-20">
            <h2 className="text-3xl font-black text-gray-900 uppercase tracking-tight mb-6">B2B Case Studies</h2>
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div className="bg-gray-50 p-8 rounded-3xl">
                <h4 className="font-black uppercase mb-4 text-blue-600">Luxury Beauty</h4>
                <p className="text-sm">Developed a custom magnetic folding box for a premium UK skincare brand, resulting in a 30% increase in social media unboxing mentions.</p>
              </div>
              <div className="bg-gray-50 p-8 rounded-3xl">
                <h4 className="font-black uppercase mb-4 text-blue-600">Jewellery Retail</h4>
                <p className="text-sm">Designed a compact, high-density rigid magnetic box for a New York jewellery boutique, featuring custom-flocked EVA inserts.</p>
              </div>
            </div>
          </section>

          <section className="mb-24">
            <h2 className="text-3xl font-black text-gray-900 uppercase tracking-tight mb-12">Frequently Asked Questions</h2>
            <div className="space-y-8">
              <div>
                <h4 className="font-black uppercase text-sm mb-2">What is the Minimum Order Quantity (MOQ)?</h4>
                <p className="text-base">Our standard MOQ for custom magnetic gift boxes is <strong>100 pieces</strong>. This allows boutique brands to access factory-direct luxury packaging.</p>
              </div>
              <div>
                <h4 className="font-black uppercase text-sm mb-2">What is the lead time for production?</h4>
                <p className="text-base">Sample production takes 3-5 working days. Mass production typically takes 12-15 days depending on the complexity of the finish.</p>
              </div>
              <div>
                <h4 className="font-black uppercase text-sm mb-2">Can you ship worldwide?</h4>
                <p className="text-base">Yes, we provide global DDP (Delivered Duty Paid) shipping to the USA, UK, Europe, Australia, and Canada, handling all customs and duties for you.</p>
              </div>
              <div>
                <h4 className="font-black uppercase text-sm mb-2">Do you provide free samples?</h4>
                <p className="text-base">We can provide existing samples for free (you pay shipping). Custom prototypes with your artwork require a small sampling fee which is refundable on bulk orders.</p>
              </div>
              <div>
                <h4 className="font-black uppercase text-sm mb-2">Is your packaging eco-friendly?</h4>
                <p className="text-base">Absolutely. We are an FSC-certified factory and offer 100% recyclable greyboard and soy-based printing inks.</p>
              </div>
            </div>
          </section>

          {/* Pricing Calculator Section */}
          <section id="quote" className="mb-24 py-24 bg-gray-50 rounded-[4rem] border border-gray-100 overflow-hidden text-center">
             <div className="max-w-4xl mx-auto px-6 mb-16">
                <h2 className="text-4xl md:text-5xl font-black mb-8 uppercase tracking-tighter leading-[0.9]">Configure Your <br/>Magnetic Box.</h2>
                <p className="text-gray-500 font-medium text-lg leading-relaxed">
                  Get an instant estimate for your luxury magnetic boxes. For bespoke high-volume orders (>5000), please request a custom technical quote via WhatsApp.
                </p>
             </div>
             <PriceCalculator variantId="gid://shopify/ProductVariant/magnetic-boxes-placeholder" />
             <p className="text-center text-xs text-gray-300 font-bold uppercase tracking-[0.2em] mt-10">Prices based on CIF/DDP shipping estimates. Final quote may vary.</p>
          </section>
        </div>

        <div className="text-center py-20 bg-blue-600 rounded-[4rem] text-white">
          <h2 className="text-4xl md:text-6xl font-black mb-8 uppercase tracking-tighter">Ready to Start?</h2>
          <p className="text-xl mb-12 font-medium opacity-90 px-6">Get a factory-direct quote or request a sample pack today.</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center px-6">
            <Link href="/#contact">
              <button className="bg-white text-blue-600 px-12 py-6 rounded-full font-black text-lg shadow-2xl hover:bg-gray-100 transition-all">
                GET A QUOTE
              </button>
            </Link>
            <a href="https://wa.me/8613699786538">
              <button className="bg-black text-white px-12 py-6 rounded-full font-black text-lg shadow-2xl hover:bg-gray-900 transition-all">
                CHAT ON WHATSAPP
              </button>
            </a>
          </div>
        </div>
      </main>

      <footer className="bg-gray-900 text-white py-20 px-6 text-center">
        <p className="text-[10px] font-black uppercase tracking-widest text-gray-500">
          &copy; 2026 Side Packaging HK Limited. FSC Certified Manufacturer.
        </p>
      </footer>
    </div>
  );
};

export default ProductPage;
