/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/babylonjs/babylon.js":
/*!*******************************************!*\
  !*** ./node_modules/babylonjs/babylon.js ***!
  \*******************************************/
/***/ (function(module) {


/***/ }),

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst Engine_1 = __importDefault(__webpack_require__(/*! ./classes/Engine */ \"./src/classes/Engine.ts\"));\r\nconst SceneApp_1 = __importDefault(__webpack_require__(/*! ./classes/SceneApp */ \"./src/classes/SceneApp.ts\"));\r\nconst canvas = document.getElementById('renderCanvas');\r\nconst engine = new Engine_1.default(canvas);\r\nconst sceneApp = new SceneApp_1.default(engine, canvas);\r\n(async () => {\r\n    const scene = await sceneApp.createScene();\r\n    engine.runRenderLoop(function () {\r\n        scene.render();\r\n    });\r\n    window.addEventListener('resize', function () {\r\n        engine.resize();\r\n    });\r\n})();\r\n\n\n//# sourceURL=webpack://vr/./src/app.ts?");

/***/ }),

/***/ "./src/classes/Camera.ts":
/*!*******************************!*\
  !*** ./src/classes/Camera.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst BABYLON = __importStar(__webpack_require__(/*! babylonjs */ \"./node_modules/babylonjs/babylon.js\"));\r\nclass Camera {\r\n    constructor(name, scene) {\r\n        this.name = name;\r\n        this.scene = scene;\r\n    }\r\n    createCamera() {\r\n        return new BABYLON.FreeCamera(this.name, new BABYLON.Vector3(0, 5, -10), this.scene);\r\n    }\r\n}\r\nexports[\"default\"] = Camera;\r\n\n\n//# sourceURL=webpack://vr/./src/classes/Camera.ts?");

/***/ }),

/***/ "./src/classes/Engine.ts":
/*!*******************************!*\
  !*** ./src/classes/Engine.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst BABYLON = __importStar(__webpack_require__(/*! babylonjs */ \"./node_modules/babylonjs/babylon.js\"));\r\nclass Engine extends BABYLON.Engine {\r\n    constructor(canvas) {\r\n        super(canvas);\r\n        this.canvas = canvas;\r\n    }\r\n    create() {\r\n        return new BABYLON.Engine(this.canvas, true, { preserveDrawingBuffer: true, stencil: true });\r\n    }\r\n}\r\nexports[\"default\"] = Engine;\r\n\n\n//# sourceURL=webpack://vr/./src/classes/Engine.ts?");

/***/ }),

/***/ "./src/classes/Light.ts":
/*!******************************!*\
  !*** ./src/classes/Light.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst BABYLON = __importStar(__webpack_require__(/*! babylonjs */ \"./node_modules/babylonjs/babylon.js\"));\r\nclass Light {\r\n    constructor(scene) {\r\n        this.scene = scene;\r\n    }\r\n    createHemisphericLight(name, position) {\r\n        return new BABYLON.HemisphericLight(name, position, this.scene);\r\n    }\r\n}\r\nexports[\"default\"] = Light;\r\n\n\n//# sourceURL=webpack://vr/./src/classes/Light.ts?");

/***/ }),

/***/ "./src/classes/SceneApp.ts":
/*!*********************************!*\
  !*** ./src/classes/SceneApp.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst BABYLON = __importStar(__webpack_require__(/*! babylonjs */ \"./node_modules/babylonjs/babylon.js\"));\r\nconst Camera_1 = __importDefault(__webpack_require__(/*! ./Camera */ \"./src/classes/Camera.ts\"));\r\nconst Light_1 = __importDefault(__webpack_require__(/*! ./Light */ \"./src/classes/Light.ts\"));\r\nclass SceneApp {\r\n    constructor(engine, canvas) {\r\n        this._engine = engine;\r\n        this._canvas = canvas;\r\n    }\r\n    async createScene() {\r\n        const scene = new BABYLON.Scene(this._engine);\r\n        const camera = new Camera_1.default('camera', scene).createCamera();\r\n        camera.setTarget(BABYLON.Vector3.Zero());\r\n        camera.attachControl(this._canvas, true);\r\n        const light = new Light_1.default(scene).createHemisphericLight('light1', new BABYLON.Vector3(0, 1, 0));\r\n        light.intensity = 0.7;\r\n        const screenPlane = BABYLON.MeshBuilder.CreatePlane('screenPlane', {\r\n            width: 16,\r\n            height: 9,\r\n            sideOrientation: BABYLON.Mesh.FRONTSIDE,\r\n        });\r\n        screenPlane.position.y = 1;\r\n        screenPlane.position.z = 10;\r\n        const env = scene.createDefaultEnvironment();\r\n        await scene.createDefaultXRExperienceAsync({\r\n            floorMeshes: [env.ground]\r\n        });\r\n        return scene;\r\n    }\r\n}\r\nexports[\"default\"] = SceneApp;\r\n\n\n//# sourceURL=webpack://vr/./src/classes/SceneApp.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.ts");
/******/ 	
/******/ })()
;