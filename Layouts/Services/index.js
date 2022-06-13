import React from 'react'
import styles from './Services.module.css'
import { Button, CardServices } from '../../Components'

const index = () => {
  return (
    <section className={styles.sectionServices} id="servicios">
      <div className={styles.paper}>
        <img src="/static/rippedPaper2.png" alt="decoracion" />
      </div>
      <div className={styles.decoration}></div>
      <div className={styles.servicesBody}>
        <div className={styles.containerText}>
          <h2 className={styles.headingServices}>Nuestros Servicios</h2>
          <p>
            Tenemos a disposicion profesionales encargados de brindarte la mejor asesoria y el mejor servicio.
          </p>
        </div>
        <div className={styles.listServices}>
          <CardServices icon={"serviceVet"}>
            Constultorías Veterinarias
          </CardServices>
          <CardServices icon={"serviceAgr"}>
            Constultorías Agropecuaria
          </CardServices>
        </div>
        <Button green>Agenda tu cita</Button>
      </div>
    </section>
  )
}

export default index