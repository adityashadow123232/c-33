var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;

 
var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight=300;
var score =0;
var particle;
var turn = 0;
var gamestate = 1 ;
//var particle  = null ;

function setup() {
  createCanvas(800, 800);
  engine  = Engine.create();
  world   = engine.world;
  ground  = new Ground(40,height,90,20);
  ground1 = new Ground(110,height,90,20);
  ground2 = new Ground(200,height,70,20);
  ground3 = new Ground(280,height,70,20);
  ground4 = new Ground(360,height,70,20);
  ground5 = new Ground(440,height,70,20);
  ground6 = new Ground(520,height,70,20);
  ground7 = new Ground(600,height,70,20);
  ground8 = new Ground(680,height,70,20);
  ground9 = new Ground(760,height,70,20);

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
 text("200 ",360,750);
 text("200 ",440,750);
 text("300 ",280,750);
 text("300 ",520,750);
 text("300 ",660,750);
 text("200 ",760,750);
 text("200 ",40,750);
 text("300 ",120,750);
 text("500 ",200,750);
 text("500 ",600,750);
 text ("score ="+score,50,50)





  Engine.update(engine);
 
  ground1.display();
  ground2.display();
  ground3.display();
  ground4.display();
  ground5.display();
  ground6.display();
  ground.display();
  ground7.display();
  ground8.display();
  ground9.display();
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }

 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }



if (particles.body.position.x < 1) {
  score=score+200;
 }
if ( turn === 5 ){
  gamestate = 0;
 }

}
function mousePressed (){
 if (gamestate != 0 ){
   turn++;
    particles.push(new Particle(mouseX, 10 , 10,10));

 }
}