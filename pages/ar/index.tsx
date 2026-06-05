import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import InquiryForm from '../../components/InquiryForm';
import WhatsAppButton from '../../components/WhatsAppButton';

const HomePageAr = () => {
  const group1 = "https://sc01.alicdn.com/kf/A3a4c9b4df52c4178b9387cd98246b8426.png";
  const group2 = "https://sc01.alicdn.com/kf/Ab4aec4b7e81744da97c367f74b3ed6b1K.png";

  const categories = [
    { title: "حقائب اليد", image: group1, x: "0%" },
    { title: "صناديق ورقية", image: group1, x: "33.33%" },
    { title: "ملصقات العلامات", image: group1, x: "66.66%" },
    { title: "مناديل ورقية", image: group1, x: "100%" },
    { title: "صناديق فاخرة", image: group2, x: "0%" },
    { title: "صناديق عرض", image: group2, x: "33.33%" },
    { title: "صناديق شحن", image: group2, x: "66.66%" },
    { title: "بطاقات شكر", image: group2, x: "100%" },
  ];

  const faqs = [
    {
      q: "ما هو الحد الأدنى لكمية الطلب (MOQ)؟",
      a: "يبدأ الحد الأدنى لكمية الطلب لدينا من 500 وحدة للصناديق الصلبة الفاخرة وصناديق الهدايا المغناطيسية. بالنسبة لصناديق الشحن عبر البريد الإلكتروني، يمكننا تلبية الطلبات بدءًا من 100 وحدة لدعم العلامات التجارية المتنامية."
    },
    {
      q: "كيف يمكنني تقليل تكاليف التغليف الخاصة بي؟",
      a: "نحن نقدم تحليلاً تقنياً مجانياً لخفض التكاليف. من خلال تحسين هياكل الصناديق، وسماكة المواد، وتصاميم التعبئة المسطحة، نساعد العملاء عادةً على توفير 10-30% في الإنتاج والشحن."
    },
    {
      q: "هل تقدمون تصميماً مجانياً ودعماً هيكلياً؟",
      a: "نعم، يتضمن كل استفسار دعماً احترافياً مجانياً للتصاميم الهيكلية. سيقدم مهندسونا رسومات تقنية لضمان ملاءمة عملك الفني تماماً قبل الإنتاج الضخم."
    },
    {
      q: "هل التغليف الخاص بكم معتمد من FSC؟",
      a: "بالتأكيد. نحن مصنع معتمد من FSC، مما يضمن أن جميع المواد يتم الحصول عليها من غابات تدار بمسؤولية. هذا أمر بالغ الأهمية للعلامات التجارية التي تدخل أسواق الولايات المتحدة والاتحاد الأوروبي."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-gold-500 overflow-x-hidden" dir="rtl">
      <Head>
        <title>Side Packaging | مصنع تغليف فاخر متميز في الصين</title>
        <meta name="description" content="مصنع مباشر لصناديق الهدايا المغناطيسية والصلبة والشحن مع شعار مخصص. الحد الأدنى للطلب من 100 قطعة. نموذج 3D مجاني. شحن عالمي." />
      </Head>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-[100] bg-black/40 backdrop-blur-2xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/ar" className="text-xl font-black tracking-tighter uppercase italic text-white">Side Packaging</Link>
          <div className="hidden lg:flex items-center space-x-reverse space-x-10 text-[9px] font-black uppercase tracking-[0.3em] text-gray-400">
            <Link href="/products" className="hover:text-white transition-colors">الكتالوج</Link>
            <Link href="/gallery" className="hover:text-white transition-colors">دراسات الحالة</Link>
            <Link href="/about-founder" className="hover:text-white transition-colors">المؤسسون</Link>
          </div>
          <a href="#contact" className="bg-[#d4af37] text-black px-8 py-2.5 rounded-full text-[9px] font-black uppercase tracking-widest hover:bg-white transition-all shadow-xl">احصل على سعر مجاني</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://sc01.alicdn.com/kf/A50266d485601490f977db118833d7fb4a.png" 
            alt="Luxury Packaging Poster" 
            className="absolute left-0 top-0 h-full w-full lg:w-3/4 object-cover object-left"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-black via-black/40 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center text-right">
          <div className="animate-in fade-in slide-in-from-right-10 duration-1000">
            <div className="inline-block border border-[#d4af37]/30 bg-black/50 backdrop-blur-md px-4 py-1.5 rounded-full mb-8">
              <span className="text-[10px] font-bold text-[#d4af37] uppercase tracking-[0.2em] flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#d4af37] rounded-full animate-pulse" />
                مصنع متميز لصناديق الهدايا في الصين · تأسس عام 2006
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] mb-8 italic">
              تغليف هدايا <br/>
              <span className="text-white">فاخر مخصص</span> <br/>
              مباشر من المصنع <br/>
              في الصين
            </h1>

            <p className="text-lg md:text-xl text-white/60 mb-8 max-w-xl font-medium tracking-tight">
              مصنع مباشر لصناديق الهدايا المغناطيسية والصلبة والشحن مع شعار مخصص
            </p>

            <p className="text-sm font-black text-[#d4af37] uppercase tracking-[0.2em] mb-10">
              الحد الأدنى للطلب من 100 قطعة • نموذج 3D مجاني • شحن عالمي
            </p>

            <div className="flex flex-wrap gap-3 mb-12 justify-end">
              {[
                "MOQ: 100 قطعة",
                "مدة التسليم: 15 يوماً",
                "الشحن لـ 50+ دولة",
                "خدمة تصميم مجانية"
              ].map((pill, i) => (
                <span key={i} className="px-5 py-2.5 bg-white/5 border border-white/10 rounded-full text-[10px] font-black uppercase tracking-widest text-white/80">
                  {pill}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-end">
               <a href="/inquiry" className="inline-block bg-[#d4af37] text-black px-12 py-5 rounded-full font-black uppercase tracking-widest text-sm hover:scale-105 transition-all shadow-[0_0_30px_rgba(212,175,55,0.3)]">
                 احصل على أسعار المصنع (وفر 30-50%)
               </a>
            </div>
          </div>
        </div>
      </section>

      {/* Category Grid */}
      <section className="py-32 bg-black border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6">
          <header className="mb-20 text-center">
             <span className="text-[#d4af37] text-[10px] font-black uppercase tracking-[0.5em] mb-4 block">فئات المنتجات</span>
             <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter italic">مصممة للفخامة.</h2>
          </header>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-16">
            {categories.map((cat, i) => (
              <Link key={i} href="/products" className="group block text-center">
                <div 
                  className="aspect-square bg-[#f3f3f3] rounded-[2rem] overflow-hidden mb-8 border border-white/5 group-hover:border-[#d4af37]/50 transition-all shadow-2xl"
                  style={{
                    backgroundImage: `url(${cat.image})`,
                    backgroundSize: '400% 100%',
                    backgroundPosition: `${cat.x} center`,
                    backgroundRepeat: 'no-repeat'
                  }}
                />
                <h3 className="text-xl md:text-2xl font-black italic uppercase tracking-tighter text-white group-hover:text-[#d4af37] transition-colors">
                  {cat.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Expert Q&A Section */}
      <section className="py-40 bg-black border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <header className="mb-20 text-center">
            <span className="text-[#d4af37] text-[10px] font-black uppercase tracking-[0.5em] mb-4 block">الأسئلة الشائعة للخبراء</span>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter italic">ذكاء التغليف.</h2>
          </header>

          <div className="space-y-12">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-white/5 pb-12 group text-right">
                <h3 className="text-xl font-black text-white uppercase tracking-tighter italic mb-4 group-hover:text-[#d4af37] transition-colors">س: {faq.q}</h3>
                <p className="text-gray-400 font-medium leading-relaxed uppercase tracking-wide text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form Section */}
      <section id="contact" className="py-40 bg-black border-t border-white/5">
        <InquiryForm lang="ar" />
      </section>

      <footer className="bg-black text-white py-20 border-t border-white/5 text-center">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-12">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] opacity-30 italic">Side Packaging HK Limited. © 2026. معايير الفخامة الصناعية.</p>
          <div className="flex gap-12 text-[10px] font-black uppercase tracking-[0.3em] opacity-30">
            <Link href="/" className="text-[#d4af37] ">English / الإنجليزية</Link>
            <Link href="/de" className="text-[#d4af37] ">German / Deutsch</Link>
          </div>
        </div>
      </footer>

      <WhatsAppButton />
    </div>
  );
};

export default HomePageAr;
