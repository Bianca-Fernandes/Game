var playerCount, allPlayers, armPts, legPts, player;
var bg, p1;
var form, player, game;
var database;
var gameState = 0;
var player1;
armPts = 5;
legPts = 10;

function preload(){
  bg = loadImage("images/bg1.jpg");
  bg2 = loadImage("images/1.webp")
  p1 = loadImage("images/boy.png");
}

function setup() {
  createCanvas(1263,628);

  database = firebase.database();

  game = new Game();
  //form = new Form();
  // player = new Player();
}

function draw() {
  background(bg);
    
  if(playerCount === 2)
    game.update(1);

  if(gameState === 1){
    clear();
    game.play();
  }

  if(gameState === 2)
    game.end();
  
  
  // form.display();
  drawSprites();
}