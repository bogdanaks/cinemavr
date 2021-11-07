import React from 'react'
import Script from 'next/script'

import styles from './styles.module.scss'

const MoviePage = () => {
  const [isPlay, setIsPlay] = React.useState(false)
  const videoRef = React.useRef<HTMLVideoElement>(null)

  const videoPause = async () => {
    if (videoRef.current) {
      await videoRef.current.pause()
    }
  }

  const videoPlay = async () => {
    if (videoRef.current) {
      await videoRef.current.play()
    }
  }

  React.useEffect(() => {
    const enterPress = async (e: KeyboardEvent) => {
      if (e.key === 'Enter' || e.code === 'Space') {
        if (!isPlay) {
          await videoPlay()
        } else {
          await videoPause()
        }

        setIsPlay(prevState => !prevState)
      }
    }

    window.addEventListener('keypress', enterPress)

    return () => {
      window.removeEventListener('keypress', enterPress)
    }
  }, [isPlay])

  return (
    <>
      <canvas className={styles.canvas} id="renderCanvas" />
      <video ref={videoRef} id="videoEl" controls className={styles.video}>
        <source src="http://localhost:3000/video" type="video/mp4" />
      </video>
      <Script src="/assets/app.js" />
    </>
  )
}

export default MoviePage
