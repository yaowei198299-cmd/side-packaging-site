import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const ProductsPage = () => {
  const categories = [
    {
      name: "سلسلة الصلابة الفاخرة",
      desc: "لوح رمادي عالي الكثافة 1200 جرام مع تشطيبات مخصصة متميزة.",
      items: [
        {
          badge: "فخامة بيئية",
          title: "مجموعة الفخامة البيئية المستدامة",
          desc: "صندوق هدايا تجميل فاخر معتمد من FSC يتميز بتشطيب ورقي حجري ناعم وحشوات مصبوبة من الميسليوم خالية من البلاستيك بنسبة 100%.",
          image: "https://sc02.alicdn.com/kf/Ae50efd75cc6d448a8e45325d12c0ddcab.png",
          link: "/ar/products/eco-luxury-set",
          moq: "500 قطعة",
          leadTime: "15-20 يومًا",
          extra: "FSC / ورق حجري"
        },
        {
          badge: "إدراج مخصص",
          title: "صندوق مغناطيسي مع صينية إدراج",
          desc: "صندوق بغطاء مغناطيسي بلون أسود مطفي متميز مع صينية إدراج رغوية مصبوبة بدقة. مثالي لمجموعات العناية الشخصية والعناية بالبشرة.",
          image: "https://sc04.alicdn.com/kf/Had1198f76e8244f7b6e067519bad703co.jpg",
          link: "/ar/products/custom-magnetic-gift-boxes",
          moq: "200 قطعة",
          leadTime: "12-15 يومًا",
          extra: "رغوة EVA / صينية"
        },
        {
          badge: "تشطيب شريط",
          title: "صندوق غطاء وقاعدة صلب مع شريط",
          desc: "صندوق صلب كلاسيكي مكون من قطعتين مع شريط ساتان مربوط مسبقًا. مثالي للمجوهرات الفاخرة ومجموعات الهدايا.",
          image: "https://sc04.alicdn.com/kf/Hbebfc26f6fe74be2a241b3b45b5a69d3g.jpg",
          link: "/ar/products",
          moq: "100 قطعة",
          leadTime: "12-15 يومًا",
          extra: "شريط ساتان"
        },
        {
          badge: "تجارة إلكترونية",
          title: "صندوق شحن كرافت سهل التمزق",
          desc: "صندوق شحن كرافت مضلع مع شريط تمزيق مدمج للفتح الفوري. تجربة فتح مستدامة ودائمة.",
          image: "https://sc04.alicdn.com/kf/H4cebdb0cd26b429f897a7b927f587eb64.jpg",
          link: "/ar/products",
          moq: "300 قطعة",
          leadTime: "10-12 يومًا",
          extra: "كرافت FSC"
        },
        {
          badge: "صديق للبيئة",
          title: "صندوق شحن ورقي أبيض متميز",
          desc: "صندوق شحن ورقي أبيض عالي الجودة مع طباعة شعار مخصص. متين وأنيق وقابل لإعادة التدوير بنسبة 100% للشحن الإلكتروني المتميز.",
          image: "https://sc02.alicdn.com/kf/A6944a60384cf46a89e823d17403dc1e4Z.png",
          link: "/ar/products/custom-white-card-mailer-box",
          moq: "500 قطعة",
          leadTime: "10-12 يومًا",
          extra: "ورق مقوى أبيض"
        },
        {
          badge: "مستحضرات تجميل",
          title: "صندوق مستحضرات تجميل ذاتي الانتصاب",
          desc: "كرتون قابل للطي عالي الجودة مع تشطيبات متميزة. مصمم لعلامات التجميل التجارية التي تحتاج إلى كفاءة التعبئة المسطحة دون المساومة على الفخامة.",
          image: "https://sc04.alicdn.com/kf/Had73de458596340d2b7f9d73d279f32b94.jpg",
          link: "/ar/products/cosmetic-packaging-boxes",
          moq: "2000 قطعة",
          leadTime: "10-12 يومًا",
          extra: "ورق فني 350 جرام"
        }
      ]
    },
    {
      name: "بوتيك وإكسسوارات",
      desc: "أناقة لتجارة التجزئة الراقية والمجوهرات والعلامات التجارية المتخصصة.",
      items: [
        {
          badge: "متميز",
          title: "صندوق مجوهرات جلدي وردي",
          desc: "تشطيب جلدي متميز مع منظم درج منزلق ناعم. مثالي للخواتم الراقية ومجوهرات البوتيك.",
          image: "https://sc04.alicdn.com/kf/H6a331bc412a64a00b7c4af3df365dac1i.jpg",
          link: "/ar/blog/jewelry-box-trends-2026-customization",
          moq: "500 قطعة",
          leadTime: "12-15 يومًا",
          extra: "جلد / مخمل"
        },
        {
          badge: "فاخر",
          title: "صندوق مغناطيسي مع ورق الذهب",
          desc: "صندوق صلب مغناطيسي عالي الجودة يتميز بتفاصيل ورق ذهب رائعة. مصمم لمجموعات الهدايا المتميزة.",
          image: "https://sc04.alicdn.com/kf/H227b0954e2ad4bf0ba3f0fddc502a3faY.jpg",
          link: "/ar/products",
          moq: "200 قطعة",
          leadTime: "15-18 يومًا",
          extra: "ورق ذهب"
        },
        {
          badge: "مخصص",
          title: "أكياس ورقية بمقبض شريط",
          desc: "أكياس ورقية أنيقة بمقابض شريط ناعمة وقاعدة معززة. مثالية للتجزئة الفاخرة والبوتيكات.",
          image: "https://sc04.alicdn.com/kf/H689a746594d24194910903328f4d9526n.jpg",
          link: "/ar/products",
          moq: "1000 قطعة",
          leadTime: "10-12 يومًا",
          extra: "مقبض شريط"
        },
        {
          badge: "صديق للبيئة",
          title: "مجموعة تغليف الوجبات السريعة",
          desc: "مجموعات ورقية مقاومة للدهون معتمدة من FSC وصديقة للبيئة. مستدامة وأنيقة للعلامات التجارية الحرفية.",
          image: "https://sc04.alicdn.com/kf/H177398f7aa15456ca80b4af84f84382a6.jpg",
          link: "/ar/products",
          moq: "2000 قطعة",
          leadTime: "12-15 يومًا",
          extra: "قابل لإعادة التدوير"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-gold-500" dir="rtl">
      <Head>
        <title>كتالوج التغليف | حلول فاخرة مخصصة | سايد باكينج إتش كي المحدودة</title>
        <meta name="description" content="استكشف كتالوج التغليف الفني الخاص بنا. المواصفات الصناعية، وأقل كمية للطلب، ومواعيد التنفيذ للصناديق الصلبة الفاخرة وحلول التجزئة." />
      </Head>

      {/* Navbar: Sophisticated & Minimalist */}
      <nav className="fixed top-0 left-0 right-0 z-[100] bg-black/40 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
          <Link href="/ar" className="text-2xl font-black tracking-tighter uppercase italic text-white">Side Packaging</Link>
          <div className="hidden lg:flex items-center space-x-12 text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">
            <Link href="/ar" className="hover:text-white transition-colors">الرئيسية</Link>
            <Link href="/ar/gallery" className="hover:text-white transition-colors">دراسات الحالة</Link>
            <Link href="/ar/products" className="text-white">الكتالوج</Link>
            <Link href="/ar/blog" className="hover:text-white transition-colors">رؤى</Link>
          </div>
          <a href="/ar/#contact" className="bg-white text-black px-10 py-3.5 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-gray-200 shadow-xl">احصل على عرض سعر</a>
        </div>
      </nav>

      <main className="pt-40 pb-24 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-[1600px] mx-auto px-6">
          <header className="mb-24">
            <h1 className="text-5xl font-black uppercase tracking-tighter mb-4 italic">كتالوج مخصص</h1>
            <p className="text-gray-500 font-medium">المواصفات الفنية للمشتريات المهنية بين الشركات (B2B).</p>
          </header>

          {categories.map((cat, idx) => (
            <section key={idx} className="mb-32">
              <div className="border-b border-white/10 pb-6 mb-12">
                <h2 className="text-3xl font-black uppercase tracking-tighter text-white/40">{cat.name}</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {cat.items.map((item, i) => (
                  <div key={i} className="group flex flex-col bg-[#0f0f0f] border border-white/5 hover:border-white/10 transition-all rounded-sm">
                    {/* Image Area */}
                    <div className="aspect-[4/3] overflow-hidden relative">
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-all duration-700" />
                    </div>

                    {/* Content Area */}
                    <div className="p-8 flex-grow flex flex-col">
                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-gold-500 text-[10px]">★</span>
                        <span className="text-gold-500 font-black text-[9px] uppercase tracking-widest">{item.badge}</span>
                      </div>
                      <h3 className="text-xl font-black text-white uppercase mb-4 tracking-tight leading-tight">{item.title}</h3>
                      <p className="text-gray-500 text-xs font-medium leading-relaxed mb-8 line-clamp-3">
                        {item.desc}
                      </p>

                      {/* Technical Specs */}
                      <div className="grid grid-cols-3 gap-4 border-t border-white/5 pt-6 mt-auto">
                        <div>
                          <p className="text-[8px] font-black text-gray-600 uppercase tracking-widest mb-1">أقل كمية للطلب</p>
                          <p className="text-[10px] font-bold text-gray-300">{item.moq}</p>
                        </div>
                        <div>
                          <p className="text-[8px] font-black text-gray-600 uppercase tracking-widest mb-1">مدة التنفيذ</p>
                          <p className="text-[10px] font-bold text-gray-300">{item.leadTime}</p>
                        </div>
                        <div>
                          <p className="text-[8px] font-black text-gray-600 uppercase tracking-widest mb-1">الداخل/المادة</p>
                          <p className="text-[10px] font-bold text-gray-300">{item.extra}</p>
                        </div>
                      </div>

                      {/* Action */}
                      <Link href={item.link} className="mt-8 border border-white/10 hover:border-gold-500/50 py-3 text-center rounded-sm transition-all group/btn">
                        <span className="text-[9px] font-black uppercase tracking-widest text-gray-400 group-hover/btn:text-white transition-colors">
                          ← اطلب عرض سعر لهذا المنتج
                        </span>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>

      <footer className="bg-black text-white py-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex flex-col gap-4">
             <p className="text-xl font-black tracking-tighter uppercase italic text-white/40">Side Packaging</p>
             <p className="text-[10px] font-bold uppercase tracking-widest text-gray-600">حلول تصنيع متميزة للشركات.</p>
          </div>
          <p className="text-[10px] font-bold uppercase tracking-widest text-gray-600">&copy; 2026 سايد باكينج إتش كي المحدودة. معتمد من FSC و BSCI.</p>
        </div>
      </footer>
    </div>
  );
};

export default ProductsPage;
