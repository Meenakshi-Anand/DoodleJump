function Doodler(x,y,enemy){
  this.loc = createVector(x,y);
  this.vel = createVector(0,(!enemy)-5,0);
  this.img = loadImage("images/doodle.png");
  this.enemy = enemy;
  this.s = 50;
}

Doodler.prototype.update = function(){
 this.loc.add(this.vel);
}


Doodler.prototype.applyForce= function(force){
 this.vel.add(force);
 this.vel.x *= 0.8;
}

Doodler.prototype.draw = function(){
  image(this.img,this.loc.x,this.loc.y,50,50);
}

Doodler.prototype.jump = function(){
  this.vel.y *= 0;
  this.applyForce(createVector(0,-10));
}
