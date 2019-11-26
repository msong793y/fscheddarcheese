const Util = require("./util.js");
const EnemeyObject = require("./enemy_object");
Util.inherits(TinyMouse, EnemeyObject);



function TinyMouse(data){

  
    EnemeyObject.call(this,{
        pos: data.pos,
        vel: data.vel,
        radius: 10
    })






}

module.exports = TinyMouse;