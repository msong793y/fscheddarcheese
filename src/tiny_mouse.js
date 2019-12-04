const Util = require("./util.js");
const EnemeyObject = require("./enemy_object");
Util.inherits(TinyMouse, EnemeyObject);

var tMImage = new Image();
tMImage.src = './assets/rat.png';

function TinyMouse(data){

    

    EnemeyObject.call(this,{
        pos: data.pos,
        vel: data.vel,
        speed: .5,
        radius: 20,
        game: data.game,
        health: 20,
        attack: 10,
        type: "tinyMouse",
        color: "none",
        image: tMImage

    })






}

module.exports = TinyMouse;