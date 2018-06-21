function Doodler(x,a,enemy){
  this.loc = createVector(x,a);
  this.vel = createVector(0,0);
  this.img = loadImage("images/doodle.png");
  this.enemy = enemy;
  this.maxA = this.a;//max altitude
  this.s = 50;
}

Doodler.prototype.update = function(){
 this.loc.add(this.vel);
 this.vel.x *= 0.8;
 this.maxA = (this.loc.y > this.maxA ) ? this.loc.y :this.maxA;
};


Doodler.prototype.applyForce= function(force){
 this.vel.add(force);
};

Doodler.prototype.draw = function(){
  image(this.img,this.loc.x,this.loc.y,50,50);
};

Doodler.prototype.jump = function(){
  this.vel.y *= 0;
  this.applyForce(createVector(0,-12));

};
