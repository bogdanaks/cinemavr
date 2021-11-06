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
    width: 10,
    height: 10,
    sideOrientation: BABYLON.Mesh.FRONTSIDE,
  })
  screenPlane.position.y = 2

  // @ts-ignore
  const light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(5, 1, 0), scene)

  let mat = new BABYLON.StandardMaterial("mat", scene)
  mat.diffuseColor = BABYLON.Color3.White()

  videoEl.setAttribute('src', 'http://localhost:3000/video')
  videoEl.setAttribute('autoplay', 'false');
  videoEl.setAttribute('muted', 'true');
  let videoMat = new BABYLON.StandardMaterial("textVid", scene);
  const videoTexture = new BABYLON.VideoTexture('video', videoEl, scene, true, true);
  videoMat.backFaceCulling = false;
  videoMat.diffuseTexture = videoTexture;
  videoMat.emissiveColor = BABYLON.Color3.White();
  screenPlane.material = videoMat;

  // @ts-ignore
  const ground = BABYLON.MeshBuilder.CreateGround('ground1', {
    width: 16,
    height: 16,
    subdivisions: 2,
    updatable: false
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
