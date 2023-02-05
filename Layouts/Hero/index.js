import React from 'react'
import { Button, Video } from '../../Components'
import styles from './Hero.module.css'
import { useMediaQuery } from 'react-responsive'
import Image from 'next/image'
import { blurData } from '../../helpers/info'
import heroPhone from '../../public/static/heroPhone1.avif'

const index = () => {
  const isMobil = useMediaQuery({
    query: '(max-width: 650px)',
  })

  return (
    <section className={styles.containerHero}>
      <div className={styles.heroBody}>
        <h1 className={styles.heroTitle}>Bienvenidos a Agrointegral VG </h1>
        <p className={styles.heroText}>
          Soluciones agropecuarias y veterinarias a tu alcance y mucho más!
        </p>
        <Button orange>Contactanos</Button>
      </div>

      {isMobil && <div className={styles.backdrop}></div>}

      {isMobil ? (
        <div className={styles.containerImage}>
          <Image
            src={heroPhone}
            layout="fill"
            objectFit="cover"
            priority
            alt="hero"
            blurDataURL={blurData}
            placeholder="blur"
          />
        </div>
      ) : (
        <Video />
      )}
    </section>
  )
}

export default index
