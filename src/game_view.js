const Game = require('./game.js');

const GameView = function (game, ctx) {
    this.game = game;
    this.ctx = ctx;
    this.sloth = this.game.addSloth();

};

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

GameView.prototype.start = function start() {
    this.bindKeyHandlers();
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