const EnemeyObject = require('./enemy_object');


const Game = function() {
    this.DIM_X = 800;
    this.DIM_Y= 600;
    this.entities = []
    this.addEnemies();
}

// adding enemies into the array
Game.prototype.addEnemies = function (){
    let enemyCount= 20

    while(enemyCount > 0){
        let pos = this.startingPosition();
        this.entities.push(new EnemeyObject({pos:pos}));
        enemyCount--;
    }

}

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
Game.prototype.moveObjects = function (){

    for (let i = 0; i < this.entities.length; i++) {
        this.entities[i].move()
    }
}


module.exports = Game;

