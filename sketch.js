var ball,img,p2;

function preload() {
  img=loadImage("ball.png");
  p1=loadImage( "paddle.png");
}
  
function setup() {
  createCanvas(400, 400);
   /* create the Ball Sprite and the Paddle Sprite */
  ball=createSprite(50,170,10,10);
  ball.addAnimation("b1",img);
  p2=createSprite(300,180,600,10);
  p2.addImage(p1);
 

}

function draw() {
  background(205,153,0);
  edges=createEdgeSprites();
  ball.bounceOff(edges[0]);
ball.bounceOff(edges[3]);
ball.bounceOff(edges[2]);
  ball.bounceOff(p2);
 ball.velocityX=9;
  /* Also assign a collision callback function, so that the ball can have a random y velocity, making the game interesting */
 
  /* Prevent the paddle from going out of the edges */ 
  p2.bounceOff(edges[0]);
p2.bounceOff(edges[3]);
p2.bounceOff(edges[2]);
  
 randomVelocity();
  if(keyDown(UP_ARROW))
  {
   p2.y = p2.y-20;
  }
  
  if(keyDown(DOWN_ARROW))
  {
    p2.y = p2.y+20;
  }
  drawSprites();
  
}

function randomVelocity()
{
  var rand = random(1,3);
   ball.velocityY=1;
  ball.velocityY=2;
  ball.velocityY=3;
  
  
}

