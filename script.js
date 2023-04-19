/* Game opdracht
   Informatica - Emmauscollege Rotterdam
   Template voor een game in JavaScript met de p5 library

   Begin met dit template voor je game opdracht,
   voeg er je eigen code aan toe.
 */

/*
 * instellingen om foutcontrole van je code beter te maken 
 */
///<reference path="p5.global-mode.d.ts" />
"use strict"

/* ********************************************* */
/* globale variabelen die je gebruikt in je game */
/* ********************************************* */
const SPELEN = 1;
const GAMEOVER = 2;
const UITLEG = 8;
const KEY_SPACE = 32;
var spelStatus = SPELEN;
var aantal = 0;
var spelerX = 100; // x-positie van speler
var spelerY = 650; // y-positie van speler
var speler1 = 100;// x-positie van speler2
var speler2 = 650;// y-positie van speler2

var vijandX = 600; // x-positie van vijand
var vijandY = 500; // y-positie van vijand

var spelerSpringt = false;
var springSnelheid = 2; 
var springSnelheidStart = 4;
var zwaartekracht = 0.2;

/* ********************************************* */
/* functies die je gebruikt in je game           */
/* ********************************************* */

/**
 * Updatet globale variabelen met posities van speler, vijanden en kogels
 */
var beweegAlles = function() {
  // speler 1
  background('blue');
  if (keyIsDown(LEFT_ARROW)) {
    spelerX -= 5;
  }
   if (keyIsDown(RIGHT_ARROW)) {
    spelerX += 5;
  }

  if (keyIsDown(UP_ARROW)) {
    spelerY -= 5;
  }

  if(keyIsDown(KEY_SPACE)){
    spelerSpringt = true;
  }
  if (spelerSpringt === true); {
spelerY = spelerY - springSnelheid;
    springSnelheid = springSnelheid - 0.2;
    
  }

  
  // speler 2
  background('blue');
  //a
   if (keyIsDown(65)){
  speler1 = speler1 -=5; 
  }
  //d
   if (keyIsDown(68)){
  speler1 = speler1 +=5; 
  }
  //w
   if (keyIsDown(87)){
  speler2 = speler2 -=5; 
  }
  //s 
  

// vijand
background('blue');
fill ("red");
rect(vijandX - 25, vijandY - 25, 50, 50);

}
  // kogel


/**
 * Checkt botsingen
 * Verwijdert neergeschoten dingen
 * Updatet globale variabelen punten en health
 */
var verwerkBotsing = function() {
  // botsing speler tegen vijand
if(spelerX - vijandX < 50 &&
  spelerX - vijandX >-50 &&
  spelerY - vijandY <50 &&
  spelerY - vijandY > -50)  {
  aantal = aantal + 1
  console.log("Botsing"+ aantal);
  }

if(speler1 - vijandX < 50 &&
  speler1 - vijandX >-50 &&
  speler2 - vijandY <50 &&
  speler2 - vijandY > -50) {
  aantal = aantal + 1
  console.log("Botsing"+ aantal);
  }
  
  // botsing kogel tegen vijand

  // update punten en health

};

/**
 * Tekent spelscherm
 */
var tekenAlles = function() {
  // achtergrond
background('blue');
  fill("green");
  rect(0,690,1500,700);
fill ("red");
rect(vijandX - 25, vijandY - 25, 50, 50);
   
  // speler 2
  fill("white")
  rect(speler1 - 25, speler2 - 25, 50, 50);
fill("black")
  ellipse(speler1, speler2, 10, 10);
  fill("purple")
  ellipse(speler1, speler2, 80, 80);
  // kogel

  // speler 1
fill("white")
  rect(spelerX - 25, spelerY - 25, 50, 50);
fill("black")
  ellipse(spelerX, spelerY, 10, 10);
  fill("yellow")
  ellipse(spelerX, spelerY, 80, 80);

  // vijand
  

  // punten en health
};

/**
 * return true als het gameover is
 * anders return false
 */
var checkGameOver = function() {
   if(spelerX - vijandX < 50 &&
  spelerX - vijandX >-50 &&
  spelerY - vijandY <50 &&
  spelerY - vijandY > -50)  {
  aantal = aantal + 1
  console.log("Botsing"+ aantal)
    return true;
  }
  
if(speler1 - vijandX < 50 &&
  speler1 - vijandX >-50 &&
  speler2 - vijandY <50 &&
  speler2 - vijandY > -50) {
  aantal = aantal + 1
  console.log("Botsing"+ aantal);
  return true;
  }
  // check of HP 0 is , of tijd op is, of ...
  return false;
};

/* ********************************************* */
/* setup() en draw() functies / hoofdprogramma   */
/* ********************************************* */

/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);

  
  // Kleur de achtergrond blauw, zodat je het kunt zien
background('blue');
}

/**
 * draw
 * de code in deze functie wordt 50 keer per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
  

function draw() {
  if (spelStatus === SPELEN) {
    beweegAlles();
    verwerkBotsing();
    tekenAlles();
    if (checkGameOver()) {
      spelStatus = GAMEOVER;
    }
    console.log("spelen");
  }
  
  if (spelStatus === GAMEOVER) {
    //teken game-over scherm
    console.log("game over");
    textSize(50);
    fill("white");
    text("game over druk enter voor start", 100, 100);
    if (keyIsDown(13)) {//wenter 
      spelerX = 100;
      spelerY = 650;
      speler1 = 150;
      speler2 = 650;
    spelStatus = SPELEN; }
   
  }
  if (spelStatus === UITLEG) {
    // teken uitleg scherm
    console.log("uitleg");
   
  }
  
}
