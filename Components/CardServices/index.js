import React from 'react'
import styles from './CardServices.module.css'
import Image from 'next/image'
import { blurData } from '../../helpers/info.js'

const index = ({ children, icon }) => {
  return (
    <div className={styles.container}>
      <div className={styles.containerIcon}>
        <Image
          src={`/static/${icon}.jpg`}
          layout="fill"
          objectFit="cover"
          alt="card image"
          loading="lazy"
          blurDataURL={blurData}
          placeholder="blur"
        />
      </div>
      <div className={styles.containerText}>
        <p>{children}</p>
      </div>
    </div>
  )
}

export default index
