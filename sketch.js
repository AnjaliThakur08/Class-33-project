var snow;
var snowfall; snowfallImg





function preload(){
snow = loadImage("snow3.jpg");
snowfallImg = loadImage("snow5.webp");
}


function setup() {
  createCanvas(displayWidth-60, displayHeight-100); 
  


}

function draw() {
  background(snow);
  createsnow();  
  drawSprites();
}


function createsnow(){
if(frameCount% 60===0){
snowfall = createSprite(random(200,1000), -20)
snowfall.addImage(snowfallImg);
snowfall.scale=0.3
snowfall.velocityY=+5;
}

}