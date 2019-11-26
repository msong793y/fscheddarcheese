const Util = require("./util.js");
const MovingObject = require("./moving_object.js");
Util.inherits(Cat, MovingObject);

// let timer = 1000;

function Cat(data) {

    data.radius = 20
    data.vel = data.vel || [0, 0];
    MovingObject.call(this, data);

}
var timeout = null

Cat.prototype.power = function power(impulse) {

    this.vel[0] = impulse[0];
    this.vel[1] = impulse[1];
    let that = this;
    clearTimeout(timeout)
    // timeout = setTimeout(() => { console.log("hi")}, 500)

    timeout = setTimeout(() => { that.vel[0] = 0; that.vel[1] = 0 }, 300)
    // timer = 1000
    // while (timer>0){
    //     setInterval(()=>{timer-=100},100)
    // }Aasww
    // if (timer <= 0){
    //     that.vel[0]=0;
    //     that.vel[1]=0;
    // }
    // setTimeout(()=>{that.vel[0]= 0; that.vel[1]=0}, 1000);
    // that.vel[0] = 0; that.vel[1] = 0
};



module.exports = Cat;