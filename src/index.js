console.log("Webpack is working!")

const Game = require('./game.js');
const GameView = require('./game_view.js');
const Modal = require("./modal")


const MovingObject = require("./moving_object.js");


// testing
window.MovingObject = MovingObject;

// music
const bgMusic = new Audio('./assets/thousandknives.mp3');
let game = new Game();
bgMusic.volume = .8;


window.addEventListener('DOMContentLoaded', () => {
    Modal();
    const canvas = document.getElementById('game-canvas');
    const ctx = canvas.getContext('2d');
    let mute = document.getElementById('mute')
   
    mute.addEventListener('click', () => {

        bgMusic.pause();
        game.toggleSound();
        unmute.disabled=false;
        mute.disabled=true;
        
    })
    
    let unmute = document.getElementById('unmute')
    unmute.disabled = true;
    unmute.addEventListener('click', () => {

        bgMusic.play();
        game.toggleSound();
        unmute.disabled = true;
        mute.disabled = false;
        
    })

    let start = document.getElementById('start')
    start.addEventListener('click', () => {
        
       
        start.disabled = 'true'
        restart.disabled= false;
        const view = new GameView(ctx, canvas, game) 
        bgMusic.play();
    
    })

   
    let restart = document.getElementById('restart');
    restart.disabled = true;
    restart.addEventListener('click', () => {
        location.reload();
      
    })

    let pause = document.getElementById('pause');
    pause.addEventListener("click",()=>{
        game.togglePause();
    })

})

