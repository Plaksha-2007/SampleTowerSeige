
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var ground, path1, path2, path3;
var b1,b2,b3,b4,b5,b6,b7,b8,b9;
var b1a,b2a,b3a,b4a,b5a,b6a,b7a,b8a,b9a;
var b1b,b2b,b3b,b4b,b5b,b6b,b7b,b8b,b9b;
var polygon, chain;
var back;

function preload()
{
  back = loadImage("bg.jpg");
}

function setup() {
	createCanvas(1800, 800);
  engine = Engine.create();
	world = engine.world;

  ground = new Ground(900,780,2000,60);
  path1 = new Ground(1000,480,300,20);
  path2 = new Ground(1550,260,300,20);
  path3 = new Ground(400,700,300,20);

  //level3
  b1 = new Box(1000,440,50,60);
  b2 = new Box(950,440,50,60);
  b3 = new Box(900,440,50,60);
  b4 = new Box(1050,440,50,60);
  b5 = new Box(1100,440,50,60);
  //level 2
  b6 = new Box(1000,380,50,60);
  b7 = new Box(950,380,50,60);
  b8 = new Box(1050,380,50,60);
  //level 1
  b9 = new Box(1000,320,50,60);


  //level3
  b1a = new Box(1550,220,50,60);
  b2a = new Box(1500,220,50,60);
  b3a = new Box(1450,220,50,60);
  b4a = new Box(1600,220,50,60);
  b5a = new Box(1650,220,50,60);
  //level 2
  b6a = new Box(1550,160,50,60);
  b7a = new Box(1500,160,50,60);
  b8a = new Box(1600,160,50,60);
  //level 1
  b9a = new Box(1550,100,50,60);


  //level3
  b1b = new Box(300,650,50,60);
  b2b = new Box(350,650,50,60);
  b3b = new Box(400,650,50,60);
  b4b = new Box(450,650,50,60);
  b5b = new Box(500,650,50,60);
  //level 2
  b6b = new Box(350,600,50,60);
  b7b = new Box(400,600,50,60);
  b8b = new Box(450,600,50,60);
  //level 1
  b9b = new Box(400,550,50,60);


  polygon = new Polygon(150,100,54);
  chain = new Chain(polygon.body,{x:150,y:100});
	Engine.run(engine);
  
}


function draw() {
  background(0);
  rectMode(CENTER);
  Engine.update(engine)
  
  ground.display();
  path1.display();
  path2.display();
  path3.display();

  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display();

  b1a.display();
  b2a.display();
  b3a.display();
  b4a.display();
  b5a.display();
  b6a.display();
  b7a.display();
  b8a.display();
  b9a.display();

  b1b.display();
  b2b.display();
  b3b.display();
  b4b.display();
  b5b.display();
  b6b.display();
  b7b.display();
  b8b.display();
  b9b.display();
  chain.display();
  polygon.display();
  drawSprites();
 
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX, y: mouseY});
}

function mouseReleased(){
  chain.fly()
}

function keyPressed(){
  if(keyCode===32){
      chain.attach(this.polygon.body);
  }
}

