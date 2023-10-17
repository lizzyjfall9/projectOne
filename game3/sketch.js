var Boxes = [];
var numBoxes = 8;

function preload() {
  razor = loadImage("Razor-Blade.png");
  
  candy1 = loadImage("candy1.png");
  candy2 = loadImage("candy2.png");
  candy3 = loadImage("candy3.png");
  candy4 = loadImage("candy4.png");
  candy5 = loadImage("candy5.png");
}

function setup() {
  createCanvas(700, 600);

  for (var i = 0; i < numBoxes; i++) {
    Boxes[i] = new Box();
  }
}

function draw() {
  background(45, 18, 5);
  

  for (var i = 0; i < numBoxes; i++) {
    Boxes[i].display();
  }
  
  image(candy1, 120, 300, 160, 160);
  image(candy2, 220, 480, 160, 160);
  image(candy3, 20, 100, 160, 160);
  image(candy4, 400, 220, 160, 160);
  image(candy5, 330, 30, 160, 160);
  image(candy1, 120, 300, 160, 160);
  image(candy3, 410, 410, 130, 120);
  image(candy2, 200, 170, 130, 130);
  image(candy1, 540, 70, 130, 130);
}

class Box {
  constructor(x, y) {
    this.w = 100;
    this.h = 60;
    this.x = random(width - this.w);
    this.y = random(height - this.h);
    this.visible = true;
  }

  display() {
    if (this.visible) {
      image(razor, this.x, this.y, this.w, this.h);
    }
  }
}

function mouseClicked() {
  for (var i = 0; i < numBoxes; i++) {
    if (
      pointIsInRectangle(
        mouseX,
        mouseY,
        Boxes[i].x,
        Boxes[i].y,
        Boxes[i].w,
        Boxes[i].h
      )
    ) {
      Boxes[i].visible = false;
    }
  }
}

function pointIsInRectangle(pX, pY, rX, rY, rW, rH) {
  if (pX > rX && pX < rX + rW && pY > rY && pY < rY + rH) {
    return true;
  } else {
    return false;
  }
}
