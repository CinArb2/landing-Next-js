import React from 'react'
import styles from './Card.module.css'
import Image from 'next/image'

const index = ({props}) => {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.containerImage}>
        <Image
          src={props.image}
          layout="fill"
          objectFit="cover"
          alt="card image"
          loading="lazy"
        />
      </div>
      <div className={styles.cardBody}>
        <div className={styles.containerIcon}>
          <img src={props.icon} alt="icono productos" />
        </div>
        <h3>{props.title}</h3>
        {
          props.infoList.map(item => (
            <p key={item.id} className={styles.lisText}>{item.info}</p>
          ))
        }
      </div>
    </div>
  )
}

export default index