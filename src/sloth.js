const Util = require("./util.js");
const MovingObject = require("./moving_object.js");
Util.inherits(Sloth, MovingObject);


function Sloth(data) {
    
    data.radius = 20
    data.vel = data.vel || [0,0];
    MovingObject.call(this,data);
    this.health = data.health

}

Sloth.prototype.power = function power(impulse) {
    this.vel[0] = impulse[0];
    this.vel[1] = impulse[1];
    let that = this
    // while( this.vel[0]>0){
    //     setTimeout(()=>{that.vel[0]= that.vel[0]-.2;}, 200)
    // }
    // while (this.vel[1] > 0) {
    //     setTimeout(() => { that.vel[1] = that.vel[1] - .2; }, 200)
    // }
    // that.vel[0] = 0; that.vel[1] = 0
};


module.exports = Sloth;