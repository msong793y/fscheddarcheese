const Util = require("./util.js");
const EnemeyObject = require("./enemy_object");
Util.inherits(TinyMouse, EnemeyObject);



function TinyMouse(data){

    this.health = 10;

    EnemeyObject.call(this,{
        pos: data.pos,
        vel: data.vel,
        speed: .7,
        radius: 10,
        game: data.game
    })






}

module.exports = TinyMouse;