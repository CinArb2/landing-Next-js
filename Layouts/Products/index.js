import React from 'react'
import styles from './Products.module.css'
import { infoProduct } from '../../helpers/info'
import { Card } from '../../Components'

const index = () => {
  return (
    <section className={styles.sectionProducts} id="productos">
      <div className={styles.overlayGray}></div>
      <div className={styles.paper}>
        <img src="/static/paperGray1.png" alt="papel decoracion" />
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
