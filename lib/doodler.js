function Doodler(x,a,enemy){
  this.loc = createVector(x,a);
  this.vel = createVector(0,0);
  this.img = loadImage("images/doodle.png");
  this.enemy = enemy;
  this.maxA = a;//max altitude
  this.premaxAltitude = a;
  this.eImage = loadImage("images/doodleenemy.png");
  this.force = 12;
  this.drone = 0;
  this.s = 50;
  this.onScreen = true;
  this.newSong = loadSound("sounds/jump.wav");
}

Doodler.prototype.update = function(){
  if(this.enemy){
    this.drone += map(this.maxA, 0, 15000, 0.0001, 0.1);
    this.loc.x = (Math.sin(this.drone) * (width / 2)) + width / 2;
  }else{
   this.loc.add(this.vel);
   this.vel.x *= 0.8;
   player.applyForce(createVector(0,GRAVITY));
   this.maxA = (this.loc.y > this.maxA ) ? this.loc.y :this.maxA;
  }
};


Doodler.prototype.applyForce= function(force){
 this.vel.add(force);
};

Doodler.prototype.draw = function(altitude){

  if (this.enemy) {
		// draw relative to platforms
    if (altitude - this.loc.y < height) {
			// if it is on-screen
      image(this.eImage,this.loc.x, (altitude - this.loc.y + height / 2), 50,50);
    } else {
      this.onScreen = false;
    }
  } else {
		// draw regularly
    image(this.img,this.loc.x,height/2,50,50);
  }
};

Doodler.prototype.jump = function(){
  this.vel.y *= 0;
  this.newSong.play();
  if (this.premaxAltitude === this.maxA) {
		// stronger hop as the altitude remains constant

    this.force = constrain(this.force + 1, 12, 8);
  } else {

    this.force = 12;
  }

  this.applyForce(createVector(0, this.force));

  this.premaxAltitude = this.maxA;
};

Doodler.prototype.collidesWith = function(doodler) {

  var distance = dist(doodler.loc.x, doodler.loc.y, this.loc.x, this.loc.y);

  if (distance < (50/ 2 + 50 / 2)) {
		// distance is greater than radii combined

    if (doodler.loc.y < this.loc.y) {
			// underneath doodler

      endGame();
      return false;
    } else {
      return true;
    }
  }
};
