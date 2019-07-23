let x = 30;
let y = 30;
let directions = [true, false];
let xDirection = directions[0];
function setup(){
    createCanvas(600, 600);
    background(0, 255, 255);
};

function drawCircle(){
    console.log(x)

    if(xDirection == true && x < 570) {
        x += .1;
    }
    else if(xDirection == false && x > 10){
        console.log('reverse');
        x -= .1;
    }
    if(x == 570 || x == 10) {
        xDirection = !xDirection;
    }
    circle(x, y, 20);
};

function draw(){
    rect(1, 2, 500, 500);
    drawCircle();
};