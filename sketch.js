var backr = 0
var backg = 0
var backb = 0

function setup() {
  createCanvas(400, 400);
}

function deviceTurned() {
  backr = 255
  backg = 0
  backb = 0
}

function draw() {
  background(backr, backg, backb);
}