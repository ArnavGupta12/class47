var backgroundImage
var characterImage, character
var arrowImage
var score = 0
var character2Image

function preload(){
  backgroundImage = loadImage("images/bg image.jpg")
  characterImage = loadAnimation("images/character0.png", "images/character1.png","images/character2.png")
  bird1Image = loadAnimation("images/bird1-0.png", "images/bird1-2.png","images/bird1-3.png", "images/bird1-4.png",
   "images/bird1-5.png", "images/bird1-6.png", "images/bird1-7.png", "images/bird1-8.png", "images/bird1-9.png", 
   "images/bird1-10.png", "images/bird1-11.png", "images/bird1-12.png", "images/bird1-13.png", 
   "images/bird1-14.png")
  birdImage = loadAnimation("images/bird-0.png", "images/bird-1.png","images/bird-2.png", "images/bird-3.png", 
  "images/bird-4.png", "images/bird-5.png", "images/bird-6.png", "images/bird-7.png", "images/bird-8.png", 
  "images/bird-9.png", "images/bird-10.png", "images/bird-11.png", "images/bird-12.png","images/bird-13.png",
  "images/bird-14.png", "images/bird-15.png", "images/bird-16.png","images/bird-17.png", "images/bird-18.png",
  "images/bird-19.png")

  arrowImage = loadImage("images/arrow0.png")
  character3Image = loadImage("images/character3.png")
  }

  

function setup(){
  createCanvas(1500, 700)
  bg = createSprite(400,80,1500,700);
  bg.scale = 3
  bg.velocityX = -2
  bg.addImage("bg",backgroundImage);
  bg.x = bg.width /2;
 
  character = createSprite(200,600, 50, 30)
  character.addAnimation("running", characterImage);
character3 = createSprite(200, 400, 50, 30)
character3.addImage(character3Image)
character3.scale = 0.1  
arrowGroup = new Group()
  birdGroup = new Group()
}
function draw(){
background("white")


if (bg.x < 0){
  bg.x = bg.width/2;
}

if (keyDown(UP_ARROW)){
  character.y = character.y - 5
}
if (keyDown(DOWN_ARROW)){
  character.y = character.y + 5
}

if(keyDown("space")){
createArrow()
}
if (keyDown("w")){
  character3.y = character3.y - 5
}

if (keyDown("s")){
  character3.y = character3.y + 5
}

if(arrowGroup.isTouching(birdGroup)){
  birdGroup.destroyEach()
  score=score+1
}
if (keyDown("z")){
  createArrow()
}


spawnbird()
drawSprites();

textSize(26)
fill("red")
text("Score :"+ score, 100, 30)

}


function spawnbird(){
  if (frameCount % 120 === 0){
    var bird = createSprite(100,165,10,40);
    bird.velocityX = -6
    bird.x =  Math.round(random(100,1500))
    bird.y =  Math.round(random(100,500))
     //generate random birds
     var rand = Math.round(random(1,2));
     switch(rand) {
       case 1: bird.addAnimation("bird",birdImage);
               break;
       case 2: bird.addAnimation("bird1",bird1Image);
               break;
      
       default: break;
     }
    
     //assign scale and lifetime to the bird           
     bird.scale = 0.2;
     bird.lifetime = 600;
    
    //add each bird to the group
     birdGroup.add(bird);
  }
 }

 
 function createArrow() {
  arrow= createSprite(200, 600, 5, 10);
  arrow.addImage(arrowImage)
  arrow.y = character.y
  arrow.y = character3.y
  arrow.velocityX = 6;
  arrow.scale = 0.3;
  arrowGroup.add (arrow)
  return arrow;
 }
