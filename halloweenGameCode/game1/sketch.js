var costumes = [];

var buttonX;
var buttonY;

var buttonW = 80;
var buttonH = 80;

var costumeW = 300;
var costumeH = 350;

var costumeIndex = 0;

let button;

function preload(){
  costumeOne = loadImage("daCatGhost.png");
  costumeTwo = loadImage("daWitchGhost.png");
  costumeThree = loadImage("pumpkinGhost.png");
  
  nextPumpkin = loadImage("nextPumpkin.png");
  
  costumes = [costumeOne, costumeTwo, costumeThree];
}

function setup() {
  createCanvas(700, 600);
  
  buttonX = width/2 + 200;
  buttonY = height/2 - 30;
  
  rectMode(CENTER);
  
}

function draw() {
  background(45, 18, 5);
  
  strokeWeight(3);
  stroke(59, 52, 110);
  fill(252, 142, 43);
  rect(320, 300, 400, 420);
  
  // stroke(220, 191, 161);
  // fill(109, 150, 71);
  // square(buttonX, buttonY, buttonSize);
  image(nextPumpkin, buttonX, buttonY, buttonW, buttonH);
  
  image(costumes[costumeIndex], 200, 100, costumeW, costumeH);
}

function mouseClicked(){
  
  if(
  mouseX >= buttonX - buttonW &&
  mouseX <= buttonX + buttonW &&
  mouseY >= buttonY - buttonH &&
  mouseY <= buttonY + buttonH
) {
    costumeIndex++;
  }
  
  if(costumeIndex>=costumes.length){
    costumeIndex = 0;
  }
}
