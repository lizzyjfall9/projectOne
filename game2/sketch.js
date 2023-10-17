var player = {x:0, y:0, w: 60, h: 80};
var car1 = {x:0, y:0, h: 45, w:200, speed: 1.5};
var car2 = {x:0, y:0, h: 45, w:200, speed: 5};
var car3 = {x:0, y:0, h: 45, w:200, speed: 3};
var gameOver = false;
var won = false;

function preload(){
  car1Image = loadImage("blueCar.png");
  car2Image = loadImage("orangeCar.png");
  car3Image = loadImage("greenCar.png");
  
  playerImage = loadImage("ghostiePumpkin.png");
  
  house = loadImage("hauntedHouse.png");
}

function setup() {
  createCanvas(700, 600);
  player.y = height - player.h;
  player.x = width/2;
  
  car1.y = height/4;
  car2.y = height * 1/2;
  car3.y = height * 3/4;
  
  // imageMode(CENTER);
}

function draw() {
  background(45, 18, 5);
  
  noStroke();
  fill(19, 16, 30);
  rect(0, height/4, width, 50);
  rect(0, height/2, width, 50);
  rect(0, height * 3/4, width, 50);
  
  // Check for collision between player and moving square
  if (collided(player, car1) || collided(player, car2) || collided(player, car3)) {
    gameOver = true;
  }

  if (dist(player.x, player.y, width/2, 10) < 70){
    won = true;
  }
  
  // Game over state
  if (gameOver) {
    car1.speed = 0;
    car2.speed = 0;
    car3.speed = 0;
    background(117, 0, 0);
  }
  
  if(won){
    car1.speed = 0;
    car2.speed = 0;
    car3.speed = 0;
    background(109, 150, 71);
  }
  
   image(house, width/2 - 50, 10, 110, 100);
  //player
  
  image(playerImage, player.x, player.y, player.w, player.h);
  
  //car 1
  image(car1Image, car1.x, car1.y, car1.w,car1.h);
  car1.x += car1.speed;
  
  //car2
  image(car2Image, car2.x, car2.y, car2.w,car2.h);
  car2.x += car2.speed;
  
  //car3
  image(car3Image, car3.x, car3.y, car3.w, car3.h);
  car3.x += car3.speed;
  
  if (car1.x > width - car1.w){
      car1.speed *= -1;
    
      } else if (car1.x < 0){
        car1.speed *= -1;
      }
  
  if (car2.x > width - car2.w){
      car2.speed *= -1;
      } else if (car2.x < 0){
        car2.speed *= -1;
      }
  
  if (car3.x > width - car3.w){
      car3.speed *= -1;
      } else if (car3.x < 0){
        car3.speed *= -1;
      }
  
  if (keyIsDown(LEFT_ARROW)) {
    player.x -= 3; // Move the player square left
  } else if (keyIsDown(RIGHT_ARROW)) {
    player.x += 3; // Move the player square right
  } else if (keyIsDown(UP_ARROW)) {
    player.y -= 3; // Move the player square up
  } else if (keyIsDown(DOWN_ARROW)) {
    player.y += 3; // Move the player square down
  }
  
  function collided(r1, r2) {
  return (
    r1.x < r2.x + r2.w &&
    r1.x + r1.w > r2.x &&
    r1.y < r2.y + r2.h &&
    r1.y + r1.h > r2.y
  ); 
  }
}