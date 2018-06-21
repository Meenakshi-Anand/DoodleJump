function Platform(x,a){
  this.x = x;
  this.a = a;//altitude
  this.img = loadImage("images/grass.png");
}

Platform.prototype.update = function(altitude){
 
};

Platform.prototype.draw =  function(altitude){
  if(Math.abs(this.a - altitude) < height){
  image(this.img,this.x,altitude-this.a,45,10);
}
};

Platform.prototype.collidesWith = function(doodler){
  var pT = this.a  ; //height from where we want doodler to land
  var dB = doodler.loc.y - doodler.s-5; // doodler bottom
  if(Math.abs(pT - dB) < 5 && (doodler.vel.y < 0)){
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
