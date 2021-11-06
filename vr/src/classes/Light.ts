import * as BABYLON from 'babylonjs'

export default class Light {
  private readonly scene: BABYLON.Scene
  constructor(scene) {
    this.scene = scene
  }

  createHemisphericLight(name: string, position: BABYLON.Vector3): BABYLON.HemisphericLight {
    return new BABYLON.HemisphericLight(name, position, this.scene)
  }
}