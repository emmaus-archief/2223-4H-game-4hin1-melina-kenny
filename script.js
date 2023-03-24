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
var spelStatus = SPELEN;

var spelerX = 50; // x-positie van speler
var spelerY = 600; // y-positie van speler
var speler1 = 100;// x-positie van speler2
var speler2 = 650;// y-positie van speler2

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

  if (keyIsDown(DOWN_ARROW)) {
    spelerY += 5;
  }

  
  // speler 2
  background('blue');
  //a
   if (keyIsDown(65)){
  speler1 = speler1 -=1; 
  }
  //d
   if (keyIsDown(68)){
  speler1 = speler1 +=1; 
  }
  //w
   if (keyIsDown(87)){
  speler2 = speler2 -=1; 
  }
  //s 
   if (keyIsDown(83)){
  speler2 = speler2 +=1; 
  }
}

  // kogel


/**
 * Checkt botsingen
 * Verwijdert neergeschoten dingen
 * Updatet globale variabelen punten en health
 */
var verwerkBotsing = function() {
  // botsing speler tegen vijand

  // botsing kogel tegen vijand

  // update punten en health

};

/**
 * Tekent spelscherm
 */
var tekenAlles = function() {
  // achtergrond

  // speler 2
fill("black")
  ellipse(speler1, speler2, 50, 50);
  fill("purple")
  ellipse(speler1, speler2, 100, 100);
  // kogel

  // speler 1
fill("white")
  rect(spelerX - 25, spelerY - 25, 50, 50);
fill("black")
  ellipse(spelerX, spelerY, 10, 10);
  fill("yellow")
  ellipse(spelerX, spelerY,80,80);

  // punten en health
};

/**
 * return true als het gameover is
 * anders return false
 */
var checkGameOver = function() {
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
  }
  if (spelStatus === GAMEOVER) {}
    // teken game-over scherm
}