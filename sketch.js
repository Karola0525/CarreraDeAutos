var canvas;
var backgroundImage;
var bgImg;
var database;
var form, player;
var playerCount;

var allPlayers,car1,car2,gameState, powerCoins,fuels
var cars=[]

function preload() {
  backgroundImage = loadImage("./assets/background.png");
  car1_img = loadImage("assets/car1.png");
  car2_img = loadImage("assets/car2.png");
  track = loadImage("assets/track.jpg");

  fuelImage=loadImage("../assets/fuel.png")
  powerCoinImage=loadImage("../assets/dolar.png")
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  
}

function draw() {
  background(backgroundImage);
  if(playerCount===2){
    game.update(1);
  }

  if(gameState===1){
    game.play();
  }
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
