import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import LeadMagnet from '../../components/LeadMagnet';
import InquiryForm from '../../components/InquiryForm';
import WhatsAppButton from '../../components/WhatsAppButton';

const BlogIndex = () => {
  const posts = [
    {
      title: "White Cardboard vs. Kraft Corrugated Mailer Boxes: Premium E-commerce Subscriptions",
      excerpt: "Compare premium white cardboard mailer boxes and natural kraft corrugated shipping boxes. Learn about ink coverage, custom double-sided printing, and shipping durability for 4x3x1.25 sizes.",
      date: "June 11, 2026",
      slug: "white-cardboard-vs-kraft-corrugated-mailer-guide",
      image: "https://sc02.alicdn.com/kf/A3645295ca51c411e8b875eb53436ec490.png"
    },
    {
      title: "Double-Sided Printed Mailer Boxes: Engineering the Ultimate Unboxing Experience",
      excerpt: "Discover how double-sided printed mailer boxes drive customer retention. Learn about E-flute corrugated strength, flexographic vs digital printing, and low MOQ custom mailer solutions.",
      date: "June 10, 2026",
      slug: "double-sided-printed-mailer-boxes-unboxing-guide",
      image: "https://sc01.alicdn.com/kf/A3a4c9b4df52c4178b9387cd98246b8426.png"
    },
    {
      title: "The Science of Custom Jewelry Box Inserts: Foam, Velvet, EVA, & Cardboard Compared",
      excerpt: "A technical guide to custom jewelry box inserts. Compare velvet, high-density EVA foam, PU leather, and eco-friendly cardboard to protect and present high-end jewelry.",
      date: "June 10, 2026",
      slug: "custom-jewelry-box-inserts-materials-guide",
      image: "https://sc04.alicdn.com/kf/H227b0954e2ad4bf0ba3f0fddc502a3faY.jpg"
    },
    {
      title: "Sourcing Luxury Kraft Paper Shopping Bags: Premium Ribbon Handles & Zero Plastic Compliance",
      excerpt: "Discover how to source luxury FSC-certified kraft paper shopping bags with premium ribbon handles. Learn about paper weight (gsm) resistance, eco-compliance, and low MOQ wholesale solutions.",
      date: "June 10, 2026",
      slug: "luxury-kraft-paper-bags-ribbon-handles-guide",
      image: "https://sc01.alicdn.com/kf/Ab4aec4b7e81744da97c367f74b3ed6b1K.png"
    },
    {
      title: "Rigidity vs. Weight: 1200gsm vs 1500gsm Board Optimization for 4x3x1.25\" Luxury Boxes",
      excerpt: "Discover how to optimize custom rigid box thickness. Compare 1200gsm and 1500gsm board weight & strength formulas to save 18% on B2B air shipping for 4x3x1.25 jewelry boxes.",
      date: "June 10, 2026",
      slug: "board-thickness-cost-optimization-guide",
      image: "https://sc04.alicdn.com/kf/H227b0954e2ad4bf0ba3f0fddc502a3faY.jpg"
    },
    {
      title: "Save 87% Shipping Volume: The Complete Collapsible Magnetic Box Sourcing Guide",
      excerpt: "Learn how collapsible rigid magnetic boxes save up to 87.5% in ocean and air freight shipping volume. Get a standard 4x3x1.25 foldable rigid box dieline blueprint in PDF/AI.",
      date: "June 10, 2026",
      slug: "collapsible-box-shipping-cost-reduction-guide",
      image: "https://sc04.alicdn.com/kf/Hbebfc26f6fe74be2a241b3b45b5a69d3g.jpg"
    },
    {
      title: "UK PPT & EU Eco-Compliance: Sourcing Sustainable Cosmetics Packaging in 2026",
      excerpt: "Master UK Plastic Packaging Tax (PPT) & EU eco-compliance. Learn about soy-based inks, bio-degradable stone paper, and plastic-free cosmetic boxes from FSC certified factories.",
      date: "June 10, 2026",
      slug: "plastic-free-cosmetic-packaging-compliance-guide",
      image: "https://sc04.alicdn.com/kf/Hdf03eb602caa4dd4bce2e15c8f77cb1aA.jpg"
    },
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
    <div className="min-h-screen bg-[#0A0A0F] text-white font-sans selection:bg-[#C9A84C]/30 overflow-x-hidden">
      <Head>
        <title>Packaging Insights & Tech Whitepapers 2026 | Saide Packaging</title>
        <meta name="description" content="Expert technical analysis on luxury packaging trends, sustainable eco-compliance (FSC, PPT), and global structural cost engineering." />
      </Head>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-[100] bg-[#0A0A0F]/40 backdrop-blur-2xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="text-xl font-black tracking-tighter uppercase italic text-white font-montserrat">Saide Packaging</Link>
          <div className="hidden lg:flex items-center space-x-10 text-[9px] font-black uppercase tracking-[0.3em] text-gray-400">
            <Link href="/products" className="hover:text-white transition-colors">Catalog</Link>
            <Link href="/gallery" className="hover:text-white transition-colors">Case Studies</Link>
            <Link href="/about-founder" className="hover:text-white transition-colors">Founders</Link>
          </div>
          <Link href="/inquiry" className="bg-[#C9A84C] text-black px-8 py-2.5 rounded-full text-[9px] font-black uppercase tracking-widest hover:bg-white transition-all shadow-xl font-montserrat">Get a Quote</Link>
        </div>
      </nav>

      <main className="pt-48 pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-24">
            <span className="text-[#C9A84C] text-xs font-black uppercase tracking-[0.5em] mb-6 block">The Knowledge Hub</span>
            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] mb-8 font-montserrat">
              Packaging <br/>
              <span className="text-white/40 italic">Insights.</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl font-medium leading-relaxed uppercase tracking-tight">
              Technical analysis, cost formulas, eco-compliance guides, and CAD blueprints for global luxury brands.
            </p>
          </div>

          <div className="grid gap-16">
            {posts.map((post, i) => (
              <article key={i} className="group relative bg-white/5 border border-white/5 rounded-[3rem] overflow-hidden hover:border-[#C9A84C]/30 transition-all shadow-2xl">
                <Link href={`/blog/${post.slug}`} className="grid md:grid-cols-2">
                  <div className="aspect-video md:aspect-auto overflow-hidden bg-[#1C1C28]">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000"
                    />
                  </div>
                  <div className="p-12 md:p-16 flex flex-col justify-center">
                    <p className="text-[#C9A84C] font-black text-[10px] uppercase tracking-[0.3em] mb-6">{post.date}</p>
                    <h2 className="text-2xl md:text-3xl font-black tracking-tighter mb-8 group-hover:text-[#C9A84C] transition-colors leading-[1.0] uppercase italic font-montserrat">
                      {post.title}
                    </h2>
                    <p className="text-gray-400 font-medium leading-relaxed mb-10 line-clamp-3 text-sm uppercase tracking-wider">
                      {post.excerpt}
                    </p>
                    <span className="text-white font-black text-[10px] uppercase tracking-widest border-b-2 border-white pb-2 self-start group-hover:border-[#C9A84C] group-hover:text-[#C9A84C] transition-all font-montserrat">
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

      <section id="contact" className="py-32 bg-black border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6">
          <InquiryForm lang="en" />
        </div>
      </section>

      <footer className="bg-black text-white py-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-12 text-center">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] opacity-30 italic">Saide Packaging HK Limited. © 2026. Industrial Luxury standards.</p>
        </div>
      </footer>

      <WhatsAppButton />
    </div>
  );
};

export default BlogIndex;
