const Game = require('./game.js');

const GameView = function (game, ctx,canvas) {
    this.game = game;
    this.canvas=canvas;
    this.ctx = ctx;
    this.sloth = this.game.sloth;
    this.enemies = this.game.enemies;
    this.cat= this.game.cat;
    // debugger
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
    const cat = this.cat;
    const canvas = this.canvas
    cat.power=4;
    let powerLevel=1;
    let mouseTimeout;
    let vec=[]

    canvas.addEventListener("mousedown", getPosition, false);

    const accelerator= () => {
        mouseTimeout= setTimeout( ()=>{
       
            powerLevel += .5
            // console.log(powerLevel)
        },400)
        mouseTimeout1 = setTimeout(() => {
          
                powerLevel += .5
            // console.log(powerLevel)

        }, 650)
        mouseTimeout2 = setTimeout(() => {

            powerLevel += .5
            // console.log(powerLevel)

        }, 900)
        mouseTimeout3 = setTimeout(() => {

            powerLevel += .5
            // console.log(powerLevel)

        }, 1200)
        mouseTimeout4 = setTimeout(() => {

            powerLevel += .5
            // console.log(powerLevel)

        }, 1500)
    }

    function getPosition(event) {
        // mouseTimeout= setTimeout(accelerator(),300)
        accelerator()

        let x = event.x;
        let y = event.y;

        x -= cat.pos[0];
        y -= cat.pos[1];
        vec = [x,y]
       
    }

    canvas.addEventListener("mouseup", function () {

        clearTimeout(mouseTimeout);
        clearTimeout(mouseTimeout1);
        clearTimeout(mouseTimeout2);
        clearTimeout(mouseTimeout3);
        clearTimeout(mouseTimeout4);
        cat.attack(vec,powerLevel);
        powerLevel=1;
        // setTimeout(()=>{
        //     if (powerLevel >1) {
        //         powerLevel -= .5
        //     }

        // },500)
    }, false);
  


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

    this.game.step(timeDelta);
    this.game.draw(this.ctx);
    this.lastTime = time;

    // every call to animate requests causes another call to animate
    requestAnimationFrame(this.animate.bind(this));
};

module.exports = GameView;