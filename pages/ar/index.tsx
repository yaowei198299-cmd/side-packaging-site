import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import InquiryForm from '../../components/InquiryForm';
import WhatsAppButton from '../../components/WhatsAppButton';
import Footer from '../../components/Footer';

const HomePageAr = () => {
  const group1 = "https://sc01.alicdn.com/kf/A3a4c9b4df52c4178b9387cd98246b8426.png";
  const group2 = "https://sc01.alicdn.com/kf/Ab4aec4b7e81744da97c367f74b3ed6b1K.png";

  const categories = [
    { title: "丨賯丕卅亘 丕賱賷丿", label: "丨賯丕卅亘 丕賱賷丿", image: group1, x: "0%", link: "/products" },
    { title: "氐賳丕丿賷賯 賵乇賯賷丞", label: "氐賳丕丿賷賯 賵乇賯賷丞", image: group1, x: "33.33%", link: "/products" },
    { title: "賲賱氐賯丕鬲 丕賱毓賱丕賲丕鬲", label: "賲賱氐賯丕鬲 丕賱毓賱丕賲丕鬲", image: group1, x: "66.66%", link: "/products" },
    { title: "賲賳丕丿賷賱 賵乇賯賷丞", label: "賲賳丕丿賷賱 賵乇賯賷丞", image: group1, x: "100%", link: "/products" },
    { title: "氐賳丕丿賷賯 賮丕禺乇丞", label: "氐賳丕丿賷賯 賮丕禺乇丞", image: group2, x: "0%", link: "/products/magnetic-gift-boxes" },
    { title: "氐賳丕丿賷賯 毓乇囟", label: "氐賳丕丿賷賯 毓乇囟", image: group2, x: "33.33%", link: "/products" },
    { title: "氐賳丕丿賷賯 卮丨賳", label: "氐賳丕丿賷賯 卮丨賳", image: group2, x: "66.66%", link: "/products/custom-mailer-boxes" },
    { title: "亘胤丕賯丕鬲 卮賰乇", label: "亘胤丕賯丕鬲 卮賰乇", image: group2, x: "100%", link: "/products" },
  ];

  const faqs = [
    {
      q: "賲丕 賴賵 丕賱丨丿 丕賱兀丿賳賶 賱賰賲賷丞 丕賱胤賱亘 (MOQ)責",
      a: "賷亘丿兀 丕賱丨丿 丕賱兀丿賳賶 賱賰賲賷丞 丕賱胤賱亘 賱丿賷賳丕 賲賳 500 賵丨丿丞 賱賱氐賳丕丿賷賯 丕賱氐賱亘丞 丕賱賮丕禺乇丞 賵氐賳丕丿賷賯 丕賱賴丿丕賷丕 丕賱賲睾賳丕胤賷爻賷丞. 亘丕賱賳爻亘丞 賱氐賳丕丿賷賯 丕賱卮丨賳 毓亘乇 丕賱亘乇賷丿 丕賱廿賱賰鬲乇賵賳賷貙 賷賲賰賳賳丕 鬲賱亘賷丞 丕賱胤賱亘丕鬲 亘丿亍賸丕 賲賳 100 賵丨丿丞 賱丿毓賲 丕賱毓賱丕賲丕鬲 丕賱鬲噩丕乇賷丞 丕賱賲鬲賳丕賲賷丞."
    },
    {
      q: "賰賷賮 賷賲賰賳賳賷 鬲賯賱賷賱 鬲賰丕賱賷賮 丕賱鬲睾賱賷賮 丕賱禺丕氐丞 亘賷責",
      a: "賳丨賳 賳賯丿賲 鬲丨賱賷賱丕賸 鬲賯賳賷丕賸 賲噩丕賳賷丕賸 賱禺賮囟 丕賱鬲賰丕賱賷賮. 賲賳 禺賱丕賱 鬲丨爻賷賳 賴賷丕賰賱 丕賱氐賳丕丿賷賯貙 賵爻賲丕賰丞 丕賱賲賵丕丿貙 賵鬲氐丕賲賷賲 丕賱鬲毓亘卅丞 丕賱賲爻胤丨丞貙 賳爻丕毓丿 丕賱毓賲賱丕亍 毓丕丿丞賸 毓賱賶 鬲賵賮賷乇 10-30% 賮賷 丕賱廿賳鬲丕噩 賵丕賱卮丨賳."
    },
    {
      q: "賴賱 鬲賯丿賲賵賳 鬲氐賲賷賲丕賸 賲噩丕賳賷丕賸 賵丿毓賲丕賸 賴賷賰賱賷丕賸責",
      a: "賳毓賲貙 賷鬲囟賲賳 賰賱 丕爻鬲賮爻丕乇 丿毓賲丕賸 丕丨鬲乇丕賮賷丕賸 賲噩丕賳賷丕賸 賱賱鬲氐丕賲賷賲 丕賱賴賷賰賱賷丞. 爻賷賯丿賲 賲賴賳丿爻賵賳丕 乇爻賵賲丕鬲 鬲賯賳賷丞 賱囟賲丕賳 賲賱丕亍賲丞 毓賲賱賰 丕賱賮賳賷 鬲賲丕賲丕賸 賯亘賱 丕賱廿賳鬲丕噩 丕賱囟禺賲."
    },
    {
      q: "賴賱 丕賱鬲睾賱賷賮 丕賱禺丕氐 亘賰賲 賲毓鬲賲丿 賲賳 FSC責",
      a: "亘丕賱鬲兀賰賷丿. 賳丨賳 賲氐賳毓 賲毓鬲賲丿 賲賳 FSC貙 賲賲丕 賷囟賲賳 兀賳 噩賲賷毓 丕賱賲賵丕丿 賷鬲賲 丕賱丨氐賵賱 毓賱賷賴丕 賲賳 睾丕亘丕鬲 鬲丿丕乇 亘賲爻丐賵賱賷丞. 賴匕丕 兀賲乇 亘丕賱睾 丕賱兀賴賲賷丞 賱賱毓賱丕賲丕鬲 丕賱鬲噩丕乇賷丞 丕賱鬲賷 鬲丿禺賱 兀爻賵丕賯 丕賱賵賱丕賷丕鬲 丕賱賲鬲丨丿丞 賵丕賱丕鬲丨丕丿 丕賱兀賵乇賵亘賷."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-gold-500 overflow-x-hidden" dir="rtl">
      <Head>
        <title>Saide Packaging | 賲氐賳毓 鬲睾賱賷賮 賮丕禺乇 賲鬲賲賷夭 賮賷 丕賱氐賷賳</title>
        <meta name="description" content="賲氐賳毓 賲亘丕卮乇 賱氐賳丕丿賷賯 丕賱賴丿丕賷丕 丕賱賲睾賳丕胤賷爻賷丞 賵丕賱氐賱亘丞 賵丕賱卮丨賳 賲毓 卮毓丕乇 賲禺氐氐. 丕賱丨丿 丕賱兀丿賳賶 賱賱胤賱亘 賲賳 100 賯胤毓丞. 賳賲賵匕噩 3D 賲噩丕賳賷. 卮丨賳 毓丕賱賲賷." />
      </Head>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-[100] bg-black/40 backdrop-blur-2xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/ar" className="text-xl font-black tracking-tighter uppercase italic text-white font-montserrat">Saide Packaging</Link>
          <div className="hidden lg:flex items-center space-x-reverse space-x-10 text-[9px] font-black uppercase tracking-[0.3em] text-gray-400">
            <Link href="/products" className="hover:text-white transition-colors">丕賱賰鬲丕賱賵噩</Link>
            <Link href="/gallery" className="hover:text-white transition-colors">丿乇丕爻丕鬲 丕賱丨丕賱丞</Link>
            <Link href="/about-founder" className="hover:text-white transition-colors">丕賱賲丐爻爻賵賳</Link>
          </div>
          <a href="#contact" className="bg-[#C9A84C] text-black px-8 py-2.5 rounded-full text-[9px] font-black uppercase tracking-widest hover:bg-white transition-all shadow-xl font-montserrat">丕丨氐賱 毓賱賶 爻毓乇 賲噩丕賳賷</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20 bg-[#0A0A0F]">
        <div className="absolute top-0 bottom-0 left-0 z-0 flex justify-start items-center w-full lg:w-[55%] h-full">
          <img 
            src="https://sc01.alicdn.com/kf/A50266d485601490f977db118833d7fb4a.png" 
            alt="Luxury Packaging Collage" 
            className="h-auto w-full max-h-[85%] object-contain object-left pl-6 lg:pl-20 animate-in fade-in zoom-in-95 duration-1000"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center text-right">
          <div className="animate-in fade-in slide-in-from-right-10 duration-1000">
            <div className="inline-block border border-[#C9A84C]/30 bg-black/50 backdrop-blur-md px-4 py-1.5 rounded-full mb-8">
              <span className="text-[10px] font-bold text-[#C9A84C] uppercase tracking-[0.2em] flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#C9A84C] rounded-full animate-pulse" />
                賲氐賳毓 賲鬲賲賷夭 賱氐賳丕丿賷賯 丕賱賴丿丕賷丕 賮賷 丕賱氐賷賳 路 鬲兀爻爻 毓丕賲 2006
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] mb-8 italic font-montserrat">
              鬲睾賱賷賮 賴丿丕賷丕 <br/>
              <span className="text-white">賮丕禺乇 賲禺氐氐</span> <br/>
              賲亘丕卮乇 賲賳 丕賱賲氐賳毓 <br/>
              賮賷 丕賱氐賷賳
            </h1>

            <p className="text-lg md:text-xl text-white/60 mb-8 max-w-xl font-medium tracking-tight">
              賲氐賳毓 賲亘丕卮乇 賱氐賳丕丿賷賯 丕賱賴丿丕賷丕 丕賱賲睾賳丕胤賷爻賷丞 賵丕賱氐賱亘丞 賵丕賱卮丨賳 賲毓 卮毓丕乇 賲禺氐氐
            </p>

            <p className="text-sm font-black text-[#C9A84C] uppercase tracking-[0.2em] mb-10">
              丕賱丨丿 丕賱兀丿賳賶 賱賱胤賱亘 賲賳 100 賯胤毓丞 鈥?賳賲賵匕噩 3D 賲噩丕賳賷 鈥?卮丨賳 毓丕賱賲賷
            </p>

            <div className="flex flex-wrap gap-3 mb-12 justify-end">
              {[
                "MOQ: 100 賯胤毓丞",
                "賲丿丞 丕賱鬲爻賱賷賲: 15 賷賵賲丕賸",
                "丕賱卮丨賳 賱賭 50+ 丿賵賱丞",
                "禺丿賲丞 鬲氐賲賷賲 賲噩丕賳賷丞"
              ].map((pill, i) => (
                <span key={i} className="px-5 py-2.5 bg-white/5 border border-white/10 rounded-full text-[10px] font-black uppercase tracking-widest text-white/80">
                  {pill}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-end">
               <a href="/inquiry" className="inline-block bg-[#C9A84C] text-black px-12 py-5 rounded-full font-black uppercase tracking-widest text-sm hover:scale-105 transition-all shadow-[0_0_30px_rgba(212,175,55,0.3)] font-montserrat">
                 丕丨氐賱 毓賱賶 兀爻毓丕乇 丕賱賲氐賳毓 (賵賮乇 30-50%)
               </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar (Authority Signals) */}
      <div className="bg-white/5 border-y border-white/5 py-12 relative z-20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {[
            { label: "20+ 毓丕賲丕賸", sub: "禺亘賷乇 廿賳鬲丕噩" },
            { label: "20,000 賲虏", sub: "賲乇賮賯 丕賱賲氐賳毓" },
            { label: "FSC & BSCI", sub: "賲毓丕賷賷乇 毓丕賱賲賷丞" },
            { label: "50+ 丿賵賱丞", sub: "禺丿賲丕鬲 賱賵噩爻鬲賷丞 毓丕賱賲賷丞" }
          ].map((item, i) => (
            <div key={i} className="space-y-2">
              <p className="text-2xl md:text-3xl font-black italic uppercase tracking-tighter text-[#C9A84C]">{item.label}</p>
              <p className="text-[9px] font-black uppercase tracking-[0.3em] text-white/40">{item.sub}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Category Grid */}
      <section className="py-32 bg-black border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6">
          <header className="mb-20 text-center">
             <span className="text-[#C9A84C] text-[10px] font-black uppercase tracking-[0.5em] mb-4 block">賮卅丕鬲 丕賱賲賳鬲噩丕鬲</span>
             <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter italic font-montserrat">賲氐賲賲丞 賱賱賮禺丕賲丞.</h2>
          </header>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-20">
            {categories.map((cat, i) => (
              <Link key={i} href={cat.link} className="group block text-center">
                <div className="aspect-square bg-white rounded-[2rem] overflow-hidden mb-6 flex items-center justify-center p-12 group-hover:scale-105 transition-all duration-500 shadow-2xl">
                  <div 
                    className="w-full h-full"
                    style={{
                      backgroundImage: `url(${cat.image})`,
                      backgroundSize: '400% 100%',
                      backgroundPosition: `${cat.x} center`,
                      backgroundRepeat: 'no-repeat'
                    }}
                  />
                </div>
                <div className="space-y-1">
                  <p className="text-white text-base font-medium">{cat.label}</p>
                  <h3 className="text-xl md:text-2xl font-black italic uppercase tracking-tighter text-white group-hover:text-[#C9A84C] transition-colors font-montserrat">
                    {cat.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Expert Q&A Section */}
      <section className="py-40 bg-black border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <header className="mb-20 text-center">
            <span className="text-[#C9A84C] text-[10px] font-black uppercase tracking-[0.5em] mb-4 block">丕賱兀爻卅賱丞 丕賱卮丕卅毓丞 賱賱禺亘乇丕亍</span>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter italic font-montserrat">匕賰丕亍 丕賱鬲睾賱賷賮.</h2>
          </header>

          <div className="space-y-12">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-white/5 pb-12 group text-right">
                <h3 className="text-xl font-black text-white uppercase tracking-tighter italic mb-4 group-hover:text-[#C9A84C] transition-colors font-montserrat">爻: {faq.q}</h3>
                <p className="text-gray-400 font-medium leading-relaxed uppercase tracking-wide text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form Section */}
      <section id="contact" className="py-24 bg-[#0A0A0F] border-t border-white/5 text-right">
        <div className="max-w-6xl mx-auto px-6">
          <InquiryForm lang="ar" />
        </div>
      </section>

      <Footer />

      <WhatsAppButton />
    </div>
  );
};

export default HomePageAr;

