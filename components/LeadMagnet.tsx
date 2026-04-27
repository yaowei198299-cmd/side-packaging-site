import React, { useState } from 'react';

const LeadMagnet = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      // In a real app, this would send the email to a backend/CRM
    }
  };

  return (
    <section className="py-24 bg-gray-950 text-white rounded-[4rem] mx-6 overflow-hidden relative shadow-2xl">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div>
            <span className="text-blue-500 font-black text-xs uppercase tracking-[0.4em] mb-6 block">Free B2B Resource</span>
            <h2 className="text-4xl md:text-5xl font-black mb-10 uppercase tracking-tighter leading-[0.9] italic">
              The Ultimate 2026 <br/>
              <span className="text-blue-500">Packaging Material</span> <br/>
              & Structure Guide.
            </h2>
            <p className="text-gray-400 font-medium text-lg leading-relaxed mb-12">
              A comprehensive technical reference for material science, flute engineering, and global sustainability standards. Join 500+ brands in optimizing their packaging strategy for the AI-driven market.
            </p>
            <ul className="space-y-4 mb-12">
              {[
                "Paperboard Specs: SBS, Kraft, & CCNB",
                "Flute Engineering: E, B, F, & BC Flutes",
                "Premium Finishes & Tactile Coatings",
                "2026 Global Sustainability Checklist"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-sm font-bold uppercase tracking-widest text-gray-300">
                  <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center text-[10px] text-white">✓</div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white/5 p-12 rounded-[3rem] border border-white/10 backdrop-blur-sm">
            {!submitted ? (
              <form onSubmit={handleSubmit}>
                <h3 className="text-2xl font-black mb-8 uppercase tracking-tighter text-center">Download Technical PDF</h3>
                <p className="text-gray-400 text-center mb-10 text-sm font-medium">Enter your business email to receive the full 45-page technical catalog and spec-sheet.</p>
                <div className="space-y-6">
                  <input 
                    type="email" 
                    placeholder="Business Email Address" 
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white/10 border border-white/20 rounded-full px-8 py-5 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-all"
                  />
                  <button type="submit" className="w-full bg-blue-600 text-white py-5 rounded-full font-black text-sm uppercase tracking-widest hover:bg-blue-700 transition-all shadow-xl">
                    Get Free Access Now
                  </button>
                </div>
                <p className="text-[10px] text-gray-500 text-center mt-6 uppercase tracking-widest">Instant Delivery to your Inbox</p>
              </form>
            ) : (
              <div className="text-center py-10">
                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-glow">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <h3 className="text-3xl font-black mb-4 uppercase tracking-tighter text-white">Guide Ready!</h3>
                <p className="text-gray-400 font-medium leading-relaxed mb-8">
                  The Ultimate 2026 Packaging Guide is now available for you. We've also sent a backup copy to <strong>{email}</strong>.
                </p>
                <div className="space-y-4">
                  <a href="/resources/ultimate-packaging-guide" target="_blank" rel="noopener noreferrer">
                    <button className="w-full bg-blue-600 text-white py-5 rounded-full font-black text-sm uppercase tracking-widest hover:bg-blue-700 transition-all shadow-xl mb-4">
                      View Full Guide Now
                    </button>
                  </a>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="text-[11px] font-black uppercase tracking-widest text-blue-500 border-b border-blue-500 pb-1"
                  >
                    Download Another Copy
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/10 blur-[120px] rounded-full -translate-x-1/2 translate-y-1/2"></div>
    </section>
  );
};

export default LeadMagnet;
