var cat, catImage, catImage2, catImage3;
var garden, groundImage;
var mouse, mouseImage, mouseImage2, mouseImage3;

function preload() {
    //load the images here
    catImage = loadImage("./images/cat1.png");
    catImage2 = loadAnimation("./images/cat2.png", "./images/cat3.png");
    catImage3 = loadImage("./images/cat4.png");

    groundImage = loadImage("./images/garden.png");

    mouseImage = loadImage("./images/mouse1.png");
    mouseImage2 = loadAnimation("./images/mouse2.png","./images/mouse3.png");
    mouseImage3 = loadImage("./images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    garden = createSprite(500,400,1000,800);
    garden.addImage(groundImage); 
    garden.scale = 0.7;
    
    cat = createSprite(750,550,20,20);
    cat.addImage(catImage);
    cat.scale = 0.15;

    mouse = createSprite(300,550,20,20);
    mouse.addImage(mouseImage);
    mouse.scale = 0.1;

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x < 370)
    {
        cat.velocityX = 0;
        cat.addImage("end image cat", catImage3);
        cat.changeImage("end image cat")

        mouse.addImage("end image mouse", mouseImage3);
        mouse.changeImage("end image mouse");
    }

    drawSprites();
}


function keyPressed()
{
  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW)
  {
      cat.velocityX = -5;
      cat.addAnimation("cat running",catImage2);
      cat.changeAnimation("cat running");

      mouse.addAnimation("mouse teasing", mouseImage2);
      mouse.changeAnimation("mouse teasing");
  } 

}
