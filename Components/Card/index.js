import React from 'react'
import styles from './Card.module.css'
import Image from 'next/image'
import { blurData } from '../../helpers/info.js'

const index = ({ props }) => {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.containerImage}>
        <Image
          src={props.image}
          layout="fill"
          objectFit="cover"
          alt="card image"
          loading="lazy"
          blurDataURL={blurData}
          placeholder="blur"
        />
      </div>
      <div className={styles.cardBody}>
        <div className={styles.containerIcon}>
          <Image
            src={props.icon}
            layout="fixed"
            objectFit="cover"
            alt="icono productos"
            blurDataURL={blurData}
            placeholder="blur"
            height={'40px'}
            width={'40px'}
          />
        </div>
        <h3>{props.title}</h3>
        {props.infoList.map((item) => (
          <p key={item.id} className={styles.lisText}>
            {item.info}
          </p>
        ))}
      </div>
    </div>
  )
}

export default index
