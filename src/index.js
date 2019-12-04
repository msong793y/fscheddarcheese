console.log("Webpack is working!")

const Game = require('./game.js');
const GameView = require('./game_view.js');
const Modal = require("./modal")


const MovingObject = require("./moving_object.js");


// testing
window.MovingObject = MovingObject;


window.addEventListener('DOMContentLoaded', () => {

    const canvas = document.getElementById('game-canvas');
    const ctx = canvas.getContext('2d');
    Modal();


    const game = new Game()
    const view = new GameView(game,ctx,canvas)


    start.className = 'shown'
    start.addEventListener('click', () => {
        view.start();        
        start.disabled = 'true'
        restart.disabled=false;
    })

    restart.disabled = true;
    restart.addEventListener('click', () => {
        const newGame = new Game()
        const newGameView = new GameView(newGame, ctx, canvas)
        newGameView.start();
    })

})

