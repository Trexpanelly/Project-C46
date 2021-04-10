var gameState = 1;
var footie, shoe, monster, boomerang;
var dart, dartGroup;



function preload(){
    footImage = loadImage('Footpick.png');
    shoeImage = loadImage('Shoemage.jpeg');
    boomerangImage = loadImage('Boomerang.webp')
    scientistImage = loadImage('Clork.png');
    monsterImage = loadImage('Bawer.jpg');
    dartImage = loadImage('Fireball.jpeg');
}
function setup(){
   createCanvas(1000, 700);
   canvas.scale = 3;
   footie = createSprite(300, 500, 100, 100);
   footie.addImage(footImage);
   footie.scale = 0.5;
   shoe = createSprite(200, 600, 100, 200);
   shoe.addImage(shoeImage);
   shoe.velocityX = 9;
   shoe.scale = 0.5;
   boomerang = createSprite(300, 300, 200, 200);
   boomerang.addImage(boomerangImage);
   boomerang.scale = 0.3;
   
   scientist = createSprite (1000, 600, 300, 100);
   scientist.addImage(scientistImage);
   scientist.scale = 0.4;
   scientist.visible = false;
   mayor = createSprite(700, 1000, 300, 200);
   mayor.addImage(mayorImage);
   mayor.scale = 0.2;
   mayor.visible = false;
   monster = createSprite(830, 400, 300, 200);
   monster.addImage(monsterImage);
  

   
   
   
   
   dartGroup = new Group();



   
   
   
}

function draw(){
    background(255);
    
    spawnDarts();

    if(gameState === 1){
        scientist.visible = true;
        
        if(keyIsDown(UP_ARROW)){
            footie.velocityY = -5;
        } 
        if(keyIsDown(DOWN_ARROW)){
            footie.velocityY = 5;
        } 
        if(keyIsDown(RIGHT_ARROW)){
            footie.velocityX = 3;
        } 
        if(keyIsDown(LEFT_ARROW)){
            footie.velocityX = -3;
        } 
        
        if(keyCode === 32){
            boomerang.velocityX = 7;
        } 
    }
    
    
    if(footie.isTouching(dartGroup)){
        gameState = 0;
        
    }
    
    if(gameState === 0){
        footie.destroy();
        monster.destroy();
        dartGroup.destroyEach();
        dartGroup.setVelocityXEach(0);
        text("You Lost!", 500, 300);
        textSize(50);
    }
    
    
    
    if(shoe.x < 1500){
        text("Hey shoes, where are you going?", 0, 460);
    text("AHHHHHHHHH!", shoe.x, shoe.y + 100);
    }
    

    drawSprites();
}


    

function spawnDarts(){
    if(frameCount % 20 === 0){
        dart = createSprite(800, monster.y, 20, 5);
        dart.velocityX = -9;
        dartGroup.add(dart);
    }
}