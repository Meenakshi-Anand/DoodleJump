
var GRAVITY = 0.6;
var player;
var platforms = [];

function setup(){
  createCanvas(400,500);
  bg = loadImage("../images/background.png");

  player = new Doodler(width/2,height-90,false);
  for(var i=0; i < 10; i++) {
    for(var j=0; j < 10; j++) {
      var x = noise(i,j)*width;
      var y = noise(j,i)*height;
      platforms.push(new Platform(x,y));
    }
  }

}

function draw(){

  background(bg);
  player.update();
  player.draw();
  player.applyForce(createVector(0,GRAVITY));
  for(var i=0;i<platforms.length;i++){
    platforms[i].draw();
  }
  if(player.loc.y > height){
     endGame();
  }

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
