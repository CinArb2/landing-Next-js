import React from 'react'
import styles from './CardServices.module.css'
import Image from 'next/image'

const index = ({children, icon}) => {
  return (
    <div className={styles.container}>
      <div className={styles.containerIcon}>
        <Image
          src={`/static/${icon}.jpg`}
          layout="fill"
          objectFit="cover"
          priority
          alt="card image"
          loading="lazy"
        />
      </div>
      <div className={styles.containerText}>
        <p>{children}</p>
      </div>
    </div>
  )
}

export default index