import React from 'react'
import styles from './FloatingBtn.module.css'
import { ImWhatsapp } from 'react-icons/im';

const index = () => {
  return (
    <a href="https://api.whatsapp.com/send?phone=573104952597&text=Hola,%20me%20gustar%C3%ADa%20obtener%20mayor%20informaci%C3%B3n." target="_blank" rel="noopener noreferrer" className={styles.floatingBtn}>
      <ImWhatsapp className={styles.icon} />
      <span>
      En que podemos ayudarte?
      </span>
    </a>
  )
}

export default index