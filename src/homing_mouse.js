const Util = require("./util.js");
const EnemeyObject = require("./enemy_object");
Util.inherits(HomingMouse, EnemeyObject);



function HomingMouse(data) {



    EnemeyObject.call(this, {
        pos: data.pos,
        vel: data.vel,
        speed: 1.1,
        radius: 20,
        game: data.game,
        health: 25,
        attack: 15,
        range: 280,
        type: "HomingMouse",
        color: "pink"
    })

}

HomingMouse.prototype.retarget = function retarget(otherObject) {
  
    let x = otherObject.pos[0];
    let y = otherObject.pos[1];

    x -= this.pos[0];
    y -= this.pos[1];
    oldVec = [x, y]
    // debugger
    this.speed = 1.8

    const vec = Util.dir(oldVec)
//  debugger
    this.vel[0] = vec[0];
    this.vel[1] = vec[1];
};

module.exports = HomingMouse;