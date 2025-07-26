let img_main;

function setup() {
  createCanvas(393, 852);
  img_main = loadImage('main (1).png');
}

function draw() {
  background(255);
  image(img_main,0,0,393,852);
}