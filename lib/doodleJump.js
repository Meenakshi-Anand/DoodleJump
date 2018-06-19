
var GRAVITY = 0.3;
var player;
function setup(){
  createCanvas(400,600);
  bg = loadImage("../images/background.png");

  player = new Doodler(width/2,height-50,false);
}

function draw(){

  background(bg);
  player.update();
  player.draw();
}

function keyPressed(){
  if(keyCode === 32){
    //Jump
  }
}
