import React from 'react';

const WhatsAppButton = () => {
  const url = `https://wa.me/message/WRDEFMR2ETUJH1`;

  return (
    <>
      {/* WhatsApp Green Icon Button - FIXED BOTTOM LEFT */}
      <a 
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-12 left-12 z-[1000] bg-[#25D366] text-white p-5 rounded-full shadow-2xl hover:scale-110 transition-transform group animate-bounce-slow"
        aria-label="Chat on WhatsApp"
      >
        <svg 
          className="w-8 h-8" 
          fill="currentColor" 
          viewBox="0 0 24 24"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.411-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>

      {/* Gold "Get a Free Quote" Button - FIXED BOTTOM RIGHT */}
      <a 
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-12 right-12 z-[1000] bg-[#C9A84C] text-black px-10 py-5 rounded-full shadow-2xl hover:scale-105 hover:bg-white transition-all flex items-center gap-3 group whitespace-nowrap"
      >
        <span className="text-[11px] font-black uppercase tracking-[0.2em] italic font-montserrat">Get a Free Quote</span>
        <svg className="w-4 h-4 text-black group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 24 24">
          <path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 8.25c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z" />
        </svg>
      </a>
    </>
  );
};

export default WhatsAppButton;
