import React from 'react'
import MoviesItem from '../movies-item'

import styles from './styles.module.scss'

const MoviesList = () => {
  return (
    <ul className={styles.list}>
      <li>
        <MoviesItem />
      </li>
      <li>
        <MoviesItem />
      </li>
      <li>
        <MoviesItem />
      </li>
    </ul>
  )
}

export default MoviesList
