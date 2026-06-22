import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const ProductsPage = () => {
  const categories = [
    {
      name: "爻賱爻賱丞 丕賱氐賱丕亘丞 丕賱賮丕禺乇丞",
      desc: "賱賵丨 乇賲丕丿賷 毓丕賱賷 丕賱賰孬丕賮丞 1200 噩乇丕賲 賲毓 鬲卮胤賷亘丕鬲 賲禺氐氐丞 賲鬲賲賷夭丞.",
      items: [
        {
          badge: "賮禺丕賲丞 亘賷卅賷丞",
          title: "賲噩賲賵毓丞 丕賱賮禺丕賲丞 丕賱亘賷卅賷丞 丕賱賲爻鬲丿丕賲丞",
          desc: "氐賳丿賵賯 賴丿丕賷丕 鬲噩賲賷賱 賮丕禺乇 賲毓鬲賲丿 賲賳 FSC 賷鬲賲賷夭 亘鬲卮胤賷亘 賵乇賯賷 丨噩乇賷 賳丕毓賲 賵丨卮賵丕鬲 賲氐亘賵亘丞 賲賳 丕賱賲賷爻賱賷賵賲 禺丕賱賷丞 賲賳 丕賱亘賱丕爻鬲賷賰 亘賳爻亘丞 100%.",
          image: "https://sc02.alicdn.com/kf/Ae50efd75cc6d448a8e45325d12c0ddcab.png",
          link: "/ar/products/eco-luxury-set",
          moq: "500 賯胤毓丞",
          leadTime: "15-20 賷賵賲賸丕",
          extra: "FSC / 賵乇賯 丨噩乇賷"
        },
        {
          badge: "廿丿乇丕噩 賲禺氐氐",
          title: "氐賳丿賵賯 賲睾賳丕胤賷爻賷 賲毓 氐賷賳賷丞 廿丿乇丕噩",
          desc: "氐賳丿賵賯 亘睾胤丕亍 賲睾賳丕胤賷爻賷 亘賱賵賳 兀爻賵丿 賲胤賮賷 賲鬲賲賷夭 賲毓 氐賷賳賷丞 廿丿乇丕噩 乇睾賵賷丞 賲氐亘賵亘丞 亘丿賯丞. 賲孬丕賱賷 賱賲噩賲賵毓丕鬲 丕賱毓賳丕賷丞 丕賱卮禺氐賷丞 賵丕賱毓賳丕賷丞 亘丕賱亘卮乇丞.",
          image: "https://sc04.alicdn.com/kf/Had1198f76e8244f7b6e067519bad703co.jpg",
          link: "/ar/products/custom-magnetic-gift-boxes",
          moq: "200 賯胤毓丞",
          leadTime: "12-15 賷賵賲賸丕",
          extra: "乇睾賵丞 EVA / 氐賷賳賷丞"
        },
        {
          badge: "鬲卮胤賷亘 卮乇賷胤",
          title: "氐賳丿賵賯 睾胤丕亍 賵賯丕毓丿丞 氐賱亘 賲毓 卮乇賷胤",
          desc: "氐賳丿賵賯 氐賱亘 賰賱丕爻賷賰賷 賲賰賵賳 賲賳 賯胤毓鬲賷賳 賲毓 卮乇賷胤 爻丕鬲丕賳 賲乇亘賵胤 賲爻亘賯賸丕. 賲孬丕賱賷 賱賱賲噩賵賴乇丕鬲 丕賱賮丕禺乇丞 賵賲噩賲賵毓丕鬲 丕賱賴丿丕賷丕.",
          image: "https://sc04.alicdn.com/kf/Hbebfc26f6fe74be2a241b3b45b5a69d3g.jpg",
          link: "/ar/products",
          moq: "100 賯胤毓丞",
          leadTime: "12-15 賷賵賲賸丕",
          extra: "卮乇賷胤 爻丕鬲丕賳"
        },
        {
          badge: "鬲噩丕乇丞 廿賱賰鬲乇賵賳賷丞",
          title: "氐賳丿賵賯 卮丨賳 賰乇丕賮鬲 爻賴賱 丕賱鬲賲夭賯",
          desc: "氐賳丿賵賯 卮丨賳 賰乇丕賮鬲 賲囟賱毓 賲毓 卮乇賷胤 鬲賲夭賷賯 賲丿賲噩 賱賱賮鬲丨 丕賱賮賵乇賷. 鬲噩乇亘丞 賮鬲丨 賲爻鬲丿丕賲丞 賵丿丕卅賲丞.",
          image: "https://sc04.alicdn.com/kf/H4cebdb0cd26b429f897a7b927f587eb64.jpg",
          link: "/ar/products",
          moq: "300 賯胤毓丞",
          leadTime: "10-12 賷賵賲賸丕",
          extra: "賰乇丕賮鬲 FSC"
        },
        {
          badge: "氐丿賷賯 賱賱亘賷卅丞",
          title: "氐賳丿賵賯 卮丨賳 賵乇賯賷 兀亘賷囟 賲鬲賲賷夭",
          desc: "氐賳丿賵賯 卮丨賳 賵乇賯賷 兀亘賷囟 毓丕賱賷 丕賱噩賵丿丞 賲毓 胤亘丕毓丞 卮毓丕乇 賲禺氐氐. 賲鬲賷賳 賵兀賳賷賯 賵賯丕亘賱 賱廿毓丕丿丞 丕賱鬲丿賵賷乇 亘賳爻亘丞 100% 賱賱卮丨賳 丕賱廿賱賰鬲乇賵賳賷 丕賱賲鬲賲賷夭.",
          image: "https://sc02.alicdn.com/kf/A6944a60384cf46a89e823d17403dc1e4Z.png",
          link: "/ar/products/custom-white-card-mailer-box",
          moq: "500 賯胤毓丞",
          leadTime: "10-12 賷賵賲賸丕",
          extra: "賵乇賯 賲賯賵賶 兀亘賷囟"
        },
        {
          badge: "賲爻鬲丨囟乇丕鬲 鬲噩賲賷賱",
          title: "氐賳丿賵賯 賲爻鬲丨囟乇丕鬲 鬲噩賲賷賱 匕丕鬲賷 丕賱丕賳鬲氐丕亘",
          desc: "賰乇鬲賵賳 賯丕亘賱 賱賱胤賷 毓丕賱賷 丕賱噩賵丿丞 賲毓 鬲卮胤賷亘丕鬲 賲鬲賲賷夭丞. 賲氐賲賲 賱毓賱丕賲丕鬲 丕賱鬲噩賲賷賱 丕賱鬲噩丕乇賷丞 丕賱鬲賷 鬲丨鬲丕噩 廿賱賶 賰賮丕亍丞 丕賱鬲毓亘卅丞 丕賱賲爻胤丨丞 丿賵賳 丕賱賲爻丕賵賲丞 毓賱賶 丕賱賮禺丕賲丞.",
          image: "https://sc04.alicdn.com/kf/Had73de458596340d2b7f9d73d279f32b94.jpg",
          link: "/ar/products/cosmetic-packaging-boxes",
          moq: "2000 賯胤毓丞",
          leadTime: "10-12 賷賵賲賸丕",
          extra: "賵乇賯 賮賳賷 350 噩乇丕賲"
        }
      ]
    },
    {
      name: "亘賵鬲賷賰 賵廿賰爻爻賵丕乇丕鬲",
      desc: "兀賳丕賯丞 賱鬲噩丕乇丞 丕賱鬲噩夭卅丞 丕賱乇丕賯賷丞 賵丕賱賲噩賵賴乇丕鬲 賵丕賱毓賱丕賲丕鬲 丕賱鬲噩丕乇賷丞 丕賱賲鬲禺氐氐丞.",
      items: [
        {
          badge: "賲鬲賲賷夭",
          title: "氐賳丿賵賯 賲噩賵賴乇丕鬲 噩賱丿賷 賵乇丿賷",
          desc: "鬲卮胤賷亘 噩賱丿賷 賲鬲賲賷夭 賲毓 賲賳馗賲 丿乇噩 賲賳夭賱賯 賳丕毓賲. 賲孬丕賱賷 賱賱禺賵丕鬲賲 丕賱乇丕賯賷丞 賵賲噩賵賴乇丕鬲 丕賱亘賵鬲賷賰.",
          image: "https://sc04.alicdn.com/kf/H6a331bc412a64a00b7c4af3df365dac1i.jpg",
          link: "/ar/blog/jewelry-box-trends-2026-customization",
          moq: "500 賯胤毓丞",
          leadTime: "12-15 賷賵賲賸丕",
          extra: "噩賱丿 / 賲禺賲賱"
        },
        {
          badge: "賮丕禺乇",
          title: "氐賳丿賵賯 賲睾賳丕胤賷爻賷 賲毓 賵乇賯 丕賱匕賴亘",
          desc: "氐賳丿賵賯 氐賱亘 賲睾賳丕胤賷爻賷 毓丕賱賷 丕賱噩賵丿丞 賷鬲賲賷夭 亘鬲賮丕氐賷賱 賵乇賯 匕賴亘 乇丕卅毓丞. 賲氐賲賲 賱賲噩賲賵毓丕鬲 丕賱賴丿丕賷丕 丕賱賲鬲賲賷夭丞.",
          image: "https://sc04.alicdn.com/kf/H227b0954e2ad4bf0ba3f0fddc502a3faY.jpg",
          link: "/ar/products",
          moq: "200 賯胤毓丞",
          leadTime: "15-18 賷賵賲賸丕",
          extra: "賵乇賯 匕賴亘"
        },
        {
          badge: "賲禺氐氐",
          title: "兀賰賷丕爻 賵乇賯賷丞 亘賲賯亘囟 卮乇賷胤",
          desc: "兀賰賷丕爻 賵乇賯賷丞 兀賳賷賯丞 亘賲賯丕亘囟 卮乇賷胤 賳丕毓賲丞 賵賯丕毓丿丞 賲毓夭夭丞. 賲孬丕賱賷丞 賱賱鬲噩夭卅丞 丕賱賮丕禺乇丞 賵丕賱亘賵鬲賷賰丕鬲.",
          image: "https://sc04.alicdn.com/kf/H689a746594d24194910903328f4d9526n.jpg",
          link: "/ar/products",
          moq: "1000 賯胤毓丞",
          leadTime: "10-12 賷賵賲賸丕",
          extra: "賲賯亘囟 卮乇賷胤"
        },
        {
          badge: "氐丿賷賯 賱賱亘賷卅丞",
          title: "賲噩賲賵毓丞 鬲睾賱賷賮 丕賱賵噩亘丕鬲 丕賱爻乇賷毓丞",
          desc: "賲噩賲賵毓丕鬲 賵乇賯賷丞 賲賯丕賵賲丞 賱賱丿賴賵賳 賲毓鬲賲丿丞 賲賳 FSC 賵氐丿賷賯丞 賱賱亘賷卅丞. 賲爻鬲丿丕賲丞 賵兀賳賷賯丞 賱賱毓賱丕賲丕鬲 丕賱鬲噩丕乇賷丞 丕賱丨乇賮賷丞.",
          image: "https://sc04.alicdn.com/kf/H177398f7aa15456ca80b4af84f84382a6.jpg",
          link: "/ar/products",
          moq: "2000 賯胤毓丞",
          leadTime: "12-15 賷賵賲賸丕",
          extra: "賯丕亘賱 賱廿毓丕丿丞 丕賱鬲丿賵賷乇"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-gold-500" dir="rtl">
      <Head>
        <title>賰鬲丕賱賵噩 丕賱鬲睾賱賷賮 | 丨賱賵賱 賮丕禺乇丞 賲禺氐氐丞 | 爻丕賷丿 亘丕賰賷賳噩 廿鬲卮 賰賷 丕賱賲丨丿賵丿丞</title>
        <meta name="description" content="丕爻鬲賰卮賮 賰鬲丕賱賵噩 丕賱鬲睾賱賷賮 丕賱賮賳賷 丕賱禺丕氐 亘賳丕. 丕賱賲賵丕氐賮丕鬲 丕賱氐賳丕毓賷丞貙 賵兀賯賱 賰賲賷丞 賱賱胤賱亘貙 賵賲賵丕毓賷丿 丕賱鬲賳賮賷匕 賱賱氐賳丕丿賷賯 丕賱氐賱亘丞 丕賱賮丕禺乇丞 賵丨賱賵賱 丕賱鬲噩夭卅丞." />
      </Head>

      {/* Navbar: Sophisticated & Minimalist */}
      <nav className="fixed top-0 left-0 right-0 z-[100] bg-black/40 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
          <Link href="/ar" className="text-2xl font-black tracking-tighter uppercase italic text-white">Saide Packaging</Link>
          <div className="hidden lg:flex items-center space-x-12 text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">
            <Link href="/ar" className="hover:text-white transition-colors">丕賱乇卅賷爻賷丞</Link>
            <Link href="/ar/gallery" className="hover:text-white transition-colors">丿乇丕爻丕鬲 丕賱丨丕賱丞</Link>
            <Link href="/ar/products" className="text-white">丕賱賰鬲丕賱賵噩</Link>
            <Link href="/ar/blog" className="hover:text-white transition-colors">乇丐賶</Link>
          </div>
          <a href="/ar/#contact" className="bg-white text-black px-10 py-3.5 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-gray-200 shadow-xl">丕丨氐賱 毓賱賶 毓乇囟 爻毓乇</a>
        </div>
      </nav>

      <main className="pt-40 pb-24 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-[1600px] mx-auto px-6">
          <header className="mb-24">
            <h1 className="text-5xl font-black uppercase tracking-tighter mb-4 italic">賰鬲丕賱賵噩 賲禺氐氐</h1>
            <p className="text-gray-500 font-medium">丕賱賲賵丕氐賮丕鬲 丕賱賮賳賷丞 賱賱賲卮鬲乇賷丕鬲 丕賱賲賴賳賷丞 亘賷賳 丕賱卮乇賰丕鬲 (B2B).</p>
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
                        <span className="text-gold-500 text-[10px]">鈽?/span>
                        <span className="text-gold-500 font-black text-[9px] uppercase tracking-widest">{item.badge}</span>
                      </div>
                      <h3 className="text-xl font-black text-white uppercase mb-4 tracking-tight leading-tight">{item.title}</h3>
                      <p className="text-gray-500 text-xs font-medium leading-relaxed mb-8 line-clamp-3">
                        {item.desc}
                      </p>

                      {/* Technical Specs */}
                      <div className="grid grid-cols-3 gap-4 border-t border-white/5 pt-6 mt-auto">
                        <div>
                          <p className="text-[8px] font-black text-gray-600 uppercase tracking-widest mb-1">兀賯賱 賰賲賷丞 賱賱胤賱亘</p>
                          <p className="text-[10px] font-bold text-gray-300">{item.moq}</p>
                        </div>
                        <div>
                          <p className="text-[8px] font-black text-gray-600 uppercase tracking-widest mb-1">賲丿丞 丕賱鬲賳賮賷匕</p>
                          <p className="text-[10px] font-bold text-gray-300">{item.leadTime}</p>
                        </div>
                        <div>
                          <p className="text-[8px] font-black text-gray-600 uppercase tracking-widest mb-1">丕賱丿丕禺賱/丕賱賲丕丿丞</p>
                          <p className="text-[10px] font-bold text-gray-300">{item.extra}</p>
                        </div>
                      </div>

                      {/* Action */}
                      <Link href={item.link} className="mt-8 border border-white/10 hover:border-gold-500/50 py-3 text-center rounded-sm transition-all group/btn">
                        <span className="text-[9px] font-black uppercase tracking-widest text-gray-400 group-hover/btn:text-white transition-colors">
                          鈫?丕胤賱亘 毓乇囟 爻毓乇 賱賴匕丕 丕賱賲賳鬲噩
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
             <p className="text-xl font-black tracking-tighter uppercase italic text-white/40">Saide Packaging</p>
             <p className="text-[10px] font-bold uppercase tracking-widest text-gray-600">丨賱賵賱 鬲氐賳賷毓 賲鬲賲賷夭丞 賱賱卮乇賰丕鬲.</p>
          </div>
          <p className="text-[10px] font-bold uppercase tracking-widest text-gray-600">&copy; 2026 爻丕賷丿 亘丕賰賷賳噩 廿鬲卮 賰賷 丕賱賲丨丿賵丿丞. 賲毓鬲賲丿 賲賳 FSC 賵 BSCI.</p>
        </div>
      </footer>
    </div>
  );
};

export default ProductsPage;
