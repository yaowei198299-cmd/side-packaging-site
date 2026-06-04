import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import LeadMagnet from '../../components/LeadMagnet';
import InquiryForm from '../../components/InquiryForm';

const BlogIndex = () => {
  const posts = [
    {
      title: "Jewelry Box Trends 2026: Luxury Customization & Small MOQ for Boutique Brands",
      excerpt: "Discover the top jewelry box trends for 2026. Learn how custom magnetic boxes and sustainable materials can elevate your jewelry brand identity and unboxing experience.",
      date: "May 6, 2026",
      slug: "jewelry-box-trends-2026-customization",
      image: "https://sc02.alicdn.com/kf/H292333b800b841ab8b8229cd7ee66f5ec.png"
    },
    {
      title: "Luxury Sustainable Cosmetic Packaging Trends 2026: Beauty Without Compromise",
      excerpt: "Explore the intersection of luxury and sustainability in 2026 cosmetic packaging. Learn about recyclable rigid boxes, refillable glass, and plastic-free solutions.",
      date: "May 4, 2026",
      slug: "luxury-sustainable-cosmetic-packaging-trends-2026",
      image: "https://sc02.alicdn.com/kf/A3645295ca51c411e8b875eb53436ec490.png"
    },
    {
      title: "How to Calculate Total Landed Cost for Packaging Imported from China: A 2026 Guide",
      excerpt: "Don't be surprised by hidden costs. Learn the step-by-step formula for calculating the total cost of your packaging from factory to warehouse, including tariffs and freight.",
      date: "May 4, 2026",
      slug: "how-to-calculate-packaging-landed-cost-china-import",
      image: "https://sc02.alicdn.com/kf/Ac788cba78979424ab2c2ba15b024de295.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-gold-500">
      <Head>
        <title>Packaging Insights & Trends 2026 | Side Packaging HK Limited</title>
        <meta name="description" content="Expert analysis on luxury packaging trends, sustainable materials, and global supply chain optimization for 2026." />
      </Head>

      {/* Navbar */}
      <nav className="border-b border-white/10 bg-black/95 backdrop-blur-md sticky top-0 z-[80]">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="text-2xl font-black tracking-tighter uppercase italic text-white hover:text-gray-300 transition-colors">Side Packaging</Link>
          <div className="hidden lg:flex items-center space-x-8 text-[11px] font-bold uppercase tracking-widest text-gray-400">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <Link href="/products" className="hover:text-white transition-colors">Bespoke Products</Link>
            <Link href="/blog" className="text-white border-b-2 border-white pb-1">Insights</Link>
            <a href="#contact" className="hover:text-white transition-colors">Consultation</a>
          </div>
          <a href="#contact" className="bg-white text-black px-8 py-3 rounded-full text-[11px] font-bold uppercase tracking-widest hover:bg-gold-400 transition-all shadow-lg">Quick Quote</a>
        </div>
      </nav>

      <main className="py-32 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-24">
            <span className="text-blue-500 font-black text-xs uppercase tracking-[0.5em] mb-6 block">The Knowledge Hub</span>
            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] mb-8">Packaging <br/><span className="text-white/40 italic">Insights.</span></h1>
            <p className="text-xl text-gray-400 max-w-2xl font-medium">Technical analysis, market trends, and manufacturing guides for the global luxury packaging industry.</p>
          </div>

          <div className="grid gap-16">
            {posts.map((post, i) => (
              <article key={i} className="group relative bg-white/5 border border-white/5 rounded-[3.5rem] overflow-hidden hover:border-white/20 transition-all shadow-2xl">
                <Link href={`/blog/${post.slug}`} className="grid md:grid-cols-2">
                  <div className="aspect-video md:aspect-auto overflow-hidden bg-gray-900">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover  group-hover:-0 group-hover:scale-105 transition-all duration-1000  "
                    />
                  </div>
                  <div className="p-12 md:p-16 flex flex-col justify-center">
                    <p className="text-blue-500 font-black text-[10px] uppercase tracking-[0.3em] mb-6">{post.date}</p>
                    <h2 className="text-3xl md:text-4xl font-black tracking-tighter mb-8 group-hover:text-blue-500 transition-colors leading-[0.9] uppercase italic">
                      {post.title}
                    </h2>
                    <p className="text-gray-400 font-medium leading-relaxed mb-10 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <span className="text-white font-black text-[10px] uppercase tracking-widest border-b-2 border-white pb-2 self-start group-hover:border-blue-500 group-hover:text-blue-500 transition-all">
                      Read Technical Analysis →
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </main>

      <LeadMagnet lang="en" />

      <section id="contact" className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <InquiryForm lang="en" />
        </div>
      </section>

      <footer className="bg-black text-white py-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex flex-col items-center md:items-start gap-4">
             <p className="text-xl font-black tracking-tighter uppercase italic">Side Packaging</p>
             <p className="text-[10px] font-bold uppercase tracking-widest text-gray-600 max-w-xs text-center md:text-left">Premium B2B Jewelry Packaging & Gift Box Solutions for Global Brands.</p>
          </div>
          <p className="text-[10px] font-bold uppercase tracking-widest text-gray-600">&copy; 2026 Side Packaging HK Limited. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default BlogIndex;
