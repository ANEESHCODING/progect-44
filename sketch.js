var bg,bg2,form,system,code,security;
var score=0;

function preload() {
  bg = loadImage("aladdin_cave.jpg");
}

function setup() {
  createCanvas(1000,500);
  system = new System()
  security = new Security()
}

function draw() {
  background(bg);
  clues();
  security.display();

  this.access1 = createInput("code1");
  this.access1.position(100,90);
  this.access1.style("baground","yellow");

  this.button1 = createButton("check");
  this.button1.position(100,120);
  this.button1.style("background","lightgrey");


    
  // Add code to display the end screen


  drawSprites()
}s