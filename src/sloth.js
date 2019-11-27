const Util = require("./util.js");
const MovingObject = require("./moving_object.js");
Util.inherits(Sloth, MovingObject);

// let timer = 1000;

function Sloth(data) {
    
    data.radius = 30;
    data.vel = data.vel || [0,0];
    data.game= data.game;
    data.speed=1.9
    data.color="green"
    MovingObject.call(this,data);
    this.health = 1000;
    

}
var timeout = null

Sloth.prototype.power = function power(impulse) {
    
    this.vel[0] = impulse[0];
    this.vel[1] = impulse[1];
    let that = this;
    clearTimeout(timeout)
    // timeout = setTimeout(() => { console.log("hi")}, 500)

    timeout= setTimeout(()=>{that.vel[0]=0;that.vel[1]=0},500)
  
};

Sloth.prototype.power


module.exports = Sloth;