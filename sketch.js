
var best=0;
function setup() {
  createCanvas(2000,200);
        background("#9E5ED5");
    
}

function draw() {
     
    fill("#E8AEB7");
    stroke("#91A2D9");
    strokeWeight(5);
     ellipse(random(width),random(height),100,100,
            );
   fill("#91A2D9");
    stroke("#E8AEB7");
    strokeWeight(5);
     triangle(100, 100,best=0,100,100, best=0);
   fill("#91A2D9");
    stroke("#E8AEB7");
    strokeWeight(5);
    triangle(mouseX, 100,best=0,mouseY,100, best=0);
   fill("#E8AEB7");
    stroke("#91A2D9");
    strokeWeight(5);
     ellipse(random(width),random(height),100,100,
            );
   
}
function mousePressed(){
   if(best>50){
       best=0;
   }
    else{best=best+5;}
}