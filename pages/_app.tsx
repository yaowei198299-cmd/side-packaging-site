import '../styles/globals.css'
import type { AppProps } from 'next/app'
import InquiryModal from '../components/InquiryModal'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <InquiryModal />
    </>
  )
}

export default MyApp
