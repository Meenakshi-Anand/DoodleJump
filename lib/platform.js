function Platform(x,y){
  this.x = x;
  this.y = y;
  this.img = loadImage("images/grass.png");
}

Platform.prototype.draw =  function(){
  image(this.img,this.x,this.y,45,10);
}
