var canvas;
var backgroundImage, car1_img, car2_img, track;
var fuelImage, powerCoinImage;
var obstacle1Image, obstacle2Image
var database, gameState;
var form, player, playerCount;
var allPlayers, car1, car2, fuels, powerCoins, obstacles;
var cars = [];

function preload() {
  backgroundImage = loadImage("./assets/planodefundo.png");
  car1_img = loadImage("../assets/car1.png");
  car2_img = loadImage("../assets/car2.png");
  track = loadImage("../assets/pista.png");
  fuelImage = loadImage("./assets/fuel.png");
  obstacle1Image = loadImage("./obstacle1.png")
  obstacle2Image = loadImage("./obstacle2.png")
  powerCoinImage = loadImage("./assets/goldCoin.png");
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
  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
