function setup() {
  
  createCanvas(800, 600);
}

function draw() {
  background(300);
  scale(1);
  stroke(5);
  fill(68, 114, 196);
  //blue
  rect(10, 10, 780, 580, 40); //left rectangle
  fill(255, 255, 255);
  //white
  rect(190, 90, 580, 480, 35); //bottom right rectangle
  fill(237, 125, 49);
  //orange stuff
  rect(190, 30, 580, 45, 25);
  rect(30, 30, 140, 540, 30);
  rect(655, 565, 140, 30, 45);
  fill(255, 255, 255);
  textSize(36);
  text("Typing Match Game", 320, 65);
  textSize(18);
  text("Instructions:", 35, 80);
  textSize(16);
  text("Press '0' for Home", 660, 585)
}

function keyPressed() {
  if (keyCode === 48)
 window.open("https://editor.p5js.org/dsabic1/full/JAS2cvpkd4")
}

 