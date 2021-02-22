var canvas;
var music;
var sur1, sur2, sur3, sur4;
var ball;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    
    sur1 = createSprite(110,600,190,30);
    sur1.shapeColor = "blue";

    sur2 = createSprite(310,600,190,30);
    sur2.shapeColor = "orange";

    sur3 = createSprite(510,600,190,30);
    sur3.shapeColor = "red";

    sur4 = createSprite(710,600,190,30);
    sur4.shapeColor = "green";

    ball = createSprite(300,300,20,20);
    ball.shapeColor = "white";
}

function draw() {
    background(rgb(169,169,169));
    edges = createEdgeSprites();
    
    ball.bounceOff(edges);

    if(ball.isTouching(sur1)) {
        ball.shapeColor = "blue";
        music.play();
    } else if(ball.isTouching(sur2)) {
        ball.shapeColor = "orange";
        ball.velocityX=0;
        ball.velocityY=0;
        music.stop();
    } else if(ball.isTouching(sur3)) {
        ball.shapeColor = "red";
        music.play();
    } else if(ball.isTouching(sur4)) {
        ball.shapeColor = "green";
        music.play();
    }

    if(keyDown("space")){
        ball.velocityX = 5;
        ball.velocityY = 5;
    }
    
    drawSprites();
}