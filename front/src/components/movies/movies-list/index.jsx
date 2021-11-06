import React from 'react'
import MoviesItem from '../movies-item'

import styles from './styles.module.scss'

const MoviesList = () => {
  return (
    <ul className={styles.list}>
      <li>
        <MoviesItem id={1} imageSrc='/assets/images/movie1.webp' />
      </li>
      <li>
        <MoviesItem id={2} imageSrc='/assets/images/movie2.webp' />
      </li>
      <li>
        <MoviesItem id={3} imageSrc='/assets/images/movie3.webp' />
      </li>
    </ul>
  )
}

export default MoviesList
