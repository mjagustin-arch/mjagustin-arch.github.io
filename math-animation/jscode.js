let angle = 0;          
let speed = 0.03;       
let isPaused = false;   

function setup() {
  createCanvas(500, 400);
}

function draw() {
  background(20, 24, 38);

  fill(255);
  noStroke();
  textSize(14);
  text("Controls: [P] Pause  |  [W] Faster  |  [S] Slower", 20, 20);

  text("Speed: " + speed.toFixed(2) + (isPaused ? "  [PAUSED]" : ""), 20, 50);
  
  let deg = degrees(angle) % 360;
  text("Angle: " + angle.toFixed(2) + " rad (" + deg.toFixed(0) + "°)", 20, 75);
 

 
  translate(width / 2, height / 2);

  let radius = 120 + 30 * sin(angle * 2);

  rotate(angle);
  fill(80, 210, 255);
  stroke(255);
  strokeWeight(3);

  beginShape();

  for (let i = 0; i < 3; i++) {
    let cornerAngle = i * (TWO_PI / 3);
    let x = radius * cos(cornerAngle);
    let y = radius * sin(cornerAngle);
    vertex(x, y);
  }
  endShape(CLOSE);

  if (!isPaused) {
    angle += speed;
  }
}

function keyPressed() {
  if (key === 'p' || key === 'P') isPaused = !isPaused;
  if (key === 'w' || key === 'W') speed = constrain(speed + 0.01, 0.01, 0.15);
  if (key === 's' || key === 'S') speed = constrain(speed - 0.01, 0.01, 0.15);
}
