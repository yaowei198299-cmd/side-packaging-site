import React, { useState } from 'react';

const InquiryForm = ({ productTitle }: { productTitle?: string }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    company: '',
    industry: '',
    message: productTitle ? `I'm interested in ${productTitle}. ` : ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // track event
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'form_submission', {
        'event_category': 'Engagement',
        'event_label': 'Quote',
        'value': formData.company
      });
    }
    setSubmitted(true);
    // In a real app, this would send to a backend
  };

  if (submitted) {
    return (
      <div className="bg-white p-12 md:p-16 rounded-[3rem] shadow-2xl max-w-5xl mx-auto text-center">
        <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        <h2 className="text-3xl font-black mb-4 uppercase tracking-tighter">Thank you, {formData.name}!</h2>
        <p className="text-gray-500 font-medium leading-relaxed mb-8">
          Your inquiry has been received. Andy will contact you via WhatsApp/Email within 24 hours with a custom quotation.
        </p>
        <button 
          onClick={() => setSubmitted(false)}
          className="bg-black text-white px-8 py-3 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-gray-800 transition-all"
        >
          Send Another Inquiry
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white p-12 md:p-16 rounded-[3rem] shadow-2xl max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Request a Tailored Quote</h2>
      <p className="text-gray-600 mb-12">
        Direct from factory. Our specialists will provide a tailored quotation and packaging solution within 24 hours.
      </p>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
          <div className="space-y-2">
            <label className="block text-sm font-bold text-gray-700 uppercase tracking-widest">Name *</label>
            <input 
              type="text" 
              required
              placeholder="Your Name"
              className="w-full px-6 py-4 border border-gray-100 bg-gray-50 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition text-gray-600 font-medium"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-bold text-gray-700 uppercase tracking-widest">Email *</label>
            <input 
              type="email" 
              required
              placeholder="Your Email"
              className="w-full px-6 py-4 border border-gray-100 bg-gray-50 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition text-gray-600 font-medium"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-bold text-gray-700 uppercase tracking-widest">Phone *</label>
            <input 
              type="text" 
              required
              placeholder="Phone / WhatsApp"
              className="w-full px-6 py-4 border border-gray-100 bg-gray-50 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition text-gray-600 font-medium"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-bold text-gray-700 uppercase tracking-widest">Country</label>
            <input 
              type="text" 
              placeholder="Your Country"
              className="w-full px-6 py-4 border border-gray-100 bg-gray-50 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition text-gray-600 font-medium"
              value={formData.country}
              onChange={(e) => setFormData({...formData, country: e.target.value})}
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-bold text-gray-700 uppercase tracking-widest">Company</label>
            <input 
              type="text" 
              placeholder="Company Name"
              className="w-full px-6 py-4 border border-gray-100 bg-gray-50 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition text-gray-600 font-medium"
              value={formData.company}
              onChange={(e) => setFormData({...formData, company: e.target.value})}
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-bold text-gray-700 uppercase tracking-widest">Industry</label>
            <input 
              type="text" 
              placeholder="Business Type"
              className="w-full px-6 py-4 border border-gray-100 bg-gray-50 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition text-gray-600 font-medium"
              value={formData.industry}
              onChange={(e) => setFormData({...formData, industry: e.target.value})}
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-bold text-gray-700 uppercase tracking-widest">Requirements *</label>
          <textarea 
            rows={4}
            required
            placeholder="Please describe your requirements (size, quantity, material, application)..."
            className="w-full px-6 py-4 border border-gray-100 bg-gray-50 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition resize-none text-gray-600 font-medium"
            value={formData.message}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
          ></textarea>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-8">
          <button type="submit" className="bg-black text-white px-12 py-5 rounded-full font-black text-sm uppercase tracking-widest hover:bg-gray-800 transition-all shadow-xl">
            Get a Factory Quote
          </button>
          <div className="flex items-center gap-4 text-gray-400">
            <div className="flex -space-x-2">
              {[1,2,3].map(i => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200"></div>
              ))}
            </div>
            <p className="text-[10px] font-bold uppercase tracking-widest">Joined 500+ global brands</p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default InquiryForm;
