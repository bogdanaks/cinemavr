import * as BABYLON from 'babylonjs'

export default class Engine extends BABYLON.Engine{
  private readonly canvas: HTMLCanvasElement;
  constructor(canvas) {
    super(canvas);
    this.canvas = canvas
  }

  create() {
    return new BABYLON.Engine(this.canvas, true, { preserveDrawingBuffer: true, stencil: true })
  }
}