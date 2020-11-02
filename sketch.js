const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var ourEngine, world,object;
var ground;


function setup(){

    createCanvas(400,400);
    ourEngine = Engine.create();
    world = ourEngine.world;

    var ground_options = {
        isStatic:true,
    }
     ground = Bodies.rectangle(200,350,200,20, ground_options)
     var object_options = {
         restitution: 1.0
     }
    object= Bodies.circle(200,100,20,object_options);
    World.add(world,object);
    
    World.add(world,ground);
     
    console.log(object);
    console.log(object.position.x);
    console.log(object.position.y);
}

function draw(){
    background(0);
    Engine.update(ourEngine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
    ellipseMode(RADIUS);
    ellipse(object.position.x,object.position.y,20,20);

   
}