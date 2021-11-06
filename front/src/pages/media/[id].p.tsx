// import React from 'react'
// import { FreeCamera, Vector3, HemisphericLight, MeshBuilder, VideoTexture, StandardMaterial } from '@babylonjs/core'
// import SceneComponent from '@components/babylon/scene'
//
// import styles from './styles.module.scss'
//
// let box
//
// const MediaPage = () => {
//   const onSceneReady = async (scene) => {
//     var camera = new FreeCamera('camera1', new Vector3(0, 5, -10), scene)
//
//     camera.setTarget(Vector3.Zero())
//
//     const canvas = scene.getEngine().getRenderingCanvas()
//
//     camera.attachControl(canvas, true)
//
//     var light = new HemisphericLight('light', new Vector3(0, 1, 0), scene)
//
//     light.intensity = 0.7
//
//     box = MeshBuilder.CreateBox('box', { size: 2 }, scene)
//
//     box.position.y = 1
//
//     MeshBuilder.CreateGround('ground', { width: 6, height: 6 }, scene)
//     // const streamTexture = await VideoTexture.CreateFromStreamAsync(scene, mediaStream, )
//     const streamTexture = await VideoTexture.CreateFromWebCamAsync(scene, {
//       width: 200,
//       height: 200,
//       maxWidth: 400,
//       maxHeight: 400,
//       minHeight: 200,
//       minWidth: 200,
//       deviceId: '123',
//     })
//   }
//
//   const onRender = (scene) => {
//     if (box !== undefined) {
//       var deltaTimeInMillis = scene.getEngine().getDeltaTime()
//
//       const rpm = 10
//       box.rotation.y += (rpm / 60) * Math.PI * 2 * (deltaTimeInMillis / 1000)
//     }
//   }
//
//   return (
//     <div className={styles.wrapper}>
//       <SceneComponent antialias onSceneReady={onSceneReady} onRender={onRender} id="my-canvas"/>
//     </div>
//   )
// }
//
// export default MediaPage

import React from 'react'

const MediaPage = () => {
  return (
    <div>
      MediaPage
    </div>
  )
}

export default MediaPage
