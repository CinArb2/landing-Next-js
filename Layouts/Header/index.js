import React, { useState } from 'react'
import Image from 'next/image'
import styles from './Header.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { HiOutlineMenu } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'

const index = () => {
  const router = useRouter()
  const [isVisible, setIsVisible] = useState(false)

  const handleClick = () => {
    setIsVisible((prev) => !prev)
  }

  const handleClose = () => {
    setIsVisible(false)
  }

  return (
    <>
      <div
        onClick={handleClose}
        className={`${styles.overlay} ${isVisible ? styles.visible : ''}`}
      ></div>
      <header className={styles.header}>
        <div className={styles.containerHeader}>
          <Link href="/">
            <div className={styles.logoContainer}>
              <Image
                src="/static/logo.png"
                layout="fill"
                objectFit="contain"
                alt="logo"
              />
            </div>
          </Link>
          <div className={styles.menu} onClick={handleClick}>
            {isVisible ? (
              <AiOutlineClose className={styles.menuIcon} />
            ) : (
              <HiOutlineMenu className={styles.menuIcon} />
            )}
          </div>
          <nav
            className={`${styles.listNav} ${isVisible ? styles.visible : ''}`}
          >
            <Link href="/">
              <a
                onClick={handleClose}
                className={
                  router.asPath === '/'
                    ? `${styles.navLink} ${styles.active}`
                    : `${styles.navLink}`
                }
              >
                Inicio
              </a>
            </Link>
            <Link href="/#about">
              <a
                onClick={handleClose}
                className={
                  router.asPath === '/#about'
                    ? `${styles.navLink} ${styles.active}`
                    : `${styles.navLink}`
                }
              >
                Quienes somos
              </a>
            </Link>
            <Link href="/#productos">
              <a
                onClick={handleClose}
                className={
                  router.asPath === '/#productos'
                    ? `${styles.navLink} ${styles.active}`
                    : `${styles.navLink}`
                }
              >
                Productos
              </a>
            </Link>
            <Link href="/#servicios">
              <a
                onClick={handleClose}
                className={
                  router.asPath === '/#servicios'
                    ? `${styles.navLink} ${styles.active}`
                    : `${styles.navLink}`
                }
              >
                Servicios
              </a>
            </Link>
            <Link href="/#contactanos">
              <a
                onClick={handleClose}
                className={
                  router.asPath === '/#contactanos'
                    ? `${styles.navLink} ${styles.active}`
                    : `${styles.navLink}`
                }
              >
                Contactanos
              </a>
            </Link>
          </nav>
        </div>
      </header>
    </>
  )
}

export default index
