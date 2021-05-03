const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var bg1,bg2,bg3,bg4,bg5,bg6,bg7,bg8,bg9,bg10,bg11,bg12
var bg ;
var datetime

function preload() {
bg1 = loadImage("sunrise1.png")
bg2 = loadImage("sunrise2.png")
bg3 = loadImage("sunrise3.png")
bg4 = loadImage("sunrise4.png")
bg5 = loadImage("sunrise5.png")
bg6 = loadImage("sunrise6.png")
bg7 = loadImage("sunset7.png")
bg8 = loadImage("sunset8.png")
bg9 = loadImage("sunset9.png")
bg10 = loadImage("sunset10.png")
bg11 = loadImage("sunset11.png")
bg12 = loadImage("sunset12.png")

getTime()

}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;
//console.log(datetime)
  
}

function draw(){

    if(backgroundImg){
        background(backgroundImg);
        text("Date:"+datetime,50,50)
      } 

    Engine.update(engine);

}

async function getTime(){
    var response = await fetch('http://worldtimeapi.org/api/timezone/Asia/Kolkata');
    var responseJson = await response.json();
    console.log(responseJson);
    datetime = responseJson.datetime;
    console.log(datetime);
    var hour = datetime.slice (11,13);
    console.log(hour);
    if(hour>=04 && hour<=06){
     bg = bg1
    }
  else if(hour>=06 && hour<=08){
    bg = bg2
  }
  else if(hour>=08 && hour<=10){
    bg = bg3
  }
  else if (hour>=10 && hour<=12){
    bg = bg4
  }
  else if(hour>=12 && hour<=14){
    bg = bg5
  }
  else if(hour>=14 && hour<=16){
    bg = bg6
}
else if(hour>=16 && hour<=18){
    bg = bg7
}
else if(hour>=18 && hour<=20){
    bg = bg8
}
else if(hour>=20 && hour<=22){
    bg = bg9
}
else if(hour>=22 && hour<=24){
    bg = bg10
}
else if(hour>=24 && hour<=02){
    bg = bg11
}
else if(hour>=02 && hour<=04){
    bg = bg12
}

backgroundImg = bg

 console.log(backgroundImg);
}  
