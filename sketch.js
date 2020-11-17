//physics engine
//2D- MATTER.JS

//Matter.Engine - universe
//Matter.World - earth
//Matter.Bodies - any object (living or non living)

//namespace
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myengine, myworld;
var box,ground;
var box1,box2
function setup() {
  createCanvas(400,400);

  //to create engine
  myengine = Engine.create();

  //now i need add the world inside the engine
  myworld = myengine.world

  box = Bodies.rectangle (20,50,50,50)
  World.add(myworld, box)

  ground = new Ground(width/2,height-30,width,20)
  console.log(box)
  console.log(box.position.x)

  box1 = new Box(200,20,40,40)
  box2 = new Box(190,40,40,50)

  
}

function draw() {
  background("yellow");
  Engine.update(myengine)

  //linking the rectangle with box BODIES
  rectMode(CENTER)
  rect(box.position.x,box.position.y,50,50)
 
ground.display()

box1.display()
box2.display()
}