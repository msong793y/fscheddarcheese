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

const Util = __webpack_require__(/*! ./util.js */ "./src/util.js");
const MovingObject = __webpack_require__(/*! ./moving_object.js */ "./src/moving_object.js");
Util.inherits(Cat, MovingObject);

// let timer = 1000;

var catImage = new Image();
catImage.src = './assets/cat.png';


function Cat(data) {

    this.radius = 40
    this.vel = data.vel || [0, 0];
    this.color = "red"
    this.game=data.game;
    this.speed= 4.5;
    this.image=catImage;

  
    
    MovingObject.call(this, {
        pos: data.pos,
        vel: data.vel,
        speed: this.speed,
        radius: this.radius,
        color: this.color,
        game: data.game,
        health: -1,
        attack: 1,
        multiplier: 1,
        type: "cat",
        image: this.image
    });

}
var timeout = null;
var timeout1 = null;
var timeout2 = null;
var timeout3 = null;
var timeout4 = null;
var timeout5 = null;
var timeout6 = null;
var timeout7 = null;

Cat.prototype.attackAction = function attackAction(vec) {
    clearTimeout(timeout);
    clearTimeout(timeout1);
    clearTimeout(timeout2);
    clearTimeout(timeout3);
    clearTimeout(timeout4);
    clearTimeout(timeout5);
    clearTimeout(timeout6);
    clearTimeout(timeout7);

    this.speed=4.5

    const newVec= Util.dir(vec)
    // while(powerLevel>0){
    //     setTimeout(()=>{
    //         powerLevel-=.5
    //         console.log(powerLevel)
    //     }, 500)

    this.vel[0] = newVec[0];
    this.vel[1] = newVec[1];
    // }
    
    timeout=setTimeout(()=>{this.reduceSpeed()},2000)
    timeout1=setTimeout(() => { this.reduceSpeed() }, 2500)
    timeout2=setTimeout(() => { this.reduceSpeed() }, 3500)
    timeout3 =setTimeout(() => { this.reduceSpeed() }, 4500)
    timeout4 =setTimeout(() => { this.reduceSpeed() }, 2900)
    timeout5 =setTimeout(() => { this.reduceSpeed() }, 3400)
    timeout6 =setTimeout(() => { this.reduceSpeed() }, 3800)
    timeout7 = setTimeout(() => { this.reduceSpeed() }, 4200)
}

Cat.prototype.reduceSpeed = function reduceSpeed() {
    // debugger;
    let that = this
    if (that.speed>0){
    that.speed -= .7;

    }else if(that.speed<0){
        this.vel=[0,0]
    }

}

module.exports = Cat;

/***/ }),

/***/ "./src/enemy_object.js":
/*!*****************************!*\
  !*** ./src/enemy_object.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Util = __webpack_require__(/*! ./util.js */ "./src/util.js");
const MovingObject = __webpack_require__(/*! ./moving_object.js */ "./src/moving_object.js");
Util.inherits(EnemeyObject, MovingObject);


function EnemeyObject(data){

  
    MovingObject.call(this, {
        pos: data.pos,
        speed:data.speed,
        // vel: Util.randomVec(3)
        vel: data.vel,
        radius: data.radius,
        game: data.game,
        color: data.color,
        health: data.health,
        attack: data.attack,
        range: data.range,
        type: data.type,
        image: data.image
    });

}


module.exports = EnemeyObject;

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// const EnemeyObject = require('./enemy_object');
const Util = __webpack_require__(/*! ./util.js */ "./src/util.js");

const Sloth= __webpack_require__(/*! ./sloth */ "./src/sloth.js")
const Cat = __webpack_require__(/*! ./cat */ "./src/cat.js")
const TinyMouse =__webpack_require__(/*! ./tiny_mouse */ "./src/tiny_mouse.js")
const HomingMouse = __webpack_require__(/*! ./homing_mouse */ "./src/homing_mouse.js")

var backgroundImage = new Image();
backgroundImage.src = './assets/bg2.png'; 


const Game = function() {
    this.DIM_X = 800;
    this.DIM_Y= 500;
    this.sloth = new Sloth({ pos: [250, 100], vel: [0, 0], health: 1000, game: this })
    this.cat = new Cat({ pos: [300, 100], vel: [0, 0], game: this})
    this.enemies=[];
    this.tinyMouse=[];
    this.homingMouse=[];
    this.entities = [];
    this.level = 1;
    this.gameTinyMouseCount=0;
    this.gameHomingMouseCount=0;
    // debugger
    this.addSloth();
    this.addCat();
    this.setStage();
    
    

}




Game.prototype.setStage = function () {
   this.gameTinyMouseCount=50
   this.gameHomingMouseCount=20
    // debugger;

   this.addEnemies(20,5);
   
}
// checking to see if enemies needs to be repopulated
Game.prototype.checkGameProgression = function () {
 
    // console.log(this.gameTinyMouseCount)
    // console.log(this.tinyMouse.length)

    if (this.gameTinyMouseCount>0 || this.gameHomingMouseCount>0){
        if (this.tinyMouse.length < 10 && this.gameTinyMouseCount > 9){
            
            this.gameTinyMouseCount-=10;
            this.addEnemies(10,0)
        }
        if (this.homingMouse.length<3 && this.gameHomingMouseCount>4){
            this.gameHomingMouseCount-=5;
            this.addEnemies(0,5)
        } 

    } 
    else if (this.gameTinyMouseCount < 3 && this.gameHomingMouseCount < 1 && this.tinyMouse.length<2 &&this.homingMouse.length===0){
        alert("you won")
    }
      
    

}
// adding enemies into the array
Game.prototype.addEnemies = function (tinyMouseCount, homingMouseCount){
   
    while(tinyMouseCount > 0){
        let pos = this.startingPosition();
        let that = this;
        this.tinyMouse.push(new TinyMouse({ pos: pos, vel: Util.randomVec(3), game: that }));
        tinyMouseCount--;
    }
    while (homingMouseCount > 0) {
        let pos = this.startingPosition();
        let that = this;
        this.homingMouse.push(new HomingMouse({ pos: pos, vel: Util.randomVec(3), game: that }));
        homingMouseCount--;
    }

    this.enemies=this.tinyMouse.concat(this.homingMouse)
    this.entities = [this.sloth,this.cat].concat(this.enemies)

    // //adding Sloth
    // this.entities.push(new Sloth({pos:[250,100], vel:Util.randomVec(5),health:1000}))

}

Game.prototype.addSloth = function () {
    //adding Sloth
    this.entities.push(this.sloth)
    // return this.sloth;
}
Game.prototype.addCat = function () {
    //adding cat
    this.entities.push(this.cat)
    // return this.cat;
}
//each Step

Game.prototype.step = function step(delta) {
    this.moveObjects(delta);
    this.checkCollisions();
    this.checkInRange();
    this.checkGameProgression();
};


Game.prototype.checkCollisions=function(){
    const sloth = this.sloth;
    const cat = this.cat;
    for(let i = 0; i<this.enemies.length; i++){
        // debugger
        const object = this.enemies[i];
        if (sloth.isCollidedWith(object)){
            // const collision = sloth.collideWith(object)
            // if(collision)return
            sloth.takeDamage(object.attack)
        }
        if (cat.isCollidedWith(object)) {
            // const collision = sloth.collideWith(object)
            // if(collision)return
            object.takeDamage(cat.attack*cat.speed)
        }
    }
}


//checking to see if object is in range:
Game.prototype.checkInRange = function () {
    const sloth = this.sloth;
    // const homingMouse = this.homingMouse;
    for (let i = 0; i < this.homingMouse.length; i++) {
        
        const hMouse = this.homingMouse[i];
        if (hMouse.isInRangeOf(hMouse.range,sloth)) {
            hMouse.retarget(sloth)
        }
    }
}

// Game.prototype.stopSloth() = function (){
//     console.log("hi")
// }


// intial rendering starting position
Game.prototype.startingPosition = function (){
    let x = this.DIM_X-30;
    let y = Math.random()* this.DIM_Y;
    return [x,y]
}

//Drawing enemies on the board
Game.prototype.draw = function (ctx){
    let totalEnemiesCount = this.enemies.length + this.gameTinyMouseCount + this.gameHomingMouseCount;


    ctx.clearRect(0,0,this.DIM_X,this.DIM_Y)
    ctx.drawImage(backgroundImage, 0, 0);
    // ctx.fillRect(0, 0, this.DIM_X, this.DIM_Y);
    ctx.fillStyle= "red";
    ctx.font = "25px Arial";
    ctx.fillText(`Health ${this.sloth.health} /5000`, 50, 480);
    ctx.fillText(`${totalEnemiesCount} Enemies Left`, 550, 480);

    //populating entities
    for( let i=0; i<this.entities.length; i++){
        this.entities[i].draw(ctx)
    }
}

//Moving Entities
Game.prototype.moveObjects = function (delta){

    for (let i = 0; i < this.entities.length; i++) {
        this.entities[i].move(delta)
    }
}

// Remove Object
Game.prototype.remove = function remove(object) {

    switch (object.type) {
        case "homingMouse":
            this.homingMouse.splice(this.homingMouse.indexOf(object), 1);
            this.enemies = this.tinyMouse.concat(this.homingMouse)
            this.entities = [this.sloth, this.cat].concat(this.enemies)
            
            break;
        case "tinyMouse":
            this.tinyMouse.splice(this.tinyMouse.indexOf(object), 1);
            this.enemies = this.homingMouse.concat(this.tinyMouse)
            this.entities = [this.sloth, this.cat].concat(this.enemies)
            break;

        default:
            break;
    }
    
};

module.exports = Game;



/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Game = __webpack_require__(/*! ./game.js */ "./src/game.js");
let cat='';
let mouseTimeout;
let mouseTimeout1;
let mouseTimeout2;
let mouseTimeout3;
let mouseTimeout4;
let vec=[];



const GameView = function ( ctx,canvas) {
    this.game = new Game();
    this.canvas=canvas;
    this.ctx = ctx;
    this.sloth = this.game.sloth;
    this.enemies = this.game.enemies;
    this.cat= this.game.cat;
    cat = this.cat;
    canvas=this.canvas;
    this.entities = this.game.entities;
    this.start();
}

function getPosition(event) {
    

    let x = event.x;
    let y = event.y;

    x -= cat.pos[0];
    y -= cat.pos[1];
    vec = [x, y]
    cat.vel = [0, 0]
    releaseAttack()
}

const releaseAttack = () => {

    clearTimeout(mouseTimeout);
    clearTimeout(mouseTimeout1);
    clearTimeout(mouseTimeout2);
    clearTimeout(mouseTimeout3);
    clearTimeout(mouseTimeout4);

    
   
    cat.attackAction(vec);

 
}

GameView.MOVES = {
    w: [0, -2],
    a: [-2, 0],
    s: [0, 2],
    d: [2, 0],

};

GameView.prototype.bindKeyHandlers = function bindKeyHandlers() {
    const sloth = this.sloth;

    Object.keys(GameView.MOVES).forEach(function (k) {
        const move = GameView.MOVES[k];
        key(k, function () { sloth.power(move); });
    });

    
};




GameView.prototype.clickHandlers = function dlidkHandlers() {
   
    const canvas = this.canvas

    const accelerator = () => {
        cat.multiplier = 1
        mouseTimeout = setTimeout(() => {

            cat.multiplier += .2
        }, 300)
        mouseTimeout1 = setTimeout(() => {

            cat.multiplier += .2

        }, 550)
        mouseTimeout2 = setTimeout(() => {

            cat.multiplier += .3

        }, 800)
        mouseTimeout3 = setTimeout(() => {

            cat.multiplier += .5

        }, 1100)
        mouseTimeout4 = setTimeout(() => {

            cat.multiplier += .5

        }, 1400)

   
    }
    

    canvas.addEventListener("mousedown", accelerator, false);
    canvas.addEventListener("mouseup", getPosition , false);
    


};

GameView.prototype.start = function start() {


    this.bindKeyHandlers();
    this.clickHandlers();
    this.lastTime = performance.now();
    // this.lastTime=0;
    // start the animation
    // debugger;
    requestAnimationFrame(this.animate.bind(this));
    
};

GameView.prototype.animate = function animate(time) {

   
    const timeDelta = time - this.lastTime;

    // debugger
   
    this.game.step(timeDelta);
    this.game.draw(this.ctx);
    this.lastTime = time;

    // every call to animate requests causes another call to animate
    requestAnimationFrame(this.animate.bind(this));
};

module.exports = GameView;

/***/ }),

/***/ "./src/homing_mouse.js":
/*!*****************************!*\
  !*** ./src/homing_mouse.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Util = __webpack_require__(/*! ./util.js */ "./src/util.js");
const EnemeyObject = __webpack_require__(/*! ./enemy_object */ "./src/enemy_object.js");
Util.inherits(HomingMouse, EnemeyObject);
var hMImage = new Image();
hMImage.src = './assets/mouse.png';


function HomingMouse(data) {



    EnemeyObject.call(this, {
        pos: data.pos,
        vel: data.vel,
        speed: .5,
        radius: 30,
        game: data.game,
        health: 25,
        attack: 15,
        range: 280,
        type: "homingMouse",
        color: "pink",
        image: hMImage
    })

}

HomingMouse.prototype.retarget = function retarget(otherObject) {
  
    let x = otherObject.pos[0];
    let y = otherObject.pos[1];

    x -= this.pos[0];
    y -= this.pos[1];
    oldVec = [x, y]
    // debugger
    this.speed = 1.8

    const vec = Util.dir(oldVec)
//  debugger
    this.vel[0] = vec[0];
    this.vel[1] = vec[1];
};

module.exports = HomingMouse;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

console.log("Webpack is working!")

const Game = __webpack_require__(/*! ./game.js */ "./src/game.js");
const GameView = __webpack_require__(/*! ./game_view.js */ "./src/game_view.js");
const Modal = __webpack_require__(/*! ./modal */ "./src/modal.js")


const MovingObject = __webpack_require__(/*! ./moving_object.js */ "./src/moving_object.js");


// testing
window.MovingObject = MovingObject;


window.addEventListener('DOMContentLoaded', () => {
    Modal();
    const canvas = document.getElementById('game-canvas');
    const ctx = canvas.getContext('2d');



    document.getElementById("start")
    start.addEventListener('click', () => {
        
       
        start.disabled = 'true'
        restart.disabled=false;
        // const canvas = document.getElementById('game-canvas');
        // const ctx = canvas.getContext('2d');
        const view = new GameView(ctx, canvas) 
    
    })

    restart.disabled = true;
    restart.addEventListener('click', () => {
        
        const view = new GameView(ctx, canvas) 
      
    })

})



/***/ }),

/***/ "./src/modal.js":
/*!**********************!*\
  !*** ./src/modal.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

function Modal() {
    let modal = document.querySelector(".modal");
    let trigger = document.querySelector(".trigger");
    let closeButton = document.querySelector(".close-button");
    modal.classList.toggle("show-modal");


    
    function toggleModal() {
        modal.classList.toggle("show-modal");
    }

    function windowOnClick(event) {
        if (event.target === modal) {
            toggleModal();
        }
    }
    trigger.addEventListener("click", toggleModal);
    closeButton.addEventListener("click", toggleModal);
    window.addEventListener("click", windowOnClick)
}

module.exports = Modal;

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Util = __webpack_require__(/*! ./util */ "./src/util.js");
let frameCount = 0;
let currentLoopIndex = 0;
const cycleLoop = [0, 1, 0, 2];


function MovingObject(options) {
    this.pos = options.pos;
    this.vel = options.vel;
    this.radius = options.radius;
    this.game =options.game;
    this.color=options.color;
    this.multiplier=options.multiplier||1;
    this.speed=options.speed;
    this.health = options.health;
    this.attack= options.attack;
    this.type= options.type
    this.range=options.range
    this.image=options.image
};

MovingObject.prototype.collideWith = function collideWith(otherObject) {
    // default do nothing
};


MovingObject.prototype.drawFrameMouse=function drawFrameMouse(frameX, frameY,ctx) {
    ctx.drawImage(this.image,
                 frameX * 32, frameY * 32,32, 32,
            this.pos[0] - this.radius, this.pos[1] - this.radius,
             this.radius*1.5, this.radius * 1.5)
}

MovingObject.prototype.draw = function draw(ctx) {
    ctx.fillStyle = this.color;
    // debugger
    if (this.type==="cat"){

        //static cat

        if (this.vel[0]===0 && this.vel[1]===0){
            this.drawFrameMouse(1, 0, ctx);
            return;
        }

        let direction = 0
        if (this.vel[0] < 0) {
            direction = 1
        } else if (this.vel[0] > 0) {
            direction = 2
        }
        // } else if (this.vel[1] < 0) {
        //     direction = 2
        // } else {
        //     direction = 0
        // }

        frameCount++;
        if (frameCount < (1000-(90*this.speed*this.multiplier))) {
            this.drawFrameMouse(cycleLoop[currentLoopIndex], direction, ctx);
            return;
        }
        frameCount = 0;
        // ctx.clearRect(0, 0, canvas.width, canvas.height);
        this.drawFrameMouse(cycleLoop[currentLoopIndex], direction, ctx);
        currentLoopIndex++;
        if (currentLoopIndex >= cycleLoop.length) {
            currentLoopIndex = 0;
        }

    } else if(this.type==="sloth") {
        console.log(this.vel)
        ctx.drawImage(this.image,5,5,30,30,
             this.pos[0] - this.radius, this.pos[1] - this.radius, this.radius * 2.5, this.radius * 2.5)
    } else if (this.type === "tinyMouse") {

        // debugger
        let direction = 2
        if (this.vel[0] < 0) {
            direction = 3
        } else if (this.vel[0] > 0) {
            direction = 1
        } else if (this.vel[1] < 0) {
            direction = 2
        } else {
            direction = 0
        }
        
            frameCount++;
            if (frameCount < 60) {
            this.drawFrameMouse(cycleLoop[currentLoopIndex], direction, ctx);
                return;
            }
            frameCount = 0;
            // ctx.clearRect(0, 0, canvas.width, canvas.height);
            this.drawFrameMouse(cycleLoop[currentLoopIndex], direction,ctx);
            currentLoopIndex++;
            if (currentLoopIndex >= cycleLoop.length) {
                currentLoopIndex = 0;
            }
        




    } else if (this.type === "homingMouse") {
        // if (this.vel[0] < 0) {
        //     ctx.drawImage(this.image, 0, 100, 32, 32,
        //         this.pos[0] - this.radius, this.pos[1] - this.radius, this.radius * 1.5, this.radius * 1.5)
        // } else {
        //     ctx.drawImage(this.image, 0, 32, 32, 32,
        //         this.pos[0] - this.radius, this.pos[1] - this.radius, this.radius * 1.5, this.radius * 1.5)
        // }
        let direction = 2
        if (this.vel[0] < 0) {
            direction = 3
        } else if( this.vel[0]>0){
            direction =1
        } else if( this.vel[1]<0){
            direction = 2
        } else{
            direction = 0
        }

        frameCount++;
        if (frameCount < 40) {
            this.drawFrameMouse(cycleLoop[currentLoopIndex], direction, ctx);
            return;
        }
        frameCount = 0;
        // ctx.clearRect(0, 0, canvas.width, canvas.height);
        this.drawFrameMouse(cycleLoop[currentLoopIndex], direction, ctx);
        currentLoopIndex++;
        if (currentLoopIndex >= cycleLoop.length) {
            currentLoopIndex = 0;
        }

    } else{
    ctx.beginPath();
    ctx.arc(
        this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true
    );
    ctx.fill();}
};
const NORMAL_FRAME_TIME_DELTA = 1000 / 60;

MovingObject.prototype.move = function move(timeDelta) {
const velocityScale = timeDelta / NORMAL_FRAME_TIME_DELTA,
        offsetX = this.vel[0] * velocityScale * this.speed*this.multiplier,
        offsetY = this.vel[1] * velocityScale * this.speed*this.multiplier;

    let x = this.pos[0] + offsetX;
    let y = this.pos[1] + offsetY;
    if (x > 800 || x < 0) {
        this.vel[0] = -(this.vel[0])
    }

    if (y > 500 || y < 0){
        this.vel[1] = -(this.vel[1] )
    }
    this.pos[0] = x;
    this.pos[1] = y;


};

MovingObject.prototype.isCollidedWith = function isCollidedWith(otherObject) {
    const centerDist = Util.dist(this.pos, otherObject.pos);
    return centerDist < (this.radius + otherObject.radius);
};

MovingObject.prototype.isInRangeOf = function isInRangeOf(range,otherObject) {
    // debugger
    const centerDist = Util.dist(this.pos, otherObject.pos) ;
    return centerDist < (this.radius + otherObject.radius + range);
};

MovingObject.prototype.remove = function remove() {
    // debugger
    this.game.remove(this);
};

MovingObject.prototype.takeDamage = function takeDamage(attack) {
    this.health-= attack
    if( this.health < 0){
        if (this.type === "sloth"){
            alert("gameOver")
        } else if(this.type === "tinyMouse") {
        this.game.remove(this)
        }
    } else if (this.type === "homingMouse") {
        this.game.remove(this)
    }
    
};


module.exports = MovingObject;


/***/ }),

/***/ "./src/sloth.js":
/*!**********************!*\
  !*** ./src/sloth.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Util = __webpack_require__(/*! ./util.js */ "./src/util.js");
const MovingObject = __webpack_require__(/*! ./moving_object.js */ "./src/moving_object.js");
Util.inherits(Sloth, MovingObject);


var slothImage = new Image();
slothImage.src = './assets/sloth.png';



function Sloth(data) {
    
    data.radius = 20;
    data.vel = data.vel || [0,0];
    data.game= data.game;
    data.speed=1.9
    data.color="green";
    data.health = 5000;
    data.attack= 0;
    data.type= "sloth";
    data.image = slothImage;
    MovingObject.call(this,data);
    

}
var timeout = null

Sloth.prototype.power = function power(impulse) {
    
    this.vel[0] = impulse[0];
    this.vel[1] = impulse[1];
    let that = this;
    clearTimeout(timeout)
    // timeout = setTimeout(() => { console.log("hi")}, 500)

    timeout= setTimeout(()=>{that.vel[0]=0;that.vel[1]=0},500)
  
};

Sloth.prototype.power


module.exports = Sloth;

/***/ }),

/***/ "./src/tiny_mouse.js":
/*!***************************!*\
  !*** ./src/tiny_mouse.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Util = __webpack_require__(/*! ./util.js */ "./src/util.js");
const EnemeyObject = __webpack_require__(/*! ./enemy_object */ "./src/enemy_object.js");
Util.inherits(TinyMouse, EnemeyObject);

var tMImage = new Image();
tMImage.src = './assets/rat.png';

function TinyMouse(data){

    

    EnemeyObject.call(this,{
        pos: data.pos,
        vel: data.vel,
        speed: .5,
        radius: 25,
        game: data.game,
        health: 20,
        attack: 10,
        type: "tinyMouse",
        color: "none",
        image: tMImage

    })






}

module.exports = TinyMouse;

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

const Util = {
    inherits(childClass, parentClass) {
        childClass.prototype = Object.create(parentClass.prototype);
        childClass.prototype.constructor = childClass;
    },
    randomVec(length) {
        const deg = -1 * Math.PI * Math.random();
        return Util.scale([Math.sin(deg), Math.cos(deg)], length);
    },
    // Scale the length of a vector by the given amount.
    scale(vec, m) {
        return [vec[0] * m, vec[1] * m];
    },

     // Find distance between two points.
    dist(pos1, pos2) {
        return Math.sqrt(
            Math.pow(pos1[0] - pos2[0], 2) + Math.pow(pos1[1] - pos2[1], 2)
        );
    },
    // Normalize the length of the vector to 1, maintaining direction.
    dir(vec) {
        const norm = Util.norm(vec);
        return Util.scale(vec, 1 / norm);
    },

    // Find the length of the vector.
    norm(vec) {
        return Util.dist([0, 0], vec);
    },
};



module.exports = Util;

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map