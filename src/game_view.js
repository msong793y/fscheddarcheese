const Game = require('./game.js');
let cat='';
let mouseTimeout;
let mouseTimeout1;
let mouseTimeout2;
let mouseTimeout3;
let mouseTimeout4;
let vec=[];



const GameView = function ( ctx,canvas,game) {
    this.game = game;
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