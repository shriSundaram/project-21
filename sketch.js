var bullet,wall;
var speed,weight;
var thickness;

function setup() {
  thickness = random(22,83);
  var canvasheight = 400;
  var canvaswidth = 1600;
  createCanvas(canvaswidth,canvasheight);
  speed = random(223,321);
  weight = random(30,52);
  bullet = createSprite(30,200,30,10);
  bullet.shapeColor = ("white");
  bullet.velocityX = speed;
  wall = createSprite(1200,200,thickness,canvasheight/2);
  wall.shapeColor = color(80,80,80);
}

function draw() {
  background(0);  
  drawSprites();
  if(hasCollided(bullet,wall))
  {
    bullet.velocityX = 0;
    var Damage = 0.5 * weight * speed * speed/(thickness*thickness*thickness);
    if(Damage < 10)
    {
      wall.shapeColor = color("green");
    }
    if(Damage > 10)
    {
      wall.shapeColor = color("red");
    }
  }
}

function hasCollided(lbullet, lwall)
{
  var bulletRightEdge = lbullet.x + lbullet.width;
  var wallLeftEdge = lwall.x;
  if(bulletRightEdge >= wallLeftEdge)
  {
    return true;
  }
  return false;
}