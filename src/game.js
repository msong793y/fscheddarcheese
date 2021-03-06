// const EnemeyObject = require('./enemy_object');
const Util = require("./util.js");

const Sloth= require("./sloth")
const Cat = require("./cat")
const TinyMouse =require('./tiny_mouse')
const HomingMouse = require('./homing_mouse')

var backgroundImage = new Image();
backgroundImage.src = './assets/bg2.png'; 


const Game = function() {
    this.DIM_X = 800;
    this.DIM_Y= 500;
    this.sloth = new Sloth({ pos: [250, 100], vel: [0, 0], health: 1000, game: this })
    this.cat = new Cat({ pos: [300, 100], vel: [0, 0], game: this})
    this.enemies=[];
    this.tinyMouse=[];
    this.homingMouse=[];
    this.entities = [];
    this.level = 1;
    this.soundActive=true;
    this.gameTinyMouseCount=0;
    this.gameHomingMouseCount=0;
    this.yippieSound = new Audio('./assets/yippie.mp3');
    this.yippieSound.volume = .3;
    this.gameStatus = "continue";
    this.gamePuase = "continue"
    this.addSloth();
    this.addCat();
    this.setStage();
    
    
}

Game.prototype.toggleSound = function () {
    if (this.soundActive===true){
        this.soundActive= false;
    } else{
        this.soundActive= true;
    }

}



Game.prototype.setStage = function () {
   this.gameTinyMouseCount=50;
   this.gameHomingMouseCount=20;

   this.addEnemies(20,5);
   
}
// checking to see if enemies needs to be repopulated
Game.prototype.checkGameProgression = function () {
 
    // console.log(this.gameTinyMouseCount)
    // console.log(this.tinyMouse.length)

    if (this.gameTinyMouseCount>0 || this.gameHomingMouseCount>0){
        if (this.tinyMouse.length < 10 && this.gameTinyMouseCount > 9){
            
            this.gameTinyMouseCount-=10;
            this.addEnemies(10,0)
        }
        if (this.homingMouse.length<3 && this.gameHomingMouseCount>4){
            this.gameHomingMouseCount-=5;
            this.addEnemies(0,5)
        } 

    } 
    else if (this.gameTinyMouseCount < 3 && this.gameHomingMouseCount < 1 && this.tinyMouse.length<2 &&this.homingMouse.length===0){
        this.gameStatus = "won";
    }
      
    

}
// adding enemies into the array
Game.prototype.addEnemies = function (tinyMouseCount, homingMouseCount){
   
    while(tinyMouseCount > 0){
        let pos = this.startingPosition();
        let that = this;
        this.tinyMouse.push(new TinyMouse({ pos: pos, vel: Util.randomVec(3), game: that }));
        tinyMouseCount--;
    }
    while (homingMouseCount > 0) {
        let pos = this.startingPosition();
        let that = this;
        this.homingMouse.push(new HomingMouse({ pos: pos, vel: Util.randomVec(3), game: that }));
        homingMouseCount--;
    }

    this.enemies=this.tinyMouse.concat(this.homingMouse)
    this.entities = [this.sloth,this.cat].concat(this.enemies)

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
    if(this.gamePuase==="continue"){
    this.moveObjects(delta);
    this.checkCollisions();
    this.checkInRange();
    this.checkGameProgression();}
};


Game.prototype.checkCollisions=function(){
    const sloth = this.sloth;
    const cat = this.cat;
    for(let i = 0; i<this.enemies.length; i++){
        // debugger
        const object = this.enemies[i];
        if (sloth.isCollidedWith(object)){
           
            sloth.takeDamage(object.attack)
            if (this.soundActive===true){
            sloth.ouchSound.play();
            }
        }
        if (cat.isCollidedWith(object)) {

            object.takeDamage(cat.attack*cat.speed)
        }
    }
}


//checking to see if object is in range:
Game.prototype.checkInRange = function () {
    const sloth = this.sloth;
    for (let i = 0; i < this.homingMouse.length; i++) {
        
        const hMouse = this.homingMouse[i];
        if (hMouse.isInRangeOf(hMouse.range,sloth)) {
            hMouse.retarget(sloth)
        }
    }
}



// intial rendering starting position
Game.prototype.startingPosition = function (){
    let x = this.DIM_X-30;
    let y = Math.random()* this.DIM_Y;
    return [x,y];
}

//Drawing enemies on the board
Game.prototype.draw = function (ctx){

    if (this.gamePuase === "continue"){
    let totalEnemiesCount = this.enemies.length + this.gameTinyMouseCount + this.gameHomingMouseCount;


    ctx.clearRect(0,0,this.DIM_X,this.DIM_Y)
    ctx.drawImage(backgroundImage, 0, 0);
    // ctx.fillRect(0, 0, this.DIM_X, this.DIM_Y);
    ctx.fillStyle= "yellow";
    ctx.font = "25px Arial";
    ctx.fillText(`Health ${this.sloth.health} /5000`, 50, 480);
    ctx.fillText(`${totalEnemiesCount} Enemies Left`, 550, 480);

    //populating entities
    for( let i=0; i<this.entities.length; i++){
        this.entities[i].draw(ctx)
    }
    } else {
        
        
        ctx.fillStyle="Blue";
        ctx.font= "50px Arial";
        ctx.fillText("PAUSED",350, 280);
    }
}

Game.prototype.togglePause = function(){
    

    if (this.gamePuase=== "continue"){
        this.gamePuase="noContinue";
    } else{
        this.gamePuase="continue";
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

    switch (object.type) {
        case "homingMouse":
            this.homingMouse.splice(this.homingMouse.indexOf(object), 1);
            this.enemies = this.tinyMouse.concat(this.homingMouse)
            this.entities = [this.sloth, this.cat].concat(this.enemies)
            if (this.soundActive === true) 
            {this.yippieSound.play();}
            break;
        case "tinyMouse":
            this.tinyMouse.splice(this.tinyMouse.indexOf(object), 1);
            this.enemies = this.homingMouse.concat(this.tinyMouse)
            this.entities = [this.sloth, this.cat].concat(this.enemies)
            break;

        default:
            break;
    }
    
};

module.exports = Game;

