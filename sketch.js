
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject
var world;

function preload(){

	//paper1 = loadImage("paper.png");
}
function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);

	paper1 = new Paper(130,145);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);

  text("press 'space' to throw the ball in dustbin",100,30);
 
if(keyDown("space")){
	Matter.Body.applyForce(paper1.body,paper1.body.position,{y:-120,x:+51});
}

  groundObject.display();
  dustbinObj.display();
  paper1.display();

  
}

