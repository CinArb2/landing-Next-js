import React from 'react'
import styles from './About.module.css'
import Image from 'next/image'
import { BsFillCheckCircleFill } from 'react-icons/bs'
import { blurData } from '../../helpers/info.js'
import rippedPaper from '../../public/static/rippedPaper2.png'
import veterinarian from '../../public/static/veterinarian.webp'
import cows from '../../public/static/cows.webp'

const index = () => {
  return (
    <section className={styles.sectionAbout} id="about">
      <div className={styles.paper}>
        <Image
          src={rippedPaper}
          objectFit="cover"
          alt="papel decoracion"
          blurDataURL={blurData}
          placeholder="blur"
          layout="fill"
        />
      </div>
      <article className={styles.containerAbout}>
        <div className={styles.galleryImages}>
          <div className={styles.containerImage}>
            <Image
              src={veterinarian}
              layout="fill"
              objectFit="cover"
              priority
              alt="perro en veterinaria"
              blurDataURL={blurData}
              placeholder="blur"
            />
          </div>
          <div className={styles.containerImage}>
            <Image
              src={cows}
              layout="fill"
              objectFit="cover"
              alt="vacas"
              blurDataURL={blurData}
              placeholder="blur"
            />
          </div>
        </div>
        <div className={styles.aboutTextContainer}>
          <h2 className={styles.aboutHeading}>Sobre nosotros</h2>
          <p>
            Somos una empresa que tiene como función la comercialización de
            servicios y productos agrícolas, pecuarios y veterinarios,
            encaminados a satisfacer las necesidades de nuestros clientes, con
            asistencia permanente, precios justos, garantizando el crecimiento
            sostenible de las producciones y del cuidado animal{' '}
          </p>
          <div className={styles.containerList}>
            <div className={styles.listItem}>
              <BsFillCheckCircleFill className={styles.icon} />
              <p>Excelente servicio</p>
            </div>
            <div className={styles.listItem}>
              <BsFillCheckCircleFill className={styles.icon} />
              <p>Precios justos</p>
            </div>
          </div>
        </div>
      </article>
    </section>
  )
}

export default index
