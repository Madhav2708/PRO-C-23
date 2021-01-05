var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground, bs1, bs2, bs3, bs1Body, bs2Body, bs3Body;
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
	
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	bs1=createSprite(width/2,height-45,200,20, {isStatic:true} ) ;
	bs1.shapeColor=color("red");

	bs2=createSprite(290,height-90,20,100, {isStatic:true}) ;
	bs2.shapeColor=color("red");

	bs3=createSprite(510,height-90,20,100, {isStatic:true}) ;
	bs3.shapeColor=color("red");

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 25 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);

	bs1Body= Bodies.rectangle(width/2,height-45,200,20, {isStatic:true});
	bs1.shapeColor=color("red");
	
	bs2Body= Bodies.rectangle(290,height-90,20,100, {isStatic:true}) ;
	bs2.shapeColor=color("red");
	
	bs3Body= Bodies.rectangle(510,height-90,20,100, {isStatic:true});
	bs3.shapeColor=color("red");

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
  keyPressed();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	
	Matter.Body.setStatic(packageBody, false);
    
  }
}