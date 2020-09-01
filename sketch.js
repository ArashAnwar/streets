var Player;
var opponent;
var GameState;
var database;

function setup(){
    database = fireBase.database();
createCanvas(displayWidth,displayHeight);
Player = createSprite(displayWidth-1000,displayHeight/2,50,60)
opponent = createSprite(displayWidth-300,displayHeight/2,50,60)
Player.velocityY = 0;


}

function draw(){
    

    background(0);
    
    if(keyDown(UP_ARROW)){
       Player.velocityY =  Player.velocityY + 40;
    }
    Player.velocityY = Player.velocityY-10;
    
    createEdgeSprites();
    Player.collide(topEdge);
    drawSprites();
}
