function setup() {
  createCanvas(800, 600);
}

function keyPressed() {
  if (keyCode === 32)
 window.open("https://editor.p5js.org/dsabic1/full/JAS2cvpkd4")
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
  rect(40, 100, 720, 460, 35); //bottom right rectangle
  fill(237, 125, 49);
  //orange stuff
  rect(40, 25, 720, 60, 20);
  textSize(32);
  fill(255);
  text("Welcome to the Stroke Rehab Game!", 140, 64);
  textSize(60);
  noStroke();
  fill(68, 114, 196)
  text("Press the spacebar", 140, 280)
  text("to Start!", 310, 350)
 
}


