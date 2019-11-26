const Util = require("./util");


function MovingObject(options) {
    this.pos = options.pos;
    this.vel = options.vel;
    this.radius = options.radius;
};



MovingObject.prototype.draw = function draw(ctx) {
    ctx.fillStyle = "blue";

    ctx.beginPath();
    ctx.arc(
        this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true
    );
    ctx.fill();
};

MovingObject.prototype.move = function () {
    let x = this.pos[0] + this.vel[0];
    let y = this.pos[1] + this.vel[1];
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



module.exports = MovingObject;
