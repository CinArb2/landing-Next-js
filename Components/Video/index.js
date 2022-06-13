import React from 'react'
import styles from './Video.module.css'

const index = () => {
  return (
    <>
      <div className={styles.backdrop}></div>
      <div className={styles.containerVideo}>
        <video
            autoPlay
            loop
            muted
            className={styles.video}
          >
            <source src='/static/videoHero1.mp4' type='video/mp4' />
            Your browser does not support the video tag.
        </video>
      </div>
    </>
  )
}

export default index