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

    const env = scene.createDefaultEnvironment()

    await scene.createDefaultXRExperienceAsync({
      floorMeshes: [env.ground]
    })

    return scene
  }
}