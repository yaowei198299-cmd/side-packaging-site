import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const posts = [
  {
    title: "Carbon Footprint Calculation: A Step-by-Step Guide for B2B Packaging Procurement Teams",
    slug: "carbon-footprint-calculation-b2b-packaging-guide",
    date: "June 30, 2026",
    excerpt: "Empowering procurement teams with the math needed to meet 2026 ESG compliance. Master the calculation of material and transport emissions."
  },
  {
    title: "The Engineering of 'Tactile Trust': Calibrating Soft-Touch vs. Anti-Scratch Lamination for Luxury Unboxing",
    slug: "engineering-tactile-trust-soft-touch-anti-scratch-lamination",
    date: "June 30, 2026",
    excerpt: "Learn how to choose the right finish for your premium boxes. Balancing the velvet feel of soft-touch with the durability of anti-scratch lamination."
  },
  {
    title: "Supply Chain Resilience: How 12H Dieline Turnaround Recovers 30% of Product Launch Delays",
    slug: "supply-chain-resilience-12h-dieline-turnaround",
    date: "June 30, 2026",
    excerpt: "Discover the impact of rapid prototyping and dieline precision on global supply chain efficiency and product launch timelines."
  },
  {
    title: "The 2026 Packaging Engineering Manifesto: Transitioning from 'Box Supplier' to 'Structural ROI Partner'",
    slug: "2026-packaging-engineering-manifesto-structural-roi-partner",
    date: "June 29, 2026",
    excerpt: "A milestone manifesto on the future of packaging. Why brands must shift from buying boxes to partnering with structural ROI engineers."
  },
  {
    title: "Pallet Density Math: Reducing Ocean Freight Surcharges for Bulk Magnetic Box Imports from China",
    slug: "pallet-density-math-ocean-freight-bulk-magnetic-boxes",
    date: "June 29, 2026",
    excerpt: "Master the math of pallet density to reduce ocean freight costs. Technical guide on optimizing bulk magnetic gift box shipping from China."
  },
  {
    title: "The 'Golden Ratio' in Jewelry Packaging: Why 4x3x1.25\" Engineering Maximizes Retail Visual Impact",
    slug: "golden-ratio-jewelry-packaging-4x3x1-25-engineering",
    date: "June 29, 2026",
    excerpt: "Discover why the 4x3x1.25 inch dimension is the engineering 'sweet spot' for jewelry packaging. Learn how precision tolerances maximize retail visual impact."
  },
  {
    title: "The 'Invisible Magnet' Technique: Counter-Sinking Neodymium Closures for 4x3x1.25\" Premium Rigid Boxes",
    slug: "invisible-magnet-technique-4x3x1-25-premium-rigid-boxes",
    date: "June 28, 2026",
    excerpt: "Learn the technical engineering behind invisible magnetic closures for luxury rigid boxes. Optimizing 4x3x1.25 inch packaging with counter-sunk neodymium magnets."
  },
  {
    title: "Transit Impact Analysis: Comparing Flute Compressive Strength for Global DTC Jewelry Logistics",
    slug: "transit-impact-analysis-flute-compressive-strength-jewelry-logistics",
    date: "June 28, 2026",
    excerpt: "Technical comparison of flute types for jewelry mailer boxes. Analyzing compressive strength and transit impact for global DTC logistics optimization."
  },
  {
    title: "Post-Consumer Waste (PCW) Ratios: Calibrating Luxury Textures with 100% Recycled Content for 2026 ESG Compliance",
    slug: "pcw-ratios-luxury-textures-100-recycled-content-esg-compliance",
    date: "June 28, 2026",
    excerpt: "Technical guide on PCW ratios for luxury packaging. Learn how to achieve high-end textures with 100% recycled content for 2026 ESG compliance."
  },
  {
    title: "The Science of 'Snug-Fit' Prototyping: Why 0.1mm Tolerances Prevent Damage for 4x3x1.25\" Jewelry Sets",
    slug: "snug-fit-prototyping-0-1mm-tolerance-jewelry-boxes",
    date: "June 27, 2026",
    excerpt: "Discover why sub-millimeter precision is critical for luxury jewelry packaging. Learn the math behind 4x3x1.25 inch snug-fit designs."
  },
  {
    title: "Collapsible Rigid Box Engineering: Sourcing 90-Degree Sharp Corners for Minimalist Luxury Brands",
    slug: "collapsible-rigid-box-90-degree-sharp-corner-engineering",
    date: "June 27, 2026",
    excerpt: "Achieving sharp 90-degree corners in collapsible rigid boxes requires V-grooving precision. Explore the engineering of minimalist luxury."
  },
  {
    title: "2026 Sustainable Pivot: Sourcing Recycled Fiber-Based Inserts to Replace PE/PU Foams in High-End Packaging",
    slug: "recycled-fiber-inserts-pe-pu-foam-replacement-guide",
    date: "June 27, 2026",
    excerpt: "Transition your high-end packaging to 100% plastic-free solutions. Sourcing recycled fiber inserts for EU compliance."
  },
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
