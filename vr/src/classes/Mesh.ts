import * as BABYLON from 'babylonjs'

export default class Mesh extends BABYLON.AbstractMesh {
  constructor(name, scene) {
    super('mesh', scene)
  }
}