console.log("Webpack is working!")

const Game = require('./game.js');
const GameView = require('./game_view.js');


const MovingObject = require("./moving_object.js");


// testing
window.MovingObject = MovingObject;


window.addEventListener('DOMContentLoaded', () => {

    const canvas = document.getElementById('game-canvas');
    const ctx = canvas.getContext('2d');

    const game = new Game()
    const view = new GameView(game,ctx,canvas)

    view.start();


})

