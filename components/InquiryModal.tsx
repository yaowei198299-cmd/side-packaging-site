import React, { useState, useEffect, useCallback } from 'react';
import InquiryForm from './InquiryForm';

const InquiryModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [productTitle, setProductTitle] = useState('');

  const openModal = useCallback((e?: any) => {
    if (e && e.detail) {
      setProductTitle(e.detail.productTitle || '');
    }
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    document.body.style.overflow = 'unset';
  }, []);

  useEffect(() => {
    window.addEventListener('open-inquiry-modal', openModal);
    return () => window.removeEventListener('open-inquiry-modal', openModal);
  }, [openModal]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-[3rem] shadow-2xl animate-in zoom-in-95 duration-300">
        <button 
          onClick={closeModal}
          className="absolute top-8 right-8 z-10 p-2 text-gray-400 hover:text-black transition-colors"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <div className="p-2 md:p-6">
          <InquiryForm productTitle={productTitle} />
        </div>
      </div>
    </div>
  );
};

export const triggerInquiryModal = (productTitle?: string) => {
  const event = new CustomEvent('open-inquiry-modal', { detail: { productTitle } });
  window.dispatchEvent(event);
};

export default InquiryModal;

