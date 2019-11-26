/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/enemy_object.js":
/*!*****************************!*\
  !*** ./src/enemy_object.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nUtil.inherits(EnemeyObject, MovingObject);\n\n\nfunction EnemeyObject(data){\n\n  \n    MovingObject.call(this, {\n        pos: data.pos,\n        // vel: Util.randomVec(3)\n        vel: data.vel,\n        radius: data.radius\n    });\n\n}\n\n\nmodule.exports = EnemeyObject;\n\n//# sourceURL=webpack:///./src/enemy_object.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// const EnemeyObject = require('./enemy_object');\nconst Util = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\n\nconst Sloth= __webpack_require__(/*! ./sloth */ \"./src/sloth.js\")\nconst TinyMouse =__webpack_require__(/*! ./tiny_mouse */ \"./src/tiny_mouse.js\")\n\nconst Game = function() {\n    this.DIM_X = 800;\n    this.DIM_Y= 500;\n    this.entities = []\n    this.addEnemies();\n}\n\n// adding enemies into the array\nGame.prototype.addEnemies = function (){\n    let enemyCount= 20\n\n    while(enemyCount > 0){\n        let pos = this.startingPosition();\n        this.entities.push(new TinyMouse({pos:pos, vel: Util.randomVec(3)}));\n        enemyCount--;\n    }\n\n    // //adding Sloth\n    // this.entities.push(new Sloth({pos:[250,100], vel:Util.randomVec(5),health:1000}))\n\n}\n\nGame.prototype.addSloth = function () {\n    //adding Sloth\n    const sloth = new Sloth({ pos: [250, 100], vel: [0, 0], health: 1000 })\n    this.entities.push(sloth);\n    return sloth;\n}\n\n//each Step\n\nGame.prototype.step = function step(delta) {\n    this.moveObjects(delta);\n    // this.checkCollisions();\n};\n\n\n\n// intial rendering starting position\nGame.prototype.startingPosition = function (){\n    let x = this.DIM_X;\n    let y = Math.random()* this.DIM_Y;\n    return [x,y]\n}\n\n//Drawing enemies on the board\nGame.prototype.draw = function (ctx){\n    ctx.clearRect(0,0,this.DIM_X,this.DIM_Y)\n    ctx.fillStyle = \"orange\";\n    ctx.fillRect(0, 0, this.DIM_X, this.DIM_Y);\n    \n\n    //populating entities\n    for( let i=0; i<this.entities.length; i++){\n        this.entities[i].draw(ctx)\n    }\n}\n\n//Moving Entities\nGame.prototype.moveObjects = function (){\n\n    for (let i = 0; i < this.entities.length; i++) {\n        this.entities[i].move()\n    }\n}\n\n\nmodule.exports = Game;\n\n\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\n\nconst GameView = function (game, ctx) {\n    this.game = game;\n    this.ctx = ctx;\n    this.sloth = this.game.addSloth();\n\n};\n\n// GameView.prototype.start = function () {\n//     let that = this;\n//     setInterval(function () {\n//             // debugger\n\n//         that.game.draw(that.ctx);\n//         that.game.moveObjects();\n//     },\n//         20\n//     );\n\n// };\n\nGameView.MOVES = {\n    w: [0, -1],\n    a: [-1, 0],\n    s: [0, 1],\n    d: [1, 0],\n};\n\nGameView.prototype.bindKeyHandlers = function bindKeyHandlers() {\n    const sloth = this.sloth;\n\n    Object.keys(GameView.MOVES).forEach(function (k) {\n        const move = GameView.MOVES[k];\n        key(k, function () { sloth.power(move); });\n    });\n\n    \n};\n\nGameView.prototype.start = function start() {\n    this.bindKeyHandlers();\n    this.lastTime = 0;\n    // start the animation\n    requestAnimationFrame(this.animate.bind(this));\n};\n\nGameView.prototype.animate = function animate(time) {\n    const timeDelta = time - this.lastTime;\n\n    this.game.step(timeDelta);\n    this.game.draw(this.ctx);\n    this.lastTime = time;\n\n    // every call to animate requests causes another call to animate\n    requestAnimationFrame(this.animate.bind(this));\n};\n\nmodule.exports = GameView;\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("console.log(\"Webpack is working!\")\n\nconst Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\nconst GameView = __webpack_require__(/*! ./game_view.js */ \"./src/game_view.js\");\n\n\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\n\n\n// testing\nwindow.MovingObject = MovingObject;\n\n\nwindow.addEventListener('DOMContentLoaded', () => {\n\n    const canvas = document.getElementById('game-canvas');\n    const ctx = canvas.getContext('2d');\n\n    const game = new Game()\n    const view = new GameView(game,ctx)\n\n    view.start();\n    // window.view = view;\n    // window.game = game;\n    // window.canvas=canvas;\n    // window.MovingObject = MovingObject;\n    // window.ctx = ctx;\n    // window.Game = Game;\n    // window.GameView = GameView;\n\n\n})\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./util */ \"./src/util.js\");\n\n\nfunction MovingObject(options) {\n    this.pos = options.pos;\n    this.vel = options.vel;\n    this.radius = options.radius;\n};\n\n\n\nMovingObject.prototype.draw = function draw(ctx) {\n    ctx.fillStyle = \"blue\";\n\n    ctx.beginPath();\n    ctx.arc(\n        this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true\n    );\n    ctx.fill();\n};\n\nMovingObject.prototype.move = function () {\n    let x = this.pos[0] + this.vel[0];\n    let y = this.pos[1] + this.vel[1];\n    if (x > 800 || x < 0) {\n        this.vel[0] = -(this.vel[0])\n    }\n\n    if (y > 500 || y < 0){\n        this.vel[1] = -(this.vel[1] )\n    }\n    this.pos[0] = x;\n    this.pos[1] = y;\n\n};\n\nMovingObject.prototype.isCollidedWith = function isCollidedWith(otherObject) {\n    const centerDist = Util.dist(this.pos, otherObject.pos);\n    return centerDist < (this.radius + otherObject.radius);\n};\n\n\n\nmodule.exports = MovingObject;\n\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/sloth.js":
/*!**********************!*\
  !*** ./src/sloth.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nUtil.inherits(Sloth, MovingObject);\n\n\nfunction Sloth(data) {\n    \n    data.radius = 20\n    data.vel = data.vel || [0,0];\n    MovingObject.call(this,data);\n    this.health = data.health\n\n}\n\nSloth.prototype.power = function power(impulse) {\n    this.vel[0] = impulse[0];\n    this.vel[1] = impulse[1];\n    let that = this\n    // while( this.vel[0]>0){\n    //     setTimeout(()=>{that.vel[0]= that.vel[0]-.2;}, 200)\n    // }\n    // while (this.vel[1] > 0) {\n    //     setTimeout(() => { that.vel[1] = that.vel[1] - .2; }, 200)\n    // }\n    // that.vel[0] = 0; that.vel[1] = 0\n};\n\n\nmodule.exports = Sloth;\n\n//# sourceURL=webpack:///./src/sloth.js?");

/***/ }),

/***/ "./src/tiny_mouse.js":
/*!***************************!*\
  !*** ./src/tiny_mouse.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\nconst EnemeyObject = __webpack_require__(/*! ./enemy_object */ \"./src/enemy_object.js\");\nUtil.inherits(TinyMouse, EnemeyObject);\n\n\n\nfunction TinyMouse(data){\n\n  \n    EnemeyObject.call(this,{\n        pos: data.pos,\n        vel: data.vel,\n        radius: 10\n    })\n\n\n\n\n\n\n}\n\nmodule.exports = TinyMouse;\n\n//# sourceURL=webpack:///./src/tiny_mouse.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const Util = {\n    inherits(childClass, parentClass) {\n        childClass.prototype = Object.create(parentClass.prototype);\n        childClass.prototype.constructor = childClass;\n    },\n    randomVec(length) {\n        const deg = -1 * Math.PI * Math.random();\n        return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n    },\n    // Scale the length of a vector by the given amount.\n    scale(vec, m) {\n        return [vec[0] * m, vec[1] * m];\n    },\n\n     // Find distance between two points.\n    dist(pos1, pos2) {\n        return Math.sqrt(\n            Math.pow(pos1[0] - pos2[0], 2) + Math.pow(pos1[1] - pos2[1], 2)\n        );\n    },\n};\n\n\n\nmodule.exports = Util;\n\n//# sourceURL=webpack:///./src/util.js?");

/***/ })

/******/ });