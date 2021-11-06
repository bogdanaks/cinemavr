import * as BABYLON from 'babylonjs'

export default class Camera {
  private readonly name: string
  private readonly scene: BABYLON.Scene
  constructor(name, scene) {
    this.name = name
    this.scene = scene
  }

  createCamera(): BABYLON.FreeCamera {
    return new BABYLON.FreeCamera(this.name, new BABYLON.Vector3(0, 5, -10), this.scene)
  }
}