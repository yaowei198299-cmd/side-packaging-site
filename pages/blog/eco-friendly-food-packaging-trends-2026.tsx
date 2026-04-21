import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const EcoFoodPackagingTrends = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-blue-100">
      <Head>
        <title>2026 Eco-friendly Food Packaging Trends | Side Packaging HK Limited</title>
        <meta name="description" content="Discover the top sustainable food packaging trends for 2026. From biodegradable takeaway boxes to greaseproof FSC-certified paper solutions." />
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
            <h1 className="text-5xl md:text-6xl font-black tracking-tight mb-8 leading-[1.1] uppercase italic">2026 Eco-friendly Food Packaging Trends</h1>
            <p className="text-gray-400 font-bold mb-12 uppercase tracking-widest text-xs">Published April 10, 2026 | By Side Packaging Sustainability Team</p>

            <div className="aspect-video bg-gray-100 rounded-[2rem] overflow-hidden mb-16 shadow-xl border border-gray-100">
              <img 
                src="https://sc02.alicdn.com/kf/A092333b800b841ab8b8229cd7ee66f5ec.png" 
                alt="Eco-friendly Food Packaging" 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="prose prose-xl prose-gray max-w-none font-medium leading-relaxed text-gray-600 space-y-12">
              <p>
                The food industry is undergoing a massive shift towards sustainability. In 2026, "eco-friendly" is no longer a luxury—it's a regulatory requirement in many markets, including the EU and North America. Brands are now looking for packaging that is as safe for the planet as it is for the food inside.
              </p>

              <h2 className="text-3xl font-black text-black tracking-tight uppercase">1. Greaseproof FSC-Certified Paper</h2>
              <p>
                For bakery and takeaway items, greaseproof paper is essential. The trend in 2026 is moving away from PFAS-based coatings towards natural, plant-based barriers that ensure the box remains sturdy and clean without using harmful chemicals.
              </p>

              <h2 className="text-3xl font-black text-black tracking-tight uppercase">2. Biodegradable Window Films</h2>
              <p>
                Consumers love to see their food before they buy. Traditional plastic windows are being replaced by PLA (polylactic acid) or cellulose-based films that are fully compostable, allowing the entire box to be disposed of in organic waste.
              </p>

              <h2 className="text-3xl font-black text-black tracking-tight uppercase">3. Minimalist Ink and Water-Based Coatings</h2>
              <p>
                Heavy printing can interfere with the recycling process. We are seeing a rise in "natural aesthetic" packaging that uses minimal, soy-based inks and water-based protective coatings to maintain high recyclability scores.
              </p>

              <div className="bg-gray-50 p-10 rounded-[2rem] border border-gray-100 mt-20">
                <h3 className="text-xl font-black mb-6 uppercase tracking-tight">Food-Safe Solutions</h3>
                <p className="text-gray-500 mb-8">Side Packaging provides a wide range of food-safe, FSC-certified paper boxes for restaurants, bakeries, and food startups. All our materials meet international safety standards.</p>
                <Link href="/#contact" className="inline-block bg-black text-white px-10 py-4 rounded-full font-black text-sm uppercase tracking-widest hover:bg-gray-800 transition">Get Food Packaging Quote</Link>
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

export default EcoFoodPackagingTrends;
