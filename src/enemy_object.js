const Util = require("./util.js");
const MovingObject = require("./moving_object.js");
Util.inherits(EnemeyObject, MovingObject);


function EnemeyObject(data){

  
    MovingObject.call(this, {
        pos: data.pos,
        // vel: Util.randomVec(3)
        vel: data.vel,
        radius: data.radius,
        game: data.game


    });

}


module.exports = EnemeyObject;