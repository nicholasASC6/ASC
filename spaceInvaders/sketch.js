function setup(){
    createCanvas (1265, 575);

};


let x = 610;
let y = 525;
let p1x = x + 25;
let p2x = p1x + 25;
let p3x = p1x - 25;
let p23y = y + 0;

function draw() {

  if (keyIsDown(LEFT_ARROW)) {
    x -= 5;
    p1x -= 5;
    p2x -= 5;
    p3x -= 5;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    x += 5;
    p1x += 5;
    p2x += 5;
    p3x += 5;
  }

  if (x > 1265) {
      x = 0;
  }

  if (x < 0) {
      x = 1265;}

  if (p1x > 1265) {
        p1x = 0;
    }
  
  if (p1x < 0) {
        p1x = 1265;}

  if (p2x > 1265) {
            p2x = 0;
        }
      
  if (p2x < 0) {
            p2x = 1265;}

  if (p3x > 1265) {
                p3x = 0;
            }
          
  if (p3x < 0) {
                p3x = 1265;}

//   drawCircle();


//   if (keyIsDown(UP_ARROW)) {
//       y -=5;
 background(60, 30 ,110);
  // clear();
  fill('white');
  ellipse(p1x, y, 5, 5);
  fill(60, 30 ,110);
  noStroke();
  rect(x, 500, 50, 50);
  fill('red');
  triangle(p1x, 500, p2x, 550, p3x, 550)

  
      fill('purple')
      // row a
      rect(50, 20, 50, 25);
      rect(150, 20, 50, 25);
      rect(250, 20, 50, 25);
      rect(350, 20, 50, 25);
      rect(450, 20, 50, 25);
      rect(550, 20, 50, 25);
      rect(650, 20, 50, 25);
      rect(750, 20, 50, 25);
      rect(850, 20, 50, 25);
      rect(950, 20, 50, 25);
      rect(1050, 20, 50, 25);
      rect(1150, 20, 50, 25);
      // row b
      rect(50, 60, 50, 25);
      rect(150, 60, 50, 25);
      rect(250, 60, 50, 25);
      rect(350, 60, 50, 25);
      rect(450, 60, 50, 25);
      rect(550, 60, 50, 25);
      rect(650, 60, 50, 25);
      rect(750, 60, 50, 25);
      rect(850, 60, 50, 25);
      rect(950, 60, 50, 25);
      rect(1050, 60, 50, 25);
      rect(1150, 60, 50, 25);
       // row c
       rect(50, 100, 50, 25);
       rect(150, 100, 50, 25);
       rect(250, 100, 50, 25);
       rect(350, 100, 50, 25);
       rect(450, 100, 50, 25);
       rect(550, 100, 50, 25);
       rect(650, 100, 50, 25);
       rect(750, 100, 50, 25);
       rect(850, 100, 50, 25);
       rect(950, 100, 50, 25);
       rect(1050, 100, 50, 25);
       rect(1150, 100, 50, 25);
        // row d
      rect(50, 140, 50, 25);
      rect(150, 140, 50, 25);
      rect(250, 140, 50, 25);
      rect(350, 140, 50, 25);
      rect(450, 140, 50, 25);
      rect(550, 140, 50, 25);
      rect(650, 140, 50, 25);
      rect(750, 140, 50, 25);
      rect(850, 140, 50, 25);
      rect(950, 140, 50, 25);
      rect(1050, 140, 50, 25);
      rect(1150, 140, 50, 25);
};


 

let directions = [true, false];
let yDirection = directions[0];

function drawCircle(){
    //for( y = 525 ; y > 0 ; y -= 5 )
    //console.log('we')
};
