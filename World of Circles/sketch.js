// creating the constants.
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

// creating the variables
var ball1,ball2,ball3,ball4,ball5,ball6,ball7,ball8,ball9;

function preload(){
	// no images given
}

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	// creating the ground.
	ground = new Ground(400,750,800,15);

	// creating the objects.	
	ball1 = new Rect(400,400,50,50);
	ball2 = new Rect(600,400,50,50);
	ball3 = new Rect(200,400,50,50);
	ball4 = new Rect(400,200,50,50);
	ball5 = new Rect(400,600,50,50);
	ball6 = new Rect(200,600,50,50);
	ball7 = new Rect(200,200,50,50);
	ball8 = new Rect(600,200,50,50);
	ball9 = new Rect(600,600,50,50);
	
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("green");
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  ball6.display();
  ball7.display();
  ball8.display();
  ball9.display();
  
  ground.display();
  drawSprites();
 
}



