function Doodler(x,y,enemy){
  this.loc = createVector(x,y);
  this.vel = createVector(0,0);
  this.img = loadImage("images/doodle.png");
  this.enemy = enemy;
}

Doodler.prototype.update = function(){
 this.loc.add(this.vel);
}


Doodler.prototype.applyForce= function(force){
 this.vel.add(this.force);
 this.vel.mult(0.8);
}

Doodler.prototype.draw = function(){
  image(this.img,this.loc.x,this.loc.y,50,50);
}
