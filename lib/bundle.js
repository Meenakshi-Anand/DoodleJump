/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/doodleJump.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/doodleJump.js":
/*!***************************!*\
  !*** ./lib/doodleJump.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {


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


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map