import Engine from './classes/Engine'
import SceneApp from './classes/SceneApp'

const canvas = document.getElementById('renderCanvas')
const engine = new Engine(canvas)
const sceneApp = new SceneApp(engine, canvas);

(async () => {
  const scene = await sceneApp.createScene()

  engine.runRenderLoop(function () {
    scene.render()
  })

  window.addEventListener('resize', function () {
    engine.resize()
  })
})()
