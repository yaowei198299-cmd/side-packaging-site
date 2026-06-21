import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import LeadMagnet from '../../components/LeadMagnet';
import InquiryForm from '../../components/InquiryForm';
import WhatsAppButton from '../../components/WhatsAppButton';
import Footer from '../../components/Footer';

const HomePage = () => {
  const featuredProducts = [
    {
      title: "Caja con Cierre Magnético",
      desc: "Embalaje rígido de lujo con cierre magnético.",
      image: "https://sc04.alicdn.com/kf/H28aff4222df5454fbde2704bbee757e90.jpg?v=1",
      link: "/products/luxury-magnetic-box"
    },
    {
      title: "Caja de Cajón",
      desc: "Elegantes soluciones de embalaje con cajón deslizante.",
      image: "https://sc04.alicdn.com/kf/Hdf03eb602caa4dd4bce2e15c8f77cb1aA.jpg?v=1",
      link: "/products/custom-drawer-box"
    },
    {
      title: "Caja de Envío (Mailer)",
      desc: "Experiencia de embalaje premium para comercio electrónico.",
      image: "https://sc04.alicdn.com/kf/H4d0f3440368f42ec86490f55e64be502P.jpg?v=1",
      link: "/products/premium-mailer-box"
    }
  ];

  const industrySolutions = [
    {
      title: "Soluciones de Embalaje Cosmético",
      desc: "Eleve su marca con cajas rígidas premium e insertos ecológicos.",
      image: "https://sc02.alicdn.com/kf/Ad479d4d9f3944161bf481e0ad9adc1feM.png",
      link: "/solutions/cosmetic-packaging",
      tag: "Lujo"
    },
    {
      title: "Embalaje para Alimentos y Panadería",
      desc: "Cajas de papel conformes con la FDA con recubrimientos resistentes al aceite.",
      image: "https://s.alicdn.com/@sc04/kf/H59aa2a5ada2f4b24bd4a9746673a6fc0n/Customizable-Biodegradable-Food-Grade-Rigid-Cake-Box.jpg_480x480.jpg",
      link: "/solutions/food-bakery-packaging",
      tag: "Conforme con FDA"
    },
    {
      title: "Comercio Electrónico y Cajas de Envío",
      desc: "Cajas de envío corrugadas de alta resistencia para logística global.",
      image: "https://sc02.alicdn.com/kf/A3645295ca51c411e8b875eb53436ec490.png",
      link: "/solutions/ecommerce-mailer-boxes",
      tag: "Duradero"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-blue-100">
      <Head>
        <title>Soluciones de Embalaje de Lujo | Side Packaging HK Limited</title>
        <meta name="description" content="Soluciones de embalaje de lujo de primera calidad. Cajas magnéticas personalizadas, cajas de cajón y sobres para marcas globales. Directo de fábrica desde 2006." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Floating WhatsApp */}
      <a href="https://wa.me/8613699786538" className="fixed bottom-8 right-8 z-[100] bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
      </a>

      {/* Navbar */}
      <nav className="border-b border-gray-100 bg-white/95 backdrop-blur-md sticky top-0 z-[80]">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/es" className="text-2xl font-black tracking-tighter uppercase italic">Side Packaging</Link>
          <div className="hidden lg:flex items-center space-x-8 text-[11px] font-bold uppercase tracking-widest text-gray-500">
            <Link href="/es" className="text-black border-b-2 border-black pb-1">Inicio</Link>
            <Link href="/products" className="hover:text-black transition-colors">Productos</Link>
            <Link href="/blog" className="hover:text-black transition-colors">Blog</Link>
            <a href="#contact" className="hover:text-black transition-colors">Contacto</a>
          </div>
          <a href="#contact" className="bg-black text-white px-8 py-3 rounded-full text-[11px] font-bold uppercase tracking-widest hover:bg-gray-800 transition-all">Presupuesto</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gray-50 py-32 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-6xl font-black uppercase tracking-tighter mb-8 leading-[0.9]">Embalaje Personalizado <br/><span className="text-blue-600">que Eleva tu Marca</span></h1>
          <p className="text-xl text-gray-500 mb-12">Soluciones de embalaje de lujo para marcas premium en todo el mundo. Directo de fábrica desde 2006.</p>
          <div className="flex justify-center gap-4">
            <Link href="/products" className="bg-black text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest hover:bg-gray-800 shadow-xl transition-all">Explorar Embalaje</Link>
            <a href="#contact" className="bg-white text-black border-2 border-black px-10 py-5 rounded-full font-bold uppercase tracking-widest hover:bg-gray-50 transition-all">Presupuesto Gratis</a>
          </div>
        </div>
      </section>

      {/* Featured Products - New from Catalog */}
      <section className="py-24 max-w-7xl mx-auto px-6" id="products">
        <h2 className="text-4xl font-black uppercase tracking-tighter mb-16 text-center">Tipos de Embalaje Destacados</h2>
        <div className="grid md:grid-cols-3 gap-12">
          {featuredProducts.map((p, i) => (
            <div key={i} className="group border border-gray-100 rounded-3xl p-8 hover:shadow-2xl transition-all hover:-translate-y-2 bg-white">
              <div className="aspect-square bg-gray-50 rounded-2xl flex items-center justify-center mb-6 overflow-hidden">
                <img src={p.image} alt={p.title} className="w-1/2 h-1/2 object-contain group-hover:scale-110 transition-transform duration-500" />
              </div>
              <h3 className="text-2xl font-black uppercase mb-4 tracking-tight">{p.title}</h3>
              <p className="text-gray-500 mb-8 font-medium">{p.desc}</p>
              <Link href={p.link} className="inline-block bg-black text-white px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest">Ver Detalles</Link>
            </div>
          ))}
        </div>
      </section>

      {/* Premium Finishes - From Catalog */}
      <section className="py-24 bg-black text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-black uppercase tracking-tighter mb-16 text-center">Acabados Premium</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {['Estampado en Caliente', 'Relieve', 'Tacto Suave', 'Barniz UV'].map((f, i) => (
              <div key={i} className="border border-white/20 rounded-2xl py-12 text-center text-xl font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all cursor-default">
                {f}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainable Section - From Catalog */}
      <section className="py-24 bg-gray-50 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-black uppercase tracking-tighter mb-8">Embalaje Sostenible</h2>
          <p className="text-xl text-gray-500 font-bold uppercase tracking-widest">
            Papel certificado FSC · materiales reciclables · producción ecológica
          </p>
        </div>
      </section>

      {/* Industry Solutions - Existing */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-black uppercase tracking-tighter mb-16">Soluciones por Industria</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {industrySolutions.map((s, i) => (
              <div key={i} className="relative group rounded-3xl overflow-hidden h-96 shadow-lg">
                <img src={s.image} alt={s.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-8 flex flex-col justify-end">
                  <span className="text-[10px] font-bold text-white uppercase tracking-widest mb-2 bg-blue-600 self-start px-3 py-1 rounded-full">{s.tag}</span>
                  <h3 className="text-2xl font-black text-white uppercase mb-2">{s.title}</h3>
                  <Link href={s.link} className="text-white text-[11px] font-bold uppercase tracking-widest border-b border-white self-start pb-1 hover:text-blue-400 hover:border-blue-400 transition-colors">Saber más</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / Inquiry */}
      <section id="contact" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24">
            <div>
              <h2 className="text-6xl font-black uppercase tracking-tighter leading-[0.9] mb-8">Obtener Presupuesto Gratis.</h2>
              <p className="text-xl text-gray-500 mb-12 font-medium">¿Listo para elevar el embalaje de su marca? Cuéntenos sobre su proyecto y nuestros expertos le proporcionarán un análisis de costos personalizado en menos de 24 horas.</p>
              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 font-bold">A</div>
                  <div>
                    <h4 className="font-bold uppercase tracking-tight">Envíanos un email</h4>
                    <p className="text-gray-500">jocelyn@saidepackaging.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 font-bold">W</div>
                  <div>
                    <h4 className="font-bold uppercase tracking-tight">WhatsApp</h4>
                    <p className="text-gray-500">+86-13699786538</p>
                  </div>
                </div>
              </div>
            </div>
            <InquiryForm lang="es" />
          </div>
        </div>
      </section>

      <Footer />

      <WhatsAppButton />
    </div>
  );
};

export default HomePage;
