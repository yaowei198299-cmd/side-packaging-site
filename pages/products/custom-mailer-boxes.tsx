import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import PriceCalculator from '../../components/PriceCalculator';

const CustomMailerBoxesPage = () => {
  const productData = {
    title: "Custom Mailer Boxes (Shipping & Mailer)",
    subtitle: "Premium Corrugated Solutions for E-commerce & Retail Shipping",
    variantId: "gid://shopify/ProductVariant/mailer-boxes-placeholder",
    imageUrl: "https://sc02.alicdn.com/kf/A3645295ca51c411e8b875eb53436ec490.png",
    features: [
      { title: "FSC Certified", desc: "Responsibly sourced materials ensuring environmental sustainability for your brand." },
      { title: "Factory Direct", desc: "Straight from our China-based manufacturing facility, eliminating middleman costs." },
      { title: "Low MOQ", desc: "Flexible order quantities starting from as low as 100 units to support growing businesses." },
      { title: "Bespoke Branding", desc: "Full-colour printing, spot UV, and foil stamping to make your unboxing experience unique." }
    ]
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <Head>
        <title>{productData.title} | Custom Mailer Boxes China Manufacturer | Side Packaging HK</title>
        <meta name="description" content="Premium custom mailer boxes manufacturer in China. Factory direct pricing, FSC certified materials, and low MOQ for shipping and subscription boxes." />
        <meta name="keywords" content="custom mailer boxes China, mailer box manufacturer, factory direct shipping boxes, FSC certified packaging, low MOQ mailer boxes" />
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
          Home / Custom Packaging / <span className="text-gray-900 font-bold">Mailer Boxes</span>
        </div>

        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tight leading-none">
              Custom Mailer Boxes China Manufacturer
            </h1>
            <p className="text-xl text-gray-500 mb-8 leading-relaxed">
              Elevate your shipping experience with factory-direct custom mailer boxes. Side Packaging HK provides FSC-certified, high-durability corrugated solutions with low MOQ for brands worldwide.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="bg-gray-100 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-gray-600">Factory Direct</span>
              <span className="bg-gray-100 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-gray-600">FSC Certified</span>
              <span className="bg-gray-100 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-gray-600">Low MOQ</span>
            </div>
          </div>
          <div className="relative aspect-square bg-gray-50 rounded-[40px] overflow-hidden shadow-2xl">
            <img 
              src={productData.imageUrl} 
              alt="Custom Mailer Boxes" 
              className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>

        {/* Product Configurator Section */}
        <div className="mb-20">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-black mb-4">Calculate Your Custom Order</h2>
            <p className="text-gray-500">Instant pricing for factory-direct shipping boxes.</p>
          </div>
          <PriceCalculator variantId={productData.variantId} />
        </div>

        {/* Long Content Section (SEO Optimized) */}
        <div className="prose prose-lg max-w-none border-t border-gray-100 pt-20">
          <section className="mb-16">
            <h2 className="text-3xl font-black mb-6 uppercase tracking-tight">Executive Summary: The Future of E-commerce Shipping</h2>
            <p className="text-gray-600 leading-relaxed">
              In the competitive landscape of modern e-commerce, the first physical touchpoint a customer has with your brand is often the shipping box. Our custom mailer boxes are engineered to bridge the gap between structural integrity and brand storytelling. As a leading <strong>custom mailer boxes China manufacturer</strong>, Side Packaging HK specializes in high-quality, factory-direct corrugated solutions that not only protect your products but also enhance your brand's perceived value.
            </p>
            <p className="text-gray-600 leading-relaxed">
              By utilizing FSC-certified materials and cutting-edge printing technology, we enable brands to deliver a premium unboxing experience without the premium price tag. Our factory-direct model ensures that you receive the highest quality standards while maintaining a competitive edge in your market. Whether you're a startup looking for <strong>low MOQ</strong> options or an established enterprise requiring large-scale production, our facility is equipped to meet your specific requirements.
            </p>
          </section>

          <section className="mb-16 grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-black mb-6 uppercase tracking-tight">Technical Specifications</h2>
              <ul className="space-y-4 text-gray-600 list-none p-0">
                <li className="flex justify-between border-b pb-2">
                  <span className="font-bold">Material Options:</span>
                  <span>E-Flute, B-Flute, Kraft, White Corrugated</span>
                </li>
                <li className="flex justify-between border-b pb-2">
                  <span className="font-bold">Paper Weight:</span>
                  <span>120gsm - 450gsm (customizable)</span>
                </li>
                <li className="flex justify-between border-b pb-2">
                  <span className="font-bold">Printing Methods:</span>
                  <span>CMYK Offset, Flexographic, Digital</span>
                </li>
                <li className="flex justify-between border-b pb-2">
                  <span className="font-bold">Finish Options:</span>
                  <span>Matte/Gloss Lamination, Spot UV, Foil</span>
                </li>
                <li className="flex justify-between border-b pb-2">
                  <span className="font-bold">Closure Types:</span>
                  <span>Self-locking, Peel & Seal, Tuck-top</span>
                </li>
                <li className="flex justify-between border-b pb-2">
                  <span className="font-bold">Certifications:</span>
                  <span>FSC, ISO 9001, BSCI Compliance</span>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-black mb-6 uppercase tracking-tight">Factory Process</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-bold text-sm">1</span>
                  <div>
                    <h4 className="font-bold mb-1">Structural Design & Prototyping</h4>
                    <p className="text-sm text-gray-500">Our engineers create custom dielines tailored to your product dimensions to ensure a perfect fit and maximum protection.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-bold text-sm">2</span>
                  <div>
                    <h4 className="font-bold mb-1">Precision Printing</h4>
                    <p className="text-sm text-gray-500">High-resolution offset or flexo printing ensures your brand colours and logos are reproduced with absolute accuracy.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-bold text-sm">3</span>
                  <div>
                    <h4 className="font-bold mb-1">Die-Cutting & Assembly</h4>
                    <p className="text-sm text-gray-500">Automated die-cutting machinery ensures consistent dimensions across millions of units, with manual quality checks at every stage.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-bold text-sm">4</span>
                  <div>
                    <h4 className="font-bold mb-1">Quality Assurance & Global Logistics</h4>
                    <p className="text-sm text-gray-500">Final inspection followed by flat-packed shipping to minimize transport costs and storage space.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-black mb-8 uppercase tracking-tight text-center">Case Studies: Success Stories</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-8 rounded-3xl">
                <h3 className="text-xl font-bold mb-4">Subscription Box Scale-Up</h3>
                <p className="text-gray-600 mb-6 italic">"Side Packaging helped us transition from generic shipping bags to custom mailer boxes, which resulted in a 35% increase in customer unboxing videos shared on social media."</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-600">S</div>
                  <div>
                    <p className="font-bold text-sm">Founder, Sustainable Skincare Brand</p>
                    <p className="text-xs text-gray-400">Monthly Volume: 5,000 units</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 p-8 rounded-3xl">
                <h3 className="text-xl font-bold mb-4">High-End Electronics Protection</h3>
                <p className="text-gray-600 mb-6 italic">"We needed a box that could withstand international transit while maintaining a luxury feel. The B-Flute custom mailers from Side Packaging exceeded our expectations for durability."</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center font-bold text-green-600">E</div>
                  <div>
                    <p className="font-bold text-sm">Operations Manager, Consumer Tech</p>
                    <p className="text-xs text-gray-400">Global Distribution: 10,000+ units/mo</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-black mb-8 uppercase tracking-tight">Frequently Asked Questions (FAQ)</h2>
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
              <div>
                <h4 className="font-bold mb-2">1. What is the MOQ for custom mailer boxes?</h4>
                <p className="text-sm text-gray-500">Our standard low MOQ starts at 100 units, though price efficiency significantly improves at 500+ units due to setup costs.</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">2. Are your materials truly FSC certified?</h4>
                <p className="text-sm text-gray-500">Yes, we provide full traceability for our paper sources and can include the FSC logo on your packaging upon request.</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">3. Can I get a physical sample before production?</h4>
                <p className="text-sm text-gray-500">Absolutely. We offer digital prototypes (free) and physical pre-production samples (chargeable) to ensure complete satisfaction.</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">4. How long does manufacturing take in China?</h4>
                <p className="text-sm text-gray-500">Standard production time is 7-10 working days after artwork approval. Peak seasons may extend this slightly.</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">5. Do you handle international shipping?</h4>
                <p className="text-sm text-gray-500">Yes, we offer DDP (Delivered Duty Paid) shipping to the UK, USA, Europe, and Australia, handling all customs and duties.</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">6. What printing options do you support?</h4>
                <p className="text-sm text-gray-500">We support 1-colour to full-colour (CMYK) printing on both the exterior and interior of the mailer boxes.</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">7. Which corrugated flute is best for my product?</h4>
                <p className="text-sm text-gray-500">E-Flute is ideal for smaller, lighter retail items, while B-Flute offers superior cushioning for heavier electronics or cosmetics.</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">8. Can you help with structural design?</h4>
                <p className="text-sm text-gray-500">Our in-house design team provides free dieline creation and structural consultation based on your product specs.</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">9. Are the inks eco-friendly?</h4>
                <p className="text-sm text-gray-500">We primarily use soy-based or water-based inks that are environmentally friendly and safe for consumer contact.</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">10. How are the boxes shipped to me?</h4>
                <p className="text-sm text-gray-500">All mailer boxes are shipped flat-packed on pallets to minimize shipping costs and maximize storage efficiency in your warehouse.</p>
              </div>
            </div>
          </section>
        </div>

        {/* Marketing / Factory Backing Section */}
        <section className="grid md:grid-cols-2 gap-16 py-20 border-t border-gray-100 mt-20">
          <div>
            <h2 className="text-3xl font-black mb-8 leading-tight uppercase tracking-tight">
              Factory Direct Advantage: <br/>Why Leading Brands Choose Us
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
          
          <div className="bg-black text-white p-12 rounded-[40px] flex flex-col justify-center relative overflow-hidden">
            <blockquote className="text-2xl font-medium italic mb-6 relative z-10">
              "Working directly with the factory in China allowed us to customize every detail of our shipping experience while reducing our unit cost by 40%."
            </blockquote>
            <div className="flex items-center space-x-4 relative z-10">
              <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center font-bold">L</div>
              <div>
                <p className="font-bold">Head of Procurement</p>
                <p className="text-sm text-gray-400">Global Lifestyle Brand, London</p>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 blur-3xl rounded-full -mr-32 -mt-32"></div>
          </div>
        </section>

        {/* Pricing Calculator Section */}
        <section id="quote" className="py-24 bg-gray-50 rounded-[4rem] border border-gray-100 overflow-hidden">
           <div className="max-w-4xl mx-auto px-6 text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black mb-8 uppercase tracking-tighter leading-[0.9]">Configure Your <br/>Mailer Box.</h2>
              <p className="text-gray-500 font-medium text-lg leading-relaxed">
                Get an instant estimate for your custom mailer boxes based on factory-direct pricing. For quantities over 5,000, contact us for a special high-volume rate.
              </p>
           </div>
           <PriceCalculator variantId={productData.variantId} />
           <p className="text-center text-xs text-gray-300 font-bold uppercase tracking-[0.2em] mt-10">Prices based on CIF/DDP shipping estimates. Final quote may vary.</p>
        </section>

        {/* Final CTA */}
        <section className="bg-gray-50 rounded-[40px] p-12 md:p-20 text-center border border-gray-100">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-black mb-6">Ready to Optimize Your Shipping?</h2>
            <p className="text-gray-500 text-lg mb-10 leading-relaxed">
              Join 500+ brands that trust Side Packaging HK for their custom mailer box requirements. 
              Get your factory-direct quote within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/#contact">
                <button className="bg-black text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-800 transition shadow-xl">
                  Get a Custom Quote
                </button>
              </Link>
              <button className="bg-white text-black border border-gray-200 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition">
                Request a Free Sample Kit
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t py-12 px-6 mt-20 text-center text-gray-400 text-[10px] font-bold uppercase tracking-[0.2em]">
        <p>&copy; 2026 Side Packaging HK Limited. All Rights Reserved.</p>
        <div className="mt-4 flex justify-center space-x-8">
          <span>FSC-C123456</span>
          <span>BSCI Certified</span>
          <span>ISO 9001:2015</span>
        </div>
      </footer>
    </div>
  );
};

export default CustomMailerBoxesPage;
