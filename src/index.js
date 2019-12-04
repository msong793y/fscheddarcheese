console.log("Webpack is working!")

const Game = require('./game.js');
const GameView = require('./game_view.js');
const Modal = require("./modal")


const MovingObject = require("./moving_object.js");


// testing
window.MovingObject = MovingObject;


window.addEventListener('DOMContentLoaded', () => {
    Modal();
    const canvas = document.getElementById('game-canvas');
    const ctx = canvas.getContext('2d');



    document.getElementById("start")
    start.addEventListener('click', () => {
        
       
        // start.disabled = 'true'
        // restart.disabled=false;
        // const canvas = document.getElementById('game-canvas');
        // const ctx = canvas.getContext('2d');
        const view = new GameView(ctx, canvas) 
    
    })

    // restart.disabled = true;
    // restart.addEventListener('click', () => {
    //     // const newGame = new Game()
    //     // const newGameView = new GameView(newGame, ctx, canvas)
    //     // newGame.addSloth();
    //     // newGame.setStage();
    //     // newGame.addCat();
    //     // newGameView.start();
    // })

})

