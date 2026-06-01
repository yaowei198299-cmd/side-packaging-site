import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import InquiryForm from '../../components/InquiryForm';

const HomePageAr = () => {
  const boxStyles = [
    { title: "علبة مغناطيسية صلبة", image: "https://sc04.alicdn.com/kf/H28aff4222df5454fbde2704bbee757e90.jpg?v=1", link: "/products" },
    { title: "علبة درج منزلقة", image: "https://sc04.alicdn.com/kf/Hdf03eb602caa4dd4bce2e15c8f77cb1aA.jpg?v=1", link: "/products" },
    { title: "علبة شحن مخصصة", image: "https://sc04.alicdn.com/kf/H4d0f3440368f42ec86490f55e64be502P.jpg?v=1", link: "/products" },
    { title: "علبة تجميل قابلة للطي", image: "https://images.unsplash.com/photo-1612817288484-6f916006741a?q=80&w=800", link: "/products" },
    { title: "حقيبة ورقية فاخرة", image: "https://sc04.alicdn.com/kf/H689a746594d24194910903328f4d9526n.jpg?v=1", link: "/products" },
    { title: "مجموعة هدايا مخصصة", image: "https://sc04.alicdn.com/kf/Hc9d42403e05342a58b8875eb53436ec4E.jpg?v=1", link: "/products" },
  ];

  const factoryTrust = [
    { label: "تاريخ المصنع", value: "20+ عاماً" },
    { label: "الشهادات", value: "FSC / BSCI / ISO" },
    { label: "القدرة الإنتاجية", value: "50 ألف وحدة/يوم" },
    { label: "التواجد العالمي", value: "50+ دولة" },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-gold-500 overflow-x-hidden" dir="rtl">
      <Head>
        <title>Side Packaging | مصنع تغليف فاخر مباشر | حلول مخصصة</title>
        <meta name="description" content="Side Packaging HK Limited: تصنيع B2B متميز للعلب الصلبة الفاخرة، علب الشحن، وتغليف التجزئة المخصص. مباشر من المصنع منذ عام 2006." />
      </Head>

      {/* Navbar: Ultra-Minimalist High-End */}
      <nav className="fixed top-0 left-0 right-0 z-[100] bg-black/40 backdrop-blur-2xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
          <Link href="/ar" className="text-2xl font-black tracking-tighter uppercase italic text-white">Side Packaging</Link>
          <div className="hidden lg:flex items-center space-x-reverse space-x-12 text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">
            <Link href="/products" className="hover:text-white transition-colors">الكتالوج</Link>
            <Link href="/gallery" className="hover:text-white transition-colors">دراسات الحالة</Link>
            <Link href="/about-founder" className="hover:text-white transition-colors">المؤسسون</Link>
            <Link href="/blog" className="hover:text-white transition-colors">المدونة</Link>
          </div>
          <a href="#contact" className="bg-white text-black px-10 py-3.5 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-gray-200 shadow-xl transition-all">احصل على سعر</a>
        </div>
      </nav>

      {/* Hero: Industrial Luxury Poster Style */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-black z-10" />
        <img 
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2000" 
          alt="Luxury Factory Background" 
          className="absolute inset-0 w-full h-full object-cover grayscale brightness-50 scale-105"
        />
        
        <div className="relative z-20 text-center max-w-5xl px-6">
          <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-2 rounded-full mb-10 backdrop-blur-lg">
            <span className="w-2 h-2 bg-gold-500 rounded-full animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/60">مباشر من المصنع · دليل المشتريات 2026</span>
          </div>
          <h1 className="text-7xl md:text-[10rem] font-black uppercase tracking-tighter leading-[0.85] mb-12 italic text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20">
            فخامة <br/>صناعية.
          </h1>
          <p className="text-xl md:text-2xl text-white/50 mb-16 max-w-2xl mx-auto font-medium leading-relaxed uppercase tracking-widest">
            هندسة تغليف مخصصة للعلامات التجارية العالمية المتميزة.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <Link href="/products" className="bg-white text-black px-14 py-6 rounded-full font-black uppercase tracking-widest hover:scale-105 transition-all shadow-2xl">
              استكشف الكتالوج
            </Link>
            <a href="#contact" className="bg-transparent border border-white/20 text-white px-14 py-6 rounded-full font-black uppercase tracking-widest hover:bg-white/5 transition-all backdrop-blur-md">
              عرض سعر مخصص
            </a>
          </div>
        </div>
      </section>

      {/* Trust Strip: Precision Data */}
      <section className="bg-black py-20 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {factoryTrust.map((stat, i) => (
            <div key={i} className="group">
              <p className="text-[10px] font-black text-gray-600 uppercase tracking-[0.3em] mb-3 group-hover:text-gold-500 transition-colors">{stat.label}</p>
              <p className="text-3xl font-black text-white italic group-hover:scale-110 transition-transform">{stat.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Grid */}
      <section className="py-40 bg-black" id="catalog">
        <div className="max-w-[1600px] mx-auto px-6">
          <header className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-32 border-b border-white/5 pb-20">
            <div className="max-w-2xl text-right">
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-8 italic">الهيكل <br/>والتشطيب.</h2>
              <p className="text-gray-500 font-medium leading-relaxed uppercase tracking-widest text-sm">كل علبة هي تحفة هندسية. اختر قاعدتك الهيكلية لتبدأ التخصيص.</p>
            </div>
            <Link href="/products" className="text-[11px] font-black uppercase tracking-[0.4em] text-white border-b border-gold-500 pb-2 hover:text-gold-500 transition-colors">عرض المواصفات الفنية ←</Link>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {boxStyles.map((box, i) => (
              <Link key={i} href={box.link} className="group relative block aspect-[4/5] overflow-hidden bg-[#0f0f0f] rounded-sm border border-white/5 hover:border-white/10 transition-all">
                <img 
                  src={box.image} 
                  alt={box.title} 
                  className="absolute inset-0 w-full h-full object-cover grayscale opacity-60 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />
                <div className="absolute bottom-10 right-10 left-10 text-right">
                  <div className="w-10 h-[2px] bg-gold-500 mb-6 group-hover:w-full transition-all duration-700 ml-auto" />
                  <h3 className="text-3xl font-black text-white uppercase tracking-tighter italic mb-2">{box.title}</h3>
                  <p className="text-[9px] font-black text-white/40 uppercase tracking-[0.4em]">معتمد من FSC · يتضمن الرسم الفني</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Video Content */}
      <section className="py-40 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-32 items-center">
          <div className="relative aspect-video rounded-sm overflow-hidden border border-white/5 group shadow-2xl order-2 lg:order-1">
             <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-all z-10 flex items-center justify-center">
                <div className="w-24 h-24 border border-white/20 rounded-full flex items-center justify-center group-hover:scale-125 transition-all">
                   <div className="w-0 h-0 border-t-[10px] border-t-transparent border-r-[18px] border-r-white border-b-[10px] border-b-transparent mr-2" />
                </div>
             </div>
             <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover grayscale" />
          </div>
          <div className="order-1 lg:order-2 text-right">
            <span className="text-gold-500 text-[10px] font-black uppercase tracking-[0.5em] mb-10 block text-right">جولة في المصنع 2026</span>
            <h2 className="text-6xl font-black uppercase tracking-tighter italic leading-none mb-10">أصول حقيقية. <br/>قدرة حقيقية.</h2>
            <p className="text-gray-500 text-lg font-medium leading-relaxed mb-12">
              على عكس وكلاء التجارة، نحن نمتلك دورة الإنتاج كاملة. من طباعة هايدلبرغ الأوفست إلى خطوط تجميع العلب الصلبة المؤتمتة بالكامل، تستفيد علامتك التجارية من الأسعار المباشرة ومراقبة الجودة التي لا مثيل لها.
            </p>
            <ul className="space-y-6 text-sm font-bold uppercase tracking-widest text-white/60">
              <li className="flex items-center justify-end gap-4 border-r border-gold-500 pr-6 text-right">طباعة هايدلبرغ UV بـ 6 ألوان</li>
              <li className="flex items-center justify-end gap-4 border-r border-gold-500 pr-6 text-right">تقطيع وقولبة ونقش مؤتمت</li>
              <li className="flex items-center justify-end gap-4 border-r border-gold-500 pr-6 text-right">منشأة معتمدة من BSCI & FSC</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Inquiry */}
      <section id="contact" className="py-60 bg-black relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-40">
            <div className="text-right">
              <h2 className="text-7xl md:text-9xl font-black uppercase tracking-tighter leading-[0.85] mb-12 italic">لنبدأ <br/>البناء.</h2>
              <p className="text-xl text-white/40 mb-20 font-medium leading-relaxed uppercase tracking-[0.2em]">يقدم فريقنا الهندسي تحليلاً هيكلياً وتحسيناً للتكلفة في غضون 24 ساعة.</p>
              
              <div className="space-y-16">
                <div>
                  <p className="text-[10px] font-black text-gold-500 uppercase tracking-widest mb-4">البريد الإلكتروني المباشر</p>
                  <p className="text-3xl font-black italic">jocelyn@saidepackaging.com</p>
                </div>
                <div>
                  <p className="text-[10px] font-black text-gold-500 uppercase tracking-widest mb-4">الدعم العالمي</p>
                  <p className="text-3xl font-black italic">+86-13699786538</p>
                </div>
              </div>
            </div>
            <div className="bg-[#0f0f0f] p-12 rounded-sm border border-white/5 shadow-2xl">
              <InquiryForm lang="ar" />
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black text-white py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-12">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] opacity-30 italic text-right">Side Packaging HK Limited. © 2026. معايير الفخامة الصناعية.</p>
          <div className="flex gap-12 text-[10px] font-black uppercase tracking-[0.3em] opacity-30">
            <a href="#" className="hover:opacity-100 transition-opacity">الخصوصية</a>
            <a href="#" className="hover:opacity-100 transition-opacity">الشروط</a>
            <Link href="/" className="text-gold-500 hover:opacity-100">English / الإنجليزية</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePageAr;
