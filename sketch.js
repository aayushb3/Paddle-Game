var ball,img,paddle;
function preload() {
  /* preload your images here of the ball and the paddle */
  ball = loadImage("ball.png");
  paddle = loadImage("paddle.png")
}
function setup() {
  createCanvas(400, 400);
  ball = createSprite(200, 200, 10, 10);
  paddle = createSprite(390, 200, 5, 80);
  ball.velocityX = 9;
   /* create the Ball Sprite and the Paddle Sprite */
  /* assign the images to the sprites */
  
  /* give the ball an initial velocity of 9 in the X direction */
  

}

function draw() {
  background(205,153,0);
  edges = createEdgeSprites();
  ball.bounceOff(edges[0]);
  ball.bounceOff(paddle);
  /* create Edge Sprites here */
  
  /* Allow the ball sprite to bounceOff the left, top and bottom edges only, leaving the right edge of the canvas to be open. */
  

  /* Allow the ball to bounceoff from the paddle */
  /* Also assign a collision callback function, so that the ball can have a random y velocity, making the game interesting */
 
  /* Prevent the paddle from going out of the edges */ 
  
  
  if(keyDown(UP_ARROW))
  {
     //paddle.y += 20;
  }
  
  if(keyDown(DOWN_ARROW))
  {
    /* what should happen when you press the UP Arrow Key */
  }
  drawSprites();
  
}

function randomVelocity()
{
  /* this function gets called when the ball bounces off the paddle */
  /* assign the ball a random vertical velocity, so it bounces off in random direction */
}


