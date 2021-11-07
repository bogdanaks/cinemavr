import * as BABYLON from 'babylonjs'
import Camera from './Camera'
import Light from './Light'

export default class SceneApp {
  private readonly _engine: BABYLON.Engine
  private readonly _canvas: HTMLCanvasElement
  constructor(engine, canvas) {
    this._engine = engine
    this._canvas = canvas
  }

  async createScene(): Promise<BABYLON.Scene> {
    const scene = new BABYLON.Scene(this._engine)
    const camera = new Camera('camera', scene).createCamera()
    camera.setTarget(BABYLON.Vector3.Zero())
    camera.attachControl(this._canvas, true)

    const light = new Light(scene).createHemisphericLight('light1', new BABYLON.Vector3(0, 1, 0))
    light.intensity = 0.7

    const screenPlane = BABYLON.MeshBuilder.CreatePlane('screenPlane', {
      width: 16,
      height: 9,
      sideOrientation: BABYLON.Mesh.FRONTSIDE,
    })
    screenPlane.position.y = 1
    screenPlane.position.z = 10

    const videoEl = document.getElementById('videoEl')
    let mat = new BABYLON.StandardMaterial('mat', scene)
    mat.diffuseColor = BABYLON.Color3.White()
    videoEl.setAttribute('src', 'http://localhost:3000/video')
    videoEl.setAttribute('autoplay', 'false')
    videoEl.setAttribute('muted', 'true')

    let videoMat = new BABYLON.StandardMaterial('textVid', scene)
    // @ts-ignore
    const videoTexture = new BABYLON.VideoTexture('video', videoEl, scene, true, true)
    videoMat.backFaceCulling = false
    videoMat.diffuseTexture = videoTexture
    videoMat.emissiveColor = BABYLON.Color3.White()
    screenPlane.material = videoMat
    videoTexture._invertY = false

    const env = scene.createDefaultEnvironment()

    await scene.createDefaultXRExperienceAsync({
      floorMeshes: [env.ground]
    })

    return scene
  }
}