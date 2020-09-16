var fixedRect;
var movingRect;

var a;
var b;

var object;

function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(400, 200, 30, 80);
  fixedRect.shapeColor="blue";
  movingRect= createSprite(500,200,80,30);
  movingRect.shapeColor="blue";

  a = createSprite(100,300,50,50);
  a.velocityX = 5;
  b = createSprite(300,300,50,50);
  b.velocityX = -5;

  object = createSprite(20,100,50,50);
  object.shapeColor = "blue";
}

function draw() {
  background(0);  
  movingRect.x=mouseX;
  movingRect.y=mouseY;
  
  if(isTouching(object,movingRect)){
    object.shapeColor="green";
    movingRect.shapeColor="green";
  }
  else{
   object.shapeColor="blue";
   movingRect.shapeColor="blue";
  }

  bounceOff(a,b);

  drawSprites();
}

