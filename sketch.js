const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var person1;
var bgimg;

function setup() {
  createCanvas(800,400);
  person1 = createSprite(400, 200, 50, 50);
  bgimg = loadImage("sprites/snow1.jpg");
  world = engine.world;
}

function draw() {
  background(bgimg);
  Engine.update(engine);  
  drawSprites();
}