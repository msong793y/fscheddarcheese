const Util = require("./util.js");
const EnemeyObject = require("./enemy_object");
Util.inherits(TinyMouse, EnemeyObject);



function TinyMouse(data){

    

    EnemeyObject.call(this,{
        pos: data.pos,
        vel: data.vel,
        speed: .6,
        radius: 10,
        game: data.game,
        health: 10,
        attack: 10,
        type: "TinyMouse",
        color: "blue"

    })






}

module.exports = TinyMouse;