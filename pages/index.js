import Head from 'next/head'
import { FloatingBtn } from '../Components/index.js'
import { Hero, Header, About, Products, Services, Footer } from '../Layouts/index.js'

export default function Home() {
  return (
    <>
      <Head>
        <title>Agrointegral VG</title>
        <meta name="description" content="Comercialización de servicios y productos agrícolas, pecuarios y veterinarios" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <main>
        <Hero />
        <About />
        <Products />
        <Services />
      </main>
      <Footer />
      <FloatingBtn/>
    </>
  )
}
