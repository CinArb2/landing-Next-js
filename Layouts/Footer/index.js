import React from 'react'
import styles from './Footer.module.css'
import Image from 'next/image'
import { BsFillTelephoneFill } from 'react-icons/bs';
import { AiOutlineMail, AiFillClockCircle, AiFillInstagram } from 'react-icons/ai';

const index = () => {
  return (
    <footer className={styles.footer} id="contactanos">
      <div className={styles.paper}>
        <img src="/static/paperGray1.png" alt="papel decoracion" />
      </div>
      <div className={styles.container}>
        <div className={styles.businessInfo}>
          <div className={styles.containerLogo}>
            <Image
              src="/static/logo.png"
              layout="fill"
              objectFit="cover"
              priority
              alt="logo"
              />
          </div>
          <p>Garantizando el crecimiento sostenible de las producciones y del cuidado animal </p>
        </div>
        <div className={styles.contactList}>
          <h3 className={styles.contactHeading}>Contáctanos</h3>
          <ul className={styles.list}>
            <li>
              <BsFillTelephoneFill className={styles.icon}/>
              +(57) 3104952597</li>
            <li>
              <AiOutlineMail className={styles.icon}/>
              agrointegralsas@hotmail.com</li>
            <li>
              <AiFillClockCircle className={styles.icon}/>
              Lunes a sábados de 8:00am a 6:00pm</li>
          </ul>
          <a href="https://www.instagram.com/agrointegral_agropecuaria/" target="_blank" rel="noopener noreferrer"
            className={styles.link} 
          >
          <AiFillInstagram className={styles.icon} />
          @agrointegral_agropecuaria
          </a>
        </div>
        <div className={styles.map}>
          <iframe
            className={styles.iframe}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1665.2081333897706!2d-75.88210947655091!3d8.7617773196192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e5a2febc25240c3%3A0x8334a628cd31679b!2zQ2wuIDM4ICMzLTM4LCBNb250ZXLDrWEsIEPDs3Jkb2Jh!5e0!3m2!1sen!2sco!4v1655039675585!5m2!1sen!2sco"
            allowFullScreen=""
            title="mapa de agrointegral vg"
            loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </footer>
  )
}

export default index