//Create variables here
var dog, happyDog, database, foodS, foodStock;

function preload()
{
  //load images here
  dog = loadImage("dogImg.png");
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();
  dog = createSprite()
  foodStock=database.ref('Food');
  foodStock.on("value", readStock);
}


function draw() {  

  drawSprites();
  //add styles here
  background(46, 139, 87);
  dog.addImage(dog);
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
  }
textSize(20);
text("Press UP_ARROW to feed the dog milk ", 200, 200);
}

function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }

  database.ref('/').update({
    Food:x
  })
}


