
var char, charimg, charimg_2;

var porta, portaimg;
var plataforma, plataformaimg;
var fundo, fundoimg;
var somFundo;

var estado = 'JOGAR'

var score = 0;

function preload() {
  
  charimg = loadImage("ghost-standing.png");
  charimg_2 = loadImage('ghost-jumping.png');
  
  portaimg = loadImage('door.png');
  plataformaimg = loadImage('climber.png');
  
  somFundo = loadSound('spooky.wav');
  
  fundoimg = loadImage('tower.png');
  
}

function setup() {
  createCanvas(600, 600);
  
  char = createSprite(300, 500);
  char.addImage('ghost', charimg_2);
  char.scale = 0.4;
  
  fundo = createSprite(300, 300, 600, 600);
  fundo.addImage('torre', fundoimg);
  
  char.depth = char.depth+1;
  score.depth = score.depth+1;
  fundo.depth = fundo.depth-1;
  
}

function draw() {
  background(255);
  
    fill("red")
    text("Pontuação: " + score, 230, 230);
  
  if(estado === 'JOGAR') {
    
    fundo.velocityY = 2;
    if(fundo.y > 600) {
      fundo.y = 100;
    }
    
    char.velocityY = char.velocityY + 0.8;
    
    if(keyDown('space')) {
      
      char.velocityY = -10;
      
    }
    

    
  }
  
  drawSprites();
}

