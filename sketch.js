var PLAY = 1;
var END = 0;
var gameState = PLAY;

var ball,ballImg,bgImg,obs1,obsImg,obs2,obs3,obs4,obs5,obs6,obs7,burstImg;

function preload() {
  ballImg = loadImage("ball.png");
  bgImg = loadImage("bg1.png");
  obsImg = loadImage("obs.png");
  burstImg = loadImage("1111.png");
}
function setup() {
  createCanvas(displayWidth, displayHeight);
 ball= createSprite(450,600, 50, 50);
 ball.addImage(ballImg);
 ball.scale=0.3;

 if (frameCount%1300===0){
  obs1= createSprite(150,0,50,50);
  obs1.velocityY=3;
obs1.addImage(obsImg);
obs1.scale=0.3;
obs1.lifetime = 270;
}
if (frameCount%140===0){
  obs2= createSprite(800,0,50,50);
  obs2.velocityY=3;
obs2.addImage(obsImg);
obs2.scale=0.3;
obs2.lifetime = 270;
}
if (frameCount%99===0){
  obs3= createSprite(1200,0,50,50);
  obs3.velocityY=3;
obs3.addImage(obsImg);
obs3.scale=0.3;
obs3.lifetime = 270;
}
if (frameCount%140===0){
  obs4= createSprite(1050,0,50,50)
  obs4.velocityY=3;
obs4.addImage(obsImg);
obs4.scale=0.3;
obs4.lifetime = 270;
}
if (frameCount%190===0){
  obs5= createSprite(350,0,50,50);
  obs5.velocityY=3;
obs5.addImage(obsImg);
obs5.scale=0.3;
obs5.lifetime = 270;
}
if (frameCount%220===0){
  obs6= createSprite(550,0,50,50);
  obs6.velocityY=3;
obs6.addImage(obsImg);
obs6.scale=0.3;
obs6.lifetime = 270;
}
if (frameCount%199===0){
  obs7= createSprite(70,0,50,50);
  obs7.velocityY=3;
obs7.addImage(obsImg);
obs7.scale=0.3;
obs7.lifetime = 270;
}
}


function draw(){ 
  background(bgImg);

  if (gameState === PLAY){

 
 


if(keyDown(LEFT_ARROW))
{
   changePosition(-3,0);
 } 
else if(keyDown(RIGHT_ARROW))
{ 
  changePosition(3,0); 
} 
//else if(keyDown(UP_ARROW)){
  // changePosition(0,-3);
   //}
 //else if(keyDown(DOWN_ARROW)){ 
  //changePosition(0,+3);
 //}



//if (ball.isTouching(obs1)){
  ///gameState = END
//}
/*if(isTouching(ball,obs1)){ 
 // movingRect.shapeColor = "blue";
  // gameObject1.shapeColor = "blue";
   gameState = END;
   ball.changeImage(burstImg);
   ball.scale=0.3;
   }
    else { 
      gameState = PLAY;
     // movingRect.shapeColor = "green"; 
      //gameObject1.shapeColor = "green"; 
      ball.addImage(ballImg);
      ball.scale=0.3;
    }
    if(isTouching(ball,obs2)){ 
      // movingRect.shapeColor = "blue";
       // gameObject1.shapeColor = "blue";
        gameState = END;
        ball.changeImage(burstImg);
        ball.scale=0.3;
        }
         else { 
           gameState = PLAY;
          // movingRect.shapeColor = "green"; 
           //gameObject1.shapeColor = "green"; 
           ball.addImage(ballImg);
           ball.scale=0.3;
         }
    if(isTouching(ball,obs3)){ 
      // movingRect.shapeColor = "blue";
       // gameObject1.shapeColor = "blue";
        gameState = END;
        ball.changeImage(burstImg);
        ball.scale=0.3;
        }
         else { 
           gameState = PLAY;
          // movingRect.shapeColor = "green"; 
           //gameObject1.shapeColor = "green"; 
           ball.addImage(ballImg);
           ball.scale=0.3;
         }
    if(isTouching(ball,obs4)){ 
      // movingRect.shapeColor = "blue";
       // gameObject1.shapeColor = "blue";
        gameState = END;
        ball.changeImage(burstImg);
        ball.scale=0.3;
        }
         else { 
           gameState = PLAY;
          // movingRect.shapeColor = "green"; 
           //gameObject1.shapeColor = "green"; 
           ball.addImage(ballImg);
           ball.scale=0.3;
         }
    if(isTouching(ball,obs5)){ 
      // movingRect.shapeColor = "blue";
       // gameObject1.shapeColor = "blue";
        gameState = END;
        ball.changeImage(burstImg);
        ball.scale=0.3;
        }
         else { 
           gameState = PLAY;
          // movingRect.shapeColor = "green"; 
           //gameObject1.shapeColor = "green"; 
           ball.addImage(ballImg);
           ball.scale=0.3;
         }
    if(isTouching(ball,obs6)){ 
      // movingRect.shapeColor = "blue";
       // gameObject1.shapeColor = "blue";
        gameState = END;
        ball.changeImage(burstImg);
        ball.scale=0.3;
        }
         else { 
           gameState = PLAY;
          // movingRect.shapeColor = "green"; 
           //gameObject1.shapeColor = "green"; 
           ball.addImage(ballImg);
           ball.scale=0.3;
         }
    if(isTouching(ball,obs7)){ 
      // movingRect.shapeColor = "blue";
       // gameObject1.shapeColor = "blue";
        gameState = END;
        ball.changeImage(burstImg);
        ball.scale=0.3;
        }
         else { 
           gameState = PLAY;
          // movingRect.shapeColor = "green"; 
           //gameObject1.shapeColor = "green"; 
           ball.addImage(ballImg);
           ball.scale=0.3;
         }*/

        
  if (gameState === END){
    ball.changeImage(burstImg);
    ball.velocityY = 0;
    ball.velocityX = 0;
  }

 drawSprites(); 
} 
}
function changePosition(x,y){
   ball.x = ball.x + x; 
  ball.y = ball.y + y;
}
/*function isTouching(object1,object2){
  if (object1.x - object2.x === object2.width/2 + object1.width/2
     && object2.x - object1.x === object2.width/2 + object1.width/2
      && object1.y - object2.y === object2.height/2 + object1.height/2
       && object2.y - object1.y === object2.height/2 + object1.height/2) { 
    //object1.shapeColor = "red"; 
  //object2.shapeColor = "red";
  return true; 
} 
  else { 
  //  object1.shapeColor = "green"; 
  //object2.shapeColor = "green"; 
return false;
}*/
