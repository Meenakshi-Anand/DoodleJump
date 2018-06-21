function Platform(x,altitude){
  this.x = x;
  this.altitude = altitude;//altitude
  this.img = loadImage("images/grass.png");
  this.onScreen = true;
}

Platform.prototype.draw =  function(altitude){
  if(altitude - this.altitude < height/2){
  image(this.img,this.x,(altitude-this.altitude + height/2),45,10);
  }else{
  this.onScreen = false;
  }
};

Platform.prototype.collidesWith = function(doodler){
  var pT = this.altitude  ; //height from where we want doodler to land
  var dB = doodler.loc.y - doodler.s- 5; // doodler bottom
  if(Math.abs(pT - dB) < -doodler.vel.y && (pT < dB)){
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
