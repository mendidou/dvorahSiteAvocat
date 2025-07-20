import '../styles/globals.css'
import { appWithTranslation } from 'next-i18next'
import Head from 'next/head'
import Script from 'next/script'
import ColorManager from '../components/ColorManager'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <Script src="/data.js" strategy="beforeInteractive" />
      </Head>
      <ColorManager />
      <Component {...pageProps} />
    </>
  )
}

export default appWithTranslation(MyApp)