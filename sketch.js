var fixedRect,movingRect;

function setup() {
  createCanvas(800,800);
 fixedRect = createSprite( 200, 200, 50, 50);
 movingRect = createSprite( 600, 600, 50, 50);
 fixedRect.shapeColor = 'magenta';
 movingRect.shapeColor = 'magenta';
}

function draw() {
  background(0,0,0);
movingRect.x = mouseX;
movingRect.y = mouseY;  


  if(  fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2
    && movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2
    && movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2
    && fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2){
    fixedRect.shapeColor = 'red';
    movingRect.shapeColor = 'red';
  }else{
    fixedRect.shapeColor = 'magenta';
    movingRect.shapeColor = 'magenta';  
  }
  drawSprites();
} 