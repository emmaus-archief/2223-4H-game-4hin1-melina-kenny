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
const UP_ARROW = 38;


var spelStatus = SPELEN;
var aantal = 0;

var vloerY = 650;

var spelerX = 100; // x-positie van speler
var spelerY = 500; // y-positie van speler
var speler1 = 100;// x-positie van speler2
var speler2 = 500;// y-positie van speler2

var vijandX = 100; // x-positie van vijand
var vijandY = vloerY; // y-positie van vijand

var spelerSpringt = false;
var springSnelheid = 0;
var springSnelheidStart = 8;
var zwaartekracht = 0.2;

var spelerSpringt2 = false;
var springSnelheid2 = 0;
var springSnelheidStart2 = 8;
var zwaartekracht2 = 0.2;

var img;
var img2;
var img3;
var img4;
var img5;

/* ********************************************* */
/* functies die je gebruikt in je game           */
/* ********************************************* */

/**
 * Updatet globale variabelen met posities van speler, vijanden en kogels
 */
var beweegAlles = function() {
  // speler 1

  if (keyIsDown(LEFT_ARROW)) {
    spelerX -= 5;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    spelerX += 5;
  }

  if (spelerSpringt === false && keyIsDown(UP_ARROW)) {
    spelerY = spelerY - springSnelheid;
    spelerSpringt = true;
    springSnelheid = springSnelheidStart;
  }

  if (spelerSpringt === true) {
    spelerY = spelerY - springSnelheid;
    springSnelheid = springSnelheid - zwaartekracht;
  }
  if (spelerY > 650) {
    spelerSpringt = false;
  }
  


  // speler 2

  //a
  if (keyIsDown(65)) {
    speler1 = speler1 -= 5;
  }
  //d
  if (keyIsDown(68)) {
    speler1 = speler1 += 5;
  }
  //w
  if (spelerSpringt2 === false && keyIsDown(87)) {
    speler2 = speler2 - springSnelheid2;
    spelerSpringt2 = true;
    springSnelheid2 = springSnelheidStart2;
  }
  //s
  if (spelerSpringt2 === true) {
    speler2 = speler2 - springSnelheid2;
    springSnelheid2 = springSnelheid2 - zwaartekracht2;
  }
  if (speler2 > 650) {
    spelerSpringt2 = false;
  }



  // vijand

  fill("red");
  rect(vijandX - 650, vijandY - 250, 50, 50);

}
// kogel


/**
 * Checkt botsingen
 * Verwijdert neergeschoten dingen
 * Updatet globale variabelen punten en health
 */
var verwerkBotsing = function() {
  // botsing speler tegen vijand
  if (spelerX - vijandX < 50 &&
    spelerX - vijandX > - 50 &&
    spelerY - vijandY < 50 &&
    spelerY - vijandY > - 50) {
    aantal = aantal + 1
    console.log("Botsing" + aantal);
  }

  if (speler1 - vijandX < 50 &&
    speler1 - vijandX > -50 &&
    speler2 - vijandY < 50 &&
    speler2 - vijandY > -50) {
    aantal = aantal + 1
    console.log("Botsing" + aantal);
  }

  // botsing kogel tegen vijand

  // update punten en health

};

/**
 * Tekent spelscherm    
 */
var tekenAlles = function() {
  // achtergrond
  background(143, 188, 240);
 
 
  
  fill("green");
  rect(150, 400, 250, 40);

  fill("green");
  rect(750, 250, 250, 40);

  fill("green");
  rect(900, 500, 250, 40);

  // speler 2

  image(img2, speler1 - 100, speler2 - 100, 140, 140);

  // kogel

  // speler 1

  image(img, spelerX - 100, spelerY - 100, 140, 140);

  // vijand

  // punten en health
};

/**
 * return true als het gameover is
 * anders return false
 */
var checkGameOver = function() {
  if (spelerX - vijandX < 50 &&
    spelerX - vijandX > -50 &&
    spelerY - vijandY < 50 &&
    spelerY - vijandY > -50) {
    aantal = aantal + 1
    console.log("Botsing" + aantal)
    return true;
  }

  if (speler1 - vijandX < 50 &&
    speler1 - vijandX > -50 &&
    speler2 - vijandY < 50 &&
    speler2 - vijandY > -50) {
    aantal = aantal + 1
    console.log("Botsing" + aantal);
    return true;
  }
  // check of HP 0 is , of tijd op is, of ...
  return false;
};

/* ********************************************* */
/* setup() en draw() functies / hoofdprogramma   */
/* ********************************************* */
function preload() {
  img = loadImage('min.png');
  img2 = loadImage('gru.png');
  img3 = loadImage('blad.png');
  img4 = loadImage('mini.png');
  img5 = loadImage('grusprong.png');

}
/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);



  background(143, 188, 240);
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
    image(img3, 350, 10, 650, 650);

    if (keyIsDown(32)) {//spatie
      spelerX = 100;
      spelerY = 500;
      speler1 = 100;
      speler2 = 500;
      spelStatus = SPELEN;
    }

  }
  if (spelStatus === UITLEG) {
    // teken uitleg scherm
    console.log("uitleg");

  }

}
