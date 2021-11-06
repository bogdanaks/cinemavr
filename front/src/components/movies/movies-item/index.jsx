import React from 'react'
import Link from 'next/link'

import styles from './styles.module.scss'

const MoviesItem = () => {
  return (
    <div className={styles.wrapper}>
      <Link href="/movie/1">
        <a>Карточка фильма</a>
      </Link>
    </div>
  )
}

export default MoviesItem
