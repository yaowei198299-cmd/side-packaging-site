import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Script from 'next/script'
import InquiryModal from '../components/InquiryModal'
import WhatsAppButton from '../components/WhatsAppButton'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* Google Analytics 4 */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-GZ0L9M69EL"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-GZ0L9M69EL');
        `}
      </Script>
      <Component {...pageProps} />
      <InquiryModal />
      <WhatsAppButton />
    </>
  )
}

export default MyApp

