let r, g, b;

function setup (){
    createCanvas(700, 400);
    r = random(255);
    g = random(255);
    b = random(255);
};

function mousePressed(){
    r = random(255);
    g = random(255);
    b = random(255);
};

function draw () {
    background(120);
    strokeWeight(6);
    stroke(r, g, b);
    fill(r, g, b, 120);
    ellipse(300, 300, 400, 400);
};