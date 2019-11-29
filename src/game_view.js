const Game = require('./game.js');
let cat='';
let mouseTimeout;
let mouseTimeout1;
let mouseTimeout2;
let mouseTimeout3;
let mouseTimeout4;
let vec=[];
let canvas;


const GameView = function (game, ctx,canvas) {
    this.game = game;
    this.canvas=canvas;
    this.ctx = ctx;
    this.sloth = this.game.sloth;
    this.enemies = this.game.enemies;
    this.cat= this.game.cat;
    cat = this.cat
    canvas=this.canvas
    this.entities = this.game.entities
}
// GameView.prototype.start = function () {
//     let that = this;
//     setInterval(function () {
//             // debugger

//         that.game.draw(that.ctx);
//         that.game.moveObjects();
//     },
//         20
//     );

// };

function getPosition(event) {
    // mouseTimeout= setTimeout(accelerator(),300)
    // accelerator()

    let x = event.x;
    let y = event.y;

    x -= cat.pos[0];
    y -= cat.pos[1];
    vec = [x, y]
    releaseAttack()
}

const releaseAttack = () => {

    clearTimeout(mouseTimeout);
    clearTimeout(mouseTimeout1);
    clearTimeout(mouseTimeout2);
    clearTimeout(mouseTimeout3);
    clearTimeout(mouseTimeout4);

    
    console.log(cat.speed)
    console.log(cat.multiplier)
    cat.attackAction(vec);

    // setTimeout(()=>{
    //     if (powerLevel >1) {
    //         powerLevel -= .5
    //     }

    // },500)
}

GameView.MOVES = {
    w: [0, -1],
    a: [-1, 0],
    s: [0, 1],
    d: [1, 0],
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
            // console.log(cat.multiplier)
        }, 300)
        mouseTimeout1 = setTimeout(() => {

            cat.multiplier += .2
            // console.log(cat.multiplier)

        }, 550)
        mouseTimeout2 = setTimeout(() => {

            cat.multiplier += .3
            // console.log(cat.multiplier)

        }, 800)
        mouseTimeout3 = setTimeout(() => {

            cat.multiplier += .5
            // console.log(cat.multiplier)

        }, 1100)
        mouseTimeout4 = setTimeout(() => {

            cat.multiplier += .5
            // console.log(cat.multiplier)

        }, 1400)

        // if(cat.multiplier ===5.5){
        //     releaseAttack();
        // }

    }
    

    canvas.addEventListener("mousedown", accelerator, false);
    canvas.addEventListener("mouseup", getPosition , false);
    


};

GameView.prototype.start = function start() {
    this.bindKeyHandlers();
    this.clickHandlers();
    this.lastTime = 0;
    // start the animation
    requestAnimationFrame(this.animate.bind(this));
};

GameView.prototype.animate = function animate(time) {
    const timeDelta = time - this.lastTime;

    // if(cat.multiplier===2.7){
    //     const canvas = this.canvas
    //     // debugger
    //     canvas.addEventListener("mousemove", getPosition, false);

    // }
    this.game.step(timeDelta);
    this.game.draw(this.ctx);
    this.lastTime = time;

    // every call to animate requests causes another call to animate
    requestAnimationFrame(this.animate.bind(this));
};

module.exports = GameView;