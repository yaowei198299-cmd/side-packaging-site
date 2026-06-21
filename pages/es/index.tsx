import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import InquiryForm from '../../components/InquiryForm';
import WhatsAppButton from '../../components/WhatsAppButton';
import Footer from '../../components/Footer';

const HomePageEs = () => {
  const group1 = "https://sc01.alicdn.com/kf/A3a4c9b4df52c4178b9387cd98246b8426.png";
  const group2 = "https://sc01.alicdn.com/kf/Ab4aec4b7e81744da97c367f74b3ed6b1K.png";

  const categories = [
    { title: "BOLSAS DE MANO", label: "Bolsas de mano", image: group1, x: "0%", link: "/products" },
    { title: "CAJAS DE PAPEL", label: "Cajas de papel", image: group1, x: "33.33%", link: "/products" },
    { title: "ETIKETTEN AUFKLEBER", label: "Etiquetas adhesivas", image: group1, x: "66.66%", link: "/products" },
    { title: "PAPEL DE SEDA", label: "Papel de seda", image: group1, x: "100%", link: "/products" },
    { title: "CAJAS DE LUJO", label: "Cajas de lujo", image: group2, x: "0%", link: "/products/magnetic-gift-boxes" },
    { title: "CAJAS DE EXHIBICIÓN", label: "Cajas de exhibición", image: group2, x: "33.33%", link: "/products" },
    { title: "CAJAS DE ENVÍO", label: "Cajas de envío", image: group2, x: "66.66%", link: "/products/custom-mailer-boxes" },
    { title: "TARJETAS DE AGRADECIMIENTO", label: "Tarjetas de agradecimiento", image: group2, x: "100%", link: "/products" },
  ];

  const faqs = [
    {
      q: "¿Cuál es su cantidad mínima de pedido (MOQ)?",
      a: "Nuestro MOQ estándar comienza en 500 unidades para cajas rígidas de lujo y cajas de regalo magnéticas. Para cajas de envío de comercio electrónico, podemos aceptar pedidos a partir de 100 unidades para apoyar a las marcas en crecimiento."
    },
    {
      q: "¿Cómo puedo reducir mis costos de embalaje?",
      a: "Ofrecemos un análisis técnico gratuito de reducción de costos. Al optimizar las estructuras de las cajas, el grosor del material y los diseños de embalaje plano, normalmente ayudamos a los clientes a ahorrar entre un 10 y un 30 % en producción y envío."
    },
    {
      q: "¿Ofrecen soporte técnico y de troquelado gratuito?",
      a: "Sí, cada consulta incluye soporte técnico profesional gratuito. Nuestros ingenieros proporcionarán dibujos técnicos para asegurar que su diseño encaje perfectamente antes de la producción en masa."
    },
    {
      q: "¿Su embalaje cuenta con certificación FSC?",
      a: "Absolutamente. Somos una fábrica certificada por FSC, lo que garantiza que todos los materiales provienen de bosques gestionados de forma responsable. Esto es crucial para las marcas que ingresan a los mercados de EE. UU. y la UE."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-gold-500 overflow-x-hidden">
      <Head>
        <title>Saide Packaging | Fabricante Premium de Cajas de Embalaje Personalizadas en China</title>
        <meta name="description" content="Directo de fábrica: Cajas magnéticas, rígidas y de envío de lujo con logotipo. MOQ desde 100 unidades. Maqueta 3D gratuita. Envío global." />
      </Head>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-[100] bg-black/40 backdrop-blur-2xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/es" className="text-xl font-black tracking-tighter uppercase italic text-white font-montserrat">Saide Packaging</Link>
          <div className="hidden lg:flex items-center space-x-10 text-[9px] font-black uppercase tracking-[0.3em] text-gray-400">
            <Link href="/products" className="hover:text-white transition-colors">Catálogo</Link>
            <Link href="/gallery" className="hover:text-white transition-colors">Casos de Éxito</Link>
            <Link href="/about-founder" className="hover:text-white transition-colors">Fundadores</Link>
          </div>
          <a href="#contact" className="bg-[#C9A84C] text-black px-8 py-2.5 rounded-full text-[9px] font-black uppercase tracking-widest hover:bg-white transition-all shadow-xl font-montserrat">Presupuesto Gratis</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20 bg-[#0A0A0F]">
        <div className="absolute top-0 bottom-0 right-0 z-0 flex justify-end items-center w-full lg:w-[55%] h-full">
          <img 
            src="https://sc01.alicdn.com/kf/A50266d485601490f977db118833d7fb4a.png" 
            alt="Colaje de Embalaje de Lujo" 
            className="h-auto w-full max-h-[85%] object-contain object-right pr-6 lg:pr-20 animate-in fade-in zoom-in-95 duration-1000"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center text-left">
          <div className="animate-in fade-in slide-in-from-left-10 duration-1000">
            <div className="inline-block border border-[#C9A84C]/30 bg-black/50 backdrop-blur-md px-4 py-1.5 rounded-full mb-8">
              <span className="text-[10px] font-bold text-[#C9A84C] uppercase tracking-[0.2em] flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#C9A84C] rounded-full animate-pulse" />
                Fabricante Premium de Cajas de Regalo en China · Est. 2006
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] mb-8 italic font-montserrat">
              Cajas de Embalaje <br/>
              <span className="text-white">Personalizadas</span> <br/>
              en China
            </h1>

            <p className="text-lg md:text-xl text-white/60 mb-8 max-w-xl font-medium tracking-tight">
              Directo de Fábrica: Cajas Magnéticas, Rígidas y de Envío con Logotipo Personalizado
            </p>

            <p className="text-sm font-black text-[#C9A84C] uppercase tracking-[0.2em] mb-10">
              MOQ desde 100 unidades • Maqueta 3D gratuita • Envío global
            </p>

            <div className="flex flex-wrap gap-3 mb-12">
              {[
                "MOQ: 100 uds",
                "Entrega: 15 días",
                "Envío a 50+ países",
                "Diseño gratuito"
              ].map((pill, i) => (
                <span key={i} className="px-5 py-2.5 bg-white/5 border border-white/10 rounded-full text-[10px] font-black uppercase tracking-widest text-white/80">
                  {pill}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
               <a href="/inquiry" className="inline-block bg-[#C9A84C] text-black px-12 py-5 rounded-full font-black uppercase tracking-widest text-sm hover:scale-105 transition-all shadow-[0_0_30px_rgba(201,168,76,0.3)] font-montserrat">
                 Precios de Fábrica (Ahorre 30-50%)
               </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="bg-white/5 border-y border-white/5 py-12 relative z-20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {[
            { label: "20+ Años", sub: "Experto en Producción" },
            { label: "20.000 m²", sub: "Planta de Fabricación" },
            { label: "FSC & BSCI", sub: "Estándares Globales" },
            { label: "50+ Países", sub: "Logística Global" }
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
             <span className="text-[#C9A84C] text-[10px] font-black uppercase tracking-[0.5em] mb-4 block">Categorías de Productos</span>
             <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter italic font-montserrat">Diseñado para el Lujo.</h2>
          </header>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-20">
            {categories.map((cat, i) => (
              <Link key={i} href="/products" className="group block text-center">
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
            <span className="text-[#C9A84C] text-[10px] font-black uppercase tracking-[0.5em] mb-4 block">Preguntas de Expertos</span>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter italic font-montserrat">Inteligencia de Embalaje.</h2>
          </header>

          <div className="space-y-12">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-white/5 pb-12 group text-left">
                <h3 className="text-xl font-black text-white uppercase tracking-tighter italic mb-4 group-hover:text-[#C9A84C] transition-colors font-montserrat">P: {faq.q}</h3>
                <p className="text-gray-400 font-medium leading-relaxed uppercase tracking-wide text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form Section */}
      <section id="contact" className="py-24 bg-[#0A0A0F] border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <InquiryForm lang="es" />
        </div>
      </section>

      <Footer />

      <WhatsAppButton />
    </div>
  );
};

export default HomePageEs;
