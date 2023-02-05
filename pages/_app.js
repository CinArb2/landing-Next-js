import '../styles/globals.css'
import { DefaultSeo } from 'next-seo'
import React from 'react'

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <DefaultSeo
        title="Agrointegral Vg"
        description="Comercialización de servicios y productos agrícolas, pecuarios y veterinarios"
        openGraph={{
          type: 'website',
          locale: 'es',
          url: 'https:///www.agrointegralvg.com',
          siteName: 'Agrointegralvg',
          title: 'Agrointegral Vg',
          description:
            'Comercialización de servicios y productos agrícolas, pecuarios y veterinarios',
          images: [
            {
              url: 'https://www.agrointegralvg.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-200.63f21411.png&w=1920&q=75',
              width: 250,
              height: 250,
              alt: 'Agrointegral Logo',
            },
          ],
        }}
      />
      <Component {...pageProps} />
    </React.Fragment>
  )
}

export default MyApp
