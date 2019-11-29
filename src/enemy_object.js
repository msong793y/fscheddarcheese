const Util = require("./util.js");
const MovingObject = require("./moving_object.js");
Util.inherits(EnemeyObject, MovingObject);


function EnemeyObject(data){

  
    MovingObject.call(this, {
        pos: data.pos,
        speed:data.speed,
        // vel: Util.randomVec(3)
        vel: data.vel,
        radius: data.radius,
        game: data.game,
        color: "blue",
        health: data.health,
        attack: data.attack,
        type: "enemy"
    });

}


module.exports = EnemeyObject;