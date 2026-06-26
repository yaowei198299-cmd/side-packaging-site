import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const posts = [
  {
    title: "Beyond FSC: Navigating 2026 Global Plastic-Free Legislation for Multi-Material Packaging Sets",
    slug: "2026-global-plastic-free-legislation-packaging-sets",
    date: "June 26, 2026",
    excerpt: "Stay ahead of 2026 plastic-free laws in EU and NA. Learn how to transition multi-material packaging sets to full compliance."
  },
  {
    title: "Corrugation Flute Comparison: Why F-Flute is the Future of Sustainable Luxury Jewelry Mailers",
    slug: "f-flute-sustainable-luxury-jewelry-mailers",
    date: "June 26, 2026",
    excerpt: "Discover why F-Flute is becoming the standard for luxury jewelry mailers. Compare E-Flute vs F-Flute for dimensional weight."
  },
  {
    title: "The Physics of Hinge Tension: Ensuring a Perfect 180-Degree Reveal for 4x3x1.25\" Magnetic Boxes",
    slug: "the-physics-of-hinge-tension-4x3x1-25-magnetic-boxes",
    date: "June 26, 2026",
    excerpt: "Explore the engineering behind hinge tension in custom magnetic boxes. Learn how to optimize 4x3x1.25 dimensions."
  }
];

export default function BlogIndex() {
  return (
    <div className="bg-white min-h-screen">
      <Head>
        <title>Packaging Insights Blog | Saide Packaging</title>
        <meta name="description" content="Technical guides and industry trends for luxury packaging, sustainability, and logistics optimization." />
      </Head>

      <main className="max-w-7xl mx-auto px-4 py-24">
        <header className="mb-20">
          <h1 className="text-6xl font-black tracking-tighter mb-6">Packaging Insights</h1>
          <p className="text-2xl text-gray-600 max-w-3xl">
            Engineering-led perspectives on luxury manufacturing, sustainable materials, and global supply chain optimization.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {posts.map((post) => (
            <article key={post.slug} className="group border-b border-gray-100 pb-12">
              <p className="text-sm font-bold text-blue-600 mb-4 uppercase tracking-widest">{post.date}</p>
              <h2 className="text-3xl font-black mb-4 leading-tight group-hover:text-blue-600 transition">
                <Link href={`/blog/${post.slug}`}>
                  {post.title}
                </Link>
              </h2>
              <p className="text-gray-600 mb-6 line-clamp-3">
                {post.excerpt}
              </p>
              <Link href={`/blog/${post.slug}`} className="inline-flex items-center font-black text-sm uppercase tracking-tighter">
                Read Full Article
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
