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
const VICTORY = 6;
const UITLEG = 8;
const UP_ARROW = 38;

var spelStatus = UITLEG;
var aantal = 0;

var vloerY = 650;

var spelerX = 100; // x-positie van speler
var spelerY = vloerY; // y-positie van speler
var speler1 = 200;// x-positie van speler2
var speler2 = vloerY;// y-positie van speler2

var vijandX = 1000; // x-positie van vijand
var vijandY = 500; // y-positie van vijand

var vijandX2 = 150;
var vijandY2 = 200;

var spelerSpringt = false;
var springSnelheid = 0;
var springSnelheidStart = 13;
var zwaartekracht = 0.2;

var spelerSpringt2 = false;
var springSnelheid2 = 0;
var springSnelheidStart2 = 13;
var zwaartekracht2 = 0.2;

var speed= 5;
var speed2 = 1.5;
var speed3 = 2.5;
var speed4 = 1.5;
var speed5 = 2.5;
var score = 0;

var banaanpunt= 0;
var banaanX = 500;
var banaanY = 500;

var img;
var img2;
var img3;
var img4;
var img5;
var img6;
var img7;
var img8;
var img9;
/* ********************************************* */
/* functies die je gebruikt in je game           */
/* ********************************************* */

/**
 * Updatet globale variabelen met posities van speler, vijanden en kogels
 */
var beweegAlles = function() {
  // speler 1
  background('blue');
   if (keyIsDown(LEFT_ARROW) && spelerX > 90) {
    spelerX = spelerX - speed;
  }
  if (keyIsDown(RIGHT_ARROW) && spelerX < 1250) {
    spelerX = spelerX + speed;
  }

  if (spelerSpringt === false && keyIsDown(UP_ARROW)) {
    //spelerY = spelerY - springSnelheid;
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
 
   if (keyIsDown(65) && speler1 > 90) {
    speler1 = speler1 - speed;
  }
  if (keyIsDown(68) && speler1 < 1250) {
    speler1 = speler1 + speed;
  }
  //w
  if (spelerSpringt2 === false && keyIsDown(87)) {
    //speler2 = speler2 - springSnelheid;
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
   vijandX += speed2 * speed3;
  if (vijandX <= 75 || vijandX >= 1200) {
    speed2 = -speed2;
  }
 

   vijandX2 += speed4 * speed5;
  if (vijandX2 <= 75 || vijandX2 >= 1200) {
    speed4 = -speed4;
  }

   if(score >= 10) {
    speed3 = speed3 + 0.001
     speed5 = speed5 + 0.001
   }
  if(score >= 30) {
    speed3 = speed3 + 0.001
     speed5 = speed5 + 0.001
   }
  if(score >= 60) {
    speed3 = speed3 + 0.001
     speed5 = speed5 + 0.001
   }
  if(score >= 120) {
    speed3 = speed3 + 0.001
     speed5 = speed5 + 0.001
   }
};
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

  if (spelerX - vijandX2 < 50 &&
    spelerX - vijandX2 > - 50 &&
    spelerY - vijandY2 < 50 &&
    spelerY - vijandY2 > - 50) {
    aantal = aantal + 1
    console.log("Botsing" + aantal);
  }

  if (speler1 - vijandX2 < 50 &&
    speler1 - vijandX2 > -50 &&
    speler2 - vijandY2 < 50 &&
    speler2 - vijandY2 > -50) {
    aantal = aantal + 1
    console.log("Botsing" + aantal);
  }
  // botsing kogel tegen vijand

  // update punten en health
   if (spelerX - banaanX < 50 && 
    spelerX - banaanX > -50 &&
    spelerY - banaanY < 50 &&
    spelerY - banaanY > -50) {
    banaanpunt = banaanpunt + 1;
    banaanX = random(1000, 400)
    banaanY = random(200, 400)
    console.log('punt');
  }
    if (speler1 - banaanX < 50 && 
    speler1 - banaanX > -50 &&
    speler2 - banaanY < 50 &&
    speler2 - banaanY > -50) {
    banaanpunt = banaanpunt + 1;
    banaanX = random(1000, 400)
    banaanY = random(200, 400)
    console.log('punt');
  }
  
 score = score +0.02
};

/**
 * Tekent spelscherm    
 */
var tekenAlles = function() {
  // achtergrond
  background(img5);
 
 image(img4, vijandX - 100, vijandY - 100, 200, 140);

  image(img4, vijandX2 - 100, vijandY2 - 100, 200, 140);
  // speler
  image(img2, speler1 - 100, speler2 - 100, 140, 140);
  // kogel
  // speler 1
  image(img, spelerX - 100, spelerY - 100, 140, 140);
  // vijand
  // punten en health
image(img7, banaanX - 25, banaanY - 25, 100, 100);
  
  fill("yellow");
  textSize(100);
  text(floor(score), 600,100);

  fill("blue");
  textSize(50);
   text("punten: " + banaanpunt , 100, 100);
};
//Verhoog de score
  function Banaangepakt() { 
  if (spelerX === banaanX && banaanY === banaanY) {
    banaangeplaatst(); 
     banaanpunt++; 
  if (speler1 === banaanX && banaanY === banaanY) {
    banaangeplaatst();
     banaanpunt++;
  }
  }
}
/**
 * return true als het gameover is
 * anders return false
 */
var checkGameOver = function() {
  if (spelerX - vijandX < 100 &&
    spelerX - vijandX > -100 &&
    spelerY - vijandY < 100 &&
    spelerY - vijandY > -100) {
    aantal = aantal + 1
    console.log("Botsing" + aantal)
    return true;
  }

  if (speler1 - vijandX < 100 &&
    speler1 - vijandX > -100 &&
    speler2 - vijandY < 100 &&
    speler2 - vijandY > -100) {
    aantal = aantal + 1
    console.log("Botsing" + aantal);
    return true;
  }
     if (spelerX - vijandX2 < 100 &&
    spelerX - vijandX2 > -100 &&
    spelerY - vijandY2 < 100 &&
    spelerY - vijandY2 > -100) {
    aantal = aantal + 1
    console.log("Botsing" + aantal)
    return true;
  }

  if (speler1 - vijandX2 < 100 &&
    speler1 - vijandX2 > -100 &&
    speler2 - vijandY2 < 100 &&
    speler2 - vijandY2 > -100) {
    aantal = aantal + 1
    console.log("Botsing" + aantal);
    return true;
  }
  // check of HP 0 is , of tijd op is, of ...
  return false;
};

var CheckVictory = function() {
  if(banaanpunt <= 10) {
  return true;
  }
  return false;
  };

/* ********************************************* */
/* setup() en draw() functies / hoofdprogramma   */
/* ********************************************* */
function preload() {
  img = loadImage('afbeeldingen/min.png');
  img2 = loadImage('afbeeldingen/gru.png');
  img3 = loadImage('afbeeldingen/blad.png');
  img4 = loadImage('afbeeldingen/ufo.gif');
  img5 = loadImage('afbeeldingen/achtergrond.gif');
  img6 = loadImage('afbeeldingen/beginscherm.png');
  img7 = loadImage('afbeeldingen/banaanpunten.png');
  img8 = loadImage('afbeeldingen/minions.jpg');
  img9 = loadImage('afbeeldingen/play.png');
}
/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);

}

var reset = function(){
  spelerX = 100;
  spelerY= vloerY;
  speler1 = 200;
  speler2 = vloerY;
  vijandX = 1000;
  vijandY = 500;
  vijandX2 = 150;
  vijandY2 = 200;
  score = 0;
  banaanpunt = 0;
  speed2 = 1.5;
  speed3 = 2.5;
  speed4 = 1.5;
  speed5 = 2.5;
  
};
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
};
  if (spelStatus === GAMEOVER) {
    //teken game-over scherm
    console.log("game over");
    textSize(50);
    fill("white");
    image(img3, 350, 10, 650, 650);
    reset();
    if (keyIsDown(32)) {//spatie
      spelerX = 100;
      spelerY = vloerY;
      speler1 = 200;
      speler2 = vloerY;
      spelStatus = SPELEN;
      banaanX = random(1000, 400)
      banaanY = random(200, 400)
    }
  }
  if (spelStatus === UITLEG) { 
    // teken uitleg scherm
    console.log("uitleg");
    image(img9, 0,0, 1280, 720);
    if (keyIsDown(32)) {
      spelStatus = SPELEN;
    }
  }

  if (spelStatus === VICTORY){
    // teken win scherm
    console.log("victory");
    image(img8, 350, 10, 650, 650);
    if (keyIsDown(32)) {
      banaanpunt = 10;
      spelStatus = SPELEN;
    }
  }
}