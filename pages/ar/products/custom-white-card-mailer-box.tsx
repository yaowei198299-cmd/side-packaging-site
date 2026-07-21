import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import InquiryForm from '../../../components/InquiryForm';
import WhatsAppButton from '../../../components/WhatsAppButton';

const WhiteCardMailerPage = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-gold-500 overflow-x-hidden" dir="rtl">
      <Head>
        <title>氐賳丿賵賯 亘乇賷丿 賲禺氐氐 賲賳 丕賱賵乇賯 丕賱兀亘賷囟 | 鬲睾賱賷賮 賲鬲賲賷夭 賱賱鬲噩丕乇丞 丕賱廿賱賰鬲乇賵賳賷丞 賵丕賱丕卮鬲乇丕賰丕鬲</title>
        <meta name="description" content="氐賳丿賵賯 亘乇賷丿 賲禺氐氐 賲毓 胤亘丕毓丞 卮毓丕乇. 鬲睾賱賷賮 賵乇賯賷 兀亘賷囟 毓丕賱賷 丕賱噩賵丿丞 賱賱鬲噩丕乇丞 丕賱廿賱賰鬲乇賵賳賷丞 賵丕賱丕卮鬲乇丕賰丕鬲 賵丕賱賴丿丕賷丕 賵丕賱鬲噩夭卅丞. 氐丿賷賯 賱賱亘賷卅丞 賵賯丕亘賱 賱廿毓丕丿丞 丕賱鬲丿賵賷乇." />
      </Head>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-[100] bg-black/40 backdrop-blur-2xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/ar" className="text-xl font-black tracking-tighter uppercase italic text-white">Saide Packaging</Link>
          <div className="hidden lg:flex items-center space-x-10 space-x-reverse text-[9px] font-black uppercase tracking-[0.3em] text-gray-400">
            <Link href="/ar/products" className="hover:text-white transition-colors">丕賱賰鬲丕賱賵噩</Link>
            <Link href="/ar/gallery" className="hover:text-white transition-colors">丿乇丕爻丕鬲 丕賱丨丕賱丞</Link>
            <Link href="/ar/about-founder" className="hover:text-white transition-colors">丕賱賲丐爻爻賵賳</Link>
          </div>
          <Link href="/ar/inquiry" className="bg-[#d4af37] text-black px-8 py-2.5 rounded-full text-[9px] font-black uppercase tracking-widest hover:bg-white transition-all shadow-xl">丕丨氐賱 毓賱賶 毓乇囟 爻毓乇</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://sc02.alicdn.com/kf/A6944a60384cf46a89e823d17403dc1e4Z.png" 
            alt="氐賳丿賵賯 亘乇賷丿 賲禺氐氐 賲賳 丕賱賵乇賯 丕賱兀亘賷囟" 
            className="w-full h-full object-cover grayscale brightness-75 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="max-w-3xl text-right">
            <div className="inline-block border border-[#d4af37]/30 bg-black/50 backdrop-blur-md px-4 py-1.5 rounded-full mb-8">
              <span className="text-[10px] font-bold text-[#d4af37] uppercase tracking-[0.2em]">氐丿賷賯 賱賱亘賷卅丞 路 賵乇賯 兀亘賷囟 賲鬲賲賷夭</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-8 italic">
              氐賳丿賵賯 亘乇賷丿 賲賳 <br/>丕賱賵乇賯 丕賱兀亘賷囟 丕賱賮丕禺乇.
            </h1>
            <p className="text-xl text-white/60 mb-12 max-w-xl font-medium tracking-tight uppercase tracking-widest leading-relaxed">
              胤亘丕毓丞 卮毓丕乇 賲禺氐氐. 鬲卮胤賷亘 賮丕禺乇. 賲孬丕賱賷 賱氐賳丕丿賷賯 丕賱丕卮鬲乇丕賰 賵鬲賵氐賷賱 丕賱鬲噩夭卅丞.
            </p>
          </div>
        </div>
      </section>

      {/* Technical Breakdown */}
      <section className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-32 items-start">
             <div>
                <h2 className="text-4xl font-black uppercase tracking-tighter italic mb-10 pb-6 border-b border-white/5">丕賱賲賵丕氐賮丕鬲 丕賱賮賳賷丞.</h2>
                <div className="space-y-12">
                   <div className="grid grid-cols-2 gap-10">
                      <div>
                         <p className="text-[10px] font-black text-[#d4af37] uppercase tracking-widest mb-3">丕賱賲丕丿丞</p>
                         <p className="text-lg font-bold text-white/80">賵乇賯 賲賯賵賶 兀亘賷囟 350-400 噩乇丕賲</p>
                      </div>
                      <div>
                         <p className="text-[10px] font-black text-[#d4af37] uppercase tracking-widest mb-3">丕賱胤亘丕毓丞</p>
                         <p className="text-lg font-bold text-white/80">兀賱賵丕賳 賰丕賲賱丞 CMYK / Pantone</p>
                      </div>
                   </div>
                   <div className="grid grid-cols-2 gap-10">
                      <div>
                         <p className="text-[10px] font-black text-[#d4af37] uppercase tracking-widest mb-3">丕賱鬲卮胤賷亘</p>
                         <p className="text-lg font-bold text-white/80">鬲氐賮賷丨 賲胤賮賷/賱丕賲毓貙 Spot UV</p>
                      </div>
                      <div>
                         <p className="text-[10px] font-black text-[#d4af37] uppercase tracking-widest mb-3">丕賱賲賷夭丞</p>
                         <p className="text-lg font-bold text-white/80">賯丕亘賱 賱廿毓丕丿丞 丕賱鬲丿賵賷乇 100% 賵氐丿賷賯 賱賱亘賷卅丞</p>
                      </div>
                   </div>
                   <div className="grid grid-cols-2 gap-10 border-t border-white/5 pt-10">
                      <div>
                         <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-3">丕賱丨丿 丕賱兀丿賳賶 賱賱胤賱亘</p>
                         <p className="text-lg font-bold text-white/40 italic">500 賵丨丿丞</p>
                      </div>
                      <div>
                         <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-3">賲丿丞 丕賱鬲賳賮賷匕</p>
                         <p className="text-lg font-bold text-white/40 italic">10-12 賷賵賲 毓賲賱</p>
                      </div>
                   </div>
                </div>
             </div>

             <div className="bg-[#0f0f15] p-12 border border-white/5 rounded-sm">
                <h3 className="text-2xl font-black uppercase tracking-tighter italic mb-8">鬲胤亘賷賯丕鬲 丕賱氐賳丕毓丞</h3>
                <ul className="space-y-6 text-sm font-bold uppercase tracking-[0.2em] text-white/60">
                   <li className="flex items-center gap-4 border-r border-[#d4af37] pr-6">禺丿賲丕鬲 氐賳丕丿賷賯 丕賱丕卮鬲乇丕賰</li>
                   <li className="flex items-center gap-4 border-r border-[#d4af37] pr-6">丕賱卮丨賳 賵丕賱禺丿賲丕鬲 丕賱賱賵噩爻鬲賷丞 賱賱鬲噩丕乇丞 丕賱廿賱賰鬲乇賵賳賷丞</li>
                   <li className="flex items-center gap-4 border-r border-[#d4af37] pr-6">鬲睾賱賷賮 丕賱鬲噩夭卅丞 丕賱賮丕禺乇</li>
                   <li className="flex items-center gap-4 border-r border-[#d4af37] pr-6">鬲睾賱賷賮 賴丿丕賷丕 賲禺氐氐</li>
                </ul>
             </div>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section id="quote" className="py-40 bg-black border-t border-white/5">
        <InquiryForm productTitle="氐賳丿賵賯 亘乇賷丿 賲禺氐氐 賲賳 丕賱賵乇賯 丕賱兀亘賷囟" />
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-20 border-t border-white/5 text-center">
        <p className="text-[10px] font-black uppercase tracking-[0.3em] opacity-30 italic">爻丕賷丿 亘丕賰噩賷賳噩 廿鬲卮 賰賷 賱賷賲賷鬲丿. 漏 2026. 賲毓丕賷賷乇 丕賱賮禺丕賲丞 丕賱氐賳丕毓賷丞.</p>
      </footer>

      <WhatsAppButton />
    </div>
  );
};

export default WhiteCardMailerPage;

