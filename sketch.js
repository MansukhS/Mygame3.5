var Anamatronics;
var Freddy;
var Foxy;
var Ballora;
var GoldenFreddy;
var Nightmare;
var NightmareFredbear;
var ScrapBaby;
var Glitchtrap;
var Puppet; 
var Springtrap; 



var FreddyImg, FoxyImg, BalloraImg
var GoldenFreddyImg;
var NightmareImg, NightmareFredbearImg,ScrapBabyImg,GlitchtrapImg; 
var PuppetImg, SpringtrapImg;

var BalloraS; 

function preload(){
  FreddyImg = loadImage("images/freddy.png");
  FoxyImg = loadImage("images/Foxy.png");
  BalloraImg = loadImage('images/Ballora2.png');
  GoldenFreddyImg = loadImage("images/GF.png");
  NightmareImg = loadImage("images/Nightmare.png");
  NightmareFredbearImg = loadImage("images/NightmareFredbear.png");
  ScrapBabyImg = loadImage('images/Scrapbaby2.png');
  GlitchtrapImg = loadImage('images/Glitchtrap3.png');
  PuppetImg = loadImage('images/Puppet.png');
  SpringtrapImg = loadImage('images/Springtrap.png');

  BalloraS = loadSound('sounds/Balloras Song2.0.mp3'); 
}

function setup() {
  createCanvas(displayWidth + 20, displayHeight);
 
    Freddy.createSprite(300,400,50,50);
    Freddy.addImage(FreddyImg);
    Freddy.scale = 0.5;

    Foxy = createSprite(100,300,50,50);
    Foxy.addImage(FoxyImg);
    Foxy.scale = 0.5;
    
    
    Ballora = createSprite(1000,900,50,50);
    Ballora.addImage(BalloraImg);
    Ballora.scale = 0.6;
   
     GoldenFreddy = createSprite(667,900,50,50);
    GoldenFreddy.addImage(GoldenFreddyImg); 
    GoldenFreddy.scale = 0.5;
  
    Nightmare = createSprite(900,600,50,50);
    Nightmare.addImage(NightmareImg);  
    Nightmare.scale = 0.5;
  
    NightmareFredbear = createSprite(600,300,50,50);
    NightmareFredbear.addImage(NightmareFredbearImg);  
    NightmareFredbear.scale = 0.5;
  
    ScrapBaby = createSprite(1500,900,50,50);
    ScrapBaby.addImage(ScrapBabyImg);
    ScrapBaby.scale = 0.5;
  
    Glitchtrap = createSprite(200,800,50,50);
    Glitchtrap.addImage(GlitchtrapImg);
    Glitchtrap.scale = 0.5;
  
    Puppet = createSprite(1200,500,100,100);
    Puppet.addImage(PuppetImg);
    Puppet.scale = 1.0;
  
    Springtrap = createSprite(1200,1000,50,50);
    Springtrap.addImage(SpringtrapImg);
    Springtrap.scale = 0.5; 
  
}

function draw() {
  background(0);
  
  if(keyDown('B')){
    BalloraS.play();
  }
  
  if(keyDown('Space')){
   Ballora.y = Ballora.y -5;
  }
  if(keyDown('S')){
    Ballora.y = Ballora.y +5;
  }
  if(keyDown('A')){
    Ballora.x = Ballora.x -5;
  }
  if(keyDown('W')){
    Ballora.x = Ballora.x  +5;
  }
 
  drawSprites(); 

}


  
  
