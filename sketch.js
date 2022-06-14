//variáveis da bolinha

let xBolinha = 300;
let yBolinha = 200;
let diametro = 17;
let raio = diametro / 2;

//velocidade da bolinha

let velocidadexBolinha = 6;
let velocidadeyBolinha = 6;

//variáveis da raquete

let xRaquete = 5;
let yRaquete = 150;
let largRaquete = 7;
let altRaquete = 90;

let colidiu = false

//variáveis do oponente

let xRaqueteoponente = 585;
let yRaqueteoponente = 150;
let velocidadeYoponente;

//placar do jogo

let meuspontos = 0
let pontosoponente = 0

//sons do jogo

let raquetada;
let ponto;
let trilha;

function preload(){
  trilha = loadSound("trilha.mp3");
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3")
}

function setup() {
  createCanvas(600, 400);
  trilha.loop()
}

function draw() {
  background(0);
  mostraBolinha(); 
  movimentaBolinha();
  verificacolisaoborda();
  mostraraquete(xRaquete, yRaquete);
  movimentaraquete();
  verificacolisaoraquete ();
  colisaoraquete(xRaquete, yRaquete);
  colisaoraquete(xRaqueteoponente, yRaqueteoponente)
  mostraraquete(xRaqueteoponente, yRaqueteoponente);
  movimentaraqueteoponente();
  mostraplacar();
  marcapontos();
  
}
function mostraBolinha (){
  circle(xBolinha,yBolinha,diametro); 
}

function movimentaBolinha(){
  xBolinha += velocidadexBolinha;
  yBolinha += velocidadeyBolinha;
}

function verificacolisaoborda(){
  if (xBolinha + raio > width || 
      xBolinha - raio < 0){
    velocidadexBolinha *= -1;   
  }
  if (yBolinha + raio > height || 
      yBolinha - raio < 0){
    velocidadeyBolinha *= -1;
  }
}

function mostraraquete(x,y){
  rect(x, y, largRaquete, altRaquete)
}


function movimentaraquete(){
  if (keyIsDown(UP_ARROW)){
    yRaquete -= 10; 
  }
  if (keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
  }
}

function verificacolisaoraquete(){
  if (xBolinha - raio < xRaquete + largRaquete && 
      yBolinha - raio < yRaquete + altRaquete && 
      yRaquete + raio > yRaquete){
    velocidadexBolinha *= -1;
    raquetada.play();
  }
}

function colisaoraquete(x,y){
  colidiu =
  collideRectCircle(x, y, largRaquete, altRaquete, xBolinha, yBolinha, raio);
  if (colidiu){
    velocidadexBolinha *= -1;
    raquetada.play();
  }
}

function movimentaraqueteoponente(){
 if (keyIsDown(87)){
    yRaqueteoponente -= 10; 
  }
  if (keyIsDown(83)){
    yRaqueteoponente += 10;
  }
}

function mostraplacar(){
  stroke(255)
  textAlign(CENTER);
  textSize(25);
  fill(color(51,153,255));
  rect(250,15,40,25);
  fill(255);
  text(meuspontos, 270, 35);
  fill(color(51,153,255));
  rect(350,15,40,25);
  fill(255);
  text(pontosoponente, 370,35);
}

function marcapontos(){
  if (xBolinha > 590){
    meuspontos += 1;
    ponto.play();
  }  
  if (xBolinha < 10){
    pontosoponente += 1;
    ponto.play();
  }
  }
