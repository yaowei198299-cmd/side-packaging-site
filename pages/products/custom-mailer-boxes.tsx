import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import PriceCalculator from '../../components/PriceCalculator';

const CustomMailerBoxesPage = () => {
  const productData = {
    title: "Custom Mailer Boxes (Shipping & Mailer)",
    subtitle: "Premium Corrugated Solutions for E-commerce & Retail Shipping",
    variantId: "gid://shopify/ProductVariant/mailer-boxes-placeholder",
    imageUrl: "/images/products/mailer-hero.png",
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
              alt="Custom Mailer Boxes - Side Packaging HK Factory Direct" 
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
            <h2 className="text-3xl font-black mb-6 uppercase tracking-tight">Premium Custom Mailer Boxes: Elevate Your Brand with Factory-Direct Luxury</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              In today’s competitive e-commerce landscape, the moment your product arrives at a customer’s doorstep is more than just a delivery—it is an experience. <strong>Custom mailer boxes</strong> have evolved from simple shipping containers into powerful branding tools that define your identity, protect your products, and communicate your values. At our factory, we specialize in crafting high-end, <strong>factory-direct custom mailer boxes</strong> that combine structural integrity with sophisticated aesthetics, ensuring your brand stands out in the USA, UK, and Canada markets.
            </p>

            <h3 className="text-2xl font-bold mb-4">Introduction: The Unboxing Experience is Your Brand’s First Impression</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              The "unboxing experience" has become a cultural phenomenon, with millions of social media posts dedicated to the anticipation and reveal of a new purchase. For premium brands, the shipping box is the first physical touchpoint a customer has with their product. A generic, flimsy box can diminish the perceived value of even the most high-quality item. Conversely, a <strong>luxury custom mailer box</strong>—with its sturdy feel, sharp edges, and vibrant branding—signals quality and attention to detail from the very start.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our mission is to provide businesses with more than just packaging; we provide a canvas for your brand story. By focusing on a "Factory-Direct Luxury" model, we eliminate middlemen and pass the savings and quality control directly to you. Whether you are a boutique startup in London, a tech giant in Silicon Valley, or an artisan producer in Toronto, our <strong>wholesale custom mailer boxes</strong> are designed to meet the highest standards of the global market.
            </p>

            <h3 className="text-2xl font-bold mb-4">Why Custom Mailer Boxes are Essential for Modern E-commerce</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              The shift toward online shopping has made packaging the most visible part of a brand's marketing strategy. <strong>Custom shipping boxes with logo</strong> serve several critical functions in the modern marketplace:
            </p>
            <ul className="list-decimal pl-6 mb-6 text-gray-600 space-y-2">
              <li><strong>Brand Recognition:</strong> Your packaging should be instantly recognizable. A consistent color palette and logo placement reinforce your brand identity every time a package is seen.</li>
              <li><strong>Customer Loyalty:</strong> High-quality packaging creates a sense of exclusivity and care, encouraging repeat purchases and organic social media sharing.</li>
              <li><strong>Product Protection:</strong> Beyond looks, a box must perform. Our mailers are engineered to withstand the rigors of international shipping, reducing returns and increasing customer satisfaction.</li>
              <li><strong>Sustainability Messaging:</strong> Today’s consumers are increasingly eco-conscious. Using <strong>sustainable packaging</strong> is no longer optional; it is a prerequisite for brand trust.</li>
            </ul>

            <h3 className="text-2xl font-bold mb-4">Sustainability at the Core: FSC Certified & Eco-Conscious Packaging Solutions</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              As global awareness of environmental issues grows, the demand for <strong>eco-friendly mailer boxes</strong> has reached an all-time high. We are proud to be a leader in sustainable manufacturing, offering <strong>FSC certified packaging</strong> that ensures your boxes are sourced from responsibly managed forests.
            </p>
            <h4 className="text-xl font-bold mb-3">The Importance of FSC Certification</h4>
            <p className="text-gray-600 leading-relaxed mb-6">
              The Forest Stewardship Council (FSC) is the gold standard in forest management. When you choose our FSC-certified materials, you are telling your customers that your brand supports biodiversity, water quality, and the rights of indigenous peoples and workers. This certification is a powerful marketing tool in the USA, UK, and Canada, where consumers look for the FSC "checkmark" as a sign of environmental responsibility.
            </p>
            <h4 className="text-xl font-bold mb-3">Biodegradability and Recyclability</h4>
            <p className="text-gray-600 leading-relaxed mb-6">
              All our <strong>custom mailer boxes</strong> are 100% recyclable and biodegradable. We use soy-based inks and water-based coatings that do not interfere with the recycling process. By choosing materials that can be easily repurposed or returned to the earth, you minimize your brand’s carbon footprint and appeal to the growing demographic of environmentally aware shoppers.
            </p>
            <h4 className="text-xl font-bold mb-3">Reducing Excess Waste</h4>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our "Factory-Direct" model allows for precise custom sizing. We help you design a box that fits your product perfectly, eliminating the need for excessive "void fill" materials like plastic bubble wrap or foam peanuts. This not only reduces waste but also lowers your shipping costs by reducing the dimensional weight of your packages.
            </p>

            <h3 className="text-2xl font-bold mb-4">Engineering for Resilience: The Durability of High-Grade Corrugated Mailers</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              A beautiful box is useless if it arrives crushed or torn. Our <strong>custom mailer boxes</strong> are constructed from high-quality corrugated cardboard, known for its exceptional strength-to-weight ratio.
            </p>
            <h4 className="text-xl font-bold mb-3">Corrugated Strength Levels</h4>
            <p className="text-gray-600 leading-relaxed mb-6">
              We offer a variety of "flute" sizes—the wavy layer between the linerboards—to suit different product weights. For most mailers, we use "E-flute" or "B-flute," which provides a smooth surface for high-resolution printing while offering excellent crush resistance. For heavier items or international shipping between the UK and USA, we can provide reinforced walls and double-tuck closures to ensure maximum security.
            </p>
            <h4 className="text-xl font-bold mb-3">Dust-Flaps and Secure Closures</h4>
            <p className="text-gray-600 leading-relaxed mb-6">
              The design of our mailers includes specialized features such as dust-flaps that prevent debris from entering the box and "ear-lock" closures that stay securely fastened without the need for excessive tape. This clean look is a hallmark of <strong>luxury subscription boxes</strong> and high-end retail packaging.
            </p>

            <h3 className="text-2xl font-bold mb-4">Branding and Personalization: Beyond Just a Logo</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Branding is an art, and our printing capabilities allow you to execute that art with flawless precision. We offer several advanced techniques to bring your vision to life:
            </p>
            <h4 className="text-xl font-bold mb-3">High-Definition Offset Printing</h4>
            <p className="text-gray-600 leading-relaxed mb-6">
              For the most vibrant colors and sharpest details, offset printing is the industry standard. It is ideal for complex designs and large wholesale orders, ensuring consistency across every box in your shipment.
            </p>
            <h4 className="text-xl font-bold mb-3">Digital Printing for Versatility</h4>
            <p className="text-gray-600 leading-relaxed mb-6">
              For smaller runs or seasonal promotions, digital printing offers incredible flexibility with no plate costs. This allows you to test different designs or run limited-edition campaigns for your <strong>custom mailer boxes in Canada</strong> or the UK.
            </p>
            <h4 className="text-xl font-bold mb-3">The "Soft-Touch" Revolution</h4>
            <p className="text-gray-600 leading-relaxed mb-6">
              One of the top trends for 2026 is the use of specialized coatings. Our "Soft-Touch" matte finish provides a velvety, luxurious texture that customers can’t help but notice. Combined with <strong>Spot UV</strong> (a glossy coating applied only to specific areas like your logo), it creates a stunning contrast that screams "Factory-Direct Luxury."
            </p>
            <h4 className="text-xl font-bold mb-3">Interior Printing: The Hidden Surprise</h4>
            <p className="text-gray-600 leading-relaxed mb-6">
              Don’t ignore the inside of your box! Printing a pattern, a thank-you note, or your brand story on the interior walls of your mailer is a powerful way to delight your customers at the moment of reveal. It turns a simple box into a piece of brand storytelling.
            </p>

            <h3 className="text-2xl font-bold mb-4">The Advantage of Factory-Direct Partnerships: Quality, Speed, and Savings</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Choosing a factory-direct partner like us means you are working with the source. This relationship offers several distinct advantages:
            </p>
            <ul className="list-decimal pl-6 mb-6 text-gray-600 space-y-2">
              <li><strong>Lower Costs:</strong> By cutting out distributors and brokers, we offer the most competitive pricing for <strong>wholesale custom boxes</strong>.</li>
              <li><strong>Quality Assurance:</strong> We oversee every step of the production process, from material sourcing to final quality checks. This ensures that the box you receive matches the sample you approved.</li>
              <li><strong>Faster Turnaround:</strong> Direct communication with the production team means fewer delays. We understand the fast-paced nature of e-commerce in the USA and UK markets and strive to meet your deadlines.</li>
              <li><strong>Prototyping:</strong> We offer rapid prototyping services so you can hold a physical sample of your design before committing to a full production run.</li>
            </ul>

            <h3 className="text-2xl font-bold mb-4">Industry Applications: From Subscription Boxes to High-End Tech</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our clients span a wide range of industries, each with unique packaging needs:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
              <li><strong>Beauty and Cosmetics:</strong> High-gloss finishes and interior printing are favorites for makeup and skincare brands.</li>
              <li><strong>Electronics:</strong> Anti-static coatings and heavy-duty corrugated walls protect sensitive technology.</li>
              <li><strong>Fashion and Apparel:</strong> Larger, lightweight mailers with "Soft-Touch" finishes provide a premium feel for high-end clothing brands.</li>
              <li><strong>Subscription Services:</strong> Durability is key for boxes that are shipped on a monthly basis. Our mailers are designed to arrive looking fresh every time.</li>
            </ul>

            <h3 className="text-2xl font-bold mb-4">Global Reach: Shipping to the USA, UK, and Canada with Localized Service</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              We understand the logistical challenges of operating a global brand. That’s why we have optimized our supply chain to serve the major markets of the <strong>USA, UK, and Canada</strong> with efficiency and care.
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
              <li><strong>In the USA:</strong> We cater to the massive e-commerce market with fast shipping to major hubs and a focus on <strong>sustainable packaging USA</strong> trends.</li>
              <li><strong>In the UK:</strong> We emphasize <strong>FSC certified packaging UK</strong> standards and designs that fit through standard letterboxes where possible.</li>
              <li><strong>In Canada:</strong> We provide robust, weather-resistant packaging that can handle the diverse Canadian climate, from the humidity of Vancouver to the winters of Montreal.</li>
            </ul>

            <h3 className="text-2xl font-bold mb-4">Conclusion: Partner with a Leader in Custom Packaging</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Your packaging is the silent ambassador of your brand. By choosing our <strong>premium custom mailer boxes</strong>, you are investing in quality, sustainability, and a superior customer experience. Our factory-direct model ensures that you receive the best possible value without sacrificing the luxury feel your products deserve.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-black mb-8 uppercase tracking-tight">Frequently Asked Questions (FAQ)</h2>
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
              <div>
                <h4 className="font-bold mb-2">Are these mailers suitable for international shipping?</h4>
                <p className="text-sm text-gray-500">Yes, our E-flute and B-flute corrugated mailers are engineered for high crush resistance, ensuring your products remain safe during long-distance global transit.</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">What is the MOQ for custom mailers?</h4>
                <p className="text-sm text-gray-500">We support businesses of all sizes with flexible MOQs starting at just 100 units for custom-printed corrugated mailers.</p>
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
