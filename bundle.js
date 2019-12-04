!function(t){var e={};function i(s){if(e[s])return e[s].exports;var o=e[s]={i:s,l:!1,exports:{}};return t[s].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=t,i.c=e,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(s,o,function(e){return t[e]}.bind(null,o));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=4)}([function(t,e){const i={inherits(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t},randomVec(t){const e=-1*Math.PI*Math.random();return i.scale([Math.sin(e),Math.cos(e)],t)},scale:(t,e)=>[t[0]*e,t[1]*e],dist:(t,e)=>Math.sqrt(Math.pow(t[0]-e[0],2)+Math.pow(t[1]-e[1],2)),dir(t){const e=i.norm(t);return i.scale(t,1/e)},norm:t=>i.dist([0,0],t)};t.exports=i},function(t,e,i){const s=i(0);function o(t){this.pos=t.pos,this.vel=t.vel,this.radius=t.radius,this.game=t.game,this.color=t.color,this.multiplier=t.multiplier||1,this.speed=t.speed,this.health=t.health,this.attack=t.attack,this.type=t.type,this.range=t.range,this.image=t.image}o.prototype.collideWith=function(t){},o.prototype.draw=function(t){t.fillStyle=this.color,"cat"===this.type?t.drawImage(this.image,this.pos[0]-this.radius,this.pos[1]-this.radius,2.5*this.radius,2.5*this.radius):"sloth"===this.type?(console.log(this.vel),t.drawImage(this.image,5,5,30,30,this.pos[0]-this.radius,this.pos[1]-this.radius,2.5*this.radius,2.5*this.radius)):"tinyMouse"===this.type?this.vel[0]<0?t.drawImage(this.image,0,100,32,32,this.pos[0]-this.radius,this.pos[1]-this.radius,1.5*this.radius,1.5*this.radius):t.drawImage(this.image,0,32,32,32,this.pos[0]-this.radius,this.pos[1]-this.radius,1.5*this.radius,1.5*this.radius):"homingMouse"===this.type?this.vel[0]<0?t.drawImage(this.image,0,100,32,32,this.pos[0]-this.radius,this.pos[1]-this.radius,1.5*this.radius,1.5*this.radius):t.drawImage(this.image,0,32,32,32,this.pos[0]-this.radius,this.pos[1]-this.radius,1.5*this.radius,1.5*this.radius):(t.beginPath(),t.arc(this.pos[0],this.pos[1],this.radius,0,2*Math.PI,!0),t.fill())};o.prototype.move=function(t){const e=t/(1e3/60),i=this.vel[0]*e*this.speed*this.multiplier,s=this.vel[1]*e*this.speed*this.multiplier;let o=this.pos[0]+i,n=this.pos[1]+s;(o>800||o<0)&&(this.vel[0]=-this.vel[0]),(n>500||n<0)&&(this.vel[1]=-this.vel[1]),this.pos[0]=o,this.pos[1]=n},o.prototype.isCollidedWith=function(t){return s.dist(this.pos,t.pos)<this.radius+t.radius},o.prototype.isInRangeOf=function(t,e){return s.dist(this.pos,e.pos)<this.radius+e.radius+t},o.prototype.remove=function(){this.game.remove(this)},o.prototype.takeDamage=function(t){this.health-=t,this.health<0?"sloth"===this.type?alert("gameOver"):"tinyMouse"===this.type&&this.game.remove(this):"homingMouse"===this.type&&this.game.remove(this)},t.exports=o},function(t,e,i){const s=i(0),o=i(5),n=i(6),h=i(7),a=i(8);var r=new Image;r.src="./assets/bg2.png";const u=function(){this.DIM_X=800,this.DIM_Y=500,this.sloth=new o({pos:[250,100],vel:[0,0],health:1e3,game:this}),this.cat=new n({pos:[300,100],vel:[0,0],game:this}),this.enemies=[],this.tinyMouse=[],this.homingMouse=[],this.entities=[],this.level=1,this.gameTinyMouseCount=0,this.gameHomingMouseCount=0,this.addSloth(),this.addCat(),this.setStage()};u.prototype.setStage=function(){this.gameTinyMouseCount=50,this.gameHomingMouseCount=20,this.addEnemies(20,5)},u.prototype.checkGameProgression=function(){this.gameTinyMouseCount>0||this.gameHomingMouseCount>0?(this.tinyMouse.length<10&&this.gameTinyMouseCount>9&&(this.gameTinyMouseCount-=10,this.addEnemies(10,0)),this.homingMouse.length<3&&this.gameHomingMouseCount>4&&(this.gameHomingMouseCount-=5,this.addEnemies(0,5))):this.gameTinyMouseCount<3&&this.gameHomingMouseCount<1&&this.tinyMouse.length<2&&0===this.homingMouse.length&&alert("you won")},u.prototype.addEnemies=function(t,e){for(;t>0;){let e=this.startingPosition(),i=this;this.tinyMouse.push(new h({pos:e,vel:s.randomVec(3),game:i})),t--}for(;e>0;){let t=this.startingPosition(),i=this;this.homingMouse.push(new a({pos:t,vel:s.randomVec(3),game:i})),e--}this.enemies=this.tinyMouse.concat(this.homingMouse),this.entities=[this.sloth,this.cat].concat(this.enemies)},u.prototype.addSloth=function(){this.entities.push(this.sloth)},u.prototype.addCat=function(){this.entities.push(this.cat)},u.prototype.step=function(t){this.moveObjects(t),this.checkCollisions(),this.checkInRange(),this.checkGameProgression()},u.prototype.checkCollisions=function(){const t=this.sloth,e=this.cat;for(let i=0;i<this.enemies.length;i++){const s=this.enemies[i];t.isCollidedWith(s)&&t.takeDamage(s.attack),e.isCollidedWith(s)&&s.takeDamage(e.attack*e.speed)}},u.prototype.checkInRange=function(){const t=this.sloth;for(let e=0;e<this.homingMouse.length;e++){const i=this.homingMouse[e];i.isInRangeOf(i.range,t)&&i.retarget(t)}},u.prototype.startingPosition=function(){return[this.DIM_X-30,Math.random()*this.DIM_Y]},u.prototype.draw=function(t){let e=this.enemies.length+this.gameTinyMouseCount+this.gameHomingMouseCount;t.clearRect(0,0,this.DIM_X,this.DIM_Y),t.drawImage(r,0,0),t.fillStyle="red",t.font="25px Arial",t.fillText(`Health ${this.sloth.health} /5000`,50,480),t.fillText(`${e} Enemies Left`,550,480);for(let e=0;e<this.entities.length;e++)this.entities[e].draw(t)},u.prototype.moveObjects=function(t){for(let e=0;e<this.entities.length;e++)this.entities[e].move(t)},u.prototype.remove=function(t){switch(t.type){case"homingMouse":this.homingMouse.splice(this.homingMouse.indexOf(t),1),this.enemies=this.tinyMouse.concat(this.homingMouse),this.entities=[this.sloth,this.cat].concat(this.enemies);break;case"tinyMouse":this.tinyMouse.splice(this.tinyMouse.indexOf(t),1),this.enemies=this.homingMouse.concat(this.tinyMouse),this.entities=[this.sloth,this.cat].concat(this.enemies)}},t.exports=u},function(t,e,i){const s=i(0),o=i(1);function n(t){o.call(this,{pos:t.pos,speed:t.speed,vel:t.vel,radius:t.radius,game:t.game,color:t.color,health:t.health,attack:t.attack,range:t.range,type:t.type,image:t.image})}s.inherits(n,o),t.exports=n},function(t,e,i){console.log("Webpack is working!");i(2);const s=i(9),o=i(10),n=i(1);window.MovingObject=n,window.addEventListener("DOMContentLoaded",()=>{o();const t=document.getElementById("game-canvas"),e=t.getContext("2d");document.getElementById("start"),start.addEventListener("click",()=>{start.disabled="true",restart.disabled=!1;new s(e,t)}),restart.disabled=!0,restart.addEventListener("click",()=>{new s(e,t)})})},function(t,e,i){const s=i(0),o=i(1);s.inherits(h,o);var n=new Image;function h(t){t.radius=20,t.vel=t.vel||[0,0],t.game=t.game,t.speed=1.9,t.color="green",t.health=5e3,t.attack=0,t.type="sloth",t.image=n,o.call(this,t)}n.src="./assets/sloth.png";var a=null;h.prototype.power=function(t){this.vel[0]=t[0],this.vel[1]=t[1];let e=this;clearTimeout(a),a=setTimeout(()=>{e.vel[0]=0,e.vel[1]=0},500)},h.prototype.power,t.exports=h},function(t,e,i){const s=i(0),o=i(1);s.inherits(h,o);var n=new Image;function h(t){this.radius=20,this.vel=t.vel||[0,0],this.color="red",this.game=t.game,this.speed=4.5,this.image=n,o.call(this,{pos:t.pos,vel:t.vel,speed:this.speed,radius:this.radius,color:this.color,game:t.game,health:-1,attack:1,multiplier:1,type:"cat",image:this.image})}n.src="./assets/cat2.png";var a=null,r=null,u=null,l=null,c=null,p=null,m=null,d=null;h.prototype.attackAction=function(t){clearTimeout(a),clearTimeout(r),clearTimeout(u),clearTimeout(l),clearTimeout(c),clearTimeout(p),clearTimeout(m),clearTimeout(d),this.speed=4.5;const e=s.dir(t);this.vel[0]=e[0],this.vel[1]=e[1],a=setTimeout(()=>{this.reduceSpeed()},2e3),r=setTimeout(()=>{this.reduceSpeed()},2500),u=setTimeout(()=>{this.reduceSpeed()},3500),l=setTimeout(()=>{this.reduceSpeed()},4500),c=setTimeout(()=>{this.reduceSpeed()},2900),p=setTimeout(()=>{this.reduceSpeed()},3400),m=setTimeout(()=>{this.reduceSpeed()},3800),d=setTimeout(()=>{this.reduceSpeed()},4200)},h.prototype.reduceSpeed=function(){let t=this;t.speed>0?t.speed-=.5:t.speed<0&&(t.speed=0)},t.exports=h},function(t,e,i){const s=i(0),o=i(3);s.inherits(h,o);var n=new Image;function h(t){o.call(this,{pos:t.pos,vel:t.vel,speed:.5,radius:20,game:t.game,health:20,attack:10,type:"tinyMouse",color:"none",image:n})}n.src="./assets/rat.png",t.exports=h},function(t,e,i){const s=i(0),o=i(3);s.inherits(h,o);var n=new Image;function h(t){o.call(this,{pos:t.pos,vel:t.vel,speed:.6,radius:25,game:t.game,health:25,attack:15,range:280,type:"homingMouse",color:"pink",image:n})}n.src="./assets/mouse.png",h.prototype.retarget=function(t){let e=t.pos[0],i=t.pos[1];e-=this.pos[0],i-=this.pos[1],oldVec=[e,i],this.speed=1.8;const o=s.dir(oldVec);this.vel[0]=o[0],this.vel[1]=o[1]},t.exports=h},function(t,e,i){const s=i(2);let o,n,h,a,r,u="",l=[];const c=function(t,e){this.game=new s,this.canvas=e,this.ctx=t,this.sloth=this.game.sloth,this.enemies=this.game.enemies,this.cat=this.game.cat,u=this.cat,e=this.canvas,this.entities=this.game.entities,this.start()};function p(t){let e=t.x,i=t.y;e-=u.pos[0],i-=u.pos[1],l=[e,i],u.vel=[0,0],m()}const m=()=>{clearTimeout(o),clearTimeout(n),clearTimeout(h),clearTimeout(a),clearTimeout(r),u.attackAction(l)};c.MOVES={w:[0,-2],a:[-2,0],s:[0,2],d:[2,0]},c.prototype.bindKeyHandlers=function(){const t=this.sloth;Object.keys(c.MOVES).forEach((function(e){const i=c.MOVES[e];key(e,(function(){t.power(i)}))}))},c.prototype.clickHandlers=function(){const t=this.canvas;t.addEventListener("mousedown",()=>{u.multiplier=1,o=setTimeout(()=>{u.multiplier+=.2},300),n=setTimeout(()=>{u.multiplier+=.2},550),h=setTimeout(()=>{u.multiplier+=.3},800),a=setTimeout(()=>{u.multiplier+=.5},1100),r=setTimeout(()=>{u.multiplier+=.5},1400)},!1),t.addEventListener("mouseup",p,!1)},c.prototype.start=function(){this.bindKeyHandlers(),this.clickHandlers(),this.lastTime=performance.now(),requestAnimationFrame(this.animate.bind(this))},c.prototype.animate=function(t){const e=t-this.lastTime;this.game.step(e),this.game.draw(this.ctx),this.lastTime=t,requestAnimationFrame(this.animate.bind(this))},t.exports=c},function(t,e){t.exports=function(){let t=document.querySelector(".modal"),e=document.querySelector(".trigger"),i=document.querySelector(".close-button");function s(){t.classList.toggle("show-modal")}t.classList.toggle("show-modal"),e.addEventListener("click",s),i.addEventListener("click",s),window.addEventListener("click",(function(e){e.target===t&&s()}))}}]);
//# sourceMappingURL=bundle.js.map