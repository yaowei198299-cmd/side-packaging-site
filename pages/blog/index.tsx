import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const BlogIndex = () => {
  const posts = [
    {
      title: "How to Choose the Right Custom Packaging Boxes for Your Business",
      date: "April 4, 2026",
      excerpt: "Selecting the perfect packaging box is crucial for brand identity and product safety. Learn the key factors to consider when choosing between magnetic boxes, mailers, and rigid boxes.",
      slug: "how-to-choose-the-right-custom-packaging-boxes",
      image: "https://sc02.alicdn.com/kf/A092333b800b841ab8b8229cd7ee66f5ec.png"
    },
    {
      title: "The Ultimate Guide to Magnetic Closure Gift Boxes",
      date: "March 28, 2026",
      excerpt: "Discover why magnetic closure boxes are the top choice for luxury brands and how they can enhance your customers' unboxing experience.",
      slug: "ultimate-guide-to-magnetic-closure-gift-boxes",
      image: "https://sc02.alicdn.com/kf/Aa102fe113883456d96481350b3e32950c.png"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-blue-100">
      <Head>
        <title>Blog | Side Packaging HK Limited - Packaging Insights & Guides</title>
        <meta name="description" content="Stay updated with the latest trends in luxury packaging. Read our guides on how to choose the best custom gift boxes, magnetic boxes, and mailers for your brand." />
      </Head>

      {/* Navigation */}
      <nav className="border-b border-gray-100 sticky top-0 bg-white/95 backdrop-blur-md z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
          <Link href="/" className="font-black text-2xl tracking-tighter italic shrink-0 select-none">SIDE PACKAGING</Link>
          
          <div className="hidden lg:flex items-center space-x-10 text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400">
            <Link href="/" className="hover:text-black transition-colors">Home</Link>
            <Link href="/products/custom-magnetic-box" className="hover:text-black transition-colors">Products</Link>
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

      <main className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <header className="mb-16">
            <h1 className="text-5xl md:text-6xl font-black tracking-tighter uppercase mb-6">Packaging Insights</h1>
            <p className="text-xl text-gray-500 font-medium max-w-2xl leading-relaxed">Expert guides and industry trends to help you choose the best custom luxury packaging for your brand.</p>
          </header>

          <div className="grid gap-12">
            {posts.map((post, i) => (
              <article key={i} className="bg-white rounded-[2rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 group">
                <Link href={`/blog/${post.slug}`} className="grid md:grid-cols-2">
                  <div className="relative aspect-[4/3] md:aspect-auto overflow-hidden bg-gray-100">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-10 md:p-12 flex flex-col justify-center">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-600 mb-4">{post.date}</p>
                    <h2 className="text-3xl font-black tracking-tight mb-6 group-hover:text-blue-600 transition-colors leading-tight">
                      {post.title}
                    </h2>
                    <p className="text-gray-500 font-medium leading-relaxed mb-8">
                      {post.excerpt}
                    </p>
                    <span className="text-black font-black text-xs uppercase tracking-widest border-b-2 border-black pb-1 self-start group-hover:border-blue-600 group-hover:text-blue-600 transition-all">
                      Read Full Guide →
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
          <div className="col-span-2">
            <div className="font-black text-3xl tracking-tighter mb-6 uppercase">SIDE PACKAGING</div>
            <p className="text-gray-400 max-w-sm font-medium leading-relaxed">
              Premium manufacturer of custom magnetic closure gift boxes and luxury rigid packaging solutions. China-based factory direct excellence.
            </p>
          </div>
          <div>
            <h4 className="font-black mb-6 uppercase tracking-widest text-xs text-gray-400">Navigation</h4>
            <ul className="space-y-4 text-sm font-bold text-gray-500">
              <li><Link href="/" className="hover:text-black">Home</Link></li>
              <li><Link href="/products/custom-magnetic-box" className="hover:text-black">Products</Link></li>
              <li><Link href="/blog" className="hover:text-black">Blog</Link></li>
              <li><Link href="/#contact" className="hover:text-black">Request Quote</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-black mb-6 uppercase tracking-widest text-xs text-gray-400">Contact Andy</h4>
            <ul className="space-y-4 text-sm font-bold text-gray-500">
              <li><a href="mailto:andy@saidepackaging.com" className="hover:text-black transition-colors">andy@saidepackaging.com</a></li>
              <li><a href="https://wa.me/8613699786538" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-green-500 transition-colors group">
                WhatsApp Chat
              </a></li>
              <li><a href="https://sidehk.m.en.alibaba.com/" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors underline underline-offset-4">Alibaba Official Store</a></li>
              <li>Side Packaging HK Limited</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BlogIndex;
