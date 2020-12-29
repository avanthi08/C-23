const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;
var b1;
var b2;


function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    fill("brown");
    b1=new Box(200,300,50,50);
    b2 = new Box(240,100,50,100);
    ground = new Ground(200,390,400,20);

    

    
}

function draw(){
    background(0);
    Engine.update(engine);
    b1.display();
    b2.display();
    ground.display();

    
}