
var backgroundImg;
var john, johnRun;
var snow, snow1, snowimg1,snowimg2;

function preload() {
  getBackgroundImg();
johnRun = loadAnimation("1-removebg-preview.png","2-removebg-preview.png","3-removebg-preview.png","4.png","5.png","6.png")
snowimg1 = loadImage("snow6-removebg-preview.png")
}

function setup() {
  createCanvas(800,400);
  john = createSprite(50, 300, 50, 50);
  john.velocityX = 5;
  john.addAnimation("running", johnRun);

  snow = createSprite(200,50,50,50)
  snow.velocityY = 7
  snow.addImage("snow1",snowimg1);
  snow.scale = 0.4
  
  snow1 = createSprite(400,0,50,50)
  snow1.velocityY = 7
  snow1.addImage("snow1",snowimg1);
  snow1.scale = 0.4
}




function draw() {
  if(backgroundImg)

  background(backgroundImg); 


  drawSprites();
}

async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=06 && hour<=19){
        bg = "snow1.jpg";
    }
    else{
        bg = "snow2.jpg";
    }

    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
  }