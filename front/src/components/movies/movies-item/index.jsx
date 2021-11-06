import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import styles from './styles.module.scss'

const MoviesItem = ({ id, imageSrc }) => {
  return (
    <div className={styles.wrapper}>
      <Link href={`/movie/${id}`}>
        <a>
          <Image src={imageSrc} layout="fill" alt="Movie Poster" />
        </a>
      </Link>
    </div>
  )
}

export default MoviesItem
