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

/***/ "./src/cat.js":
/*!********************!*\
  !*** ./src/cat.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nUtil.inherits(Cat, MovingObject);\n\n// let timer = 1000;\n\nfunction Cat(data) {\n\n    this.radius = 20\n    this.vel = data.vel || [0, 0];\n    this.color = \"red\"\n    this.game=data.game;\n    this.speed= 4;\n    MovingObject.call(this, {\n        pos: data.pos,\n        vel: data.vel,\n        speed: this.speed,\n        radius: this.radius,\n        color: this.color,\n        game: data.game\n    });\n\n}\nvar timeout = null;\nvar timeout1 = null;\nvar timeout2 = null;\nvar timeout3 = null;\nvar timeout4 = null;\nvar timeout5 = null;\nvar timeout6 = null;\nvar timeout7 = null;\n\nCat.prototype.attack = function attack(vec,powerLevel) {\n    clearTimeout(timeout);\n    clearTimeout(timeout1);\n    clearTimeout(timeout2);\n    clearTimeout(timeout3);\n    clearTimeout(timeout4);\n    clearTimeout(timeout5);\n    clearTimeout(timeout6);\n    clearTimeout(timeout7);\n\n    this.speed=4\n\n    const newVec= Util.dir(vec)\n    // while(powerLevel>0){\n    //     setTimeout(()=>{\n    //         powerLevel-=.5\n    //         console.log(powerLevel)\n    //     }, 500)\n\n    this.vel[0] = newVec[0]*powerLevel;\n    this.vel[1] = newVec[1]*powerLevel;\n    // }\n    \n    timeout=setTimeout(()=>{this.reduceSpeed()},2000)\n    timeout1=setTimeout(() => { this.reduceSpeed() }, 2500)\n    timeout2=setTimeout(() => { this.reduceSpeed() }, 3500)\n    timeout3 =setTimeout(() => { this.reduceSpeed() }, 4500)\n    timeout4 =setTimeout(() => { this.reduceSpeed() }, 2900)\n    timeout5 =setTimeout(() => { this.reduceSpeed() }, 3400)\n    timeout6 =setTimeout(() => { this.reduceSpeed() }, 3800)\n    timeout7 = setTimeout(() => { this.reduceSpeed() }, 4200)\n}\n\nCat.prototype.reduceSpeed = function reduceSpeed() {\n    // debugger;\n    let that = this\n    if (that.speed>0){\n    that.speed -= .5;\n    // console.log(that.speed)\n    }\n\n}\n\nmodule.exports = Cat;\n\n//# sourceURL=webpack:///./src/cat.js?");

/***/ }),

/***/ "./src/enemy_object.js":
/*!*****************************!*\
  !*** ./src/enemy_object.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nUtil.inherits(EnemeyObject, MovingObject);\n\n\nfunction EnemeyObject(data){\n\n  \n    MovingObject.call(this, {\n        pos: data.pos,\n        speed:data.speed,\n        // vel: Util.randomVec(3)\n        vel: data.vel,\n        radius: data.radius,\n        game: data.game,\n        color: \"blue\"\n\n\n    });\n\n}\n\n\nmodule.exports = EnemeyObject;\n\n//# sourceURL=webpack:///./src/enemy_object.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// const EnemeyObject = require('./enemy_object');\nconst Util = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\n\nconst Sloth= __webpack_require__(/*! ./sloth */ \"./src/sloth.js\")\nconst Cat = __webpack_require__(/*! ./cat */ \"./src/cat.js\")\nconst TinyMouse =__webpack_require__(/*! ./tiny_mouse */ \"./src/tiny_mouse.js\")\n\n\nconst Game = function() {\n    this.DIM_X = 800;\n    this.DIM_Y= 500;\n    this.sloth = new Sloth({ pos: [250, 100], vel: [0, 0], health: 1000, game: this })\n    this.cat = new Cat({ pos: [300, 100], vel: [0, 0], game: this})\n    this.enemies=[];\n    this.entities = [];\n    this.addSloth();\n    this.addEnemies();\n    this.addCat();\n}\n\n// adding enemies into the array\nGame.prototype.addEnemies = function (){\n    let enemyCount= 20\n\n    while(enemyCount > 0){\n        let pos = this.startingPosition();\n        let that = this;\n        this.enemies.push(new TinyMouse({ pos: pos, vel: Util.randomVec(3), game: that }));\n        enemyCount--;\n    }\n    this.entities= this.entities.concat(this.enemies)\n    return this.enemies;\n    // //adding Sloth\n    // this.entities.push(new Sloth({pos:[250,100], vel:Util.randomVec(5),health:1000}))\n\n}\n\nGame.prototype.addSloth = function () {\n    //adding Sloth\n    this.entities.push(this.sloth)\n    // return this.sloth;\n}\nGame.prototype.addCat = function () {\n    //adding cat\n    this.entities.push(this.cat)\n    // return this.cat;\n}\n//each Step\n\nGame.prototype.step = function step(delta) {\n    this.moveObjects(delta);\n    this.checkCollisions();\n};\n\nGame.prototype.checkCollisions=function(){\n    const sloth = this.sloth;\n    const cat = this.cat;\n    for(let i = 0; i<this.enemies.length; i++){\n        // debugger\n        const object = this.enemies[i];\n        if (sloth.isCollidedWith(object)){\n            // const collision = sloth.collideWith(object)\n            // if(collision)return\n            object.remove()\n        }\n        if (cat.isCollidedWith(object)) {\n            // const collision = sloth.collideWith(object)\n            // if(collision)return\n            object.remove()\n        }\n    }\n}\n\n// Game.prototype.stopSloth() = function (){\n//     console.log(\"hi\")\n// }\n\n\n// intial rendering starting position\nGame.prototype.startingPosition = function (){\n    let x = this.DIM_X;\n    let y = Math.random()* this.DIM_Y;\n    return [x,y]\n}\n\n//Drawing enemies on the board\nGame.prototype.draw = function (ctx){\n    ctx.clearRect(0,0,this.DIM_X,this.DIM_Y)\n    ctx.fillStyle = \"orange\";\n    ctx.fillRect(0, 0, this.DIM_X, this.DIM_Y);\n    \n\n    //populating entities\n    for( let i=0; i<this.entities.length; i++){\n        this.entities[i].draw(ctx)\n    }\n}\n\n//Moving Entities\nGame.prototype.moveObjects = function (delta){\n\n    for (let i = 0; i < this.entities.length; i++) {\n        this.entities[i].move(delta)\n    }\n}\n\n// Remove Object\nGame.prototype.remove = function remove(object) {\n    // console.log(object)\n    // console.log(this.enemies.indexOf(object))\n    this.enemies.splice(this.enemies.indexOf(object),1);\n    this.entities = [this.sloth,this.cat].concat(this.enemies)\n};\n\nmodule.exports = Game;\n\n\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\n\nconst GameView = function (game, ctx,canvas) {\n    this.game = game;\n    this.canvas=canvas;\n    this.ctx = ctx;\n    this.sloth = this.game.sloth;\n    this.enemies = this.game.enemies;\n    this.cat= this.game.cat;\n    // debugger\n    this.entities = this.game.entities\n}\n// GameView.prototype.start = function () {\n//     let that = this;\n//     setInterval(function () {\n//             // debugger\n\n//         that.game.draw(that.ctx);\n//         that.game.moveObjects();\n//     },\n//         20\n//     );\n\n// };\n\nGameView.MOVES = {\n    w: [0, -1],\n    a: [-1, 0],\n    s: [0, 1],\n    d: [1, 0],\n};\n\nGameView.prototype.bindKeyHandlers = function bindKeyHandlers() {\n    const sloth = this.sloth;\n\n    Object.keys(GameView.MOVES).forEach(function (k) {\n        const move = GameView.MOVES[k];\n        key(k, function () { sloth.power(move); });\n    });\n\n    \n};\n\nGameView.prototype.clickHandlers = function dlidkHandlers() {\n    const cat = this.cat;\n    const canvas = this.canvas\n    cat.power=4;\n    let powerLevel=1;\n    let mouseTimeout;\n    let vec=[]\n\n    canvas.addEventListener(\"mousedown\", getPosition, false);\n\n    const accelerator= () => {\n        mouseTimeout= setTimeout( ()=>{\n       \n            powerLevel += .5\n            // console.log(powerLevel)\n        },400)\n        mouseTimeout1 = setTimeout(() => {\n          \n                powerLevel += .5\n            // console.log(powerLevel)\n\n        }, 650)\n        mouseTimeout2 = setTimeout(() => {\n\n            powerLevel += .5\n            // console.log(powerLevel)\n\n        }, 900)\n        mouseTimeout3 = setTimeout(() => {\n\n            powerLevel += .5\n            // console.log(powerLevel)\n\n        }, 1200)\n        mouseTimeout4 = setTimeout(() => {\n\n            powerLevel += .5\n            // console.log(powerLevel)\n\n        }, 1500)\n    }\n\n    function getPosition(event) {\n        // mouseTimeout= setTimeout(accelerator(),300)\n        accelerator()\n\n        let x = event.x;\n        let y = event.y;\n\n        x -= cat.pos[0];\n        y -= cat.pos[1];\n        vec = [x,y]\n       \n    }\n\n    canvas.addEventListener(\"mouseup\", function () {\n\n        clearTimeout(mouseTimeout);\n        clearTimeout(mouseTimeout1);\n        clearTimeout(mouseTimeout2);\n        clearTimeout(mouseTimeout3);\n        clearTimeout(mouseTimeout4);\n        cat.attack(vec,powerLevel);\n        powerLevel=1;\n        // setTimeout(()=>{\n        //     if (powerLevel >1) {\n        //         powerLevel -= .5\n        //     }\n\n        // },500)\n    }, false);\n  \n\n\n};\n\nGameView.prototype.start = function start() {\n    this.bindKeyHandlers();\n    this.clickHandlers();\n    this.lastTime = 0;\n    // start the animation\n    requestAnimationFrame(this.animate.bind(this));\n};\n\nGameView.prototype.animate = function animate(time) {\n    const timeDelta = time - this.lastTime;\n\n    this.game.step(timeDelta);\n    this.game.draw(this.ctx);\n    this.lastTime = time;\n\n    // every call to animate requests causes another call to animate\n    requestAnimationFrame(this.animate.bind(this));\n};\n\nmodule.exports = GameView;\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("console.log(\"Webpack is working!\")\n\nconst Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\nconst GameView = __webpack_require__(/*! ./game_view.js */ \"./src/game_view.js\");\n\n\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\n\n\n// testing\nwindow.MovingObject = MovingObject;\n\n\nwindow.addEventListener('DOMContentLoaded', () => {\n\n    const canvas = document.getElementById('game-canvas');\n    const ctx = canvas.getContext('2d');\n\n    const game = new Game()\n    const view = new GameView(game,ctx,canvas)\n\n    view.start();\n    // window.view = view;\n    // window.game = game;\n    // window.canvas=canvas;\n    // window.MovingObject = MovingObject;\n    // window.ctx = ctx;\n    // window.Game = Game;\n    // window.GameView = GameView;\n\n\n})\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./util */ \"./src/util.js\");\n// const Game = require('./game.js');\n\n\nfunction MovingObject(options) {\n    this.pos = options.pos;\n    this.vel = options.vel;\n    this.radius = options.radius;\n    this.game =options.game;\n    this.color=options.color;\n    this.speed=options.speed;\n};\n\nMovingObject.prototype.collideWith = function collideWith(otherObject) {\n    // default do nothing\n};\n\nMovingObject.prototype.draw = function draw(ctx) {\n    ctx.fillStyle = this.color;\n\n    ctx.beginPath();\n    ctx.arc(\n        this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true\n    );\n    ctx.fill();\n};\nconst NORMAL_FRAME_TIME_DELTA = 1000 / 60;\nMovingObject.prototype.move = function move(timeDelta) {\n\nconst velocityScale = timeDelta / NORMAL_FRAME_TIME_DELTA,\n        offsetX = this.vel[0] * velocityScale*this.speed,\n        offsetY = this.vel[1] * velocityScale * this.speed;\n\n    let x = this.pos[0] + offsetX;\n    let y = this.pos[1] + offsetY;\n    if (x > 800 || x < 0) {\n        this.vel[0] = -(this.vel[0])\n    }\n\n    if (y > 500 || y < 0){\n        this.vel[1] = -(this.vel[1] )\n    }\n    this.pos[0] = x;\n    this.pos[1] = y;\n\n\n};\n\nMovingObject.prototype.isCollidedWith = function isCollidedWith(otherObject) {\n    const centerDist = Util.dist(this.pos, otherObject.pos);\n    return centerDist < (this.radius + otherObject.radius);\n};\n\nMovingObject.prototype.remove = function remove() {\n    // debugger\n    this.game.remove(this);\n};\n\n\nmodule.exports = MovingObject;\n\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/sloth.js":
/*!**********************!*\
  !*** ./src/sloth.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nUtil.inherits(Sloth, MovingObject);\n\n// let timer = 1000;\n\nfunction Sloth(data) {\n    \n    data.radius = 30;\n    data.vel = data.vel || [0,0];\n    data.game= data.game;\n    data.speed=1.9\n    data.color=\"green\"\n    MovingObject.call(this,data);\n    this.health = 1000;\n    \n\n}\nvar timeout = null\n\nSloth.prototype.power = function power(impulse) {\n    \n    this.vel[0] = impulse[0];\n    this.vel[1] = impulse[1];\n    let that = this;\n    clearTimeout(timeout)\n    // timeout = setTimeout(() => { console.log(\"hi\")}, 500)\n\n    timeout= setTimeout(()=>{that.vel[0]=0;that.vel[1]=0},500)\n  \n};\n\nSloth.prototype.power\n\n\nmodule.exports = Sloth;\n\n//# sourceURL=webpack:///./src/sloth.js?");

/***/ }),

/***/ "./src/tiny_mouse.js":
/*!***************************!*\
  !*** ./src/tiny_mouse.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\nconst EnemeyObject = __webpack_require__(/*! ./enemy_object */ \"./src/enemy_object.js\");\nUtil.inherits(TinyMouse, EnemeyObject);\n\n\n\nfunction TinyMouse(data){\n\n    this.health = 10;\n\n    EnemeyObject.call(this,{\n        pos: data.pos,\n        vel: data.vel,\n        speed: .7,\n        radius: 10,\n        game: data.game\n    })\n\n\n\n\n\n\n}\n\nmodule.exports = TinyMouse;\n\n//# sourceURL=webpack:///./src/tiny_mouse.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const Util = {\n    inherits(childClass, parentClass) {\n        childClass.prototype = Object.create(parentClass.prototype);\n        childClass.prototype.constructor = childClass;\n    },\n    randomVec(length) {\n        const deg = -1 * Math.PI * Math.random();\n        return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n    },\n    // Scale the length of a vector by the given amount.\n    scale(vec, m) {\n        return [vec[0] * m, vec[1] * m];\n    },\n\n     // Find distance between two points.\n    dist(pos1, pos2) {\n        return Math.sqrt(\n            Math.pow(pos1[0] - pos2[0], 2) + Math.pow(pos1[1] - pos2[1], 2)\n        );\n    },\n    // Normalize the length of the vector to 1, maintaining direction.\n    dir(vec) {\n        const norm = Util.norm(vec);\n        return Util.scale(vec, 1 / norm);\n    },\n\n    // Find the length of the vector.\n    norm(vec) {\n        return Util.dist([0, 0], vec);\n    },\n};\n\n\n\nmodule.exports = Util;\n\n//# sourceURL=webpack:///./src/util.js?");

/***/ })

/******/ });