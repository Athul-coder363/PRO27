const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var roofObject;
var bobDiameter = 40;
var rope1,rope2,rope3,rope4,rope5;
function preload(){

}
function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;
    roofObject = new Ground(400,250,230,20);
    bobObject1 = new Paper(320,575,40);
    bobObject2 = new Paper(360,575,40);
    bobObject3 = new Paper(405,575,40);
    bobObject4 = new Paper(440,575,40);
    bobObject5 = new Paper(480,575,40);
    rope1 = new Chain(bobObject1.body,roofObject.body,-80,0);
    rope2 = new Chain(bobObject2.body,roofObject.body,-40,0);
    rope3 = new Chain(bobObject3.body,roofObject.body,0,0);
    rope4 = new Chain(bobObject4.body,roofObject.body,40,0);
    rope5 = new Chain(bobObject5.body,roofObject.body,80,0);
    console.log(bobObject3);
    Engine.run(engine);
}
function draw(){
    background("white");
 bobObject1.display();
 bobObject2.display();
 bobObject3.display();
 bobObject4.display();
 bobObject5.display();

roofObject.display();

 rope1.display();
 rope2.display();
 rope3.display();
 rope4.display();
 rope5.display();
}
function keyPressed(){
    if(keyCode === 32){
        Matter.Body.applyForce(bobObject5.body,bobObject5.body.position,{x:50, y:45})
    }
}