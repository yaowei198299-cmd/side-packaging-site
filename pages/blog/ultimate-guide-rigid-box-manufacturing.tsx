import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const RigidBoxManufacturingGuide = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-blue-100">
      <Head>
        <title>The Ultimate Guide to Rigid Box Manufacturing | Side Packaging HK Limited</title>
        <meta name="description" content="A deep dive into the engineering and manufacturing process of luxury rigid boxes. From greyboard selection to precision wrapping." />
      </Head>

      {/* Navigation */}
      <nav className="border-b border-gray-100 sticky top-0 bg-white/95 backdrop-blur-md z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
          <Link href="/" className="font-black text-2xl tracking-tighter italic shrink-0 select-none">SIDE PACKAGING</Link>
          
          <div className="hidden lg:flex items-center space-x-10 text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400">
            <Link href="/" className="hover:text-black transition-colors">Home</Link>
            <Link href="/#products" className="hover:text-black transition-colors">Products</Link>
            <Link href="/#about" className="hover:text-black transition-colors">Why Us</Link>
            <Link href="/#process" className="hover:text-black transition-colors">Process</Link>
            <Link href="/#reviews" className="hover:text-black transition-colors">Reviews</Link>
            <Link href="/#faq" className="hover:text-black transition-colors">FAQ</Link>
            <Link href="/blog" className="text-black border-b-2 border-black py-1">Blog</Link>
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

      <main className="py-24">
        <div className="max-w-3xl mx-auto px-6">
          <Link href="/blog" className="text-blue-600 font-black text-xs uppercase tracking-widest mb-8 block hover:translate-x-[-4px] transition-transform">← Back to Blog</Link>
          
          <article>
            <h1 className="text-5xl md:text-6xl font-black tracking-tight mb-8 leading-[1.1] uppercase italic">The Ultimate Guide to Rigid Box Manufacturing</h1>
            <p className="text-gray-400 font-bold mb-12 uppercase tracking-widest text-xs">Published March 28, 2026 | By Side Packaging Engineering Team</p>

            <div className="aspect-video bg-gray-100 rounded-[2rem] overflow-hidden mb-16 shadow-xl border border-gray-100">
              <img 
                src="https://sc01.alicdn.com/kf/Ac788cba78979424ab2c2ba15b024de295.jpg" 
                alt="Rigid Box Manufacturing Process" 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="prose prose-xl prose-gray max-w-none font-medium leading-relaxed text-gray-600 space-y-12">
              <p>
                Rigid boxes, also known as set-up boxes, are the hallmark of high-end product presentation. Unlike folding cartons, which are shipped flat and assembled by the user, rigid boxes are manufactured in their final 3D form (or collapsible variants) using thick greyboard and premium wrapping paper.
              </p>

              <h2 className="text-3xl font-black text-black tracking-tight uppercase">The core Components</h2>
              <p>
                A luxury rigid box consists of two primary elements:
                1. **The Structural Chipboard**: Usually made from 1.5mm to 3.0mm greyboard, this provides the box's "heft" and strength.
                2. **The Wrap**: A thinner paper (usually 150gsm) that is glued to the greyboard. This is where your branding, textures, and finishes (like foil stamping) live.
              </p>

              <h2 className="text-3xl font-black text-black tracking-tight uppercase">Step 1: Board Scoring and Cutting</h2>
              <p>
                The process begins with precision scoring of the greyboard. At Side Packaging, we use automatic V-grooving machines to create sharp, 90-degree corners, ensuring the box looks crisp and symmetrical.
              </p>

              <h2 className="text-3xl font-black text-black tracking-tight uppercase">Step 2: Corner Taping</h2>
              <p>
                Once the board is scored and folded, the corners are reinforced with heat-sealed stay tape. This creates the basic "tray" or "lid" structure that forms the foundation of the box.
              </p>

              <h2 className="text-3xl font-black text-black tracking-tight uppercase">Step 3: Precision Wrapping</h2>
              <p>
                The printed and finished wrap is coated with a thin layer of adhesive and meticulously applied to the board structure. For high-volume orders, we use automatic wrapping lines; for complex, bespoke designs, our master artisans finish the boxes by hand.
              </p>

              <div className="bg-gray-50 p-10 rounded-[2rem] border border-gray-100 mt-20">
                <h3 className="text-xl font-black mb-6 uppercase tracking-tight">Technical Consultation</h3>
                <p className="text-gray-500 mb-8">Need to understand the technical constraints of your design? Our engineering team provides free structural advice and dieline templates.</p>
                <Link href="/#contact" className="inline-block bg-black text-white px-10 py-4 rounded-full font-black text-sm uppercase tracking-widest hover:bg-gray-800 transition">Request Technical Spec Sheet</Link>
              </div>
            </div>
          </article>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 text-gray-400">
          <div className="col-span-2">
            <div className="font-black text-3xl tracking-tighter mb-6 uppercase text-black">SIDE PACKAGING</div>
            <p className="max-w-sm font-medium leading-relaxed">
              Premium manufacturer of custom magnetic closure gift boxes and luxury rigid packaging solutions. China-based factory direct excellence.
            </p>
          </div>
          <div>
            <h4 className="font-black mb-6 uppercase tracking-widest text-xs">Navigation</h4>
            <ul className="space-y-4 text-sm font-bold">
              <li><Link href="/" className="hover:text-black">Home</Link></li>
              <li><Link href="/#products" className="hover:text-black">Products</Link></li>
              <li><Link href="/blog" className="hover:text-black">Blog</Link></li>
              <li><Link href="/#contact" className="hover:text-black">Request Quote</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-black mb-6 uppercase tracking-widest text-xs">Contact Andy</h4>
            <ul className="space-y-4 text-sm font-bold">
              <li><a href="mailto:andy@saidepackaging.com" className="hover:text-black transition-colors">andy@saidepackaging.com</a></li>
              <li><a href="https://wa.me/8613699786538" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-green-500 transition-colors group">
                WhatsApp Chat
              </a></li>
              <li>Side Packaging HK Limited</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RigidBoxManufacturingGuide;
