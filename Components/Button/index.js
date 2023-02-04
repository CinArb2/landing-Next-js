import React from 'react'
import styles from './Button.module.css'
import classNames from 'classnames/bind'

const index = ({ children, orange, green }) => {
  let cx = classNames.bind(styles)

  const prop = cx({
    button: true,
    orange,
    green,
  })

  return (
    <a
      href="https://api.whatsapp.com/send?phone=573104952597&text=Hola,%20me%20gustar%C3%ADa%20obtener%20mayor%20informaci%C3%B3n."
      target="_blank"
      rel="noopener noreferrer"
      className={prop}
    >
      {children}
    </a>
  )
}

export default index
