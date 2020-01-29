var backgroundR = 51
var backgroundG = 102
var backgroundB = 255
var ringSize = 0
var ringColor= 256
var clouds = [];

function setup() {
    createCanvas(500, 500);
    angleMode(DEGREES);
    for (var i = 0; i < 4; i++) {
        clouds[i] = new Cloud(); 
    }
}

function draw(){
    //MOON
    background(backgroundR, backgroundG, backgroundB);
    fromBG = color(51, 102, 255);
    toBG = color(255, 204, 102);
    backgroundColor = lerpColor(fromBG, toBG, mouseX/width);
    background(backgroundColor);
    var moonConstrainX = constrain(mouseX, 60, 540);
    noStroke();
    fill(256);
    ellipse(moonConstrainX, moonConstrainX, 80, 80);
    
    //Moon shadow
    fill(backgroundR, backgroundG, backgroundB);
    fill(backgroundColor);
    ellipse(moonConstrainX*1.20, moonConstrainX, 80, 80); 

    if (mouseX <= width/2 && mouseY <=height/2 ){
        for (var i = 0; i < clouds.length; i++) {
            clouds[i].move();
            clouds[i].display();
        }
    }
}

function Cloud() {
    this.x = random(0, width);
    this.y = random(0, height);

    this.display = function() {
    stroke(255);
    strokeWeight(1);
    //fade();
    fill(255);
    ellipse(this.x, this.y, 24, 24);
    ellipse(this.x+10,this.y+10,24,24);
    ellipse(this.x+30,this.y+10,24,24);
    ellipse(this.x+30,this.y-10,24,24);
    ellipse(this.x+20,this.y-10,24,24);
    ellipse(this.x+40,this.y,24,24);
    }

    this.move = function() {
    this.x = this.x += 1 ;
    this.y = this.y + random(-1, 1);

    if(this.x >= width){
    this.x = 0;
    }
  }
    
}