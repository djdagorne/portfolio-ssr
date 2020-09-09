import { useState } from 'react'

import '../styles/style.css'

import Footer from './components/footer'
import Nav from './components/nav'
import Head from 'next/head'

function MyApp ({ Component, pageProps }) {
  const [nav, setNav] = useState(false)
  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Dexter Dagorne</title>
      </Head>
      <body className={nav ? 'nav-open' : null}>
        <Nav handleNav={handleNav} />
        <Component handleNav={handleNav} {...pageProps} />
        <Footer />
      </body>
    </>
  )
}

export default MyApp
