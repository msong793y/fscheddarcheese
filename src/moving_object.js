const Util = require("./util");


function MovingObject(options) {
    this.pos = options.pos;
    this.vel = options.vel;
    this.radius = options.radius;
    this.game =options.game;
    this.color=options.color;
    this.multiplier=options.multiplier||1;
    this.speed=options.speed;
    this.health = options.health;
    this.attack= options.attack;
    this.type= options.type
    this.range=options.range
    this.image=options.image
};

MovingObject.prototype.collideWith = function collideWith(otherObject) {
    // default do nothing
};

MovingObject.prototype.draw = function draw(ctx) {
    ctx.fillStyle = this.color;
    // debugger
    if (this.type==="cat"){
        ctx.drawImage(this.image,this.pos[0]-this.radius,this.pos[1]-this.radius,this.radius*2.5,this.radius*2.5)

    } else if(this.type==="sloth") {
        ctx.drawImage(this.image,5,5,30,30,
             this.pos[0] - this.radius, this.pos[1] - this.radius, this.radius * 2.5, this.radius * 2.5)
    } else if (this.type === "tinyMouse") {
        ctx.drawImage(this.image, 0, 100, 32, 108,
            this.pos[0] - this.radius, this.pos[1] - this.radius, this.radius*1.5, this.radius * 4.5)
    } else if (this.type === "homingMouse") {
        ctx.drawImage(this.image, 0, 100, 32, 108,
            this.pos[0] - this.radius, this.pos[1] - this.radius, this.radius * 1.5, this.radius * 4.5)
    } else{
    ctx.beginPath();
    ctx.arc(
        this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true
    );
    ctx.fill();}
};
const NORMAL_FRAME_TIME_DELTA = 1000 / 60;

MovingObject.prototype.move = function move(timeDelta) {
const velocityScale = timeDelta / NORMAL_FRAME_TIME_DELTA,
        offsetX = this.vel[0] * velocityScale * this.speed*this.multiplier,
        offsetY = this.vel[1] * velocityScale * this.speed*this.multiplier;

    let x = this.pos[0] + offsetX;
    let y = this.pos[1] + offsetY;
    if (x > 800 || x < 0) {
        this.vel[0] = -(this.vel[0])
    }

    if (y > 500 || y < 0){
        this.vel[1] = -(this.vel[1] )
    }
    this.pos[0] = x;
    this.pos[1] = y;


};

MovingObject.prototype.isCollidedWith = function isCollidedWith(otherObject) {
    const centerDist = Util.dist(this.pos, otherObject.pos);
    return centerDist < (this.radius + otherObject.radius);
};

MovingObject.prototype.isInRangeOf = function isInRangeOf(range,otherObject) {
    // debugger
    const centerDist = Util.dist(this.pos, otherObject.pos) ;
    return centerDist < (this.radius + otherObject.radius + range);
};

MovingObject.prototype.remove = function remove() {
    // debugger
    this.game.remove(this);
};

MovingObject.prototype.takeDamage = function takeDamage(attack) {
    this.health-= attack
    if( this.health < 0){
        if (this.type === "sloth"){
            alert("gameOver")
        } else if(this.type === "tinyMouse") {
        this.game.remove(this)
        }
    } else if (this.type === "homingMouse") {
        this.game.remove(this)
    }
    
};


module.exports = MovingObject;
