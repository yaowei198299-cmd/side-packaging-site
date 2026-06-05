import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const AboutFounder = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <Head>
        <title>Meet the Founder | 20 Years in Packaging | Side Packaging</title>
        <meta name="description" content="Learn the story behind Saide Packaging. Why we prioritize cost optimization, reliability, and helping brands avoid expensive packaging mistakes." />
      </Head>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-[100] bg-black/40 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
          <Link href="/" className="text-2xl font-black tracking-tighter uppercase italic text-white">Side Packaging</Link>
          <div className="hidden lg:flex items-center space-x-12 text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <Link href="/about-founder" className="text-white">Founder</Link>
            <Link href="/gallery" className="hover:text-white transition-colors">Case Studies</Link>
            <Link href="/products" className="hover:text-white transition-colors">Catalog</Link>
            <Link href="/blog" className="hover:text-white transition-colors">Insights</Link>
          </div>
          <a href="/#contact" className="bg-white text-black px-10 py-3.5 rounded-full text-[10px] font-black uppercase tracking-widest hover:scale-105 transition-all shadow-2xl">Get Quote</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-48 pb-32 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div>
            <span className="text-blue-500 font-black text-xs uppercase tracking-[0.5em] mb-6 block italic">The Founder's Story</span>
            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] mb-12">
              20 Years in <br/>
              <span className="text-white/40 italic">Packaging.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 font-medium leading-relaxed italic border-l-4 border-blue-600 pl-8 mb-12">
              "I’ve seen too many businesses overpay for packaging, choose the wrong materials, or experience delays that hurt product launches. I'm here to change that."
            </p>
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 bg-blue-600/20 blur-3xl group-hover:bg-blue-600/30 transition-all"></div>
            <img 
              src="https://sc02.alicdn.com/kf/Aad63ce49acc2417dbeb76f0074aba393i.png" 
              alt="Side Packaging Founder" 
              className="relative rounded-[3rem] shadow-2xl border border-white/10  hover:-0 transition-all duration-1000"
            />
          </div>
        </div>
      </section>

      {/* Main Narrative */}
      <section className="py-32 bg-gray-950 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-invert prose-2xl">
            <h2 className="text-4xl font-black uppercase tracking-tight mb-12 text-white">Why I Started Packaging</h2>
            <p className="text-gray-400 mb-10 leading-relaxed">
              I came to Shenzhen more than 20 years ago and started in packaging manufacturing. Back then, the industry was all about "cheaper and faster." But as I worked with thousands of projects — from simple folding cartons to complex luxury rigid gift boxes — I realized that **the most expensive box is not always the best box.**
            </p>
            <p className="text-gray-400 mb-10 leading-relaxed">
              Over the years, I saw too many brands making expensive mistakes. They were overpaying for features they didn't need, or worse, choosing a structural design that looked great on a screen but failed in transit.
            </p>
            
            <h3 className="text-3xl font-black uppercase tracking-tight mt-20 mb-12 text-blue-500 italic">Packaging Should Help Your Brand — Not Become a Problem</h3>
            <p className="text-gray-400 mb-10 leading-relaxed">
              Many brands struggle with unclear pricing, poor printing quality, and suppliers that disappear after the deposit is paid. I built Side Packaging on a simple principle: **Packaging should be reliable and cost-effective.**
            </p>

            <div className="grid md:grid-cols-2 gap-12 my-20">
              <div className="bg-white/5 p-12 rounded-[2.5rem] border border-white/10">
                <p className="text-blue-500 font-black mb-4 tracking-widest">WE DON'T JUST SELL BOXES</p>
                <p className="text-white text-lg leading-relaxed">We help you choose the right materials to optimize costs while improving the unboxing experience.</p>
              </div>
              <div className="bg-white/5 p-12 rounded-[2.5rem] border border-white/10">
                <p className="text-blue-500 font-black mb-4 tracking-widest">NO-NONSENSE PARTNERSHIP</p>
                <p className="text-white text-lg leading-relaxed">We avoid unnecessary upgrades and focus on what actually works for your shipping and retail needs.</p>
              </div>
            </div>

            <p className="text-gray-400 mb-10 leading-relaxed">
              Today, behind our experience is a 20,000 sqm factory in Southern China, equipped with the latest automation and an in-house QC lab. But more importantly, there is a team of experts who care as much about your brand as you do.
            </p>
          </div>

          <div className="mt-32 text-center">
            <h2 className="text-5xl font-black uppercase tracking-tighter mb-12">Need Packaging Advice?</h2>
            <p className="text-xl text-gray-500 mb-16 max-w-2xl mx-auto">
              Even if you only have a rough idea or a sketch, reach out. We'll help you figure out the best solution. No pressure, no complicated process.
            </p>
            <a href="/#contact" className="inline-block bg-white text-black px-20 py-8 rounded-full font-black uppercase tracking-widest hover:scale-105 shadow-2xl transition-all">
              Talk to Our Experts
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-black text-white py-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
          <div className="flex flex-col gap-4">
             <p className="text-xl font-black tracking-tighter uppercase italic">Side Packaging</p>
             <p className="text-[10px] font-bold uppercase tracking-widest text-gray-600">Factory Direct Custom Packaging Solutions.</p>
          </div>
          <div className="flex flex-col items-center md:items-end gap-4">
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-600">&copy; 2026 Saide Packaging HK Limited. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutFounder;
