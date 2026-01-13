function setup() {
  createCanvas(400, 400, WEBGL);
}

function draw() {
  background(0, 0, 100);
  strokeWeight(10);
  stroke(1);
  rotateY(frameCount * 0.01);
  translate(-width/3, -height/3);
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      let width = 40;
      let height = 40;
      let gap = 20;
      let x = (width + gap) * i;
      let y = (height + gap) * j 
      rect(x, y, width, height);
    }
  }
}
