const Util = require("./util.js");
const MovingObject = require("./moving_object.js");
Util.inherits(Cat, MovingObject);

// let timer = 1000;

var catImage = new Image();
catImage.src = '../assets/cat2.png';


function Cat(data) {

    this.radius = 20
    this.vel = data.vel || [0, 0];
    this.color = "red"
    this.game=data.game;
    this.speed= 4.5;
    this.image=catImage;

  
    
    MovingObject.call(this, {
        pos: data.pos,
        vel: data.vel,
        speed: this.speed,
        radius: this.radius,
        color: this.color,
        game: data.game,
        health: -1,
        attack: 1,
        multiplier: 1,
        type: "cat",
        image: this.image
    });

}
var timeout = null;
var timeout1 = null;
var timeout2 = null;
var timeout3 = null;
var timeout4 = null;
var timeout5 = null;
var timeout6 = null;
var timeout7 = null;

Cat.prototype.attackAction = function attackAction(vec) {
    clearTimeout(timeout);
    clearTimeout(timeout1);
    clearTimeout(timeout2);
    clearTimeout(timeout3);
    clearTimeout(timeout4);
    clearTimeout(timeout5);
    clearTimeout(timeout6);
    clearTimeout(timeout7);

    this.speed=4.5

    const newVec= Util.dir(vec)
    // while(powerLevel>0){
    //     setTimeout(()=>{
    //         powerLevel-=.5
    //         console.log(powerLevel)
    //     }, 500)

    this.vel[0] = newVec[0];
    this.vel[1] = newVec[1];
    // }
    
    timeout=setTimeout(()=>{this.reduceSpeed()},2000)
    timeout1=setTimeout(() => { this.reduceSpeed() }, 2500)
    timeout2=setTimeout(() => { this.reduceSpeed() }, 3500)
    timeout3 =setTimeout(() => { this.reduceSpeed() }, 4500)
    timeout4 =setTimeout(() => { this.reduceSpeed() }, 2900)
    timeout5 =setTimeout(() => { this.reduceSpeed() }, 3400)
    timeout6 =setTimeout(() => { this.reduceSpeed() }, 3800)
    timeout7 = setTimeout(() => { this.reduceSpeed() }, 4200)
}

Cat.prototype.reduceSpeed = function reduceSpeed() {
    // debugger;
    let that = this
    if (that.speed>0){
    that.speed -= 1;
    // console.log(that.speed)
    }

}

module.exports = Cat;