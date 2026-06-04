import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import InquiryForm from '../../components/InquiryForm';
import WhatsAppButton from '../../components/WhatsAppButton';

const WhiteCardMailerPage = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-gold-500 overflow-x-hidden" dir="rtl">
      <Head>
        <title>صندوق بريد مخصص من الورق الأبيض | تغليف متميز للتجارة الإلكترونية والاشتراكات</title>
        <meta name="description" content="صندوق بريد مخصص مع طباعة شعار. تغليف ورقي أبيض عالي الجودة للتجارة الإلكترونية والاشتراكات والهدايا والتجزئة. صديق للبيئة وقابل لإعادة التدوير." />
      </Head>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-[100] bg-black/40 backdrop-blur-2xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/ar" className="text-xl font-black tracking-tighter uppercase italic text-white">Side Packaging</Link>
          <div className="hidden lg:flex items-center space-x-10 space-x-reverse text-[9px] font-black uppercase tracking-[0.3em] text-gray-400">
            <Link href="/ar/products" className="hover:text-white transition-colors">الكتالوج</Link>
            <Link href="/ar/gallery" className="hover:text-white transition-colors">دراسات الحالة</Link>
            <Link href="/ar/about-founder" className="hover:text-white transition-colors">المؤسسون</Link>
          </div>
          <Link href="/ar/inquiry" className="bg-[#d4af37] text-black px-8 py-2.5 rounded-full text-[9px] font-black uppercase tracking-widest hover:bg-white transition-all shadow-xl">احصل على عرض سعر</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://sc02.alicdn.com/kf/A6944a60384cf46a89e823d17403dc1e4Z.png" 
            alt="صندوق بريد مخصص من الورق الأبيض" 
            className="w-full h-full object-cover grayscale brightness-75 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="max-w-3xl text-right">
            <div className="inline-block border border-[#d4af37]/30 bg-black/50 backdrop-blur-md px-4 py-1.5 rounded-full mb-8">
              <span className="text-[10px] font-bold text-[#d4af37] uppercase tracking-[0.2em]">صديق للبيئة · ورق أبيض متميز</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-8 italic">
              صندوق بريد من <br/>الورق الأبيض الفاخر.
            </h1>
            <p className="text-xl text-white/60 mb-12 max-w-xl font-medium tracking-tight uppercase tracking-widest leading-relaxed">
              طباعة شعار مخصص. تشطيب فاخر. مثالي لصناديق الاشتراك وتوصيل التجزئة.
            </p>
          </div>
        </div>
      </section>

      {/* Technical Breakdown */}
      <section className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-32 items-start">
             <div>
                <h2 className="text-4xl font-black uppercase tracking-tighter italic mb-10 pb-6 border-b border-white/5">المواصفات الفنية.</h2>
                <div className="space-y-12">
                   <div className="grid grid-cols-2 gap-10">
                      <div>
                         <p className="text-[10px] font-black text-[#d4af37] uppercase tracking-widest mb-3">المادة</p>
                         <p className="text-lg font-bold text-white/80">ورق مقوى أبيض 350-400 جرام</p>
                      </div>
                      <div>
                         <p className="text-[10px] font-black text-[#d4af37] uppercase tracking-widest mb-3">الطباعة</p>
                         <p className="text-lg font-bold text-white/80">ألوان كاملة CMYK / Pantone</p>
                      </div>
                   </div>
                   <div className="grid grid-cols-2 gap-10">
                      <div>
                         <p className="text-[10px] font-black text-[#d4af37] uppercase tracking-widest mb-3">التشطيب</p>
                         <p className="text-lg font-bold text-white/80">تصفيح مطفي/لامع، Spot UV</p>
                      </div>
                      <div>
                         <p className="text-[10px] font-black text-[#d4af37] uppercase tracking-widest mb-3">الميزة</p>
                         <p className="text-lg font-bold text-white/80">قابل لإعادة التدوير 100% وصديق للبيئة</p>
                      </div>
                   </div>
                   <div className="grid grid-cols-2 gap-10 border-t border-white/5 pt-10">
                      <div>
                         <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-3">الحد الأدنى للطلب</p>
                         <p className="text-lg font-bold text-white/40 italic">500 وحدة</p>
                      </div>
                      <div>
                         <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-3">مدة التنفيذ</p>
                         <p className="text-lg font-bold text-white/40 italic">10-12 يوم عمل</p>
                      </div>
                   </div>
                </div>
             </div>

             <div className="bg-[#0f0f15] p-12 border border-white/5 rounded-sm">
                <h3 className="text-2xl font-black uppercase tracking-tighter italic mb-8">تطبيقات الصناعة</h3>
                <ul className="space-y-6 text-sm font-bold uppercase tracking-[0.2em] text-white/60">
                   <li className="flex items-center gap-4 border-r border-[#d4af37] pr-6">خدمات صناديق الاشتراك</li>
                   <li className="flex items-center gap-4 border-r border-[#d4af37] pr-6">الشحن والخدمات اللوجستية للتجارة الإلكترونية</li>
                   <li className="flex items-center gap-4 border-r border-[#d4af37] pr-6">تغليف التجزئة الفاخر</li>
                   <li className="flex items-center gap-4 border-r border-[#d4af37] pr-6">تغليف هدايا مخصص</li>
                </ul>
             </div>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section id="quote" className="py-40 bg-black border-t border-white/5">
        <InquiryForm productTitle="صندوق بريد مخصص من الورق الأبيض" />
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-20 border-t border-white/5 text-center">
        <p className="text-[10px] font-black uppercase tracking-[0.3em] opacity-30 italic">سايد باكجينج إتش كي ليميتد. © 2026. معايير الفخامة الصناعية.</p>
      </footer>

      <WhatsAppButton />
    </div>
  );
};

export default WhiteCardMailerPage;
