let font;

function preload() {
  font = loadFont('/assets/OpenSans-VariableFont_wdth,wght.ttf');
}

function setup() {
  createCanvas(400, 400, WEBGL);
  background(200);
  fill('deeppink');
  textFont(font);
  textSize(50);
  textAlign(CENTER, CENTER);
}

function draw() {
  // strokeWeight(10);
  // stroke(1);
  // translate(-180,-200);
  rotateY(frameCount * 0.01);
  for (let i = 0; i < 10; i++) {
    let width = 20;
    let gap = 1;
    let x = (width + gap) * i;
    fill('yellow');
    text('SAVEMSA.COM', 0, x-200);
    fill('cornflowerblue');
    text('SAVEMSA.COM', 0, x-100);
    fill('tomato');
    text('SAVEMSA.COM', 0, x-50);
    fill('limegreen');
    text('SAVEMSA.COM', 0, x-25);
  }
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      let width = 40;
      let height = 40;
      let gap = 20;
      let x = (width + gap) * i;
      let y = (height + gap) * j 
      // rect(x, y, width, height);
      // mytriangle(.05, 181, 70);
    }
  }
}

function mytriangle(amountOfWindow, x, y){
  push();
  const size = width * amountOfWindow;
  translate(x,y);
  triangle(0, 0, size, size*2, size, size*2);
  pop();
}

function keyPressed() {
  if (key === 's') {
    saveFrames('frame', 'png', 1, 5);
  }
}