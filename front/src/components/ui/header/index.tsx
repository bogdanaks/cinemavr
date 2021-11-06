import React from 'react'
import Link from 'next/link'

import styles from './styles.module.scss'

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>
        <Link href="/">
          <a>CINEMA VR</a>
        </Link>
      </div>
      <div className={styles.linksBlock}>
        <Link href="/films">
          <a className={styles.linksBlock__item}>Фильмы</a>
        </Link>
        <Link href="/serials">
          <a className={styles.linksBlock__item}>Сериалы</a>
        </Link>
      </div>
    </div>
  )
}

export default Header
