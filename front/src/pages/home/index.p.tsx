import React from 'react'
import Header from '@components/ui/header'
import MoviesList from '@components/movies/movies-list'

import styles from './styles.module.scss'

const HomePage = () => {
  return (
    <div>
      <Header />
      <div className={styles.mainSectionOne}>
        <div className={styles.mainSectionOne__container}>
          <h1>CINEMA VR</h1>
        </div>
      </div>
      <div>
        <MoviesList />
      </div>
    </div>
  )
}

export default HomePage
