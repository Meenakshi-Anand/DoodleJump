
var GRAVITY = -0.6;
var player;
var platforms = [];

function setup(){
  createCanvas(400,500);
  bg = loadImage("../images/background.png");

  player = new Doodler(width/2,height/2,false);

  // Platform setup
  //noise to bring uniformity in how platforms are distributed
  for(var y=0; y< height/2; y+=50){
    for(var i=0; i < 3; i++) {
      var x = noise(i,y)*width; //noise produces values between 0 and 1
      if(noise(y,i) > 0.5){
      platforms.push(new Platform(x,y));
      }
    }
  }
 frameRate(60);

}

function draw(){

  background(bg);

  player.update();
  player.draw();

  if(player.loc.y > height){
     endGame();
  }

  // translate(0,player.loc.y);


  for(var i=0;i<platforms.length;i++){
    platforms[i].draw(player.loc.y);
    if(platforms[i].collidesWith(player)){
      player.jump();
    }
  }

  player.applyForce(createVector(0,GRAVITY));
  handleKeys();

}

function handleKeys(){
  if(keyIsDown(LEFT_ARROW)){
    player.applyForce(createVector(-1,0));
  }else if (keyIsDown(RIGHT_ARROW)){
    player.applyForce(createVector(1,0));
  }
}

function endGame(){
  textAlign(CENTER);
  textSize(50);
  noStroke();
  fill("#A0522D");
  text("Game Over !!",width/2,height/2);
  noLoop();
}

// function keyPressed(){
//   if(keyCode == 32){
//     player.applyForce(createVector(0,-5));
//   }
// }
