import * as BABYLON from 'babylonjs'
import main from './socket'

const canvas = document.getElementById('renderCanvas')
const videoEl = document.getElementById('videoEl')

// @ts-ignore
const engine = new BABYLON.Engine(canvas, true, { preserveDrawingBuffer: true, stencil: true })
const createScene = function () {
  main()
  const scene = new BABYLON.Scene(engine)
  const camera = new BABYLON.FreeCamera('camera1', new BABYLON.Vector3(0, 5, -10), scene)
  camera.setTarget(BABYLON.Vector3.Zero())
  // Attach the camera to the canvas
  camera.attachControl(canvas, false)

  // @ts-ignore
  let screenPlane = BABYLON.MeshBuilder.CreatePlane('screenPlane', {
    width: 16,
    height: 9,
    sideOrientation: BABYLON.Mesh.FRONTSIDE,
  })
  screenPlane.position.y = 6
  screenPlane.position.x = 0
  screenPlane.position.z = 4

  // Skybox
  let skybox = BABYLON.MeshBuilder.CreateBox("skyBox", { size: 1000.0 }, scene)
  let skyboxMaterial = new BABYLON.StandardMaterial("skyBox", scene)
  skyboxMaterial.backFaceCulling = false
  skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture("textures/skybox", scene)
  skyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE
  skyboxMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0)
  skyboxMaterial.specularColor = new BABYLON.Color3(0, 0, 0)
  skybox.material = skyboxMaterial

  // @ts-ignore
  const light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(5, 1, 0), scene)

  // @ts-ignore
  const ground = BABYLON.MeshBuilder.CreateGround('ground1', {
    width: 16,
    height: 16,
    subdivisions: 2,
    updatable: false,
  }, scene)
  return scene
}
const scene = createScene()
engine.runRenderLoop(function () {
  scene.render()
})
window.addEventListener('resize', function () {
  engine.resize()
})
