let r = 0;
let g = 0;
let b = 255;

function setup(){
    createCanvas(600, 600);
};

function mousePressed(){
    if (r==0 && g==0 && b==255){
    r = 255;
    g = 0;
    b = 0;
    } 
    else if(r==255 && g==0 && b==0) {
    r = 0;
    g = 0;
    b = 255;};
};


// function mousePressed(){

//     r = random(255);
//     g = random(255);
//     b = random(255);
// };

function draw(){
    fill(r, g, b);
    square(1, 1, 600);
};

