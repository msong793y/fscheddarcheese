// const EnemeyObject = require('./enemy_object');
const Util = require("./util.js");

const Sloth= require("./sloth")
const Cat = require("./cat")
const TinyMouse =require('./tiny_mouse')


const Game = function() {
    this.DIM_X = 800;
    this.DIM_Y= 500;
    this.sloth = new Sloth({ pos: [250, 100], vel: [0, 0], health: 1000, game: this })
    this.cat = new Cat({ pos: [300, 100], vel: [0, 0], game: this})
    this.enemies=[];
    this.entities = [];
    this.addSloth();
    this.addEnemies();
    this.addCat();
}

// adding enemies into the array
Game.prototype.addEnemies = function (){
    let enemyCount= 20

    while(enemyCount > 0){
        let pos = this.startingPosition();
        let that = this;
        this.enemies.push(new TinyMouse({ pos: pos, vel: Util.randomVec(3), game: that }));
        enemyCount--;
    }
    this.entities= this.entities.concat(this.enemies)
    return this.enemies;
    // //adding Sloth
    // this.entities.push(new Sloth({pos:[250,100], vel:Util.randomVec(5),health:1000}))

}

Game.prototype.addSloth = function () {
    //adding Sloth
    this.entities.push(this.sloth)
    // return this.sloth;
}
Game.prototype.addCat = function () {
    //adding cat
    this.entities.push(this.cat)
    // return this.cat;
}
//each Step

Game.prototype.step = function step(delta) {
    this.moveObjects(delta);
    this.checkCollisions();
};

Game.prototype.checkCollisions=function(){
    const sloth = this.sloth;
    const cat = this.cat;
    for(let i = 0; i<this.enemies.length; i++){
        // debugger
        const object = this.enemies[i];
        if (sloth.isCollidedWith(object)){
            // const collision = sloth.collideWith(object)
            // if(collision)return
            object.remove()
        }
        if (cat.isCollidedWith(object)) {
            // const collision = sloth.collideWith(object)
            // if(collision)return
            object.remove()
        }
    }
}

// Game.prototype.stopSloth() = function (){
//     console.log("hi")
// }


// intial rendering starting position
Game.prototype.startingPosition = function (){
    let x = this.DIM_X;
    let y = Math.random()* this.DIM_Y;
    return [x,y]
}

//Drawing enemies on the board
Game.prototype.draw = function (ctx){
    ctx.clearRect(0,0,this.DIM_X,this.DIM_Y)
    ctx.fillStyle = "orange";
    ctx.fillRect(0, 0, this.DIM_X, this.DIM_Y);
    

    //populating entities
    for( let i=0; i<this.entities.length; i++){
        this.entities[i].draw(ctx)
    }
}

//Moving Entities
Game.prototype.moveObjects = function (delta){

    for (let i = 0; i < this.entities.length; i++) {
        this.entities[i].move(delta)
    }
}

// Remove Object
Game.prototype.remove = function remove(object) {
    // console.log(object)
    // console.log(this.enemies.indexOf(object))
    this.enemies.splice(this.enemies.indexOf(object),1);
    this.entities = [this.sloth,this.cat].concat(this.enemies)
};

module.exports = Game;

