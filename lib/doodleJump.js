
var GRAVITY = 0.3;
var player;
function setup(){
  createCanvas(400,500);
  bg = loadImage("../images/background.png");

  player = new Doodler(width/2,height-50,false);
}

function draw(){

  background(bg);
  player.update();
  player.draw();
  player.applyForce(createVector(0,GRAVITY));

  if(player.loc.y > height){
     endGame();
  }

  handleKeys();

}

function handleKeys(){

}

function endGame(){
  textAlign(CENTER);
  textSize(50);
  noStroke();
  fill("#A0522D");
  text("Game Over !!",width/2,height/2);
  noLoop();
}

function keyPressed(){
  if(keyCode == 32){
    player.applyForce(createVector(0,-5));
  }
}
