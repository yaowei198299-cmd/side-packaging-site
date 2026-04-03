import React from 'react';
import Head from 'next/head';
import ThreeBoxViewer from '../../components/ThreeBoxViewer';
import PriceCalculator from '../../components/PriceCalculator';

const CustomMagneticBoxPage = () => {
  // This would typically come from Shopify API in a real app
  const productData = {
    title: "Custom Magnetic Closure Gift Boxes",
    subtitle: "The Gold Standard of Premium Unboxing Experiences",
    variantId: "gid://shopify/ProductVariant/123456789", // Placeholder for actual Shopify Variant ID
    description: "Elevate your brand with our engineering-grade magnetic closure boxes. Designed for luxury retail, electronics, and high-end gifting, these boxes offer a seamless snap-shut experience that customers love.",
    features: [
      { title: "20+ Years Expertise", desc: "Factory-direct quality from a manufacturer with two decades of structural design experience." },
      { title: "Precision Engineering", desc: "Hidden high-strength magnets ensure a perfectly aligned, satisfying closure every time." },
      { title: "Sustainability First", desc: "FSC-certified materials and eco-friendly soy-based inks available for all custom orders." },
      { title: "Global Compliance", desc: "Produced in our BSCI and ISO 9001 certified facility to meet international standards." }
    ]
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <Head>
        <title>{productData.title} | Side Packaging HK</title>
        <meta name="description" content="Custom magnetic closure gift boxes manufacturer. Factory direct pricing, 20 years experience, FSC & BSCI certified." />
      </Head>

      {/* Navigation Placeholder */}
      <nav className="border-b sticky top-0 bg-white z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-black text-xl tracking-tighter">SIDE PACKAGING</div>
          <div className="hidden md:flex space-x-8 text-sm font-medium">
            <a href="#" className="hover:text-blue-600">Products</a>
            <a href="#" className="hover:text-blue-600">Factory</a>
            <a href="#" className="hover:text-blue-600">Sustainability</a>
          </div>
          <button className="bg-black text-white px-5 py-2 rounded-full text-sm font-bold">Request Sample</button>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-12 px-6">
        {/* Breadcrumbs */}
        <div className="text-xs text-gray-400 uppercase tracking-widest mb-8">
          Home / Custom Packaging / <span className="text-gray-900 font-bold">Magnetic Closure Boxes</span>
        </div>

        {/* Product Configurator Section */}
        <div className="mb-20">
          <div className="mb-10">
            <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">{productData.title}</h1>
            <p className="text-xl text-gray-500 max-w-2xl leading-relaxed">{productData.subtitle}</p>
          </div>
          
          <PriceCalculator variantId={productData.variantId} />
        </div>

        {/* Marketing / Factory Backing Section */}
        <section className="grid md:grid-cols-2 gap-16 py-20 border-t border-gray-100">
          <div>
            <h2 className="text-3xl font-black mb-8 leading-tight">
              Why Brands Choose Our <br/>Engineering-Grade Packaging
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {productData.features.map((feature, i) => (
                <div key={i} className="space-y-2">
                  <div className="w-10 h-1 rounded bg-blue-600 mb-4"></div>
                  <h3 className="font-bold text-lg">{feature.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-3xl flex flex-col justify-center">
            <blockquote className="text-2xl font-medium italic text-gray-700 mb-6">
              "The magnetic snap is perfect. Side Packaging didn't just give us a box; they gave us a brand signature."
            </blockquote>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
              <div>
                <p className="font-bold">Director of Operations</p>
                <p className="text-sm text-gray-400">Luxury Watch Brand, Switzerland</p>
              </div>
            </div>
          </div>
        </section>

        {/* Factory Showcase CTA */}
        <section className="bg-black text-white rounded-[40px] p-12 md:p-20 text-center overflow-hidden relative">
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl font-black mb-6">Ready to see your design in person?</h2>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
              Order a custom sample kit including 3 material options and our signature foil finishes. 
              Delivered in 5-7 days globally.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition shadow-xl">
                Order Sample Kit ($50)
              </button>
              <button className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition">
                Book Factory Virtual Tour
              </button>
            </div>
          </div>
          {/* Subtle background element */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 blur-[120px] rounded-full -mr-48 -mt-48"></div>
        </section>
      </main>

      {/* Footer Placeholder */}
      <footer className="bg-gray-50 border-t py-12 px-6 mt-20 text-center text-gray-400 text-sm">
        <p>&copy; 2026 Side Packaging HK Limited. All Rights Reserved.</p>
        <p className="mt-2">FSC-C123456 | BSCI Certified | ISO 9001:2015</p>
      </footer>
    </div>
  );
};

export default CustomMagneticBoxPage;
