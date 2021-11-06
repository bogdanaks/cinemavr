import React from 'react'
import Script from 'next/script'

import styles from './styles.module.scss'

const MoviePage = () => {
  return (
    <>
      <canvas className={styles.canvas} id="renderCanvas" />
      <Script src="/assets/app.js" />
    </>
  )
}

export default MoviePage
