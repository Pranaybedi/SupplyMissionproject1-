
var packageBody,ground
var bottombox , leftbox , rightbox 
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);


	var options = {
		'restitution':0.8,
		'friction':0.3,
		'density':1.0
	}
  


	packageSprite=createSprite(width/2, 80, 10,10, options);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);


	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	
	 bottombox= Bodies.rectangle(380,630,200,20, {isStatic:true} );
	 World.add(world, bottombox);
	 bottombox.shapeColor ="red" 

	 leftbox = Bodies.rectangle(330, 630, 20, 100 , {isStatic:true} );
	 World.add(world, leftbox);
	 leftbox.shapeColor = "red"

	 rightbox =  Bodies.rectangle(330, 630, 20, 100 , {isStatic:true} );
	 World.add(world, rightbox);
	 rightbox.shapeColor = "red"

 
 
	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();

}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {

  Matter.Body.setStatic(packageBody,false); 
  
 }

}





