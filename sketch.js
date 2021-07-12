
var box;
function setup() {
  createCanvas(400,400);
  box = createSprite(200,200,50,50);
  box.shapeColor =" green";
}

function draw() {
  background(30);
  if(keyDown("LEFT_ARROW")){
    box.x= box.x-2;
    background("red");
  }
  if(keyDown("RIGHT_ARROW")){
    box.x= box.x+2;
    background("blue");
  }
  if(keyDown("UP_ARROW")){
    box.y= box.y-2;
    background("green");
  }
  if(keyDown("DOWN_ARROW")){
    box.y= box.y+2;
    background("yellow");
  }
  drawSprites();
}




