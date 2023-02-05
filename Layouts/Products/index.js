import React from 'react'
import styles from './Products.module.css'
import { blurData, infoProduct } from '../../helpers/info'
import { Card } from '../../Components'
import Image from 'next/image'
import paperGray from '../../public/static/paperGray1.png'

const index = () => {
  return (
    <section className={styles.sectionProducts} id="productos">
      <div className={styles.overlayGray}></div>
      <div className={styles.paper}>
        <Image
          src={paperGray}
          objectFit="cover"
          alt="papel decoracion"
          blurDataURL={blurData}
          placeholder="blur"
          layout="fill"
        />
      </div>
      <div className={styles.productsContainer}>
        <div className={styles.containerHeading}>
          <h2 className={styles.productsHeading}>Productos</h2>
          <p>
            En Agrointegral VG encontraras variedad de productos para tus
            animales y el campo.
          </p>
        </div>
        <div className={styles.listProducts}>
          {infoProduct.map((info) => (
            <Card key={info.id} props={info} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default index
