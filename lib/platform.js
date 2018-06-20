function Platform(x,y){
  this.x = x;
  this.y = y;
  this.img = loadImage("images/grass.png");
}

Platform.prototype.draw =  function(){
  image(this.img,this.x,this.y,45,10);
};

Platform.prototype.collidesWith = function(doodler){
  var pT = this.y  ; //height from where we want doodler to land
  var dB = doodler.loc.y + doodler.s-5; // doodler bottom
  if(Math.abs(pT - dB) < 5 && (doodler.vel.y > 0)){
     var pLX = this.x; // platform left most x bound
     var pRX = this.x + 45 ;//platform right most x bound

     var dLX = doodler.loc.x - doodler.s-5 ;//doodler left most x bound
     var dRX = doodler.loc.x + doodler.s-5 ;//doodler right most x bound
     var x = doodler.loc.x;
     if((dLX >= pLX && dLX <= pRX) || (dRX >= pLX && dRX <= pRX)){
       return true;
     }
    }
  return false;
};
