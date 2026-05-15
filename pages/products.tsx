import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const ProductsPage = () => {
  const products = [
    {
      title: "Luxury Magnetic Gift Box",
      image: "https://sc04.alicdn.com/kf/H28aff4222df5454fbde2704bbee757e90.jpg",
      link: "/products/luxury-magnetic-box"
    },
    {
      title: "Custom Drawer Box",
      image: "https://sc04.alicdn.com/kf/Hdf03eb602caa4dd4bce2e15c8f77cb1aA.jpg",
      link: "/products/custom-drawer-box"
    },
    {
      title: "Premium Mailer Box",
      image: "https://sc04.alicdn.com/kf/H4d0f3440368f42ec86490f55e64be502P.jpg",
      link: "/products/premium-mailer-box"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-blue-100">
      <Head>
        <title>Packaging Catalog | Custom Boxes & Packaging Solutions</title>
        <meta name="description" content="Browse our catalog of luxury magnetic boxes, custom drawer boxes, and premium ecommerce mailers. Custom designs and factory direct pricing." />
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

      <main className="py-24 max-w-7xl mx-auto px-6">
        <h1 className="text-6xl font-black uppercase tracking-tighter mb-16 text-center">Packaging Catalog</h1>
        <div className="grid md:grid-cols-3 gap-12">
          {products.map((p, i) => (
            <div key={i} className="group border border-gray-100 rounded-3xl p-8 hover:shadow-2xl transition-all hover:-translate-y-2 bg-white">
              <div className="aspect-square bg-gray-50 rounded-2xl flex items-center justify-center mb-6 overflow-hidden">
                <img src={p.image} alt={p.title} className="w-1/2 h-1/2 object-contain group-hover:scale-110 transition-transform duration-500" />
              </div>
              <h3 className="text-2xl font-black uppercase mb-8 tracking-tight text-center">{p.title}</h3>
              <div className="flex justify-center">
                <Link href={p.link} className="inline-block bg-black text-white px-10 py-4 rounded-full text-[11px] font-bold uppercase tracking-widest">View Details</Link>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="bg-black text-white py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[11px] font-bold uppercase tracking-widest opacity-50">&copy; 2026 Side Packaging HK Limited. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default ProductsPage;
