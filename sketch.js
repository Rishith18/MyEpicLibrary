var fixedRect, movingRect, slowRect, fastRect

function setup() {
  createCanvas(800,800);

  fixedRect = createSprite(100, 400, 100, 100);
  fixedRect.shapeColor = "red";
  fixedRect.velocityX = 5;

  movingRect = createSprite(700,400,100,100);
  movingRect.shapeColor = "red";
  movingRect.velocityX = -5;

  slowRect = createSprite(400,100,100,100)
  slowRect.shapeColor = "red";
  slowRect.velocityY = 3

  fastRect = createSprite(400,700,100,100)
  fastRect.shapeColor = "red";
  fastRect.velocityY = -3
}

function draw() {
  background(0);  

  bounceOff(fixedRect, movingRect);
  //bounceOff(slowRect, fastRect);

  if (isTouching(slowRect, fastRect)) {
    fastRect.shapeColor = "green";
    slowRect.shapeColor = "green";
  } else {
    fastRect.shapeColor = "red";
    slowRect.shapeColor = "red";
  }


  drawSprites();
}

