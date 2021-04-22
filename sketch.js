var fixrect, movingrect




function setup() {
  createCanvas(800,400);
fixrect = createSprite(200,200,50,50)
fixrect.shapeColor="yellow"
  movingrect = createSprite(400, 200, 50, 50);
  movingrect.shapeColor = "green"
}

function draw() {
  background(255,255,255);
  movingrect.x = World.mouseX
movingrect.y = World.mouseY
  if(movingrect.x-fixrect.x<fixrect.width/2+movingrect.width/2
    &&fixrect.x-movingrect.x<fixrect.width/2+movingrect.width/2
    &&movingrect.y-fixrect.y<fixrect.height/2+movingrect.height/2
    &&fixrect.y-movingrect.y<fixrect.height/2+movingrect.height/2){
    movingrect.shapeColor = "red"
    fixrect.shapeColor = "red"
  }else{
    movingrect.shapeColor = "green"
    fixrect.shapeColor = "yellow"
  }
  drawSprites();
}