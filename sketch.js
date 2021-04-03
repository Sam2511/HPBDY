var balloons,balloons2, balloonImg;
var happyBirthday,happyBirthdayimage;

function preload(){
  balloonImg = loadImage("Balloons.png");
  happyBirthdayimage = loadImage("Happy_Birthday__1200x768.webp")
}

function setup() {
  createCanvas(1700,750);
  balloons = createSprite(350,625,10,10);
  balloons.addImage(balloonImg);
  balloons.scale = 0.5;

  balloons2 = createSprite(1450,625,10,10);
  balloons2.addImage(balloonImg);
  balloons2.scale = 0.5;

  happyBirthday = createSprite(900,575,10,10);
  happyBirthday.addImage(happyBirthdayimage);
  happyBirthday.scale = 0.7;
}

function draw() {
  background(0,250,150);
  
 
  x = Math.round(random(5,10));
  if(x === 5){
    fill("red");
  }

  if(x === 6){
    fill("Blue");
  }

  if(x === 7){
    fill("Blue");
  }

  if(x === 8){
    fill("Blue");
  }

  if(x === 9){
    fill("red");
  }

  if(x === 10){
    fill("red");
  }
  
  textSize(150);
  stroke("black")
  strokeWeight(100);
  text("HAPPY BIRTHDAY BUA", 30,325);
  
  drawSprites();
}


    
  
