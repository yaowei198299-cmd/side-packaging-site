import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const ProductDetail = () => {
  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-blue-100">
      <Head>
        <title>Custom Drawer Box | Sliding Rigid Packaging | Side Packaging</title>
        <meta name="description" content="Elegant sliding drawer boxes with custom pull-out tabs. Durable rigid packaging for jewelry, cosmetics, and boutique items." />
      </Head>

      {/* Navbar */}
      <nav className="border-b border-gray-100 bg-white/95 backdrop-blur-md sticky top-0 z-[80]">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="text-2xl font-black tracking-tighter uppercase italic">Side Packaging</Link>
          <div className="hidden lg:flex items-center space-x-8 text-[11px] font-bold uppercase tracking-widest text-gray-500">
            <Link href="/" className="hover:text-black transition-colors">Home</Link>
            <Link href="/products" className="text-black border-b-2 border-black pb-1">Products</Link>
            <Link href="/blog" className="hover:text-black transition-colors">Blog</Link>
            <a href="/#contact" className="hover:text-black transition-colors">Contact</a>
          </div>
          <a href="/#contact" className="bg-black text-white px-8 py-3 rounded-full text-[11px] font-bold uppercase tracking-widest hover:bg-gray-800 transition-all">Get Quote</a>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-24 items-center mb-32">
          <div className="aspect-square bg-gray-50 rounded-[40px] flex items-center justify-center p-24 overflow-hidden shadow-inner">
            <img src="https://sc04.alicdn.com/kf/Hdf03eb602caa4dd4bce2e15c8f77cb1aA.jpg" alt="Drawer Box" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
          </div>
          <div>
            <span className="text-blue-600 font-black uppercase tracking-widest text-xs mb-4 inline-block">Rigid Series</span>
            <h1 className="text-6xl font-black uppercase tracking-tighter mb-8 leading-[0.9]">Custom Drawer Box</h1>
            <p className="text-xl text-gray-500 mb-12 font-medium">Elegant sliding drawer packaging solutions. Features a smooth-gliding sleeve and ribbon pull-out tab for a premium unboxing feel.</p>
            
            <div className="grid grid-cols-2 gap-8 mb-12 border-y border-gray-100 py-12">
              <div>
                <h4 className="font-bold uppercase text-[10px] tracking-widest text-gray-400 mb-2">Minimum Order</h4>
                <p className="text-xl font-black uppercase">500 PCS</p>
              </div>
              <div>
                <h4 className="font-bold uppercase text-[10px] tracking-widest text-gray-400 mb-2">Material</h4>
                <p className="text-xl font-black uppercase">1000gsm - 1400gsm Greyboard</p>
              </div>
              <div>
                <h4 className="font-bold uppercase text-[10px] tracking-widest text-gray-400 mb-2">Lead Time</h4>
                <p className="text-xl font-black uppercase">14-18 Days</p>
              </div>
              <div>
                <h4 className="font-bold uppercase text-[10px] tracking-widest text-gray-400 mb-2">Sample Time</h4>
                <p className="text-xl font-black uppercase">5-7 Days</p>
              </div>
            </div>

            <a href="/#contact" className="inline-block bg-black text-white px-12 py-6 rounded-full font-bold uppercase tracking-widest hover:bg-gray-800 transition-all shadow-xl">Request Cost Analysis</a>
          </div>
        </div>

        <section className="mb-32">
          <h2 className="text-4xl font-black uppercase tracking-tighter mb-16 text-center">Structural Options</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {['Ribbon Pull', 'Finger Notch', 'Thumb Hole', 'Custom Insert'].map((f, i) => (
              <div key={i} className="bg-gray-50 rounded-3xl p-12 text-center text-lg font-black uppercase tracking-widest">
                {f}
              </div>
            ))}
          </div>
        </section>

        <section className="bg-black rounded-[50px] p-24 text-center text-white">
          <h2 className="text-5xl font-black uppercase tracking-tighter mb-8">Elevate Your Unboxing</h2>
          <p className="text-xl opacity-80 mb-12 max-w-2xl mx-auto font-medium">Drawer boxes provide a unique opening experience that builds anticipation and brand loyalty.</p>
          <a href="/#contact" className="inline-block bg-white text-black px-12 py-6 rounded-full font-bold uppercase tracking-widest hover:bg-gray-50 transition-all shadow-2xl">Start Your Project</a>
        </section>
      </main>

      <footer className="bg-black text-white py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-[11px] font-bold uppercase tracking-widest opacity-50">&copy; 2026 Side Packaging HK Limited.</p>
        </div>
      </footer>
    </div>
  );
};

export default ProductDetail;
