
function MovingObject(options) {
    this.pos = options.pos;
    this.vel = options.vel;
    this.radius = 5;
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
    if (x > 800) {
        x = 0;
    }
    if (x < 0) {
        x = 800;
    }
    if (y > 600) {
        y = 0;
    }
    if (y < 0) {
        y = 600;
    }
    this.pos[0] = x;
    this.pos[1] = y;

};



module.exports = MovingObject;
