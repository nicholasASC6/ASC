let mouseX, mouseY;

function setup(){
    createCanvas(500, 500);
    mouseX = random(500);
    mouseY = random(500);
};

// mouseClicked();



function mouseDragged({clientX, clientY}){
    ellipse(clientX, clientY, 25, 25);
    rect(clientX, clientY, 25, 25);
};

function draw() {
    //background(120);
    //ellipse(mouseX, mouseY, 250, 250 );
    ellipse(50, 50, 50);
    rect(30, 450, 50, 50);
};