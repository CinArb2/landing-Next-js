import React from 'react'
import styles from './Services.module.css'
import { Button, CardServices } from '../../Components'
import Image from 'next/image'
import { blurData } from '../../helpers/info'
import rippedPaper from '../../public/static/rippedPaper2.png'

const index = () => {
  return (
    <section className={styles.sectionServices} id="servicios">
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
      <div className={styles.decoration}></div>
      <div className={styles.servicesBody}>
        <div className={styles.containerText}>
          <h2 className={styles.headingServices}>Nuestros Servicios</h2>
          <p>
            Tenemos a disposicion profesionales encargados de brindarte la mejor
            asesoria y el mejor servicio.
          </p>
          <Button green>Agenda tu cita</Button>
        </div>
        <div className={styles.listServices}>
          <CardServices icon={'serviceVet'}>
            Constultorías Veterinarias
          </CardServices>
          <CardServices icon={'serviceAgr'}>
            Constultorías Agropecuarias
          </CardServices>
        </div>
      </div>
    </section>
  )
}

export default index
