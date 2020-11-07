
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperB;
var binB, binS1, binS2;

function preload()
{
	
}

function setup() {
  createCanvas(800, 700);
  engine = Engine.create();
  world = engine.world;
 
	//Create the Bodies Here.
  paperB = new Paper(500,300,20);
  binB= new Bin(400,640,200,20); 
  binS1= new Bin(500,600,20,100);
  binS2=new Bin(300,600,20,100);

 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("blue");
  binB.display();
  binS1.display();
  binS2.display();
  paperB.display();
  drawSprites();
 
}



