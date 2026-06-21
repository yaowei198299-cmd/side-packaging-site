import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-y-16 gap-x-12">
        
        {/* Brand Column */}
        <div className="col-span-2 lg:col-span-2 space-y-8">
          <div className="flex items-center gap-3">
             <div className="w-8 h-8 bg-[#C9A84C] flex items-center justify-center rounded-sm font-black text-black text-sm">SP</div>
             <span className="text-xl font-black tracking-tighter uppercase italic font-montserrat">Saide Packaging</span>
          </div>
          <p className="text-gray-500 text-sm font-medium leading-relaxed max-w-sm uppercase tracking-wider">
            China's trusted factory-direct manufacturer of premium gift boxes. Serving 500+ global brands in 50+ countries since 2006.
          </p>
        </div>

        {/* Resources */}
        <div className="space-y-8">
          <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white">Resources</h4>
          <ul className="space-y-5 text-gray-500 text-xs font-bold uppercase tracking-widest">
            <li><Link href="/gallery" className="hover:text-[#C9A84C] transition-colors">Case Studies</Link></li>
            <li><Link href="/blog" className="hover:text-[#C9A84C] transition-colors">Price Guide</Link></li>
            <li><Link href="/blog" className="hover:text-[#C9A84C] transition-colors">MOQ Guide</Link></li>
            <li><Link href="/gallery" className="hover:text-[#C9A84C] transition-colors">Certifications</Link></li>
          </ul>
        </div>

        {/* Top Categories */}
        <div className="space-y-8">
          <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white">Top Categories</h4>
          <ul className="space-y-5 text-gray-500 text-xs font-bold uppercase tracking-widest">
            <li><Link href="/products" className="hover:text-[#C9A84C] transition-colors">Jewelry Packaging</Link></li>
            <li><Link href="/products/magnetic-gift-boxes" className="hover:text-[#C9A84C] transition-colors">Watch Boxes</Link></li>
            <li><Link href="/products/custom-mailer-boxes" className="hover:text-[#C9A84C] transition-colors">Eco-friendly Solutions</Link></li>
            <li><Link href="/products/magnetic-gift-boxes" className="hover:text-[#C9A84C] transition-colors">Magnetic Gift Boxes</Link></li>
          </ul>
        </div>

        {/* Company */}
        <div className="space-y-8">
          <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white">Company</h4>
          <ul className="space-y-5 text-gray-500 text-xs font-bold uppercase tracking-widest">
            <li><Link href="/about-founder" className="hover:text-[#C9A84C] transition-colors">About Us</Link></li>
            <li><Link href="/inquiry" className="hover:text-[#C9A84C] transition-colors">FAQ & Support</Link></li>
            <li><Link href="/inquiry" className="hover:text-[#C9A84C] transition-colors">Get a Quote</Link></li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
        <p className="text-[10px] font-bold uppercase tracking-widest text-gray-600">
          © 2026 Saide Packaging HK Limited. All rights reserved.
        </p>
        
        {/* Multi-language links */}
        <div className="flex flex-wrap justify-center gap-8 text-[9px] font-black uppercase tracking-[0.2em] text-gray-500">
          <Link href="/" className="hover:text-[#C9A84C] transition-colors">English</Link>
          <Link href="/ar" className="hover:text-[#C9A84C] transition-colors">Arabic / العربية</Link>
          <Link href="/de" className="hover:text-[#C9A84C] transition-colors">German / Deutsch</Link>
          <Link href="/fr" className="hover:text-[#C9A84C] transition-colors">French / Français</Link>
          <Link href="/es" className="hover:text-[#C9A84C] transition-colors">Spanish / Español</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
