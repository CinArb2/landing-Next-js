import React from 'react'
import { Button, Video } from '../../Components'
import styles from './Hero.module.css'

const index = () => {
  return (
    <section className={styles.containerHero}>
      <div className={styles.heroBody}>
        <h1 className={styles.heroTitle}>Bienvenidos a Agrointegral Vg </h1>
        <p className={styles.heroText}>Soluciones agropecuarias a tu alcance y mucho más!</p>
        <Button orange>Contactanos</Button>
      </div>

      <Video/>
      
    </section>
  )
}

export default index